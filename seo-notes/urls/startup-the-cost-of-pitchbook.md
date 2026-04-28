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
