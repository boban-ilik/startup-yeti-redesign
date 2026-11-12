---
url: /startup/amplitude-pricing
target_keyword: amplitude pricing
site_url: https://www.startupyeti.com
country: us
first_optimized: 2026-10-02
cycles: 2
last_verdict: loss-pivot
---

# /startup/amplitude-pricing — Optimization Log

**CMS:** WordPress headless (post 1858; edits via REST, script `scripts/optimize-amplitude.mjs`)
Target keyword: **amplitude pricing** (700/mo, US, KD 0, CPC $0.25, TP 350). Family ≈1,700/mo: amplitude cost 200 (KD 7), amplitude analytics pricing 200, amplitude session replay pricing 200, amplitude price 90, pricing plans 60, experiment pricing 40, free plan 30 (KD 8), how much does amplitude cost 30, enterprise pricing 20, vs mixpanel/posthog 50.

---

## Cycle 1 — 2026-10-02

**Status:** applied

### Baseline metrics

**GSC (Jul 3–Sep 30, 2026):** page 3,166 impressions, 2 clicks, avg pos 22.9.

| Query | Impr | Pos |
|---|---|---|
| amplitude enterprise prix (origin unclear) | 2,495 | 22.6 |
| amplitude pricing | 332 | 31.3 |
| amplitude cost | 60 | 23.5 |
| amplitude pricing official 2026 | 35 | 9.3 |
| amplitude free tier | 30 | 8.4 |
| amplitude free plan | 18 | 18.1 |
| amplitude discount | 17 | 27.2 |
| amplitude analytics pricing | 11 | 38.5 |
| amplitude session replay pricing | 7 | 33.7 |
| amplitude pricing calculator | 7 | 15.0 |

**Ahrefs organic (2026-10-01):** page not in Ahrefs' top 100 for any tracked keyword (site total = 2 keywords, both pitchbook).

**Top 10 SERP (Oct 1):** AI Overview (cites amplitude.com/pricing, /plus, /amplitude-analytics, usercall.co) · reddit r/DefaultAlive "pricing doesn't make sense under 10k MAU" (DR 95) · PAA (free version? / legit company? / for dummies? / alternatives?) · softwareadvice profile DR 87 (shows "$995/mo", 68 reviews 4.6/5) · g2 Guides & Surveys pricing DR 91 · copy.ai review DR 86 (stale $49/50K MTU) · contentmation DR 33 (blocked) · theenterpriseworld DR 72 (stale $49) · artisangrowthstrategies DR 45 · peerspot DR 75.
Scrapes: 4 prompted (usercall ~2,200w Sep 9 2026, current July figures, "event volume is the billing trap", worked budgets; enterpriseworld ~1,100w; softwareadvice ~2,200w reviews; copy.ai ~2,100w review roundup), 1 blocked (contentmation 429), reddit login-walled. Amplitude pricing page + calculator read raw via Playwright.

### Gap analysis

- Title 77 chars → 92 rendered, truncated. Meta 146 ok.
- Stale vs live page: Plus = "700K MTU / 70M EV" (article said 350K MTUs @200/MTU); "AI Visibility prompts 500/1,000/2,500" no longer published; Agent Analytics (5K/5K/10K/20K sessions) missing.
- Contract data dated: Vendr Feb 2026 now median $64,000 (421 purchases), range $24,750–$382,219, Growth $40K–$80K, Enterprise $100K–$250K+, 15.7% avg savings; PriceLevel median $48,000 with itemised contracts ($45K = Growth $30K + Experiment $15K; $51K adds Govern $3K + Accounts $3K).
- Missing subtopics: enterprise/contract section (biggest impression cluster), add-on pricing (session replay 200/mo query), "what is Amplitude"/legitimacy (PAA), worked examples by volume (usercall's cited angle).
- Word count 2,310 vs ~1,100–2,200 competitors (ahead). Internal links 2 out / 1 in. 13 em-dashes.

### Hypothesis

> Un-truncating the title, correcting the three stale details, and adding the enterprise-contract and add-on sections (verified Vendr/PriceLevel/official-table data no competitor has), plus PAA FAQs, moves "amplitude pricing" from 31 to page 1 (target 8–10) within 2–8 weeks, earns the AI Overview citation usercall holds, and adds ~10–15 Ahrefs-tracked keywords from the family (cost / plans / free plan / session replay pricing / enterprise pricing / vs variants).

### Changes applied

1. Title → "Amplitude Pricing in 2026: Free to Enterprise" (45; 60 rendered). Excerpt → 153 chars with $75–$4,692 and Growth/Enterprise hook.
2. Fixed: 700K MTU/70M EV cap; AI Visibility counts generalized; Agent Analytics added; Growth/Enterprise bullets gained SLA, SCIM, CSM, agent sessions, active experiments; Plus gained webhooks/spaces/credit-card note.
3. New H2 "What Amplitude Is (and Isn't)" (~110w; founded 2012 YC, 5,200+ customers, 30 of Fortune 100 per amplitude.com/about).
4. "What Founders Actually Pay on Plus": calculator re-check note (Oct 2026, $1,260 @20M = $0.00006/event; $1,610 @25M) + 5 worked examples (1.5M/3M/10M/25M/70M).
5. New H2 "Amplitude Enterprise and Growth Pricing: What Contracts Look Like" (~290w, Vendr + PriceLevel, 3 takeaways, source caution about Vendr's stale tier summary).
6. New H2 "Add-On Pricing: Session Replay, Experiment, Accounts" (~250w, per-plan limits table from the official feature table; Experiment $15K on $30K platform).
7. Vendr figures updated in by-size section; negotiation gained Vendr's 15.7% average + Carta link.
8. FAQ 6 → 11 (added: how much does it cost / Enterprise cost / Session Replay cost / free trial / legit company; MTU conversion fixed).
9. Internal links out 2 → 5 (carta-pricing, salesforce-cost, saas-pricing-models); incoming links added from the-cost-of-pitchbook and salesforce-cost. 13 em-dashes → 0.

**Word count:** 2,310 → 3,535. H2 10, FAQ 11. Slug unchanged. Images unchanged (July plan-card and by-size graphics still structurally accurate; by-size graphic shows $45K lower bound vs text $40K).

### Claim ledger summary

amplitude.com/pricing (Playwright raw, 2026-10-01): plan contents, limits table, 700K MTU/70M EV, add-on packages, FAQ (no trial, MCP tools). Calculator (real slider): $1,260 @20M, $1,610 @25M verified; $75/$576/$4,692 carried from July (curve unchanged at checked points). amplitude.com/about (prompted): founded 2012, 5,200+ customers, 30 of Fortune 100, 700+ employees. Vendr marketplace (prompted, page dated Feb 2026): median $64,000, 421 purchases, $24,750–$382,219, 15.7%, Growth $40–80K, Enterprise $100–250K+, 20–35% / 15–30% negotiation ranges. PriceLevel (prompted): median $48,000, contracts $45,000 and $51,000 with line items. SoftwareAdvice (prompted): 4.6/5, 68 reviews. Untouched/unverified this cycle: Mixpanel and PostHog table (July), venture-portfolio 50% line, quarter-end 5–15% claim. Omitted as unverifiable: Amplitude's stock listing.

### Git state at end of cycle

- HEAD: `f57223a49000503a77b7d2e6cd9e27387ea4db6c`
- Content in WordPress (post 1858, modified 2026-10-02T10:14:29).

### Next review date

**Target:** 2026-10-30. Look for: "amplitude pricing" < 15, impressions on the enterprise/session-replay queries, AI Overview citation, Ahrefs keyword count for the URL.

---

---

## Cycle 2 — 2026-11-12

**Status:** applied (verdict `loss-pivot` on cycle 1; all 23 edits plus optional dash fixes N1 to N10 approved by Boban and applied 2026-11-12 via `scripts/apply-optimizer-proposal.mjs`; WP post 1858 was unmodified since 2026-10-02T10:14:29; pre-change backup kept outside the repo; scholarship graphic media 1884 removed from the post, media item left in the library). Full proposal: `seo-notes/proposals/startup-amplitude-pricing-2026-11-12.md`.

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

