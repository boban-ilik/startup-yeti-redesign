---
title: "Rule of 40: Formula, 2026 Benchmarks and When It Matters"
slug: rule-of-40
category: startup
meta_description: "The Rule of 40 formula, why the profit margin you pick moves the score, one real filing scored five ways, 2026 benchmarks by basis, and when it matters."
primary_keyword: rule of 40
word_count: 3034
---

# Rule of 40: Formula, 2026 Benchmarks and When It Matters

The Rule of 40 started as two rules. On February 3, 2015, Brad Feld [wrote up a rule](https://feld.com/archives/2015/02/rule-40-healthy-saas-company/) he had heard from a late-stage investor at a board meeting: growth plus profit should add up to 40%, for SaaS companies with "at least $50 million in revenue," with EBITDA as his preferred profit measure. On February 10, Fred Wilson, who was at the same meeting, [posted his version](https://avc.com/2015/02/the-40-rule/): annual revenue growth plus operating margin, with no size limit. The profit measure still decides the answer. DocuSign's quarter to October 31, 2019 scores 22.2 or 46.6 from the same filing.

The formula: **Rule of 40 score = annual revenue growth rate (%) + profit margin (%)**. At 40 or above, a company passes. "Profit" is not standardized. EBITDA, operating margin and free cash flow margin are all in use, and none is wrong if you name it.

What's typical: the [Benchmarkit 2026 report](https://www.benchmarkit.ai/2026-saas-ai-native-metrics) put the median at 25% for calendar 2025, across the 110 companies that reported the metric. Benchmarkit itself says the rule becomes more meaningful as companies approach about $20M ARR.

None of the top-ranking pages we read names both founding posts, recomputes a real company's score from its filing, or cites sourced 2026 data. This one does all three. Below: the two 2015 versions side by side, the formula and its measure choices, one filing scored five ways, 2026 figures labelled by basis and population, whether the score means anything at your ARR, and what it says about valuation.

## What the Rule of 40 measures

Growth and profit pull against each other: spending to grow faster lowers the margin. The rule asks whether the two together clear 40, so a company growing 100% at a -60% margin passes, and so does one growing 0% at a 40% margin. Both examples are Wilson's.

## Where it came from: two posts, one board meeting

| Source | Date | Growth term | Profit term | Who it applies to |
|---|---|---|---|---|
| Brad Feld, Feld Thoughts | Feb 3, 2015 | Year-over-year growth of monthly MRR, checked against total revenue | "Profit," which he called harder to define; he preferred EBITDA as the baseline and back-tested with other measures | SaaS companies "at least $50 million in revenue"; smaller venture-backed companies should focus on reaching scale first |
| Fred Wilson, AVC | Feb 10, 2015 | Annual revenue growth | Operating margin | No size limit stated |

In June 2026, Feld [looked back on it](https://feld.com/archives/2026/06/does-the-rule-of-40-work-for-hardware/) and credited the two posts together with spreading the rule. We found no written version earlier than Feld's, which makes it the earliest we found, not proven first.

So the rule never had one definition. Its two earliest written versions disagree on the profit term and on who it is for. Every later source we read picked a side or chose a third measure.

## The formula and the choices inside it

**Rule of 40 score = annual revenue growth rate (%) + profit margin (%)**

### Growth: annual, year over year

Growth means the year-over-year change: this period's revenue against the same period a year earlier. Both 2015 posts use it. Standard Metrics compares a quarter with the same quarter a year before; ICONIQ uses forward revenue growth for the next twelve months (NTM).

Never put a monthly growth rate into the formula. As an illustration, 5% a month compounds to 79.6% a year (1.05¹² - 1), so adding 5 instead of 79.6 understates the score by 74.6 points.

ARR or revenue? The sources that state it use revenue (Wilson, Scale, BCG, Standard Metrics, ICONIQ); Feld used MRR. Our reading: for a private SaaS company, recurring revenue or ARR growth is fine if you label it. If you compare with public companies, use revenue growth, because public figures are built on reported revenue, not ARR.

Keep the two terms on the same period. A trailing-twelve-month margin next to one quarter's growth is a mixed score.

### Profit: pick one and name it

| Profit measure | Who uses it (source, date) | What it does to the score |
|---|---|---|
| EBITDA margin | Feld (2015, preferred); Bain (2018); BCG (2025); SaaS Capital (2025); Standard Metrics (2026, quarterly EBITDA) | Adds back depreciation and amortization, so reads higher than operating margin |
| EBITDA excluding stock-based compensation | Scale Venture Partners (2020 primer) | Adds back stock comp as well, so reads higher again |
| Operating margin | Wilson (2015); Lighter Capital (2026) | GAAP and non-GAAP versions can differ by many points (see DocuSign below) |
| Adjusted (non-GAAP) operating margin | Palantir's own reported score (2026) | Company-defined; excludes items the company chooses |
| Free cash flow margin | McKinsey (2021); Bessemer (Rule of X, 2024); ICONIQ (forward FCF, 2026) | Cash basis; our reading is that one quarter can swing with billing timing |
| Gross margin | None of the sources we read | Not a profit measure for this rule |

Gross margin is the slip to avoid. It only subtracts the cost of delivering the product, before sales, marketing, R&D and overhead. One Reddit poster asked whether the rule meant growth plus gross margin. No version we found does.

## One company, five scores: DocuSign, worked from the filing

DocuSign's results for the quarter ended October 31, 2019 (Q3 of fiscal 2020) are in its [earnings release filed with the SEC](https://www.sec.gov/Archives/edgar/data/1261333/000126133319000105/q320ex-991er.htm) as Exhibit 99.1 to a Form 8-K.

Revenue was $249,502K, against $178,385K a year earlier. Growth = ($249,502K - $178,385K) ÷ $178,385K = **39.87%**. That term is the same in every row. Only the margin changes.

| Margin basis | Calculation (on revenue of $249,502K) | Margin | Rule of 40 score |
|---|---|---|---|
| GAAP operating margin | Loss from operations -$43,997K | -17.63% | **22.2** |
| EBITDA proxy | -$43,997K + depreciation and amortization $12,655K = -$31,342K | -12.56% | **27.3** |
| Free cash flow margin | Operating cash flow -$1,869K - capital expenditure $12,280K = -$14,149K | -5.67% | **34.2** |
| Operating cash flow margin | -$1,869K | -0.75% | **39.1** |
| Company non-GAAP operating margin | Non-GAAP operating income $16,888K | 6.77% | **46.6** |

Each score is 39.87 plus the margin, rounded: 39.87 - 17.63 = 22.24, and 39.87 + 6.77 = 46.64. DocuSign does not report EBITDA, so the second row is our proxy: operating loss plus depreciation and amortization. The free cash flow figure matches the release, which states negative $14.1 million.

The spread is 24.4 points in one quarter. One basis passes, one misses by less than a point, and three miss clearly. Most of the gap is stock-based compensation: $52,736K in the quarter. Adding it back alone turns the operating loss into income of $8,739K, a 3.50% margin and a score of 43.4. The company's non-GAAP figure then adds back a further $8,149K of adjustments to reach 46.6.

A widely cited table of this same quarter reproduces on growth, EBITDA and operating margin, but its cash-flow margins don't match the quarter's figures in the release, and it doesn't state which period they cover. We used the release.

### Palantir, Q3 2026

Palantir reports its own score. Its [Q3 2026 results release](https://www.sec.gov/Archives/edgar/data/1321655/000132165526000045/a2026q3ex991pressrelease.htm), filed November 2, 2026, gives a Rule of 40 of 158%, defined as year-over-year revenue growth plus adjusted operating margin. Revenue grew 96%.

| Margin basis (as reported, whole percentages) | Margin | Score |
|---|---|---|
| Adjusted operating margin (Palantir's definition) | 62% | 158 (Palantir's figure) |
| Adjusted free cash flow margin | 53% | 149 |
| Cash from operations margin | 52% | 148 |
| GAAP operating margin | 47% | 143 |

The last three are our arithmetic from the release's rounded percentages. On any basis Palantir is far above 40; the definition still moves it 15 points. These are quarterly figures and change every quarter.

## What companies actually score in 2026

Each source measures a different population on a different basis, so read the basis and statistic columns before the figure.

| Source (published) | Period | Population (n) | Basis | Statistic | Figure |
|---|---|---|---|---|---|
| Benchmarkit 2026 report (June 2026) | CY-25 | B2B SaaS and AI-native companies, self-reported survey (110 of 342 respondents reported it) | Not defined in the report | Median (25th to 75th percentile) | 25% (7% to 43%) |
| [ICONIQ, 2026 State of Scaling](https://www.iconiq.com/growth/reports/2026-state-of-scaling) (Sept 2026) | Q2 2026 | Public enterprise software companies that IPO'd 2013 to 2025 (n not published) | NTM revenue growth + NTM FCF margin | Median | 33% |
| [Standard Metrics, Rule of 40 Revisited](https://standardmetrics.io/wp-content/uploads/2026/07/Standard-Metrics-Private-Market-Report-Rule-of-40-Revisited.pdf) (July 2026) | Q1 2026 | Venture-backed private companies across industries, $1M+ annualized revenue (1,377) | Same-quarter YoY revenue growth + quarterly EBITDA margin | Share at 40 or above | 27.9% |
| [SaaS Capital](https://www.saas-capital.com/blog-posts/growth-profitability-and-the-rule-of-40-for-private-saas-companies/) (Aug 2025) | 2025 survey | Private B2B SaaS, equity-backed (n not published) | Growth + EBITDA margin | Median | 15 |
| SaaS Capital (Aug 2025) | 2025 survey | Private B2B SaaS, bootstrapped (n not published) | Growth + EBITDA margin | Median | 34.5 |
| [BCG](https://www.bcg.com/publications/2025/rule-of-40-lessons-from-top-performers-software) (May 2025) | Not stated | 107 portfolio companies of seven growth-equity firms | Annual revenue growth + EBITDA margin | Share beating the rule, by revenue | 26% above $80M; 22% at $30M to $80M; 9% below $30M |

SaaS Capital's values come from a table image (chart-read). It warns that its absolute values are noisy and that direction matters more.

**Medians and pass rates answer different questions.** A median says where the middle company sits. A pass rate says how many clear 40. Benchmarkit's median of 25% means more than half its sample misses, and its 75th percentile of 43% means at least a quarter passes, so its pass rate sits somewhere between a quarter and a half. Standard Metrics' 27.9% falls inside that range, on a different population and basis. Don't add a median growth rate to a median margin to build a median score: SaaS Capital points out the result won't necessarily match.

Over time, Benchmarkit's median was 23% for CY-22, 20% for CY-23, 15% for CY-24 and 25% for CY-25, which Benchmarkit calls the largest single-year gain in its five years of benchmarking. The report doesn't say whether the same companies answered each year, so read it as indicative. ICONIQ's public median rose from 26% in Q1 2023 to 33% in Q2 2026.

Public and private companies get there differently. In ICONIQ's Q2 2026 data, free cash flow margin makes up about 60% of the public median score; median NTM revenue growth is 13%. In Standard Metrics' private data, 89% of the companies that cleared 40 did it through growth. Our reading: a private company comparing itself with public medians is comparing a growth score with a margin score.

## Does the Rule of 40 matter at your stage?

### What the data shows at small ARR

At small scale, growth off a small base swamps the margin. Standard Metrics' growth-first group (companies growing at least 35% and clearing 40) shows it by size, on Q1 2026 data:

| Revenue band | Median growth | Median EBITDA margin |
|---|---|---|
| $1M to $5M | 314% | -87% |
| $5M to $20M | 205% | -29% |
| $20M to $100M | 120% | -7% |
| $100M+ | 92% | 2% |

At $1M to $5M, that group's median growth was 314% and its median margin -87%: deeply unprofitable, and above 40 by the group's definition. The score says it is growing fast. It says little about whether that growth is efficient.

The small-company medians we found conflict:

| Source (data) | Band | Basis | Population | Median |
|---|---|---|---|---|
| Benchmarkit 2025 report (CY-24) | $1M to $5M ARR | Not defined | B2B SaaS survey; chart-read | 2% (25th percentile -32%, 75th 40%) |
| SaaS Capital (2025 survey) | $1M to $3M | EBITDA margin | Equity-backed private SaaS; chart-read | 38 |
| SaaS Capital (2025 survey) | $3M to $5M | EBITDA margin | Equity-backed private SaaS; chart-read | 10 |
| Lighter Capital (July 2026) | $1M to $5M ARR | Operating margin | 83 private B2B SaaS that met its debt-qualification criteria, 82 with growth data; chart-read | 33% |

From 2% to 38 for roughly the same size of company. The bases, populations and years differ, and nothing in these reports lets us say which difference matters most. Lighter Capital is a lender, its sample is companies that qualified for its debt, and its post's text gives a different figure for this band than its chart; we used the chart. SaaS Capital's $1M to $3M median was 5 in its 2023 survey and 38 in 2025, which fits its own warning about noise. None of these is "the" small-company benchmark.

### What investors say about when it starts to matter

These are guidance, not measurements:

| Source (date) | What it says |
|---|---|
| Feld (Feb 2015) | For SaaS companies with "at least $50 million in revenue" |
| [Scale Venture Partners](https://www.scalevp.com/blog/rule-of-40-does-not-compute-for-early-stage-startups) (Mar 2022) | For early-stage companies the rule "does not compute"; Scale doesn't use it to evaluate prospective investments |
| Benchmarkit 2025 report (May 2025) | VC firms start using it as an investment and valuation factor at about $15M ARR |
| Benchmarkit 2026 report (June 2026) | Becomes more meaningful as companies approach about $20M ARR |
| Standard Metrics (July 2026) | Left out companies under $1M revenue, calling the rule less relevant for pre-seed and seed |
| [Bessemer Venture Partners](https://www.bvp.com/atlas/the-rule-of-x) (Jan 2024) | Its growth-weighted score is less relevant for early-stage companies with negative free cash flow; use the burn multiple |

Our reading: below roughly $15M to $20M ARR, the Rule of 40 is mostly a growth number with a margin attached. Track how efficiently you grow instead. The burn multiple counts every dollar of burn against net new ARR, the [SaaS magic number](/startup/saas-magic-number) tests sales and marketing efficiency, and [net revenue retention](/startup/net-revenue-retention) shows whether the growth will last.

## Does a higher score mean a higher valuation?

Every valuation study we found covers public companies. None covers private companies before Series B.

- **Bain** ("Hacking Software's Rule of 40", 2018, EBITDA basis): of 124 public software companies, 40% beat the rule in 2017. Of 86 companies tracked from 2013 to 2017, 25% beat it for three or more years and 16% in all five. Companies above the line had enterprise value to revenue multiples about double those below it.
- **[McKinsey](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/saas-and-the-rule-of-40-keys-to-the-critical-value-creation-metric)** (Aug 2021, growth + free cash flow): across 200+ software companies from 2011 to 2021, companies exceeded the rule only 16% of the time.
- **Bessemer** (Jan 2024, public cloud companies): a 1% increase in growth rate had 2.3 times the effect on the valuation multiple of a 1% increase in free cash flow margin, in the market at the time.
- **ICONIQ** (Q2 2026, public enterprise software): its version of the Rule of X, with growth weighted about 2.7x, explained 37% of the variation in EV/NTM revenue multiples (R-squared), the Rule of 40 and revenue growth about 30% each (chart-read), and free cash flow margin 5%.

So among public companies the score is associated with higher multiples, but growth alone explains about as much of the variation as the Rule of 40 does, and a growth-weighted score explains more. For a $5M ARR company, none of this is evidence that raising your score raises your next round's price.

## The Rule of X

Bessemer's Rule of X multiplies growth before adding free cash flow margin: growth × a multiplier + FCF margin, with the multiplier about 2x for private companies and 2x to 3x for public ones. Bessemer's argument is that growth drives valuation more than margin does, while the Rule of 40 weights them equally. An illustration with made-up numbers: 30% growth and a -5% FCF margin is 25 on the Rule of 40 and 55 on a 2x Rule of X.

## What to do with your score

If you report it, put the definition on the slide. For example (illustrative figures): "Rule of 40 = YoY revenue growth, Q3 2026 vs Q3 2025 (38%) + GAAP operating margin, Q3 2026 (-12%) = 26." Then name the benchmark row you compare against, with its basis and data year.

If you are below roughly $15M to $20M ARR, give the score a line, not a slide. Compute your [burn multiple](/startup/burn-multiple) for last quarter and the trailing twelve months, and use our [SaaS metrics guide](/startup/saas-metrics) to pick the efficiency and retention metrics that fit your stage.

## FAQ

### Does the Rule of 40 apply to startups?

Not much before scale. Feld's 2015 version was for SaaS companies with at least $50 million in revenue, Benchmarkit's 2026 report says it becomes more meaningful near $20M ARR, and Scale says it "does not compute" for early-stage companies. At $1M to $5M, the fast-growing companies that cleared 40 in Standard Metrics' Q1 2026 data had median growth of 314% and a median EBITDA margin of -87%. Below roughly $15M to $20M ARR, track burn multiple, growth efficiency and retention instead.

### Should I use EBITDA or free cash flow?

Either, if you name it and keep it. Feld preferred EBITDA, and BCG, Bain, SaaS Capital and Standard Metrics use it. McKinsey, ICONIQ and Bessemer use free cash flow margin. The choice can move a score a long way: DocuSign's quarter to October 31, 2019 scores 27.3 on an EBITDA proxy and 34.2 on free cash flow, from the same filing. Compare only with benchmarks on your basis.

### Can I use gross margin in the Rule of 40?

No. Gross margin only subtracts the cost of delivering the product, before sales, marketing, R&D and overhead, so it is not a profit measure in any version of the rule we found. The 2015 versions use EBITDA (Feld) and operating margin (Wilson); later sources use EBITDA, operating margin or free cash flow. Adding gross margin to growth inflates the score and makes the comparison with any benchmark meaningless.

### What is Palantir's Rule of 40?

Palantir reports its own score: year-over-year revenue growth plus adjusted (non-GAAP) operating margin. For Q3 2026 it was 158%, from 96% revenue growth and a 62% adjusted operating margin, per its results release filed November 2, 2026. On its GAAP operating margin of 47%, the same quarter scores 143; on adjusted free cash flow margin, 149. It changes every quarter.

### Is the Rule of 40 still relevant in 2026?

For larger companies, yes, as a quick check. Benchmarkit's median rose to 25% for 2025 (110 companies, margin basis not stated), and ICONIQ's public enterprise software median, on forward growth plus free cash flow margin, reached 33% in Q2 2026. But in ICONIQ's data, growth alone explains about as much of valuation multiples as the Rule of 40, and ICONIQ's growth-weighted Rule of X explains more. For early-stage companies, investors point elsewhere: Bessemer, for one, recommends the burn multiple.
