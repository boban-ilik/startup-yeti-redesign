---
title: "SaaS Magic Number: Formula, Benchmarks and What's Good"
slug: saas-magic-number
category: startup
meta_description: "SaaS magic number formula and the ×4 rule, a worked quarter with five common mistakes, dated 2026 benchmarks, and a footnote founders can use in a board deck."
primary_keyword: saas magic number
word_count: 2787
---

# SaaS Magic Number: Formula, Benchmarks and What's Good

The 0.75 line founders still quote is 18 years old. On March 17, 2008, Lars Leckie of Hummer Winblad [wrote up a talk](https://web.archive.org/web/20120512075202/http://larsleckie.blogspot.com/2008/03/magic-number-for-saas-companies.html) by Omniture CEO Josh James: below 0.75, "step back and look at your business"; above it, "start pouring on the gas for growth." Scale Venture Partners [tells another origin story](https://www.scalevp.com/blog/saas-metrics-a-history-of-the-magic-number), in which its partner Rory O'Driscoll, evaluating Omniture in what Scale frames as 2005, saw "more than $2 in first-year revenue for every $1" of go-to-market spend and "exclaimed, 'It's Magic!'"

Meanwhile, Benchmarkit's 2026 survey report put the median at 1.37 for 2025 (132 companies reporting), up from 0.94 for 2024. Yet the glossary in its own 2025 edition defines the metric without the ×4. An old threshold, a new median, and no guarantee they were computed the same way.

The formula: (this quarter's recurring revenue minus last quarter's) × 4 ÷ last quarter's sales and marketing (S&M) expense. On an ARR basis it is net new ARR ÷ last quarter's S&M, with no ×4. As for what's good, 0.75 is the persistent rule of thumb (2008), Scale calls 0.7x "a fairly healthy efficiency baseline" (2020), and VC-backed companies in Benchmarkit's 2024 data had a median of 0.70. Below: variants, a worked quarter, dated benchmarks, breakpoints, payback, levers and a deck footnote.

## What the magic number measures, and where it came from

It measures sales and marketing efficiency: annualized growth in recurring revenue per dollar of the previous quarter's S&M. At 0.80, each $1 of S&M was followed by $0.80 of added annual run rate.

Who named it depends on whose record you read. Scale says O'Driscoll did, and its 2020 primer states that "Scale developed the 'Magic Number' (MN) as a workaround, replacing ARR with GAAP revenue." The earliest dated write-up we found, Leckie's March 2008 post, says Omniture used it to decide "how much gas to pour on the fire" and credits James' talk, without saying who coined the term. James repeated the rule in a November 2008 keynote, [as InternetNews reported](https://www.internetnews.com/it-management/saas-vendors-can-grow-despite-tough-economy/): "Any time a magic number is more than 0.75, that's an indication you should hire more sales people." O'Driscoll led Scale's Omniture investment, so both accounts lead to the same company. We found no 2005 document that settles who used the name first.

O'Driscoll made the case for it in [an April 2010 post](https://www.scalevp.com/blog/magic-number-math). He conceded it "is way too simple," ignoring churn, gross margin and the split between new sales and upsells, but "it is a GAAP based number," public for every listed company, and "if you fudge your GAAP numbers you go to prison."

Because the numerator is net, churn and contraction drag the number down and expansion lifts it, so weak [net revenue retention](/startup/net-revenue-retention) shows up here too.

## The magic number formula and its variants

**Magic number = (this quarter's recurring revenue - last quarter's recurring revenue) × 4 ÷ last quarter's S&M expense**

Four choices sit inside that line:

- **Revenue basis.** Use recurring (subscription) revenue. Services and one-time fees inflate the change.
- **The ×4.** It annualizes a quarterly revenue change so it compares with a run rate.
- **The lag.** S&M comes from the prior quarter, on the theory that spend takes time to show up as revenue. Leckie's 2008 formula and Scale's 2020 primer both lag one quarter.
- **Fully loaded S&M.** All sales and marketing expense, plus an allocation for founder time spent selling.

The same name covers several formulas:

| Variant | Formula | Who uses it (source, date) | Note |
|---|---|---|---|
| Lagged recurring revenue ×4 | (recurring revenue this quarter - last quarter) × 4 ÷ last quarter's S&M | Leckie, Mar 2008 | The Omniture version; James, as reported in Nov 2008, says "revenues" |
| Lagged GAAP revenue ×4 | (GAAP revenue Q2 - GAAP revenue Q1) × 4 ÷ Q1 S&M | Scale: O'Driscoll, 2010; primer, Sept 2020 | Works from public filings |
| Recurring revenue only ×4 | Same, excluding services | [The SaaS CFO](https://www.thesaascfo.com/calculate-saas-magic-number/) (updated Oct 2026) | "We can't use total revenue" if it is lumpy |
| ARR basis, lagged | Net new ARR ÷ last quarter's S&M, no ×4 | CFI (alternative); Wall Street Prep calls it net sales efficiency | ARR is already annual |
| ARR basis, same quarter | Net new ARR ÷ same quarter's fully loaded S&M | Scale, 2019, which calls it net sales efficiency, not the magic number | "We are not a fan of putting lags in this method" |
| No ×4 | Quarterly revenue change ÷ prior-quarter S&M | Benchmarkit 2025 report glossary | Its text says net new ARR |
| Trailing 12 months | Same ratio over four quarters | The SaaS CFO, for a 12-month sales cycle | Smooths long cycles |
| Gross-margin adjusted | Magic number × gross or contribution margin | Scale 2019 ("more correct"); Chaotic Flow 2010 | Early gross margin distorts it (Scale) |

**Multiply by 4 only when the numerator is a quarterly revenue change. Never multiply an ARR change by 4: ARR is already annual.**

## How to calculate the magic number: a worked quarter and five mistakes

An illustrative company (made-up numbers):

| Line | Q2 2026 | Q3 2026 |
|---|---|---|
| Subscription revenue | $450,000 | $510,000 |
| One-off implementation fees | $0 | $40,000 |
| S&M expense, fully loaded (incl. founder selling time) | $300,000 | $360,000 |
| of which marketing | $120,000 | not needed |
| ARR at quarter end | $1.85M | $2.09M |
| Gross margin | | 78% |

Revenue basis: ($510,000 - $450,000) × 4 ÷ $300,000 = **0.80**.

ARR basis: ($2,090,000 - $1,850,000) ÷ $300,000 = **0.80**, with no ×4.

They match because the example was built that way. Real figures drift apart, since ARR is a quarter-end snapshot and revenue accrues across the quarter.

For a trailing figure, sum four quarterly revenue changes and the four lagged S&M quarters, then divide. Say the three earlier changes were $48,000, $50,000 and $60,000 against lagged S&M of $260,000, $270,000 and $290,000 (also illustrative). Adding Q3: $218,000 × 4 ÷ $1,120,000 = **0.78**.

The same quarter with five mistakes:

| Mistake | Calculation | Result |
|---|---|---|
| No lag (Q3 S&M instead of Q2) | $60,000 × 4 ÷ $360,000 | 0.67 |
| Forgot the ×4 | $60,000 ÷ $300,000 | 0.20 |
| Multiplied the ARR change by 4 | $240,000 × 4 ÷ $300,000 | 3.20 |
| Counted the $40,000 implementation fees | ($550,000 - $450,000) × 4 ÷ $300,000 | 1.33 |
| Marketing spend only | $60,000 × 4 ÷ $120,000 | 2.00 |

Three of the five flatter you, the ARR error fourfold. The lag is a convention, not a law (Scale's 2019 net sales efficiency skips it); the mistake is switching conventions or comparing across them. Several top-ranking explainers contain at least one of these slips, so check any formula you copy.

## Thresholds: where 0.75 comes from

| Source (date) | What it says |
|---|---|
| Leckie, Hummer Winblad (Mar 17, 2008) | Below 0.75 "step back"; above 0.75 "start pouring on the gas"; above 1.5 "call me immediately" |
| Josh James via InternetNews (Nov 19, 2008) | More than 0.75: "hire more sales people" |
| O'Driscoll, Scale (May 20, 2010) | Above 1x "a fundamentally profitable model"; .6x to 1x "has to make choices"; under .6x above $20M revenue, companies "do not in general make it public" |
| Scale (Sept 11, 2020) | 0.7x "a fairly healthy efficiency baseline for most SaaS businesses" |
| Benchmarkit 2025 report (CY-2024 data) | .75 is "the low water mark to increase Sales and Marketing investment"; above 1.0 "is ideal" |
| Benchmarkit 2026 report (CY-2025 data) | A minimum of .75 to 1.0 justifies additional GTM investment |

Every row is a rule of thumb, not a measurement, and 0.75 appears in four of the six.

## What is a good SaaS magic number? Benchmarks for 2026

Who each dataset measured:

| Source (published; data) | Population | n | Definition basis |
|---|---|---|---|
| [Benchmarkit 2026 report](https://www.benchmarkit.ai/2026-saas-ai-native-metrics) (June 2026; full-year 2025) | B2B SaaS and AI-native companies, self-reported | 132 reported the metric, of 342 respondents | None found in the report PDF; Aleph's companion page: new ARR ÷ prior-period S&M, or revenue change × 4 |
| [Benchmarkit 2025 report](https://www.hibob.com/wp-content/uploads/2025-SaaS-Performance-Metrics-Benchmarks.pdf), PDF hosted by HiBob (2025; CY-2024) | B2B SaaS, self-reported | Trend slide: 148 private, 77 public (not explained); 101 in the financing cut | Glossary: revenue change ÷ prior-quarter S&M, no ×4; text says net new ARR |
| [Scale, O'Driscoll](https://techcrunch.com/2019/02/26/measuring-and-benchmarking-the-four-vital-signs-of-saas/) (Feb 2019) | Public and private SaaS companies in Scale Studio | 300+ | Magic number on GAAP revenue × 4, which Scale recommends for benchmarking |
| Scale primer and history post (Sept 2020; past decade) | Growth-stage SaaS and cloud businesses | 1,000+ | Lagged GAAP revenue × 4 (primer) |

Benchmarkit's total population over time:

| Data year (report) | 25th percentile | Median | 75th percentile |
|---|---|---|---|
| CY-2022 (2025 report) | 0.57 | 0.84 | 1.27 |
| CY-2023 (2025 report) | 0.61 | 0.90 | 2.00 |
| CY-2024 (2025 report) | 0.50 | 0.94 | 2.00 |
| CY-2025 (2026 report, n=132) | 0.68 | 1.37 | 2.14 |

Of all 342 respondents, not just the 132, 63.7% had under $20M ARR (22.8% under $5M, 40.9% at $5M to $20M); the ARR mix of the 132 is not given.

By segment (growth bands: 2026 report, CY-2025; financing: 2025 report, CY-2024):

| Segment | 25th | Median | 75th |
|---|---|---|---|
| 2025 growth under 10% | 0.64 | 0.85 | 1.40 |
| 2025 growth 11% to 20% | 0.32 | 0.69 | 1.40 |
| 2025 growth 21% to 30% | 0.44 | 0.70 | 1.86 |
| 2025 growth 31% to 50% | 0.80 | 1.00 | 1.61 |
| 2025 growth above 50% | 1.81 | 2.40 | 2.78 |
| Venture capital backed (CY-2024) | 0.45 | 0.70 | 1.14 |
| Bootstrapped (CY-2024) | 1.48 | 2.85 | 3.80 |
| Private equity backed (CY-2024) | 0.52 | 1.33 | 2.00 |

Neither report shows n per segment. Benchmarkit says VC-backed companies "typically focus more on growth," yet in the 2026 bands the fastest growers scored highest. Different years and cuts: don't combine them.

In February 2019 O'Driscoll put his dataset's median "between .8x and .7x," quartiles at .5x to 1.5x, and the public-company median at .7x. In 2020 Scale said the long-term private median "has hovered around 0.7x" and was recently trending down. Treat both as history, not as a current public-company benchmark.

### Why these disagree

A 1.37 median against Scale's long-run 0.7 looks like a leap. Our reading: it is partly a measurement story.

- **Definition.** Benchmarkit's 2025 glossary has no ×4 while its commentary talks about net new ARR. We found no definition in the 2026 report. Aleph's page leads with new ARR, which, if it means gross new ARR, leaves churn out and reads higher.
- **Self-reporting.** Companies report their own figures, and the reports do not show which basis each used.
- **Mix.** Above-50% growers posted 2.40 against 0.69 to 0.70 at 11% to 30% growth, so a shift in who answers moves the total.
- **Round numbers.** Several percentiles print exactly 2.00, including the 75th in both CY-2023 and CY-2024. The report does not explain why.

### How to use them

For a VC-backed seed to Series B company, the closest comparables are the CY-2024 venture-backed row (median 0.70) and your 2025 growth-band row. Neither is cut by ARR. Write your definition beside any comparison, and call it loose if the benchmark may use another basis.

## When the magic number breaks

**Founder-led selling.** In Scale's 2019 data, the high top-quartile number at a $1M run rate was "an anomaly early on, as often founders are doing the selling themselves (and probably not allocating their costs to Sales & Marketing!)." Allocate that time to S&M. Small denominators are the other problem: in the worked example, one new $5,000-a-month customer billing from the first day of Q3 adds 0.20 on its own, a quarter of the 0.80. Our reading: use trailing two to four quarters. Aleph advises reading it "as a trend, not a single quarter."

**Long enterprise sales cycles.** The SaaS CFO's Ben Murray says that with enterprise cycles "the Magic Number is just not as applicable," and uses trailing 12 months for a 12-month cycle. In O'Driscoll's 2010 study of 12 public companies, SuccessFactors and NetSuite averaged 0.7 yet grew more than 5x in three years; that lower number "almost certainly does not indicate weaker execution," he wrote, but slower sales cycles.

**Services and one-time revenue.** In the example, $40,000 of fees turned 0.80 into 1.33.

**Churn and expansion inside the numerator.** Murray notes it is "indirectly measuring every department that interfaces with a customer," and Leckie wrote in 2008 that it is penalized "if your churn is high."

**Product-led and self-serve motions.** Our reading: when onboarding, growth engineering and free-tier hosting sit in R&D or cost of revenue, S&M understates acquisition cost, so the number reads high. AirTree makes the underlying point about the burn multiple: "R&D spend plays a big role in driving customer acquisition." If your motion is [product-led rather than sales-led](/startup/plg-saas), pair the magic number with an all-spend metric.

**Usage revenue, seasonality and one-off deals.** Also our reading, not measured: usage revenue swings with consumption, and a year-end budget flush or one large prepay inflates a single quarter. Trailing windows dampen all three.

## Magic number vs CAC payback and burn multiple

**Payback in months = 12 ÷ (magic number × gross margin)**

On a revenue basis, drop the margin. Scale wrote in 2019 that revenue-basis payback "is simply the inverse of this number": 12 ÷ 0.7 = 17 months, with quartiles from eight months to two years. The worked example's 0.80 is 15 months on revenue and 12 ÷ (0.80 × 0.78) = 19.2 months on gross margin.

[Bessemer's State of the Cloud 2023](https://www.bvp.com/atlas/state-of-the-cloud-2023) graded CAC payback at 12 to 18 months good, 6 to 12 better and 0 to 6 best. At 80% gross margin, the 18-, 12- and 6-month lines equal magic numbers of about 0.83, 1.25 and 2.50. The conversion is approximate: the magic number nets churn and counts expansion, so it is not a pure acquisition measure. Still, it shows what the rule of thumb hides: at 80% gross margin, the classic 0.75 implies a 20-month payback, outside Bessemer's good tier.

The [burn multiple](/startup/burn-multiple) asks a different question. It divides net burn by net new ARR and counts all spend; the magic number counts only S&M. They are not reciprocals: heavy R&D or G&A can pair a healthy magic number with a poor burn multiple.

| Metric | Question it answers | Spend counted | Gross margin |
|---|---|---|---|
| Magic number | How much annualized revenue did last quarter's S&M produce? | S&M | No |
| CAC payback | How many months of gross profit repay acquisition spend? | S&M | Yes |
| Burn multiple | How much cash did each $1 of net new ARR cost? | All net burn | No |

## Levers that raise your magic number

These are sources' advice, not measured effects.

**Reduce churn.** Every churned dollar comes straight out of the numerator.

**Sell expansion.** Upsells and cross-sells count exactly like new logos in the numerator.

**Review pricing.** CFI lists pricing strategy among its levers; more average revenue per account raises the change for the same spend.

**Fix targeting and channel mix before adding budget.** Back the segments and channels that already convert; our guide to [SaaS marketing strategies](/marketing/saas-marketing-strategies) covers channel choice.

**Lean on referrals and vertical focus.** O'Driscoll wrote in 2010 of AthenaHealth, which averaged 1.8 in his sample: "once you get to critical mass, you have to spend less on sales and marketing, as referral marketing takes over."

**Don't pour gas before fit.** Scale's 2020 history post warns that early-stage companies that scale prematurely see efficiency degrade under shaky processes, missing product-market fit or heavy competitive pressure. Its primer adds that the efficiency you build "is most likely going to be with you for some time." Confirm [product-market fit](/startup/product-market-fit) before hiring sales capacity ahead of it.

Below 0.75, Aleph's summary of the 2026 report prescribes this: "audit GTM efficiency before increasing S&M."

## A footnote for your board deck

One name covers several formulas, so put the definition on the slide. For example (illustrative figures):

"Magic number = (Q3 2026 subscription revenue minus Q2 2026 subscription revenue) × 4 ÷ Q2 2026 fully loaded S&M (incl. founder sales time); Q3 0.80, trailing four quarters 0.78."

Then name the benchmark row you compare against, with its data year.

## FAQ

### What is a good SaaS magic number?

The long-standing rule of thumb is above 0.75, from a 2008 write-up of Omniture's practice. Scale called 0.7x a healthy baseline in 2020. In Benchmarkit's data, VC-backed companies had a 0.70 median for 2024 and the whole sample 1.37 for 2025. Compare with the row matching your financing and growth.

### Should I use revenue or ARR?

Either, if you label it. On revenue, take the quarterly change in recurring revenue and multiply by 4. On ARR, use net new ARR as it is, because ARR is already annual. Multiplying an ARR change by 4 overstates the result fourfold.

### Should S&M be lagged by a quarter?

Both conventions exist. Leckie's 2008 formula and Scale's 2020 primer use the prior quarter's S&M; Scale's 2019 net sales efficiency uses the same quarter, and Scale says it is "not a fan of putting lags in this method." Pick one, use it every quarter and disclose it.

### Is the magic number the same as sales efficiency?

Close cousins. Wall Street Prep and Scale use sales efficiency for the ARR-based ratios and treat the magic number as the GAAP revenue version. O'Driscoll warned in 2019 that "calling it Sales Efficiency tends wrongly to narrow the focus on this metric to just sales."

### How does the magic number relate to CAC payback?

Roughly as an inverse, once gross margin is included. Payback in months is 12 ÷ (magic number × gross margin). A 0.80 at 78% gross margin is about 19 months; on a revenue basis it is 15. The magic number itself ignores gross margin.
