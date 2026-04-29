/**
 * WordPress REST API fetch utility with retry logic.
 *
 * Uses the WordPress REST API (/wp-json/wp/v2/posts) instead of GraphQL,
 * because the WPGraphQL plugin is not active on admin.startupyeti.com.
 *
 * Retries up to 3 times (with exponential backoff) on network or 5xx errors.
 * Does NOT retry on 4xx client errors (they won't resolve with retries).
 * If all retries fail, throws an error — this intentionally fails the
 * Cloudflare Pages build so it keeps the previous good deployment live
 * rather than deploying a broken site with no posts.
 */

const WORDPRESS_URL = import.meta.env.WORDPRESS_URL;
const MAX_RETRIES = 3;
const BASE_DELAY_MS = 2000;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getBaseUrl(): string {
  if (!WORDPRESS_URL || WORDPRESS_URL.includes("YOUR-WORDPRESS-SITE")) {
    throw new Error(
      "WORDPRESS_URL is not configured. Set it in your .env file or Cloudflare Pages environment variables."
    );
  }
  // Support both base URL ("https://admin.startupyeti.com") and
  // graphql URL ("https://admin.startupyeti.com/graphql") in the env var.
  return WORDPRESS_URL.replace(/\/graphql$/, "").replace(/\/$/, "");
}

async function restGet<T = any>(url: string): Promise<T> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": "StartupYeti/1.0 (Astro Static Site Generator)",
        },
      });

      if (!response.ok) {
        const err = new Error(
          `WordPress REST API returned HTTP ${response.status} on attempt ${attempt}`
        );
        // 4xx = client error — retrying won't help, throw immediately
        if (response.status >= 400 && response.status < 500) throw err;
        // 5xx = server error — worth retrying
        throw err;
      }

      return (await response.json()) as T;
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));

      // Don't retry 4xx client errors
      const is4xx =
        /HTTP 4\d\d/.test(lastError.message) &&
        !lastError.message.includes("HTTP 429");

      if (is4xx || attempt === MAX_RETRIES) {
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
      ).map((c) => ({
        name: c.name as string,
        slug: c.slug as string,
      })),
    },
  };
}

/** Fetch posts (optionally filtered by category name), up to `limit`. */
export async function fetchPosts(categoryName?: string, limit = 100) {
  const base = getBaseUrl();

  // Resolve category name → REST API ID (required for filtering)
  let categoryParam = "";
  if (categoryName) {
    const cats = await restGet<any[]>(
      `${base}/wp-json/wp/v2/categories?per_page=100&_fields=id,name,slug`
    );
    const match = cats.find(
      (c) =>
        c.name.toLowerCase() === categoryName.toLowerCase() ||
        c.slug.toLowerCase() === categoryName.toLowerCase()
    );
    if (match) categoryParam = `&categories=${match.id}`;
  }

  const allPosts: any[] = [];
  let page = 1;

  while (allPosts.length < limit) {
    const perPage = Math.min(100, limit - allPosts.length);
    const url =
      `${base}/wp-json/wp/v2/posts` +
      `?per_page=${perPage}&page=${page}` +
      `&status=publish&orderby=date&order=desc&_embed` +
      categoryParam;

    let batch: any[];
    try {
      batch = await restGet<any[]>(url);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      // WordPress returns 400 when page > total pages — treat as end of results
      if (/HTTP 400/.test(message) && page > 1 && allPosts.length > 0) break;
      // First-page failure (or any other error) is real — abort build
      throw err;
    }

    if (!batch || batch.length === 0) break;
    allPosts.push(...batch);
    if (batch.length < perPage) break; // Last page reached
    page++;
  }

  return allPosts.slice(0, limit).map(transformPost);
}

/** Fetch a single post by slug. */
export async function fetchPost(slug: string) {
  const base = getBaseUrl();
  const posts = await restGet<any[]>(
    `${base}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&status=publish&_embed`
  );
  return posts?.[0] ? transformPost(posts[0]) : null;
}

/** Fetch all post slugs + categories (used in getStaticPaths). */
export async function fetchAllSlugs() {
  const posts = await fetchPosts(undefined, 500);
  return posts.map((p) => ({ slug: p.slug, categories: p.categories }));
}
