# Migration Plan: Moving Redesign to startupyeti.com

This document outlines the complete migration plan to move your redesigned site to the main startupyeti.com domain with Cloudflare Pages and headless WordPress.

## Current Setup

- **Redesign Site**: Currently deployed on Cloudflare Pages (preview URL)
- **Old Site**: startupyeti.com (WordPress site serving both frontend + backend)
- **Goal**: Make startupyeti.com serve the new Astro frontend, keep WordPress as headless CMS

## Migration Strategy Overview

### Phase 1: Prepare WordPress for Headless Mode ✓
- Install WPGraphQL plugin
- Keep WordPress at current domain (startupyeti.com/wp-admin)
- OR move WordPress to subdomain (blog.startupyeti.com or admin.startupyeti.com)

### Phase 2: Configure Cloudflare Pages
- Connect custom domain (startupyeti.com) to your Cloudflare Pages project
- Set up environment variables
- Configure DNS settings

### Phase 3: DNS & Domain Migration
- Update DNS records to point to Cloudflare Pages
- Handle WordPress subdirectory or subdomain routing

### Phase 4: Testing & Go-Live
- Test all functionality
- SEO redirects and verification
- Monitor and validate

---

## Detailed Step-by-Step Instructions

## PHASE 1: WordPress Setup (Choose One Option)

### Option A: WordPress at Subdomain (RECOMMENDED)
**Best for clean separation and easier management**

1. **Create subdomain for WordPress:**
   - Login to your domain registrar/DNS provider
   - Create A record: `admin.startupyeti.com` → (your WordPress server IP)
   - OR `blog.startupyeti.com` → (your WordPress server IP)

2. **Update WordPress URLs:**
   ```sql
   -- In WordPress database via phpMyAdmin or similar
   UPDATE wp_options SET option_value = 'https://admin.startupyeti.com'
   WHERE option_name IN ('siteurl', 'home');
   ```

   OR use WordPress wp-config.php:
   ```php
   define('WP_HOME','https://admin.startupyeti.com');
   define('WP_SITEURL','https://admin.startupyeti.com');
   ```

3. **Update environment variable:**
   - Update `.env`: `WORDPRESS_URL=https://admin.startupyeti.com/graphql`
   - Push changes to trigger rebuild

### Option B: WordPress at Subdirectory
**Keep WordPress at startupyeti.com/wp-admin**

1. **Configure Cloudflare Pages to proxy WordPress:**
   - Add _redirects file to handle /wp-admin, /wp-content, /wp-includes
   - This is more complex and requires careful configuration

2. **Not recommended** - Can cause conflicts and is harder to maintain

---

## PHASE 2: Cloudflare Pages Configuration

### Step 1: Add Custom Domain

1. **Go to Cloudflare Dashboard:**
   - Navigate to Workers & Pages
   - Click on your "startup-yeti-redesign" project
   - Go to "Custom domains" tab

2. **Add startupyeti.com:**
   - Click "Set up a custom domain"
   - Enter: `startupyeti.com`
   - Also add: `www.startupyeti.com`
   - Cloudflare will guide you through DNS setup

3. **DNS Configuration:**
   Cloudflare will automatically create these records:
   ```
   CNAME  startupyeti.com          → [your-project].pages.dev
   CNAME  www.startupyeti.com      → [your-project].pages.dev
   ```

### Step 2: Environment Variables

1. **Go to Settings → Environment Variables**

2. **Add these variables for Production:**
   ```
   WORDPRESS_URL=https://admin.startupyeti.com/graphql
   ```
   (Or use your WordPress subdomain/domain)

3. **Also add for Preview (optional):**
   - Same values or use staging WordPress if you have one

### Step 3: Build Configuration

Verify your build settings in Cloudflare Pages:
```
Build command: npm run build
Build output directory: dist
Node version: 18 or latest
```

---

## PHASE 3: DNS Migration

### Current DNS Records (What you have now)
```
A      startupyeti.com          → [Your old WordPress server IP]
CNAME  www.startupyeti.com      → startupyeti.com
```

### New DNS Records (What you need)

**If using WordPress subdomain (Option A - RECOMMENDED):**
```
# Main site → Cloudflare Pages
CNAME  startupyeti.com          → [your-project].pages.dev
CNAME  www.startupyeti.com      → [your-project].pages.dev

# WordPress admin on subdomain
A      admin.startupyeti.com    → [WordPress server IP]
```

**Important Notes:**
- CNAME records are automatically created by Cloudflare when you add custom domain
- Your old WordPress server will still run, just accessible at admin.startupyeti.com
- Make sure WPGraphQL plugin is enabled and endpoint is accessible

---

## PHASE 4: Migration Checklist

### Pre-Migration (Do This First)

- [ ] **Backup Everything:**
  - [ ] WordPress database backup
  - [ ] WordPress files backup
  - [ ] Export all posts/pages via WordPress admin
  - [ ] Screenshot current site for reference

- [ ] **Test WordPress GraphQL:**
  - [ ] Visit `https://www.startupyeti.com/graphql`
  - [ ] Verify WPGraphQL is installed and working
  - [ ] Test queries in GraphiQL interface
  - [ ] Ensure all posts are accessible via API

- [ ] **Prepare WordPress for Headless:**
  - [ ] Install WPGraphQL plugin (if not already)
  - [ ] Optional: Install WPGraphQL for Yoast SEO (for meta tags)
  - [ ] Optional: Install WPGraphQL for ACF (if using custom fields)
  - [ ] Test that posts are queryable via GraphQL

### Migration Day

- [ ] **Update WordPress URLs (if using subdomain):**
  - [ ] Change WordPress site URL to subdomain
  - [ ] Test WordPress admin access at new subdomain
  - [ ] Verify GraphQL endpoint at new URL

- [ ] **Configure Cloudflare Pages:**
  - [ ] Add startupyeti.com as custom domain
  - [ ] Add www.startupyeti.com as custom domain
  - [ ] Set WORDPRESS_URL environment variable
  - [ ] Trigger new deployment

- [ ] **Update DNS Records:**
  - [ ] Add/update CNAME for startupyeti.com
  - [ ] Add/update CNAME for www.startupyeti.com
  - [ ] Add A record for admin.startupyeti.com (if using subdomain)
  - [ ] Wait for DNS propagation (can take 5-60 minutes)

### Post-Migration Testing

- [ ] **Test Main Site:**
  - [ ] Visit startupyeti.com - should show new design
  - [ ] Visit www.startupyeti.com - should redirect/work
  - [ ] Test all navigation links
  - [ ] Verify blog posts appear on homepage
  - [ ] Test blog index page (/blog)
  - [ ] Test individual blog post pages
  - [ ] Test category pages
  - [ ] Test search functionality
  - [ ] Test newsletter signup
  - [ ] Test SaaS calculator

- [ ] **Test WordPress Admin:**
  - [ ] Login to admin.startupyeti.com/wp-admin
  - [ ] Verify can create/edit posts
  - [ ] Test GraphQL endpoint
  - [ ] Create test post and verify it appears on main site

- [ ] **SEO & Analytics:**
  - [ ] Verify Google Analytics is tracking
  - [ ] Check Google Search Console
  - [ ] Submit new sitemap if changed
  - [ ] Test meta tags and Open Graph
  - [ ] Verify canonical URLs

---

## WordPress Subdomain Setup Guide

### Quick Setup for admin.startupyeti.com

1. **In your hosting control panel (cPanel/Plesk/etc):**
   - Create subdomain: `admin.startupyeti.com`
   - Point it to your WordPress installation directory

2. **Update WordPress configuration:**
   ```php
   // In wp-config.php, add these lines before "That's all, stop editing!"
   define('WP_HOME','https://admin.startupyeti.com');
   define('WP_SITEURL','https://admin.startupyeti.com');
   ```

3. **Or update via database:**
   ```sql
   UPDATE wp_options
   SET option_value = 'https://admin.startupyeti.com'
   WHERE option_name IN ('siteurl', 'home');
   ```

4. **Update DNS:**
   - Add A record: `admin.startupyeti.com` → Your server IP
   - Wait for propagation

5. **Test:**
   - Visit: `https://admin.startupyeti.com/wp-admin`
   - Visit: `https://admin.startupyeti.com/graphql`

---

## Rollback Plan (If Something Goes Wrong)

### Quick Rollback Steps:
1. **Revert DNS records** to old configuration (point back to WordPress server)
2. **Remove custom domain** from Cloudflare Pages
3. **Restore WordPress URLs** to original (www.startupyeti.com)
4. Wait for DNS propagation (5-60 minutes)

### What to keep handy:
- Old DNS record values
- WordPress database backup
- Original wp-config.php backup

---

## Timeline Estimate

- **WordPress Preparation:** 1-2 hours
- **Cloudflare Configuration:** 30 minutes
- **DNS Propagation:** 5-60 minutes
- **Testing:** 1-2 hours
- **Total:** 3-5 hours

---

## Support & Troubleshooting

### Common Issues:

**1. DNS not propagating:**
- Use `nslookup startupyeti.com` to check DNS
- Clear your browser cache
- Try in incognito/private browsing
- Check https://dnschecker.org

**2. WordPress GraphQL not accessible:**
- Verify WPGraphQL plugin is active
- Check WordPress permalink settings (must not be "Plain")
- Visit /graphql directly to test

**3. Posts not showing on site:**
- Check WORDPRESS_URL environment variable in Cloudflare
- Check browser console for API errors
- Verify posts are published (not draft) in WordPress
- Check GraphQL query in browser network tab

**4. SSL/HTTPS issues:**
- Cloudflare provides automatic SSL
- Ensure WordPress is using HTTPS
- Check "Always Use HTTPS" in Cloudflare SSL settings

---

## Next Immediate Steps

### What You Should Do RIGHT NOW:

1. **Decide on WordPress location:**
   - [ ] Option A: Move to subdomain (admin.startupyeti.com) - RECOMMENDED
   - [ ] Option B: Keep at /wp-admin (more complex)

2. **Install WPGraphQL (if not done):**
   - [ ] Go to WordPress admin
   - [ ] Install and activate WPGraphQL plugin
   - [ ] Test at https://www.startupyeti.com/graphql

3. **Test current setup:**
   - [ ] Verify you can query posts via GraphQL
   - [ ] Document your current DNS records
   - [ ] Backup everything

4. **Schedule migration:**
   - [ ] Choose low-traffic time
   - [ ] Block 3-5 hours
   - [ ] Have rollback plan ready

---

## Questions to Answer Before Migration:

1. **Where is your WordPress currently hosted?**
   - Shared hosting? VPS? Managed WordPress?

2. **Do you have SSH/cPanel access to your hosting?**

3. **Do you control DNS records?**
   - Through Cloudflare? Domain registrar? Hosting provider?

4. **Is WPGraphQL already installed?**

5. **What's your current traffic?**
   - To plan migration during low-traffic period

6. **Do you have a staging environment?**
   - To test migration first

---

## Recommended Migration Path

**For the smoothest migration, I recommend:**

1. **This Weekend:**
   - Install WPGraphQL on current WordPress
   - Test GraphQL endpoint
   - Create WordPress backups

2. **Next Week:**
   - Set up admin.startupyeti.com subdomain
   - Move WordPress to subdomain
   - Test everything on subdomain

3. **Following Week:**
   - Add custom domain to Cloudflare Pages
   - Update DNS records
   - Go live with new site
   - Monitor for 24-48 hours

This staged approach minimizes risk and gives you time to test each step.
