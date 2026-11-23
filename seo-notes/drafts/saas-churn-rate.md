---
title: "SaaS Churn Rate: How to Calculate It, 2026 Benchmarks and What's Good"
slug: saas-churn-rate
category: startup
meta_description: "SaaS churn rate formulas for customers and revenue, monthly vs annual conversion, 2026 churn benchmarks on one basis, and where the 5 to 7% rule came from."
primary_keyword: saas churn rate
word_count: 3425
---

# SaaS Churn Rate: How to Calculate It, 2026 Benchmarks and What's Good

"5 to 7% annual churn is good" turns up in vendor explainers and, when we checked in November 2026, in Google's AI Overview for average SaaS churn. The earliest numeric version we found is Bessemer Venture Partners' 2012 [Top 10 Laws of Cloud Computing](https://web.archive.org/web/20231129081036/https://www.bvp.com/assets/uploads/2008/01/2012-10-laws-of-cloud.pdf), where 7% and 5% were ceilings that top-performing cloud companies stayed below. [Benchmarkit's 2026 survey](https://www.benchmarkit.ai/2026-saas-ai-native-metrics) puts the median B2B SaaS company's gross revenue retention at 84%, which means losing 16% of its revenue base in a year. And the explainers we read rarely say whether a churn figure is monthly or annual, customers or revenue.

Two formulas do most of the work. **Customer churn = customers lost in the period ÷ customers at the start of the period.** **Gross revenue churn = MRR lost to cancellations and downgrades ÷ MRR at the start of the period.**

What's good, on one basis: in Benchmarkit's 2026 data (calendar 2025, 226 companies), median annual gross revenue churn was 16%, about 1.44% a month. SaaS Capital's 2025 survey of more than 1,000 private B2B SaaS companies put median gross revenue retention at 91%: 9% churn a year, about 0.78% a month. Below, the datasets we could verify go on that basis, along with the three kinds of churn, a worked month, the monthly to annual conversion, where the 5 to 7% rule came from, which number belongs in a board deck, and a calculator.

## What churn rate measures: three numbers with one name

"Churn" covers at least three different calculations, and they can disagree by a wide margin in the same month.

| Measure | What counts as lost | What it tells you |
|---|---|---|
| Customer churn (logo churn) | Accounts that cancelled | Share of accounts that left |
| Gross revenue churn | MRR from cancellations and downgrades | Share of the revenue base that eroded, before any upsell |
| Net revenue churn | The same lost MRR, minus expansion MRR from existing customers | Erosion after upsells; negative when expansion outweighs losses |

Gross revenue retention (GRR) is the annual mirror of gross revenue churn: GRR = 1 - annual gross revenue churn, so 84% GRR is 16% churn. Benchmarkit's [2025 edition](https://www.benchmarkit.ai/2025benchmarks) defines GRR as the share of existing customers' ARR that remains over time without the benefit of expansion, typically measured year over year or on a trailing 12 months, and best calculated on a cohort basis. SaaS Capital's [2025 retention benchmarks](https://www.saas-capital.com/wp-content/uploads/2025/09/RB32WS1-2025-B2B-SaaS-Retention-Benchmarks.pdf) measure it on a December-to-December cohort, excluding upsells, cross-sells and price increases.

Net revenue churn is where expansion enters; that side, and the metric built on it, is covered in [net revenue retention](/startup/net-revenue-retention).

Churn also splits by cause. Voluntary churn is a customer deciding to cancel; involuntary churn is a subscription lapsing because a payment failed.

## How to calculate churn rate

**Customer churn = customers lost in the period ÷ customers at the start of the period**

**Gross revenue churn = (MRR lost to cancellations + MRR lost to downgrades) ÷ MRR at the start of the period**

**Net revenue churn = (MRR lost - expansion MRR) ÷ MRR at the start of the period**

The denominator is the trap. Only customers you had at the start of the period can churn in it. [ChartMogul's method](https://chartmogul.com/saas-metrics/customer-churn/) makes this explicit: from the raw cancellation count, subtract customers who joined and churned within the same period, and customers who churned and reactivated within it; leave free trials and freemium users out entirely.

### A worked month

An illustrative company (made-up numbers, not a real business):

| Input (one month) | Value |
|---|---|
| Customers at start of month | 400 |
| MRR at start of month | $80,000 |
| Cancellations in the billing system | 12 |
| of which: signed up this month and left | 3 |
| of which: cancelled and came back before month end | 1 |
| Starting customers who left | 8 (seven paying $100, one paying $1,200) |
| Downgrades by starting customers | $300 of MRR |
| Expansion from starting customers | $1,000 of MRR |
| New MRR from new customers | $3,000 |

Customer churn = (12 - 3 - 1) ÷ 400 = 8 ÷ 400 = **2.0%**.

MRR lost = 7 × $100 + $1,200 + $300 = $2,200. Gross revenue churn = $2,200 ÷ $80,000 = **2.75%**.

Net revenue churn = ($2,200 - $1,000) ÷ $80,000 = **1.5%**.

Revenue churn runs above customer churn here because one large account left: the $1,200 customer is one of eight departures but 54.5% of the lost MRR ($1,200 ÷ $2,200). Had it paid $100 like the others, lost MRR would be $1,100 and gross revenue churn 1.375%, below the 2.0% customer churn, which is the pattern you get when the smallest accounts leave fastest. A single customer churn figure hides which accounts left.

### The snapshot mistake

Month-end MRR in this example is $80,000 - $2,200 + $1,000 + $3,000 = $81,800. Compute churn as (start MRR - end MRR) ÷ start MRR and you get -2.25%, growth that looks like negative churn. Strip out the $3,000 of new MRR and the snapshot gives $78,800, so ($80,000 - $78,800) ÷ $80,000 = 1.5%. That is net revenue churn: the $1,000 of upgrades has offset $1,000 of losses. If your "end MRR" includes upgrades, gross churn comes out understated. Count the losses directly.

### Annual and multi-month plans

A customer on an annual contract gets its chance to leave at renewal. Blend annual and monthly customers into one monthly rate and the months between renewals dilute it. Two ways round this, both our suggestion rather than a standard:

- Measure over a period that contains the renewals: 12 months, on a cohort, the way SaaS Capital calculates GRR.
- Split by contract length. Report monthly-plan churn monthly, and for annual plans report the share of renewals due in the period that didn't renew.

## Monthly vs annual churn: don't multiply by 12

Monthly churn compounds, because each month's losses come out of a smaller base.

**Annual churn = 1 - (1 - monthly churn)^12**

**Monthly churn = 1 - (1 - annual churn)^(1/12)**

| Monthly churn | Annual, compounded | Monthly × 12 (wrong) |
|---|---|---|
| 0.5% | 5.8% | 6% |
| 1% | 11.4% | 12% |
| 1.44% | 16.0% | 17.3% |
| 2% | 21.5% | 24% |
| 3% | 30.6% | 36% |
| 5% | 46.0% | 60% |
| 10% | 71.8% | 120% |

So 5% monthly churn is 46.0% a year, not 60%. The ×12 error grows with the rate and eventually produces a number above 100%, which is the giveaway.

Going the other way, dividing an annual figure by 12 understates the monthly rate slightly. In February 2013 Lincoln Murphy [converted 5% to 7% annual churn](https://web.archive.org/web/20130206232859/http://sixteenventures.com/saas-churn-rate) into 0.42% to 0.58% a month, a straight division; compounding gives 0.43% to 0.60%. Small at that end. At 20% a year, ÷12 gives 1.67% a month against 1.84% compounded.

Every conversion on this page assumes a constant monthly rate. Real months vary, so a 12-month cohort measured directly beats one converted from a single month.

## Where "5 to 7% annual" comes from

| Source (date) | What it says | What it is |
|---|---|---|
| Bessemer, Top 10 Laws of Cloud Computing (2012) | Top-performing cloud companies can enjoy annual logo churn below 7% and annual revenue ("CMRR") churn below 5%, with most of that churn due to "death (bankruptcies) or marriage (acquisitions)" | Ceilings for the best companies in a VC's view |
| Lincoln Murphy, Sixteen Ventures (Feb 2013) | Attributes to Bessemer "an acceptable churn rate" of 5% to 7% annually, depending on whether you measure customers or revenue | The ceilings restated as an acceptable range |
| [Bessemer, 10 Laws of Cloud](https://www.bvp.com/atlas/10-laws-of-cloud) (June 2019) | Top enterprise companies have annual logo churn below 7%; SMB-focused companies often about 20% gross; the best enterprise companies have less than 1% monthly gross churn | Updated guidance, now split by segment |

The 2012 report is the earliest numeric version we found. Bessemer published a version of its laws in 2008, but the text we could retrieve shows no churn number, so we can't say 2012 was the first. Murphy also cited a Pacific Crest survey as backing; the links he gave no longer resolve.

Two things got lost in the restatement. In 2012, 7% and 5% were ceilings the top performers stayed *below*, with most of their churn coming from customers going bankrupt or being acquired. And they applied to two different measures, logo and revenue, which became one "acceptable" band. Bessemer's 2019 update keeps 7% only for top enterprise companies and puts SMB at about 20%. Its line for the best enterprise companies, less than 1% monthly gross churn, compounds to under 11.4% a year, a different bar from the 7% annual logo line.

So 5 to 7% is a ceiling for the best, not a description of the typical company, which in Benchmarkit's 2026 data lost 16% of its revenue base before expansion.

## What is a good churn rate? Benchmarks on one basis

The basis: annual gross revenue churn (100% minus GRR) and its monthly equivalent. Benchmarkit values below were read from the report's charts. Its 2026 report prints no GRR formula, so we assume the 2025 definition above still applies.

| Source (published; data period; population; n) | Statistic | As published | Annual gross revenue churn | Monthly equivalent |
|---|---|---|---|---|
| Benchmarkit 2026 report (June 2026; CY-25; B2B SaaS and AI-native companies, self-reported; 226 of 342 reported GRR) | Median GRR | 84% | 16% | 1.44% |
| Same | 25th percentile GRR (the weaker quarter starts here) | 76% | 24% | 2.26% |
| Same | 75th percentile GRR | 91% | 9% | 0.78% |
| SaaS Capital 2025 retention benchmarks (Sept 2025; Q1 2025 survey; private B2B SaaS; more than 1,000 companies) | Median GRR | 91% | 9% | 0.78% |
| [SaaS Capital, bootstrapped benchmarks](https://www.saas-capital.com/blog-posts/benchmarking-metrics-for-bootstrapped-saas-companies/) (Apr 2026; 2026 survey; bootstrapped, $3M to $20M ARR; subset n not published) | Median GRR | 91% | 9% | 0.78% |
| Benchmarkit 2025 edition (May 2025; CY-24; B2B SaaS under $1M ARR, and $1M to $5M ARR; chart N = 225) | Median GRR, each band | 90% | 10% | 0.87% |

**Benchmarkit's trend.** The 2026 report's median GRR went from 90% (CY-22) to 89% (CY-23), 88% (CY-24) and 84% (CY-25), which the report calls "the most significant single-year deterioration in the four-year trend." It doesn't say whether the earlier years are the same companies, so read the series as indicative.

**Early stage.** In the 2025 edition, companies under $1M and $1M to $5M ARR both had a median GRR of 90%, against 85% to 89% for the larger ARR bands in the same edition, and the publisher explains why: GRR at that size "may not reflect the actual customer ARR churn until after the first and/or second renewal periods." The 2026 report has no GRR cut by ARR, so there is no newer figure for companies this small. Treat that 90% as likely flattering, and wait for a young company's first full renewal cycle before comparing its churn with the benchmarks.

### By contract size, motion and contract type

| Segment | Source | Median GRR | Annual gross revenue churn | Monthly equivalent |
|---|---|---|---|---|
| ACV under $5K | Benchmarkit 2026 (CY-25) | 80% | 20% | 1.84% |
| ACV $5K to $10K | Benchmarkit 2026 (CY-25) | 83% | 17% | 1.54% |
| ACV $10K to $25K | Benchmarkit 2026 (CY-25) | 79% | 21% | 1.95% |
| ACV $25K to $50K | Benchmarkit 2026 (CY-25) | 85% | 15% | 1.35% |
| ACV $50K to $100K | Benchmarkit 2026 (CY-25) | 91% | 9% | 0.78% |
| Product-led | Benchmarkit 2026 (CY-25) | 79% | 21% | 1.95% |
| Sales-led | Benchmarkit 2026 (CY-25) | about 89% | about 11% | about 0.97% |
| Hybrid | Benchmarkit 2026 (CY-25) | 80% | 20% | 1.84% |
| Multi-year contracts | SaaS Capital 2025 (Q1 2025) | 94% | 6% | 0.51% |
| Annual contracts | SaaS Capital 2025 (Q1 2025) | 90% | 10% | 0.87% |
| Month-to-month | SaaS Capital 2025 (Q1 2025) | 89% | 11% | 0.97% |

ACV here is the bucket Benchmarkit's chart labels "average contract value"; the report doesn't define it further. Neither source gives per-segment counts in what we captured, and the 2026 chart has no bucket above $100K ACV. The sales-led median is 89% on the chart and 88% in the report's text, hence "about." The contract-type rows are correlations in one survey; they don't show that moving customers to longer contracts would cut your churn by the difference.

### Customer churn is a different number

The GRR sources above measure revenue. For customer churn, the most detailed table we found is ChartMogul's monthly customer churn by segment. The page doesn't state the population, the number of companies or the data period behind it:

| Company's net revenue retention | Median monthly customer churn | Annual equivalent |
|---|---|---|
| Under 60% | 7.3% | 59.7% |
| 60% to 80% | 4.3% | 41.0% |
| 80% to 100% | 2.3% | 24.4% |
| 100% or more | 1.7% | 18.6% |

Even companies whose revenue from existing customers holds or grows lose a median 1.7% of their customers a month in this data. Cut by annual growth rate instead, ChartMogul's medians run from 3.1% to 5.3% a month. These are different datasets from the GRR table, so don't read the gap between the two tables as a measured ratio of customer churn to revenue churn.

Recurly's widely quoted 3.22% is labelled on [its benchmarks page](https://recurly.com/research/churn-rate-benchmarks/) as a median annual churn rate for SaaS (July 2026 data). The same page also gives 3.04% for software businesses, earlier editions of the page gave no period, and it doesn't publish the population, the sample size or how the figure was calculated. We left it out of the tables.

## How to read your number

Start with the denominator. With 20 customers, one cancellation is 5% customer churn, so a single month at that size says little. Use a trailing quarter or 12 months, and say how many customers sit behind the rate.

### Failed payments

Involuntary churn is a billing problem with billing fixes: retries, card updates, reminders before a card expires. We found no current benchmark with a stated method for the share of SaaS churn that is involuntary, so we can't say whether yours is normal. If most of your churn is failed payments, fix that first and report voluntary churn separately; the two point to different problems.

### Churn and growth

SaaS Capital's July 2026 growth report, from its survey of more than 1,000 private B2B SaaS companies, found that companies with GRR below 90% reported below-average growth. That is an association; it doesn't show that churn caused the slower growth. Churn also sets expected customer lifetime: under constant monthly churn, the average customer stays 1 ÷ churn months, so 2% a month is 50 months. What that does to lifetime value is covered in our [LTV to CAC ratio](/startup/ltv-to-cac-ratio) guide, and the churn level at which a cohort never repays its acquisition cost in our [CAC payback period](/startup/cac-payback-period) guide.

### Which number goes in the deck

Our reading: report gross revenue churn (or GRR) as the headline, because it is what the GRR benchmarks above measure. Put customer churn beside it, so a large account leaving or a wave of small ones shows up. Label each with four things: type (customer or revenue), gross or net, period (monthly or annual, compounded), and method (cohort or blended). Then name the benchmark row you compared it with, including its edition and data year.

In the worked month above that would read: gross revenue churn 2.75% monthly (28.4% annualized, compounded, assuming every month is like this one), customer churn 2.0% monthly (21.5% annualized). On that basis the company sits below Benchmarkit's 2026 25th percentile, where GRR is 76% and annual gross revenue churn 24%.

## What moves churn

We found no measured effect sizes for churn levers in the sources above, so these are diagnostics first.

**Segment before you act.** Cut churn by signup cohort, plan and contract size. In Benchmarkit's 2026 data, median GRR runs from 79% to 91% across ACV buckets, so a blended figure can hide a segment that is fine and one that isn't. Price point matters too: ChartMogul's December 2025 analysis of 3,500 software companies found products above $250 a month retain like classic B2B SaaS, while those under $50 a month retain "20+ points worse."

**Look at contract structure.** Longer contracts go with higher GRR in SaaS Capital's data (94% multi-year, 89% month-to-month, 91% overall). That is a correlation; it doesn't show whether annual plans prevent cancellations or only postpone them. If your base is mostly monthly plans, compare it with the month-to-month row rather than the overall median. Pricing and packaging choices are in our guide to [SaaS pricing models](/marketing/saas-pricing-models).

**If every cohort churns, check fit.** Our view: when churn is high in every segment and cohort, tuning retention tactics is the wrong level of fix. Start with [product-market fit](/startup/product-market-fit).

## Run your numbers

Our [calculator](/calculator) asks for MRR, total customers, a "Monthly Revenue Churn" percentage, CAC, gross margin (prefilled at 80%) and an optional "New + Expansion MRR" for the month. The note beside that field reads "% of MRR lost to cancellations and downgrades", which is gross revenue churn. The calculator uses the rate in two places:

- LTV = ARPA × gross margin ÷ monthly churn, where ARPA = MRR ÷ total customers.
- Net MRR growth = (new + expansion MRR - MRR × churn) ÷ MRR.

The second formula treats churn as a share of MRR, which matches the input. Gross revenue churn (cancellations plus downgrades ÷ starting MRR) goes in the churn field and expansion in its own, so net MRR growth counts downgrades as losses and expansion as gains.

The worked month as a calculator run: $80,000 MRR, 400 customers, 2.75% churn, 80% margin, $4,000 of new and expansion MRR, and any CAC (the calculator requires one, but it doesn't change these two outputs). ARPA is $200, LTV is $200 × 0.80 ÷ 0.0275 = $5,818, and net MRR growth is ($4,000 - $2,200) ÷ $80,000 = 2.25%, displayed as +2.3%. Enter the 2.0% customer churn instead and LTV reads $8,000, because the accounts that left were not average-sized.

The churn messages are the site's own bands, set near Benchmarkit's 2026 GRR lines. Above 2.3% a month it says "Your revenue churn is high", roughly the weakest quarter of B2B SaaS; below 0.8% it says "Excellent revenue churn!", roughly top quartile; anything from 0.8% to 2.3% gets the "typical B2B SaaS range" message. Both cut-offs are rounded monthly conversions of the GRR percentiles in the benchmark table: 91% at the 75th percentile is about 0.78% a month, and 76% at the 25th is about 2.26%. The worked month's 2.75% is above 2.3%, so it gets the "high" message, which fits its place below Benchmarkit's 2026 25th percentile.

## FAQ

### Is 20% churn too high?

It depends on the period and the type. As annual gross revenue churn, 20% is GRR of 80%: below Benchmarkit's 2026 median of 84%, but better than its weakest quarter of companies, which lost 24% or more. A year of 20% churn is about 1.84% a month. As monthly churn, 20% compounds to 93.1% a year, so you would lose 93% of a starting cohort within a year. And with ten customers, two cancellations make 20%, so check the denominator first.

### What is 5% monthly churn annually?

46.0%. Annual churn = 1 - (1 - 0.05)^12 = 1 - 0.540 = 0.460. Multiplying by 12 gives 60%, which overstates it, because each month's churn comes out of a smaller remaining base. The reverse also holds: 16% annual churn is about 1.44% a month, not 1.33%.

### What is a normal churn rate for SaaS?

Benchmarkit's 2026 report put median GRR at 84% for 2025 (226 companies): 16% annual gross revenue churn, about 1.44% a month. SaaS Capital's 2025 survey of more than 1,000 private B2B companies put it at 91%: 9% a year, about 0.78% a month. Customer churn is a separate measure; ChartMogul's monthly medians range from 1.7% to 7.3% by retention band.

### How do you calculate churn with annual plans?

An annual customer's chance to leave comes at renewal, so a blended monthly rate spreads their churn thin. Either measure annually on a cohort, as SaaS Capital does, or split by contract length: monthly churn for monthly plans, and for annual plans the share of renewals due in the period that didn't renew.

### What churn do investors expect?

None of these is a measured average; they are the publishers' guidance. SaaS Capital's 2025 retention report calls GRR a table-stakes benchmark and says it "must be at least 90%" for performance parity. Benchmarkit's 2026 report describes 85% to 90% GRR as the goal for strong B2B SaaS retention. Bessemer's 2019 guidance puts top enterprise companies below 7% annual logo churn and SMB-focused companies often at about 20% gross.
