# Standard Operating Procedure: Startup Yeti Website Redesign

**Document Version:** 1.0
**Last Updated:** January 21, 2026
**Project:** Startup Yeti WordPress to Astro Migration

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Prerequisites](#prerequisites)
4. [Phase 1: Initial Setup](#phase-1-initial-setup)
5. [Phase 2: WordPress Integration](#phase-2-wordpress-integration)
6. [Phase 3: Content Migration](#phase-3-content-migration)
7. [Phase 4: URL Structure & Redirects](#phase-4-url-structure--redirects)
8. [Phase 5: SEO Implementation](#phase-5-seo-implementation)
9. [Phase 6: Analytics & Bot Filtering](#phase-6-analytics--bot-filtering)
10. [Phase 7: Deployment](#phase-7-deployment)
11. [Ongoing Maintenance](#ongoing-maintenance)
12. [Troubleshooting](#troubleshooting)

---

## Project Overview

### Objective
Migrate Startup Yeti from WordPress (Headless CMS) to a modern Astro-based static site while maintaining:
- All existing content and SEO rankings
- WordPress as the content management system
- Improved performance and user experience
- Clean, maintainable codebase

### Timeline
- **Start Date:** January 2026
- **Completion Date:** January 21, 2026
- **Total Duration:** ~3 weeks

### Team
- Developer/Designer: Boban Ilikj
- Technical Assistant: Claude (AI)

---

## Technology Stack

### Frontend
- **Framework:** Astro 4.x
- **Styling:** Tailwind CSS
- **Typography:** Google Fonts (Inter, Merriweather)
- **Build Tool:** Vite (via Astro)

### Backend/CMS
- **CMS:** WordPress (Headless)
- **API:** WordPress GraphQL
- **Hosting:** WordPress.com

### Deployment
- **Platform:** Cloudflare Pages
- **DNS:** Cloudflare
- **CDN:** Cloudflare CDN
- **SSL:** Automatic via Cloudflare

### Analytics & SEO
- **Analytics:** Google Analytics 4 (GA4)
- **Search Console:** Google Search Console
- **Sitemap:** Auto-generated via Astro
- **Robots.txt:** Custom configuration

---

## Prerequisites

### Required Software
- Node.js (v18 or higher)
- npm or yarn package manager
- Git for version control
- Code editor (VS Code recommended)

### Required Accounts
- GitHub account (for version control)
- Cloudflare account (for hosting)
- WordPress.com account (for CMS)
- Google Analytics account
- Google Search Console account

### Required Access
- WordPress GraphQL API endpoint
- Cloudflare DNS management
- Domain registrar access (for nameserver changes)

---

## Phase 1: Initial Setup

### 1.1 Create Astro Project

```bash
# Initialize new Astro project
npm create astro@latest startup-yeti-redesign

# Choose options:
# - Template: Empty
# - Install dependencies: Yes
# - TypeScript: No (or Yes if preferred)
# - Git: Yes
```

### 1.2 Install Dependencies

```bash
cd startup-yeti-redesign

# Install Tailwind CSS
npx astro add tailwind

# Install other dependencies
npm install
```

### 1.3 Configure Astro

**File:** `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://www.startupyeti.com',
  output: 'static',
  build: {
    format: 'directory'
  }
});
```

### 1.4 Setup Git Repository

```bash
# Initialize Git (if not already done)
git init

# Create .gitignore
echo "node_modules/\n.DS_Store\ndist/\n.env" > .gitignore

# Initial commit
git add .
git commit -m "Initial Astro setup"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/startup-yeti-redesign.git
git push -u origin main
```

### 1.5 Setup Environment Variables

**File:** `.env`

```env
WORDPRESS_URL=https://YOUR_WORDPRESS_SITE.com/graphql
```

**Important:** Never commit `.env` file to Git!

---

## Phase 2: WordPress Integration

### 2.1 Enable WordPress GraphQL

1. Log into WordPress admin
2. Install and activate "WPGraphQL" plugin
3. Navigate to GraphQL → Settings
4. Enable public access to GraphQL endpoint
5. Note the GraphQL endpoint URL: `https://yoursite.com/graphql`

### 2.2 Configure WordPress GraphQL Queries

Create standardized GraphQL queries for fetching content:

**Query for All Posts:**
```graphql
query GetAllPosts {
  posts(first: 100, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      slug
      title
      excerpt
      content
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
}
```

**Query for Single Post:**
```graphql
query GetPost($slug: String!) {
  postBy(slug: $slug) {
    title
    content
    excerpt
    date
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
    author {
      node {
        name
        avatar {
          url
        }
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
  }
}
```

### 2.3 Create GraphQL Fetch Utility

**File:** `src/lib/wordpress.js` (if needed)

```javascript
export async function fetchWordPress(query, variables = {}) {
  const response = await fetch(import.meta.env.WORDPRESS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'StartupYeti/1.0 (Astro Static Site Generator)'
    },
    body: JSON.stringify({ query, variables })
  });

  const { data } = await response.json();
  return data;
}
```

---

## Phase 3: Content Migration

### 3.1 Create Dynamic Routes

**File:** `src/pages/[category]/[slug].astro`

This file handles all blog post URLs with the pattern: `/category/slug`

```astro
---
// Fetch all posts from WordPress
const WORDPRESS_URL = import.meta.env.WORDPRESS_URL;

export async function getStaticPaths() {
  const response = await fetch(WORDPRESS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetAllPosts { ... }`
    })
  });

  const { data } = await response.json();

  return data.posts.nodes.map(post => ({
    params: {
      category: post.categories.nodes[0].slug,
      slug: post.slug
    },
    props: { post }
  }));
}

const { post } = Astro.props;
---

<html>
  <!-- Post template here -->
</html>
```

### 3.2 Create Category Pages

Create individual category pages:
- `src/pages/startup.astro`
- `src/pages/business.astro`
- `src/pages/marketing.astro`
- `src/pages/remote-work.astro`
- `src/pages/productivity.astro`
- `src/pages/team-management.astro`
- `src/pages/founder-wellbeing.astro`

Each category page fetches and filters posts for that specific category.

### 3.3 Create Homepage

**File:** `src/pages/index.astro`

Fetch and display:
- Hero section with value proposition
- Featured blog posts (latest 3)
- Category navigation
- Call-to-action sections

### 3.4 Create Blog Listing Page

**File:** `src/pages/blog/index.astro`

Display all blog posts with:
- Search/filter functionality
- Category filtering
- Pagination (if needed)

---

## Phase 4: URL Structure & Redirects

### 4.1 Old vs New URL Structure

**Old WordPress Structure:**
```
/category/startup/article-slug/
/category/business/article-slug/
```

**New Astro Structure:**
```
/startup/article-slug/
/business/article-slug/
```

### 4.2 Setup Redirects

**File:** `public/_redirects`

```
# Redirect old WordPress category URLs to new format
/category/startup/* /startup/:splat 301
/category/business/* /business/:splat 301
/category/marketing/* /marketing/:splat 301
/category/remote-work/* /remote-work/:splat 301
/category/productivity/* /productivity/:splat 301
/category/sales/* /business/:splat 301
/category/trends/* /startup/:splat 301
/category/customer-experience/* /business/:splat 301
/category/employment/* /startup/:splat 301
/category/team-management/* /team-management/:splat 301
/category/founder-wellbeing/* /founder-wellbeing/:splat 301
/category/content-marketing/* /marketing/:splat 301

# Redirect category pages themselves
/category/startup /startup 301
/category/business /business 301
/category/marketing /marketing 301
/category/remote-work /remote-work 301
/category/productivity /productivity 301
```

### 4.3 Test Redirects

```bash
# Test redirect locally or after deployment
curl -I https://www.startupyeti.com/category/startup/test-article

# Should return:
# HTTP/2 301
# location: /startup/test-article
```

---

## Phase 5: SEO Implementation

### 5.1 Meta Tags

Add to every page's `<head>`:

```html
<!-- Primary Meta Tags -->
<title>Page Title | Startup Yeti</title>
<meta name="title" content="Page Title | Startup Yeti" />
<meta name="description" content="Page description here" />
<link rel="canonical" href="https://www.startupyeti.com/page-url" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.startupyeti.com/page-url" />
<meta property="og:title" content="Page Title | Startup Yeti" />
<meta property="og:description" content="Page description" />
<meta property="og:image" content="https://www.startupyeti.com/image.png" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://www.startupyeti.com/page-url" />
<meta name="twitter:title" content="Page Title | Startup Yeti" />
<meta name="twitter:description" content="Page description" />
<meta name="twitter:image" content="https://www.startupyeti.com/image.png" />
```

### 5.2 Structured Data (Schema.org)

Add JSON-LD structured data for articles:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "image": "https://www.startupyeti.com/image.jpg",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Startup Yeti",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.startupyeti.com/logo.png"
    }
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-01-15"
}
</script>
```

### 5.3 Sitemap Configuration

Astro automatically generates sitemaps. Configure in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://www.startupyeti.com',
  integrations: [
    sitemap()
  ]
});
```

### 5.4 Robots.txt

**File:** `public/robots.txt`

```
# https://www.robotstxt.org/robotstxt.html

# Allow all legitimate bots including SEO tools and AI crawlers
User-agent: *
Allow: /

# Block old WordPress paths
Disallow: /wp-admin/
Disallow: /wp-content/
Disallow: /wp-includes/
Disallow: /wp-*.php

# Sitemaps
Sitemap: https://www.startupyeti.com/sitemap-index.xml
```

### 5.5 Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `www.startupyeti.com`
3. Verify ownership (HTML file, DNS, or meta tag)
4. Submit sitemap: `https://www.startupyeti.com/sitemap-index.xml`
5. Monitor indexing status

---

## Phase 6: Analytics & Bot Filtering

### 6.1 Setup Google Analytics 4

1. Create GA4 property at [Google Analytics](https://analytics.google.com)
2. Get Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to environment variables or directly in code

### 6.2 Implement GA4 with Bot Detection

Add to all pages in `<head>`:

```html
<!-- Google Analytics with Bot Detection -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5Y6SRMMDYG"></script>
<script>
  // Bot detection function
  function isLikelyBot() {
    const ua = navigator.userAgent.toLowerCase();
    const botPatterns = [
      'bot', 'crawler', 'spider', 'crawling', 'headless',
      'slurp', 'mediapartners', 'googlebot', 'bingbot',
      'phantomjs', 'selenium', 'puppeteer', 'webdriver'
    ];

    // Check user agent for bot patterns
    if (botPatterns.some(pattern => ua.includes(pattern))) {
      return true;
    }

    // Check for headless browser indicators
    if (navigator.webdriver) {
      return true;
    }

    // Check for missing features that real browsers have
    if (!navigator.languages || navigator.languages.length === 0) {
      return true;
    }

    // Check for suspicious plugin configuration
    if (navigator.plugins.length === 0 && !ua.includes('mobile')) {
      return true;
    }

    return false;
  }

  // Only initialize GA if not a bot
  if (!isLikelyBot()) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-5Y6SRMMDYG', {
      'send_page_view': true,
      'anonymize_ip': true
    });
  }
</script>
```

### 6.3 Enable GA4 Bot Filtering

1. Go to Google Analytics Admin
2. Select your property
3. Data Settings → Data Filters
4. Enable bot filtering if available
5. Create custom filters as needed

### 6.4 Monitor Analytics

**Key Metrics to Track:**
- Real vs bot traffic patterns
- Session duration (real users: >30s, bots: <10s)
- Bounce rate (real users: <80%, bots: ~100%)
- Traffic sources (Organic, Direct, Social)
- Geographic distribution

**How to Identify Bot Traffic:**
- Very short sessions
- 100% bounce rate
- Single country concentration
- All "Direct" traffic source
- No engagement events

---

## Phase 7: Deployment

### 7.1 Cloudflare Pages Setup

1. **Create Cloudflare Account** (if not already done)

2. **Connect GitHub Repository:**
   - Go to Cloudflare Dashboard
   - Workers & Pages → Create → Pages → Connect to Git
   - Authorize GitHub access
   - Select `startup-yeti-redesign` repository

3. **Configure Build Settings:**
   ```
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```

4. **Add Environment Variables:**
   - Add `WORDPRESS_URL` with your WordPress GraphQL endpoint

5. **Deploy:**
   - Click "Save and Deploy"
   - Wait for initial build to complete

### 7.2 Custom Domain Setup

1. **Add Custom Domain in Cloudflare Pages:**
   - Go to your Pages project
   - Custom domains → Set up a custom domain
   - Enter: `www.startupyeti.com`

2. **Configure DNS:**
   - Go to Cloudflare DNS settings
   - Add CNAME record:
     ```
     Type: CNAME
     Name: www
     Target: startup-yeti-redesign.pages.dev
     Proxy: Enabled (orange cloud)
     ```

3. **Configure Root Domain Redirect:**
   - Add A records for root domain or use Cloudflare redirect rules

4. **Enable SSL:**
   - Cloudflare automatically provisions SSL
   - Set SSL mode to "Full (strict)"

### 7.3 Performance Optimization

**Cloudflare Settings:**
- Enable Auto Minify (HTML, CSS, JS)
- Enable Brotli compression
- Enable HTTP/2 and HTTP/3
- Configure caching rules

**File:** `public/_headers`

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Cache-Control: public, max-age=3600
```

### 7.4 Testing Post-Deployment

1. **Functionality Tests:**
   - Homepage loads correctly
   - Blog posts load correctly
   - Category pages work
   - Navigation functions properly
   - Forms submit correctly (if any)

2. **SEO Tests:**
   - Verify canonical URLs
   - Check meta tags
   - Verify structured data (Google Rich Results Test)
   - Test sitemap accessibility

3. **Performance Tests:**
   - Run Google PageSpeed Insights
   - Run Lighthouse audit
   - Check Core Web Vitals

4. **Redirect Tests:**
   ```bash
   curl -I https://www.startupyeti.com/category/startup/test-article
   # Should return 301 redirect
   ```

---

## Ongoing Maintenance

### 8.1 Content Updates

**Publishing New Content:**
1. Create/edit content in WordPress
2. WordPress GraphQL automatically exposes new content
3. Cloudflare Pages auto-rebuilds on git push (or manually trigger rebuild)
4. New content appears on site after build completes

**Rebuild Triggers:**
- Git push to main branch (automatic)
- Manual deployment via Cloudflare dashboard
- Webhook from WordPress (optional, can be configured)

### 8.2 WordPress Content Management

**Best Practices:**
1. Always use WordPress for content editing
2. Set featured images for all posts
3. Assign proper categories
4. Write SEO-friendly titles and excerpts
5. Use alt text for images

### 8.3 Monitoring

**Weekly Tasks:**
- Check Google Analytics for traffic patterns
- Review Google Search Console for errors
- Monitor Cloudflare Analytics for performance

**Monthly Tasks:**
- Review and update meta descriptions
- Check for broken links
- Audit site performance (Lighthouse)
- Review and optimize images
- Check for security updates

**Quarterly Tasks:**
- Comprehensive SEO audit
- Content performance review
- Update dependencies (npm update)
- Review and optimize Core Web Vitals

### 8.4 Backup Strategy

**Code Backup:**
- Git repository on GitHub (automatic)
- Cloudflare maintains deployment history

**Content Backup:**
- WordPress.com handles automatic backups
- Consider additional WordPress backup plugin
- Export WordPress content periodically

---

## Troubleshooting

### Issue: WordPress Content Not Updating

**Symptoms:** New posts don't appear on site

**Solutions:**
1. Check WordPress GraphQL endpoint is accessible
2. Verify environment variables are set correctly
3. Trigger manual rebuild in Cloudflare Pages
4. Check build logs for errors

### Issue: Redirects Not Working

**Symptoms:** 404 errors on old URLs

**Solutions:**
1. Verify `_redirects` file is in `public/` directory
2. Check redirect syntax (Cloudflare Pages format)
3. Clear Cloudflare cache
4. Test redirects with curl:
   ```bash
   curl -I https://www.startupyeti.com/old-url
   ```

### Issue: High Bot Traffic in Analytics

**Symptoms:** Unusual traffic spikes, high bounce rates

**Solutions:**
1. Verify bot detection code is present on all pages
2. Check GA4 bot filtering settings
3. Review traffic sources in Analytics
4. Add additional bot patterns to detection function
5. Consider IP-based filtering in Cloudflare

### Issue: Build Failures

**Symptoms:** Cloudflare Pages deployment fails

**Solutions:**
1. Check build logs for specific errors
2. Verify all dependencies are in `package.json`
3. Test build locally: `npm run build`
4. Check Node.js version compatibility
5. Verify environment variables are set

### Issue: Slow Page Load Times

**Symptoms:** Poor Core Web Vitals scores

**Solutions:**
1. Optimize images (compress, use WebP)
2. Enable Cloudflare image optimization
3. Minimize JavaScript bundle size
4. Implement lazy loading for images
5. Review and optimize font loading
6. Enable caching in Cloudflare

### Issue: Missing Meta Tags or Schema

**Symptoms:** Poor SEO previews, Google warnings

**Solutions:**
1. Verify meta tags in page source
2. Test with Google Rich Results Test
3. Check Open Graph tags with Facebook Debugger
4. Validate schema markup with Schema.org validator
5. Ensure canonical URLs are correct

---

## Key Learnings & Best Practices

### What Went Well
1. **Astro Performance:** Static site generation provides excellent performance
2. **WordPress Integration:** Headless WordPress works seamlessly with GraphQL
3. **Cloudflare Pages:** Zero-config deployment with excellent CDN
4. **Bot Detection:** Client-side filtering significantly improves analytics accuracy
5. **Redirect Strategy:** 301 redirects preserved SEO value from old URLs

### Challenges Faced
1. **URL Structure Migration:** Required careful planning of redirects
2. **Bot Traffic:** Initial analytics showed significant bot traffic
3. **Google Search Console Validation:** Redirect validation took time
4. **Content Synchronization:** Needed clear rebuild strategy for WordPress updates

### Recommendations for Future Projects
1. **Plan URL structure early:** Design final URL structure before migration
2. **Implement bot filtering from start:** Include analytics filtering from day one
3. **Test redirects thoroughly:** Verify all redirect patterns before go-live
4. **Document everything:** Maintain comprehensive documentation (like this SOP)
5. **Monitor closely post-launch:** Daily monitoring for first week after migration

---

## Appendix

### A. Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Deployment
git push origin main    # Triggers auto-deployment

# Testing
curl -I [URL]          # Test HTTP headers and redirects
npm run check          # Check for Astro errors
```

### B. Important URLs

- **Live Site:** https://www.startupyeti.com
- **Cloudflare Dashboard:** https://dash.cloudflare.com
- **WordPress Admin:** [Your WordPress admin URL]
- **GitHub Repo:** https://github.com/boban-ilik/startup-yeti-redesign
- **Google Analytics:** https://analytics.google.com
- **Search Console:** https://search.google.com/search-console

### C. Contact Information

**Developer:** Boban Ilikj
**Email:** [Your email]
**Project Start:** January 2026
**Last Updated:** January 21, 2026

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-21 | Boban Ilikj | Initial SOP creation |

---

**End of Document**
