---
url: /startup/the-books-every-founder-should-read
target_keyword: startup books
site_url: https://www.startupyeti.com
country: us
first_optimized: 2026-11-13
cycles: 1
last_verdict: first-run
---

# /startup/the-books-every-founder-should-read — Optimization Log

**CMS:** WordPress headless (post 1739; edits via REST, script `scripts/apply-optimizer-proposal.mjs`)
Full proposal: `seo-notes/proposals/startup-the-books-every-founder-should-read-2026-11-13.md`.

---

## Cycle 1 — 2026-11-13

**Status:** applied (title, first-ever meta and all 10 body edits approved by Boban and applied 2026-11-13; WP modified 2025-11-03T16:09:48 → 2026-11-13T11:13:33; plus 2 incoming links via `scripts/link-founder-books.mjs`, from /marketing/positioning-statement (Crossing the Chasm) and /marketing/win-loss-analysis (The Mom Test); pre-change backup kept outside the repo). Note: the incoming links landed in the same cycle as the on-page edits, so the two levers can't be separated at review.

### Changes
- Title → "10 Startup Books and When to Read Each One"; meta written for the first time (149 chars).
- Shorter intro; "startup books" in the list H2; 10-row at-a-glance table.
- Added Crossing the Chasm, Venture Deals, Lost and Founder, Predictable Revenue (6 → 10 books; 4 new internal links out).
- 2-question FAQ; fixed High Output Management alt (Andrew Grove, not Ben Horowitz); removed stray "Version 1.0.0" caption; filled empty alts; removed 2 en dashes; 3 absolute internal links made relative. 989 → 1,833 words.

**Hypothesis.** The page's zero clicks are not a CTR problem: 98% of its impressions come from one desktop-only, non-US, likely automated query ("startup founding books 2024"). The real gap is that it does not rank for "startup books" (13,000/mo, KD 7) or its variants, because it covers 6 books where page-one editorial lists cover 10 to 38, never uses the phrase "startup books", has no meta description, and has no incoming internal links. Going to 10 books (matching the 3/5 coverage set), putting the keyword in the title/H1/H2, adding an at-a-glance table and a PAA-matched FAQ should move "startup books" from ~95 into the top 30 within 6 to 10 weeks, and produce the page's first clicks from human queries. The 734-impression query is expected to stay at 0 clicks whatever we change; it should be excluded when judging the result.

**Baseline to record** (cycle 1, 2026-11-13):

| Metric | Value | Source / window |
|---|---|---|
| Page impressions / clicks / avg pos | 748 / 0 / 7.2 | GSC 2026-10-16 to 2026-11-12 |
| Same, excluding "startup founding books 2024" | 14 / 0 / ~75 (impression-weighted) | GSC, same window |
| "startup books" | 3 impr, pos 95.7 | GSC, same window |
| "best books for founders" | 6 impr, pos 62.7 | GSC, same window |
| "startups books" / "best books on startups" | 2 impr pos 89.0 / 1 impr pos 69.0 | GSC, same window |
| Ahrefs organic keywords for the URL | none | Ahrefs US, 2026-11-12 |
| Word count (WP raw, text only) | 989 | 2026-11-13 |
| Books covered | 6 | |
| Incoming internal links | 0 of 191 published posts | WP REST, 2026-11-13 |
| Top 10 for "startup books" | reddit (2), chrisneumann.com (3), goodreads (4), news.ycombinator.com (5), amazon (6), divbyzero.com (7), steveblank.com (9) | Ahrefs SERP overview, US, latest snapshot |
| WP post modified | 2025-11-03T16:09:48 | WP REST |

**Verdict criteria for review (suggest 2027-01-08, ~8 weeks after applying):**
- **Win:** "startup books" at 30 or better, or 1+ click from any query other than "startup founding books 2024".
- **Inconclusive:** position improves but stays below 50; extend to 12 weeks, then add the two incoming links if not already done.
- **Loss:** no movement on "startup books" after 12 weeks; the next lever is authority (incoming links, internal and external), not more on-page copy.

**Git state:** not applicable. The content lives in WordPress; drift attribution next cycle should compare the WP `modified` timestamp and a fresh raw fetch against this proposal.

### Next review
2027-01-08 (~8 weeks).
