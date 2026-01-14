# WordPress API Issue - Sitemap Missing Articles

## Problem

Your sitemap at `https://www.startupyeti.com/sitemap-0.xml` currently **does NOT include any blog articles**. It only contains these static pages:

- Homepage
- Blog index
- Category pages (business, marketing, remote-work, productivity, etc.)
- Calculator
- Resources
- Privacy policy

**Missing:** All individual blog post URLs like `/business/article-slug/`, `/marketing/article-slug/`, etc.

## Why This Is Happening

Your WordPress installation at `admin.startupyeti.com` is **blocking all API requests** with a `415 Unsupported Media Type` error.

### Test Results:

```bash
# GraphQL endpoint - BLOCKED
curl 'https://admin.startupyeti.com/graphql'
# Returns: 415 Unsupported Media Type

# REST API endpoint - BLOCKED
curl 'https://admin.startupyeti.com/wp-json/wp/v2/posts'
# Returns: 415 Unsupported Media Type
```

### What This Means:

1. ✅ **WPGraphQL is installed** (you confirmed this)
2. ❌ **Server is blocking API access** (GreenGeeks/OpenResty configuration)
3. ❌ **Astro build cannot fetch articles** during site generation
4. ❌ **No article pages are generated** in the static site
5. ❌ **Sitemap doesn't include articles** because they don't exist

## How to Fix

You need to fix the server configuration at GreenGeeks to allow API requests. Here are the steps:

### Option 1: Fix GreenGeeks Server Configuration (RECOMMENDED)

1. **Log into GreenGeeks cPanel** for admin.startupyeti.com

2. **Check .htaccess file** in the WordPress root directory:
   - Go to File Manager
   - Navigate to the WordPress installation directory
   - Look for `.htaccess` file
   - Make sure it has these lines:

   ```apache
   # BEGIN WordPress
   <IfModule mod_rewrite.c>
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.php$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.php [L]
   </IfModule>
   # END WordPress
   ```

3. **Check Content-Type headers** - The 415 error specifically means the server is rejecting `application/json` content type. You may need to add:

   ```apache
   <IfModule mod_headers.c>
       Header set Access-Control-Allow-Origin "*"
       Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
       Header set Access-Control-Allow-Headers "Content-Type, Authorization"
   </IfModule>
   ```

4. **Contact GreenGeeks Support** and tell them:
   - "My WordPress REST API and GraphQL endpoints are returning 415 errors"
   - "I need to allow POST requests with Content-Type: application/json"
   - "The endpoints /graphql and /wp-json/* should accept JSON payloads"

### Option 2: Verify WPGraphQL Plugin Settings

1. Log into WordPress admin at `https://admin.startupyeti.com/wp-admin`

2. Go to **Plugins** → Make sure **WPGraphQL** is **activated**

3. Go to **Settings** → **GraphQL** (if available):
   - Check if there's a "Public Introspection" setting - enable it
   - Check if there's CORS settings - enable public access
   - Check if there's authentication requirements - disable for public posts

4. Try accessing the GraphQL IDE:
   - Visit: `https://admin.startupyeti.com/graphql`
   - You should see the GraphiQL interface
   - If you get 415 error here too, it's definitely a server issue

### Important Note: Migration Already Complete

**Your main site (www.startupyeti.com) is now serving the Astro static site from Cloudflare** - the migration is complete! The old WordPress site is no longer accessible.

This means **admin.startupyeti.com is your ONLY source for blog articles** and it MUST be fixed for the sitemap to include articles.

## Testing the Fix

Once you've made server changes, test with these commands:

### Test 1: GraphQL Endpoint
```bash
curl -X POST 'https://admin.startupyeti.com/graphql' \
  -H 'Content-Type: application/json' \
  -d '{"query":"query { posts(first: 3) { nodes { title slug } } }"}'
```

**Expected Response:**
```json
{
  "data": {
    "posts": {
      "nodes": [
        {"title": "Article Title", "slug": "article-slug"},
        ...
      ]
    }
  }
}
```

**Current (Bad) Response:**
```html
<html>
<head><title>415 Unsupported Media Type</title></head>
...
</html>
```

### Test 2: REST API
```bash
curl 'https://admin.startupyeti.com/wp-json/wp/v2/posts?per_page=3'
```

**Expected:** JSON array of posts
**Current:** 415 error page

## After the Fix Works

Once the API is accessible:

1. The `.env` file is already updated to use `admin.startupyeti.com/graphql`

2. Rebuild the site locally:
   ```bash
   npm run build
   ```

3. You should see in the build output:
   ```
   ▶ src/pages/[category]/[slug].astro
     └─ /business/article-name-1/index.html
     └─ /business/article-name-2/index.html
     └─ /marketing/article-name-3/index.html
     ... (all your articles)
   ```

4. Check the sitemap:
   ```bash
   cat dist/sitemap-0.xml
   ```
   It should now include all article URLs

5. Commit and deploy:
   ```bash
   git add .
   git commit -m "Rebuild with WordPress articles"
   git push
   ```

## Summary

**Current Status:**
- ✅ Sitemap is configured correctly
- ✅ robots.txt is set up
- ✅ Article template pages exist
- ❌ **WordPress API is blocked by server**
- ❌ **No articles in sitemap**

**Next Action:**
Fix the GreenGeeks server configuration to allow API requests, then rebuild and redeploy.

**Priority:** HIGH - This is preventing your blog content from being indexed by search engines.
