# Deployment & Infrastructure - Startup Yeti

**Applies to:** Deployment, builds, infrastructure configuration

This rule defines exact patterns for deployment to Cloudflare Pages with precise configuration schemas.

---

## Cloudflare Pages Configuration - Exact Schema

**JSON Schema for Build Settings:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["buildCommand", "buildOutput", "environmentVariables"],
  "properties": {
    "buildCommand": {
      "type": "string",
      "const": "npm run build",
      "description": "Command to build the site"
    },
    "buildOutput": {
      "type": "string",
      "const": "dist",
      "description": "Directory containing build output"
    },
    "rootDirectory": {
      "type": "string",
      "const": "/",
      "description": "Project root directory"
    },
    "environmentVariables": {
      "type": "object",
      "required": ["WORDPRESS_URL"],
      "properties": {
        "WORDPRESS_URL": {
          "type": "string",
          "format": "uri",
          "const": "https://startupyeticom.wordpress.com/graphql"
        }
      }
    },
    "nodeVersion": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "Node.js version (e.g., '18', '20')",
      "examples": ["18", "20"]
    }
  }
}
```

**Cloudflare Pages Settings:**
```yaml
Production Branch: main
Build Command: npm run build
Build Output Directory: dist
Root Directory: /
Node.js Version: 18 (or compatible)

Environment Variables:
  WORDPRESS_URL: https://startupyeticom.wordpress.com/graphql
```

**Validation Rules:**
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ✅ Production branch: `main`
- ✅ Set environment variables in Cloudflare dashboard
- ✅ Node.js version compatible with dependencies
- ❌ Never commit `.env` to git

---

## Redirect Configuration - Exact Schema

**File:** `public/_redirects`

**JSON Schema for Redirects:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "required": ["from", "to", "status"],
    "properties": {
      "from": {
        "type": "string",
        "pattern": "^/.*",
        "description": "Source path (can use wildcards)"
      },
      "to": {
        "type": "string",
        "pattern": "^/.*",
        "description": "Destination path (can use :splat for wildcards)"
      },
      "status": {
        "type": "integer",
        "enum": [301, 302, 307, 308],
        "description": "HTTP redirect status code"
      }
    }
  }
}
```

**Redirect Format:**
```
# Cloudflare Pages _redirects format
# from to [status]

# Old WordPress category URLs to new format
/category/startup/* /startup/:splat 301
/category/business/* /business/:splat 301
/category/marketing/* /marketing/:splat 301
/category/remote-work/* /remote-work/:splat 301
/category/productivity/* /productivity/:splat 301
/category/team-management/* /team-management/:splat 301
/category/founder-wellbeing/* /founder-wellbeing/:splat 301

# Deprecated categories redirected to main categories
/category/sales/* /business/:splat 301
/category/trends/* /startup/:splat 301
/category/customer-experience/* /business/:splat 301
/category/employment/* /startup/:splat 301
/category/content-marketing/* /marketing/:splat 301

# Category pages themselves
/category/startup /startup 301
/category/business /business 301
/category/marketing /marketing 301
/category/remote-work /remote-work 301
/category/productivity /productivity 301
/category/sales /business 301
/category/trends /startup 301
```

**Validation Rules:**
- ✅ Use 301 for permanent redirects (SEO value transfer)
- ✅ Use `:splat` to capture wildcard paths
- ✅ Place `_redirects` in `public/` directory
- ✅ Test redirects after deployment
- ❌ Never use 302 for permanent URL changes
- ❌ Never create redirect loops
- ✅ One redirect per line
- ✅ Comments start with `#`

**Testing Redirects:**
```bash
# Test redirect with curl
curl -I https://www.startupyeti.com/category/startup/article-name

# Expected output:
# HTTP/2 301
# location: /startup/article-name
```

---

## Security Headers - Exact Schema

**File:** `public/_headers`

**JSON Schema for Headers:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["path", "headers"],
  "properties": {
    "path": {
      "type": "string",
      "description": "Path pattern (/* for all paths)"
    },
    "headers": {
      "type": "object",
      "required": [
        "X-Frame-Options",
        "X-Content-Type-Options",
        "Referrer-Policy"
      ],
      "properties": {
        "X-Frame-Options": {
          "type": "string",
          "enum": ["DENY", "SAMEORIGIN"],
          "description": "Prevent clickjacking"
        },
        "X-Content-Type-Options": {
          "type": "string",
          "const": "nosniff",
          "description": "Prevent MIME type sniffing"
        },
        "Referrer-Policy": {
          "type": "string",
          "enum": ["strict-origin-when-cross-origin", "no-referrer", "same-origin"]
        },
        "Permissions-Policy": {
          "type": "string",
          "description": "Control browser features"
        },
        "Cache-Control": {
          "type": "string",
          "description": "Cache directives"
        }
      }
    }
  }
}
```

**Headers Format:**
```
# Cloudflare Pages _headers format

/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Cache-Control: public, max-age=3600

# Cache static assets longer
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/_astro/*
  Cache-Control: public, max-age=31536000, immutable
```

**Validation Rules:**
- ✅ Place `_headers` in `public/` directory
- ✅ Use security headers on all paths
- ✅ Set appropriate cache headers
- ✅ Longer cache for hashed static assets
- ✅ Deny embedding in iframes (X-Frame-Options: DENY)
- ✅ Prevent MIME sniffing (X-Content-Type-Options: nosniff)

**Security Headers Explained:**
- **X-Frame-Options: DENY** - Prevents site from being embedded in iframes (clickjacking protection)
- **X-Content-Type-Options: nosniff** - Prevents browsers from MIME-sniffing
- **Referrer-Policy** - Controls referrer information sent to other sites
- **Permissions-Policy** - Disables unnecessary browser features
- **Cache-Control** - Controls caching behavior

---

## Robots.txt Configuration - Exact Schema

**File:** `public/robots.txt`

**JSON Schema for Robots.txt:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["userAgent", "allow", "disallow", "sitemap"],
  "properties": {
    "userAgent": {
      "type": "string",
      "const": "*",
      "description": "Apply rules to all bots"
    },
    "allow": {
      "type": "array",
      "items": { "type": "string" },
      "description": "Allowed paths"
    },
    "disallow": {
      "type": "array",
      "items": { "type": "string" },
      "description": "Blocked paths"
    },
    "sitemap": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "uri"
      },
      "description": "Sitemap URLs"
    }
  }
}
```

**Robots.txt Format:**
```
# https://www.robotstxt.org/robotstxt.html

# Allow all legitimate bots including SEO tools and AI crawlers
User-agent: *
Allow: /

# Block old WordPress paths that no longer exist
Disallow: /wp-admin/
Disallow: /wp-content/
Disallow: /wp-includes/
Disallow: /wp-*.php

# Sitemaps
Sitemap: https://www.startupyeti.com/sitemap-index.xml
```

**Validation Rules:**
- ✅ Allow all legitimate bots (`User-agent: *` + `Allow: /`)
- ✅ Block old WordPress admin paths
- ✅ Include sitemap URL
- ✅ Use full URLs for sitemap
- ❌ Never block search engine bots (Googlebot, Bingbot)
- ❌ Never block AI crawler bots unless specifically needed
- ✅ Test with Google Search Console robots.txt tester

---

## Build Process - Exact Schema

**JSON Schema for Build Process:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["steps", "validation", "deployment"],
  "properties": {
    "steps": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["name", "command"],
        "properties": {
          "name": { "type": "string" },
          "command": { "type": "string" },
          "required": { "type": "boolean" }
        }
      },
      "description": "Build process steps in order"
    },
    "validation": {
      "type": "object",
      "required": ["checkErrors", "testBuild"],
      "properties": {
        "checkErrors": {
          "type": "boolean",
          "const": true
        },
        "testBuild": {
          "type": "boolean",
          "const": true
        }
      }
    },
    "deployment": {
      "type": "object",
      "required": ["trigger", "environment"],
      "properties": {
        "trigger": {
          "type": "string",
          "enum": ["git-push", "manual"],
          "description": "Deployment trigger method"
        },
        "environment": {
          "type": "string",
          "enum": ["production", "preview"]
        }
      }
    }
  }
}
```

**Build Steps:**

1. **Install Dependencies**
```bash
npm install
```

2. **Build Site**
```bash
npm run build
```

3. **Verify Build Output**
```bash
ls -la dist/
# Verify dist/ directory contains HTML files
```

**Build Validation Checklist:**
```markdown
Pre-Deployment Build Checklist:
- [ ] Local build succeeds: `npm run build`
- [ ] No TypeScript errors (if using TypeScript)
- [ ] No Astro build errors
- [ ] WordPress API is accessible
- [ ] Environment variables set correctly
- [ ] dist/ directory contains HTML files
- [ ] All routes generate successfully
- [ ] _redirects file in dist/
- [ ] _headers file in dist/
- [ ] robots.txt in dist/
- [ ] Sitemap generated
```

---

## Deployment Workflow - Exact Schema

**JSON Schema for Deployment Workflow:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["trigger", "steps", "verification"],
  "properties": {
    "trigger": {
      "type": "object",
      "required": ["method", "branch"],
      "properties": {
        "method": {
          "type": "string",
          "enum": ["automatic", "manual"],
          "description": "Deployment trigger type"
        },
        "branch": {
          "type": "string",
          "const": "main",
          "description": "Production branch"
        }
      }
    },
    "steps": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["step", "description"],
        "properties": {
          "step": { "type": "string" },
          "description": { "type": "string" }
        }
      }
    },
    "verification": {
      "type": "object",
      "required": ["healthCheck", "redirects", "seo"],
      "properties": {
        "healthCheck": { "type": "boolean" },
        "redirects": { "type": "boolean" },
        "seo": { "type": "boolean" }
      }
    }
  }
}
```

### Automatic Deployment (Git Push)

**Steps:**

1. **Make Changes Locally**
```bash
# Edit code
# Test locally: npm run dev
# Build locally: npm run build
```

2. **Commit to Git**
```bash
git add .
git commit -m "Descriptive commit message"
```

3. **Push to GitHub**
```bash
git push origin main
```

4. **Cloudflare Auto-Deploys**
- Cloudflare detects push to main branch
- Runs `npm install`
- Runs `npm run build`
- Deploys `dist/` to CDN
- Deployment typically takes 2-3 minutes

5. **Verify Deployment**
```bash
# Check deployment status in Cloudflare dashboard
# Visit https://www.startupyeti.com
# Test redirects
# Check for errors in browser console
```

### Manual Deployment (WordPress Content Update)

**When:** WordPress content changed but no code changes

**Steps:**

1. **Trigger Rebuild**

**Option A: Empty Commit**
```bash
git commit --allow-empty -m "Trigger rebuild for WordPress content update"
git push origin main
```

**Option B: Cloudflare Dashboard**
- Go to Cloudflare Pages dashboard
- Select project: startup-yeti-redesign
- Deployments → Create deployment
- Select branch: main
- Click "Deploy"

2. **Wait for Build**
- Build takes ~2-3 minutes
- Cloudflare fetches latest WordPress content
- Generates fresh static files

3. **Verify Content**
- Check new/updated posts appear
- Verify content formatting
- Test images load correctly

---

## Post-Deployment Verification - Exact Schema

**JSON Schema for Verification:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["functional", "seo", "performance", "security"],
  "properties": {
    "functional": {
      "type": "object",
      "required": ["routes", "redirects", "content"],
      "properties": {
        "routes": { "type": "boolean" },
        "redirects": { "type": "boolean" },
        "content": { "type": "boolean" }
      }
    },
    "seo": {
      "type": "object",
      "required": ["metaTags", "sitemap", "robots"],
      "properties": {
        "metaTags": { "type": "boolean" },
        "sitemap": { "type": "boolean" },
        "robots": { "type": "boolean" }
      }
    },
    "performance": {
      "type": "object",
      "required": ["lighthouse", "coreWebVitals"],
      "properties": {
        "lighthouse": { "type": "number", "minimum": 90 },
        "coreWebVitals": { "type": "boolean" }
      }
    },
    "security": {
      "type": "object",
      "required": ["headers", "ssl"],
      "properties": {
        "headers": { "type": "boolean" },
        "ssl": { "type": "boolean" }
      }
    }
  }
}
```

**Post-Deployment Checklist:**

```markdown
Deployment Verification Checklist:

Functional Tests:
- [ ] Homepage loads (https://www.startupyeti.com)
- [ ] Category pages load (e.g., /startup/)
- [ ] Blog posts load (e.g., /startup/article-name/)
- [ ] Navigation works correctly
- [ ] No 404 errors on existing URLs

Redirect Tests:
- [ ] Old URLs redirect to new URLs (test with curl)
- [ ] Redirects use 301 status code
- [ ] No redirect loops
- [ ] Category redirects work

Content Tests:
- [ ] Latest WordPress posts appear
- [ ] Featured images display
- [ ] Content formatting correct
- [ ] Author information shows
- [ ] Dates formatted correctly

SEO Tests:
- [ ] Meta tags present (view page source)
- [ ] Canonical URLs correct
- [ ] Open Graph tags present
- [ ] Twitter cards present
- [ ] Structured data valid (Google Rich Results Test)
- [ ] Sitemap accessible (/sitemap-index.xml)
- [ ] Robots.txt accessible (/robots.txt)

Performance Tests:
- [ ] Lighthouse score 90+ (all categories)
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Images lazy load
- [ ] No console errors

Security Tests:
- [ ] HTTPS enabled (SSL certificate)
- [ ] Security headers present (check with browser dev tools)
- [ ] No mixed content warnings
- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff
```

**Testing Commands:**

```bash
# Test redirect
curl -I https://www.startupyeti.com/category/startup/article

# Test security headers
curl -I https://www.startupyeti.com | grep -E 'X-Frame|X-Content|Referrer'

# Test sitemap
curl https://www.startupyeti.com/sitemap-index.xml

# Test robots.txt
curl https://www.startupyeti.com/robots.txt

# Run Lighthouse (Chrome DevTools)
# Open DevTools → Lighthouse → Generate report
```

---

## Rollback Procedure - Exact Schema

**JSON Schema for Rollback:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["trigger", "method", "steps"],
  "properties": {
    "trigger": {
      "type": "string",
      "description": "When to rollback"
    },
    "method": {
      "type": "string",
      "enum": ["cloudflare-rollback", "git-revert"],
      "description": "Rollback method"
    },
    "steps": {
      "type": "array",
      "items": { "type": "string" }
    }
  }
}
```

**When to Rollback:**
- Critical bugs in production
- Site completely down
- Major SEO issues (missing meta tags, broken redirects)
- Data loss or corruption

**Rollback Methods:**

### Method 1: Cloudflare Pages Rollback (Fastest)

1. Go to Cloudflare Pages dashboard
2. Select project: startup-yeti-redesign
3. Deployments → View all deployments
4. Find last known good deployment
5. Click "..." → Rollback to this deployment
6. Confirm rollback
7. Verify site is working

**Rollback Time:** ~1 minute

### Method 2: Git Revert (More Control)

1. **Identify Bad Commit**
```bash
git log --oneline
# Find commit hash of the bad deployment
```

2. **Revert Commit**
```bash
git revert <commit-hash>
# OR revert to specific commit
git reset --hard <good-commit-hash>
```

3. **Force Push (if using reset)**
```bash
git push origin main --force
```

4. **Cloudflare Auto-Deploys Previous Version**

**Rollback Time:** ~3-5 minutes

---

## Environment Variables Management - Exact Schema

**JSON Schema for Environment Variables:**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["local", "production"],
  "properties": {
    "local": {
      "type": "object",
      "required": ["file", "variables"],
      "properties": {
        "file": {
          "type": "string",
          "const": ".env",
          "description": "Local environment file"
        },
        "gitIgnore": {
          "type": "boolean",
          "const": true,
          "description": "Must be git-ignored"
        },
        "variables": {
          "type": "object",
          "required": ["WORDPRESS_URL"],
          "properties": {
            "WORDPRESS_URL": { "type": "string", "format": "uri" }
          }
        }
      }
    },
    "production": {
      "type": "object",
      "required": ["location", "variables"],
      "properties": {
        "location": {
          "type": "string",
          "const": "cloudflare-dashboard",
          "description": "Set in Cloudflare Pages settings"
        },
        "variables": {
          "type": "object",
          "required": ["WORDPRESS_URL"],
          "properties": {
            "WORDPRESS_URL": { "type": "string", "format": "uri" }
          }
        }
      }
    }
  }
}
```

**Local Environment (`.env`):**
```bash
# .env (git-ignored)
WORDPRESS_URL=https://startupyeticom.wordpress.com/graphql
```

**Production Environment (Cloudflare):**
1. Go to Cloudflare Pages dashboard
2. Select project → Settings → Environment variables
3. Add variable:
   - Name: `WORDPRESS_URL`
   - Value: `https://startupyeticom.wordpress.com/graphql`
   - Environment: Production
4. Save
5. Redeploy for changes to take effect

**Validation Rules:**
- ✅ Never commit `.env` to git
- ✅ Add `.env` to `.gitignore`
- ✅ Set production variables in Cloudflare dashboard
- ✅ Use same variable names in local and production
- ❌ Never hardcode sensitive values in code
- ❌ Never expose API keys in client-side code

---

## Deployment Troubleshooting

### Build Fails with "WORDPRESS_URL not defined"

**Cause:** Environment variable not set

**Solution:**
```bash
# Local: Check .env file exists
cat .env

# Production: Verify in Cloudflare dashboard
# Settings → Environment variables → WORDPRESS_URL
```

### Build Fails with WordPress API Error

**Cause:** WordPress GraphQL endpoint not accessible

**Solution:**
```bash
# Test endpoint
curl -X POST https://startupyeticom.wordpress.com/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "{ posts { nodes { title } } }"}'

# If fails:
# - Check WordPress site is up
# - Verify WPGraphQL plugin is active
# - Check endpoint URL is correct
```

### Redirects Not Working

**Cause:** `_redirects` file not in build output

**Solution:**
```bash
# Verify file location
ls public/_redirects

# Rebuild and check dist/
npm run build
ls dist/_redirects

# If missing:
# - Ensure _redirects is in public/ folder
# - Check file is not git-ignored
```

### Site Shows Old Content

**Cause:** Cloudflare cache or build didn't fetch latest WordPress data

**Solution:**
```bash
# 1. Clear Cloudflare cache
# Cloudflare dashboard → Caching → Purge Everything

# 2. Trigger fresh deployment
git commit --allow-empty -m "Force rebuild"
git push origin main

# 3. Verify WordPress data is accessible
curl -X POST $WORDPRESS_URL -d '{"query": "{ posts { nodes { title } } }"}'
```

---

**Last Updated:** January 2026
**Applies To:** All deployment and infrastructure configuration
