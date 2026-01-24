---
paths:
  - "src/pages/[category]/[slug].astro"
---

# Blog Post Specific Rules - Startup Yeti

**Applies to:** Dynamic blog post pages only (`src/pages/[category]/[slug].astro`)

This rule defines the exact structure and requirements for blog post pages, with precise JSON Schema validation.

---

## Blog Post Page Structure - Exact Schema

Every blog post page MUST implement this exact structure:

### 1. Dynamic Route with `getStaticPaths()`

**Required Pattern:**
```astro
---
export async function getStaticPaths() {
  const WORDPRESS_URL = import.meta.env.WORDPRESS_URL;

  const response = await fetch(WORDPRESS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'StartupYeti/1.0 (Astro Static Site Generator)'
    },
    body: JSON.stringify({
      query: `{GRAPHQL_QUERY}`
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
```

**JSON Schema for getStaticPaths Return:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "required": ["params", "props"],
    "properties": {
      "params": {
        "type": "object",
        "required": ["category", "slug"],
        "properties": {
          "category": {
            "type": "string",
            "pattern": "^[a-z]+(-[a-z]+)*$",
            "enum": [
              "startup",
              "business",
              "marketing",
              "remote-work",
              "productivity",
              "team-management",
              "founder-wellbeing"
            ],
            "description": "First category slug from WordPress"
          },
          "slug": {
            "type": "string",
            "pattern": "^[a-z0-9]+(-[a-z0-9]+)*$",
            "minLength": 3,
            "maxLength": 100,
            "description": "Post slug from WordPress"
          }
        }
      },
      "props": {
        "type": "object",
        "required": ["post"],
        "properties": {
          "post": {
            "$ref": "#/definitions/WordPressPost"
          }
        }
      }
    }
  },
  "definitions": {
    "WordPressPost": {
      "type": "object",
      "required": ["slug", "title", "content", "excerpt", "date", "featuredImage", "author", "categories"],
      "properties": {
        "slug": { "type": "string" },
        "title": { "type": "string" },
        "content": { "type": "string" },
        "excerpt": { "type": "string" },
        "date": { "type": "string", "format": "date-time" },
        "featuredImage": {
          "type": "object",
          "required": ["node"],
          "properties": {
            "node": {
              "type": "object",
              "required": ["sourceUrl", "altText"],
              "properties": {
                "sourceUrl": { "type": "string", "format": "uri" },
                "altText": { "type": "string", "minLength": 10 }
              }
            }
          }
        },
        "author": {
          "type": "object",
          "required": ["node"],
          "properties": {
            "node": {
              "type": "object",
              "required": ["name"],
              "properties": {
                "name": { "type": "string" },
                "avatar": {
                  "type": "object",
                  "properties": {
                    "url": { "type": "string", "format": "uri" }
                  }
                }
              }
            }
          }
        },
        "categories": {
          "type": "object",
          "required": ["nodes"],
          "properties": {
            "nodes": {
              "type": "array",
              "minItems": 1,
              "items": {
                "type": "object",
                "required": ["name", "slug"],
                "properties": {
                  "name": { "type": "string" },
                  "slug": { "type": "string" }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

**Validation Rules:**
- ✅ Must use `export async function getStaticPaths()`
- ✅ Must fetch from `import.meta.env.WORDPRESS_URL`
- ✅ Must include User-Agent header in fetch request
- ✅ Must use first category slug for URL structure
- ✅ Must pass complete post object in props
- ❌ Never hardcode WordPress URL
- ❌ Never skip error handling for fetch

---

## WordPress GraphQL Query - Exact Schema

Use this EXACT GraphQL query for fetching posts:

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

**JSON Schema for GraphQL Response:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["data"],
  "properties": {
    "data": {
      "type": "object",
      "required": ["posts"],
      "properties": {
        "posts": {
          "type": "object",
          "required": ["nodes"],
          "properties": {
            "nodes": {
              "type": "array",
              "items": {
                "type": "object",
                "required": ["slug", "title", "excerpt", "content", "date", "featuredImage", "author", "categories"],
                "properties": {
                  "slug": {
                    "type": "string",
                    "pattern": "^[a-z0-9-]+$"
                  },
                  "title": {
                    "type": "string",
                    "minLength": 10,
                    "maxLength": 100
                  },
                  "excerpt": {
                    "type": "string",
                    "minLength": 50,
                    "maxLength": 300
                  },
                  "content": {
                    "type": "string",
                    "minLength": 100
                  },
                  "date": {
                    "type": "string",
                    "format": "date-time"
                  },
                  "featuredImage": {
                    "type": ["object", "null"],
                    "properties": {
                      "node": {
                        "type": "object",
                        "required": ["sourceUrl"],
                        "properties": {
                          "sourceUrl": {
                            "type": "string",
                            "format": "uri",
                            "pattern": "^https://"
                          },
                          "altText": {
                            "type": ["string", "null"],
                            "minLength": 10
                          }
                        }
                      }
                    }
                  },
                  "author": {
                    "type": "object",
                    "required": ["node"],
                    "properties": {
                      "node": {
                        "type": "object",
                        "required": ["name"],
                        "properties": {
                          "name": {
                            "type": "string",
                            "minLength": 2
                          },
                          "avatar": {
                            "type": ["object", "null"],
                            "properties": {
                              "url": {
                                "type": "string",
                                "format": "uri"
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "categories": {
                    "type": "object",
                    "required": ["nodes"],
                    "properties": {
                      "nodes": {
                        "type": "array",
                        "minItems": 1,
                        "items": {
                          "type": "object",
                          "required": ["name", "slug"],
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "slug": {
                              "type": "string",
                              "pattern": "^[a-z-]+$"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

**Required Fields:**
- ✅ `slug` - For URL generation
- ✅ `title` - Article title
- ✅ `excerpt` - For meta description and cards
- ✅ `content` - Full article HTML
- ✅ `date` - Publication date
- ✅ `featuredImage.node.sourceUrl` - Featured image URL
- ✅ `featuredImage.node.altText` - Image alt text
- ✅ `author.node.name` - Author name
- ✅ `author.node.avatar.url` - Author avatar (optional but recommended)
- ✅ `categories.nodes[]` - At least one category

---

## Blog Post HTML Structure - Exact Schema

Every blog post page MUST follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- SEO meta tags (see seo-requirements.md) -->
  <title>{post.title} | Startup Yeti</title>
  <meta name="description" content="{post.excerpt (strip HTML, 155-160 chars)}" />
  <link rel="canonical" href="https://www.startupyeti.com/{category}/{slug}/" />

  <!-- Open Graph for articles -->
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content="{post.date}" />
  <meta property="article:author" content="{post.author.node.name}" />

  <!-- Structured Data for Article -->
  <script type="application/ld+json">{JSON-LD schema}</script>
</head>
<body>
  <article>
    <header>
      <!-- Breadcrumbs -->
      <!-- Category badge -->
      <!-- H1 title -->
      <!-- Author info -->
      <!-- Publication date -->
    </header>

    <!-- Featured image -->

    <div class="prose">
      <!-- Article content -->
    </div>

    <footer>
      <!-- Share buttons -->
      <!-- Related posts -->
    </footer>
  </article>
</body>
</html>
```

**JSON Schema for Blog Post Page Structure:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["header", "featuredImage", "content", "footer"],
  "properties": {
    "header": {
      "type": "object",
      "required": ["breadcrumbs", "categoryBadge", "title", "author", "publishDate"],
      "properties": {
        "breadcrumbs": {
          "type": "object",
          "required": ["items"],
          "properties": {
            "items": {
              "type": "array",
              "minItems": 3,
              "items": {
                "type": "object",
                "required": ["label", "href"],
                "properties": {
                  "label": { "type": "string" },
                  "href": { "type": "string", "pattern": "^/.*/$" }
                }
              },
              "description": "Example: Home > Startup > Article Title"
            }
          }
        },
        "categoryBadge": {
          "type": "object",
          "required": ["label", "href", "color"],
          "properties": {
            "label": {
              "type": "string",
              "enum": ["Startup", "Business", "Marketing", "Remote Work", "Productivity", "Team Management", "Founder Wellbeing"]
            },
            "href": {
              "type": "string",
              "pattern": "^/(startup|business|marketing|remote-work|productivity|team-management|founder-wellbeing)/$"
            },
            "color": {
              "type": "string",
              "description": "Tailwind color class or hex code"
            }
          }
        },
        "title": {
          "type": "string",
          "minLength": 20,
          "maxLength": 100,
          "description": "H1 tag with post title"
        },
        "author": {
          "type": "object",
          "required": ["name"],
          "properties": {
            "name": { "type": "string" },
            "avatarUrl": { "type": "string", "format": "uri" },
            "bio": { "type": "string" }
          }
        },
        "publishDate": {
          "type": "string",
          "format": "date",
          "description": "Human-readable date (e.g., 'January 15, 2026')"
        }
      }
    },
    "featuredImage": {
      "type": "object",
      "required": ["src", "alt", "width", "height"],
      "properties": {
        "src": {
          "type": "string",
          "format": "uri",
          "pattern": "^https://"
        },
        "alt": {
          "type": "string",
          "minLength": 10,
          "maxLength": 125
        },
        "width": {
          "type": "integer",
          "minimum": 800
        },
        "height": {
          "type": "integer",
          "minimum": 400
        },
        "caption": {
          "type": "string",
          "description": "Optional image caption"
        }
      }
    },
    "content": {
      "type": "object",
      "required": ["html", "readingTime"],
      "properties": {
        "html": {
          "type": "string",
          "minLength": 500,
          "description": "WordPress content HTML"
        },
        "readingTime": {
          "type": "integer",
          "minimum": 1,
          "description": "Estimated reading time in minutes"
        }
      }
    },
    "footer": {
      "type": "object",
      "properties": {
        "shareButtons": {
          "type": "array",
          "items": {
            "type": "object",
            "required": ["platform", "url"],
            "properties": {
              "platform": {
                "type": "string",
                "enum": ["twitter", "linkedin", "facebook", "email"]
              },
              "url": {
                "type": "string",
                "format": "uri"
              }
            }
          }
        },
        "relatedPosts": {
          "type": "array",
          "minItems": 3,
          "maxItems": 3,
          "items": {
            "type": "object",
            "required": ["title", "excerpt", "url", "image"],
            "properties": {
              "title": { "type": "string" },
              "excerpt": { "type": "string", "maxLength": 150 },
              "url": { "type": "string", "pattern": "^/.*/$" },
              "image": { "type": "string", "format": "uri" }
            }
          }
        }
      }
    }
  }
}
```

---

## Article Structured Data (JSON-LD) - Exact Schema

Every blog post MUST include this structured data in `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{post.title}",
  "image": "{post.featuredImage.node.sourceUrl}",
  "datePublished": "{post.date}",
  "dateModified": "{post.date}",
  "author": {
    "@type": "Person",
    "name": "{post.author.node.name}",
    "url": "https://www.startupyeti.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Startup Yeti",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.startupyeti.com/logo.png"
    }
  },
  "description": "{post.excerpt (strip HTML, 155-160 chars)}",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.startupyeti.com/{category}/{slug}/"
  }
}
</script>
```

**JSON Schema for Article Structured Data:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["@context", "@type", "headline", "image", "datePublished", "author", "publisher", "description", "mainEntityOfPage"],
  "properties": {
    "@context": {
      "type": "string",
      "const": "https://schema.org"
    },
    "@type": {
      "type": "string",
      "const": "Article"
    },
    "headline": {
      "type": "string",
      "minLength": 20,
      "maxLength": 110,
      "description": "Post title, max 110 chars for Google"
    },
    "image": {
      "type": "string",
      "format": "uri",
      "pattern": "^https://",
      "description": "Featured image URL"
    },
    "datePublished": {
      "type": "string",
      "format": "date-time",
      "description": "ISO 8601 format"
    },
    "dateModified": {
      "type": "string",
      "format": "date-time",
      "description": "ISO 8601 format, can equal datePublished"
    },
    "author": {
      "type": "object",
      "required": ["@type", "name"],
      "properties": {
        "@type": {
          "type": "string",
          "const": "Person"
        },
        "name": {
          "type": "string",
          "minLength": 2
        },
        "url": {
          "type": "string",
          "format": "uri",
          "const": "https://www.startupyeti.com"
        }
      }
    },
    "publisher": {
      "type": "object",
      "required": ["@type", "name", "logo"],
      "properties": {
        "@type": {
          "type": "string",
          "const": "Organization"
        },
        "name": {
          "type": "string",
          "const": "Startup Yeti"
        },
        "logo": {
          "type": "object",
          "required": ["@type", "url"],
          "properties": {
            "@type": {
              "type": "string",
              "const": "ImageObject"
            },
            "url": {
              "type": "string",
              "format": "uri",
              "pattern": "^https://www\\.startupyeti\\.com/.*\\.png$"
            }
          }
        }
      }
    },
    "description": {
      "type": "string",
      "minLength": 50,
      "maxLength": 160
    },
    "mainEntityOfPage": {
      "type": "object",
      "required": ["@type", "@id"],
      "properties": {
        "@type": {
          "type": "string",
          "const": "WebPage"
        },
        "@id": {
          "type": "string",
          "format": "uri",
          "pattern": "^https://www\\.startupyeti\\.com/[a-z-]+/[a-z0-9-]+/$"
        }
      }
    }
  }
}
```

**Validation Rules:**
- ✅ Use exact property names as shown (case-sensitive)
- ✅ `@type` must be "Article" (not BlogPosting)
- ✅ `datePublished` must be ISO 8601 format
- ✅ `headline` max 110 characters (Google truncates after)
- ✅ `image` must be absolute HTTPS URL
- ✅ `publisher.name` always "Startup Yeti"
- ✅ `mainEntityOfPage.@id` must match canonical URL

---

## Featured Image Requirements - Exact Schema

Blog posts MUST display featured image with these specifications:

**JSON Schema for Featured Image:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["src", "alt", "width", "height", "loading"],
  "properties": {
    "src": {
      "type": "string",
      "format": "uri",
      "pattern": "^https://"
    },
    "alt": {
      "type": "string",
      "minLength": 10,
      "maxLength": 125,
      "description": "Descriptive alt text from WordPress or generated"
    },
    "width": {
      "type": "integer",
      "minimum": 1200,
      "description": "Minimum 1200px for social sharing"
    },
    "height": {
      "type": "integer",
      "minimum": 630,
      "description": "Minimum 630px for social sharing"
    },
    "loading": {
      "type": "string",
      "const": "eager",
      "description": "Featured images should load eagerly (above fold)"
    },
    "fetchpriority": {
      "type": "string",
      "enum": ["high", "auto"],
      "description": "Set to 'high' for LCP optimization"
    }
  }
}
```

**HTML Example:**
```html
<img
  src="{post.featuredImage.node.sourceUrl}"
  alt="{post.featuredImage.node.altText || 'Generated descriptive alt text'}"
  width="1200"
  height="630"
  loading="eager"
  fetchpriority="high"
  class="w-full h-auto rounded-lg"
/>
```

**Validation Rules:**
- ✅ Use WordPress featured image from `featuredImage.node.sourceUrl`
- ✅ Use alt text from `featuredImage.node.altText` or generate descriptive text
- ✅ Minimum dimensions: 1200x630px (OG image standard)
- ✅ Use `loading="eager"` (featured image is above fold)
- ✅ Use `fetchpriority="high"` for LCP optimization
- ✅ Include explicit width/height attributes to prevent CLS
- ❌ Never omit alt text, even if WordPress doesn't provide it

---

## Author Display - Exact Schema

**JSON Schema for Author Section:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["name", "avatarUrl"],
  "properties": {
    "name": {
      "type": "string",
      "minLength": 2,
      "description": "Author name from WordPress"
    },
    "avatarUrl": {
      "type": "string",
      "format": "uri",
      "description": "Author avatar from WordPress or default"
    },
    "publishDate": {
      "type": "string",
      "description": "Human-readable date (e.g., 'January 15, 2026')"
    },
    "readingTime": {
      "type": "integer",
      "minimum": 1,
      "description": "Estimated reading time in minutes"
    }
  }
}
```

**HTML Structure:**
```html
<div class="flex items-center gap-4 my-6">
  <img
    src="{post.author.node.avatar?.url || '/default-avatar.png'}"
    alt="{post.author.node.name}"
    width="48"
    height="48"
    class="rounded-full"
    loading="lazy"
  />
  <div>
    <p class="font-semibold">{post.author.node.name}</p>
    <p class="text-sm text-gray-600">
      {formatDate(post.date)} · {calculateReadingTime(post.content)} min read
    </p>
  </div>
</div>
```

**Validation Rules:**
- ✅ Display author name from `post.author.node.name`
- ✅ Display avatar from `post.author.node.avatar.url` or use default
- ✅ Format date to human-readable format (e.g., "January 15, 2026")
- ✅ Calculate and display reading time (avg 200 words/min)
- ✅ Avatar should be 48x48px for optimal display
- ✅ Use `loading="lazy"` for avatar (not above fold)

---

## Category Badge - Exact Schema

**JSON Schema for Category Badge:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["label", "slug", "href", "colorClass"],
  "properties": {
    "label": {
      "type": "string",
      "enum": ["Startup", "Business", "Marketing", "Remote Work", "Productivity", "Team Management", "Founder Wellbeing"]
    },
    "slug": {
      "type": "string",
      "enum": ["startup", "business", "marketing", "remote-work", "productivity", "team-management", "founder-wellbeing"]
    },
    "href": {
      "type": "string",
      "pattern": "^/(startup|business|marketing|remote-work|productivity|team-management|founder-wellbeing)/$"
    },
    "colorClass": {
      "type": "string",
      "description": "Tailwind color class for badge styling"
    }
  }
}
```

**Category Color Mapping:**
```javascript
const categoryColors = {
  'startup': 'bg-blue-100 text-blue-800',
  'business': 'bg-green-100 text-green-800',
  'marketing': 'bg-purple-100 text-purple-800',
  'remote-work': 'bg-orange-100 text-orange-800',
  'productivity': 'bg-yellow-100 text-yellow-800',
  'team-management': 'bg-pink-100 text-pink-800',
  'founder-wellbeing': 'bg-teal-100 text-teal-800'
};
```

**HTML Example:**
```html
<a
  href="/{post.categories.nodes[0].slug}/"
  class="inline-block px-3 py-1 text-sm font-semibold rounded-full {categoryColors[slug]}"
>
  {post.categories.nodes[0].name}
</a>
```

**Validation Rules:**
- ✅ Always use first category: `post.categories.nodes[0]`
- ✅ Link to category page: `/{category-slug}/`
- ✅ Use consistent color scheme for each category
- ✅ Display category name (not slug)
- ❌ Never display multiple category badges per post

---

## Breadcrumbs - Exact Schema

**JSON Schema for Breadcrumbs:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["items"],
  "properties": {
    "items": {
      "type": "array",
      "minItems": 3,
      "maxItems": 3,
      "items": {
        "type": "object",
        "required": ["label", "href", "position"],
        "properties": {
          "label": {
            "type": "string"
          },
          "href": {
            "type": "string",
            "pattern": "^/.*/$"
          },
          "position": {
            "type": "integer",
            "minimum": 1
          }
        }
      }
    }
  }
}
```

**Structure:**
```
Home > {Category Name} > {Article Title}
  /   > /{category}/   > /{category}/{slug}/
```

**HTML with Structured Data:**
```html
<nav aria-label="Breadcrumb">
  <ol class="flex items-center gap-2 text-sm">
    <li><a href="/">Home</a></li>
    <li>/</li>
    <li><a href="/{category}/">{categoryName}</a></li>
    <li>/</li>
    <li aria-current="page">{truncate(postTitle, 50)}</li>
  </ol>
</nav>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.startupyeti.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "{categoryName}",
      "item": "https://www.startupyeti.com/{category}/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "{postTitle}",
      "item": "https://www.startupyeti.com/{category}/{slug}/"
    }
  ]
}
</script>
```

**Validation Rules:**
- ✅ Always 3 levels: Home > Category > Article
- ✅ Include BreadcrumbList structured data
- ✅ Use `aria-current="page"` on current item
- ✅ Truncate article title if > 50 chars in breadcrumb
- ✅ All hrefs must have trailing slashes

---

## Content Rendering - Exact Schema

**JSON Schema for Content Processing:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["rawHtml", "sanitized", "processedHtml"],
  "properties": {
    "rawHtml": {
      "type": "string",
      "description": "WordPress content HTML from post.content"
    },
    "sanitized": {
      "type": "boolean",
      "const": true,
      "description": "Content must be sanitized if user-generated"
    },
    "processedHtml": {
      "type": "string",
      "description": "HTML with proper classes and attributes"
    },
    "internalLinksConverted": {
      "type": "boolean",
      "const": true,
      "description": "WordPress absolute URLs converted to relative"
    }
  }
}
```

**Content Processing Steps:**

1. **Get WordPress HTML:**
```astro
const contentHtml = post.content;
```

2. **Wrap in Prose Container:**
```html
<div class="prose prose-lg max-w-none">
  <Fragment set:html={contentHtml} />
</div>
```

3. **Configure Tailwind Typography:**
```javascript
// tailwind.config.mjs
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            a: {
              color: '#2563eb',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
            'h2, h3, h4': {
              scrollMarginTop: '4rem',
            },
          },
        },
      },
    },
  },
};
```

**Validation Rules:**
- ✅ Use `<Fragment set:html={post.content} />` to render WordPress HTML
- ✅ Wrap content in Tailwind Typography classes (`prose`)
- ✅ Convert WordPress absolute URLs to relative (if applicable)
- ✅ Ensure proper heading styles inherit from typography
- ❌ Never strip HTML tags from WordPress content
- ❌ Never modify WordPress content structure

---

## Related Posts - Exact Schema

Display 3 related posts at the bottom of each article.

**JSON Schema for Related Posts:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "minItems": 3,
  "maxItems": 3,
  "items": {
    "type": "object",
    "required": ["title", "excerpt", "url", "featuredImage", "category"],
    "properties": {
      "title": {
        "type": "string",
        "minLength": 10,
        "maxLength": 100
      },
      "excerpt": {
        "type": "string",
        "minLength": 50,
        "maxLength": 150
      },
      "url": {
        "type": "string",
        "pattern": "^/[a-z-]+/[a-z0-9-]+/$"
      },
      "featuredImage": {
        "type": "string",
        "format": "uri"
      },
      "category": {
        "type": "object",
        "required": ["name", "slug"],
        "properties": {
          "name": { "type": "string" },
          "slug": { "type": "string" }
        }
      }
    }
  }
}
```

**Selection Logic:**
```javascript
// Pseudocode for related posts
function getRelatedPosts(currentPost, allPosts) {
  const currentCategory = currentPost.categories.nodes[0].slug;
  const currentSlug = currentPost.slug;

  return allPosts
    .filter(post =>
      post.categories.nodes[0].slug === currentCategory &&
      post.slug !== currentSlug
    )
    .slice(0, 3);
}
```

**Validation Rules:**
- ✅ Show exactly 3 related posts
- ✅ Filter by same category as current post
- ✅ Exclude current post from related posts
- ✅ Show most recent posts if same category
- ✅ Include featured image, title, and excerpt
- ✅ Link to full article with proper URL structure

---

## Blog Post Checklist

Use this checklist for every blog post page:

```markdown
Blog Post Implementation Checklist:
- [ ] getStaticPaths() implemented correctly
- [ ] WordPress GraphQL query includes all required fields
- [ ] Dynamic params: {category} and {slug} from WordPress
- [ ] SEO meta tags (title, description, canonical)
- [ ] Open Graph type set to "article"
- [ ] Article structured data (JSON-LD) included
- [ ] Breadcrumbs with BreadcrumbList schema
- [ ] Category badge displayed and linked
- [ ] H1 tag with post title
- [ ] Author name and avatar displayed
- [ ] Publication date formatted (human-readable)
- [ ] Reading time calculated and displayed
- [ ] Featured image with proper alt text
- [ ] Featured image uses loading="eager"
- [ ] Content wrapped in prose classes
- [ ] Related posts section (3 posts, same category)
- [ ] Share buttons (Twitter, LinkedIn, Facebook)
- [ ] All internal links use trailing slashes
- [ ] Mobile responsive layout tested
- [ ] Lighthouse SEO score 95+
```

---

## Performance Optimization for Blog Posts

**Target Metrics:**
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

**Optimization Checklist:**
- [ ] Featured image optimized (WebP, compressed)
- [ ] Featured image has explicit width/height
- [ ] Featured image uses fetchpriority="high"
- [ ] Lazy load author avatar
- [ ] Lazy load related post images
- [ ] Minimal JavaScript (Astro static output)
- [ ] Inline critical CSS
- [ ] Defer non-critical CSS

---

**Last Updated:** January 2026
**Applies To:** `src/pages/[category]/[slug].astro`
