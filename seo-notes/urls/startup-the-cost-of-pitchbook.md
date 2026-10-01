# /startup/the-cost-of-pitchbook

**Live URL:** https://www.startupyeti.com/startup/the-cost-of-pitchbook
**Target keyword:** pitchbook pricing
**CMS:** WordPress headless (content not editable locally — changes applied in WordPress admin)

---

## Cycle 1 — 2026-04-28

### Baseline metrics (collected 2026-04-28)

**Ahrefs — site-explorer-organic-keywords for target URL:**
| Keyword | Position | Volume | KD | Traffic |
|---|---|---|---|---|
| pitchbook pricing | 45 | 600 | 3 | ~2 |
| pitchbook subscription | 28 | — | — | ~1 |

**Ahrefs — keywords-explorer-overview for "pitchbook pricing":**
- Volume: 600/mo (US)
- KD: 3
- CPC: $9.00 (900 cents)
- Intent: informational + commercial + branded
- SERP features: AI Overview (position 1), question/PAA box
- Top-10 SERP: competitor DR range 40–90; top organic results are Vendr, G2, GetLatka, Sourcegraph blog, and the PitchBook website itself

**GSC impressions (trailing 28 days, via GSC project 4736210):**
- "pitchbook pricing": 1,507 impressions, avg position 38.6

---

### SERP top 5 at cycle 1 (scraped 2026-04-28)

| # | URL | DR | Traffic | Word count | FAQ? |
|---|---|---|---|---|---|
| 1 | vendr.com/vendors/pitchbook | ~80 | high | ~1,200 | Yes (5 Qs) |
| 2 | g2.com/products/pitchbook/pricing | ~90 | high | ~900 | Yes (review snippets) |
| 3 | getlatka.com | ~55 | medium | ~700 | No |
| 4 | sourcegraph.com/blog | ~72 | medium | ~1,800 | No |
| 5 | PitchBook own site | ~80 | high | ~500 | No |

**Must-have subtopics (4–5/5 competitors cover):**
- PitchBook pricing not publicly listed / sales-only
- Contract range ($20K–$50K)
- Module breakdown
- Comparison to alternatives (Bloomberg, S&P Capital IQ)

**Should-have subtopics (2–3/5 competitors cover):**
- Negotiation tactics
- Free trial availability
- Who PitchBook is for (ROI framing)

---

### Gap analysis findings (cycle 1)

**Check 3.3 — Subtopic coverage:**
- Page covered: pricing opacity (yes), general cost range (partial), module breakdown (no), negotiation (no), comparison (no), free trial (no)
- Missing must-have subtopics: 2 of 4 (module breakdown, comparison)
- Missing should-have subtopics: 3 of 3

**Check 4.1 — Word count:**
- Target page: ~600 words (estimated)
- Top-5 average: ~1,020 words
- Gap: ~420 words below average

**Check 5 — Keyword usage:**
- "pitchbook pricing" in first 100 words: NO (original opener was context-framing, delayed keyword)
- Keyword in subheadings: NO
- Secondary keywords used: 3/15 identified

**Other findings:**
- Title tag: original post title not keyword-fronted
- Meta description: auto-generated from excerpt; no number/specificity hook
- FAQ: 4 thin questions present; no FAQPage schema
- Internal links: 1 broken (links to `/startup/decoding-pitchbook-pricing/` which 301-redirects back to this page — self-referential redirect chain)
- Incoming links to this page: none found in local source

---

### Hypothesis (cycle 1)

> Adding the negotiation section (~340 words, 4 named levers backed by Vendr's 123-deal dataset), updating the opening to front-load the keyword and the $20K–$50K data hook, replacing 4 thin FAQs with 6 PAA-aligned FAQs, and updating the post title to keyword-front will move the page from position 45 into the top-20 for "pitchbook pricing" within 60–90 days. Secondary hypothesis: the FAQPage content makes the page eligible for PAA box inclusion, which may drive CTR even at positions 10–20.

---

### Changes applied (cycle 1)

**Delivery method:** WordPress copy brief (page content is WordPress headless — not editable locally)

| # | Change | Type |
|---|---|---|
| 1 | Post title → "PitchBook Pricing: What 100+ Buyers Pay" | Title tag + H1 |
| 2 | Excerpt → 158-char meta description with keyword in first 2 words | Meta description |
| 3 | Opening paragraph replaced to front-load "pitchbook pricing" + $30K median data hook | Content |
| 4 | New H2 "How to Negotiate PitchBook Pricing" (~340 words, 4 levers, Vendr-sourced) | New content section |
| 5 | FAQ replaced: 4 thin Qs → 6 PAA-aligned Qs with 40–80-word answers | FAQ |
| 6 | Internal link `/startup/decoding-pitchbook-pricing/` flagged for removal or replacement | Internal links |

**Word count delta (estimated):** +420 words (from ~600 to ~1,020)

**Git state at cycle 1:** d7a43e2762613ca06b08e4bc395b514faee1804d
(Note: No content file changes tracked in git — changes are applied in WordPress admin. Git hash records the codebase state at the time of the optimization brief.)

---

### Revenue framing (cycle 1 baseline)

| Metric | Value |
|---|---|
| Keyword volume | 600/mo |
| CPC | $9.00 |
| Current position | 45 (not on page 1) |
| Target position | 5 (realistic 90-day goal, given KD 3) |
| CTR at position 5 | 4.8% (Ahrefs benchmark) |
| AI Overview suppression | ~25% CTR reduction |
| Adjusted monthly visits | ~22 |
| Revenue proxy (CPC × visits) | ~$198/mo |
| Current revenue proxy | ~$0 (position 45, no meaningful traffic) |
| Uplift if hypothesis confirmed | ~$198/mo |

---

### Next review date

**Target:** 60 days from WordPress update (approximately 2026-06-28)
**Review trigger:** Run `/on-page-optimizer review /startup/the-cost-of-pitchbook`
**What to look for:** Position movement from 45 toward top-20; any PAA box appearances; click data from GSC

---
## Cycle 2 — 2026-10-01 (review + recovery)

**Status:** applied
**Days since last cycle:** 156

### Fresh metrics vs baseline

**Keyword metrics (Ahrefs, 2026-10-01):** "pitchbook pricing" **18,000/mo, KD 4, CPC $12.00**, clicks 20,089, TP 7,800 — the cycle-1 log recorded 600/mo. "pitchbook cost" 1,800 (KD 5); "how much does pitchbook cost" 250 (KD 3); "pitchbook subscription cost" 150–800 depending on volume mode; "pitchbook price per month" 100; "pitchbook api pricing" 90. SERP features on every variant: ai_overview, ai_overview_sitelink, question (PAA), sitelink.

**GSC, page level (project 4736210):**

| Window | Impressions | Clicks | Avg pos |
|---|---|---|---|
| Apr 2026 (cycle-1 baseline, "pitchbook pricing") | 1,507 | — | 38.6 |
| Week of Jul 20 (peak) | 1,600 | 1 | 10.6 |
| Week of Aug 24 | 1,504 | 1 | 10.1 |
| Week of Sep 14 | 143 | 0 | 17.8 |
| Week of Sep 21 | 127 | 0 | 17.5 |
| Sep 3–30 total | 954 | **0** | 13.1 |

| Query (Sep 3–30) | Impr | Pos |
|---|---|---|
| how much is pitchbook | 220 | 1.9 |
| pitchbook subscription price | 111 | 4.6 |
| pitchbook subscription cost | 105 | 3.8 |
| how much does pitchbook cost | 53 | 8.7 |
| **pitchbook pricing** | 26 | **26.8** |
| pitchbook price | 23 | 21.1 |
| **pitchbook cost** | 17 | **29.2** |
| pitchbook price per month | 14 | 11.1 |
| pitchbook free trial length | 6 | 18.0 |

**Ahrefs organic (Oct 1):** #1 "pitchbook subscription cost" (800/mo, 34 visits), #1 "how much does a pitchbook subscription cost"; not in Ahrefs' top 100 for "pitchbook pricing" or "pitchbook cost". Page traffic estimate ~37/mo.

**Top 10 SERP (Oct 1, US):** pitchbook.com/pricing (DR 84, quote form, no prices) · reddit r/startups thread block · failory.com (DR 75, ~550 words, Jan 2024) · slidegenius.com (DR 49, blocked 403) · pitchbook.com home · itqlick.com (DR 58, ~1,100 words, Feb 2026, TCO table) · clay.com Crunchbase-vs-PitchBook (DR 80, Apr 2026) · about.tagnifi.com (DR 45, ~700 words + table, 6 quoted contracts) · pitchbook.com API · alpha-sense.com compare (DR 74). Startup Yeti absent (was ~#10 in August). Site DR 62.

### SERP composition change

Entire cycle-1 top 5 (Vendr, G2, GetLatka, Sourcegraph, PitchBook) replaced. Re-scraped: 5 raw (pitchbook.com/pricing, Failory, ITQlick, Clay, TagniFi); SlideGenius blocked (Google snippet only: "$15,000–$30,000 per user/year; enterprise $100,000+"); Reddit login-walled. Competitor word-count average (4 raw article pages) ~960 vs our 1,688.

### Drift check

No git-tracked content (WordPress headless). WP `modified` was 2026-07-24 (Carta link insert); no edits between then and this cycle; no site deploy between Aug 31 and Sep 22. Attribution is clean: the drop coincides with the Google core update of Sep 12–26, 2026 (spam update from Sep 24), not with any edit.

### Verdict

The cycle-1 hypothesis was confirmed: the page went from 45 to ~10.5 by July 20 and held through August. The September core update then split it — long-tail "how much / subscription cost" queries stayed top 10, the two head terms fell to page 3, and weekly impressions dropped ~90%. Zero clicks on 954 September impressions (even at pos 1.9) confirms the SERP is near zero-click under the AI Overview; the page earned ~4 clicks/month at pos 10 in August. Not an authority problem (DR 62 vs 45–58 for the pages that passed us) and not depth. Three verifiable defects most likely explain the re-weighting: (1) the primary source, vendr.com/marketplace/pitchbook, is a 404 and gone from Google's index — linked 6× and carrying every headline number; (2) the FAQ said "no free trial" while PitchBook's own #1 page offers trials on request; (3) the WP excerpt was empty, so the meta description was the first paragraph hard-cut at 160 chars mid-sentence (cycle 1's excerpt was never applied). **Recommendation: loss-pivot** — keep the strategy, re-ground the page.

### Hypothesis (cycle 2)

> Re-sourcing every figure to a verifiable archived snapshot, correcting the free-trial error, shipping a real meta description, and covering the add-on / per-month / PAA gaps will return "pitchbook pricing" and "pitchbook cost" to page 1 (target pos 8–10) within 2–8 weeks and restore weekly impressions above 1,000. Clicks will stay low because of the AI Overview; the success metric is impressions and head-term position, plus citation in the AI Overview / PAA.

### Changes applied (WordPress post 1178, via scripts/recover-pitchbook.mjs)

| # | Change | Type |
|---|---|---|
| 1 | All 6 dead Vendr links → archived snapshot (web.archive.org/web/20250617223802/…); figures updated to what the snapshot shows: 101 purchases, median $32,000, range $20,000–$125,000, 14% avg savings, $20,000 single-seat list, $633.33/user/month on 5 seats, 22% multi-year discount, 5–7% renewal uplifts. Dropped unverifiable "114 transactions", "$56,000 average", "20–35% below quote". Added live sources Failory ($12,000 floor) and TagniFi ($70,000/10 users). | Sources / claims |
| 2 | Free-trial FAQ corrected: trial on request at PitchBook's discretion, no self-serve trial, no free tier (per pitchbook.com/pricing). | Factual fix |
| 3 | Excerpt set (156 chars): "PitchBook pricing from 101 real contracts: median $32,000 a year, $20,000 for one seat, up to $125,000. What drives the quote, and the 5 levers that cut it." | Meta description |
| 4 | "What drives the price" expanded with driver 5: add-ons quoted separately (API, CRM Integration, Direct Data) + renewal-uplift specifics; intro updated ("pricing page is a quote-request form"). | Content |
| 5 | Per-month equivalent in the single-user section; FAQ rebuilt 6 → 10 (added: per month, API cost, free alternative, is it worth it). | Content / FAQ |
| 6 | Featured-image alt → "Scale balancing PitchBook's annual subscription cost against a startup budget"; internal link to /startup/salesforce-cost in Lever 2; 26 em-dashes removed (house style). | Alt / links / style |

**Word count:** 1,688 → 2,294. Headings: H2 8, H3 16 (10 FAQ). Title/H1 unchanged. Sources list expanded (PitchBook official page, Failory, TagniFi added).

### Claim ledger summary

Archived Vendr snapshot (2025-06-17) → all contract figures, savings %, uplift and discount anecdotes. pitchbook.com/pricing (official) → trial-on-request, Direct Data and CRM Integration as premium offerings. Failory (live) → $12,000 single seat. TagniFi (live) → $70,000/10 users; API/CRM cost and annual-increase complaints. Untouched (existing, not re-verified): Dealroom €12,500–€17,000, Preqin $25,000–$81,000, Crunchbase Pro $588/yr or $99/mo, S&P/CB Insights estimates.

### Git state at end of cycle

- HEAD: `50e6fc644508dd72e1e7f53b74b967cabbaee6cb`
- Content lives in WordPress (post 1178, modified 2026-10-01T20:44:47); edit script `scripts/recover-pitchbook.mjs` committed.

### Next review date

**Target:** 2026-10-29 (4 weeks). **Run:** `/on-page-optimizer review /startup/the-cost-of-pitchbook`. **Look for:** "pitchbook pricing" and "pitchbook cost" back under position 12; weekly impressions > 1,000; any AI Overview citation. Also run cycle 1 for /startup/carta-pricing (held position, lost ~50% impressions in the same update).

---
