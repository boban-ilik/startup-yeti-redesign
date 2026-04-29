/**
 * WordPress GraphQL fetch utility with retry logic.
 *
 * Retries up to 3 times with exponential backoff before throwing.
 * If all retries fail, throws an error — this intentionally fails
 * the Cloudflare Pages build so it keeps the previous good deployment
 * live rather than deploying a broken site with no posts.
 */

const WORDPRESS_URL = import.meta.env.WORDPRESS_URL;
const MAX_RETRIES = 3;
const BASE_DELAY_MS = 2000;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchWP<T = any>(
  query: string,
  variables: Record<string, any> = {}
): Promise<T> {
  if (!WORDPRESS_URL || WORDPRESS_URL.includes("YOUR-WORDPRESS-SITE")) {
    throw new Error(
      "WORDPRESS_URL is not configured. Set it in your .env file or Cloudflare Pages environment variables."
    );
  }

  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(WORDPRESS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "StartupYeti/1.0 (Astro Static Site Generator)",
        },
        body: JSON.stringify({ query, variables }),
      });

      if (!response.ok) {
        throw new Error(
          `WordPress API returned HTTP ${response.status} on attempt ${attempt}`
        );
      }

      const json = await response.json();

      if (json.errors?.length) {
        throw new Error(
          `WordPress GraphQL errors: ${json.errors.map((e: any) => e.message).join(", ")}`
        );
      }

      if (!json.data) {
        throw new Error(
          `WordPress API returned no data on attempt ${attempt}`
        );
      }

      return json.data as T;
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      const isLastAttempt = attempt === MAX_RETRIES;

      if (!isLastAttempt) {
        const delay = BASE_DELAY_MS * attempt; // 2s, 4s, 6s
        console.warn(
          `[wordpress] Attempt ${attempt} failed: ${lastError.message}. Retrying in ${delay}ms...`
        );
        await sleep(delay);
      }
    }
  }

  // All retries exhausted — fail the build so Cloudflare keeps the previous deployment live
  throw new Error(
    `[wordpress] All ${MAX_RETRIES} attempts to fetch from WordPress failed. Last error: ${lastError?.message}. Build aborted to preserve the previous good deployment.`
  );
}

/** Convenience: fetch posts for a category (or all posts if no category given). */
export async function fetchPosts(categoryName?: string, limit = 100) {
  const query = categoryName
    ? `
      query GetCategoryPosts($categoryName: String!, $limit: Int!) {
        posts(first: $limit, where: {categoryName: $categoryName, orderby: {field: DATE, order: DESC}}) {
          nodes {
            slug title excerpt date
            featuredImage { node { sourceUrl altText } }
            author { node { name } }
            categories { nodes { name slug } }
          }
        }
      }
    `
    : `
      query GetAllPosts($limit: Int!) {
        posts(first: $limit, where: {orderby: {field: DATE, order: DESC}}) {
          nodes {
            slug title excerpt date
            featuredImage { node { sourceUrl altText } }
            author { node { name } }
            categories { nodes { name slug } }
          }
        }
      }
    `;

  const variables = categoryName
    ? { categoryName, limit }
    : { limit };

  const data = await fetchWP<{ posts: { nodes: any[] } }>(query, variables);
  return data.posts.nodes;
}

/** Convenience: fetch a single post by slug. */
export async function fetchPost(slug: string) {
  const data = await fetchWP<{ postBy: any }>(
    `
    query GetPost($slug: String!) {
      postBy(slug: $slug) {
        slug title content excerpt date
        featuredImage { node { sourceUrl altText } }
        author { node { name avatar { url } } }
        categories { nodes { name slug } }
      }
    }
  `,
    { slug }
  );
  return data.postBy;
}

/** Convenience: fetch all post slugs + categories (used in getStaticPaths). */
export async function fetchAllSlugs() {
  const data = await fetchWP<{ posts: { nodes: any[] } }>(`
    query GetAllSlugs {
      posts(first: 500, where: {orderby: {field: DATE, order: DESC}}) {
        nodes {
          slug
          categories { nodes { name slug } }
        }
      }
    }
  `);
  return data.posts.nodes;
}
