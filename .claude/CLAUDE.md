# Startup Yeti - Project Context

> **Note:** This file provides a high-level overview of the project. For detailed, precise implementation rules with JSON Schema validation, see the `.claude/rules/` directory:
> - `seo-requirements.md` - Complete SEO specifications
> - `blog-posts.md` - Blog post page structure and requirements
> - `wordpress-integration.md` - WordPress GraphQL integration patterns
> - `astro-components.md` - Astro component patterns and standards
> - `deployment.md` - Deployment and infrastructure configuration

## Project Overview

**Startup Yeti** is a business blog focused on startup advice, entrepreneurship, marketing, and productivity. The site was migrated from a traditional WordPress setup to a modern Astro static site while maintaining WordPress as a headless CMS.

**Live URL:** https://www.startupyeti.com
**Repository:** https://github.com/boban-ilik/startup-yeti-redesign

### Technology Stack

- **Frontend Framework:** Astro 4.x (Static Site Generator)
- **Styling:** Tailwind CSS
- **Typography:** Google Fonts (Inter, Merriweather)
- **CMS:** WordPress (Headless via GraphQL)
- **Hosting:** Cloudflare Pages
- **Analytics:** Google Analytics 4 with bot filtering
- **Version Control:** Git + GitHub

---

## Architecture

### Site Structure

```
startup-yeti-redesign/
├── src/
│   ├── pages/
│   │   ├── index.astro              # Homepage
│   │   ├── [category]/
│   │   │   └── [slug].astro         # Dynamic blog post pages
│   │   ├── startup.astro            # Category: Startup
│   │   ├── business.astro           # Category: Business
│   │   ├── marketing.astro          # Category: Marketing
│   │   ├── remote-work.astro        # Category: Remote Work
│   │   ├── productivity.astro       # Category: Productivity
│   │   ├── team-management.astro    # Category: Team Management
│   │   ├── founder-wellbeing.astro  # Category: Founder Wellbeing
│   │   └── innovation.astro         # Category: Innovation
│   ├── layouts/
│   │   └── Layout.astro             # Base layout template
│   └── components/                   # Reusable UI components
├── public/
│   ├── _redirects                   # Cloudflare redirect rules
│   ├── _headers                     # Security headers
│   └── robots.txt                   # SEO crawler directives
└── astro.config.mjs                 # Astro configuration
```

### URL Structure

**Current (New) Format:**
- Blog posts: `/{category}/{slug}/`
- Category pages: `/{category}/`
- Homepage: `/`

**Old WordPress Format (Redirected):**
- Old posts: `/category/{category}/{slug}/` → `/{category}/{slug}/`
- Old categories: `/category/{category}/` → `/{category}/`

All old URLs redirect via 301 to maintain SEO value.

---

## Content Management

### WordPress Integration

Content is managed in WordPress and fetched at build time via GraphQL API.

**WordPress GraphQL Endpoint:**
```
https://startupyeticom.wordpress.com/graphql
```

**Key GraphQL Queries:**

1. **Fetch All Posts** (for build-time static generation):
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

2. **Fetch Single Post** (for individual pages):
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

### Publishing Workflow

1. **Create/Edit Content:** Make changes in WordPress admin
2. **Trigger Rebuild:** Push to GitHub or manually trigger Cloudflare Pages deployment
3. **Build Process:** Astro fetches all WordPress content via GraphQL
4. **Deploy:** Cloudflare Pages deploys static site to CDN
5. **Live:** Changes appear on https://www.startupyeti.com

**Note:** Changes in WordPress are NOT live until a rebuild is triggered.

---

## Coding Standards

### Astro Components

- Use `.astro` file extension for all page and layout components
- Prefer static generation over SSR (site is fully static)
- Fetch WordPress data in `getStaticPaths()` for dynamic routes
- Keep components focused and reusable

**Example Pattern:**
```astro
---
// Fetch data at build time
const response = await fetch(WORDPRESS_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: GRAPHQL_QUERY })
});

const { data } = await response.json();
---

<html>
  <!-- Template here -->
</html>
```

### Tailwind CSS

- Use Tailwind utility classes for styling
- Follow mobile-first responsive design
- Common breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Keep custom CSS minimal; prefer Tailwind utilities

**Typography Scale:**
- Headings: `text-4xl`, `text-3xl`, `text-2xl`, `text-xl`
- Body: `text-base`, `text-lg`
- Small: `text-sm`, `text-xs`

### Performance

- Optimize images (compress, use appropriate formats)
- Lazy load images below the fold
- Minimize JavaScript bundle size
- Leverage Cloudflare CDN caching
- Target Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## SEO Requirements

### Every Page Must Include:

1. **Meta Tags:**
```html
<title>Page Title | Startup Yeti</title>
<meta name="description" content="Page description (155-160 chars)" />
<link rel="canonical" href="https://www.startupyeti.com/page-url/" />
```

2. **Open Graph Tags:**
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.startupyeti.com/page-url/" />
<meta property="og:title" content="Page Title | Startup Yeti" />
<meta property="og:description" content="Page description" />
<meta property="og:image" content="https://www.startupyeti.com/image.jpg" />
```

3. **Twitter Card Tags:**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Page Title | Startup Yeti" />
<meta name="twitter:description" content="Page description" />
<meta name="twitter:image" content="https://www.startupyeti.com/image.jpg" />
```

4. **Structured Data (JSON-LD):**
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

### SEO Best Practices

- **Canonical URLs:** Always use trailing slashes (e.g., `/startup/article/`)
- **Image Alt Text:** Every image must have descriptive alt text
- **Heading Hierarchy:** Use proper H1 → H6 structure (only one H1 per page)
- **Internal Linking:** Link to related articles within content
- **URL Structure:** Keep URLs clean, lowercase, hyphen-separated
- **Mobile-Friendly:** All pages must be responsive and mobile-optimized

---

## Analytics & Bot Filtering

### Google Analytics 4

**Measurement ID:** `G-5Y6SRMMDYG`

### Bot Detection Strategy

The site implements client-side bot detection to filter out fake traffic:

**Bot Detection Patterns:**
- User agent strings containing: `bot`, `crawler`, `spider`, `headless`, `selenium`, `puppeteer`
- Missing browser features: `navigator.webdriver`, empty `navigator.languages`
- Suspicious plugin configuration: zero plugins on desktop

**Implementation Location:** All pages include bot detection in `<head>` before GA initialization

### Monitoring Real vs Bot Traffic

**Indicators of Bot Traffic:**
- Session duration < 10 seconds
- 100% bounce rate
- Single country concentration
- All "Direct" traffic source
- No engagement events

**Real User Metrics:**
- Session duration > 30 seconds
- Bounce rate < 80%
- Geographic diversity
- Mixed traffic sources (Organic, Social, Referral)
- Multiple page views and interactions

---

## Deployment & Infrastructure

### Cloudflare Pages

**Build Configuration:**
```
Build command: npm run build
Build output directory: dist
Environment variables: WORDPRESS_URL
```

**Auto-Deployment:**
- Automatic build on push to `main` branch
- Manual deployment via Cloudflare dashboard
- Build time: ~2-3 minutes

### DNS Configuration

- **Domain:** startupyeti.com
- **DNS Provider:** Cloudflare
- **SSL:** Full (strict) with automatic certificate
- **CDN:** Enabled (orange cloud)

### Redirects

Managed via `public/_redirects`:
- Old WordPress URLs → New Astro URLs (301 redirects)
- Category pages with `/category/` prefix → Clean category URLs
- All redirects preserve SEO value

### Security Headers

Managed via `public/_headers`:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- Content Security Policy (if applicable)

---

## Categories & Content Structure

### Active Categories

1. **Startup** (`/startup/`)
   - Startup advice, founding, entrepreneurship

2. **Business** (`/business/`)
   - Business operations, strategy, growth

3. **Marketing** (`/marketing/`)
   - Marketing strategies, content marketing, SEO

4. **Remote Work** (`/remote-work/`)
   - Remote team management, distributed work

5. **Productivity** (`/productivity/`)
   - Productivity tips, time management, tools

6. **Team Management** (`/team-management/`)
   - Leadership, hiring, team building

7. **Founder Wellbeing** (`/founder-wellbeing/`)
   - Mental health, work-life balance, burnout prevention

8. **Innovation** (`/innovation/`)
   - Emerging technologies, disruptive business models, future trends

### Deprecated Categories (Redirected)

- **Sales** → redirects to `/business/`
- **Trends** → redirects to `/startup/`
- **Customer Experience** → redirects to `/business/`
- **Employment** → redirects to `/startup/`
- **Content Marketing** → redirects to `/marketing/`

---

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Making Changes

**For Content:**
1. Edit in WordPress
2. Trigger rebuild (git push or manual Cloudflare deployment)

**For Code/Design:**
1. Make changes locally
2. Test with `npm run dev`
3. Build and verify: `npm run build && npm run preview`
4. Commit to git: `git add . && git commit -m "Description"`
5. Push to GitHub: `git push origin main`
6. Cloudflare auto-deploys

### Testing Checklist

Before deploying changes:
- [ ] Test all pages load correctly locally
- [ ] Verify responsive design on mobile/tablet/desktop
- [ ] Check SEO meta tags are present (view source)
- [ ] Test WordPress data fetching (build succeeds)
- [ ] Validate no console errors
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test redirects if URL structure changed

---

## Common Tasks

### Adding a New Blog Post

1. Log into WordPress admin
2. Create new post
3. Add featured image (required for cards/previews)
4. Assign to appropriate category
5. Write SEO-friendly title and excerpt
6. Publish in WordPress
7. Trigger Cloudflare Pages rebuild
8. Verify post appears on site

### Adding a New Category

1. Update `src/pages/{category-slug}.astro`
2. Add category filtering logic
3. Update navigation if needed
4. Add redirect rules in `public/_redirects` for old URLs
5. Test category page and article URLs
6. Deploy

### Updating Site-Wide Styles

1. Edit Tailwind classes in components/layouts
2. Test responsiveness across breakpoints
3. Verify changes don't break existing pages
4. Build and preview locally
5. Deploy via git push

### Fixing 404 Errors

1. Identify broken URL from Google Search Console
2. Determine correct destination
3. Add redirect rule to `public/_redirects`:
   ```
   /old-url /new-url 301
   ```
4. Deploy and test redirect with `curl -I`

### Rebuilding Site After WordPress Changes

**Option 1: Git Push (recommended)**
```bash
git commit --allow-empty -m "Trigger rebuild for WordPress updates"
git push origin main
```

**Option 2: Manual Cloudflare Deployment**
1. Go to Cloudflare Dashboard
2. Pages → startup-yeti-redesign
3. Deployments → Create deployment
4. Select branch: main
5. Deploy

---

## Troubleshooting

### WordPress Content Not Showing

**Symptoms:** New posts don't appear on site

**Diagnosis:**
1. Check if post is published in WordPress (not draft)
2. Verify GraphQL endpoint is accessible
3. Check build logs in Cloudflare for errors
4. Confirm rebuild was triggered after WordPress update

**Solution:**
- Trigger manual rebuild
- Verify WordPress GraphQL query returns data
- Check environment variables are set correctly

### Build Failures

**Symptoms:** Cloudflare deployment fails

**Diagnosis:**
1. Review build logs for error message
2. Check if WordPress API is responsive
3. Verify all dependencies in `package.json`
4. Test build locally: `npm run build`

**Common Causes:**
- WordPress API timeout
- GraphQL query syntax error
- Missing environment variables
- Dependency version conflicts

### Redirect Not Working

**Symptoms:** Old URL returns 404 instead of redirecting

**Diagnosis:**
1. Check `public/_redirects` file syntax
2. Verify file is in `public/` directory (not `src/`)
3. Test with curl: `curl -I https://www.startupyeti.com/old-url`
4. Clear Cloudflare cache

**Solution:**
- Verify redirect rule format (Cloudflare Pages syntax)
- Ensure `_redirects` file is included in build output
- Test locally with preview build

### High Bot Traffic in Analytics

**Symptoms:** Unusual traffic spikes, 100% bounce rate

**Diagnosis:**
1. Check GA4 for traffic source (should show varied sources)
2. Review session duration (bots: <10s, real: >30s)
3. Check geographic distribution (bots: single country)

**Solution:**
- Verify bot detection code is present on all pages
- Enable GA4 bot filtering in admin
- Add additional bot patterns to detection function
- Review and filter by traffic source in reports

---

## Environment Variables

### Required Variables

```bash
# WordPress GraphQL API endpoint
WORDPRESS_URL=https://startupyeticom.wordpress.com/graphql
```

### Setting Environment Variables

**For Local Development:**
Create `.env` file in project root:
```bash
WORDPRESS_URL=https://startupyeticom.wordpress.com/graphql
```

**For Cloudflare Pages:**
1. Go to Cloudflare Dashboard
2. Pages → startup-yeti-redesign → Settings
3. Environment variables
4. Add `WORDPRESS_URL` variable
5. Save and redeploy

---

## External Resources

### Documentation

- **Astro Docs:** https://docs.astro.build
- **Tailwind CSS:** https://tailwindcss.com/docs
- **WordPress GraphQL:** https://www.wpgraphql.com/docs
- **Cloudflare Pages:** https://developers.cloudflare.com/pages

### Tools & Services

- **Cloudflare Dashboard:** https://dash.cloudflare.com
- **Google Analytics:** https://analytics.google.com
- **Google Search Console:** https://search.google.com/search-console
- **WordPress Admin:** https://wordpress.com/home/startupyeticom.wordpress.com

### Testing Tools

- **Google PageSpeed Insights:** https://pagespeed.web.dev
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Lighthouse:** Built into Chrome DevTools
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly

---

## Key Principles

### Always Remember:

1. **Content First:** WordPress is the source of truth for all content
2. **Static Generation:** Site is fully static, rebuilt on each deployment
3. **SEO is Critical:** Every page must have complete meta tags and structured data
4. **Performance Matters:** Aim for 90+ Lighthouse scores across all metrics
5. **Mobile-First:** Design and test mobile experience first
6. **Clean URLs:** Use trailing slashes, lowercase, hyphen-separated
7. **Bot Filtering:** Analytics accuracy depends on effective bot detection
8. **301 Redirects:** Always use 301 for moved content to preserve SEO

### Never Do:

- ❌ Edit content directly in Astro (use WordPress)
- ❌ Skip meta tags or canonical URLs
- ❌ Forget to trigger rebuild after WordPress changes
- ❌ Use absolute URLs for internal links (use relative paths)
- ❌ Commit sensitive data (API keys, credentials)
- ❌ Deploy without testing locally first
- ❌ Change URL structure without setting up redirects

---

## Contact & Ownership

**Project Owner:** Boban Ilikj
**Repository:** https://github.com/boban-ilik/startup-yeti-redesign
**Last Updated:** January 2026

---

*This document is version-controlled with the codebase. Update it when project architecture or conventions change.*
