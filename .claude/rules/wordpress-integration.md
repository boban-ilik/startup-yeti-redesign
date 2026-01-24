# WordPress GraphQL Integration - Startup Yeti

**Applies to:** All files that fetch WordPress data

This rule defines exact patterns for integrating with WordPress headless CMS via GraphQL.

---

## WordPress Environment Configuration - Exact Schema

**JSON Schema for Environment Variables:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["WORDPRESS_URL"],
  "properties": {
    "WORDPRESS_URL": {
      "type": "string",
      "format": "uri",
      "pattern": "^https://.*\\.wordpress\\.com/graphql$",
      "const": "https://startupyeticom.wordpress.com/graphql",
      "description": "WordPress GraphQL endpoint URL"
    }
  }
}
```

**Setup in `.env`:**
```bash
WORDPRESS_URL=https://startupyeticom.wordpress.com/graphql
```

**Usage in Astro:**
```javascript
const WORDPRESS_URL = import.meta.env.WORDPRESS_URL;
```

**Validation Rules:**
- ✅ Always use `import.meta.env.WORDPRESS_URL`
- ❌ Never hardcode WordPress URL in code
- ✅ Endpoint must end with `/graphql`
- ✅ Use HTTPS (never HTTP)
- ✅ Set in Cloudflare Pages environment variables for production

---

## GraphQL Fetch Function - Exact Schema

Use this EXACT pattern for all WordPress GraphQL requests:

**JSON Schema for Fetch Request:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["url", "method", "headers", "body"],
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "WordPress GraphQL endpoint from environment"
    },
    "method": {
      "type": "string",
      "const": "POST",
      "description": "GraphQL always uses POST"
    },
    "headers": {
      "type": "object",
      "required": ["Content-Type", "User-Agent"],
      "properties": {
        "Content-Type": {
          "type": "string",
          "const": "application/json"
        },
        "User-Agent": {
          "type": "string",
          "pattern": "^StartupYeti/\\d+\\.\\d+",
          "example": "StartupYeti/1.0 (Astro Static Site Generator)"
        }
      }
    },
    "body": {
      "type": "object",
      "required": ["query"],
      "properties": {
        "query": {
          "type": "string",
          "description": "GraphQL query string"
        },
        "variables": {
          "type": "object",
          "description": "Optional query variables"
        }
      }
    }
  }
}
```

**Standard Fetch Pattern:**
```javascript
const WORDPRESS_URL = import.meta.env.WORDPRESS_URL;

const response = await fetch(WORDPRESS_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'StartupYeti/1.0 (Astro Static Site Generator)'
  },
  body: JSON.stringify({
    query: `{GRAPHQL_QUERY}`,
    variables: {} // Optional
  })
});

const { data, errors } = await response.json();

if (errors) {
  console.error('WordPress GraphQL errors:', errors);
  throw new Error('Failed to fetch WordPress data');
}
```

**Validation Rules:**
- ✅ Always use POST method
- ✅ Include User-Agent header (identifies traffic source)
- ✅ Content-Type must be "application/json"
- ✅ Check for errors in response
- ✅ Handle fetch failures gracefully
- ❌ Never ignore errors property in response
- ✅ Use try/catch for network failures

---

## GraphQL Query Patterns - Exact Schema

### 1. Fetch All Posts (Build Time)

**Use Case:** Generate static paths for all blog posts

**JSON Schema for Query:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["query"],
  "properties": {
    "query": {
      "type": "string",
      "const": "query GetAllPosts {\n  posts(first: 100, where: {orderby: {field: DATE, order: DESC}}) {\n    nodes {\n      slug\n      title\n      excerpt\n      content\n      date\n      featuredImage {\n        node {\n          sourceUrl\n          altText\n        }\n      }\n      author {\n        node {\n          name\n          avatar {\n            url\n          }\n        }\n      }\n      categories {\n        nodes {\n          name\n          slug\n        }\n      }\n    }\n  }\n}"
    }
  }
}
```

**Exact Query:**
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

**Validation Rules:**
- ✅ Fetch maximum 100 posts (WordPress GraphQL limit)
- ✅ Order by DATE descending (newest first)
- ✅ Include all required fields (see blog-posts.md)
- ✅ Always fetch featuredImage with sourceUrl AND altText
- ✅ Always fetch author with name and avatar
- ✅ Always fetch categories array
- ❌ Never omit required fields

---

### 2. Fetch Posts by Category

**Use Case:** Category page showing filtered posts

**JSON Schema for Category Query:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["query", "variables"],
  "properties": {
    "query": {
      "type": "string",
      "description": "GraphQL query with $categorySlug variable"
    },
    "variables": {
      "type": "object",
      "required": ["categorySlug"],
      "properties": {
        "categorySlug": {
          "type": "string",
          "enum": ["startup", "business", "marketing", "remote-work", "productivity", "team-management", "founder-wellbeing"],
          "description": "Category slug to filter by"
        }
      }
    }
  }
}
```

**Exact Query with Variables:**
```graphql
query GetPostsByCategory($categorySlug: String!) {
  posts(
    first: 100,
    where: {
      orderby: {field: DATE, order: DESC},
      categoryName: $categorySlug
    }
  ) {
    nodes {
      slug
      title
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

**Usage:**
```javascript
const response = await fetch(WORDPRESS_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'StartupYeti/1.0'
  },
  body: JSON.stringify({
    query: GET_POSTS_BY_CATEGORY_QUERY,
    variables: {
      categorySlug: 'startup'
    }
  })
});
```

**Validation Rules:**
- ✅ Use GraphQL variables for dynamic values
- ✅ Filter using `categoryName` field (matches slug)
- ✅ Validate category slug against allowed values
- ❌ Never use string interpolation in GraphQL queries
- ✅ Use parameterized queries for security

---

### 3. Fetch Single Post by Slug

**Use Case:** Display individual post (if not using getStaticPaths)

**Exact Query:**
```graphql
query GetPostBySlug($slug: String!) {
  postBy(slug: $slug) {
    slug
    title
    content
    excerpt
    date
    modified
    featuredImage {
      node {
        sourceUrl
        altText
        mediaDetails {
          width
          height
        }
      }
    }
    author {
      node {
        name
        description
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
    tags {
      nodes {
        name
        slug
      }
    }
  }
}
```

**Validation Rules:**
- ✅ Use `postBy(slug: $slug)` for single post queries
- ✅ Include `modified` date for dateModified in schema
- ✅ Fetch mediaDetails for image dimensions
- ✅ Include tags if needed for metadata
- ✅ Check if post is null (404 handling)

---

## Response Validation - Exact Schema

**JSON Schema for WordPress Response:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "data": {
      "type": ["object", "null"],
      "description": "Query results, null if errors occurred"
    },
    "errors": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["message"],
        "properties": {
          "message": {
            "type": "string"
          },
          "locations": {
            "type": "array"
          },
          "path": {
            "type": "array"
          }
        }
      },
      "description": "GraphQL errors, empty array if no errors"
    }
  }
}
```

**Response Handling Pattern:**
```javascript
const response = await fetch(WORDPRESS_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'StartupYeti/1.0'
  },
  body: JSON.stringify({ query: GRAPHQL_QUERY })
});

// Check HTTP status
if (!response.ok) {
  throw new Error(`WordPress API returned ${response.status}`);
}

const { data, errors } = await response.json();

// Check GraphQL errors
if (errors && errors.length > 0) {
  console.error('GraphQL errors:', errors);
  throw new Error(`GraphQL errors: ${errors.map(e => e.message).join(', ')}`);
}

// Check if data exists
if (!data || !data.posts) {
  throw new Error('No data returned from WordPress');
}

// Use data
const posts = data.posts.nodes;
```

**Validation Rules:**
- ✅ Check HTTP response status first
- ✅ Parse JSON response
- ✅ Check `errors` array (empty if successful)
- ✅ Verify `data` is not null
- ✅ Log errors for debugging
- ✅ Throw errors to fail build (don't silently ignore)
- ❌ Never assume data exists without checking

---

## Error Handling - Exact Schema

**JSON Schema for Error Handling:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["try", "catch"],
  "properties": {
    "try": {
      "type": "object",
      "description": "Wrap all WordPress fetches in try block"
    },
    "catch": {
      "type": "object",
      "required": ["logError", "throwError"],
      "properties": {
        "logError": {
          "type": "boolean",
          "const": true,
          "description": "Always log errors to console"
        },
        "throwError": {
          "type": "boolean",
          "const": true,
          "description": "Re-throw to fail build"
        },
        "fallback": {
          "type": "boolean",
          "const": false,
          "description": "No silent fallbacks, fail fast"
        }
      }
    }
  }
}
```

**Error Handling Pattern:**
```javascript
async function fetchWordPressData(query, variables = {}) {
  const WORDPRESS_URL = import.meta.env.WORDPRESS_URL;

  if (!WORDPRESS_URL) {
    throw new Error('WORDPRESS_URL environment variable not set');
  }

  try {
    const response = await fetch(WORDPRESS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'StartupYeti/1.0 (Astro Static Site Generator)'
      },
      body: JSON.stringify({ query, variables })
    });

    if (!response.ok) {
      throw new Error(
        `WordPress API HTTP error: ${response.status} ${response.statusText}`
      );
    }

    const { data, errors } = await response.json();

    if (errors && errors.length > 0) {
      throw new Error(
        `WordPress GraphQL errors: ${errors.map(e => e.message).join(', ')}`
      );
    }

    if (!data) {
      throw new Error('WordPress API returned no data');
    }

    return data;

  } catch (error) {
    console.error('WordPress fetch error:', error);
    throw error; // Re-throw to fail build
  }
}
```

**Validation Rules:**
- ✅ Check environment variable exists
- ✅ Wrap all fetches in try/catch
- ✅ Check HTTP status code
- ✅ Check GraphQL errors array
- ✅ Verify data exists
- ✅ Log detailed error information
- ✅ Re-throw errors (fail build, don't hide problems)
- ❌ Never silently fall back to empty data
- ❌ Never return null/undefined on error

---

## Data Transformation - Exact Schema

**JSON Schema for Post Transformation:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "description": "Transform WordPress data for Astro usage",
  "required": ["slug", "title", "excerpt", "content", "date", "category", "author", "featuredImage"],
  "properties": {
    "slug": {
      "type": "string",
      "description": "Post slug (from WordPress)"
    },
    "title": {
      "type": "string",
      "description": "Post title (from WordPress)"
    },
    "excerpt": {
      "type": "string",
      "description": "Plain text excerpt (strip HTML tags)"
    },
    "content": {
      "type": "string",
      "description": "Full HTML content (preserve WordPress HTML)"
    },
    "date": {
      "type": "string",
      "format": "date-time",
      "description": "ISO 8601 date string"
    },
    "formattedDate": {
      "type": "string",
      "description": "Human-readable date (e.g., 'January 15, 2026')"
    },
    "category": {
      "type": "object",
      "required": ["name", "slug"],
      "properties": {
        "name": { "type": "string" },
        "slug": { "type": "string" }
      },
      "description": "Primary category (first category)"
    },
    "author": {
      "type": "object",
      "required": ["name"],
      "properties": {
        "name": { "type": "string" },
        "avatarUrl": { "type": "string", "format": "uri" }
      }
    },
    "featuredImage": {
      "type": "object",
      "required": ["url", "alt"],
      "properties": {
        "url": { "type": "string", "format": "uri" },
        "alt": { "type": "string" },
        "width": { "type": "integer" },
        "height": { "type": "integer" }
      }
    }
  }
}
```

**Transformation Utilities:**

```javascript
// Strip HTML from excerpt
function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '').trim();
}

// Format date to human-readable
function formatDate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Calculate reading time
function calculateReadingTime(content) {
  const text = stripHtml(content);
  const wordCount = text.split(/\s+/).length;
  const wordsPerMinute = 200;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Transform WordPress post
function transformPost(wordpressPost) {
  return {
    slug: wordpressPost.slug,
    title: wordpressPost.title,
    excerpt: stripHtml(wordpressPost.excerpt),
    content: wordpressPost.content, // Keep HTML
    date: wordpressPost.date,
    formattedDate: formatDate(wordpressPost.date),
    readingTime: calculateReadingTime(wordpressPost.content),
    category: {
      name: wordpressPost.categories.nodes[0].name,
      slug: wordpressPost.categories.nodes[0].slug
    },
    author: {
      name: wordpressPost.author.node.name,
      avatarUrl: wordpressPost.author.node.avatar?.url || '/default-avatar.png'
    },
    featuredImage: {
      url: wordpressPost.featuredImage?.node?.sourceUrl || '/default-image.jpg',
      alt: wordpressPost.featuredImage?.node?.altText || wordpressPost.title,
      width: wordpressPost.featuredImage?.node?.mediaDetails?.width || 1200,
      height: wordpressPost.featuredImage?.node?.mediaDetails?.height || 630
    }
  };
}
```

**Validation Rules:**
- ✅ Strip HTML from excerpt for meta descriptions
- ✅ Keep HTML in content (render with set:html)
- ✅ Format dates to human-readable strings
- ✅ Calculate reading time from word count
- ✅ Use first category as primary category
- ✅ Provide fallback for missing featured images
- ✅ Provide fallback for missing alt text
- ✅ Provide fallback for missing avatar URLs

---

## Caching Strategy - Exact Schema

**Build-Time Fetching:**

WordPress data is fetched ONLY at build time (static site generation). No runtime fetching.

**JSON Schema for Caching:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["fetchTime", "cacheStrategy", "revalidation"],
  "properties": {
    "fetchTime": {
      "type": "string",
      "const": "build-time",
      "description": "Data fetched during Astro build"
    },
    "cacheStrategy": {
      "type": "string",
      "const": "static",
      "description": "Static files cached by Cloudflare CDN"
    },
    "revalidation": {
      "type": "object",
      "required": ["method", "trigger"],
      "properties": {
        "method": {
          "type": "string",
          "enum": ["manual-rebuild", "git-push"],
          "description": "How to update content"
        },
        "trigger": {
          "type": "string",
          "description": "What triggers rebuild"
        }
      }
    }
  }
}
```

**Content Update Flow:**

1. **Content Update in WordPress**
   - Editor publishes/updates post in WordPress

2. **Trigger Rebuild**
   - Git push to main branch (auto-rebuild), OR
   - Manual deployment in Cloudflare Pages

3. **Build Process**
   - Astro fetches ALL posts from WordPress GraphQL
   - Generates static HTML files
   - Deploys to Cloudflare Pages

4. **CDN Caching**
   - Cloudflare CDN caches static files
   - Users receive cached HTML (no WordPress requests)

**Validation Rules:**
- ✅ Fetch data in `getStaticPaths()` (build time)
- ❌ Never fetch WordPress data at runtime (SSR)
- ✅ Rebuild site when WordPress content changes
- ✅ Leverage Cloudflare CDN for caching
- ✅ Set proper cache headers (see deployment.md)

---

## WordPress-Specific Field Mappings

**Category Slug Mappings:**

| WordPress Category | URL Slug | Display Name |
|-------------------|----------|--------------|
| startup | startup | Startup |
| business | business | Business |
| marketing | marketing | Marketing |
| remote-work | remote-work | Remote Work |
| productivity | productivity | Productivity |
| team-management | team-management | Team Management |
| founder-wellbeing | founder-wellbeing | Founder Wellbeing |

**Legacy Category Redirects:**

| Old WordPress Category | Redirects To |
|-----------------------|--------------|
| sales | business |
| trends | startup |
| customer-experience | business |
| employment | startup |
| content-marketing | marketing |

---

## WordPress Configuration Requirements

**Required WordPress Plugins:**
- WPGraphQL (for GraphQL API)

**WordPress Settings:**
- GraphQL endpoint: Public access enabled
- Permalink structure: Post name
- Featured images: Required for all posts
- Categories: Assigned to all posts

**GraphQL Endpoint URL:**
```
https://startupyeticom.wordpress.com/graphql
```

**Testing Endpoint:**
```bash
curl -X POST https://startupyeticom.wordpress.com/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "{ posts { nodes { title } } }"}'
```

---

## Common WordPress Integration Issues

### Issue: GraphQL Endpoint Not Responding

**Symptoms:**
- Fetch returns 404 or 500
- Build fails with connection error

**Diagnosis:**
```javascript
// Test endpoint
const response = await fetch(WORDPRESS_URL);
console.log('Status:', response.status);
console.log('Headers:', response.headers);
```

**Solutions:**
- ✅ Verify WPGraphQL plugin is active
- ✅ Check WordPress.com site is accessible
- ✅ Confirm endpoint URL is correct (`/graphql` path)
- ✅ Test with simple query first

### Issue: Missing Required Fields

**Symptoms:**
- Build succeeds but pages show "undefined"
- Console shows "Cannot read property of null"

**Diagnosis:**
```javascript
// Log raw WordPress response
console.log('WordPress data:', JSON.stringify(data, null, 2));
```

**Solutions:**
- ✅ Verify all required fields in GraphQL query
- ✅ Check WordPress posts have featuredImage set
- ✅ Ensure categories are assigned
- ✅ Add fallbacks for optional fields

### Issue: HTML Encoding in Content

**Symptoms:**
- HTML entities showing in content (e.g., `&amp;`, `&quot;`)

**Solution:**
- ✅ Use `<Fragment set:html={content} />` in Astro
- ✅ WordPress content is already HTML-encoded correctly
- ❌ Don't double-encode or decode

### Issue: Slow Build Times

**Symptoms:**
- Build takes >5 minutes
- WordPress fetch timing out

**Solutions:**
- ✅ Reduce posts fetched per query (use pagination)
- ✅ Remove unnecessary fields from GraphQL query
- ✅ Check WordPress.com performance
- ✅ Add timeout to fetch requests

---

## Testing WordPress Integration

**Test Checklist:**

```markdown
WordPress Integration Tests:
- [ ] Environment variable WORDPRESS_URL is set
- [ ] GraphQL endpoint returns data (test with curl)
- [ ] All required fields present in response
- [ ] Posts have featured images
- [ ] Posts have categories assigned
- [ ] Author data is complete
- [ ] Dates are in ISO 8601 format
- [ ] HTML content renders correctly
- [ ] Images load from WordPress CDN
- [ ] Error handling works (test with invalid query)
- [ ] Build succeeds with live WordPress data
- [ ] Build fails gracefully if WordPress is down
```

**Manual Test:**

```bash
# Test GraphQL endpoint
curl -X POST https://startupyeticom.wordpress.com/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "{ posts(first: 1) { nodes { title slug } } }"}' \
  | jq .

# Expected output:
# {
#   "data": {
#     "posts": {
#       "nodes": [
#         {
#           "title": "Post Title",
#           "slug": "post-slug"
#         }
#       ]
#     }
#   }
# }
```

---

**Last Updated:** January 2026
**Applies To:** All files fetching WordPress data via GraphQL
