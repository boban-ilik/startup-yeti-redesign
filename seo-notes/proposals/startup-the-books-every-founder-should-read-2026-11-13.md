# /startup/the-books-every-founder-should-read: on-page proposal (cycle 1, Stages 1-3 only)

Target keyword: **startup books** (US) · Run date: 2026-11-13 · WP post id 1739 (published 2025-11-03, last modified 2025-11-03, never updated)
Status: **awaiting approval.** Nothing has been written to WordPress, `seo-notes/index.json` or `seo-notes/urls/`. No commit, no rebuild.

Every Current HTML fragment in section 3 was checked against a fresh fetch of the live WP raw content (`context=edit`, 2026-11-13) and occurs **exactly once**, including when the edits are applied in sequence (simulated with the same parsing rules as `scripts/apply-optimizer-proposal.mjs`).

**Keyword choice.** The brief named "startups books" as a top query. In GSC it has 2 impressions; the page's real query set is dominated by one synthetic-looking query (see section 1). I resolved the target to the parent topic **"startup books"** (13,000/mo US, KD 7), which "startups books", "best startup books", "best books for founders" and "books for founders" all roll up to in Ahrefs.

---

## 1. Baseline metrics

### GSC (Ahrefs GSC project 4736210), 2026-10-16 to 2026-11-12

Page total: **748 impressions, 0 clicks, avg position 7.2.** All queries with any impressions:

| Query | Impr. | Clicks | Avg pos |
|---|---|---|---|
| startup founding books 2024 | **734** | 0 | 5.8 |
| best books for founders | 6 | 0 | 62.7 |
| startup books | 3 | 0 | 95.7 |
| startups books | 2 | 0 | 89.0 |
| books on startups | 1 | 0 | 98.0 |
| book startup | 1 | 0 | 94.0 |
| best books on startups | 1 | 0 | 69.0 |

Weekly page history (weeks starting): 2026-10-19: 1 impression at position 84; **2026-10-26: 386 at 7.3; 2026-11-02: 361 at 6.9.** Before 2026-10-26 the page had effectively no search visibility since at least 2026-08-01.

Daily history for "startup founding books 2024": first impressions 2026-10-27 (15), peak 2026-11-02 (132), then 83, 57, 26, 30, 27 through 2026-11-07, the last day in the feed.

Segment checks on that query (same window):
- Device: **734 of 734 impressions are desktop.**
- Country: US 3 impressions, Japan 6. India, UK, Germany, Netherlands, Singapore, Ireland, Canada, France and Vietnam: 0 each. Where the other ~725 came from is not visible in the data I could pull.
- Site-wide, only three queries in this window have 40+ impressions at an average position of 10 or better, and all three have 0 clicks: this one, plus two on /startup/carta-pricing that read like prompts, not searches ("evaluate carta on pricing." with a trailing period, 74 impressions; "is carta worth the investment for an early-stage startup?", 67 impressions).

Ahrefs organic keywords for the URL (US, 2026-11-12): **none recorded.** The GSC table above is the whole metric basket.

### Keyword set (Ahrefs Keywords Explorer, US, pulled 2026-11-13)

| Keyword | Vol/mo | KD | CPC | Note |
|---|---|---|---|---|
| startup books | 13,000 | 7 | $0.35 | **target**; traffic potential 2,300; global 14,000 |
| books for entrepreneurs | 350 | 2 | $0.20 | parent "best books for entrepreneurs" (5,900) |
| best startup books | 250 | 3 | $0.35 | parent: startup books |
| startup founding books 2024 | 250 | n/a | n/a | global 2,800; no KD, no SERP features, no traffic potential; top countries VN 600, JP 450, CA 350, US 250, RU 200 |
| best books on startups | 200 | 0 | $0.25 | |
| business startup books | 200 | 0 | | |
| best books for founders | 50 | 0 | | parent: startup books |
| best books for startup founders | 50 | 1 | $0.35 | |
| books for founders | 20 | 0 | | |
| startups books | 10 | 12 | | |
| books every founder should read | 0 | n/a | | the current title phrase has no measured demand |

Intent (Ahrefs): informational + commercial. SERP features on "startup books": AI Overview (with sitelinks), image thumbnails, sitelinks, People Also Ask, organic shopping (book carousel).

### Top results for "startup books" (Ahrefs SERP overview, US, latest snapshot)

| Pos | URL | DR | Est. traffic | Type |
|---|---|---|---|---|
| AI Overview | cites Reddit r/startups, chrisneumann.com, divbyzero.com, Goodreads, a LinkedIn post, 3 shopping listings | | | |
| 2 | reddit.com/r/startups/... "Please suggest some books related to startups" | 95 | 2,143 | forum |
| 3 | chrisneumann.com/archives/10-books-every-founder-should-read | **26** | 1,087 | editorial list, 10 books |
| 4 | goodreads.com/shelf/show/startup | 93 | 877 | catalog |
| 5 | news.ycombinator.com/item?id=41545633 | 91 | 515 | forum |
| 6 | amazon.com/startup-books/s?k=startup+books | 96 | 357 | store |
| 7 | divbyzero.com/blog/best-startup-books/ | 68 | 504 | editorial list, 18 books |
| PAA | What are the top 5 startup books? / What business will boom in 2026? / What is the 80/20 rule for startups? / What are the top 10 startups? | | | |
| 9 | steveblank.com/books-for-startups/ | 76 | 262 | editorial list, dozens |
| 10 | organic shopping carousel (The Lean Startup, Zero to One, Startup Owner's Manual, Traction, ...) | | | |
| 11 | ohblimey.com/blog/37-books-for-startup-marketers | 32 | 139 | editorial list, 38 books |
| 12 | uschamber.com/co/grow/thrive/books-for-entrepreneurs | 89 | 1,322 | editorial list, 20 books |

The useful signal: a DR 26 personal blog with 10 books and about 1,280 words holds #3. This is a soft SERP for an editorial list.

### Revenue impact (CPC as a traffic-value proxy, not revenue)

"startup books" is 13,000/mo, but CPC is only $0.35 and traffic potential is 2,300, so most searches end on Amazon, Goodreads, the shopping carousel or the AI Overview. Ahrefs' own traffic estimates for the editorial lists give the realistic range: #7 to #9 earns about 260 to 500 visits/mo (roughly $90 to $175/mo in traffic value); #3 earns about 1,090 (about $380/mo). From position ~95 with zero incoming internal links, on-page work alone gets the page indexed for the right terms and into contention; page 1 likely also needs the internal links in section 2. Treat #7 to #9 as the ceiling for this cycle, not the forecast. Zero of that comes from the 734-impression query.

---

## 2. Gap analysis

### CTR diagnosis: the 0 clicks are not a title/meta problem

1. **98% of the impressions (734 of 748) come from one query, "startup founding books 2024", and it does not behave like human search.** It switched on overnight on 2026-10-27, it is 100% desktop, only 3 of 734 impressions are from the US, and a page-one result at average position 5.8 drew zero clicks from 734 impressions. Ahrefs lists it with 2,800 global volume but no difficulty, no SERP features and no traffic potential, with Vietnam and Japan as its top countries for an English query naming a past year. The two Carta queries with the same profile (prompt-style phrasing, page one, 0 clicks) point the same way.
2. **Most likely explanation (inference, not verified):** automated querying, either a rank tracker or scraper, or an AI tool generating search queries, rather than people choosing between results. A second possibility is that the page is shown as a citation in an AI answer surface where clicks are rare. Either way, a better title and meta will not turn those impressions into clicks, and the query has no real demand worth chasing.
3. **The real problem is ranking, not CTR.** For the queries humans type, the page sits at 62 to 98: "startup books" 95.7, "best books for founders" 62.7. It has 6 books where page-one lists have 10 to 38, the exact phrase "startup books" appears nowhere on the page, and no other Startup Yeti post links to it.
4. **Title and meta still need fixing,** because they will matter once the page reaches page one, and both are weak today:
   - Rendered title `Startup Smarts: The Books Every Founder Should Read | Startup Yeti` is **66 characters**, so Google likely cuts it before the brand, and it leads with "Startup Smarts", a phrase nobody searches. "books every founder should read" has 0 measured volume.
   - **The meta description is not set.** The WP excerpt is empty, so the route uses WordPress' auto-excerpt cut at 160 characters, which renders as `Founders are under constant pressure to find product, market fit, secure funding, manage people, and scale operations, all at once. Every decision feels high-st`. It never mentions books, cuts mid-word, and repeats the "product, market fit" typo.
   - **Above the fold, a searcher sees no book.** The first book title appears after three paragraphs (about 120 words) of general preamble. 4 of 5 competitor lists put a count in the title, and divbyzero (#7) opens with an at-a-glance list of every book.

### Quick score: your page vs the top 5 editorial lists

| Factor | Your page | Top 5 editorial lists | Verdict |
|---|---|---|---|
| Books covered | 6 | 10 / 18 / dozens / 38 / 20 | **Behind (biggest content gap)** |
| Count in title | no | 4/5 | Fix (T1) |
| "startup books" in title/H1/H2/body | 0 / 0 / 0 / 0 | title or H1 in 3/5 | Fix (T1, B2, FAQ) |
| Meta description | none set (auto-excerpt, cut mid-word) | set | **Fix (M1)** |
| At-a-glance summary near the top | no | 1/5 (divbyzero) | Fix (B2): above-the-fold answer |
| Books grouped or tagged by stage/theme | yes, "When to read" per book | 4/5 group by theme, topic or stage | Covered; our per-book stage note is the differentiator |
| Word count (main body) | 989 | ~1,280 / ~5,050 / ~6,700 / ~1,530 / ~3,500 | Behind the 10-book model (#3) by ~300 |
| FAQ | none | 1/5 ("Are startup books worth your time?") | PAA asks "What are the top 5 startup books?": add (B10) |
| Outgoing internal links | 3, all absolute with trailing slash; 1 goes through a 301 chain (/leadership/... to /team-management/...) | | Fix (B1, B3) |
| Incoming internal links | **0** (checked all 191 published posts) | | Orphan; see link audit |
| Images with correct alt | 3 of 6 (2 empty, 1 credits *High Output Management* to Ben Horowitz) | | Fix (B5, B6, B8) |
| Copy errors | "all ten books" on a 6-book page; "Version 1.0.0" caption under *Zero to One*; 2 en dashes | | Fix |

**Evidence quality:** target page checked rendered (live HTML on 2026-11-13: 1 H1, 2 content H2s, schema Article + WebPage + BreadcrumbList, no FAQPage) and in WP raw. Competitors: 5/5 editorial lists scraped raw with cf-scraper (chrisneumann.com, divbyzero.com, steveblank.com, ohblimey.com, uschamber.com) plus the Hacker News thread (#5); the Reddit thread (#2) returned empty, Goodreads and Amazon are catalogs and were not scraped. Word counts are approximate: scoped from the H1 to the end of the article body, and Steve Blank's count includes his link lists (his 135 comments excluded). Book coverage counts were matched on title text inside those scoped bodies. The SERP list is Ahrefs' latest snapshot, not a live Google check.

### Book coverage across the 5 editorial lists

| Book | Neumann (#3) | divbyzero (#7) | Steve Blank (#9) | ohblimey (#11) | US Chamber (#12) | Count | On our page |
|---|---|---|---|---|---|---|---|
| The Lean Startup | ✓ | ✓ | ✓ | ✓ | ✓ | 5/5 | yes |
| The Hard Thing About Hard Things | | ✓ | ✓ | ✓ | ✓ | 4/5 | yes |
| The Mom Test | ✓ | ✓ | | ✓ | | 3/5 | yes |
| The Startup Owner's Manual | | ✓ | ✓ | ✓ | | 3/5 | yes |
| **Crossing the Chasm** | ✓ | | ✓ | ✓ | | 3/5 | **no** |
| **Venture Deals** | ✓ | ✓ | ✓ | | | 3/5 | **no** |
| **Lost and Founder** | ✓ | ✓ | | ✓ | | 3/5 | **no** |
| **Predictable Revenue** | | ✓ | ✓ | ✓ | | 3/5 | **no** |
| The Innovator's Dilemma | ✓ | | ✓ | | | 2/5 | no |
| The Cold Start Problem | ✓ | ✓ | | | | 2/5 | no |
| Hooked | | ✓ | | ✓ | | 2/5 | no |
| Founders at Work | | ✓ | ✓ | | | 2/5 | no |
| Zero to One | | ✓ | | | | 1/5 | yes |
| High Output Management | | | | | | 0/5 | yes (differentiator) |

### Missing subtopics, by priority

**Fix now (high confidence: rendered page, raw scrapes)**
1. **Four books that 3 of 5 lists include are missing: *Crossing the Chasm*, *Venture Deals*, *Lost and Founder*, *Predictable Revenue*.** Every other title at 3/5 or more is already on the page. Adding them (B9) takes the list to 10, the same count as the DR 26 page at #3, and fills the stages the list skips today: reaching mainstream customers, the first sales hires, fundraising, and the founder's own state of mind (Neumann gives that its own "Founder Mental Health" section).
2. **No meta description, and a title that buries the keyword.** Fix T1 and M1.
3. **No answer above the fold.** Fix B1 (shorter intro) and B2 (at-a-glance table under the list H2).
4. **Accuracy errors a reader will notice:** "all ten books" on a 6-book page (resolved by B9; see dependency note), the wrong author in an image alt (B8), the "Version 1.0.0" caption (B6).

**Should fix (medium)**
5. **PAA asks "What are the top 5 startup books?"** Nothing on the page answers it. B10 adds a 2-question FAQ whose first answer is built from the coverage table above (our own counted data); the template turns it into FAQPage schema automatically.
6. **Internal links:** convert the 3 absolute links to relative, fix the 301 chain, and add 4 contextual links inside the new sections (B1, B3, B9).

**Nice to have / not proposed**
- 2/5 titles (*The Cold Start Problem*, *The Innovator's Dilemma*, *Hooked*, *Founders at Work*): not added. Going past 10 dilutes the "when to read" angle.
- Cover images for the 4 new books: the existing 6 sections each have one. Not proposed (needs assets). The new sections will be text-only unless you add covers.
- "is the most honest book ever written about building and running a company" (*Hard Thing* section) is an unsupported superlative. Flagged only.
- "books for entrepreneurs" (350/mo) and its 5,900/mo parent are a different, broader SERP (US Chamber ranks there). Not targeted.

### Secondary keyword usage
"startup books": 0 uses today; after the edits, title/H1, the list H2, the intro (as "startup books worth your hours") and the FAQ H2 and answer. "founder(s)": 12 uses today, unchanged. "best books for founders" and "books for founders" (parent: startup books) are covered by the "every founder" framing in the H2 and FAQ; I have not forced the exact phrases in.

### Internal-link audit
- **Outgoing (main content), 3:** /startup/startup-financing, /leadership/costs-of-helicopter-management (301 to /team-management/costs-of-helicopter-management), /startup/the-accelerator-advantage. All absolute with trailing slashes and `target="_blank"`. **Decision: fix all three** to relative, no trailing slash, same tab (B1, B3).
- **Add, 4, inside the new sections only:** /marketing/positioning-statement (that page credits *Crossing the Chasm* for the template), /marketing/gtm-engineer (the SDR vs GTM engineer hire, from the *Predictable Revenue* section), /startup/venture-debt (from *Venture Deals*, whose 4th edition covers bank debt), /founder-wellbeing/how-to-cope-with-stress-and-uncertainty-on-the-startup-journey (from *Lost and Founder*). All four return 200 on the live site.
- **Incoming: 0** across all 191 published posts. This is probably the largest ranking handicap and it sits outside this post. **Decision: ask before editing other pages.** Two natural sources: /marketing/positioning-statement already names "Geoffrey Moore's 1991 book Crossing the Chasm" with no link; /marketing/win-loss-analysis describes a 10-interview program where *The Mom Test* is the obvious reference. Neither edit is in section 3.

### Voice Match Note (from the six existing book sections)
- Bold "**When to read:**" lead-in, one line, no closing period, then two paragraphs per book.
- Third person about the author ("Ries argues", "Horowitz admits"), second person for the reader ("before running out of time or money", "what you've actually paid for").
- Each section names the book's signature concept (build-measure-learn, wartime CEO, management by objectives) and ends on what it changes for a founder.
- Curly apostrophes, book titles in `<em>`, author name in the H3 after a comma.
- New copy mirrors this: same H3 pattern ("7. *Title*, Author"), same "When to read" line, one named concept per book (the chasm, Cold Calling 2.0, the term sheet, growth hacking), and one closing line on what it changes for a founder. 0 em or en dashes in all replacement HTML (checked by script).

### Business Risk Check

| Edit | Ranking/search upside | Trust/conversion risk | Mitigation |
|---|---|---|---|
| T1 title/H1 | "startup books" (13,000/mo) in the title for the first time; count matches 4/5 SERP pattern | Loses the brand-voice "Startup Smarts"; close to Neumann's "10 Books Every Founder Should Read" | Primary option leads with "when to read", the page's angle; alternate keeps the slug phrase |
| M1 meta | Replaces a mid-word auto-excerpt; names 3 books | Excerpt also feeds related-post cards (cut at 100-120 chars) | First 100 chars read cleanly on their own |
| B1/B2 intro + table | An answer before the first scroll; extractable list for AI Overview | Cuts ~70 words of mood-setting copy | Keeps the original opening sentence and both links |
| B9 four new books (+~525 words) | Closes the 3/5 coverage gap; 10 books matches #3 | New claims about books | Every fact sourced in section 4; no years where sources disagree |
| B10 FAQ | Answers the PAA question with our own counts | Counts date quickly as lists change | Dated "November 2026" in the answer |

---

## 3. Proposed changes (exact, appliable)

**Dependency:** T1, M1, B1, B2 and B10 say "10" books. They assume B9 (four new books) is applied. If you reject B9: use the alternate T1 with 6, change "10" to "6" in M1, B1 and B2, drop table rows 7 to 10, and change "all ten books" in the closing paragraph to "all six books".

### T1. Title (WP post title; the route uses it for both `<title>` and the H1)

- Now: `Startup Smarts: The Books Every Founder Should Read` → rendered 66 chars with " | Startup Yeti"
**Proposed:** `10 Startup Books and When to Read Each One`
- Rendered: `10 Startup Books and When to Read Each One | Startup Yeti` (**57 chars**)
- Alternate that keeps the slug phrase: `10 Startup Books Every Founder Should Read` (57 chars rendered). Without B9: `6 Startup Books and When to Read Each One` (56).
- The slug does not change.

### M1. Meta description (WP excerpt; currently empty, so the route uses WordPress' auto-excerpt cut at 160)

- Now: no excerpt set. Rendered: `Founders are under constant pressure to find product, market fit, secure funding, manage people, and scale operations, all at once. Every decision feels high-st`
- Proposed (149 chars): `10 startup books matched to the stage you're at: The Mom Test before you build, Venture Deals before you raise, High Output Management once you hire.`
- Keyword in words 2 and 3, a number first, three named books. Related-post cards cut at 100 to 120 characters, which ends inside "Venture Deals before you raise", still readable.

### SERP preview

```
BEFORE
Startup Smarts: The Books Every Founder Should Read | Startup ...
www.startupyeti.com › startup › the-books-every-founder-should-read
Founders are under constant pressure to find product, market fit, secure funding, manage people, and scale operations, all at once. Every decision feels high-st

AFTER
10 Startup Books and When to Read Each One | Startup Yeti
www.startupyeti.com › startup › the-books-every-founder-should-read
10 startup books matched to the stage you're at: The Mom Test before you build, Venture Deals before you raise, High Output Management once you hire.
```

### Body edits (WP `content.raw`, applied top to bottom)

#### B1. Shorter intro that states what the list is; links made relative, 301 chain fixed, "product, market fit" typo fixed

**Why:** A searcher currently reads ~120 words of preamble before any book. The rewrite keeps the original opening line, puts "startup books" in the second sentence, and promises the at-a-glance table. The helicopter-management link currently goes through a 301 chain.

**Current HTML**

```html
<p>Founders are under constant pressure to find product, market fit, <a href="https://www.startupyeti.com/startup/startup-financing/" target="_blank" data-type="link" data-id="https://www.startupyeti.com/startup/startup-financing/" rel="noreferrer noopener">secure funding</a>, manage people, and scale operations, all at once. Every decision feels high-stakes, and there’s rarely time to slow down or reflect.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Between podcasts, playbooks, and endless “must-read” lists, founders are flooded with advice, much of it conflicting or disconnected from real experience. That’s why certain books stand out. They offer frameworks and lessons that hold up when things get messy: how to test ideas before burning cash, how to <a href="https://www.startupyeti.com/leadership/costs-of-helicopter-management/" target="_blank" data-type="link" data-id="https://www.startupyeti.com/leadership/costs-of-helicopter-management/" rel="noreferrer noopener">lead a team</a> through uncertainty, how to stay grounded when growth feels chaotic.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In this article, we list books that have shaped how founders build, scale, and survive the long road from idea to impact.</p>
```

**Replacement HTML:**

```html
<p>Founders are under constant pressure to find product-market fit, <a href="/startup/startup-financing">secure funding</a>, manage people and scale operations, all at once. There’s rarely time to read, so the startup books worth your hours are the ones that answer the question in front of you this month.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That’s how this list works. Each of the 10 books below comes with a “when to read” note: the stage at which its frameworks stop being theory and start saving you time and money, from testing an idea before you burn cash to learning to <a href="/team-management/costs-of-helicopter-management">lead a team</a> without hovering over it. The table gives you the whole list at a glance.</p>
```

#### B2. List H2 with the keyword, plus an at-a-glance table directly under it

**Why:** Puts all 10 books on screen before the first long section (above-the-fold fix), gives Google and AI Overviews a clean extractable list, and adds "startup books" to an H2. 1 of 5 competitors (divbyzero, #7) opens this way.

**Current HTML**

```html
<h2 class="wp-block-heading">6 Books That Help Founders Think, Lead and Scale&nbsp;</h2>
<!-- /wp:heading -->
```

**Replacement HTML:**

```html
<h2 class="wp-block-heading">10 Startup Books That Help Founders Think, Lead and Scale</h2>
<!-- /wp:heading -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Book</th><th>Author</th><th>Read it when</th></tr></thead><tbody><tr><td>1. <em>The Lean Startup</em></td><td>Eric Ries</td><td>You’re at the earliest stage of building</td></tr><tr><td>2. <em>Zero to One</em></td><td>Peter Thiel with Blake Masters</td><td>You’re defining the product vision</td></tr><tr><td>3. <em>The Hard Thing About Hard Things</em></td><td>Ben Horowitz</td><td>The company is scaling fast</td></tr><tr><td>4. <em>The Mom Test</em></td><td>Rob Fitzpatrick</td><td>Before you build anything on customer feedback</td></tr><tr><td>5. <em>The Startup Owner’s Manual</em></td><td>Steve Blank and Bob Dorf</td><td>You’ve validated the idea and need repeatable growth</td></tr><tr><td>6. <em>High Output Management</em></td><td>Andrew Grove</td><td>The team has grown past what you can manage alone</td></tr><tr><td>7. <em>Crossing the Chasm</em></td><td>Geoffrey A. Moore</td><td>Early adopters buy, but mainstream customers don’t yet</td></tr><tr><td>8. <em>Predictable Revenue</em></td><td>Aaron Ross and Marylou Tyler</td><td>You’re planning your first sales hires</td></tr><tr><td>9. <em>Venture Deals</em></td><td>Brad Feld and Jason Mendelson</td><td>Before your first term sheet</td></tr><tr><td>10. <em>Lost and Founder</em></td><td>Rand Fishkin</td><td>Your startup doesn’t look like the success stories</td></tr></tbody></table></figure>
<!-- /wp:table -->
```

#### B3. Lean Startup "When to read" link: relative, no trailing slash, same tab

**Why:** House rule (relative internal links, no trailing slash). The absolute URL with a trailing slash costs a redirect hop.

**Current HTML**

```html
<a href="https://www.startupyeti.com/startup/the-accelerator-advantage/" target="_blank" data-type="link" data-id="https://www.startupyeti.com/startup/the-accelerator-advantage/" rel="noreferrer noopener">earliest stages</a>
```

**Replacement HTML:**

```html
<a href="/startup/the-accelerator-advantage">earliest stages</a>
```

#### B4. Lean Startup: fix the loop name and remove an en dash

**Why:** "build–measure, learn loop" garbles the concept's name and contains an en dash (house rule).

**Current HTML**

```html
The book introduces the build–measure, learn loop,
```

**Replacement HTML:**

```html
The book introduces the build-measure-learn loop,
```

#### B5. Lean Startup cover: add alt text

**Why:** Empty alt today.

**Current HTML**

```html
<img src="https://www.startupyeti.com/wp-content/uploads/2025/11/The-Lean-Startup-678x1024.jpg" alt="" class="wp-image-1740"/>
```

**Replacement HTML:**

```html
<img src="https://www.startupyeti.com/wp-content/uploads/2025/11/The-Lean-Startup-678x1024.jpg" alt="The Lean Startup by Eric Ries, book cover" class="wp-image-1740"/>
```

#### B6. Zero to One cover: add alt text, remove the stray "Version 1.0.0" caption

**Why:** Empty alt, and a caption that looks like leftover file metadata sits under the cover.

**Current HTML**

```html
<img src="https://www.startupyeti.com/wp-content/uploads/2025/11/Zero-To-One-683x1024.jpg" alt="" class="wp-image-1741"/><figcaption class="wp-element-caption">Version 1.0.0</figcaption>
```

**Replacement HTML:**

```html
<img src="https://www.startupyeti.com/wp-content/uploads/2025/11/Zero-To-One-683x1024.jpg" alt="Zero to One by Peter Thiel with Blake Masters, book cover" class="wp-image-1741"/>
```

#### B7. Startup Owner's Manual: remove an en dash

**Why:** House rule.

**Current HTML**

```html
from idea to product–market fit
```

**Replacement HTML:**

```html
from idea to product-market fit
```

#### B8. High Output Management cover: correct the author in the alt text

**Why:** The alt credits the book to Ben Horowitz. It is Andrew Grove's.

**Current HTML**

```html
<img src="https://www.startupyeti.com/wp-content/uploads/2025/11/High-Output-Management-664x1024.jpg" alt="high output management - Ben Horowitz" class="wp-image-1745"/>
```

**Replacement HTML:**

```html
<img src="https://www.startupyeti.com/wp-content/uploads/2025/11/High-Output-Management-664x1024.jpg" alt="High Output Management by Andrew Grove, book cover" class="wp-image-1745"/>
```

#### B9. Add books 7 to 10 before the closing section

**Why:** The biggest content gap. *Crossing the Chasm*, *Venture Deals*, *Lost and Founder* and *Predictable Revenue* each appear on 3 of the 5 editorial lists; every other 3/5+ title is already here. This takes the page to 10 books (the #3 result's count), fills the market, sales, fundraising and founder-wellbeing stages, and makes the existing closing line ("all ten books") true. +~525 words. With all edits applied the body goes from 989 to ~1,830 words (simulated). Every fact is in the claim ledger.

**Current HTML**

```html
<!-- wp:heading -->
<h2 class="wp-block-heading">Your Next Chapter Starts With Action</h2>
```

**Replacement HTML:**

```html
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">7. <em>Crossing the Chasm</em>, Geoffrey A. Moore</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>When to read:</strong> When early adopters are buying but mainstream customers keep saying “not yet”</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Geoffrey A. Moore’s <em>Crossing the Chasm</em> first came out in 1991, and Moore revised it in 1999 and again in 2014. Its argument is that a gap sits between the early adopters who buy a new technology product (enthusiasts and visionaries) and the early majority, the pragmatists who make up the mainstream market. Moore treats getting from one group to the other as the hardest step a technology company takes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>His answer is focus: win one customer group at a time, with a complete solution to one problem in one vertical, before you expand into the next one over. It’s also the book the classic <a href="/marketing/positioning-statement">positioning statement</a> template comes from, so if you’ve ever filled one in, you’ve already used a piece of it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">8. <em>Predictable Revenue</em>, Aaron Ross and Marylou Tyler</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>When to read:</strong> When founder-led sales stops scaling and you’re planning your first sales hires</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Aaron Ross and Marylou Tyler’s <em>Predictable Revenue</em> documents the outbound sales process credited with adding $100 million in recurring revenue at Salesforce.com. Its best-known method, “Cold Calling 2.0,” starts with email to find the right person and saves the phone call for the follow-up.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The part that outlasts the email scripts is the role split. Ross and Tyler argue for separating prospectors, closers and account managers, with sales development reps (SDRs) dedicated to prospecting. If you’re deciding whether your first sales hire should be an SDR or a <a href="/marketing/gtm-engineer">GTM engineer</a>, this is the book that explains what the SDR role was designed to do.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">9. <em>Venture Deals</em>, Brad Feld and Jason Mendelson</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>When to read:</strong> Before your first investor meeting, and again before you sign a term sheet</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Brad Feld and Jason Mendelson’s <em>Venture Deals: Be Smarter Than Your Lawyer and Venture Capitalist</em> walks through the venture capital deal, from the term sheet and how to negotiate it to how deals work from seed funding through later rounds. The fourth edition, published in August 2019, added chapters on fundraising, bank debt, equity and convertible debt, and hiring an investment banker to sell a company.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It’s far cheaper to learn the vocabulary from a book than from the investor across the table. If you’re weighing a loan against a priced round, pair it with our guide to <a href="/startup/venture-debt">venture debt</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">10. <em>Lost and Founder</em>, Rand Fishkin</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>When to read:</strong> When your startup doesn’t look like the success stories you’ve been reading</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Rand Fishkin’s company, Moz, makes marketing software, and <em>Lost and Founder: A Painfully Honest Field Guide to the Startup World</em> (Portfolio, 2018) is his case that traditional Silicon Valley “wisdom” leads too many startups astray. He takes on growth hacking, which he warns can fizzle quickly, and venture capital, which he says always comes with strings attached.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Read it next to <em>The Hard Thing About Hard Things</em>: both refuse the clean version of the startup story. If the pressure is weighing on you more than the strategy, our guide to <a href="/founder-wellbeing/how-to-cope-with-stress-and-uncertainty-on-the-startup-journey">coping with stress and uncertainty</a> as a founder is a shorter place to start.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Your Next Chapter Starts With Action</h2>
```

#### B10. Add a two-question FAQ after the closing paragraph

**Why:** People Also Ask on "startup books" shows "What are the top 5 startup books?". The first answer uses our own coverage count (section 2), which no competitor publishes. The post template emits FAQPage JSON-LD automatically from an H2 containing "FAQ" followed by H3 questions; nothing is pasted as schema. The closing paragraph itself is unchanged.

**Current HTML**

```html
<p>You don’t need to read all ten books to get smarter about your startup. Start with one that fits where you are right now. The goal is to build the habit of learning, applying, and adjusting, the same habit that keeps good founders in business when the playbook runs out.</p>
<!-- /wp:paragraph -->
```

**Replacement HTML:**

```html
<p>You don’t need to read all ten books to get smarter about your startup. Start with one that fits where you are right now. The goal is to build the habit of learning, applying, and adjusting, the same habit that keeps good founders in business when the playbook runs out.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Startup books FAQ</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">What are the top 5 startup books?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We counted how often titles repeat across the five editorial book lists ranking highest for “startup books” in US Google results in November 2026, leaving out forum threads and store pages. <em>The Lean Startup</em> appears on all five and <em>The Hard Thing About Hard Things</em> on four. Six titles tie at three: <em>The Mom Test</em>, <em>The Startup Owner’s Manual</em>, <em>Crossing the Chasm</em>, <em>Venture Deals</em>, <em>Lost and Founder</em> and <em>Predictable Revenue</em>. All eight are on this list. If you only read five, we’d pick <em>The Mom Test</em>, <em>The Lean Startup</em>, <em>Venture Deals</em>, <em>The Hard Thing About Hard Things</em> and <em>High Output Management</em>, roughly in the order you’ll need them.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Which startup book should a first-time founder read first?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><em>The Mom Test</em> by Rob Fitzpatrick. It changes the very next conversation you have with a potential customer: you stop asking whether they like your idea and start asking what they did the last time they had the problem. Read <em>The Lean Startup</em> next, for the build-measure-learn loop that turns those conversations into experiments.</p>
<!-- /wp:paragraph -->
```

---

## 4. Claim ledger

Every new or changed fact in section 3, with its source and fetch date. Book facts were checked against publisher or reference pages, not competitor articles, except where noted.

| # | Claim (where used) | Source | Fetched |
|---|---|---|---|
| 1 | *Crossing the Chasm* is by Geoffrey A. Moore, first published 1991, revised 1999 and 2014 (third edition) (B2, B9) | https://en.wikipedia.org/wiki/Crossing_the_Chasm | 2026-11-13 |
| 2 | Its argument: a chasm between early adopters (technology enthusiasts, visionaries) and the early majority (pragmatists); crossing it is the hardest step; focus on one group and a complete solution for one problem in one vertical before adjacent ones (B9) | same Wikipedia page (read via WebFetch summary, not verbatim; "hardest step" is the summary's wording) | 2026-11-13 |
| 3 | The classic positioning statement template comes from *Crossing the Chasm* (B9) | https://www.shortform.com/blog/product-positioning-statement/ and https://documentdrivendx.github.io/helix/research/geoffrey-moore-positioning/ (search results; secondary sources). Also stated on our own /marketing/positioning-statement page | 2026-11-13 |
| 4 | *Predictable Revenue* is by Aaron Ross and Marylou Tyler; its process is credited with adding $100 million in recurring revenue at Salesforce; "Cold Calling 2.0" (B2, B9) | https://www.digitalmarketer.com/book-review/predictable-revenue-aaron-ross-marylou-tyler | 2026-11-13 |
| 5 | Cold Calling 2.0 = email first, then call to follow up; the book argues for specialized roles (prospectors, closers, account managers) with SDRs doing prospecting (B9) | https://grahammann.net/book-notes/predictable-revenue-aaron-ross-marylou-tyler (book notes, secondary) | 2026-11-13 |
| 6 | *Venture Deals: Be Smarter Than Your Lawyer and Venture Capitalist*, 4th edition, Brad Feld and Jason Mendelson, August 2019; covers the term sheet and negotiating, seed through later stages; new chapters on fundraising, bank debt, equity and convertible debt, hiring an investment banker to sell a company (B2, B9) | https://www.wiley.com/en-us/Venture+Deals%3A+Be+Smarter+Than+Your+Lawyer+and+Venture+Capitalist%2C+4th+Edition-p-9781119594826 | 2026-11-13 |
| 7 | *Lost and Founder: A Painfully Honest Field Guide to the Startup World*, Rand Fishkin, Portfolio, 2018 (ebook April 24, 2018); Moz makes marketing software; traditional Silicon Valley "wisdom" leads startups astray; growth hacking can fizzle; VC comes with strings attached (B2, B9) | https://www.penguinrandomhouse.com/books/547217/lost-and-founder-by-rand-fishkin/ | 2026-11-13 |
| 8 | *High Output Management* is by Andy (Andrew) Grove, Intel's CEO (B2, B8) | https://en.wikipedia.org/wiki/High_Output_Management | 2026-11-13 |
| 9 | *Zero to One* is by Peter Thiel with Blake Masters (B2, B6) | https://en.wikipedia.org/wiki/Zero_to_One | 2026-11-13 |
| 10 | *The Mom Test* is by Rob Fitzpatrick (B2, B10) | https://www.momtestbook.com/ | 2026-11-13 |
| 11 | *The Lean Startup* is by Eric Ries; *The Hard Thing About Hard Things* is by Ben Horowitz (B2, B5, B10) | https://steveblank.com/books-for-startups/ (Blank on his student Ries and on Horowitz's book; scraped) | 2026-11-13 |
| 12 | *The Startup Owner's Manual* is by Steve Blank and Bob Dorf (B2) | https://steveblank.com/books-for-startups/ ("my newest book, The Startup Owners Manual") and https://divbyzero.com/blog/best-startup-books/ ("Written by Steve Blank and Bob Dorf"; competitor article) | 2026-11-13 |
| 13 | Coverage counts: Lean Startup 5/5, Hard Thing 4/5, Mom Test, Startup Owner's Manual, Crossing the Chasm, Venture Deals, Lost and Founder, Predictable Revenue 3/5 each (B10, section 2) | Our cf-scraper scrapes of chrisneumann.com, divbyzero.com, steveblank.com, ohblimey.com, uschamber.com URLs listed in section 1; "highest-ranking" per Ahrefs SERP overview for "startup books" (US) | 2026-11-13 |
| 14 | /startup/venture-debt, /marketing/gtm-engineer, /marketing/positioning-statement, /founder-wellbeing/how-to-cope-with-stress-and-uncertainty-on-the-startup-journey, /team-management/costs-of-helicopter-management, /startup/the-accelerator-advantage, /startup/startup-financing return 200 | curl against https://www.startupyeti.com | 2026-11-13 |

Not stated anywhere in the new copy because sources disagreed or were missing: the publication year of *Predictable Revenue* (sources give 2011, 2016 and 2020), Moz revenue figures, and years for the six existing books.

Existing claims left untouched and not re-verified: the descriptions inside the six existing book sections (including the *Hard Thing* superlative and the *Zero to One* quotes).

---

## 5. Hypothesis and baseline for the Stage 5 log

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
