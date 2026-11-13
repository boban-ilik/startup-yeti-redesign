# /startup/the-cost-of-pitchbook — Cycle 3 review proposal (2026-11-13)

**Status:** proposal only (Stage 3). Nothing has been written to WordPress, `seo-notes/index.json` or the URL log.
**Target keyword:** pitchbook pricing (log `target_keyword`, unchanged)
**Post:** WP id 1178, raw content last modified 2026-10-02T10:14:34 (cycle 2 write 2026-10-01T20:44:47, plus one internal link to /startup/amplitude-pricing added 2026-10-02; diff of WP revisions 2023 → 2025 confirmed that was the only change)
**Days since cycle 2:** 43

---

## 1. Review verdict

### Fresh metrics vs cycle-2 baseline

GSC via Ahrefs (project 4736210), web, all countries. Cycle-2 baseline window: Sep 3 to Sep 30, 2026 (already inside the core-update trough). Review window: Oct 16 to Nov 12, 2026.

| Metric | Cycle 2 baseline (Sep 3 to 30) | Now (Oct 16 to Nov 12) | Change |
|---|---|---|---|
| Page impressions | 954 | 153 | ▼ 84% |
| Page clicks | 0 | 0 | flat |
| Page avg position | 13.1 | 44.8 | ▼ 31.7 |
| how much is pitchbook | 1.9 (221 impr) | 58.5 (2) | ▼ 56.6 |
| pitchbook subscription price | 4.6 (112) | 46.0 (1) | ▼ 41.4 |
| pitchbook subscription cost | 3.8 (105) | 48.6 (5) | ▼ 44.8 |
| how much does pitchbook cost | 8.6 (55) | 25.4 (14) | ▼ 16.8 |
| **pitchbook pricing** | 25.9 (27) | 53.7 (6) | ▼ 27.8 |
| pitchbook price | 21.1 (23) | 44.2 (10) | ▼ 23.1 |
| how much does a pitchbook subscription cost | 2.7 (19) | 29.0 (4) | ▼ 26.3 |
| **pitchbook cost** | 29.8 (18) | 59.2 (9) | ▼ 29.4 |
| pitchbook price per month | 11.1 (14) | 28.8 (5) | ▼ 17.7 |
| how much is a pitchbook subscription | 5.9 (21) | 22.3 (4) | ▼ 16.4 |
| pitchbook pricing individual | 8.8 (8) | 48.7 (6) | ▼ 39.9 |
| Ahrefs organic keywords for the URL (US) | #1 "pitchbook subscription cost" (800/mo) and #1 "how much does a pitchbook subscription cost"; ~37 visits/mo (Oct 1) | 1 keyword: #1 "how much does a pitchbook subscription cost" (60/mo), 1 visit/mo (Nov 12) | ▼ |
| AI Overview citation ("pitchbook pricing") | not cited | not cited (cites pitchbook.com/pricing, investordatarooms.com, outsales.ai, clay.com) | not earned |

**Weekly trend (GSC, page level):**

| Week of | Impressions | Avg pos | Note |
|---|---|---|---|
| Aug 24 | 1,504 | 10.1 | pre-update |
| Sep 14 | 143 | 17.8 | core update |
| Sep 21 | 127 | 17.5 | |
| Sep 28 | 101 | 16.8 | cycle 2 shipped Oct 1 (deploy 50e6fc6) |
| Oct 5 | 83 | 33.3 | |
| Oct 12 | 54 | 27.7 | |
| Oct 19 | 61 | 40.8 | |
| Oct 26 | 17 | 50.5 | |
| Nov 2 | 43 | 54.7 | |

**Keyword metrics (Ahrefs, US, 2026-11-13):** pitchbook pricing 20,000/mo (KD 4, CPC $12, TP 4,800); pitchbook cost 2,200 (KD 17); how much does pitchbook cost 450 (KD 0); pitchbook subscription cost 150 (KD 5); how much is pitchbook 90; pitchbook price per month 90. AI Overview on every head variant.

**Control pages, same weeks (GSC):** carta-pricing, not edited between Oct 1 and Nov 11, recovered (Sep 28: 77 impr, pos 15.8 → Nov 2: 230, pos 12.5). amplitude-pricing recovered to ~294 impr/week (its Nov 12 proposal). But pipedrive-alternatives (pos 58 → 89) and salesforce-cost (pos 55 → 71) also slid in October and November. So the decline is not unique to this page.

### SERP composition change (Ahrefs SERP for "pitchbook pricing", US, updated 2026-11-11)

| Pos | URL | DR | RDs | vs Oct 1 |
|---|---|---|---|---|
| 1 | AI Overview: cites pitchbook.com/pricing, investordatarooms.com/pitchbook-pricing, outsales.ai/blog/pitchbook-vs-crunchbase, clay.com/blog/crunchbase-vs-pitchbook | | | |
| 2 | pitchbook.com/pricing | 85 | 67 | held |
| 3 | reddit r/startups thread (+2 sitelinks) | 95 | 4 | held |
| 4 | failory.com/blog/pitchbook-pricing (updated Jan 2024, 525 words) | 75 | 16 | up |
| 5 | PAA: Can I use PitchBook for free? / Is there a free alternative? / Is a PitchBook worth it? / Can ChatGPT access PitchBook? | | | |
| 6 | leadloft.com/vs/pitch-book (vendor page, 492 words) | 40 | 1 | **new** |
| 7 | clay.com/blog/crunchbase-vs-pitchbook | 81 | 7 | held |
| 8 | slidegenius.com FAQ page | 50 | 1 | held |
| 9 | pitchbook.com | 85 | 8,040 | held |
| 10 | outsales.ai/blog/pitchbook-vs-crunchbase (published Sep 29, 2026) | 36 | 0 | **new** |
| 11 | itqlick.com/pitchbook/pricing | 60 | 3 | down from ~6 |

Dropped out of the top 10 since Oct 1: about.tagnifi.com, pitchbook.com API page, alpha-sense.com compare. On "how much is pitchbook" (SERP updated Oct 22) investordatarooms.com (DR 23, 0 referring domains, published Sep 14, 2026) ranks #9. Startup Yeti (DR 62) is absent from both. Three pages with DR 23 to 40 and 0 to 1 referring domains rank or are cited, so authority is not the constraint.

### Drift attribution

The only edits to the post since the cycle-2 baseline were mine: the cycle-2 recovery pass (Oct 1) and one Amplitude internal link (Oct 2). No post-template change reached production until 5805bd7 (Nov 12, FAQPage JSON-LD and a visible Updated date), after the decline. The rendered page is technically clean: HTTP 200, canonical to itself, `index, follow`, 1 H1, 11 H2s, FAQPage JSON-LD rendered with all 10 questions, title and meta as intended. Attribution is therefore **ambiguous, not clean**. The slide started the week after cycle 2 shipped, which points at the edit. But two other pages that cycle 2 did not touch (pipedrive-alternatives, salesforce-cost) slid over the same weeks, and two new low-authority pages entered this SERP in late September, which points at Google. No single edit is identifiable as the cause, so `loss-revert` does not apply. Reverting to the July 24 revision would also restore the dead Vendr links and the wrong "no free trial" answer.

### Verdict narrative

The cycle-2 hypothesis (re-sourcing, the free-trial fix, a real meta description and add-on/FAQ coverage would bring "pitchbook pricing" and "pitchbook cost" back to positions 8 to 10 and weekly impressions above 1,000 within 2 to 8 weeks) failed outright. Both head terms halved again (25.9 → 53.7 and 29.8 → 59.2), and the long tail that had survived the core update collapsed: "how much is pitchbook" went from 1.9 to 58.5, "pitchbook subscription cost" from 3.8 to 48.6. Weekly impressions are about 40, not 1,000. Clicks were 0 before and after, so the page has not produced traffic since August.

Three cycles in, the page's rank has tracked Google's re-weighting, not our edits. It peaked at a lower word count (1,688), and it is already 2× the length of the measurable competitors that now outrank it. The Amplitude hypothesis (dated summary tables and extractable facts are the constraint) does not hold here: only 1 of the 5 scraped competitors has an at-a-glance block, 2 of the 3 third-party pages cited in the AI Overview have none, and this page already carries three price tables. What the cited pages share is a September 2026 publish date and a seat-based pricing explanation. investordatarooms.com still cites the stale "114 Vendr contracts", so stale numbers alone are not what Google punishes. I can't find another on-page lever with competitor-backed evidence behind it.

**On-page work has hit its ceiling for this URL.** I am not proposing another optimization cycle. This review did find ten factual problems on the live page (section 2, "Accuracy findings"), including the page's central claim about how PitchBook is priced, which Morningstar's own 10-K contradicts. Those should be fixed whatever happens to rankings, because a pricing page that misstates pricing is a trust liability, and it is the only part of the page that the AI Overview could cite. Confidence in the ceiling call: medium. 43 days is a fair test, and both trend directions (head and long tail) agree. The unknown is whether Google's late-September SERP reshuffle is still settling.

**Recommendation: `loss-pivot`.** The pivot is to stop optimizing this URL. Ship the accuracy fixes in section 3 only: no title, meta, structure or new-section changes. Then re-check once in 6 weeks and retire the URL from the optimizer if it is still worse than position 40. Spend the effort on alternatives-format pages, which held through the update.

---

## 2. Gap analysis

### Evidence quality

- **Target page:** live raw content via WP REST (`context=edit`, fetched twice on 2026-11-13, identical, modified 2026-10-02T10:14:34), plus the rendered HTML of https://www.startupyeti.com/startup/the-cost-of-pitchbook (1 H1, 11 H2s including template headings, schema types Article, WebPage, BreadcrumbList, Person, Organization, ImageObject, FAQPage with 10 Questions). Raw content has **no embedded FAQPage `<script>`**, so nothing to delete. 2,310 words (raw-content count).
- **Competitors:** 5 raw scrapes on 2026-11-13: investordatarooms.com, outsales.ai, failory.com, clay.com, leadloft.com. itqlick.com and slidegenius.com returned 403 to a plain fetch and were not scraped (not worked around). Reddit not scraped (UGC thread).
- **Official sources:** pitchbook.com/pricing and pitchbook.com (403 to fetch; read in the built-in browser, raw text and DOM attributes). Morningstar FY2025 10-K on sec.gov (WebFetch with verbatim quotes requested, so medium-high confidence). dealroom.co/pricing (raw HTML including its seat-price table; the browser hit a Cloudflare challenge, not bypassed). Crunchbase checkout pricing page (browser screenshot, visual read). Vendr Preqin page and the archived Vendr PitchBook snapshot (raw HTML).

### Quick score: your page vs the five scraped competitors

| Factor | Your page | Competitors | Verdict |
|---|---|---|---|
| Title | "PitchBook Pricing in 2026: What 100+ Buyers Pay \| Startup Yeti" | IDR "PitchBook Pricing in 2026: How Much Does It Actually Cost?"; Failory "Here's What 8 Customers Pay" | On par. No change. |
| Meta (WP excerpt, 156 chars) | 101 contracts, median $32,000, $20,000 one seat, up to $125,000 | n/a | Accurate (archive re-verified). No change. |
| Word count | 2,310 | IDR 1,859 · outsales ~1,700 · Failory 525 · LeadLoft 492 (avg 1,144); Clay's article body could not be separated from ~100 blog-card teasers on the page | Ahead, 2× |
| Visible date | Updated October 2, 2026 (template since Nov 12) | IDR Sep 14, 2026; outsales Sep 29, 2026; Clay and LeadLoft "2026" in title; Failory Jan 2024 | On par |
| At-a-glance / key-takeaways block | None | 1 of 5 (outsales) | Not the constraint (see verdict) |
| Price tables | 3 | IDR 1, outsales 1, Clay 2 (Crunchbase prices), Failory 0, LeadLoft 0 | Ahead |
| FAQ | 10 | IDR 6, outsales 5, Clay 4, Failory 3, LeadLoft 0 | Ahead |
| Internal links out | 6 (3 with trailing slash) | n/a | Fix slashes |
| Internal links in | 8 posts (salesforce-cost, hubspot-alternatives, carta-pricing, amplitude-pricing, pros-cons-of-angel-investors-in-startup-funding, financial-reporting-in-strategic-decision-making, startup-insurance-101, marketing-authenticity) | n/a | Fine, preserve |

### Subtopic coverage (5 competitors: investordatarooms, outsales, Failory, Clay, LeadLoft)

| Subtopic | Competitors covering | Your page |
|---|---|---|
| PitchBook doesn't publish prices, quote-only | 4/5 (IDR, outsales, Failory, Clay) | Covered |
| Is PitchBook worth it | 4/5 (IDR, Failory, Clay, LeadLoft) | Covered |
| Crunchbase / alternatives comparison | 4/5 (IDR, outsales, Clay, LeadLoft) | Covered (prices stale, see accuracy) |
| Specific dollar figures | 3/5 (IDR, Failory, LeadLoft); outsales refuses to print any | Covered (three internal contradictions, see accuracy) |
| Pricing is per seat / per user | 3/5 (outsales, IDR, Failory) | **Wrong framing**: page says "modular", primary sources say per licensed user |
| Add-ons: API, data feeds, CRM integration | 3/5 (outsales, IDR, Clay) | Covered (API mechanism wrong, see accuracy) |
| Firm type as a price driver | 2/5 (outsales, IDR) | Partial (driver 4), fixed by B8 |
| Free trial | 2/5 (IDR, Clay) | Covered, correct |
| Negotiation tactics | 1/5 (IDR) | Covered, ahead |
| Renewal increases | 1/5 (IDR) | Covered, ahead |
| Key takeaways block at top | 1/5 (outsales) | Missing. Not proposed: one competitor's pattern is not evidence |

Coverage is not the gap. Every subtopic covered by 2 or more competitors is already on the page. The gaps are accuracy gaps.

### Accuracy findings (fix now, high confidence unless marked)

1. **Pricing basis is wrong.** The page says PitchBook is "modular" with paid add-on modules for PE, VC, M&A, real estate, public markets and credit (driver 1, lever 3, two FAQs). Morningstar's FY2025 10-K: "Pricing for the PitchBook platform is primarily based on the number of licensed users, with customized pricing available for large enterprises, boutique firms, and startup clients." PitchBook's pricing page names seats, firm type and premium offerings (Direct Data, CRM Integration). Fixed by B4, B8, B23, F1, F8, F10.
2. **API pricing mechanism wrong.** The page says "priced by call volume"; the 10-K says "Direct data products, including APIs and data feeds, are priced according to data volume." The enterprise paragraph says enterprise deals "typically include ... API access". B7, B11, B12, F4.
3. **Coverage counts outdated.** "Over 3 million companies, 130,000+ investors" vs the homepage's 14,272,539 companies, 3,316,660 deals, 653,235 investors and 176,914 funds. B2.
4. **Three contradictory headline ranges.** $12,000 to $70,000+ (opening sentence), $20,000 to $125,000 (next sentence), $15,000 to $25,000 "minimum" single seat (worth-it section). B4, B19.
5. **Unsourced tables.** Single-seat table ($15,000 to $20,000; $20,000 to $30,000 "with add-on modules") and team table (3/5/10 seats) match no cited source. B5, B6.
6. **"15 to 30% lower annual pricing according to Vendr's procurement data"** is not in the archived Vendr snapshot. Vendr's live Preqin page (Feb 2026) has it as "15–30% below initial quote". B9, B21.
7. **Comparison table labelled "verified" holds two invented figures.** CB Insights "$100,000+" and S&P Capital IQ "$20,000 to $50,000 (est.)" have no source, and the page's own footnote says both are custom-quote only. B13, B14.
8. **Stale competitor prices.** Preqin (Vendr now median $49,334, $27,674 to $77,221). Dealroom (now per-seat with a 3-seat minimum: €12,600 / €17,000). Crunchbase Pro ($588 is a first-year introductory price; the standard annual rate is $79 a month). B14 to B18.
9. **Unsupported claims.** "Get 80% of what they need from Crunchbase" (invented figure), "Q4 ... will almost always secure a better discount", "quarterly billing usually carries a higher effective annual rate" (Failory's one quarterly data point, $22,500 for 3 seats, sits inside the $18,000 to $24,000 annual range). B19, B22, F3, F9.
10. **Intro promises "what PitchBook costs in 2026"** from a June 2025 dataset. B1 now leads with the two 2026-dated sources and keeps the archive for the median and range.

**Stale prices found:** Preqin (all three figures), Dealroom Premium (€12,500 → €12,600, and both tiers are now 3-seat minimums), Crunchbase Pro ($588 is first-year only), PitchBook coverage counts. **Re-verified and still correct:** every figure from the archived Vendr snapshot (101 purchases, median $32,000, $20,000 to $125,000, 14% average savings, $20k single-user list, $633.33/user/month on 5 seats, 22% multi-year, 5 to 10% from a competing offer, 5% and 7% uplifts, 10% signing discount kept, Dealroom lowball, AlphaSense), Failory $12,000, TagniFi $70,000 / 10 users, the PitchBook free-trial wording.

### Secondary keywords

The GSC query set (per month, per user, individual, subscription, license, free trial, API pricing, per year) is already covered by headings and FAQs. No keyword gap with evidence behind it. No change.

### Internal links

- Out (main content): /startup/startup-financing/, /startup/amplitude-pricing, /business/financial-reporting-in-strategic-decision-making/, /startup/carta-pricing, /startup/the-anatomy-of-startup-apps/, /startup/salesforce-cost. All return 200. Three carry a trailing slash, which the house rule forbids; fixed in B3, B10, B20 (all three routes return 200 without the slash).
- In: 8 posts (listed above). Preserve.
- Candidates considered: /startup/rippling-pricing (same opaque-pricing series) would be editorially natural in the comparison intro next to the Carta link. **Skipped:** this cycle is accuracy-only.

### Voice match note

Observed voice in the page's strongest sections (negotiation levers, add-ons driver): (1) every number is attributed in-sentence to a named source ("In Vendr's procurement data, ..."); (2) short declarative verdicts ("For most early-stage startups: no, not at full price."); (3) imperative buyer advice ("get every add-on as its own line on the order form"); (4) second person, no hedging adverbs. The replacements keep the same pattern: source named in the sentence, the date in parentheses where the fact is volatile, and no new adjectives.

### Business risk check

- B8/B23 (modules → seats): no ranking risk. Removes a claim a PitchBook buyer or rep would recognise as wrong, so it helps trust.
- B5/B6/B14 (tables replaced with sourced rows): the tables get longer (~+650 words page-wide, mostly table cells). Small risk of looking denser on mobile. In return, every number can be traced.
- B1 (intro): keeps the archive disclosure but moves it out of the lead sentence. Low risk.
- CB Insights / S&P rows now say "custom quote" instead of a number: the table loses two figures readers liked. Those figures were never sourced, so the loss is correct.

### Revenue impact (honest version)

The page earned about 4 clicks a month at position 10 in August and 0 since. "pitchbook pricing" is 20,000 searches a month, but an AI Overview, PitchBook's own page and a Reddit block sit above every organic result. Even a full return to position 10 was worth only single-digit clicks, so the value is visibility and citation. The accuracy fixes carry no revenue upside I can claim. Their value is that a wrong pricing page under the Startup Yeti name stops being wrong.

### SERP preview

No title or meta change. Current preview:

```
PitchBook Pricing in 2026: What 100+ Buyers Pay | Startup Yeti
www.startupyeti.com › startup › the-cost-of-pitchbook
PitchBook pricing from 101 real contracts: median $32,000 a year, $20,000 for one seat, up to $125,000. What drives the quote, and the 5 levers that cut it.
```

### Notes outside this page's content (mention only, not proposed here)

- **Check URL Inspection in GSC by hand** for this URL (Google-selected canonical, last crawl date). The Ahrefs GSC connector does not expose it, and a long tail falling from #2 to #58 in four weeks is steep enough to rule out a crawl or canonical issue before concluding anything.
- pipedrive-alternatives (pos 58 → 89) and salesforce-cost (55 → 71) also slid from Oct 5 to Nov 9 without edits. That is worth one site-level look before the next pricing-page cycle, because it argues against attributing this page's drop to its own content.
- The memory note "alternatives pages held" is now out of date for pipedrive-alternatives.
- Vendr's PitchBook marketplace page is still 404 (re-checked 2026-11-13).

---

## 3. Proposed changes (exact, appliable)

All "Current HTML" fragments below were sliced programmatically from the live WP raw content (`GET /wp-json/wp/v2/posts?slug=the-cost-of-pitchbook&context=edit`, fetched 2026-11-13, modified 2026-10-02T10:14:34). A second fresh fetch confirmed each one occurs **exactly once**, and still exactly once after every earlier edit is applied in the order listed. Apply them top to bottom. FAQ answers are stored twice by Rank Math, once in the block's JSON attribute (F*a) and once in the rendered HTML (F*b), so each answer has both edits. The FAQ block JSON was re-parsed after the simulated apply and is valid.

Net effect (simulated apply): 2,310 → 2,960 words (mostly sourced table rows), en dashes 18 → 0, em dashes 0 → 0, headings unchanged (8 H2, 16 H3 incl. 10 FAQ), no new sections, internal links unchanged except 3 trailing slashes removed.

### Title and meta: no change

Rendered title "PitchBook Pricing in 2026: What 100+ Buyers Pay | Startup Yeti" (62 chars) and the 156-character excerpt are accurate against the re-verified archive and are not implicated by any evidence. No `T1` or `M1` this cycle.

### B1. Intro: say what the numbers are and when they date from

**Why:** The intro promises "what PitchBook costs in 2026" but every figure behind it is from a June 2025 snapshot of a page Vendr has deleted. Lead with the two 2026-dated sources (Morningstar's FY2025 10-K, Vendr's February 2026 data) and keep the archive as the source of the median and range.

**Current HTML** (occurs exactly once in live raw content):

```html
<p>Based on Vendr's procurement data covering 101 real PitchBook purchases (a June 2025 snapshot; Vendr has since removed the page, so we link the <a href="https://web.archive.org/web/20250617223802/https://www.vendr.com/marketplace/pitchbook" target="_blank" rel="noreferrer noopener">archived copy</a>), plus reported quotes from Failory and TagniFi, here's what PitchBook costs in 2026, what drives the final number, and whether it makes sense for a startup budget.</p>
```

**Replacement HTML:**

```html
<p>Here's what PitchBook costs, checked November 13, 2026. Morningstar, which owns PitchBook, says in its <a href="https://www.sec.gov/Archives/edgar/data/1289419/000128941926000013/morn-20251231.htm" target="_blank" rel="noreferrer noopener">2025 annual report</a> that platform pricing is "primarily based on the number of licensed users." Vendr's <a href="https://www.vendr.com/marketplace/preqin" target="_blank" rel="noreferrer noopener">February 2026 data</a> puts a small-team PitchBook subscription at $25,000 to $60,000 a year. Vendr's dataset of 101 PitchBook purchases (an <a href="https://web.archive.org/web/20250617223802/https://www.vendr.com/marketplace/pitchbook" target="_blank" rel="noreferrer noopener">archived June 2025 snapshot</a>; Vendr has since taken the page down) gives the median and the range, and quotes reported by Failory and TagniFi fill in the edges. Below: what drives the final number, and whether it makes sense for a startup budget.</p>
```

### B2. What Is PitchBook: replace the outdated coverage counts

**Why:** "Over 3 million companies, 130,000+ investors" is wrong today: PitchBook's homepage counts 14.2M companies and 653K investors (3.3M is its deal count). Adds Morningstar's year-end 2025 account and user counts, which are hard facts an AI Overview can lift.

**Current HTML** (occurs exactly once in live raw content):

```html
It tracks over 3 million companies, 130,000+ investors, and millions of deals and fund records globally.</p>
```

**Replacement HTML:**

```html
Its <a href="https://pitchbook.com/" target="_blank" rel="noreferrer noopener">homepage</a> counts more than 14.2 million companies, 3.3 million deals, 653,000 investors and 176,000 funds (read November 13, 2026). Morningstar reported about 10,200 PitchBook client accounts and 113,451 licensed users at the end of 2025.</p>
```

### B3. Internal link: drop trailing slash (house rule)

**Why:** House rule: relative internal links without a trailing slash. Route verified 200 without the slash.

**Current HTML** (occurs exactly once in live raw content):

```html
<a href="/startup/startup-financing/">
```

**Replacement HTML:**

```html
<a href="/startup/startup-financing">
```

### B4. Cost overview: fix the contradictory range and the 'modules' driver

**Why:** The first sentence says $12,000 to $70,000+, the next says $20,000 to $125,000, and it names "data modules" as a driver, which Morningstar's 10-K and PitchBook's pricing page do not support (pricing is by licensed users, firm type and premium add-ons). Adds Vendr's February 2026 PitchBook ranges, the only 2026-dated third-party PitchBook figures found.

**Current HTML** (occurs exactly once in live raw content):

```html
<p>PitchBook pricing ranges from $12,000 to $70,000+ per year, depending on the number of users, the data modules included, and contract length. In Vendr's procurement data (101 purchases), the median annual contract is $32,000, with contracts running from $20,000 at the low end to $125,000 at the top.
```

**Replacement HTML:**

```html
<p>Published PitchBook prices run from $12,000 a year for a single seat to $150,000 for a 5 to 15 user deployment. Seat count moves the price most, followed by firm type, contract length and paid add-ons. In Vendr's procurement data (101 purchases, archived June 2025), the median annual contract is $32,000, with contracts running from $20,000 at the low end to $125,000 at the top. Vendr's <a href="https://www.vendr.com/marketplace/preqin" target="_blank" rel="noreferrer noopener">February 2026 comparison data</a> puts a PitchBook base subscription for a small team covering one or two asset classes at $25,000 to $60,000 a year, and a 5 to 15 user, multi-asset deployment at $60,000 to $150,000.
```

### B5. Single-user section: replace the unsourced $15,000 to $20,000 claim and table with sourced, dated data points

**Why:** "$15,000 to $20,000" and the "$20,000 to $30,000 with add-on modules" row have no source. Every published single-seat figure is listed instead, with source and date, including TagniFi's $40,000 credit-union quote that the page currently omits.

**Current HTML** (occurs exactly once in live raw content):

```html
<p>Solo users (analysts, independent advisors, individual founders) typically pay $15,000–$20,000 per year for a single named seat with core access. Vendr's data puts the single-user list price at $20,000, roughly $1,667 a month, though PitchBook bills annually. On a 5-seat contract, one buyer in the same dataset reported $633.33 per user per month.</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Plan Type</th><th>Annual Cost (est.)</th></tr></thead><tbody><tr><td>1 seat, core access</td><td>$15,000–$20,000</td></tr><tr><td>1 seat, with add-on modules</td><td>$20,000–$30,000</td></tr></tbody></table></figure>
```

**Replacement HTML:**

```html
<p>Solo users (analysts, independent advisors, individual founders) see single-seat prices between $12,000 and $20,000 a year in most published data points; the outlier is a credit union quoted $40,000 for one user. A Vendr buyer note puts the single-user list price at $20,000, roughly $1,667 a month, though PitchBook bills annually. On a 5-seat contract, one buyer in the same dataset reported $633.33 per user per month.</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Single-seat data point</th><th>Annual cost</th><th>Source (date)</th></tr></thead><tbody><tr><td>Lowest reported single seat</td><td>$12,000</td><td>Failory (updated January 2024)</td></tr><tr><td>Single seat, other Failory buyers</td><td>$13,500</td><td>Failory (updated January 2024)</td></tr><tr><td>Single-user list price</td><td>$20,000</td><td>Vendr buyer note (archived June 2025)</td></tr><tr><td>"Solopreneur" plan, one user</td><td>$20,000</td><td>TagniFi (2025 update)</td></tr><tr><td>Credit union quote, one user</td><td>$40,000</td><td>TagniFi (2025 update)</td></tr></tbody></table></figure>
```

### B6. Team section: replace the unsourced seat table with the reported contracts

**Why:** The 3/5/10-seat table ($25,000 to $32,000; $35,000 to $50,000; $60,000 to $80,000) has no source and does not match the sources the page cites. Failory and TagniFi list actual team contracts; Vendr adds 2026 ranges.

**Current HTML** (occurs exactly once in live raw content):

```html
<p>Most teams are quoted a base package plus a per-seat fee for additional users. The widely reported base is around $25,000 for 3 users, with additional seats at approximately $7,000 per user per year.</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Users</th><th>Annual Cost (est.)</th></tr></thead><tbody><tr><td>3 seats (base team)</td><td>$25,000–$32,000</td></tr><tr><td>5 seats</td><td>$35,000–$50,000</td></tr><tr><td>10 seats</td><td>$60,000–$80,000</td></tr></tbody></table></figure>
```

**Replacement HTML:**

```html
<p>Most teams are quoted per seat, and the per-seat rate falls as seats are added. Failory's buyers paid $18,000 to $24,000 a year for 3 seats, and one was quoted $7,000 per seat with a claimed 5-seat minimum. TagniFi's reported contracts run from $25,000 for 2 users to $70,000 for 10.</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Team size</th><th>Annual cost</th><th>Source (date)</th></tr></thead><tbody><tr><td>2 users (valuation firm)</td><td>$25,000</td><td>TagniFi (2025 update)</td></tr><tr><td>3 seats (four buyers)</td><td>$18,000 to $24,000</td><td>Failory (updated January 2024)</td></tr><tr><td>3 users (investment bank)</td><td>$32,000</td><td>TagniFi (2025 update)</td></tr><tr><td>5 users (investment bank)</td><td>$45,000</td><td>TagniFi (2025 update)</td></tr><tr><td>7 users (private equity firm)</td><td>$60,000</td><td>TagniFi (2025 update)</td></tr><tr><td>10 users (investment bank)</td><td>$70,000</td><td>TagniFi (2025 update)</td></tr><tr><td>Small team, 1 or 2 asset classes</td><td>$25,000 to $60,000</td><td>Vendr (February 2026)</td></tr><tr><td>5 to 15 users, multi-asset</td><td>$60,000 to $150,000</td><td>Vendr (February 2026)</td></tr></tbody></table></figure>
```

### B7. Enterprise: remove 'includes API access' (contradicted by the 10-K)

**Why:** "$70,000 to $125,000" is a range nobody published, and "includes ... API access" contradicts Morningstar's 10-K (APIs and feeds are priced separately by data volume).

**Current HTML** (occurs exactly once in live raw content):

```html
<p>Large financial institutions and enterprise teams pay $70,000–$125,000 annually based on Vendr's observed contract range. At this level, pricing is heavily negotiated and typically includes full data module access, custom data exports, API access, and dedicated support.</p>
```

**Replacement HTML:**

```html
<p>Large financial institutions and enterprise teams sit at the top of the range: Vendr's archived dataset tops out at $125,000 a year, and its February 2026 data puts a 5 to 15 user, multi-asset deployment at $60,000 to $150,000. Morningstar offers customized pricing to large enterprises, but API access and data feeds are still priced separately, by data volume, so they add to these figures rather than come included.</p>
```

### B8. Price driver 1: 'Data modules' becomes 'Seats and firm type'

**Why:** The page's main claim about how PitchBook is priced (core access plus paid modules for PE, VC, M&A, real estate, public markets and credit) is contradicted by both primary sources: the 10-K says pricing is primarily per licensed user, and PitchBook's pricing page names seats, firm type and premium add-ons. Vendr's 2026 data does price scope (asset classes), so that stays.

**Current HTML** (occurs exactly once in live raw content):

```html
<p><strong>1. Data modules selected</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>PitchBook's platform is modular. Core access gives you company and investor profiles. Add-ons for private equity, VC, M&amp;A, real estate, public markets, and credit data each carry additional cost. The more modules, the higher the price.</p>
```

**Replacement HTML:**

```html
<p><strong>1. Seats and firm type</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Seats are the main lever. Morningstar's 2025 annual report says PitchBook platform pricing is "primarily based on the number of licensed users," with customized pricing for large enterprises, boutique firms and startup clients. PitchBook's own <a href="https://pitchbook.com/pricing" target="_blank" rel="noreferrer noopener">pricing page</a> names firm type as the other main input. Scope still matters: Vendr's February 2026 figures price a team on one or two asset classes well below a multi-asset deployment. The desktop app, mobile app, Excel and PowerPoint plugins and Chrome extension come with the licence at no extra charge, per the same pricing page.</p>
```

### B9. Price driver 2: correct the multi-year discount wording

**Why:** The archived Vendr snapshot does not contain "15 to 30%"; Vendr's live February 2026 data does, as a discount below the initial quote, not "lower annual pricing".

**Current HTML** (occurs exactly once in live raw content):

```html
Two and three-year commitments typically unlock 15–30% lower annual pricing according to Vendr's procurement data.
```

**Replacement HTML:**

```html
Vendr's February 2026 data puts PitchBook's typical multi-year discount at 15 to 30% below the initial quote.
```

### B10. Internal link: drop trailing slash (house rule)

**Why:** House rule. Route verified 200 without the slash.

**Current HTML** (occurs exactly once in live raw content):

```html
<a href="/business/financial-reporting-in-strategic-decision-making/">
```

**Replacement HTML:**

```html
<a href="/business/financial-reporting-in-strategic-decision-making">
```

### B11. Price driver 5: API is priced by data volume, with Vendr's 2026 add-on range

**Why:** "Priced by call volume" is not what the primary source says; the 10-K says data volume. Vendr's February 2026 data gives the first dollar-anchored figure for the add-ons.

**Current HTML** (occurs exactly once in live raw content):

```html
and API access is sold as a separate product priced by call volume. None of the three has a public rate:</p>
```

**Replacement HTML:**

```html
and Morningstar's 2025 annual report says direct data products, including APIs and data feeds, are priced by data volume. None of the three has a public rate, but Vendr's February 2026 data puts PitchBook API access and data feeds at 40 to 70% on top of the base subscription:</p>
```

### B12. Add-on list: API line matches the 10-K

**Why:** Same correction as B11.

**Current HTML** (occurs exactly once in live raw content):

```html
<li><strong>API:</strong> metered by call volume and quoted on request</li>
```

**Replacement HTML:**

```html
<li><strong>API:</strong> priced by data volume and quoted on request</li>
```

### B13. Comparison intro: drop 'verified 2026 pricing'

**Why:** Two of the six rows (CB Insights, S&P Capital IQ) were never verified and the PitchBook row is 2025 data, so "verified 2026 pricing" is false. Each row now carries its source and date instead.

**Current HTML** (occurs exactly once in live raw content):

```html
Here's how it compares to the main alternatives with verified 2026 pricing:</p>
```

**Replacement HTML:**

```html
Here's how it compares to the main alternatives, with each price dated to its source:</p>
```

### B14. Comparison table: refresh Preqin, Dealroom, Crunchbase; stop inventing CB Insights and S&P figures

**Why:** Preqin ($25,000 to $81,000, avg $51,500) is stale: Vendr now shows median $49,334, $27,674 to $77,221 (Feb 2026). Dealroom moved to per-seat pricing with a 3-seat minimum (€12,600 / €17,000). Crunchbase's $588 is a first-year introductory price. CB Insights "$100,000+" and S&P "$20,000 to $50,000 (est.)" have no source, and the page's own footnote says both are custom-quote only.

**Current HTML** (occurs exactly once in live raw content):

```html
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Platform</th><th>Annual Cost (verified)</th><th>Best For</th></tr></thead><tbody><tr><td>PitchBook</td><td>$12,000–$125,000 (median $32,000)</td><td>Full PE/VC/M&amp;A data depth</td></tr><tr><td>CB Insights</td><td>$100,000+</td><td>Enterprise tech market intelligence</td></tr><tr><td><a href="https://www.vendr.com/marketplace/preqin" target="_blank" rel="noreferrer noopener">Preqin</a></td><td>$25,000–$81,000 (avg ~$51,500)</td><td>Alternative assets, PE, real estate</td></tr><tr><td><a href="https://dealroom.co/pricing" target="_blank" rel="noreferrer noopener">Dealroom</a></td><td>€12,500–€17,000</td><td>European startup ecosystem data</td></tr><tr><td>S&amp;P Capital IQ</td><td>$20,000–$50,000 (est.)</td><td>Public markets + broader financial data</td></tr><tr><td><a href="https://about.crunchbase.com/products/crunchbase-pro" target="_blank" rel="noreferrer noopener">Crunchbase Pro</a></td><td>$588/year (annual) / $99/month</td><td>Early-stage startup tracking, individuals</td></tr></tbody></table></figure>
```

**Replacement HTML:**

```html
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Platform</th><th>Annual cost</th><th>Source (date)</th><th>Best for</th></tr></thead><tbody><tr><td>PitchBook</td><td>$12,000 to $125,000 reported (median $32,000)</td><td>Vendr (archived June 2025), Failory</td><td>Full PE/VC/M&amp;A data depth</td></tr><tr><td>CB Insights</td><td>Custom quote, not published</td><td>None public</td><td>Enterprise tech market intelligence</td></tr><tr><td><a href="https://www.vendr.com/marketplace/preqin" target="_blank" rel="noreferrer noopener">Preqin</a></td><td>$27,674 to $77,221 (median $49,334)</td><td>Vendr (February 2026)</td><td>Alternative assets, PE, real estate</td></tr><tr><td><a href="https://dealroom.co/pricing" target="_blank" rel="noreferrer noopener">Dealroom</a></td><td>€12,600 (Premium) or €17,000 (Premium Plus) at the 3-seat minimum</td><td>dealroom.co (November 2026)</td><td>European startup ecosystem data</td></tr><tr><td>S&amp;P Capital IQ</td><td>Custom quote, not published</td><td>None public</td><td>Public markets and broader financial data</td></tr><tr><td><a href="https://www.crunchbase.com/buy/select-product" target="_blank" rel="noreferrer noopener">Crunchbase Pro</a></td><td>$588 first year billed annually ($49 a month), standard annual rate $79 a month; or $99 month to month</td><td>crunchbase.com (November 2026)</td><td>Early-stage startup tracking, individuals</td></tr></tbody></table></figure>
```

### B15. Table footnote: date every source

**Why:** Matches the refreshed table.

**Current HTML** (occurs exactly once in live raw content):

```html
<p><em>Sources:&nbsp;<a href="https://web.archive.org/web/20250617223802/https://www.vendr.com/marketplace/pitchbook" target="_blank" rel="noreferrer noopener">Vendr</a>&nbsp;(PitchBook, archived June 2025 snapshot), <a href="https://www.vendr.com/marketplace/preqin" target="_blank" rel="noreferrer noopener">Vendr</a> (Preqin),&nbsp;<a href="https://dealroom.co/pricing" target="_blank" rel="noreferrer noopener">dealroom.co/pricing</a>&nbsp;(Dealroom),&nbsp;<a href="https://about.crunchbase.com/products/crunchbase-pro" target="_blank" rel="noreferrer noopener">about.crunchbase.com</a>&nbsp;(Crunchbase Pro). CB Insights and S&amp;P Capital IQ are custom-quote only.</em></p>
```

**Replacement HTML:**

```html
<p><em>Sources: <a href="https://web.archive.org/web/20250617223802/https://www.vendr.com/marketplace/pitchbook" target="_blank" rel="noreferrer noopener">Vendr</a> (PitchBook, archived June 2025 snapshot), <a href="https://www.vendr.com/marketplace/preqin" target="_blank" rel="noreferrer noopener">Vendr</a> (Preqin, last updated February 2026), <a href="https://dealroom.co/pricing" target="_blank" rel="noreferrer noopener">dealroom.co/pricing</a> (Dealroom, read November 13, 2026), <a href="https://www.crunchbase.com/buy/select-product" target="_blank" rel="noreferrer noopener">crunchbase.com</a> (Crunchbase Pro, read November 13, 2026). CB Insights and S&amp;P Capital IQ publish no prices and are custom-quote only.</em></p>
```

### B16. PitchBook vs Crunchbase: first-year price is introductory

**Why:** Crunchbase's checkout page shows $49 a month billed annually as a first-year offer (38% off a $79 standard annual rate), or $99 billed monthly. "20 to 30x cheaper" becomes a ratio that holds at the standard rate.

**Current HTML** (occurs exactly once in live raw content):

```html
costs $588/year billed annually ($49/month equivalent), or $99/month on a monthly plan. That makes it 20–30x cheaper than PitchBook's entry level.
```

**Replacement HTML:**

```html
costs $49 a month billed annually in the first year ($588), against a standard annual rate of $79 a month, or $99 a month billed monthly (<a href="https://www.crunchbase.com/buy/select-product" target="_blank" rel="noreferrer noopener">Crunchbase's pricing page</a>, November 13, 2026). Even at the standard rate it costs less than a twentieth of a $20,000 PitchBook seat.
```

### B17. PitchBook vs Dealroom: per-seat pricing and 3-seat minimum

**Why:** Dealroom's pricing page now prices per seat with a 3-seat minimum: Premium €12,600 a year and Premium Plus €17,000 a year at 3 seats, falling per seat as seats are added, with a 3-day free trial.

**Current HTML** (occurs exactly once in live raw content):

```html
At €12,500/year (Premium) or €17,000/year (Premium Plus), it offers
```

**Replacement HTML:**

```html
Its prices are public: at the 3-seat minimum, Premium costs €12,600 a year (€350 per seat a month) and Premium Plus €17,000 (about €472 per seat a month), with the per-seat rate falling as seats are added and a 3-day free trial (checked November 13, 2026). For that it offers
```

### B18. PitchBook vs Preqin: Vendr's February 2026 figures

**Why:** Stale range and average; Vendr's live page also says PitchBook's list pricing tends to run higher than Preqin's for comparable scope, which the page currently contradicts ("priced comparably").

**Current HTML** (occurs exactly once in live raw content):

```html
<p>Preqin is priced comparably to PitchBook: Vendr's data puts contracts in the $25,000–$81,000 range with an average around $51,500.
```

**Replacement HTML:**

```html
<p>Preqin is priced in the same range as PitchBook: Vendr's data (last updated February 2026) puts the median Preqin contract at $49,334 a year, with a range of $27,674 to $77,221, and notes that PitchBook's list pricing tends to run higher than Preqin's for comparable scope.
```

### B19. Is PitchBook worth it: sourced single-seat range, drop the invented 80%

**Why:** "$15,000 to $25,000 minimum" has no source and "80% of what they need" is an invented figure.

**Current HTML** (occurs exactly once in live raw content):

```html
<p>At $15,000–$25,000/year minimum for a single seat, PitchBook is priced for institutions (VC funds, PE firms, investment banks) where a single deal sourced through the platform more than pays for the annual subscription. A seed-stage startup researching investors before a fundraise can get 80% of what they need from Crunchbase Pro at $588/year.</p>
```

**Replacement HTML:**

```html
<p>At $12,000 to $20,000 a year for a single seat, PitchBook is priced for institutions (VC funds, PE firms, investment banks) where a single deal sourced through the platform more than pays for the annual subscription. A seed-stage startup researching investors before a fundraise can get most of what it needs from Crunchbase Pro at $588 for the first year.</p>
```

### B20. Internal link: drop trailing slash (house rule)

**Why:** House rule. Route verified 200 without the slash.

**Current HTML** (occurs exactly once in live raw content):

```html
<a href="/startup/the-anatomy-of-startup-apps/">
```

**Replacement HTML:**

```html
<a href="/startup/the-anatomy-of-startup-apps">
```

### B21. Lever 1: multi-year discount wording

**Why:** Same correction as B9.

**Current HTML** (occurs exactly once in live raw content):

```html
<br>Two and three-year commitments typically unlock 15–30% lower annual pricing.
```

**Replacement HTML:**

```html
<br>Two and three-year commitments typically land 15 to 30% below the initial quote, per Vendr's February 2026 data.
```

### B22. Lever 2: keep the Q4 advice, drop the unsupported 'almost always'

**Why:** The calendar fiscal year is verifiable (Morningstar's 10-K covers the year ended December 31); "will almost always secure a better discount" is not. The one supporting data point in Vendr's notes is cited instead.

**Current HTML** (occurs exactly once in live raw content):

```html
PitchBook operates on a calendar-year fiscal cycle. In October and November, sales reps are under pressure to hit annual targets, which tilts the negotiation toward the buyer. A company that schedules its renewal or first contract in Q4 will almost always secure a better discount than the same company negotiating in March or April.
```

**Replacement HTML:**

```html
PitchBook's parent, Morningstar, runs on a calendar fiscal year (its annual report covers the year ended December 31), so October to December is when annual sales targets close. Treat that as leverage, not a guarantee: the clearest example in Vendr's buyer notes is a multi-year deal that came with free service for the rest of the calendar year.
```

### B23. Lever 3: seats and add-ons, not modules

**Why:** Rests on the same unsupported modules premise as driver 1. Rewritten around the levers the primary sources name: licensed users and the premium add-ons.

**Current HTML** (occurs exactly once in live raw content):

```html
<p><strong>Lever 3: Narrow your module scope before the first sales call.</strong><br>Buyers who arrive at the negotiation already knowing which modules they won't use can cut scope before price becomes the conversation. Sales teams will often add modules back at a discount once a base contract is agreed, but starting narrow gives you something to trade.</p>
```

**Replacement HTML:**

```html
<p><strong>Lever 3: Fix your seat count and add-ons before the first sales call.</strong><br>PitchBook prices mainly by licensed user, so decide who needs a full seat before the demo, not after. Do the same for Direct Data, CRM Integration and API access, which are quoted on top of the licence. Starting narrow gives you something to trade if the rep offers to add seats or add-ons back at a discount.</p>
```

### F1a. FAQ 'How much does PitchBook cost for one user?' (block JSON)

**Why:** Same unsourced range and modules premise as B5/B8.

**Current HTML** (occurs exactly once in live raw content):

```html
"content":"A single-seat PitchBook subscription typically costs $15,000–$20,000 per year depending on the data modules included.
```

**Replacement HTML:**

```html
"content":"Most published single-seat PitchBook prices fall between $12,000 and $20,000 a year, and PitchBook prices mainly by number of users.
```

### F3a. FAQ 'How much is PitchBook per month?' (block JSON)

**Why:** "Quarterly billing usually carries a higher effective rate" has no source; Failory's one quarterly-billing data point sits inside the annual range.

**Current HTML** (occurs exactly once in live raw content):

```html
"content":"PitchBook bills annually; there is no monthly plan. A $20,000 single seat works out to roughly $1,667 a month, and one 5-seat buyer in Vendr's data reported $633.33 per user per month. Quarterly billing exists but usually carries a higher effective annual rate.
```

**Replacement HTML:**

```html
"content":"PitchBook bills annually; there is no monthly plan. A $20,000 single seat works out to roughly $1,667 a month, and one 5-seat buyer in Vendr's data reported $633.33 per user per month. Quarterly billing is possible: one 3-seat buyer in Failory's data paid $22,500 a year on quarterly terms, inside the $18,000 to $24,000 other 3-seat buyers paid.
```

### F4a. FAQ 'How much does the PitchBook API cost?' (block JSON)

**Why:** Same correction as B11.

**Current HTML** (occurs exactly once in live raw content):

```html
"content":"PitchBook sells API access as a separate product, priced by call volume, with no public rate.
```

**Replacement HTML:**

```html
"content":"PitchBook prices API access and data feeds by data volume, according to Morningstar's 2025 annual report, and publishes no rate. Vendr's February 2026 data puts them at 40 to 70% on top of the base subscription.
```

### F8a. FAQ 'Is PitchBook pricing negotiable?' (block JSON)

**Why:** Modules premise.

**Current HTML** (occurs exactly once in live raw content):

```html
"content":"Yes. PitchBook's quoted price is rarely the final price. Multi-year commitments, competing quotes, and reduced module packages are the standard levers.
```

**Replacement HTML:**

```html
"content":"Yes. PitchBook's quoted price is rarely the final price. Multi-year commitments, competing quotes, and fewer seats or add-ons are the standard levers.
```

### F9a. FAQ 'How does PitchBook billing work?' (block JSON)

**Why:** Same unsourced quarterly-billing claim as F3.

**Current HTML** (occurs exactly once in live raw content):

```html
"content":"PitchBook contracts are typically billed annually. Quarterly billing options exist but usually come at a higher effective annual rate.
```

**Replacement HTML:**

```html
"content":"PitchBook contracts are typically billed annually, and Failory's buyers report that only annual licences are offered. Quarterly billing is possible: one Failory buyer paid $22,500 a year for 3 seats on quarterly terms.
```

### F10a. FAQ 'What is the cheapest PitchBook plan?' (block JSON)

**Why:** Failory's $12,000 data point says nothing about "core access"; that phrase belongs to the modules premise.

**Current HTML** (occurs exactly once in live raw content):

```html
"content":"The lowest reported PitchBook pricing for an individual seat with core access is about $12,000 per year
```

**Replacement HTML:**

```html
"content":"The lowest reported PitchBook pricing for an individual seat is about $12,000 per year
```

### F1b. FAQ 'How much does PitchBook cost for one user?' (rendered HTML)

**Why:** Same edit, rendered copy.

**Current HTML** (occurs exactly once in live raw content):

```html
<div class="rank-math-answer">A single-seat PitchBook subscription typically costs $15,000–$20,000 per year depending on the data modules included.
```

**Replacement HTML:**

```html
<div class="rank-math-answer">Most published single-seat PitchBook prices fall between $12,000 and $20,000 a year, and PitchBook prices mainly by number of users.
```

### F3b. FAQ 'How much is PitchBook per month?' (rendered HTML)

**Why:** Same edit, rendered copy.

**Current HTML** (occurs exactly once in live raw content):

```html
<div class="rank-math-answer">PitchBook bills annually; there is no monthly plan. A $20,000 single seat works out to roughly $1,667 a month, and one 5-seat buyer in Vendr's data reported $633.33 per user per month. Quarterly billing exists but usually carries a higher effective annual rate.
```

**Replacement HTML:**

```html
<div class="rank-math-answer">PitchBook bills annually; there is no monthly plan. A $20,000 single seat works out to roughly $1,667 a month, and one 5-seat buyer in Vendr's data reported $633.33 per user per month. Quarterly billing is possible: one 3-seat buyer in Failory's data paid $22,500 a year on quarterly terms, inside the $18,000 to $24,000 other 3-seat buyers paid.
```

### F4b. FAQ 'How much does the PitchBook API cost?' (rendered HTML)

**Why:** Same edit, rendered copy.

**Current HTML** (occurs exactly once in live raw content):

```html
<div class="rank-math-answer">PitchBook sells API access as a separate product, priced by call volume, with no public rate.
```

**Replacement HTML:**

```html
<div class="rank-math-answer">PitchBook prices API access and data feeds by data volume, according to Morningstar's 2025 annual report, and publishes no rate. Vendr's February 2026 data puts them at 40 to 70% on top of the base subscription.
```

### F8b. FAQ 'Is PitchBook pricing negotiable?' (rendered HTML)

**Why:** Same edit, rendered copy.

**Current HTML** (occurs exactly once in live raw content):

```html
<div class="rank-math-answer">Yes. PitchBook's quoted price is rarely the final price. Multi-year commitments, competing quotes, and reduced module packages are the standard levers.
```

**Replacement HTML:**

```html
<div class="rank-math-answer">Yes. PitchBook's quoted price is rarely the final price. Multi-year commitments, competing quotes, and fewer seats or add-ons are the standard levers.
```

### F9b. FAQ 'How does PitchBook billing work?' (rendered HTML)

**Why:** Same edit, rendered copy.

**Current HTML** (occurs exactly once in live raw content):

```html
<div class="rank-math-answer">PitchBook contracts are typically billed annually. Quarterly billing options exist but usually come at a higher effective annual rate.
```

**Replacement HTML:**

```html
<div class="rank-math-answer">PitchBook contracts are typically billed annually, and Failory's buyers report that only annual licences are offered. Quarterly billing is possible: one Failory buyer paid $22,500 a year for 3 seats on quarterly terms.
```

### F10b. FAQ 'What is the cheapest PitchBook plan?' (rendered HTML)

**Why:** Same edit, rendered copy.

**Current HTML** (occurs exactly once in live raw content):

```html
<div class="rank-math-answer">The lowest reported PitchBook pricing for an individual seat with core access is about $12,000 per year
```

**Replacement HTML:**

```html
<div class="rank-math-answer">The lowest reported PitchBook pricing for an individual seat is about $12,000 per year
```

### S1. Sources list: add Morningstar's 10-K, date the Preqin source

**Why:** Every new primary source should be in the list.

**Current HTML** (occurs exactly once in live raw content):

```html
<li><a href="https://pitchbook.com/pricing" target="_blank" rel="noreferrer noopener">PitchBook pricing page</a>&nbsp;(official)</li>
```

**Replacement HTML:**

```html
<li><a href="https://pitchbook.com/pricing" target="_blank" rel="noreferrer noopener">PitchBook pricing page</a>&nbsp;(official)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.sec.gov/Archives/edgar/data/1289419/000128941926000013/morn-20251231.htm" target="_blank" rel="noreferrer noopener">Morningstar, Inc. Form 10-K for fiscal 2025</a>&nbsp;(PitchBook's pricing basis, client accounts and licensed users)</li>
```

### S2. Sources list: Preqin entry dated and described

**Why:** Vendr's Preqin page is now also the source for PitchBook's 2026 ranges.

**Current HTML** (occurs exactly once in live raw content):

```html
<li><a href="https://www.vendr.com/marketplace/preqin" target="_blank" rel="noreferrer noopener">Preqin Pricing Data, Vendr</a></li>
```

**Replacement HTML:**

```html
<li><a href="https://www.vendr.com/marketplace/preqin" target="_blank" rel="noreferrer noopener">Preqin Pricing Data, Vendr</a>&nbsp;(last updated February 2026; includes Vendr's PitchBook vs Preqin price comparison)</li>
```


---

## 4. Claim ledger: every new or changed figure, with source and fetch date

All fetched 2026-11-13.

| Figure / claim | Used in | Source | Method |
|---|---|---|---|
| PitchBook platform pricing "primarily based on the number of licensed users, with customized pricing available for large enterprises, boutique firms, and startup clients" | B1, B7, B8, B23, F1 | https://www.sec.gov/Archives/edgar/data/1289419/000128941926000013/morn-20251231.htm (Morningstar FY2025 10-K) | WebFetch, verbatim quote requested (medium-high confidence) |
| "Direct data products, including APIs and data feeds, are priced according to data volume" | B7, B11, B12, F4 | same 10-K | WebFetch, verbatim |
| About 10,200 client accounts and 113,451 licensed users as of December 31, 2025 | B2 | same 10-K ("As of December 31, 2025, we served approximately 10,200 client accounts and 113,451 licensed users.") | WebFetch, verbatim |
| Morningstar fiscal year ends December 31 | B22 | same 10-K ("For the fiscal year ended December 31, 2025") | WebFetch, verbatim |
| 14,272,539 companies; 3,316,660 deals; 653,235 investors; 176,914 funds | B2 | https://pitchbook.com/ (counter `data-value` attributes, each mapped to its label) | Built-in browser, DOM read (raw); curl/WebFetch 403 |
| Pricing varies by seats and firm type; Direct Data and CRM Integration are premium offerings; desktop, Mobile app, Excel and PowerPoint plugins and Chrome extension complimentary; free trial on request | B8, (existing driver 5 and FAQ unchanged) | https://pitchbook.com/pricing | Built-in browser, page text (raw) |
| Vendr Feb 2026, PitchBook: base subscription (small team, 1 to 2 asset classes) $25,000 to $60,000; mid-sized (5 to 15 users, multi-asset) $60,000 to $150,000; API access and data feeds +40 to 70% of base; multi-year discount 15 to 30% below initial quote; PitchBook list pricing tends to be higher than Preqin's for comparable scope | B1, B4, B6, B7, B8, B9, B11, B18, B21, F4 | https://www.vendr.com/marketplace/preqin ("Preqin vs. PitchBook" table; page "Last updated: February 2026") | curl raw HTML. **Medium confidence:** directional ranges from one Vendr comparison table on a competitor's page; Vendr labels them "directional" |
| Preqin median $49,334; low $27,674; high $77,221 | B14, B18 | same | curl raw |
| Vendr archive: 101 purchases, median $32,000, $20,000 to $125,000, 14% average savings, "$20k list pricing for a single user", "$633.33/month per user for 5 users", 22% multi-year off list + free service for rest of calendar year | B1, B4, B5, B7, B14, B22 (re-verified, unchanged) | https://web.archive.org/web/20250617223802/https://www.vendr.com/marketplace/pitchbook | curl raw |
| Failory: $12,000 and $13,500 (x2) for 1 seat; $18,000, $22,500 (quarterly billing), $24,000, $20,000 (2-year, after a $25,000 quote) for 3 seats; $7,000/seat with a claimed 5-seat minimum; "Only annual licenses are offered"; updated January 10, 2024 | B5, B6, F3, F9 | https://www.failory.com/blog/pitchbook-pricing | curl raw |
| TagniFi (2025 update): credit union quoted $40,000 for 1 user; IB 3 users $32,000; PE 7 users $60,000; IB 5 users $45,000; valuation firm 2 users $25,000; IB 10 users $70,000; "solopreneur" plan $20,000 for one user | B5, B6 | https://about.tagnifi.com/pitchbook-reviews-features-pricing-and-alternatives/ | curl raw |
| Dealroom: minimum 3 seats; Premium €12,600/yr and Premium Plus €17,000/yr at 3 seats (€350 and ~€472 per seat a month, computed); per-seat rate falls with seats; 3-day free trial, no card | B14, B15, B17 | https://dealroom.co/pricing (rendered text plus inline seat table `premium: [[3, 12600] ...]`, `plus: [[3, 17000] ...]`) | curl raw; browser blocked by Cloudflare challenge, not bypassed |
| Crunchbase Pro: $49/month billed annually, "Save 38% on Annual first Year", standard $79.00 struck through; or $99/month billed monthly; "Try annual free" | B14, B15, B16, B19 | https://www.crunchbase.com/buy/select-product | Built-in browser screenshot (visual read, medium-high confidence). $588 = $49 × 12 (arithmetic) |
| "Less than a twentieth of a $20,000 seat" at the standard rate | B16 | $79 × 12 = $948; $948 × 20 = $18,960 < $20,000 | arithmetic |
| Vendr's PitchBook marketplace page is gone | B1 (existing disclosure) | https://www.vendr.com/marketplace/pitchbook | curl: 404 |

**Removed as unsourced:** "$12,000 to $70,000+" range, single-seat "$15,000 to $20,000 core / $20,000 to $30,000 with add-on modules", team table "$25,000 to $32,000 / $35,000 to $50,000 / $60,000 to $80,000", "base around $25,000 for 3 users", enterprise "$70,000 to $125,000", the modules premise, "includes API access", CB Insights "$100,000+", S&P Capital IQ "$20,000 to $50,000 (est.)", "80% of what they need", "will almost always secure a better discount", "quarterly billing usually carries a higher effective annual rate", "20 to 30x cheaper", "3 million companies, 130,000+ investors".

**Still unverified on the page, untouched:** academic/nonprofit discounts and free university access (driver 4, FAQ "Can you get PitchBook for free?"); "short-term access, which they occasionally offer to startups"; "Dealroom is PitchBook's closest affordable competitor"; the PitchBook vs Crunchbase data-sourcing paragraph; the "Where PitchBook earns its cost" bullets; G2 source link (403 to fetch, not checked).

---

## 5. For the Stage 5 log entry (append after approval)

**Cycle:** 3 — 2026-11-13 (review, `loss-pivot`: on-page ceiling reached, accuracy-only)

**Fresh metrics vs baseline (for the log table):**

| Keyword | Cycle 2 (Sep 3 to 30) | Cycle 3 (Oct 16 to Nov 12) | Δ |
|---|---|---|---|
| pitchbook pricing | 25.9 (27 impr) | 53.7 (6) | ▼ 27.8 |
| pitchbook cost | 29.8 (18) | 59.2 (9) | ▼ 29.4 |
| how much is pitchbook | 1.9 (221) | 58.5 (2) | ▼ 56.6 |
| pitchbook subscription price | 4.6 (112) | 46.0 (1) | ▼ 41.4 |
| pitchbook subscription cost | 3.8 (105) | 48.6 (5) | ▼ 44.8 |
| how much does pitchbook cost | 8.6 (55) | 25.4 (14) | ▼ 16.8 |
| how much does a pitchbook subscription cost | 2.7 (19) | 29.0 (4) | ▼ 26.3 |
| pitchbook price per month | 11.1 (14) | 28.8 (5) | ▼ 17.7 |

Page: 954 impr / 0 clicks / pos 13.1 → 153 impr / 0 clicks / pos 44.8. Weekly impressions ~101 (week of Sep 28) → ~43 (week of Nov 2). Ahrefs keywords for URL: 2 at #1, ~37 visits → 1 at #1, 1 visit. AI Overview: not cited → not cited (pitchbook.com, investordatarooms.com, outsales.ai, clay.com cited).

**SERP composition:** new: leadloft.com #6 (DR 40), outsales.ai #10 (DR 36, 0 RDs, published Sep 29, 2026), investordatarooms.com in the AIO and #9 on "how much is pitchbook" (DR 23, 0 RDs, published Sep 14, 2026). Out of the top 10: tagnifi, pitchbook API page, alpha-sense. ITQlick slid to #11. Ahrefs SERP updated 2026-11-11.

**Drift check:** ambiguous. The only post edits were cycle 2 (Oct 1) and the Amplitude link (Oct 2). The decline started the week after cycle 2 shipped. But pipedrive-alternatives and salesforce-cost slid over the same weeks without edits, carta-pricing and amplitude-pricing recovered, and two new low-DR competitors entered in late September. No template change reached production before Nov 12 (5805bd7).

**Verdict:** cycle-2 hypothesis disproven (head terms 26 to 30 → 54 to 59; long tail top-5 → 22 to 58; weekly impressions ~43, target was >1,000). On-page work has hit its ceiling. The page is 2× the measurable competitors' length, ahead on tables and FAQs, and covers every subtopic that 2+ competitors cover. The Amplitude "dated summary table" hypothesis is not supported for this SERP (1/5 competitors, 1/3 AIO-cited third-party pages have one).

**Hypothesis for cycle 3 (proposed):**

> This cycle is not a ranking bet. Correcting ten factual problems, including the page's central claim about how PitchBook is priced (per licensed user, per Morningstar's FY2025 10-K, not "modular"), the API pricing mechanism, outdated coverage counts, contradictory ranges, unsourced tables and stale Preqin/Dealroom/Crunchbase prices, makes every figure on the page traceable to a dated source. Expected ranking effect: none to small. If the page is still worse than position 40 on "pitchbook pricing", "pitchbook cost" and "how much does pitchbook cost" at the next review, retire this URL from the optimizer (no cycle 4). Monitor only for accuracy (Vendr refresh, Dealroom/Crunchbase price changes).

**Baseline to record for cycle 3:** page 153 impr / 0 clicks / pos 44.8 (Oct 16 to Nov 12); "pitchbook pricing" 53.7; "pitchbook cost" 59.2; "how much does pitchbook cost" 25.4; "how much is pitchbook" 58.5; Ahrefs keywords 1 (#1, 60/mo); AIO citation: no; words 2,310 (→ ~2,960 after apply); content H2 8, H3 16 (10 FAQ); internal links out 6, in 8; HEAD at review 707d4a9 (branch design-pass; origin/main 5805bd7; content lives in WordPress post 1178).

**Next review:** 2026-12-29 (6 weeks after apply). Check: the three head terms vs position 40 (retire if worse); GSC URL Inspection result; AIO citation; Vendr Preqin page still dated February 2026 or refreshed; Dealroom seat table and Crunchbase first-year offer unchanged.
