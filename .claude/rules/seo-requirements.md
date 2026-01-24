# SEO Requirements - Startup Yeti

**Applies to:** All pages site-wide

This rule ensures every page meets SEO standards with precise metadata requirements.

---

## Required Meta Tags - Exact Schema

Every page MUST include the following in `<head>`, following this exact structure:

### 1. Primary Meta Tags (Required)

```html
<title>{Page Title} | Startup Yeti</title>
<meta name="title" content="{Page Title} | Startup Yeti" />
<meta name="description" content="{Description between 155-160 characters}" />
<link rel="canonical" href="https://www.startupyeti.com{/path/with/trailing/slash/}" />
```

**JSON Schema for Primary Meta:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["title", "metaTitle", "description", "canonical"],
  "properties": {
    "title": {
      "type": "string",
      "minLength": 30,
      "maxLength": 60,
      "pattern": "^.+\\s\\|\\sStartup Yeti$",
      "description": "Page title ending with ' | Startup Yeti'"
    },
    "metaTitle": {
      "type": "string",
      "minLength": 30,
      "maxLength": 60,
      "pattern": "^.+\\s\\|\\sStartup Yeti$",
      "description": "Meta title tag, must match title tag"
    },
    "description": {
      "type": "string",
      "minLength": 155,
      "maxLength": 160,
      "description": "Meta description, optimized for search results"
    },
    "canonical": {
      "type": "string",
      "format": "uri",
      "pattern": "^https://www\\.startupyeti\\.com/.+/$",
      "description": "Canonical URL with trailing slash"
    }
  }
}
```

**Validation Rules:**
- ✅ Title: 30-60 characters, ends with ` | Startup Yeti`
- ✅ Description: 155-160 characters (optimal for Google)
- ✅ Canonical: Full URL with HTTPS, www subdomain, trailing slash
- ❌ Never use relative URLs for canonical
- ❌ Never omit trailing slash from canonical URL

---

### 2. Open Graph Tags (Required)

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.startupyeti.com{/path/with/trailing/slash/}" />
<meta property="og:title" content="{Page Title} | Startup Yeti" />
<meta property="og:description" content="{Same description as meta description}" />
<meta property="og:image" content="https://www.startupyeti.com{/path/to/image.jpg}" />
<meta property="og:image:width" content="{image width in pixels}" />
<meta property="og:image:height" content="{image height in pixels}" />
<meta property="og:site_name" content="Startup Yeti" />
```

**JSON Schema for Open Graph:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["type", "url", "title", "description", "image", "siteName"],
  "properties": {
    "type": {
      "type": "string",
      "enum": ["website", "article"],
      "description": "Use 'article' for blog posts, 'website' for other pages"
    },
    "url": {
      "type": "string",
      "format": "uri",
      "pattern": "^https://www\\.startupyeti\\.com/.+/$",
      "description": "Full canonical URL with trailing slash"
    },
    "title": {
      "type": "string",
      "minLength": 30,
      "maxLength": 60,
      "description": "Should match primary title tag"
    },
    "description": {
      "type": "string",
      "minLength": 155,
      "maxLength": 160,
      "description": "Should match primary meta description"
    },
    "image": {
      "type": "string",
      "format": "uri",
      "pattern": "^https://",
      "description": "Absolute URL to image (min 1200x630px recommended)"
    },
    "imageWidth": {
      "type": "integer",
      "minimum": 1200,
      "description": "Image width in pixels"
    },
    "imageHeight": {
      "type": "integer",
      "minimum": 630,
      "description": "Image height in pixels"
    },
    "siteName": {
      "type": "string",
      "const": "Startup Yeti"
    }
  }
}
```

**Validation Rules:**
- ✅ og:type: Use "article" for blog posts, "website" for category/home pages
- ✅ og:url: Must match canonical URL exactly
- ✅ og:title: Must match primary title tag
- ✅ og:description: Must match primary meta description
- ✅ og:image: Absolute URL, minimum 1200x630px (Facebook/LinkedIn optimal)
- ✅ og:site_name: Always "Startup Yeti"

---

### 3. Twitter Card Tags (Required)

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://www.startupyeti.com{/path/with/trailing/slash/}" />
<meta name="twitter:title" content="{Page Title} | Startup Yeti" />
<meta name="twitter:description" content="{Same description as meta description}" />
<meta name="twitter:image" content="https://www.startupyeti.com{/path/to/image.jpg}" />
```

**JSON Schema for Twitter Cards:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["card", "url", "title", "description", "image"],
  "properties": {
    "card": {
      "type": "string",
      "const": "summary_large_image",
      "description": "Always use summary_large_image for better engagement"
    },
    "url": {
      "type": "string",
      "format": "uri",
      "pattern": "^https://www\\.startupyeti\\.com/.+/$",
      "description": "Must match canonical URL"
    },
    "title": {
      "type": "string",
      "minLength": 30,
      "maxLength": 60,
      "description": "Must match primary title tag"
    },
    "description": {
      "type": "string",
      "minLength": 155,
      "maxLength": 160,
      "description": "Must match primary meta description"
    },
    "image": {
      "type": "string",
      "format": "uri",
      "pattern": "^https://",
      "description": "Absolute URL to image (min 1200x630px)"
    }
  }
}
```

**Validation Rules:**
- ✅ twitter:card: Always "summary_large_image"
- ✅ twitter:url: Must match canonical URL exactly
- ✅ twitter:title: Must match primary title tag
- ✅ twitter:description: Must match primary meta description
- ✅ twitter:image: Must match og:image

---

### 4. Additional SEO Meta Tags (Required)

```html
<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta charset="UTF-8" />
<html lang="en">
```

**JSON Schema for Additional Meta:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["robots", "viewport", "charset", "lang"],
  "properties": {
    "robots": {
      "type": "string",
      "enum": ["index, follow", "noindex, nofollow", "noindex, follow"],
      "default": "index, follow",
      "description": "Default to index, follow for public pages"
    },
    "googlebot": {
      "type": "string",
      "enum": ["index, follow", "noindex, nofollow"],
      "default": "index, follow"
    },
    "viewport": {
      "type": "string",
      "const": "width=device-width, initial-scale=1.0",
      "description": "Required for mobile responsiveness"
    },
    "charset": {
      "type": "string",
      "const": "UTF-8"
    },
    "lang": {
      "type": "string",
      "const": "en",
      "description": "HTML lang attribute"
    }
  }
}
```

---

## Image Requirements - Exact Schema

All images MUST have proper alt text and optimization.

**JSON Schema for Images:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["src", "alt"],
  "properties": {
    "src": {
      "type": "string",
      "format": "uri",
      "description": "Image source URL"
    },
    "alt": {
      "type": "string",
      "minLength": 10,
      "maxLength": 125,
      "pattern": "^(?!.*\\.(jpg|png|jpeg|gif|webp)$).*$",
      "description": "Descriptive alt text, NOT filename"
    },
    "width": {
      "type": "integer",
      "minimum": 1,
      "description": "Explicit width for CLS optimization"
    },
    "height": {
      "type": "integer",
      "minimum": 1,
      "description": "Explicit height for CLS optimization"
    },
    "loading": {
      "type": "string",
      "enum": ["lazy", "eager"],
      "default": "lazy",
      "description": "Use 'eager' for above-fold images, 'lazy' for others"
    }
  }
}
```

**Validation Rules:**
- ✅ Every `<img>` must have descriptive `alt` attribute
- ✅ Alt text: 10-125 characters, describes image content
- ❌ Never use filename as alt text (e.g., "image-123.jpg")
- ✅ Include width/height attributes to prevent layout shift
- ✅ Use `loading="lazy"` for images below fold
- ✅ Use `loading="eager"` for hero/featured images

---

## Heading Hierarchy - Exact Schema

Pages MUST follow proper heading structure for accessibility and SEO.

**JSON Schema for Heading Structure:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["h1"],
  "properties": {
    "h1": {
      "type": "string",
      "minLength": 20,
      "maxLength": 70,
      "description": "Only ONE H1 per page, describes page topic"
    },
    "h2": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 10,
        "maxLength": 70
      },
      "description": "Major sections of content"
    },
    "h3": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 10,
        "maxLength": 70
      },
      "description": "Subsections under H2"
    }
  }
}
```

**Validation Rules:**
- ✅ Exactly ONE `<h1>` per page
- ✅ H1 should contain primary keyword and describe page topic
- ✅ Headings must follow hierarchical order: H1 → H2 → H3 → H4
- ❌ Never skip heading levels (e.g., H1 → H3 without H2)
- ✅ Use headings for structure, not styling

**Example Correct Structure:**
```html
<h1>How to Launch a Startup in 2026</h1>
  <h2>Planning Your Startup</h2>
    <h3>Market Research</h3>
    <h3>Business Model</h3>
  <h2>Building Your Product</h2>
    <h3>MVP Development</h3>
    <h3>User Testing</h3>
```

---

## Internal Linking - Schema

**JSON Schema for Internal Links:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["href", "text"],
  "properties": {
    "href": {
      "type": "string",
      "pattern": "^/[a-z0-9-]+(/[a-z0-9-]+)*/$",
      "description": "Relative URL with leading slash and trailing slash"
    },
    "text": {
      "type": "string",
      "minLength": 3,
      "maxLength": 100,
      "pattern": "^(?!(click here|read more|here|link)$).*$",
      "description": "Descriptive anchor text, NOT generic phrases"
    },
    "title": {
      "type": "string",
      "minLength": 10,
      "maxLength": 100,
      "description": "Optional title attribute for additional context"
    }
  }
}
```

**Validation Rules:**
- ✅ Use relative URLs for internal links (e.g., `/startup/article-name/`)
- ✅ Always include trailing slash in hrefs
- ✅ Use descriptive anchor text that indicates destination
- ❌ Never use generic text: "click here", "read more", "here"
- ✅ Lowercase URLs with hyphens, no underscores
- ✅ Link to related content within articles (3-5 internal links per post)

**Example:**
```html
<!-- ❌ BAD -->
<a href="/startup/marketing-tips">Click here</a>

<!-- ✅ GOOD -->
<a href="/startup/marketing-tips/">Learn effective marketing strategies for startups</a>
```

---

## URL Structure - Exact Schema

**JSON Schema for URLs:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "string",
  "pattern": "^/[a-z0-9]+(-[a-z0-9]+)*/([a-z0-9]+(-[a-z0-9]+)*/)$",
  "examples": [
    "/startup/",
    "/startup/how-to-launch/",
    "/business/remote-team-management/",
    "/marketing/content-strategy-guide/"
  ],
  "description": "Lowercase, hyphen-separated, trailing slash required"
}
```

**Validation Rules:**
- ✅ All lowercase (no uppercase letters)
- ✅ Words separated by hyphens (not underscores)
- ✅ Trailing slash required
- ✅ No special characters except hyphens
- ✅ Keep URLs short and descriptive (3-5 words max)
- ❌ Never include: dates, IDs, query parameters, or file extensions

**Valid URL Patterns:**
```
✅ /startup/
✅ /startup/how-to-validate-ideas/
✅ /business/team-management-tips/
✅ /marketing/seo-for-beginners/

❌ /Startup/                          (uppercase)
❌ /startup/How-To-Validate           (mixed case)
❌ /startup/how_to_validate/          (underscores)
❌ /startup/how-to-validate           (no trailing slash)
❌ /startup/2026/01/article/          (dates in URL)
❌ /startup/article?id=123            (query parameters)
```

---

## Checklist - Use This for Every Page

Before marking any page complete, verify:

```markdown
SEO Checklist:
- [ ] Title tag present (30-60 chars, ends with " | Startup Yeti")
- [ ] Meta description present (155-160 chars)
- [ ] Canonical URL with trailing slash
- [ ] Open Graph tags (og:type, og:url, og:title, og:description, og:image)
- [ ] Twitter Card tags (all 5 required)
- [ ] Robots meta tag (index, follow)
- [ ] Viewport meta tag
- [ ] Charset UTF-8
- [ ] HTML lang="en"
- [ ] Exactly ONE H1 tag
- [ ] Proper heading hierarchy (H1→H2→H3)
- [ ] All images have descriptive alt text
- [ ] All images have width/height attributes
- [ ] Internal links use descriptive anchor text
- [ ] URLs lowercase with hyphens and trailing slashes
- [ ] Mobile responsive design
```

---

## Testing & Validation

After implementing SEO requirements, validate with these tools:

1. **Google Rich Results Test:** https://search.google.com/test/rich-results
   - Validates structured data

2. **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
   - Validates Open Graph tags

3. **Twitter Card Validator:** https://cards-dev.twitter.com/validator
   - Validates Twitter Card tags

4. **View Page Source:**
   - Manually verify all meta tags are present
   - Check for duplicate tags
   - Verify trailing slashes in URLs

5. **Lighthouse SEO Audit:**
   - Run in Chrome DevTools
   - Target: 95+ SEO score

---

## Common Mistakes to Avoid

❌ **Missing trailing slash in canonical URL**
```html
<!-- WRONG -->
<link rel="canonical" href="https://www.startupyeti.com/startup/article" />

<!-- CORRECT -->
<link rel="canonical" href="https://www.startupyeti.com/startup/article/" />
```

❌ **Using relative canonical URLs**
```html
<!-- WRONG -->
<link rel="canonical" href="/startup/article/" />

<!-- CORRECT -->
<link rel="canonical" href="https://www.startupyeti.com/startup/article/" />
```

❌ **Inconsistent meta descriptions**
```html
<!-- WRONG - Different descriptions -->
<meta name="description" content="Description A" />
<meta property="og:description" content="Description B" />

<!-- CORRECT - Same description everywhere -->
<meta name="description" content="Description A" />
<meta property="og:description" content="Description A" />
<meta name="twitter:description" content="Description A" />
```

❌ **Generic alt text**
```html
<!-- WRONG -->
<img src="hero.jpg" alt="image" />

<!-- CORRECT -->
<img src="hero.jpg" alt="Team collaborating on startup strategy in modern office" />
```

❌ **Multiple H1 tags**
```html
<!-- WRONG -->
<h1>Main Title</h1>
<h1>Subtitle</h1>

<!-- CORRECT -->
<h1>Main Title</h1>
<h2>Subtitle</h2>
```

---

## Performance Impact on SEO

SEO and performance are interconnected. Follow these performance rules:

- **Largest Contentful Paint (LCP):** < 2.5s
- **First Input Delay (FID):** < 100ms
- **Cumulative Layout Shift (CLS):** < 0.1
- **Mobile Page Speed:** 90+ (PageSpeed Insights)

**Performance Checklist:**
- [ ] Images optimized and compressed
- [ ] Lazy loading enabled for below-fold images
- [ ] Width/height attributes on all images (prevents CLS)
- [ ] Minimal JavaScript bundle
- [ ] Critical CSS inlined
- [ ] Leveraging Cloudflare CDN caching

---

**Last Updated:** January 2026
**Applies To:** All pages on www.startupyeti.com
