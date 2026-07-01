/**
 * WordPress REST API fetch utility with retry logic and module-level caching.
 *
 * Uses the WordPress REST API (/wp-json/wp/v2/posts) instead of GraphQL
 * because WPGraphQL is not active on admin.startupyeti.com. Base URL is
 * hardcoded to match the [category]/[slug].astro page that already works
 * on Cloudflare's build servers.
 *
 * MODULE-LEVEL CACHE: All posts and categories are fetched ONCE per build
 * and reused across every page render. Without this cache the build made
 * ~17 sequential requests against admin.startupyeti.com (one categories +
 * one posts request per category page, plus index/blog) and intermittently
 * tripped a WAF or rate-limit returning HTTP 415 mid-build.
 *
 * RETRY POLICY: 3 attempts with 2s/4s/6s backoff for network errors,
 * 5xx server errors, 429 rate limits, AND 415 (which on a GET request is
 * almost always a transient server-config issue — never a true client
 * error). All other 4xx errors abort immediately.
 *
 * If all retries fail the function throws — this fails the Cloudflare
 * Pages build so it preserves the previous good deployment instead of
 * shipping a blank site.
 */

const WORDPRESS_BASE = "https://admin.startupyeti.com";
const MAX_RETRIES = 5;
const BASE_DELAY_MS = 2000;

/**
 * Deprecated WordPress categories → active site categories.
 *
 * ~33 posts in WordPress are still assigned to retired categories. Without
 * this remap they generate at URLs like /sales/{slug}, which _redirects
 * immediately 301s to the category homepage — so the article itself is
 * unreachable on the live site (orphaned content, found in the June 2026
 * GSC coverage audit). Remapping at build time makes every post render at
 * a live, indexable URL (e.g. /business/{slug}) everywhere a category slug
 * or name is derived: routes, listing links, breadcrumbs, schema.
 *
 * Must stay in sync with the redirect map in public/_redirects and the
 * deprecated-category tables in .claude/CLAUDE.md.
 */
export const DEPRECATED_CATEGORY_REMAP: Record<
  string,
  { slug: string; name: string }
> = {
  sales: { slug: "business", name: "Business" },
  trends: { slug: "startup", name: "Startup" },
  "content-marketing": { slug: "marketing", name: "Marketing" },
  "customer-experience": { slug: "business", name: "Business" },
  employment: { slug: "startup", name: "Startup" },
  leadership: { slug: "team-management", name: "Team Management" },
  wellbeing: { slug: "founder-wellbeing", name: "Founder Wellbeing" },
};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function restGet<T = any>(url: string): Promise<T> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(url, {
        headers: {
          // Browser-like UA: Imunify360 bot-protection on the WP host blocks
          // obvious automation user-agents. X-SY-Build still identifies our
          // build traffic in server logs without tripping the bot filter.
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
          Accept: "application/json",
          "X-SY-Build": "astro-static-generator",
        },
      });

      if (!response.ok) {
        throw new Error(
          `WordPress REST API returned HTTP ${response.status} on attempt ${attempt}`
        );
      }

      const data = (await response.json()) as any;

      // Imunify360 bot-protection returns HTTP 200 with a JSON block body
      // (not an error status), which otherwise slips past this retry loop and
      // aborts the whole build. Detect it and throw a retryable error — the
      // block is intermittent, so a later attempt in the backoff window
      // usually gets through.
      if (
        data &&
        typeof data === "object" &&
        !Array.isArray(data) &&
        typeof data.message === "string" &&
        /imunify360|bot[- ]?protection|access denied/i.test(data.message)
      ) {
        throw new Error(
          `WordPress fetch blocked by bot-protection on attempt ${attempt}: ${data.message.slice(0, 80)}`
        );
      }

      return data as T;
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));

      // Retry-eligible errors: network failures, 5xx server errors,
      // 429 rate limits, AND 415 (transient on GET requests).
      const status = lastError.message.match(/HTTP (\d+)/)?.[1];
      const statusNum = status ? parseInt(status, 10) : 0;
      const isRetryable =
        !status || // network/parse error (no status)
        statusNum >= 500 ||
        statusNum === 429 ||
        statusNum === 415;

      if (!isRetryable || attempt === MAX_RETRIES) {
        break;
      }

      const delay = BASE_DELAY_MS * attempt; // 2s, 4s, 6s
      console.warn(
        `[wordpress] Attempt ${attempt} failed: ${lastError.message}. Retrying in ${delay}ms...`
      );
      await sleep(delay);
    }
  }

  throw new Error(
    `[wordpress] All ${MAX_RETRIES} attempts to fetch from WordPress failed. Last error: ${lastError?.message}. Build aborted to preserve the previous good deployment.`
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Module-level cache: fetched once per build, reused everywhere.
// ─────────────────────────────────────────────────────────────────────────

let postsCache: Promise<any[]> | null = null;
let categoriesCache: Promise<any[]> | null = null;

/** Fetch all published posts once, paginated. Cached for the build.
 *
 * Uses `_fields` to limit the response to ONLY what category/blog/index
 * pages actually render. Critically excludes `content` (the largest field
 * by far). Without this, the response can exceed limits that some WAFs
 * and CDN edges configure for `_embed`-bearing requests, returning HTTP
 * 415 — which is what was happening intermittently.
 *
 * Field list mirrors the [category]/[slug].astro page's working pattern.
 */
function getAllRawPosts(): Promise<any[]> {
  if (postsCache) return postsCache;
  postsCache = (async () => {
    const allPosts: any[] = [];
    let page = 1;
    const fields =
      "id,slug,title,excerpt,date,categories,_links,_embedded";
    while (true) {
      const url =
        `${WORDPRESS_BASE}/wp-json/wp/v2/posts` +
        `?per_page=100&page=${page}` +
        `&status=publish&orderby=date&order=desc&_embed` +
        `&_fields=${fields}`;
      let batch: unknown;
      try {
        batch = await restGet<unknown>(url);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        // WordPress returns 400 once we've passed the last page
        if (/HTTP 400/.test(msg) && page > 1 && allPosts.length > 0) break;
        throw err;
      }

      // Defensive: WordPress should return an array, but if a WAF/CDN
      // returns a JSON challenge object or some plugin wraps the response,
      // we'd crash with a confusing "spread requires iterable" error.
      // Surface the actual payload so we can diagnose.
      if (!Array.isArray(batch)) {
        const preview =
          typeof batch === "object" && batch !== null
            ? JSON.stringify(batch).slice(0, 400)
            : String(batch).slice(0, 400);
        throw new Error(
          `[wordpress] Expected array from ${url}, got ${typeof batch}. Body preview: ${preview}`
        );
      }

      if (batch.length === 0) break;
      allPosts.push(...batch);
      if (batch.length < 100) break;
      page++;
    }
    return allPosts;
  })();
  return postsCache;
}

/** Fetch all categories once. Cached for the build. */
function getAllCategories(): Promise<any[]> {
  if (categoriesCache) return categoriesCache;
  categoriesCache = restGet<any[]>(
    `${WORDPRESS_BASE}/wp-json/wp/v2/categories?per_page=100&_fields=id,name,slug`
  );
  return categoriesCache;
}

/** Transform a raw WordPress REST API post into the shape templates expect. */
function transformPost(raw: any) {
  return {
    slug: raw.slug as string,
    title: (raw.title?.rendered ?? "") as string,
    excerpt: (raw.excerpt?.rendered ?? "") as string,
    date: (raw.date ?? "") as string,
    featuredImage: raw._embedded?.["wp:featuredmedia"]?.[0]
      ? {
          node: {
            sourceUrl:
              (raw._embedded["wp:featuredmedia"][0].source_url ?? "") as string,
            altText: (raw._embedded["wp:featuredmedia"][0].alt_text ||
              raw.title?.rendered ||
              "") as string,
            mediaDetails: {
              width: (raw._embedded["wp:featuredmedia"][0].media_details?.width ??
                1200) as number,
              height: (raw._embedded["wp:featuredmedia"][0].media_details?.height ??
                630) as number,
            },
          },
        }
      : null,
    author: {
      node: {
        name: (raw._embedded?.author?.[0]?.name ?? "Startup Yeti") as string,
        avatar: {
          url: (raw._embedded?.author?.[0]?.avatar_urls?.["96"] ?? "") as string,
        },
      },
    },
    categories: {
      nodes: (
        (raw._embedded?.["wp:term"]?.[0] ?? []) as any[]
      ).map((c) => {
        const remap = DEPRECATED_CATEGORY_REMAP[(c.slug as string).toLowerCase()];
        return remap
          ? { name: remap.name, slug: remap.slug }
          : { name: c.name as string, slug: c.slug as string };
      }),
    },
  };
}

/** Fetch posts (optionally filtered by category name), up to `limit`. */
export async function fetchPosts(categoryName?: string, limit = 100) {
  const allPosts = await getAllRawPosts();

  let filtered = allPosts;
  if (categoryName) {
    const cats = await getAllCategories();
    const wanted = categoryName.toLowerCase();
    // Match the requested category itself PLUS any deprecated category that
    // remaps into it — so e.g. fetchPosts("Business") also returns posts
    // still assigned to "sales" / "customer-experience" in WordPress.
    const matchingIds = cats
      .filter((c) => {
        const remap = DEPRECATED_CATEGORY_REMAP[c.slug.toLowerCase()];
        const effSlug = (remap ? remap.slug : c.slug).toLowerCase();
        const effName = (remap ? remap.name : c.name).toLowerCase();
        return effSlug === wanted || effName === wanted;
      })
      .map((c) => c.id);
    filtered = matchingIds.length
      ? allPosts.filter((p) =>
          Array.isArray(p.categories)
            ? p.categories.some((id: number) => matchingIds.includes(id))
            : false
        )
      : [];
  }

  return filtered.slice(0, limit).map(transformPost);
}

/** Fetch a single post by slug. */
export async function fetchPost(slug: string) {
  const allPosts = await getAllRawPosts();
  const match = allPosts.find((p) => p.slug === slug);
  return match ? transformPost(match) : null;
}

/** Fetch all post slugs + categories (used in getStaticPaths). */
export async function fetchAllSlugs() {
  const posts = await fetchPosts(undefined, 500);
  return posts.map((p) => ({ slug: p.slug, categories: p.categories }));
}
