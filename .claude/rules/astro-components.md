---
paths:
  - "src/**/*.astro"
  - "src/**/*.tsx"
  - "src/**/*.jsx"
---

# Astro Component Patterns - Startup Yeti

**Applies to:** All Astro component files (`.astro`, `.tsx`, `.jsx`)

This rule defines exact patterns and standards for writing Astro components with precise JSON Schema validation.

---

## Astro Component Structure - Exact Schema

Every Astro component MUST follow this structure:

```astro
---
// 1. Type definitions (if using TypeScript)
interface Props {
  title: string;
  description?: string;
}

// 2. Component logic (props, data fetching, computations)
const { title, description } = Astro.props;

// 3. Data fetching (if needed)
// Fetch at build time for static generation
---

<!-- 4. HTML template -->
<div>
  <h1>{title}</h1>
  {description && <p>{description}</p>}
</div>

<!-- 5. Scoped styles (if needed) -->
<style>
  /* Component-specific styles */
</style>
```

**JSON Schema for Component Structure:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["frontmatter", "template"],
  "properties": {
    "frontmatter": {
      "type": "object",
      "description": "Code between --- fences",
      "required": ["props"],
      "properties": {
        "props": {
          "type": "object",
          "description": "Component props from Astro.props"
        },
        "imports": {
          "type": "array",
          "description": "ES6 imports at top of frontmatter"
        },
        "dataFetching": {
          "type": "boolean",
          "description": "Whether component fetches data at build time"
        }
      }
    },
    "template": {
      "type": "object",
      "required": ["html"],
      "properties": {
        "html": {
          "type": "string",
          "description": "HTML template with JSX-like syntax"
        },
        "scopedStyles": {
          "type": "boolean",
          "description": "Whether component has <style> block"
        }
      }
    }
  }
}
```

**Validation Rules:**
- ✅ Frontmatter (---) at top of file
- ✅ Props destructured from `Astro.props`
- ✅ Data fetching at build time (no runtime fetching)
- ✅ Use TypeScript interfaces for props (recommended)
- ✅ HTML template after frontmatter
- ✅ Scoped styles in `<style>` block (optional)
- ❌ Never fetch data at runtime (use static generation)
- ❌ Never use `<script>` tags unless absolutely necessary

---

## Props Definition - Exact Schema

**JSON Schema for Component Props:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "description": "TypeScript interface for component props",
  "properties": {
    "required": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["name", "type"],
        "properties": {
          "name": { "type": "string" },
          "type": { "type": "string" },
          "description": { "type": "string" }
        }
      }
    },
    "optional": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["name", "type"],
        "properties": {
          "name": { "type": "string" },
          "type": { "type": "string" },
          "default": { "description": "Default value" }
        }
      }
    }
  }
}
```

**Props Pattern:**
```astro
---
interface Props {
  // Required props
  title: string;
  url: string;

  // Optional props with defaults
  description?: string;
  showImage?: boolean;
  customClass?: string;
}

const {
  title,
  url,
  description,
  showImage = true,
  customClass = ''
} = Astro.props;
---
```

**Validation Rules:**
- ✅ Define TypeScript `interface Props` for all components with props
- ✅ Mark optional props with `?` in interface
- ✅ Provide defaults when destructuring optional props
- ✅ Use descriptive prop names (not `data`, `info`, `item`)
- ✅ Document complex props with JSDoc comments
- ❌ Never use `any` type for props
- ❌ Never access `Astro.props` directly in template (destructure first)

---

## Page Components vs Layout Components

### Page Components (`src/pages/**/*.astro`)

**Purpose:** Define routes and fetch data for specific pages

**JSON Schema for Page Component:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["route", "dataFetching", "seo"],
  "properties": {
    "route": {
      "type": "string",
      "pattern": "^/.*$",
      "description": "URL path this page generates"
    },
    "dataFetching": {
      "type": "object",
      "properties": {
        "method": {
          "type": "string",
          "enum": ["getStaticPaths", "frontmatter"],
          "description": "How data is fetched"
        },
        "source": {
          "type": "string",
          "description": "Data source (WordPress, API, static)"
        }
      }
    },
    "seo": {
      "type": "object",
      "required": ["title", "description", "canonical"],
      "properties": {
        "title": { "type": "string" },
        "description": { "type": "string" },
        "canonical": { "type": "string", "format": "uri" }
      },
      "description": "SEO metadata (see seo-requirements.md)"
    }
  }
}
```

**Page Component Pattern:**
```astro
---
// Fetch data at build time
const WORDPRESS_URL = import.meta.env.WORDPRESS_URL;

const response = await fetch(WORDPRESS_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: GRAPHQL_QUERY })
});

const { data } = await response.json();
const posts = data.posts.nodes;

// Page metadata
const pageTitle = 'Startup Articles | Startup Yeti';
const pageDescription = 'Read expert startup advice and entrepreneurship tips.';
const canonicalUrl = 'https://www.startupyeti.com/startup/';
---

<!DOCTYPE html>
<html lang="en">
<head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <link rel="canonical" href={canonicalUrl} />
  <!-- Additional SEO tags -->
</head>
<body>
  <h1>Startup Articles</h1>
  {posts.map(post => (
    <article>
      <h2>{post.title}</h2>
    </article>
  ))}
</body>
</html>
```

**Validation Rules for Pages:**
- ✅ Fetch data in frontmatter (build time)
- ✅ Include complete SEO meta tags (see seo-requirements.md)
- ✅ Use `<!DOCTYPE html>` and full HTML structure
- ✅ Set `<html lang="en">`
- ✅ Include canonical URL
- ❌ Never skip SEO metadata

---

### Layout Components (`src/layouts/**/*.astro`)

**Purpose:** Reusable page layouts with slots for content

**JSON Schema for Layout Component:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["slots", "seo"],
  "properties": {
    "slots": {
      "type": "object",
      "required": ["default"],
      "properties": {
        "default": {
          "type": "boolean",
          "const": true,
          "description": "Default slot for main content"
        },
        "named": {
          "type": "array",
          "items": { "type": "string" },
          "description": "Named slots (optional)"
        }
      }
    },
    "seo": {
      "type": "object",
      "required": ["acceptsProps"],
      "properties": {
        "acceptsProps": {
          "type": "boolean",
          "const": true,
          "description": "Layout accepts SEO props from pages"
        }
      }
    }
  }
}
```

**Layout Pattern:**
```astro
---
interface Props {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
}

const {
  title,
  description,
  canonicalUrl,
  ogImage = 'https://www.startupyeti.com/default-og.jpg'
} = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO Meta Tags -->
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalUrl} />

  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />

  <!-- Fonts, Styles -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
</head>
<body>
  <header>
    <!-- Global navigation -->
  </header>

  <main>
    <slot /> <!-- Page content inserted here -->
  </main>

  <footer>
    <!-- Global footer -->
  </footer>
</body>
</html>
```

**Validation Rules for Layouts:**
- ✅ Accept SEO props (title, description, canonical)
- ✅ Include `<slot />` for page content
- ✅ Define complete HTML structure
- ✅ Include global styles and scripts
- ✅ Use TypeScript interface for props
- ❌ Never hardcode page-specific content in layouts

---

## Reusable UI Components (`src/components/**/*.astro`)

**Purpose:** Small, reusable UI elements

**JSON Schema for UI Component:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["props", "presentation"],
  "properties": {
    "props": {
      "type": "object",
      "description": "Component accepts specific props"
    },
    "presentation": {
      "type": "string",
      "enum": ["stateless", "no-client-js"],
      "description": "Component is purely presentational"
    },
    "styling": {
      "type": "string",
      "enum": ["tailwind", "scoped-css"],
      "description": "Styling method"
    }
  }
}
```

**UI Component Pattern:**
```astro
---
interface Props {
  title: string;
  excerpt: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
  category: {
    name: string;
    slug: string;
  };
}

const { title, excerpt, url, imageUrl, imageAlt, category } = Astro.props;
---

<article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
  <a href={url}>
    <img
      src={imageUrl}
      alt={imageAlt}
      width="400"
      height="250"
      loading="lazy"
      class="w-full h-48 object-cover"
    />
  </a>

  <div class="p-6">
    <a
      href={`/${category.slug}/`}
      class="text-sm font-semibold text-blue-600 hover:text-blue-800"
    >
      {category.name}
    </a>

    <h2 class="mt-2 text-xl font-bold">
      <a href={url} class="hover:text-blue-600">
        {title}
      </a>
    </h2>

    <p class="mt-2 text-gray-600 line-clamp-3">
      {excerpt}
    </p>
  </div>
</article>
```

**Validation Rules for UI Components:**
- ✅ Single responsibility (one purpose per component)
- ✅ Stateless (no client-side JavaScript unless necessary)
- ✅ Reusable across multiple pages
- ✅ Use Tailwind classes for styling
- ✅ Accept props for customization
- ✅ Include proper TypeScript types
- ❌ Never fetch data in UI components (pass via props)
- ❌ Never include SEO metadata in UI components

---

## Conditional Rendering - Exact Schema

**JSON Schema for Conditionals:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["syntax", "pattern"],
  "properties": {
    "syntax": {
      "type": "string",
      "enum": ["logical-and", "ternary", "if-else"],
      "description": "Conditional syntax pattern"
    },
    "pattern": {
      "type": "string",
      "description": "Recommended pattern for different cases"
    }
  }
}
```

**Conditional Patterns:**

```astro
---
const { title, description, showImage, imageUrl } = Astro.props;
---

<!-- 1. Logical AND for simple conditionals -->
{showImage && (
  <img src={imageUrl} alt={title} />
)}

<!-- 2. Ternary for true/false cases -->
<div class={showImage ? 'has-image' : 'no-image'}>
  {/* content */}
</div>

<!-- 3. Nullish coalescing for defaults -->
<p>{description ?? 'No description available'}</p>

<!-- 4. Optional chaining for nested properties -->
<img src={post.featuredImage?.node?.sourceUrl} alt={post.title} />
```

**Validation Rules:**
- ✅ Use `&&` for simple "if condition, render this"
- ✅ Use ternary `? :` for "render A or B"
- ✅ Use `??` for default values
- ✅ Use `?.` for optional nested properties
- ❌ Avoid complex nested conditionals (extract to variables)
- ❌ Never use `if/else` statements in template (use frontmatter)

---

## List Rendering - Exact Schema

**JSON Schema for Lists:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["method", "key"],
  "properties": {
    "method": {
      "type": "string",
      "const": "map",
      "description": "Use .map() for rendering lists"
    },
    "key": {
      "type": "string",
      "description": "Unique identifier for each item (slug, id)"
    }
  }
}
```

**List Rendering Pattern:**

```astro
---
const posts = [...]; // Array of posts from WordPress
---

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  {posts.map((post) => (
    <article key={post.slug}>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <a href={`/${post.category.slug}/${post.slug}/`}>
        Read more
      </a>
    </article>
  ))}
</div>
```

**Validation Rules:**
- ✅ Use `.map()` for iterating arrays
- ✅ Provide unique `key` attribute (slug, id)
- ✅ Extract complex list items to separate components
- ✅ Handle empty arrays gracefully
- ❌ Never use `for` loops in templates
- ❌ Never use array index as key (use slug/id)

**Empty State Pattern:**

```astro
{posts.length > 0 ? (
  <div class="grid">
    {posts.map((post) => (
      <PostCard key={post.slug} {...post} />
    ))}
  </div>
) : (
  <p class="text-gray-600">No posts found.</p>
)}
```

---

## Data Fetching in Components - Exact Schema

**JSON Schema for Data Fetching:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["timing", "location", "caching"],
  "properties": {
    "timing": {
      "type": "string",
      "const": "build-time",
      "description": "Always fetch at build time (static generation)"
    },
    "location": {
      "type": "string",
      "const": "frontmatter",
      "description": "Fetch in component frontmatter"
    },
    "caching": {
      "type": "string",
      "const": "static-files",
      "description": "Cached as static HTML by Cloudflare"
    }
  }
}
```

**Data Fetching Pattern:**

```astro
---
// ✅ CORRECT: Fetch in frontmatter (build time)
const WORDPRESS_URL = import.meta.env.WORDPRESS_URL;

const response = await fetch(WORDPRESS_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: GRAPHQL_QUERY })
});

const { data } = await response.json();
const posts = data.posts.nodes;
---

<div>
  {posts.map(post => (
    <h2>{post.title}</h2>
  ))}
</div>
```

**Validation Rules:**
- ✅ Fetch data in component frontmatter
- ✅ Use `await` for async operations
- ✅ Handle errors with try/catch
- ✅ Fetch at build time only (static generation)
- ❌ Never fetch data in template section
- ❌ Never use client-side fetching (no `useEffect`, `onMount`)
- ❌ Never use SSR unless absolutely required

---

## Styling with Tailwind CSS - Exact Schema

**JSON Schema for Styling:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["method", "responsive"],
  "properties": {
    "method": {
      "type": "string",
      "const": "tailwind-classes",
      "description": "Use Tailwind utility classes"
    },
    "responsive": {
      "type": "boolean",
      "const": true,
      "description": "Use responsive breakpoint prefixes"
    },
    "customCss": {
      "type": "boolean",
      "default": false,
      "description": "Minimize custom CSS, prefer Tailwind"
    }
  }
}
```

**Tailwind Pattern:**

```astro
---
const { title, featured = false } = Astro.props;
---

<article class={`
  bg-white rounded-lg shadow-md overflow-hidden
  hover:shadow-lg transition-shadow duration-300
  ${featured ? 'border-4 border-blue-500' : ''}
`}>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-gray-900 mb-2">
      {title}
    </h2>
  </div>
</article>

<!-- Responsive design -->
<div class="
  grid grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  gap-4 md:gap-6
">
  <!-- Items -->
</div>
```

**Validation Rules:**
- ✅ Use Tailwind utility classes for styling
- ✅ Use responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- ✅ Use template literals for dynamic classes
- ✅ Group related classes together (layout, spacing, colors)
- ✅ Use Tailwind @apply in `<style>` only when necessary
- ❌ Avoid inline styles (`style=""`)
- ❌ Minimize custom CSS (prefer Tailwind utilities)

**Responsive Breakpoints:**
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

---

## Performance Optimization - Exact Schema

**JSON Schema for Performance:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["images", "scripts", "styles"],
  "properties": {
    "images": {
      "type": "object",
      "required": ["lazyLoading", "dimensions"],
      "properties": {
        "lazyLoading": {
          "type": "string",
          "enum": ["lazy", "eager"],
          "description": "Use 'lazy' except for above-fold images"
        },
        "dimensions": {
          "type": "boolean",
          "const": true,
          "description": "Always include width/height attributes"
        }
      }
    },
    "scripts": {
      "type": "object",
      "properties": {
        "amount": {
          "type": "string",
          "const": "minimal",
          "description": "Minimize JavaScript usage"
        }
      }
    },
    "styles": {
      "type": "object",
      "properties": {
        "method": {
          "type": "string",
          "const": "tailwind-utilities",
          "description": "Prefer Tailwind over custom CSS"
        }
      }
    }
  }
}
```

**Performance Patterns:**

```astro
<!-- ✅ Images with lazy loading -->
<img
  src={imageUrl}
  alt={imageAlt}
  width="800"
  height="600"
  loading="lazy"
  class="w-full h-auto"
/>

<!-- ✅ Above-fold images load eagerly -->
<img
  src={heroImage}
  alt="Hero"
  width="1200"
  height="630"
  loading="eager"
  fetchpriority="high"
/>

<!-- ✅ Minimize JavaScript -->
<!-- Use Astro's static output, avoid client:* directives unless necessary -->
```

**Validation Rules:**
- ✅ Add `width` and `height` to all images (prevents CLS)
- ✅ Use `loading="lazy"` for below-fold images
- ✅ Use `loading="eager"` for hero/featured images
- ✅ Use `fetchpriority="high"` for LCP images
- ✅ Minimize JavaScript (prefer static HTML)
- ✅ Avoid client-side hydration unless interactive
- ❌ Never omit image dimensions
- ❌ Never load all images eagerly

---

## Common Patterns

### Blog Post Card Component

```astro
---
interface Props {
  title: string;
  excerpt: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
  category: { name: string; slug: string };
  date: string;
  author: string;
}

const { title, excerpt, url, imageUrl, imageAlt, category, date, author } = Astro.props;
---

<article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
  <a href={url}>
    <img
      src={imageUrl}
      alt={imageAlt}
      width="400"
      height="250"
      loading="lazy"
      class="w-full h-48 object-cover"
    />
  </a>

  <div class="p-6">
    <a href={`/${category.slug}/`} class="text-sm font-semibold text-blue-600">
      {category.name}
    </a>

    <h2 class="mt-2 text-xl font-bold text-gray-900">
      <a href={url} class="hover:text-blue-600 transition-colors">
        {title}
      </a>
    </h2>

    <p class="mt-2 text-gray-600 line-clamp-3">
      {excerpt}
    </p>

    <div class="mt-4 flex items-center gap-2 text-sm text-gray-500">
      <span>{author}</span>
      <span>•</span>
      <time datetime={date}>{new Date(date).toLocaleDateString()}</time>
    </div>
  </div>
</article>
```

### Category Page with Post Grid

```astro
---
const posts = [...]; // Fetched from WordPress
const categoryName = 'Startup';
---

<div class="container mx-auto px-4 py-12">
  <h1 class="text-4xl font-bold text-gray-900 mb-8">
    {categoryName} Articles
  </h1>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map((post) => (
      <PostCard
        key={post.slug}
        title={post.title}
        excerpt={post.excerpt}
        url={`/${post.category.slug}/${post.slug}/`}
        imageUrl={post.featuredImage.url}
        imageAlt={post.featuredImage.alt}
        category={post.category}
        date={post.date}
        author={post.author.name}
      />
    ))}
  </div>
</div>
```

---

## Component Checklist

Use this for every component:

```markdown
Astro Component Checklist:
- [ ] Frontmatter at top (---)
- [ ] TypeScript interface for Props (if has props)
- [ ] Props destructured from Astro.props
- [ ] Data fetching in frontmatter (build time)
- [ ] Error handling for data fetching
- [ ] Tailwind classes for styling
- [ ] Responsive design (mobile-first)
- [ ] Images have width/height attributes
- [ ] Lazy loading for below-fold images
- [ ] Minimal JavaScript (static output preferred)
- [ ] Conditional rendering uses &&, ternary, ??
- [ ] Lists use .map() with unique keys
- [ ] Component has single responsibility
- [ ] No client-side hydration unless necessary
```

---

**Last Updated:** January 2026
**Applies To:** All Astro component files (`.astro`, `.tsx`, `.jsx`)
