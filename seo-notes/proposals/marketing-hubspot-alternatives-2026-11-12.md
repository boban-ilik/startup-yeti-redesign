# /marketing/hubspot-alternatives: on-page proposal (cycle 1, Stages 1-3 only)

Target keyword: **hubspot alternatives** · Country: US · Run date: 2026-11-12 · WP post id 2001 (last modified 2026-10-29)
Status: **awaiting approval.** Nothing has been written to WordPress, `seo-notes/index.json` or `seo-notes/urls/`. No commit, no rebuild.

Every "current HTML" fragment below was checked against the live WP raw content (`context=edit`, fetched 2026-11-12) and appears **exactly once**. Edits are independent, so any subset can be applied, with two dependencies noted (T1 and B9/B12 assume B8).

---

## 1. Baseline metrics

### GSC (Ahrefs GSC project 4736210), 2026-10-13 to 2026-11-11 (30 days)

Page total (from your brief): **967 impressions, 0 clicks, avg position ~47.**

| Query | Impr. | Clicks | Avg pos |
|---|---|---|---|
| hubspot alternatives | 290 | 0 | 38.7 |
| alternative to hubspot | 191 | 0 | 56.2 |
| alternatives to hubspot | 94 | 0 | 54.7 |
| hubspot alternative | 91 | 0 | 46.8 |
| hubspot competitors | 85 | 0 | 56.6 |
| hubspot vs dreamteam | 11 | 0 | 23.9 |
| best hubspot alternatives | 11 | 0 | 25.4 |
| alternatives hubspot | 10 | 0 | 51.6 |
| alternative for hubspot | 9 | 0 | 48.6 |
| cheaper hubspot alternatives | 8 | 0 | 50.4 |
| cheaper alternative to hubspot | 8 | 0 | 54.0 |
| hubspot alternatives for startups | 6 | 0 | 46.2 |
| hubspot crm alternatives | 5 | 0 | 72.8 |
| (20 more queries, 1-4 impressions each) | | | |

Weekly page trend (GSC page history, weeks starting):

| Week | Impr. | Avg pos |
|---|---|---|
| 2026-09-21 | 147 | 49.8 |
| 2026-09-28 | 230 | 45.7 |
| 2026-10-05 | 280 | 43.1 |
| 2026-10-12 | **423** | 47.0 |
| 2026-10-19 | 248 | 48.2 |
| 2026-10-26 | 167 | 46.0 |
| 2026-11-02 | **62** | **58.7** |

The page has slid for three weeks: impressions down 85% from the Oct 12 peak, position 47 to 59. The only content change in that window is the 2026-10-29 product-market-fit link (scripts/link-oct29-trio.mjs), which is unlikely to cause a drop this size. Cause unknown; this is the baseline the next review must beat.

Ahrefs organic keywords for the URL: **none recorded** (the page is below Ahrefs' tracked depth), so the GSC table above is the whole metric basket.

### Keyword set (Ahrefs Keywords Explorer, US, 2026-11-12)

| Keyword | Vol/mo | KD | CPC | Note |
|---|---|---|---|---|
| hubspot competitors | 4,000 | 6 | $13.00 | parent topic of the head term |
| hubspot alternatives | 1,300 | 5 | $5.00 | target (Aug memory said 1,629) |
| hubspot alternative | 800 | 7 | $0.60 | |
| alternatives to hubspot | 300 | 6 | | |
| hubspot alternatives for small business | 100 | 4 | $15.00 | |
| hubspot crm alternatives | 100 | 3 | $9.00 | |
| best free hubspot alternatives | 100 | 5 | | |
| hubspot alternatives free | 70 | 7 | $17.00 | |
| cheaper alternative to hubspot | 60 | 4 | | |
| hubspot marketing alternatives | 60 | 0 | $13.00 | |
| hubspot aeo alternatives | 80 | n/a | | new HubSpot AEO product ($45-50/mo); off-topic, noted only |

Intent: informational + commercial (comparison). SERP features: AI Overview, People Also Ask, sitelinks, video, image pack.

### Top 10 (Ahrefs SERP overview, US, pulled 2026-11-12)

| Pos | URL | DR | Est. traffic | Publisher type |
|---|---|---|---|---|
| AI Overview | cites Reddit, Zapier, LinkedIn post, 2 YouTube videos | | | |
| 2 | reddit.com/r/CRMSoftware/... Best Alternatives to HubSpot for Small Businesses | 95 | 1,696 | forum |
| 3 | reevo.ai/blog/hubspot-alternatives | 50 | 613 | CRM vendor (ranks itself #1) |
| 4 | salesforce.com/blog/small-business/hubspot-alternatives/ | 92 | 408 | CRM vendor (ranks itself #1) |
| PAA | Why are people leaving HubSpot? / What are the top 3 CRM platforms? / Why is HubSpot falling? / Who is HubSpot's competition? | | | |
| 6 | zendesk.com/why-zendesk/hubspot-alternative/ | 94 | 402 | vendor (ranks itself #1) |
| 7 | zapier.com/blog/hubspot-alternatives/ | 92 | 393 | automation vendor, not a CRM |
| 8 | creatio.com/glossary/hubspot-alternatives | 78 | 173 | CRM vendor (ranks itself #1) |
| 9 | youtube.com/watch?v=uvoC37ayUv0 | 99 | 9 | video |

Salesflare, which the August angle and our opening sentence lean on, is **gone from the top 10.**

### Revenue impact (CPC as a traffic-value proxy, not revenue)

"hubspot alternatives" is 1,300/mo at $5.00 CPC. At position ~39 the page gets ~0.1% CTR, about 1 visit a month. On-page work alone realistically targets positions 10-15 from here (~0.5-1.1% CTR): roughly **7-14 extra visits/mo, about $35-70/mo** in traffic value. Top 5 (4.8%) would be ~60 visits/mo, ~$300/mo, but that needs to displace DR 92-95 pages and fight an AI Overview plus Reddit, so treat it as the ceiling, not the forecast. The larger prize is the 4,000/mo "hubspot competitors" parent ($13 CPC), where the page sits at 56.6.

---

## 2. Gap analysis

### Quick score: your page vs top 5 articles

| Factor | Your page | Top 5 | Verdict |
|---|---|---|---|
| Per-tool sections (one H3 per alternative) | 0 | 5/5 | **Missing (biggest gap)** |
| Tradeoff / limitation per tool | none (only HubSpot's downsides) | 3/5 (Reevo "tradeoff", Creatio "limitations", Zapier cons) | Missing |
| Tools covered | 6 | 7 to 15 | Behind |
| Why consider alternatives / HubSpot's drawbacks | yes (cost ladder + "when leaving makes sense") | 5/5 | Covered, stronger than all 5 (real numbers) |
| At-a-glance comparison table | yes | 5/5 | Covered |
| How to choose | yes (job-based bullets) | 5/5 | Covered |
| Real prices for every tool | yes | 4/5 (Reevo gives none) | Ahead, but 2 rows are stale |
| Migration cost | yes | 0/5 | Ahead (differentiator) |
| Negotiation advice | yes | 0/5 | Ahead (differentiator) |
| FAQ | 6 Qs | 2/5 (Salesforce 5, Zendesk 5) | Ahead; missing 2 PAA questions |
| Word count (main body) | 1,645 | ~2,040 to ~4,470, avg ~3,700 | Behind |
| Title has number / year | no / no | 5/5 / 4/5 | Fix |
| "competitors" in H1/H2 | no | 2/5 (Zendesk, Creatio) | Fix (parent topic 4,000/mo) |
| Opening claim accurate | **no** (see B1) | | Fix now |

**Evidence quality:** target page checked rendered (live HTML: 1 H1, 8 content H2s, schema Article + BreadcrumbList + WebPage, no FAQPage) and in WP raw. Competitors: 5/5 raw cf-scraper markdown scrapes (Reevo, Salesforce, Zendesk, Zapier, Creatio) plus the #2 Reddit thread. Competitor word counts are approximate: scoped H1 to closing CTA, but include image alt text, table cells and in-body promo blocks. The SERP list comes from Ahrefs' latest snapshot, not a live Google check; confirm page one before publishing B1.

### Tool coverage across the top 5 articles

| Tool | Reevo | Salesforce | Zendesk | Zapier | Creatio | Count | On our page |
|---|---|---|---|---|---|---|---|
| Pipedrive | ✓ | ✓ | ✓ | ✓ | ✓ | 5/5 | yes |
| Zoho CRM | ✓ | ✓ | ✓ | ✓ | ✓ | 5/5 | yes |
| Salesforce | | ✓ | ✓ | ✓ | ✓ | 4/5 | **no** (only a link) |
| ActiveCampaign | | ✓ | ✓ | ✓ | ✓ | 4/5 | yes |
| Freshsales / Freshworks | ✓ | ✓ | | | ✓ | 3/5 | **no** |
| EngageBay | | ✓ | ✓ | ✓ | | 3/5 | **no** (also recommended twice on Reddit) |
| Zendesk | | ✓ | ✓ | ✓ | ✓ | 4/5 incl. self | no (help desk; off our angle, skip) |
| Brevo | ✓ | | | ✓ | | 2/5 | yes |
| Mailchimp | | | ✓ | ✓ | | 2/5 | no (named in new FAQ only) |
| Keap | | ✓ | ✓ | | | 2/5 | no (skip, $159+/mo) |
| Close | ✓ | | | | | 1/5 | yes |
| Attio | | | | | | 0/5 | yes (differentiator) |

### Missing subtopics, by priority

**Fix now (high confidence, raw-scrape or accuracy evidence)**
1. **Per-tool sections with the downside of each tool.** 5 of 5 give each alternative its own H3; 3 of 5 state each tool's tradeoff. Our page names six tools only as table rows and one-line bullets. Proposed fix B11: a "The catch with each HubSpot alternative" H2 with nine H3s. This also fits the page's cost angle, and no competitor states the catch in dollars.
2. **The opening sentence is now false.** "every result on page one is a CRM company... Salesflare's list ranks Salesflare first": Salesflare has left the top 10, and Reddit (#2) and Zapier (#7) are not CRM vendors. It is the sentence a skeptical reader checks first. Fix B1.
3. **Two stale prices in the table** (Attio, Brevo) and one misleading one (Close Solo is 1 user only). Fixes B5 to B7, B9, B10, B12, B13.
4. **Salesforce, Freshsales and EngageBay are missing.** Coverage is 4/5, 3/5 and 3/5. Fix B8 (table rows) and B11 (H3s).

**Should fix (medium)**
5. **Title has no number and no year.** 5/5 competitor titles use a number and 4/5 use "2026". Fix T1.
6. **"hubspot competitors" (4,000/mo, the parent topic) is absent from every heading.** The page sits at 56.6 for it. Fixes B3 and B14 (FAQ).
7. **People Also Ask asks "Who is HubSpot's competition?" and "Why are people leaving HubSpot?"** Neither is answered on the page. Fix B14.

**Nice to have / not proposed**
- "hubspot alternatives for small business" (100/mo, $15 CPC) never appears as a phrase. I have not forced it in.
- FAQPage schema: the route emits none. Adding it means a layout change in `src/pages/[category]/[slug].astro`, outside this page's scope. Flagged only.
- PAA "Why is HubSpot falling?" is about HubSpot's stock. Answering it needs market data I have not verified, so skipped.

### Secondary keyword usage
"hubspot alternatives" is in the title, H1, first sentence and an H2: fine. "competitor" appears once (1 → 3 after the edits). "small business" appears 0 times (after: 1, hyphenated). "free" is heavily covered.

### Internal-link audit
- **Outgoing (main content), 7:** /startup/salesforce-cost, /startup/product-market-fit, /startup/pipedrive-alternatives, /startup/choosing-the-right-crm-for-your-startup, /startup/the-cost-of-pitchbook, /startup/carta-pricing, /marketing/saas-marketing-strategies. All relative, no trailing slash. **Decision: preserve, add none.** The new section deliberately does not repeat the Salesforce and Pipedrive links already on the page.
- **Incoming, 7** (WP content search): gtm-engineer, salesforce-cost, ai-employees, pipedrive-alternatives, carta-pricing, saas-marketing-strategies, choosing-the-right-crm-for-your-startup.
- **Incoming candidate:** /startup/the-role-of-crm-in-startup-operations mentions HubSpot without linking, but only inside a Gutenberg FAQ block, where the text is stored twice (block JSON and HTML). **Decision: skip this cycle.** Editing it would touch another page's FAQ block, and 7 incoming links is already healthy.

### Voice Match Note (from "What HubSpot actually costs", "The uncomfortable answer", "When leaving actually makes sense")
- Second person ("you"), with Startup Yeti as "we/our" ("we priced", "Our guide"). Contractions used ("isn't", "you're").
- Short declarative sentences. Bold lead-in on list items. Contrast constructions ("a cliff, not a step", "The trap is not HubSpot.").
- Dollar figures inline in every paragraph, with one worked example per section ($504 vs $12,600).
- Skeptical of vendors, pro-reader: says "stay" when staying is cheaper. Sections close on a one-line verdict.
- New copy mirrors this: a bold "Pick it if / The catch" lead-in per tool, one dollar figure per paragraph, one worked team-of-three example (Close, Attio), and a closing verdict line in the section intro. No em or en dashes (checked programmatically: 0 in all replacement HTML).

### Business Risk Check

| Edit | Ranking/search upside | Trust/conversion risk | Mitigation |
|---|---|---|---|
| T1 title/H1 | Number + year match 5/5 SERP pattern; clearer list intent | Loses the "What It Costs to Leave" hook; a year in the title commits us to a yearly refresh | Keep the hook in the meta; alternate title keeps it |
| B1 opener | Removes a false first sentence | Weakens the "every result is a vendor" punch a little | Still 4 of 5 list articles are vendor-published, with named examples, dated |
| B11 new section (+563 words) | Closes the 5/5 per-tool gap | Could read like the vendor lists we criticise | Written as "the catch", not praise; every figure is from the vendor's own page |
| B8/B11 Salesforce row | 4/5 coverage | Salesforce isn't cheaper than HubSpot Starter | Framed as "migrate once" for teams expecting heavy customisation, not as a saving |
| B14 FAQs | PAA + 4,000/mo parent topic | Low | Answer uses our own counted data |

---

## 3. Proposed changes (exact, appliable)

### T1. Title (WP post title; the route uses it for both the `<title>` and the H1)

- **Current:** `HubSpot Alternatives: What It Costs to Leave` → rendered `HubSpot Alternatives: What It Costs to Leave | Startup Yeti` (59 chars)
- **Proposed:** `HubSpot Alternatives: 9 CRMs Priced for 2026` → rendered `HubSpot Alternatives: 9 CRMs Priced for 2026 | Startup Yeti` (**59 chars**)
- Alternate that keeps the hook: `9 HubSpot Alternatives and What Leaving Costs` → `... | Startup Yeti` (**60 chars**)
- "9" assumes B8 is applied (Close, Pipedrive, ActiveCampaign, Attio, Brevo, Zoho, Freshsales, EngageBay, Salesforce). Without B8, use 6. The slug does not change.

### M1. Meta description (WP excerpt; the route hard-cuts at 160)

- **Current (158):** `HubSpot Professional is $800/mo plus a required $3,000 onboarding fee. Here's what that really costs, when leaving makes sense, and the alternatives worth it.`
- **Proposed (150):** `HubSpot alternatives priced Nov 2026: Freshsales $9/user, Pipedrive $14/seat, Zoho free for 3 users, vs HubSpot Pro at $800/mo plus $3,000 onboarding.`
- The keyword now leads (it was absent from the first 100 characters). The excerpt also feeds related-post cards, where it is cut at 100-120 characters; the first 100 characters still read cleanly.

### SERP preview

```
BEFORE
HubSpot Alternatives: What It Costs to Leave | Startup Yeti
www.startupyeti.com › marketing › hubspot-alternatives
HubSpot Professional is $800/mo plus a required $3,000 onboarding fee. Here's what that really costs, when leaving makes sense, and the alternatives worth it.

AFTER
HubSpot Alternatives: 9 CRMs Priced for 2026 | Startup Yeti
www.startupyeti.com › marketing › hubspot-alternatives
HubSpot alternatives priced Nov 2026: Freshsales $9/user, Pipedrive $14/seat, Zoho free for 3 users, vs HubSpot Pro at $800/mo plus $3,000 onboarding.
```

### Body edits (WP `content.raw`)

Each "current" fragment occurs exactly once in the live raw content (verified 2026-11-12). Replace it with the "replacement" verbatim.


#### B1. Rewrite the opening paragraph (the SERP claim is no longer true)

**Why:** Accuracy. Salesflare is no longer in the top 10 (Ahrefs SERP, 2026-11-12), and Reddit (#2) and Zapier (#7) are not CRM vendors, so 'every result on page one is a CRM company' is now false in the first sentence a reader checks. The rewrite keeps the page's wedge (vendors ranking themselves) with claims verified in today's scrapes.

**Current HTML** (occurrences in live raw: 1):

```html
<p>Search "HubSpot alternatives" and every result on page one is a CRM company. Salesflare's list ranks Salesflare first, written by Salesflare's CEO. Reevo's list ranks Reevo first. Salesforce publishes its own. Each is a sales page wearing a comparison's clothes. Salesforce's version earned its own teardown; see <a href="/startup/salesforce-cost">what Salesforce actually costs</a> once implementation and add-ons stack up.</p>
```

**Replacement HTML:**

```html
<p>Search "HubSpot alternatives" and four of the five list articles on page one are published by companies selling a competing product. Reevo's list puts Reevo first. Zendesk ranks Zendesk first. Creatio opens with Creatio. Salesforce's list ends with a heading that says "We vote for Salesforce." The fifth is Zapier's roundup, and above all of them sits a Reddit thread where at least two of the answers come from people disclosing they work for the CRM they recommend. (That is page one as we checked it in November 2026.) Each vendor list is a sales page wearing a comparison's clothes. Salesforce's pick earned its own teardown; see <a href="/startup/salesforce-cost">what Salesforce actually costs</a> once implementation and add-ons stack up.</p>
```

#### B2. HubSpot Starter row: note the live new-customer promo

**Why:** Anyone who clicks through to HubSpot's page today sees $7/mo/seat first. Without the note our $20 looks wrong. Optional; drop it if you would rather not track a promo.

**Current HTML** (occurrences in live raw: 1):

```html
<tr><td>Starter</td><td>From $20/mo per seat</td><td>1,000 marketing contacts</td><td>None</td></tr>
```

**Replacement HTML:**

```html
<tr><td>Starter</td><td>From $20/mo per seat (HubSpot was showing $7/seat for new customers on a limited-time offer in November 2026)</td><td>1,000 marketing contacts</td><td>None</td></tr>
```

#### B3. Rename the comparison H2 to catch 'hubspot competitors'

**Why:** 'hubspot competitors' is the parent topic (4,000/mo, KD 6, $13 CPC) and the page sits at 56.6 for it in GSC. 2 of the top 5 (Zendesk, Creatio) put 'competitors' in their H1.

**Current HTML** (occurrences in live raw: 1):

```html
<h2>HubSpot alternatives compared</h2>
```

**Replacement HTML:**

```html
<h2>HubSpot alternatives and competitors compared</h2>
```

#### B4. Date-stamp the price table

**Why:** House rule: date volatile facts. 'current' with no date reads stale after the next price change.

**Current HTML** (occurrences in live raw: 1):

```html
<p>All prices below are the vendors' current published rates on annual billing, checked directly on each pricing page. CRM pricing changes often, so verify before you commit.</p>
```

**Replacement HTML:**

```html
<p>All prices below are the vendors' published rates on annual billing, checked on each vendor's own pricing page on 12 November 2026. CRM pricing changes often, so verify before you commit.</p>
```

#### B5. Close row: Solo is one user only

**Why:** Close's page labels Solo '1 user only'. '$9/user' implies a team can buy it; the team entry price is Essentials at $35/user/mo (annual).

**Current HTML** (occurrences in live raw: 1):

```html
<tr><td><strong>Close</strong></td><td>Trial only</td><td>Solo <strong>$9</strong>/user/mo</td><td>$139/user/mo</td><td>Per user</td></tr>
```

**Replacement HTML:**

```html
<tr><td><strong>Close</strong></td><td>Trial only</td><td>Solo <strong>$9</strong>/mo (1 user only); teams from $35/user/mo</td><td>Scale $139/user/mo</td><td>Per user</td></tr>
```

#### B6. Attio row: pricing is now a workspace fee plus per-user

**Why:** STALE PRICE. Attio's live page shows Plus at $40/mo per workspace including 1 user, then $35/mo per added user (annual); Pro $100/mo + $79 per added user. A 3-person team on Plus pays $110/mo, not $105.

**Current HTML** (occurrences in live raw: 1):

```html
<tr><td><strong>Attio</strong></td><td>Yes, 3 seats</td><td>Plus <strong>$35</strong>/user/mo</td><td>Pro $79/user/mo</td><td>Per user</td></tr>
```

**Replacement HTML:**

```html
<tr><td><strong>Attio</strong></td><td>Yes, up to 3 users</td><td>Plus <strong>$40</strong>/mo per workspace (1 user), +$35 per extra user</td><td>Pro $100/mo per workspace (1 user), +$79 per extra user</td><td>Workspace fee + per user</td></tr>
```

#### B7. Brevo row: free plan limit and Starter price

**Why:** STALE/INACCURATE. Brevo's pricing FAQ says the Free plan sends 'up to 300 emails per day'. The 5,000 emails/month figure on Brevo's page belongs to the Starter plan configurator, not Free.

**Current HTML** (occurrences in live raw: 1):

```html
<tr><td><strong>Brevo</strong></td><td>Yes, 5,000 emails/mo</td><td><strong>$8</strong>/mo</td><td>$449/mo</td><td>Email volume</td></tr>
```

**Replacement HTML:**

```html
<tr><td><strong>Brevo</strong></td><td>Yes, up to 300 emails/day</td><td>Starter <strong>$8.08</strong>/mo (5,000 emails/mo)</td><td>Professional $449/mo</td><td>Email volume</td></tr>
```

#### B8. Add Freshsales, EngageBay and Salesforce rows after Zoho

**Why:** Tool coverage gap: Salesforce appears in 4/5 competitor articles, Freshsales/Freshworks in 3/5, EngageBay in 3/5 (and is recommended twice in the #2 Reddit thread). Our table has none of the three.

**Current HTML** (occurrences in live raw: 1):

```html
<tr><td><strong>Zoho CRM</strong></td><td>Yes, 3 users</td><td>Standard <strong>&euro;14</strong>/user/mo*</td><td>Ultimate &euro;52/user/mo*</td><td>Per user</td></tr>
```

**Replacement HTML:**

```html
<tr><td><strong>Zoho CRM</strong></td><td>Yes, 3 users</td><td>Standard <strong>&euro;14</strong>/user/mo*</td><td>Ultimate &euro;52/user/mo*</td><td>Per user</td></tr>
    <tr><td><strong>Freshsales</strong></td><td>Trial only (21 days)</td><td>Growth <strong>$9</strong>/user/mo</td><td>Enterprise $59/user/mo</td><td>Per user</td></tr>
    <tr><td><strong>EngageBay</strong></td><td>Yes, 15 users, 250 contacts</td><td>Basic <strong>$13.79</strong>/user/mo</td><td>Pro $110.39/user/mo</td><td>Per user + contacts</td></tr>
    <tr><td><strong>Salesforce</strong></td><td>Free Suite listed at $0</td><td>Starter Suite <strong>$25</strong>/user/mo</td><td>Pro Suite $100/user/mo</td><td>Per user</td></tr>
```

#### B9. Close/Brevo prices in the 'which one fits' bullets

**Why:** Carries the Close correction into the bullets and places Freshsales where a reader choosing by job will look.

**Current HTML** (occurrences in live raw: 1):

```html
<li><strong>Sales pipeline is the job.</strong> Close ($9/user) and Pipedrive ($14/seat) are built around deals and activity rather than campaigns.
```

**Replacement HTML:**

```html
<li><strong>Sales pipeline is the job.</strong> Close ($9/mo solo, $35/user for teams), Pipedrive ($14/seat) and Freshsales ($9/user) are built around deals and activity rather than campaigns.
```

#### B10. Brevo free-plan claim in the bullets

**Why:** Same Brevo correction as B7.

**Current HTML** (occurrences in live raw: 1):

```html
Brevo starts at $8/mo with a free tier of 5,000 emails a month, and ActiveCampaign from $15/mo.
```

**Replacement HTML:**

```html
Brevo starts at $8.08/mo, with a free plan capped at 300 emails a day, and ActiveCampaign from $15/mo.
```

#### B11. New H2 section with one H3 per alternative, inserted before 'What switching actually costs you'

**Why:** Biggest content gap: 5 of 5 competitor articles give each alternative its own H3 section (Reevo adds 'The tradeoff', Creatio 'limitations', Zapier pros/cons). Ours covers tools only as table rows and one-line bullets. The page's angle is 'what it really costs', so the per-tool section is written as 'the catch', using only facts read from each vendor's pricing page today.

**Current HTML** (occurrences in live raw: 1):

```html
<h2>What switching actually costs you</h2>
```

**Replacement HTML:**

```html
<h2>The catch with each HubSpot alternative</h2>

<p>Every cheaper CRM makes its savings back somewhere. Here is where, using each vendor's own pricing page as checked on 12 November 2026. None of these is a dealbreaker on its own. They are the lines to price in before you compare a headline number with HubSpot's $800.</p>

<h3>Close</h3>

<p><strong>Pick it if</strong> a founder or a small outbound team lives on the phone and in email. <strong>The catch:</strong> the $9 Solo plan is for exactly one user. Once a second person needs a login you're on Essentials at $35 per user a month (annual), so a three-person team pays about $1,260 a year, not $324.</p>

<h3>Pipedrive</h3>

<p><strong>Pick it if</strong> your week is deals moving across a board. <strong>The catch:</strong> there is no free plan, only a 14-day trial, and the $14 Lite seat is the floor. Pipedrive pitches automated emails and follow-ups at the Growth tier, which is $39 per seat.</p>

<h3>ActiveCampaign</h3>

<p><strong>Pick it if</strong> email automation is the real job and the CRM is secondary. <strong>The catch:</strong> every listed price assumes 1,000 contacts. Starter is $15 a month and Pro $79 a month on annual billing at that size, and the price moves with the contact count you select. That is the same pressure that pushes teams off HubSpot.</p>

<h3>Attio</h3>

<p><strong>Pick it if</strong> you think in records and relationships and want a CRM you can reshape. <strong>The catch:</strong> paid Attio charges a workspace fee before the per-user price. Plus is $40 a month with one user included, then $35 for each extra user (annual), so three people cost $110 a month. Plus also caps sending at 1,000 emails a month.</p>

<h3>Brevo</h3>

<p><strong>Pick it if</strong> your HubSpot bill is really an email-list bill. <strong>The catch:</strong> the free plan sends up to 300 emails a day, and paid plans are priced by email volume, starting at $8.08 a month for 5,000 emails. Deal tracking is not the core product: Brevo lists Sales Essentials as a $27.92-a-month add-on to Starter.</p>

<h3>Zoho CRM</h3>

<p><strong>Pick it if</strong> you want leads, deals, workflows and reports from one vendor without paying yet. <strong>The catch:</strong> the free edition stops at 3 users, and Zoho shows regional pricing, so the &euro;14 Standard and &euro;52 Ultimate figures we saw may not match what your country is quoted.</p>

<h3>Freshsales</h3>

<p><strong>Pick it if</strong> you want a team sales CRM at the lowest per-user price on this list: Growth is $9 per user a month, billed annually. <strong>The catch:</strong> Freshworks' pricing cards show no free plan, only a 21-day trial, and the Freddy AI Agent costs extra at $49 per 100 sessions.</p>

<h3>EngageBay</h3>

<p><strong>Pick it if</strong> you want HubSpot's all-in-one shape (email, CRM, help desk, live chat) at small-business prices. <strong>The catch:</strong> the free plan covers up to 15 users but only 250 contacts, and Basic at $13.79 per user a month (yearly) lifts that to 500. Contacts, not seats, push you up the ladder, which is the HubSpot mechanic again at a lower price.</p>

<h3>Salesforce</h3>

<p><strong>Pick it if</strong> you expect to need heavy customisation within a couple of years and would rather migrate once. <strong>The catch:</strong> Starter Suite at $25 per user a month is the entry, not the destination. Pro Suite is $100 per user billed annually, and the full Sales Cloud editions run from $195 to $550 per user a month.</p>

<h2>What switching actually costs you</h2>
```

#### B12. FAQ: best alternative answer

**Why:** Carries the Close/Brevo corrections into the FAQ and adds the two new tools.

**Current HTML** (occurrences in live raw: 1):

```html
Choose by job and budget: Close ($9/user/mo) or Pipedrive ($14/seat/mo) for sales pipeline, Brevo (from $8/mo) or ActiveCampaign (from $15/mo) for email-led marketing, Zoho (free for 3 users) for low-cost all-in-one, Attio (free for 3 seats) for a modern data-shaped CRM.</p>
```

**Replacement HTML:**

```html
Choose by job and budget: Pipedrive ($14/seat/mo), Freshsales ($9/user/mo) or Close ($35/user/mo for teams, $9 solo) for sales pipeline, Brevo (from $8.08/mo) or ActiveCampaign (from $15/mo) for email-led marketing, Zoho (free for 3 users) or EngageBay (free for 15 users, 250 contacts) for low-cost all-in-one, Attio (free for up to 3 users) for a modern data-shaped CRM.</p>
```

#### B13. FAQ: free alternative answer (Brevo correction)

**Why:** Removes the unsupported 5,000 emails/month free-tier claim; adds EngageBay's free plan, which matches 'free hubspot alternative' searches (best free hubspot alternatives 100/mo).

**Current HTML** (occurrences in live raw: 1):

```html
Zoho CRM is free forever for 3 users, Attio's free plan covers up to 3 seats, and Brevo's free tier includes 5,000 emails a month.
```

**Replacement HTML:**

```html
Zoho CRM is free forever for 3 users, Attio's free plan covers up to 3 users, EngageBay's free plan covers 15 users but only 250 contacts, and Brevo's free plan sends up to 300 emails a day.
```

#### B14. FAQ: add two People Also Ask questions after the last FAQ

**Why:** Google's People Also Ask box on this SERP shows 'Who is HubSpot's competition?' and 'Why are people leaving HubSpot?'. Neither is answered on the page. The competitors answer uses our own count from today's scrapes (original data no ranking page has) and targets the 4,000/mo parent topic.

**Current HTML** (occurrences in live raw: 1):

```html
<p><strong>Should I switch CRMs to save money?</strong><br>Only if the saving clearly exceeds the migration cost. Rebuilding automations, migrating data, and retraining the team are real expenses. Saving a few hundred dollars a year rarely justifies it; avoiding a $12,600 first year on Professional usually does.</p>
```

**Replacement HTML:**

```html
<p><strong>Should I switch CRMs to save money?</strong><br>Only if the saving clearly exceeds the migration cost. Rebuilding automations, migrating data, and retraining the team are real expenses. Saving a few hundred dollars a year rarely justifies it; avoiding a $12,600 first year on Professional usually does.</p>

<p><strong>Who are HubSpot's main competitors?</strong><br>It depends which part of HubSpot you are replacing. For sales CRM: Salesforce, Zoho CRM, Pipedrive, Freshsales and Close. For email and marketing automation: ActiveCampaign, Brevo and Mailchimp. For customer service: Zendesk. Across the five list articles on Google's first page for "HubSpot alternatives" in November 2026, Pipedrive and Zoho CRM appear in all five, and Salesforce and ActiveCampaign in four.</p>

<p><strong>Why are people leaving HubSpot?</strong><br>Price, mostly, and it is the reason the Reddit thread on page one opens with. Starter is cheap, but the next rung, Professional, starts at $800 a month plus a required one-time $3,000 onboarding fee, and paid plans meter marketing contacts on top. Teams that only need a sales pipeline also find they are paying for a marketing platform they rarely open.</p>
```

---

## 4. Price and figure ledger (every new or changed number, plus re-checks of existing ones)

Fetched **2026-11-12**. "Browser" means the built-in browser rendered the vendor's own page and the figure was read from the page text. "WebFetch" means the vendor's page via WebFetch only.

### Prices that changed since the August 2026 publish (or were wrong)

| Vendor | On page now | Live 2026-11-12 | Source | Method |
|---|---|---|---|---|
| **Attio** | Plus $35/user/mo, Pro $79/user/mo (annual) | **Plus $40/mo per workspace incl. 1 user + $35 per extra user; Pro $100/mo incl. 1 user + $79 per extra user** (annual; monthly $50/$44 and $125/$99). New Ultra tier $1,000/mo incl. 5 users. Free: up to 3 users. Plus: 1,000 emails/mo. | https://attio.com/pricing | Browser + WebFetch agree |
| **Brevo** | Free tier "5,000 emails/mo"; "$8/mo" | **Free: "up to 300 emails per day"** (Brevo pricing FAQ). Starter **$8.08/mo** yearly ($9 monthly) for 5,000 emails/mo. Professional $449/mo yearly ($499 monthly). Sales Essentials add-on $27.92/mo. | https://www.brevo.com/pricing/ | Browser (WebFetch blocked) |
| **Close** | "Solo $9/user/mo" | Solo **$9/mo annual, "1 user only"** ($19 monthly). Essentials $35/user annual ($49 monthly). Growth $99 ($109). | https://www.close.com/pricing | Browser |
| **HubSpot Starter** | "From $20/mo per seat" | $20/mo/seat still shown, **plus a limited-time new-customer offer from $7/mo/seat** ("Save up to 65% on Starter... New customers only") | https://www.hubspot.com/pricing/marketing | Browser |

Whether Attio and Brevo actually changed after August, or were mis-read then, I can't tell: the August memory notes a garbled Attio scrape. Either way, the live page does not support the current copy.

### Existing prices re-verified unchanged

| Vendor | Figure on page | Live 2026-11-12 | Source | Method |
|---|---|---|---|---|
| HubSpot Free | $0, 2 users | "Free for up to 2 users" | https://www.hubspot.com/pricing/marketing | Browser |
| HubSpot Professional | $800/mo, 3 seats, 2,000 contacts, $3,000 required onboarding | $800/mo (and $890/mo, the other billing option), 3 Core Seats, 2,000 contacts, "required, one-time Professional Onboarding for a fee of $3,000" | same | Browser |
| HubSpot Enterprise | $3,600/mo, 5 seats, 10,000 contacts, $7,000 onboarding | same | same | Browser |
| HubSpot extra seats | from $45/mo (Pro) | "Additional Core Seats start at $45/mo" (Pro), $75/mo (Enterprise) | same | Browser |
| Pipedrive | Lite $14, Ultimate $79 per seat (annual) | Lite $14 ($168/seat/yr), Growth $39, Premium $59, Ultimate $79; 14-day trial, no free plan | https://www.pipedrive.com/en/pricing | Browser (WebFetch 403) |
| ActiveCampaign | Starter $15, Enterprise $145 per month | Starter $15, Plus $49, Pro $79, Enterprise $145 /mo, "Billed yearly for 1,000 contacts"; contact-count selector | https://www.activecampaign.com/pricing | Browser (WebFetch saw placeholders) |
| Zoho CRM | Free 3 users; Standard €14, Ultimate €52 | "Free forever for 3 users"; €14 / €23 / €40 / €52 per user/mo (EUR shown to our geo) | https://www.zoho.com/crm/zohocrm-pricing.html | Browser (WebFetch saw no numbers) |
| Close Scale | $139/user/mo | "$149 per user / month $139 per user / month" (lower figure = annual, by the page's pattern) | https://www.close.com/pricing | WebFetch only (browser text cut off before Scale) |
| Year-one maths | 3 seats Pipedrive Lite = $504/yr; HubSpot Pro year one = $12,600 | 3 × $168 = $504; 12 × $800 + $3,000 = $12,600 | derived | |

### New figures introduced by this proposal

| Figure | Value | Source | Method |
|---|---|---|---|
| Freshsales Growth / Pro / Enterprise | $9 / $39 / $59 per user/mo, billed annually; 21-day trial; no free plan on the cards; Freddy AI Agent $49/100 sessions | https://www.freshworks.com/crm/pricing/ | Browser + WebFetch agree |
| EngageBay All-in-One | Free: 15 users, 250 contacts. Basic $13.79, Growth $59.79, Pro $110.39 per user/mo (yearly); Basic 500 contacts | https://www.engagebay.com/pricing (redirects to /pricing/all-in-one) | Browser (toggled Yearly) + WebFetch agree |
| Salesforce | Starter Suite $25/user/mo "(Billed monthly or annually)"; Pro Suite $100 "(Billed annually)"; Core $195, Advanced $395, Max $550; Free Suite $0 listed | https://www.salesforce.com/sales/pricing/ | Browser + WebFetch agree |
| Close team of 3 | Essentials 3 × $35 × 12 = $1,260/yr (vs 3 × $9 × 12 = $324) | derived from Close page | |
| Attio team of 3 | Plus $40 + 2 × $35 = $110/mo | derived from Attio page | |
| Competitor coverage counts (FAQ B14) | Pipedrive and Zoho 5/5; Salesforce and ActiveCampaign 4/5 | our cf-scraper scrapes of the 5 list articles, 2026-11-12 | |
| Page-one composition (B1) | Reevo, Zendesk, Creatio, Salesforce rank themselves first; Zapier neutral; Reddit #2 with 2 disclosed-vendor answers (Knowivate, Method CRM) | Ahrefs SERP overview + scrapes, 2026-11-12 | |

### Unverified or lower-confidence items
- **Page one of live Google** was not checked directly; B1 relies on Ahrefs' latest SERP snapshot. Spot-check the SERP before publishing B1.
- **Close Scale $139** was read through WebFetch only (the price pair is unlabelled).
- **Zoho in USD** was not verified; only EUR rendered for our geo. Zapier quotes $14 USD for Standard, but that is not the vendor's page, so it isn't used.
- **Salesforce Free Suite limits** were not read. B8 says only "Free Suite listed at $0".

---

## 5. Hypothesis and baseline for the Stage 5 log entry

**Hypothesis (cycle 1):** the page sits on pages 4-6 for "hubspot alternatives" (38.7) and its variants because:
(a) it lacks the per-tool section structure that 5/5 top articles share, and covers 6 tools where they cover 7-15, missing Salesforce (4/5), Freshsales (3/5) and EngageBay (3/5);
(b) it is about 55% shorter than the top-5 average (1,645 vs ~3,700 words);
(c) the title carries no number or year (5/5 and 4/5 of competitors do), and "competitors" (the 4,000/mo parent topic) is in no heading;
(d) two price rows are stale (Attio, Brevo), and the opening SERP claim is out of date, both weak quality signals on a "prices" page.
Adding nine tool H3s framed as "the catch", three tools, two PAA FAQs and a "competitors" H2, and correcting the prices, should move the head term into positions 15-25 within 4-8 weeks and lift "hubspot competitors" from 56.6 into the 30s. Clicks are likely to stay near zero until page 2 because of the AI Overview and Reddit.

**Baseline to record (window 2026-10-13 to 2026-11-11, GSC via Ahrefs project 4736210):**
- Page: 967 impressions, 0 clicks, avg position ~47 (from your brief). Latest full week (from 2026-11-02): 62 impressions, position 58.7. Peak week (from 2026-10-12): 423 impressions.
- hubspot alternatives 290 impr / pos 38.7 · alternative to hubspot 191 / 56.2 · alternatives to hubspot 94 / 54.7 · hubspot alternative 91 / 46.8 · hubspot competitors 85 / 56.6 · best hubspot alternatives 11 / 25.4 · hubspot vs dreamteam 11 / 23.9.
- Ahrefs organic keywords for the URL: none.
- Top 10 (Ahrefs, 2026-11-12): AI Overview; reddit.com r/CRMSoftware (2); reevo.ai (3); salesforce.com (4); PAA (5); zendesk.com (6); zapier.com (7); creatio.com (8); YouTube (9).
- Content before: 1,645 words, 8 content H2s, 0 H3s, 6 FAQs, 7 internal links out, 7 in. After (if all approved): ~2,527 words, 9 H2s, 9 H3s, 8 FAQs, links unchanged.
- External CMS page: there is no repo file to hash. Record the WP `modified` timestamp before (2026-10-29T15:41:34) and after the update in place of a git blob, plus `git rev-parse HEAD` at log time.
- Review window: 4-8 weeks after apply. Re-verify prices around May 2027 (memory rule: ~6 months).
- Confounds to note: the three-week decline before this cycle (cause unknown), and the Oct 29 PMF link.

**Suggested log `last_verdict`:** `first-run`.
