# StartupYeti SEO Audit Report

**Last Updated:** February 4, 2026
**Source:** Screaming Frog Crawl Exports (3 crawls compared)

---

## Progress Summary

| Metric | Original | Latest | Change | Status |
|--------|----------|--------|--------|--------|
| Total URLs | 495 | 333 | -162 | ✅ Cleaner |
| 404 Page Errors | 15 | 0 | -15 | ✅ Fixed |
| 404 Image Errors | 0 | 30 | +30 | ⚠️ See below |
| 307 Redirects | 116 | 110 | -6 | 🔴 Still needs fix |
| 301 Redirects | 2 | 17 | +15 | ✅ Improving |
| Non-WWW URLs | 163 | 1 | -162 | ✅ Fixed |
| Duplicate Titles | 148 | 0 | -148 | ✅ Fixed |
| Duplicate Meta Descriptions | 148 | 0 | -148 | ✅ Fixed |
| Canonicalised Pages | 149 | 1 | -148 | ✅ Fixed |
| Orphan Pages | 84 | 76 | -8 | ⚠️ Ongoing |

---

## What's Been Fixed ✅

### 1. Duplicate Titles & Meta Descriptions — RESOLVED
All pages now have unique titles and meta descriptions. This was the most critical SEO issue and it's completely fixed.

### 2. WWW vs Non-WWW — RESOLVED
Site now consistently uses `www.startupyeti.com`. Only 1 non-www URL remains in crawl (likely a canonical reference).

### 3. Broken Page Links (404s) — RESOLVED
All 15 broken page URLs have been fixed or redirected.

### 4. Canonicalization Issues — RESOLVED
Reduced from 149 canonicalized pages to just 1. The duplicate content issues have been eliminated.

---

## Remaining Issues

### 1. 🔴 307 Temporary Redirects (110 URLs)

**Problem:** 110 URLs still use HTTP 307 (temporary redirect) instead of 301 (permanent).

**What's happening:** These are trailing-slash normalizations:
- `https://www.startupyeti.com/startup/hiring-for-startups/`
- → `https://www.startupyeti.com/startup/hiring-for-startups`

**Why it matters:** 307 redirects don't pass full link equity. Any backlinks to the trailing-slash version lose SEO value.

**Fix Options:**

**Option A: Astro Config (Recommended)**
```javascript
// astro.config.mjs
export default defineConfig({
  trailingSlash: 'never', // Matches your current URLs without trailing slash
});
```

**Option B: Cloudflare Redirect Rule**
Create a redirect rule to convert 307s to 301s for trailing slash normalization.

---

### 2. ⚠️ Missing WordPress Images (30 URLs)

**Problem:** 30 image URLs return 404. These are all old WordPress paths:
```
/wp-content/uploads/2023/12/image-name.png
/wp-content/uploads/2024/08/another-image.webp
```

**Why this happened:** The Astro migration doesn't include the old `/wp-content/uploads/` directory structure.

**Impact:** Medium. Broken images hurt user experience but have less SEO impact than broken pages.

**Fix Options:**

1. **Migrate images to Astro `/public` folder** and update references in content
2. **Host images on CDN** (Cloudflare Images, Cloudinary) and update references
3. **Set up redirects** from old paths to new locations
4. **If images are no longer used**, remove references from content

**Affected images:**
- DALL·E generated images (AI illustrations)
- Product screenshots (Asana, Trello, etc.)
- Book covers (Lean Startup, Zero to One, etc.)
- Hardware images (monitors, keyboards)

---

### 3. ⚠️ Orphan Pages (76 URLs)

**Problem:** 76 indexable pages have only 0-1 internal links pointing to them.

**Impact:** Poor internal linking hurts discoverability and rankings.

**Fix:**
1. Add contextual links within blog post content
2. Implement "Related Posts" component on article pages
3. Create topic hub pages that link to related content
4. Review navigation to ensure key pages are accessible

---

## Current Site Health

| Aspect | Status | Notes |
|--------|--------|-------|
| Response Time | ✅ Excellent | Avg 0.052s |
| Indexable Pages | ✅ Good | 175 pages |
| Duplicate Content | ✅ None | All resolved |
| WWW Consistency | ✅ Fixed | Using www version |
| Page 404s | ✅ Fixed | 0 broken pages |
| Trailing Slash Redirects | 🔴 Fix | 110 using 307 instead of 301 |
| Image 404s | ⚠️ Review | 30 missing images |
| Internal Linking | ⚠️ Improve | 76 orphan pages |

---

## Recommended Next Steps

### Immediate (This Week)
- [ ] Fix 307 → 301 redirects via Astro config: `trailingSlash: 'never'`
- [ ] Audit the 30 missing images and decide: migrate, redirect, or remove references

### Short-term (Next 2 Weeks)
- [ ] Improve internal linking for orphan pages
- [ ] Add Related Posts component to blog template
- [ ] Re-crawl to verify fixes

### Ongoing
- [ ] Monitor Google Search Console for new issues
- [ ] Monthly Screaming Frog crawls
- [ ] Add internal links when publishing new content

---

## Technical Implementation Notes

### Astro Config for Trailing Slashes
```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.startupyeti.com',
  trailingSlash: 'never', // or 'always' - just be consistent
});
```

### Cloudflare _redirects for Image Migration
If you migrate images to `/images/`, add redirects:
```
/wp-content/uploads/2023/* /images/2023/:splat 301
/wp-content/uploads/2024/* /images/2024/:splat 301
/wp-content/uploads/2025/* /images/2025/:splat 301
```

### Related Posts Component (Astro)
```astro
---
// src/components/RelatedPosts.astro
const { currentSlug, category, limit = 3 } = Astro.props;
const allPosts = await getCollection('blog');
const related = allPosts
  .filter(p => p.data.category === category && p.slug !== currentSlug)
  .slice(0, limit);
---
<section class="related-posts">
  <h3>Related Articles</h3>
  <ul>
    {related.map(post => (
      <li><a href={`/${post.slug}`}>{post.data.title}</a></li>
    ))}
  </ul>
</section>
```

---

## Crawl History

| Date | Tool | Key Findings |
|------|------|--------------|
| Feb 4, 2026 (AM) | Screaming Frog | Original audit: 148 duplicate titles, 15 broken pages, 163 non-www URLs |
| Feb 4, 2026 (PM) | Screaming Frog | Progress check: Duplicates fixed, 404s fixed, www consolidated |
| Feb 4, 2026 (PM) | Screaming Frog | Latest: 307 redirects remain, 30 image 404s identified |

---

*This document tracks SEO health for the StartupYeti Astro rebuild. Update after each crawl.*
