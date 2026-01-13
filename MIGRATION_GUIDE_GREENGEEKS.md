# Your Specific Migration Guide
## GreenGeeks + OnlyDomains + Cloudflare Pages

**Your Setup:**
- ✅ WordPress hosted on GreenGeeks
- ✅ cPanel access available
- ✅ DNS managed by OnlyDomains.com
- ✅ WPGraphQL already installed

**Goal:** Move startupyeti.com to new Astro site, keep WordPress as headless CMS

---

## Migration Strategy

We'll use the **WordPress subdomain approach** for clean separation:
- **admin.startupyeti.com** → WordPress (hosted on GreenGeeks)
- **startupyeti.com** → New Astro site (Cloudflare Pages)

**Total Time:** 3-4 hours
**Downtime:** ~30 minutes during DNS switch

---

## PRE-MIGRATION (Do This First - 1 hour)

### 1. Create Complete Backup

**In GreenGeeks cPanel:**

1. Login to cPanel (greengeeks.com)
2. Go to **Files → Backup Wizard**
3. Click **Backup → Full Backup**
4. Download the full backup (will be emailed to you)

**OR use Backup option:**
1. cPanel → **Files → Backup**
2. Download:
   - **Full Account Backup** (everything)
   - **Home Directory** (WordPress files)
   - **MySQL Database** (your WordPress database)

**Save these files locally - you'll need them if rollback is needed**

### 2. Document Current DNS Settings

**Login to OnlyDomains.com:**

1. Login to your OnlyDomains account
2. Find startupyeti.com in your domain list
3. Click **Manage DNS** or **DNS Settings**
4. Take screenshots of ALL current records, especially:
   - A records for @ (root domain)
   - A records for www
   - Any CNAME records
   - MX records (email)
   - TXT records (verification codes)

**Write down your current setup:**
```
A      @                    → [Current GreenGeeks IP]
A      www                  → [Current GreenGeeks IP]
MX     @                    → [Your email server]
```

### 3. Test WordPress GraphQL

1. Visit: `https://www.startupyeti.com/graphql`
2. You should see the GraphiQL interface
3. Try this test query:
   ```graphql
   query {
     posts(first: 5) {
       nodes {
         title
         slug
       }
     }
   }
   ```
4. Verify you get results with your posts

**If GraphQL doesn't work:**
- Go to WordPress admin → Settings → Permalinks
- Make sure it's NOT set to "Plain"
- Click Save (even if no changes)
- Try /graphql again

---

## PHASE 1: Set Up WordPress Subdomain (30-45 minutes)

### Step 1: Create Subdomain in cPanel

**In GreenGeeks cPanel:**

1. Login to cPanel
2. Go to **Domains → Subdomains**
3. Create new subdomain:
   - **Subdomain:** `admin`
   - **Domain:** `startupyeti.com` (should auto-select)
   - **Document Root:** Should auto-fill to `/public_html/admin`

4. **IMPORTANT:** Change the Document Root to your existing WordPress directory
   - If WordPress is in `/public_html` → use `/public_html`
   - If WordPress is in `/public_html/wordpress` → use `/public_html/wordpress`
   - Find this by going to cPanel → File Manager and locating wp-config.php

5. Click **Create**

**GreenGeeks will automatically:**
- Create DNS record for admin.startupyeti.com pointing to their server
- Set up subdomain routing

### Step 2: Update WordPress Site URLs

**Method A: Via wp-config.php (RECOMMENDED)**

1. In cPanel, go to **Files → File Manager**
2. Navigate to your WordPress directory (where wp-config.php is)
3. Right-click **wp-config.php** → **Edit**
4. Find the line that says `/* That's all, stop editing! Happy publishing. */`
5. **ABOVE that line**, add these two lines:
   ```php
   define('WP_HOME','https://admin.startupyeti.com');
   define('WP_SITEURL','https://admin.startupyeti.com');
   ```
6. Click **Save Changes**

**Method B: Via Database (if Method A doesn't work)**

1. In cPanel, go to **Databases → phpMyAdmin**
2. Select your WordPress database (left sidebar)
3. Click on **wp_options** table
4. Find rows where `option_name` is `siteurl` and `home`
5. Edit both and change `option_value` to: `https://admin.startupyeti.com`
6. Click **Go** to save

### Step 3: Test WordPress on Subdomain

**Wait 5-10 minutes for DNS propagation, then:**

1. Visit: `https://admin.startupyeti.com/wp-admin`
2. Login with your WordPress credentials
3. It should work! You might get redirected to https setup

**Test GraphQL endpoint:**
1. Visit: `https://admin.startupyeti.com/graphql`
2. Should see GraphiQL interface
3. Run test query to verify posts are accessible

**If you get SSL/HTTPS errors:**
- GreenGeeks usually auto-provisions SSL for subdomains
- Wait 10-15 minutes for SSL to activate
- Or in cPanel → Security → SSL/TLS Status → run AutoSSL

---

## PHASE 2: Configure Cloudflare Pages (30 minutes)

### Step 1: Add Custom Domain to Cloudflare Pages

1. **Go to Cloudflare Dashboard:** https://dash.cloudflare.com
2. Navigate to **Workers & Pages**
3. Click on your project: **startup-yeti-redesign**
4. Click **Custom domains** tab
5. Click **Set up a custom domain**
6. Enter: `startupyeti.com`
7. Click **Continue**

Cloudflare will show you DNS records to add - **DON'T DO THIS YET**, just note them down.

8. **Repeat for www:**
   - Click **Set up a custom domain** again
   - Enter: `www.startupyeti.com`
   - Click **Continue**

**Cloudflare will show something like:**
```
CNAME  startupyeti.com  →  startup-yeti-redesign.pages.dev
CNAME  www              →  startup-yeti-redesign.pages.dev
```

**Write down the pages.dev URL - you'll need it for DNS!**

### Step 2: Add Environment Variables

**Still in Cloudflare Dashboard:**

1. Click on **Settings** tab
2. Scroll to **Environment variables**
3. Click **Add variable**
4. For **Production environment:**
   - Variable name: `WORDPRESS_URL`
   - Value: `https://admin.startupyeti.com/graphql`
   - Click **Save**

5. **Also add for Preview** (optional but recommended):
   - Click **Add variable** again
   - Select **Preview** environment
   - Same variable name and value
   - Click **Save**

### Step 3: Trigger New Build

1. Go to **Deployments** tab
2. Click the **...** menu on the latest deployment
3. Select **Retry deployment**
4. OR push any small change to GitHub to trigger auto-deploy

**Wait for build to complete (2-3 minutes)**

Verify in build logs you see:
```
✓ 150+ static routes generated
```

---

## PHASE 3: DNS Migration (30 minutes + propagation)

### Step 1: Transfer DNS to Cloudflare (RECOMMENDED)

**Why?** Makes management easier and enables all Cloudflare features.

**In OnlyDomains:**

1. Login to OnlyDomains.com
2. Find startupyeti.com
3. Look for **Nameservers** or **DNS Management**
4. Note down current nameservers (probably OnlyDomains nameservers)

**In Cloudflare:**

1. Go to Cloudflare Dashboard
2. Click **Add a site** (if not already added)
3. Enter: `startupyeti.com`
4. Choose **Free** plan
5. Click **Continue**

6. Cloudflare will scan your DNS records
7. **Review imported records** - add any missing ones (especially MX for email!)
8. Click **Continue**

9. Cloudflare will show you **new nameservers**:
   ```
   something.ns.cloudflare.com
   something.ns.cloudflare.com
   ```

10. **Copy these nameservers**

**Back in OnlyDomains:**

1. Go to domain management
2. Change nameservers from OnlyDomains to Cloudflare nameservers
3. Save changes
4. **Wait 2-24 hours for nameserver propagation**

**Check status:**
- Cloudflare will email you when it's active
- Or check in Cloudflare dashboard for "Active" status

### Step 2: Configure DNS in Cloudflare

**Once nameservers are active (domain shows "Active" in Cloudflare):**

1. In Cloudflare dashboard, click on **startupyeti.com**
2. Go to **DNS → Records**

3. **Delete or update old records:**
   - Delete any A records pointing to GreenGeeks IP for @ and www
   - Keep MX records (email)
   - Keep any TXT records (verification)

4. **Add these new records:**

   **For main site (Cloudflare Pages):**
   ```
   Type: CNAME
   Name: @
   Target: startup-yeti-redesign.pages.dev
   Proxy: Enabled (orange cloud)
   ```

   ```
   Type: CNAME
   Name: www
   Target: startup-yeti-redesign.pages.dev
   Proxy: Enabled (orange cloud)
   ```

   **For WordPress admin (GreenGeeks):**
   ```
   Type: A
   Name: admin
   IPv4: [Your GreenGeeks IP - find in cPanel or ask support]
   Proxy: Disabled (gray cloud) - Important!
   ```

5. **Click Save**

### Alternative: Keep DNS at OnlyDomains (Not Recommended)

If you prefer to keep DNS at OnlyDomains:

**In OnlyDomains DNS settings:**

1. **Add these records:**
   ```
   CNAME  @    →  startup-yeti-redesign.pages.dev
   CNAME  www  →  startup-yeti-redesign.pages.dev
   A      admin →  [GreenGeeks IP address]
   ```

2. **Note:** Some DNS providers don't allow CNAME for root (@)
   - If that fails, use A records pointing to Cloudflare IPs
   - Ask Cloudflare support for their A record IPs

---

## PHASE 4: SSL & Final Configuration (15 minutes)

### In Cloudflare Dashboard:

1. Go to **SSL/TLS** tab
2. Set **SSL/TLS encryption mode** to: **Full** (not Full Strict, not Flexible)
3. Enable **Always Use HTTPS**
4. Enable **Automatic HTTPS Rewrites**

### For WordPress Subdomain SSL:

**In GreenGeeks cPanel:**
1. Go to **Security → SSL/TLS Status**
2. Find **admin.startupyeti.com**
3. Click **Run AutoSSL**
4. Wait 5-10 minutes for SSL certificate

---

## TESTING CHECKLIST (Do this before declaring success!)

### Test Main Site (startupyeti.com):

- [ ] Visit http://startupyeti.com (should redirect to https)
- [ ] Visit https://startupyeti.com (should show new design)
- [ ] Visit https://www.startupyeti.com (should work)
- [ ] Test all navigation links
- [ ] Check homepage shows 3 recent blog posts
- [ ] Visit /blog page (should list all posts)
- [ ] Click on a blog post (should load article)
- [ ] Test category pages (/business, /marketing, etc)
- [ ] Test search functionality (search for a post)
- [ ] Test newsletter signup
- [ ] Test SaaS calculator (/calculator)
- [ ] Check mobile responsiveness
- [ ] Test dark mode toggle

### Test WordPress Admin:

- [ ] Visit https://admin.startupyeti.com/wp-admin
- [ ] Login successfully
- [ ] Create a test blog post
- [ ] Publish the test post
- [ ] Check if it appears on main site within a few minutes
- [ ] Delete test post

### Test GraphQL:

- [ ] Visit https://admin.startupyeti.com/graphql
- [ ] Run a query to fetch posts
- [ ] Verify all posts are accessible

### Test Email (IMPORTANT):

- [ ] Send test email from your contact form (if you have one)
- [ ] Send email from WordPress
- [ ] Verify MX records are working

### SEO & Meta:

- [ ] View page source - check meta tags
- [ ] Verify Google Analytics tracking (if installed)
- [ ] Check structured data
- [ ] Verify canonical URLs

---

## DNS Propagation Timeline

**Expect:**
- Nameserver change: 2-24 hours
- DNS record updates: 5-60 minutes
- SSL activation: 5-15 minutes

**Check propagation status:**
- https://dnschecker.org (enter startupyeti.com)
- `nslookup startupyeti.com` in terminal
- Try different devices / networks

---

## ROLLBACK PROCEDURE (If something goes wrong)

### Quick Rollback:

1. **In OnlyDomains (if you kept DNS there):**
   - Change records back to original GreenGeeks IP
   - Remove subdomain records

2. **In Cloudflare (if you moved DNS):**
   - Change DNS records back to GreenGeeks IP
   - Or change nameservers back to OnlyDomains

3. **In WordPress wp-config.php:**
   - Remove or comment out the WP_HOME and WP_SITEURL lines:
   ```php
   // define('WP_HOME','https://admin.startupyeti.com');
   // define('WP_SITEURL','https://admin.startupyeti.com');
   ```

4. **Or via database:**
   - Change siteurl and home back to `https://www.startupyeti.com`

5. **Wait for DNS propagation** (5-60 minutes)

6. **Restore from backup if needed**

---

## TROUBLESHOOTING

### Issue: "Too many redirects" error

**Fix:**
1. In Cloudflare: Set SSL mode to "Full" (not Flexible)
2. Clear browser cache
3. Wait a few minutes

### Issue: WordPress admin won't load

**Fix:**
1. Check GreenGeeks SSL is active for subdomain
2. Try http://admin.startupyeti.com (then fix SSL)
3. Check wp-config.php has correct URLs

### Issue: Blog posts not showing on main site

**Fix:**
1. Check WORDPRESS_URL in Cloudflare environment variables
2. Check browser console for errors (F12)
3. Verify GraphQL endpoint is accessible
4. Trigger new deployment in Cloudflare Pages

### Issue: DNS not propagating

**Fix:**
1. Wait longer (can take up to 48 hours for nameservers)
2. Check https://dnschecker.org
3. Clear browser DNS cache: chrome://net-internals/#dns
4. Try incognito mode or different device

### Issue: Email stopped working

**Fix:**
1. Check MX records are present in DNS
2. MX records should point to your email provider, not changed
3. In Cloudflare, verify MX records are correct
4. Email propagation can take a few hours

---

## TIMELINE & SCHEDULE

### Recommended Schedule:

**Friday Evening (Prep):**
- Create backups
- Document DNS settings
- Set up subdomain in cPanel
- Test subdomain access

**Saturday Morning (Migration):**
- 9:00 AM - Configure Cloudflare Pages
- 9:30 AM - Change DNS/Nameservers
- 10:00 AM - Wait for propagation (have coffee ☕)
- 11:00 AM - Test everything
- 12:00 PM - Monitor for issues

**Why weekend:** Lower traffic, more time to fix issues

---

## COST BREAKDOWN

- **GreenGeeks hosting:** Already paying (no change)
- **Cloudflare Pages:** FREE (includes SSL, CDN, unlimited bandwidth)
- **DNS at Cloudflare:** FREE
- **OnlyDomains:** Just domain registration cost
- **Total additional cost:** $0

---

## IMMEDIATE NEXT STEPS

### Today (30 minutes):

1. **Create backup in GreenGeeks:**
   - cPanel → Backup Wizard → Full Backup
   - Wait for email with backup link

2. **Document DNS settings:**
   - Login to OnlyDomains
   - Screenshot all DNS records
   - Note down nameservers

3. **Test GraphQL:**
   - Visit www.startupyeti.com/graphql
   - Verify it works

### This Weekend (3-4 hours):

4. **Follow Phase 1:** Set up subdomain (45 min)
5. **Follow Phase 2:** Configure Cloudflare (30 min)
6. **Follow Phase 3:** Migrate DNS (30 min + wait)
7. **Follow Phase 4:** Test everything (1-2 hours)

---

## SUPPORT CONTACTS

**If you need help:**

- **GreenGeeks Support:**
  - Live chat in cPanel
  - Help them with subdomain or SSL issues

- **Cloudflare Support:**
  - Community forums (free plan)
  - Or ask me for help!

- **OnlyDomains:**
  - For nameserver changes
  - DNS questions

---

## QUESTIONS TO ASK GREENGEEKS (If needed)

1. "What's my server IP address?"
   - Needed for admin subdomain A record

2. "Can you help me point admin.startupyeti.com to my existing WordPress installation?"

3. "How do I activate SSL for admin.startupyeti.com subdomain?"

---

## Ready to Start?

✅ You have everything you need
✅ You understand the steps
✅ You have time blocked (3-4 hours)
✅ You have backups ready
✅ You've tested GraphQL

**Start with Phase 1 when you're ready!**

Good luck! 🚀
