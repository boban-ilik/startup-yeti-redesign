# Cloudflare Support Issue Documentation

## Issue Summary

**Problem:** Cannot add custom domain `startupyeti.com` to Cloudflare Pages project due to "domain already in use" error.

**Project:** startup-yeti-redesign
**Custom Domain:** startupyeti.com (and www.startupyeti.com)
**Workers.dev URL:** https://startup-yeti-redesign.boban-ilik08.workers.dev

## Current Status

- ✅ DNS records correctly configured in Cloudflare DNS
- ✅ CNAME records point to workers.dev URL (proxied)
- ✅ DNS propagation complete (resolving to Cloudflare IPs)
- ✅ Site works perfectly at workers.dev URL
- ❌ Cannot add custom domain in Pages UI - shows "domain already in use"
- ❌ Visiting custom domain shows "Cloudflare host error" or redirects incorrectly

## DNS Configuration (Current)

```
Type   Name                     Target                                              Proxy
CNAME  startupyeti.com          startup-yeti-redesign.boban-ilik08.workers.dev     Proxied
CNAME  www.startupyeti.com      startup-yeti-redesign.boban-ilik08.workers.dev     Proxied
A      admin.startupyeti.com    107.6.151.38                                       DNS only
TXT    _cf-custom-hostname      "startup-yeti-redesign.boban-ilik08.workers.dev"   -
MX     startupyeti.com          startupyeti.com (Priority 0)                       -
```

## What We've Tried

1. ✅ Removed and re-added DNS records multiple times
2. ✅ Tried both A records and CNAME records
3. ✅ Added TXT verification record
4. ✅ Waited for full DNS propagation (24+ hours)
5. ✅ Cleared browser caches
6. ✅ Tried both proxied and DNS-only modes
7. ✅ Verified no conflicts with WordPress subdomain
8. ✅ Checked for any existing domain associations

## Contact Cloudflare Support

### Method 1: Community Forums (Free Plan)
https://community.cloudflare.com/

**Post Title:**
"Cannot add custom domain to Pages project - 'domain already in use' error"

**Post Content:**
```
I'm unable to add my custom domain `startupyeti.com` to my Cloudflare Pages project
`startup-yeti-redesign` due to a persistent "domain already in use" error.

**Details:**
- Project: startup-yeti-redesign
- Domain: startupyeti.com
- Workers.dev URL: https://startup-yeti-redesign.boban-ilik08.workers.dev

**What I've done:**
- DNS records correctly configured with CNAMEs pointing to my workers.dev URL
- DNS fully propagated (resolving to Cloudflare IPs: 104.21.9.222, 172.67.161.91)
- Site works perfectly at the workers.dev URL
- Tried removing/re-adding DNS records, both A and CNAME configurations

**Issue:**
When I try to add the custom domain in Pages UI (Custom domains tab), I get
"domain already in use" error. When visiting the custom domain, I get either
"Cloudflare host error" or it redirects incorrectly.

The domain is in my Cloudflare account, DNS is managed by Cloudflare, but the
Pages project cannot establish the routing.

Could you help manually link this domain to my Pages project?
```

### Method 2: Support Ticket (If Available)

1. Go to: https://dash.cloudflare.com/?to=/:account/support
2. Click **Contact Support** or **Submit a ticket**
3. Subject: "Custom domain not linking to Pages project - domain already in use error"
4. Include all details from the community post above
5. Attach screenshots of:
   - DNS records from Cloudflare dashboard
   - "domain already in use" error in Pages UI
   - Site working at workers.dev URL

### Method 3: Twitter/X Support
Tweet at [@CloudflareHelp](https://twitter.com/CloudflareHelp)

```
@CloudflareHelp I'm unable to add startupyeti.com to my Pages project
(startup-yeti-redesign) - getting "domain already in use" error. DNS is
configured correctly and site works at workers.dev. Can you help manually
link the domain? Case/ticket reference: [if you have one]
```

## Information to Provide to Support

**Account Email:** [Your Cloudflare account email]
**Domain:** startupyeti.com
**Pages Project Name:** startup-yeti-redesign
**Workers.dev URL:** startup-yeti-redesign.boban-ilik08.workers.dev
**Zone ID:** [Find in Overview tab of your domain]

**Error Message:**
"This domain is already in use"

**Expected Behavior:**
Custom domain should be successfully added to Pages project and site should be
accessible at startupyeti.com

**Actual Behavior:**
Cannot add domain in Pages UI, visiting domain shows Cloudflare host error

## Temporary Workaround

While waiting for support, we've implemented redirect rules so the site is accessible:

**Redirect Rules created:**
- startupyeti.com → startup-yeti-redesign.boban-ilik08.workers.dev (307 redirect)
- www.startupyeti.com → startup-yeti-redesign.boban-ilik08.workers.dev (307 redirect)

These preserve URL paths and query strings but show the workers.dev URL in the address bar.

## Expected Resolution Timeline

- **Community Forums:** 1-3 days response time
- **Support Ticket:** 24-48 hours (if available on your plan)
- **Twitter/X:** Variable, sometimes within hours

## Notes for Support Agent

This appears to be a platform issue where the Pages routing system is not properly
associating the custom domain with the project, despite:
- Domain being in the same Cloudflare account
- DNS being correctly configured
- No actual conflicts or "in use" conditions

The domain may need to be manually linked or there may be a stale routing entry
that needs to be cleared in the Pages backend.

## Updates

### [DATE] - Initial Issue
Cannot add custom domain to Pages project

### [Add dates and updates as you communicate with support]

---

## Alternative Solutions to Discuss with Support

1. **Remove and recreate Pages project** with the same GitHub connection
2. **Use Cloudflare Workers** instead of Pages (if necessary)
3. **Check for stale DNS/routing cache** in Cloudflare's backend
4. **Manually provision custom hostname** via API or backend tools

## Related Documentation

- [Cloudflare Pages Custom Domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Troubleshooting Custom Domains](https://developers.cloudflare.com/pages/configuration/custom-domains/#troubleshooting)
- [Cloudflare Community](https://community.cloudflare.com/c/performance/workers-and-pages/10)
