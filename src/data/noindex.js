// Posts excluded from search indexing.
//
// These are thin legacy posts from the WordPress migration that Google flagged
// "Crawled - currently not indexed" (GSC export 2026-07-21). Each has 0-2
// referring domains, essentially zero search impressions, and no cluster role,
// so there is no equity worth preserving via redirect.
//
// They stay live for users and emit `noindex, follow` — links still pass
// through them. They are also excluded from the sitemap (see astro.config.mjs).
//
// Reversible: remove a path from this list to restore indexing.
//
// Posts from the same audit that DID have backlinks (>=3 referring domains)
// were 301'd to relevant pages instead — see public/_redirects.

export const NOINDEX_PATHS = new Set([
  "/productivity/overcoming-imposter-syndrome",
  "/remote-work/hush-trips",
  "/startup/4-tips-to-get-your-startup-employees-socially-involved",
  "/startup/how-startups-are-shaking-up-traditional-industries",
  "/startup/why-tech-plays-such-a-big-role-in-startups",
  "/team-management/confronting-ableism-in-the-workplace",
  "/business/learning-from-failure",
  "/business/maximizing-roi-strategies",
  "/productivity/prepare-any-team-for-the-holidays",
  "/startup/early-startup-days",
  "/startup/embracing-failure-how-setbacks-can-lead-to-heightened-startup-growth",
]);

export function isNoIndex(category, slug) {
  return NOINDEX_PATHS.has(`/${category}/${slug}`);
}

// Thin legacy posts that DID have backlinks (3+ referring domains), so they are
// 301'd to a relevant post instead of noindexed — see public/_redirects.
//
// These must NOT be built as static pages: on Cloudflare Pages a real asset is
// served in preference to a _redirects rule, so generating them would silently
// prevent the redirects from ever firing. Excluding them here also removes them
// from related-post widgets, so nothing links into a redirect.
export const REDIRECTED_PATHS = new Set([
  "/marketing/the-meme-ification-of-marketing",
  "/startup/gen-z-shaping-startups",
  "/business/multi-generational-leadership",
  "/productivity/flexibility-is-the-future-of-work",
  "/startup/intern-season-is-open",
  "/startup/7-reasons-why-collaboration-are-crucial-for-startups",
  "/startup/how-to-celebrate-small-wins",
  "/business/3-ways-business-leaders-can-practice-and-cultivate-empathy",
]);

export function isRedirected(category, slug) {
  return REDIRECTED_PATHS.has(`/${category}/${slug}`);
}

// Slug-only view of the above, used by fetchPosts() so category and blog
// listing pages stop rendering cards that link into a 301.
export const REDIRECTED_SLUGS = new Set(
  [...REDIRECTED_PATHS].map((p) => p.split("/").pop())
);
