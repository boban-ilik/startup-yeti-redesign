/**
 * Cloudflare Pages Worker
 * Handles trailing slash normalization with 301 redirects instead of 307
 * This improves SEO by passing full link equity through permanent redirects
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    // Skip for static assets and API routes
    const skipPatterns = [
      /\.[a-zA-Z0-9]+$/, // Files with extensions (.js, .css, .png, etc.)
      /^\/_/,           // Internal Cloudflare paths (_redirects, _headers, etc.)
      /^\/api\//,       // API routes
    ];

    const shouldSkip = skipPatterns.some(pattern => pattern.test(pathname));

    if (!shouldSkip) {
      // Remove trailing slash and redirect with 301
      if (pathname !== '/' && pathname.endsWith('/')) {
        const newUrl = new URL(request.url);
        newUrl.pathname = pathname.slice(0, -1);
        return Response.redirect(newUrl.toString(), 301);
      }
    }

    // Pass through to the static assets
    return env.ASSETS.fetch(request);
  }
};
