# /startup/amplitude-pricing — Cycle 2 review proposal (2026-11-12)

**Status:** proposal only (Stage 3). Nothing has been written to WordPress, `seo-notes/index.json` or the URL log.
**Target keyword:** amplitude pricing (log `target_keyword`, unchanged)
**Post:** WP id 1858, raw content last modified 2026-10-02T10:14:29 (unchanged since cycle 1)
**Days since cycle 1:** 41

---

## 1. Review verdict

### Fresh metrics vs cycle-1 baseline

GSC via Ahrefs (project 4736210), web, all countries. The baseline window (Jul 3 to Sep 30) includes the Sept 12 to 26 core-update trough, so I also give a weekly comparison.

| Metric | Cycle 1 baseline | Now | Change |
|---|---|---|---|
| Page impressions | 3,166 in 90 days (Jul 3 to Sep 30), ~35/day | 1,152 in 29 days (Oct 13 to Nov 10), ~40/day | slightly up |
| Page clicks | 2 | 0 | flat (near zero) |
| Page avg position | 22.9 | 22.3 | flat |
| Weekly impressions | ~307/week pre-update (Jul 13 to Sep 7); ~100/week in the trough (Sep 14 to 27) | ~294/week (Oct 12 to Nov 8) | back to pre-update level |
| "amplitude pricing" | pos 31.3, 332 impr / 90 days | pos 29.5, 73 impr / 29 days (Oct 13 to Nov 10) | +1.8 positions, impressions per day down (3.7 to 2.5) |
| "amplitude pricing" by month | Jul 34.8 · Aug 30.5 · Sep 26.5 | Oct 29.0 (76 impr) · Nov 1 to 10: 31.5 (26 impr) | flat to slightly worse |
| "amplitude cost" | pos 23.5 (60 impr / 90 days) | pos 15.5 (17 impr / 29 days); monthly Oct 15.8, Nov 13.9 | **+8 positions** |
| "amplitude free plan" | 18.1 | 16.5 (4 impr) | small gain |
| "amplitude price" | not in baseline | 8.3 (4 impr) | new |
| "how much does amplitude cost" | not in baseline | 1.0 (2 + 1 impr) | new, tiny volume |
| "amplitude session replay pricing" | 33.7 | 57.0 (2 impr) | worse, tiny volume |
| "amplitude discount" | 27.2 | 22.0 (2 impr) | small gain |
| "amplitude enterprise prix" | 22.6 (2,495 impr) | 22.4 (1,010 impr) | flat; still ~88% of page impressions |
| Ahrefs organic keywords for the URL (US, 2026-11-11) | 0 | 0 | flat |
| AI Overview citation | not cited (usercall cited) | not cited (cites amplitude.com x5, mitzu.io, vendr.com) | not earned |

Note on "amplitude enterprise prix": Ahrefs puts it at 10 searches/month in the US, yet it produces ~1,000 impressions a month for us at position 22. That pattern looks like rank-tracking or AI-prompt traffic, not people. It props up the page-level impression total, so the page-level "recovery" says little about real demand. Excluding it, the page had ~7.5 impressions/day in the baseline and ~4.9/day now.

### SERP composition change (Ahrefs SERP for "amplitude pricing", US, updated 2026-11-08)

Complete churn in the top 10 since Oct 1. Every review/UGC page from the cycle-1 SERP is gone (reddit, softwareadvice, g2, copy.ai, contentmation, theenterpriseworld, artisangrowthstrategies, peerspot). The new SERP:

| Pos | URL | DR | RDs |
|---|---|---|---|
| 1 | amplitude.com/pricing (+ sitelink to /pricing/platform-consolidation) | 88 | 776 |
| 2 | AI Overview, cites amplitude.com/pricing, /plus, /docs/faq/billing-and-plans, /startups, mitzu.io/post/amplitude-pricing, vendr.com/marketplace/amplitude | | |
| 3 | amplitude.com/plus | 88 | 33 |
| 4 | PAA: Can I use Amplitude for free? / Is Amplitude a subscription? / Which companies use Amplitude? / What is Amplitude? | | |
| 5 | amplitude.com/docs/faq/billing-and-plans | 88 | 26 |
| 6 | userpilot.com/blog/amplitude-pricing | 79 | 20 |
| 7 | vendr.com/marketplace/amplitude | 78 | 21 |
| 8 | mitzu.io/post/amplitude-pricing | 46 | 1 |
| 9 | usercall.co/post/amplitude-pricing | 48 | 3 |
| 10 | uxcam.com/blog/amplitude-pricing | 77 | 1 |

Google replaced review sites with dedicated pricing explainers, our format. mitzu (DR 46, 1 referring domain) and usercall (DR 48, 3 RDs) rank top 10 with far less authority than startupyeti.com (DR 62), so authority is not the binding constraint.

### Drift attribution

Clean. The WordPress post has not been modified since the cycle-1 write (2026-10-02T10:14:29). Site code between f57223a and origin/main changed only the calculator page (641ceef, 2dddf6d); no post template or layout change reached production. The only confound is Google: the core update had just finished when cycle 1 shipped, so part of the October impression rebound is update recovery, not our edits.

### Verdict narrative

The cycle-1 hypothesis was that fixing the title, correcting stale details and adding enterprise-contract, add-on and FAQ content would move "amplitude pricing" from 31 to 8 to 10 within 2 to 8 weeks, earn the AI Overview citation and add 10 to 15 Ahrefs-tracked keywords. Six weeks in, none of the three happened: the head term sits at 29 to 31, the AI Overview cites mitzu and Vendr instead, and Ahrefs still tracks zero keywords for the URL. The one real gain is the long tail: "amplitude cost" moved from 23.5 to 13.9 and a few question queries ("how much does amplitude cost", "amplitude price") now land in the top 10 on tiny volume. Depth was not the gap: the page was already the longest on the SERP (3,535 words vs a 2,294 average across the four raw-scraped competitors). What mitzu and usercall have that we lack is a dated summary table at the top, a full calculator table, and visible "updated" dates, which is what an AI Overview lifts. Confidence in "disproven" is medium: 41 days is inside the 2-to-8-week window and the core update muddies October, but the head-term trend is flat-to-down, not lagging-up.

This review also found five factual errors on the live page that matter more than rankings (section 2, "Accuracy"), including a scholarship rule Amplitude's own docs contradict and a graphic with eligibility criteria Amplitude doesn't use.

**Recommendation: `loss-pivot`.** Stop adding depth. Apply the accuracy fixes regardless of rankings, then pivot the page toward extractable, dated facts: an at-a-glance table, the full 17-tier calculator with a per-million rule, and the overage/limits rules from the Plus terms. Re-review in 4 to 6 weeks.

---

## 2. Gap analysis

### Evidence quality

- **Target page:** live raw content via WP REST (context=edit) plus rendered HTML of https://www.startupyeti.com/startup/amplitude-pricing (1 H1, 13 H2 including template headings, 3,535 words, schema types Article/WebPage/BreadcrumbList/Person/Organization/ImageObject; **no FAQPage JSON-LD** despite 11 FAQs).
- **Competitors:** 4 of 5 raw scrapes via cf-scraper (userpilot, mitzu, usercall, uxcam). Vendr blocked cf-scraper (CloudFront 403); read via WebFetch (prompted) and then confirmed raw with a Playwright page read. uxcam's content is stale (still "$49 Plus", "Starter"), so it counts for structure but not for facts.
- **Official sources** read raw on 2026-11-12: amplitude.com/pricing, the Plus calculator (real slider keys, all 17 tiers, both billing modes), amplitude.com/docs/faq/billing-and-plans, amplitude.com/startups. amplitude.com/plus-plan-terms, pricelevel.com and amplitude.com/about were prompted reads (lower confidence, quotes requested verbatim).

### Quick score: your page vs top 5 third-party results

| Factor | Your page | Top 5 | Verdict |
|---|---|---|---|
| Rendered title | "Amplitude Pricing in 2026: Free to Enterprise \| Startup Yeti" (60) | 4 of 5 use "Amplitude Pricing (in) 2026: ..." | On par, no change |
| Meta (WP excerpt) | 153 chars, no freshness date | mitzu/usercall carry dates in-page, not in meta | Small fix |
| Word count | 3,535 | userpilot 2,579 · mitzu 2,900 · usercall 2,241 · uxcam 1,455 (avg 2,294; Vendr not counted) | Ahead |
| Summary table/TL;DR at top | None (prose intro) | 4 of 5 | **Missing** |
| Plus calculator dollar figures | 5 annual points, no monthly column, "small volume discount" claim | 3 of 5 (mitzu 9-row table, monthly and annual) | Behind and partly wrong |
| Limits/overage consequences | "No overage penalties" x3, no caveat | 4 of 5 cover hidden costs or limits; 2 cite official terms | **Partial** |
| Data history by plan | Plus only | 3 of 5 | Partial |
| Growth/Enterprise contract data | Vendr + PriceLevel line items | 2 of 5 | Ahead (needs refresh) |
| Scholarship | Covered | 2 of 5 | Ahead (stale and partly wrong) |
| Comparison with alternatives | Mixpanel + PostHog table | 4 of 5 | On par (July figures, unverified this cycle) |
| FAQ | 11 | mitzu 6, Vendr has FAQ, others none | Ahead |
| Visible "updated" date | Only "April 29, 2026" (published) | mitzu "Updated November 5, 2026", usercall "Updated Oct 2026" | **Missing** (template-level, see notes) |
| Internal links out | 5 (one with trailing slash) | n/a | Fine; add 1 |
| Internal links in | 4 (usage-based-pricing, salesforce-cost, plg-saas, the-cost-of-pitchbook) | n/a | Fine |

### Subtopic coverage (5 competitors: userpilot, Vendr, mitzu, usercall, uxcam)

| Subtopic | Competitors covering | Your page |
|---|---|---|
| Plan-by-plan breakdown | 5/5 | Covered |
| What is Amplitude | 4/5 (userpilot, mitzu, uxcam, Vendr) | Covered |
| Summary table or TL;DR up top | 4/5 (userpilot, mitzu, usercall, uxcam) | **Missing** → B2 |
| Hidden costs, overages, limits | 4/5 (userpilot, mitzu, usercall, Vendr) | Partial (add-ons only) → B3, B6, B9 |
| Comparison with alternatives | 4/5 (userpilot, mitzu, uxcam, Vendr) | Covered |
| Is it worth it / who should buy | 4/5 (userpilot, mitzu, usercall, uxcam) | Partial ("Where each one wins"); no change proposed |
| Plus calculator figures by volume | 3/5 (mitzu, userpilot, Vendr) | Partial → B4, B5 |
| Data history by plan | 3/5 (mitzu, userpilot, Vendr) | Partial → B12 |
| Pros/cons or user reviews | 3/5 (mitzu, uxcam, userpilot) | One SoftwareAdvice stat in FAQ; deferred (needs fresh review data) |
| Growth/Enterprise contract data | 2/5 (userpilot, Vendr) | Covered, stale → B7, B8, B10, B11, B13, B19 |
| Negotiation | 2/5 (userpilot, Vendr) | Covered |
| Startup Scholarship | 2/5 (userpilot, mitzu) | Covered, partly wrong → B14 to B18 |

Your page covers 9 of 12 subtopics fully or partly; the two clear gaps (summary table, limits) are both 4/5 subtopics.

**Content-quality read:** mitzu is the page to beat. It has a dated TL;DR table, a 9-row calculator table with monthly and annual columns ("checked 7 October 2026"), the per-event math, and the docs-sourced Free-plan block rule. Google's AI Overview cites it. userpilot is the only one with the Plus terms' 200% clause and an add-on cost table. No competitor has the November calculator re-read, PriceLevel line items, the "about $70 per million events" rule, or Amplitude's new year-two scholarship terms (40% off annual Plus).

### Accuracy findings (fix now, high confidence)

1. **Scholarship bullet is wrong.** Live: "You can't retroactively convert a paid plan into the scholarship." Amplitude's billing docs say monthly Plus customers cancel and apply, and annual Plus or Growth customers email scholarship@amplitude.com and get the contract cancelled and remaining months refunded. → B15
2. **Scholarship graphic (media 1884) is wrong.** It prints "$40K–$65K", a "< $50M ARR" revenue cap and "New customer, not currently paying". Amplitude's criteria are under $10M raised and under 20 employees; it values the year at $60,000; paying customers can switch. → B18 (remove)
3. **Venture-portfolio claim is unsupported.** "YC, AWS, or Sequoia with under $25M ... up to 50% off Growth": neither amplitude.com/startups nor the billing docs mention Sequoia, $25M or 50%. Docs list YC and AWS Activate tracks with no percentage. → B17
4. **Vendr caution is now false.** Vendr refreshed its page in October 2026 and no longer shows $49 Plus or a Starter tier for Amplitude. → B11
5. **"Small volume discount" on Plus is wrong.** The calculator is flat at about $70 per extra million events from 10M to 70M. → B5

Also stale: Vendr counts and high (421 / $382,219 / 15.7% / "February 2026" → 422 / $379,933 / 16% / October 2026), "competitive discounts for life" (now "Year 2, 40% off annual Plus plan"), "re-checked October 2026".

### Secondary keywords

Family (Ahrefs US, 2026-11-12): amplitude pricing 700 (KD 10, CPC $0.25), amplitude cost 150 (KD 15, $7.00), amplitude pricing 2026 150, amplitude analytics pricing 150, amplitude session replay pricing 150, amplitude price 80 (KD 12, $6.00), amplitude plans 50, amplitude pricing plans 50, posthog vs amplitude pricing 40, amplitude free plan 30, amplitude experiment pricing 30, amplitude pricing model 30, amplitude enterprise pricing 20, how much does amplitude cost 20. The page uses "free plan" (10x), "amplitude cost" (3x), "pricing plans" (1x), "pricing model" (1x). It uses "pricing calculator" 0x (B5 adds it) and "analytics pricing" 0x. I am not proposing an exact-match insert for "analytics pricing"; it would read forced.

### Internal links

- **Out (main content):** /startup/carta-pricing, /marketing/saas-pricing-models, /startup/the-cost-of-pitchbook/ (trailing slash, B21), /startup/carta-pricing (again), /startup/salesforce-cost.
- **In:** /marketing/usage-based-pricing, /startup/salesforce-cost, /startup/plg-saas, /startup/the-cost-of-pitchbook.
- **Candidates checked:** /marketing/usage-based-pricing (200, Nov 10 post, Plus is a textbook usage-based model), /startup/plg-saas (200), /calculator (not relevant: it outputs only LTV, LTV:CAC, net MRR growth and CAC payback).
- **Decision:** add one link to /marketing/usage-based-pricing inside the new $70 rule paragraph (B5). Fix the trailing slash. No edits to incoming-link source pages.

### Voice match note

Observed moves in the page's strongest sections ("What Founders Actually Pay on Plus", "Enterprise and Growth Pricing", add-on section): (1) the bold lead-in label followed by a hard number ("**Vendr (updated ..., 421 purchases):** the median ..."); (2) "Practical read:" closers that turn data into one instruction; (3) contrast-and-claim honesty ("Against PostHog, the raw analytics line item is cheaper at PostHog, but ..."); (4) dated parentheticals ("re-checked October 2026"); (5) short lists of three, each item a bolded claim plus one sentence. The new sections mirror these: B6 uses bold-label bullets and a "Practical read:" close; B5 uses a bolded rule of thumb with worked arithmetic; B2 is a dated table with a one-line source sentence. No em or en dashes in any proposed copy.

### Business risk check

| Edit | Ranking/search upside | Conversion/trust risk | Mitigation |
|---|---|---|---|
| B2 at-a-glance table | Matches 4/5 SERP pattern, gives the AI Overview a dated extractable block | Pushes "What Amplitude Is" lower | Table is 5 rows; intro stays first |
| B5 calculator table | Fixes a wrong claim, adds unique per-million rule, adds "pricing calculator" phrase | More numbers to keep fresh | Dated in-line; re-verify each cycle |
| B6 limits section | Covers a 4/5 subtopic with primary-source terms | Slightly less rosy than "no overage penalties" | Framed honestly: still no markup, one ceiling |
| B15 to B18 scholarship fixes | Freshness scoop (40% year two, $60,000 value) | Removing an image | Corrected graphic optional later |
| B10/B19 Vendr refresh | Keeps figures matching the AI-cited Vendr page | Enterprise range now rests on one Vendr table | Wording says so explicitly |

### Revenue impact (honest version)

"amplitude pricing" is 700 searches/month at a $0.25 CPC. Moving from ~30 to position 8 would add roughly 700 x 1.9% ≈ 13 visits a month, about $3/month in ad-equivalent value. "amplitude cost" (150/month, $7 CPC) moving from 14 to the top 5 adds ~7 visits, about $50/month. Both SERPs carry an AI Overview, so click benchmarks overstate it. The realistic prize, as with the PitchBook page, is being the cited source in the AI Overview and holding the long tail, not traffic value.

### SERP preview

```
BEFORE:
Amplitude Pricing in 2026: Free to Enterprise | Startup Yeti
https://www.startupyeti.com/startup/amplitude-pricing
Amplitude pricing in 2026: a free plan with 2M events, Plus from $0 to 70M events ($75 to $4,692 a month), and what Growth and Enterprise contracts cost.

AFTER:
Amplitude Pricing in 2026: Free to Enterprise | Startup Yeti
https://www.startupyeti.com/startup/amplitude-pricing
Amplitude pricing, checked Nov 2026: Free covers 2M events, Plus costs $75 to $4,692 a month up to 70M events, and Vendr's median contract is $64,000.
```

### Notes outside this page's content (mention only, not proposed here)

- **No visible "updated" date.** The post template shows only the published date (April 29, 2026), though `dateModified` is in the JSON-LD. mitzu and usercall show "Updated" dates. This is a template change that would affect the whole pricing series. Worth its own task.
- **No FAQPage JSON-LD** is emitted for the Rank Math FAQ block (11 questions render as HTML only). Also site-wide.
- **Mixpanel/PostHog comparison table** (July 2026 figures) was not re-verified this cycle. mitzu states Mixpanel Growth tops out at 20M events, which would affect the 20M column. Verify before the next cycle.

---

## 3. Proposed changes (exact, appliable)

All "current" fragments below were checked against the live WP raw content (`GET /wp-json/wp/v2/posts?slug=amplitude-pricing&context=edit`, fetched 2026-11-12, modified 2026-10-02T10:14:29) and each occurs **exactly once**. Apply them in order (B6 inserts before the Company Size H2; B9's "section above" depends on it). FAQ edits come in pairs: Rank Math stores each answer twice, in the block's JSON attribute and in the rendered HTML; change both.

Net effect: 3,535 → ~4,305 words (raw-content count), 10 → 12 content H2s, en dashes 14 → 12 (→ 0 with optional N1 to N10), em dashes 0.

### Title

No change. Rendered "Amplitude Pricing in 2026: Free to Enterprise | Startup Yeti" is 60 characters and matches the SERP pattern. Cycle 1 already fixed truncation, and nothing in the evidence points at the title.

### M1. WP excerpt (= meta description)

- Current (153 chars): `Amplitude pricing in 2026: a free plan with 2M events, Plus from $0 to 70M events ($75 to $4,692 a month), and what Growth and Enterprise contracts cost.`
- Proposed (150 chars): `Amplitude pricing, checked Nov 2026: Free covers 2M events, Plus costs $75 to $4,692 a month up to 70M events, and Vendr's median contract is $64,000.`
- Why: keyword in the first two words, a check date for freshness, and one hard number for the quote-only tiers instead of "what contracts cost". Under the 160-char route cut.

### B1. Intro: date the calculator re-check

**Why:** Freshness signal in the first 150 words; mitzu and usercall both print a verification date up top.

**Current HTML** (occurs exactly once in live raw content):

```html
what Plus costs at startup scale based on Amplitude's own calculator (re-checked October 2026),
```

**Replacement HTML:**

```html
what Plus costs at startup scale based on Amplitude's own calculator (every tier re-read November 12, 2026),
```

### B2. New H2 + summary table: Amplitude Pricing at a Glance

**Why:** 4 of 5 ranking competitors open with a summary table or TL;DR; mitzu's dated table is one of two third-party pages cited in the AI Overview. Our page has the data but buries it in prose.

**Current HTML** (occurs exactly once in live raw content):

```html
Startup Yeti does not earn affiliate commissions on Amplitude or any of the alternatives mentioned, and has no business relationship with the vendors discussed.</em></p>
<!-- /wp:paragraph -->
```

**Replacement HTML:**

```html
Startup Yeti does not earn affiliate commissions on Amplitude or any of the alternatives mentioned, and has no business relationship with the vendors discussed.</em></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Amplitude Pricing at a Glance (November 2026)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Every price below was read from Amplitude's pricing page and Plus calculator on November 12, 2026; the Growth and Enterprise ranges come from Vendr's October 2026 procurement data, because Amplitude publishes none.</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Plan</th><th>Price</th><th>Event volume</th><th>What moves you to the next tier</th></tr></thead><tbody><tr><td><strong>Free</strong></td><td>$0, no credit card, no time limit</td><td>Up to 2M events a month</td><td>Going over 2M events a month (the third overage blocks the account)</td></tr><tr><td><strong>Plus</strong></td><td>Starts at $0; $75 a month at 3M events to $4,692 a month at 70M, billed annually</td><td>First 2M free, up to 70M events (about 700K MTUs)</td><td>Passing 70M events, or needing SSO and project permissions</td></tr><tr><td><strong>Growth</strong></td><td>Custom quote; $40,000 to $80,000 a year for mid-market deals (Vendr)</td><td>Custom</td><td>Needing data access controls, RBAC or a customer success manager</td></tr><tr><td><strong>Enterprise</strong></td><td>Custom quote; $100,000 to $250,000+ a year at 500K to 1M+ MTUs (Vendr)</td><td>Custom</td><td>Top tier</td></tr><tr><td><strong>Startup Scholarship</strong></td><td>Growth free for 12 months, then 40% off an annual Plus plan in year two</td><td>Up to 100M events a month</td><td>Open to startups under $10M raised with fewer than 20 employees</td></tr></tbody></table></figure>
<!-- /wp:table -->
```

### B3. Free plan: add the three-overage block rule

**Why:** Official docs fact that 2 of 5 competitors (mitzu, userpilot) now cite; our page implies Free has no consequences.

**Current HTML** (occurs exactly once in live raw content):

```html
and AI Visibility at limited volume. Genuinely enough for solo founders and pre-PMF products, not a crippled trial.</p>
```

**Replacement HTML:**

```html
and AI Visibility at limited volume. Genuinely enough for solo founders and pre-PMF products, not a crippled trial. The one hard edge, per Amplitude's billing docs: an organization that goes over its monthly limit three times gets blocked from its charts and dashboards, and an account that keeps exceeding without upgrading is deleted six months after the first block.</p>
```

### B4. Plus calculator paragraph: November re-read and exact monthly premium

**Why:** Replaces the vague 20 to 25% with the verified 25%; userpilot quotes $5,865 at 70M without saying it is the monthly price, so stating both closes a confusion readers will hit.

**Current HTML** (occurs exactly once in live raw content):

```html
roughly $900 to $56,000 per year depending entirely on volume. Month-to-month billing runs about 20 to 25% higher. We re-read the calculator in October 2026 and the curve is unchanged from July: at 20M events it still shows $1,260, which works out to $0.00006 per event.</p>
```

**Replacement HTML:**

```html
roughly $900 to $56,000 per year depending entirely on volume. Month-to-month billing costs 25% more at every tier: $94 vs $75 at 3M, $1,575 vs $1,260 at 20M, $5,865 vs $4,692 at 70M. We re-read all 17 calculator tiers on November 12, 2026, and the curve is unchanged from July.</p>
```

### B5. Replace the 'straight line' paragraph with the full calculator table + the $70-per-million rule (adds internal link)

**Why:** The current sentence says Plus has 'a small volume discount'; the November read shows a flat ~$70 per extra million events, so the sentence is wrong. Mitzu (cited in the AI Overview) publishes a 9-row calculator table; this is 13 rows with a per-million rule no competitor states. Adds a natural link to the Nov 10 usage-based-pricing post.

**Current HTML** (occurs exactly once in live raw content):

```html
<!-- wp:paragraph -->
<p>The 1.5M and 70M lines bracket the whole self-serve range; between them the calculator is close to a straight line with a small volume discount, and nothing on Plus is hidden behind a quote.</p>
<!-- /wp:paragraph -->
```

**Replacement HTML:**

```html
<!-- wp:paragraph -->
<p>Amplitude's Plus pricing calculator, tier by tier, as read on November 12, 2026:</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Events per month</th><th>Annual billing (per month)</th><th>Annual total</th><th>Monthly billing (per month)</th></tr></thead><tbody><tr><td>Up to 2M</td><td>$0</td><td>$0</td><td>$0</td></tr><tr><td>3M</td><td>$75</td><td>$900</td><td>$94</td></tr><tr><td>5M</td><td>$225</td><td>$2,700</td><td>$281</td></tr><tr><td>7.5M</td><td>$396</td><td>$4,752</td><td>$495</td></tr><tr><td>10M</td><td>$576</td><td>$6,912</td><td>$720</td></tr><tr><td>15M</td><td>$936</td><td>$11,232</td><td>$1,170</td></tr><tr><td>20M</td><td>$1,260</td><td>$15,120</td><td>$1,575</td></tr><tr><td>25M</td><td>$1,610</td><td>$19,320</td><td>$2,013</td></tr><tr><td>30M</td><td>$1,960</td><td>$23,520</td><td>$2,450</td></tr><tr><td>40M</td><td>$2,660</td><td>$31,920</td><td>$3,325</td></tr><tr><td>50M</td><td>$3,312</td><td>$39,744</td><td>$4,140</td></tr><tr><td>60M</td><td>$4,002</td><td>$48,024</td><td>$5,003</td></tr><tr><td>70M (Plus ceiling)</td><td>$4,692</td><td>$56,304</td><td>$5,865</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>The rule of thumb hiding in that table: <strong>every million events above the free 2M costs about $70 a month on annual billing</strong> (about $87 on monthly), from 10M all the way to 70M. There is no volume discount on Plus; 30M costs exactly 28 x $70. That makes Plus one of the plainest examples of <a href="/marketing/usage-based-pricing">usage-based pricing</a> in SaaS: to budget a year, multiply your expected monthly events above 2M by $70 and by 12.</p>
<!-- /wp:paragraph -->
```

### B6. New H2: What Happens When You Go Over (limits, overages, renewal)

**Why:** Hidden-cost / limit consequences are covered by 4 of 5 competitors (userpilot, mitzu, usercall, vendr); userpilot and mitzu cite the official terms. Our page says 'no overage penalties' three times without the 200% clause.

**Current HTML** (occurs exactly once in live raw content):

```html
<!-- wp:heading -->
<h2 class="wp-block-heading">Amplitude Pricing by Company Size</h2>
```

**Replacement HTML:**

```html
<!-- wp:heading -->
<h2 class="wp-block-heading">What Happens When You Go Over: Limits, Overages and Renewal</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>"No overage penalties" is true, and it is not the whole story. Three documents set the rules: Amplitude's billing docs, the <a href="https://amplitude.com/plus-plan-terms" target="_blank" rel="noreferrer noopener">Plus Plan Terms</a> (effective July 23, 2026) and the pricing page.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Free: three strikes.</strong> Go over the monthly allowance three times and Amplitude blocks the account. Charts and dashboards go dark; admin functions such as the User API stay on. Keep exceeding without upgrading and the account is deleted six months after the first block.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Plus: your own rate, up to 2x.</strong> Usage above what you bought is billed at 1.0x your per-event fee, so there is no markup. The terms also let Amplitude suspend or terminate an account that runs past 200% of its purchased volume.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Renewal at the then-current price.</strong> Plus renews automatically every 12 months on annual billing or every month on monthly, at whatever Plus costs on renewal day. Fees already paid are non-refundable; cancel any time and you keep access to the end of the period.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Practical read: there is no reason to buy headroom on Plus, because extra events cost the same per unit as the ones you prepaid. The number to watch is twice your purchased volume. A launch that triples your event count on a 10M plan is a reason to move up a tier that month, not to wait for renewal.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Amplitude Pricing by Company Size</h2>
```

### B7. Company size: re-date Vendr Growth range

**Why:** Vendr page now dated October 2026.

**Current HTML** (occurs exactly once in live raw content):

```html
you're negotiating Growth, where Vendr's February 2026 data puts contracts between $40,000 and $80,000.</p>
```

**Replacement HTML:**

```html
you're negotiating Growth, where Vendr's October 2026 data puts mid-market contracts between $40,000 and $80,000.</p>
```

### B8. Company size: update Vendr high contract

**Why:** Live Vendr high is now $379,933; $382,219 is no longer on the page.

**Current HTML** (occurs exactly once in live raw content):

```html
with add-ons priced as a percentage of the platform plan stacking on top; Vendr's largest recorded Amplitude contract is $382,219.</p>
```

**Replacement HTML:**

```html
with add-ons priced as a percentage of the platform plan stacking on top; Vendr's largest recorded Amplitude contract is $379,933 (October 2026).</p>
```

### B9. Bill drivers paragraph: correct the overage line

**Why:** Makes the claim match the Plus Plan Terms.

**Current HTML** (occurs exactly once in live raw content):

```html
Notably absent from that list now: overage charges. Plus has no overage penalties, a genuine change from the per-MTU era.</p>
```

**Replacement HTML:**

```html
Notably absent from that list: overage markups. Plus bills extra usage at your normal per-event rate, though the terms let Amplitude suspend an account that runs past 200% of its purchased volume (details in the limits section above).</p>
```

### B10. Contracts section: refresh Vendr dataset

**Why:** Vendr refreshed the page in October 2026: 422 purchases, $379,933 high, 16% average savings; the Enterprise range now appears only in its comparison table; new Experiment range.

**Current HTML** (occurs exactly once in live raw content):

```html
<p><strong>Vendr (updated February 2026, 421 purchases):</strong> the median Amplitude buyer pays <strong>$64,000 a year</strong>, with contracts recorded from $24,750 to $382,219. Growth plans for mid-market teams (100K to 250K MTUs) typically land at $40,000 to $80,000; Enterprise deals at 500K MTUs and up run $100,000 to $250,000+. Buyers who negotiated saved 15.7% on average.</p>
```

**Replacement HTML:**

```html
<p><strong>Vendr (updated October 2026, 422 purchases):</strong> the median Amplitude buyer pays <strong>$64,000 a year</strong>, with contracts recorded from $24,750 to $379,933. Growth plans for mid-market teams (100K to 250K MTUs) typically land at $40,000 to $80,000; Vendr's Amplitude-vs-PostHog table puts Enterprise at 500K to 1M+ MTUs at $100,000 to $250,000+, though its own Enterprise summary now just says custom-priced. Buyers saved 16% on average, and Vendr prices the Experiment add-on alone at $20,000 to $60,000+ a year.</p>
```

### B11. Contracts section: remove the now-false Vendr caution

**Why:** The live Vendr page no longer mentions $49 or Starter for Amplitude; the caution is now an error.

**Current HTML** (occurs exactly once in live raw content):

```html
One caution on Vendr: its page still describes the retired $49 Plus and 1,000-MTU Starter tiers, so trust its contract data and ignore its plan summary.</p>
```

**Replacement HTML:**

```html
Vendr refreshed its Amplitude page in October 2026 and now describes the current Free, Plus, Growth and Enterprise tiers; its headline figures shift as purchases are added, so re-check them before quoting one in a budget.</p>
```

### B12. Plan-limits table: add data access row

**Why:** 3 of 5 competitors (mitzu, userpilot, vendr) state history limits by plan; ours only mentions Plus.

**Current HTML** (occurs exactly once in live raw content):

```html
<td>2, add-on for unlimited</td><td>2, add-on for unlimited</td></tr></tbody></table></figure>
```

**Replacement HTML:**

```html
<td>2, add-on for unlimited</td><td>2, add-on for unlimited</td></tr><tr><td>Data access (history you can query)</td><td>1 year</td><td>2 years</td><td>Unlimited</td><td>Unlimited</td></tr></tbody></table></figure>
```

### B13. Negotiation: refresh Vendr average

**Why:** Vendr October 2026 figures; removes one en dash.

**Current HTML** (occurs exactly once in live raw content):

```html
can land 25–45% below sticker. Vendr's average across 421 purchases is a more modest 15.7%, so treat the top of that range as the reward for doing all three.
```

**Replacement HTML:**

```html
can land 25 to 45% below sticker. Vendr's average across 422 purchases is a more modest 16%, so treat the top of that range as the reward for doing all three.
```

### B14. Scholarship: replace 'discounts for life' with the published year-two terms

**Why:** amplitude.com/startups (Nov 12) publishes '$60,000 value' and 'Year 2, 40% off annual Plus plan'; 'competitive discounts for life' is no longer the wording. Freshness scoop: none of the 4 scraped competitors has the 40% figure.

**Current HTML** (occurs exactly once in live raw content):

```html
After the free year, Amplitude advertises "competitive discounts for life," and the company says it approves over 96% of applicants.</p>
```

**Replacement HTML:**

```html
Amplitude values the free year at $60,000 and now spells out year two: 40% off an annual Plus plan, then a standing startup discount off list price after that. The company says 96% of startups who apply get in.</p>
```

### B15. Scholarship: fix the wrong 'can't convert a paid plan' bullet

**Why:** Directly contradicted by Amplitude's billing docs. Factual error.

**Current HTML** (occurs exactly once in live raw content):

```html
<li><strong>Apply before you sign any paid contract.</strong> You can't retroactively convert a paid plan into the scholarship.</li>
```

**Replacement HTML:**

```html
<li><strong>Already paying? You can still switch.</strong> Per Amplitude's billing docs, monthly Plus customers cancel and apply once the account drops back to Free; annual Plus or Growth customers email scholarship@amplitude.com, and the team cancels the contract and refunds the remaining months.</li>
```

### B16. Scholarship: add the month-12 bullet

**Why:** Answers the obvious founder worry; both the startups page and billing docs state it.

**Current HTML** (occurs exactly once in live raw content):

```html
<li><strong>It sets up a stronger renewal.</strong> When the free year ends, you negotiate from real adoption data showing your team uses the tool daily.</li>
<!-- /wp:list-item --></ul>
```

**Replacement HTML:**

```html
<li><strong>It sets up a stronger renewal.</strong> When the free year ends, you negotiate from real adoption data showing your team uses the tool daily.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Month 12 has no cliff.</strong> Amplitude sends a usage-based quote 60 days before the year ends. If you don't take it, the account drops to the free 2M-event plan with your data and dashboards intact, and Amplitude doesn't bill you.</li>
<!-- /wp:list-item --></ul>
```

### B17. Scholarship: replace unverifiable venture-portfolio claim

**Why:** Neither amplitude.com/startups nor the billing docs mention Sequoia, a $25M cap or 50% off. Unverifiable claim (flagged unverified in cycle 1).

**Current HTML** (occurs exactly once in live raw content):

```html
<p><strong>Venture portfolio discounts.</strong> Companies backed by Y Combinator, AWS, or Sequoia with under $25M in funding can separately get up to 50% off the Growth plan for a year. If you're in one of those portfolios, ask before paying list.</p>
```

**Replacement HTML:**

```html
<p><strong>Accelerator and partner deals.</strong> Amplitude's billing docs list separate tracks for Y Combinator companies and AWS Activate members, and its startups page points YC founders to a separate deal on Bookface and promises additional discounts to companies that come through a partner. Amplitude publishes no percentage for these, so ask before paying list.</p>
```

### B18. Remove the scholarship graphic (wrong criteria and value)

**Why:** The image itself prints '$40K to $65K', a '< $50M ARR' revenue cap and 'New customer, not currently paying'. Amplitude's criteria are under $10M raised and under 20 employees, it values the year at $60,000, and paying customers can switch. Remove now; optionally replace with a corrected graphic later.

**Current HTML** (occurs exactly once in live raw content):

```html
<!-- wp:image {"id":1884,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://admin.startupyeti.com/wp-content/uploads/2026/04/Untitled-design-4.png" alt="Amplitude Startup Scholarship: a free year of the Growth plan worth $40K–$65K for pre-Series B startups" class="wp-image-1884"/></figure>
<!-- /wp:image -->


```

**Replacement HTML:**

_(empty: delete the fragment)_

### B19a. FAQ 'How much does Amplitude Enterprise cost?' (block JSON)

**Why:** Vendr October 2026 refresh.

**Current HTML** (occurs exactly once in live raw content):

```html
"content":"$100,000 to $250,000+ a year in Vendr's February 2026 data, with the largest recorded contract at $382,219.
```

**Replacement HTML:**

```html
"content":"$100,000 to $250,000+ a year at 500K to 1M+ MTUs in Vendr's October 2026 comparison data, with the largest recorded Amplitude contract at $379,933.
```

### B19b. FAQ 'How much does Amplitude Enterprise cost?' (rendered HTML)

**Why:** Same edit, rendered copy.

**Current HTML** (occurs exactly once in live raw content):

```html
<div class="rank-math-answer">$100,000 to $250,000+ a year in Vendr's February 2026 data, with the largest recorded contract at $382,219.
```

**Replacement HTML:**

```html
<div class="rank-math-answer">$100,000 to $250,000+ a year at 500K to 1M+ MTUs in Vendr's October 2026 comparison data, with the largest recorded Amplitude contract at $379,933.
```

### B20a. FAQ 'Can you pay monthly instead of annually?' (block JSON)

**Why:** Exact verified premium.

**Current HTML** (occurs exactly once in live raw content):

```html
"content":"Yes, on Plus, and you give up the annual discount: month-to-month runs roughly 20 to 25% more (at 3M events, $94/month vs $75/month annual, per the calculator).
```

**Replacement HTML:**

```html
"content":"Yes, on Plus, and you give up the annual discount: month-to-month costs 25% more at every tier (at 3M events, $94/month vs $75/month annual; at 20M, $1,575 vs $1,260, per the calculator on November 12, 2026).
```

### B20b. FAQ 'Can you pay monthly instead of annually?' (rendered HTML)

**Why:** Same edit, rendered copy.

**Current HTML** (occurs exactly once in live raw content):

```html
<div class="rank-math-answer">Yes, on Plus, and you give up the annual discount: month-to-month runs roughly 20 to 25% more (at 3M events, $94/month vs $75/month annual, per the calculator).
```

**Replacement HTML:**

```html
<div class="rank-math-answer">Yes, on Plus, and you give up the annual discount: month-to-month costs 25% more at every tier (at 3M events, $94/month vs $75/month annual; at 20M, $1,575 vs $1,260, per the calculator on November 12, 2026).
```

### B21. Closing links: drop trailing slash (house rule)

**Why:** House rule: internal links relative with no trailing slash.

**Current HTML** (occurs exactly once in live raw content):

```html
<a href="/startup/the-cost-of-pitchbook/">PitchBook pricing</a>
```

**Replacement HTML:**

```html
<a href="/startup/the-cost-of-pitchbook">PitchBook pricing</a>
```



### Optional (nice to have): remove the remaining en dashes

House style is no en dashes in copy. These existing ones are outside the fragments above. Each current fragment occurs exactly once in the live content (N9/N10 are the JSON and HTML copies of one FAQ answer).

#### N1

**Current HTML** (occurs exactly once in live raw content):

```html
Where Series A–B startups land
```

**Replacement HTML:**

```html
Where Series A and B startups land
```

#### N2

**Current HTML** (occurs exactly once in live raw content):

```html
a realistic Plus budget at <strong>$900–$15,000/year</strong>
```

**Replacement HTML:**

```html
a realistic Plus budget at <strong>$900 to $15,000/year</strong>
```

#### N3

**Current HTML** (occurs exactly once in live raw content):

```html
<strong>Small to mid (2M–30M events/month): $0–$20,000/year.</strong>
```

**Replacement HTML:**

```html
<strong>Small to mid (2M to 30M events/month): $0 to $20,000/year.</strong>
```

#### N4

**Current HTML** (occurs exactly once in live raw content):

```html
<strong>Mid to enterprise (50M–150M events/month): $40,000–$150,000/year.</strong>
```

**Replacement HTML:**

```html
<strong>Mid to enterprise (50M to 150M events/month): $40,000 to $150,000/year.</strong>
```

#### N5

**Current HTML** (occurs exactly once in live raw content):

```html
<strong>Enterprise (200M+ events/month): $100,000–$250,000+/year.</strong>
```

**Replacement HTML:**

```html
<strong>Enterprise (200M+ events/month): $100,000 to $250,000+/year.</strong>
```

#### N6

**Current HTML** (occurs exactly once in live raw content):

```html
Two-to-three-year terms unlock 15–30% discounts vs. one-year deals
```

**Replacement HTML:**

```html
Two-to-three-year terms unlock 15 to 30% discounts vs. one-year deals
```

#### N7

**Current HTML** (occurs exactly once in live raw content):

```html
commonly negotiate 20–35% below initial quote
```

**Replacement HTML:**

```html
commonly negotiate 20 to 35% below initial quote
```

#### N8

**Current HTML** (occurs exactly once in live raw content):

```html
an additional 5–15% discount is common
```

**Replacement HTML:**

```html
an additional 5 to 15% discount is common
```

#### N9

**Current HTML** (occurs exactly once in live raw content):

```html
Multi-year commitments unlock 15–30% discounts.","visible"
```

**Replacement HTML:**

```html
Multi-year commitments unlock 15 to 30% discounts.","visible"
```

#### N10

**Current HTML** (occurs exactly once in live raw content):

```html
Multi-year commitments unlock 15–30% discounts.</div>
```

**Replacement HTML:**

```html
Multi-year commitments unlock 15 to 30% discounts.</div>
```



---

## 4. Claim ledger: every new or changed figure, with source and fetch date

All fetched 2026-11-12.

| Figure / claim | Used in | Source | Method |
|---|---|---|---|
| Plus annual: $0 @2M, $75 @3M, $225 @5M, $396 @7.5M, $576 @10M, $756 @12.5M, $936 @15M, $1,116 @17.5M, $1,260 @20M, $1,610 @25M, $1,960 @30M, $2,310 @35M, $2,660 @40M, $3,010 @45M, $3,312 @50M, $4,002 @60M, $4,692 @70M (17 tiers) | B2, B4, B5, M1 | https://amplitude.com/pricing?modal=estimate (Plus Plan Pricing Calculator, "Pay Annually" checked) | Playwright, real slider keys, read raw |
| Plus monthly: $94 @3M, $281 @5M, $495 @7.5M, $720 @10M, $945 @12.5M, $1,170 @15M, $1,395 @17.5M, $1,575 @20M, $2,013 @25M, $2,450 @30M, $2,888 @35M, $3,325 @40M, $3,763 @45M, $4,140 @50M, $5,003 @60M, $5,865 @70M | B4, B5, B20 | same calculator, "Pay Annually" unchecked | Playwright, raw |
| Monthly = 25% more than annual at every tier | B4, B20 | computed from the two rows above | arithmetic |
| ~$70 per million events above 2M annual (~$87 monthly); 30M = 28 x $70 = $1,960 | B5 | computed from calculator rows | arithmetic (10M: $72, 20M: $70, 50M: $69, 70M: $69 per million) |
| Annual totals ($4,752; $11,232; $19,320; $31,920; $39,744; $48,024; $56,304) | B5 | calculator monthly figure x 12 | arithmetic |
| Free 2M events, no credit card; Plus starts at $0, first 2M free, up to 700K MTU / 70M EV; Growth adds SSO & project permissions; Enterprise adds data access controls, RBAC; customer success Enterprise-only | B2 | https://amplitude.com/pricing | cf-scraper raw |
| Data access: Free 1 year, Plus 2 years, Growth Unlimited, Enterprise Unlimited | B12 | https://amplitude.com/pricing (compare table, "Data access" row) | cf-scraper raw. Note: billing docs list "data retention" as 7 years for Growth/Enterprise, a different measure; the table uses the pricing page's row |
| Free: blocked after exceeding the monthly limit three times; admin functions (User API) remain; deleted six months after the initial block | B2, B3, B6 | https://amplitude.com/docs/faq/billing-and-plans | cf-scraper raw |
| Plus overage billed at 1.0x per-event/per-MTU fee; suspend or terminate past 200% of purchased volume; fees non-refundable; auto-renew 12 months or 1 month; renewal at then-current fees; terms effective July 23, 2026 | B6, B9 | https://amplitude.com/plus-plan-terms | WebFetch (prompted, verbatim quotes requested) |
| Cancel any time, keep access to end of current period | B6 | https://amplitude.com/docs/faq/billing-and-plans | cf-scraper raw |
| Scholarship: $60,000 value; Year 2: 40% off annual Plus plan; standing startup discount after that; 96% of startups who apply get in; up to 100M events/month; <20 employees, <$10M raised; YC deal on Bookface; partner discounts | B2, B14, B17 | https://amplitude.com/startups | cf-scraper raw |
| Monthly Plus: cancel, wait for period end, apply; annual Plus or Growth: email scholarship@amplitude.com, contract cancelled, remaining months refunded | B15 | https://amplitude.com/docs/faq/billing-and-plans | cf-scraper raw |
| Usage-based quote 60 days before the year ends; drop to the free 2M-event plan keeping data and dashboards, no bill | B16 | https://amplitude.com/startups ("Sixty days before it ends we send a usage-based quote", "Drop to the free 2M-events/month plan and keep your data and dashboards. No penalty.") + billing docs ("Amplitude doesn't bill you") | cf-scraper raw |
| Separate tracks for Y Combinator companies and AWS Activate members | B17 | https://amplitude.com/docs/faq/billing-and-plans | cf-scraper raw |
| Vendr: "Last updated: October 2026"; median $64,000; 422 purchases; 16% average savings (header shows 15.7%); low $24,750; high $379,933 | B7, B8, B10, B11, B13, B19, M1 | https://www.vendr.com/marketplace/amplitude | cf-scraper blocked (403); WebFetch prompted, then confirmed raw via Playwright innerText |
| Vendr: Growth $40,000 to $80,000 at 100K to 250K MTUs | B2, B7, B10 | same | Playwright raw |
| Vendr: Enterprise $100,000 to $250,000+ at 500K to 1M+ MTUs (Amplitude column of its Amplitude-vs-PostHog table; its Enterprise narrative and the Pendo table say "custom-priced") | B2, B10, B19 | same | Playwright raw. **Medium confidence**: one table only |
| Vendr: Amplitude Experiment $20,000 to $60,000+/year | B10 | same ("common hidden costs") | Playwright raw |
| Vendr no longer shows $49 or a Starter tier for Amplitude | B11 | same ("$49" not found; "Starter" appears only as Pendo's tier) | Playwright raw + WebFetch |
| PriceLevel: median $48,000; $45,000 (Growth $30,000 + Experiment $15,000, Q1 2024, 51 to 200 employees); $51,000 (adds Govern $3,000, Accounts $3,000; 600M events/yr; 201 to 500 employees) | unchanged copy, re-verified | https://www.pricelevel.com/vendors/amplitude/pricing | WebFetch (prompted) |
| 5,200+ customers, 30 of the Fortune 100, 700+ employees, YC W12 | unchanged copy, re-verified | https://amplitude.com/about | WebFetch (prompted). Note: amplitude.com/startups says "50% of the Fortune 100"; Amplitude contradicts itself, so keep the attributed about-page figure |

**Removed as unverifiable:** "YC, AWS, or Sequoia with under $25M ... up to 50% off the Growth plan" (B17); scholarship graphic figures "$40K–$65K", "< $50M ARR", "New customer" (B18); "competitive discounts for life" (B14).

**Still unverified on the page, untouched:** Mixpanel/PostHog table and chart (July 2026); "Most seed and Series A products fire well under 20M events a month"; SoftwareAdvice 4.6/5 from 68 reviews; Plus "webhooks, three collaboration spaces"; "Series A to B" positioning lines.

---

## 5. For the Stage 5 log entry (append after approval)

**Cycle:** 2 — 2026-11-12 (review, `loss-pivot`)

**Fresh metrics vs baseline (for the log table):**

| Keyword | Cycle 1 (Jul 3 to Sep 30) | Cycle 2 (Oct 13 to Nov 10) | Δ |
|---|---|---|---|
| amplitude pricing | 31.3 (332 impr) | 29.5 (73 impr) | ▲ 1.8 |
| amplitude cost | 23.5 (60) | 15.5 (17) | ▲ 8.0 |
| amplitude enterprise prix | 22.6 (2,495) | 22.4 (1,010) | flat |
| amplitude free plan | 18.1 (18) | 16.5 (4) | ▲ 1.6 |
| amplitude discount | 27.2 (17) | 22.0 (2) | ▲ 5.2 |
| amplitude session replay pricing | 33.7 (7) | 57.0 (2) | ▼ 23 |
| amplitude pricing calculator | 15.0 (7) | 9.0 (1) | ▲ 6 |
| amplitude price | n/a | 8.3 (4) | new |
| how much does amplitude cost | n/a | 1.0 (2) | new |

Page: 3,166 impr / 2 clicks / pos 22.9 (90 days) → 1,152 impr / 0 clicks / pos 22.3 (29 days). Ahrefs keywords for URL: 0 → 0. AI Overview: not cited → not cited (mitzu, Vendr cited).

**SERP composition:** full top-10 churn; review/UGC pages out; now amplitude.com x3 (+AIO), userpilot #6, Vendr #7, mitzu #8, usercall #9, uxcam #10 (Ahrefs, updated 2026-11-08).

**Drift check:** clean. WP post unmodified since 2026-10-02T10:14:29; no template changes on main since f57223a (only calculator commits 641ceef, 2dddf6d). Core-update recovery is the confound.

**Hypothesis for cycle 2 (proposed):**

> Depth did not move the head term; extractability and freshness might. Adding a dated at-a-glance table, the full 17-tier Plus calculator (annual and monthly) with the "about $70 per million events" rule, and a primary-sourced limits/overage/renewal section, plus correcting five factual errors (scholarship switching rule, scholarship graphic, venture-portfolio claim, Vendr caution, "volume discount"), earns a citation in the "amplitude pricing" and "amplitude cost" AI Overviews within 4 to 6 weeks, moves "amplitude cost" from 14 into the top 10, and lifts "amplitude pricing" from ~30 to 20 or better. If the head term is still worse than 25 at the next review with the AI Overview uncited, treat the pricing-format ceiling as site-level (consistent with the Sept 2026 core-update pattern across the pricing series) and stop on-page work on this URL.

**Baseline to record for cycle 2:** page 1,152 impr / 0 clicks / pos 22.3 (Oct 13 to Nov 10); "amplitude pricing" 29.5; "amplitude cost" 15.5 (Nov 1 to 10: 13.9); Ahrefs keywords 0; AIO citation: no; words 3,535; content H2 10; FAQ 11; internal links out 5, in 4; HEAD at review 29ad6191f803c4139cfb5991c490cf94d73722b5 (branch design-pass; content lives in WordPress).

**Next review:** 2026-12-17 to 2026-12-31 (4 to 6 weeks after apply). Check: AIO citation for "amplitude pricing" and "amplitude cost", "amplitude cost" < 10, "amplitude pricing" < 20, Vendr figures still current, calculator unchanged.
