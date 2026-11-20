# CAC Payback Period: Formula, Benchmarks by Contract Size and What's Good
<!-- meta_description: CAC payback period formula with gross margin, a worked example, 2026 benchmarks by contract size with their sources, and a free calculator for your numbers. -->
<!-- slug: cac-payback-period | category: startup -->

"Under 12 months" is the CAC payback target repeated across SaaS explainers, and it has a birth year. David Skok, whose [SaaS metrics definitions](https://www.forentrepreneurs.com/saas-metrics-2-definitions-2/) carry the guideline, says it was written in 2011. Measured data is less generous: Benchmarkit's 2026 report (June 2026), a survey of 342 B2B SaaS and AI-native software companies, put the median at 16 months for calendar 2025, across the 198 companies that reported the metric. And if you compute payback on revenue rather than gross profit, your own number looks shorter than it is before any comparison starts.

The formula: **CAC payback (months) = CAC ÷ (monthly revenue per new customer × gross margin)**. A result of 15 means a new customer's gross profit takes 15 months to repay what you spent to win them.

What's good depends on contract size. In the same Benchmarkit data, the median was 11 months for contracts under $5,000 a year, and the longest median was 22 months, for contracts between $50,000 and $100,000. Below: the formula's variants, a worked example showing how much gross margin moves the answer, dated benchmarks by contract size, how to read your number against churn, and a calculator for your own figures.

## What CAC payback period measures

CAC payback period is the number of months of gross profit a new customer must generate to recover the cost of acquiring them. Skok's name for it, months to recover CAC, means the same thing.

The gross profit part matters. A dollar of subscription revenue first pays for hosting, support and onboarding (your cost of revenue). Only what is left over can repay the sales and marketing spend that brought the customer in. That is why Bessemer Venture Partners, which uses CAC payback as its primary sales and marketing efficiency metric, measures it against gross-margin-adjusted ARR, and why Skok adds a gross margin adjustment to make the calculation accurate.

The SaaS CFO's Ben Murray frames CAC as a debt: you pay the acquisition cost up front, and each month's gross profit from that customer pays down a slice of it. Payback is the month the balance hits zero.

## The CAC payback formula and its variants

**CAC payback (months) = CAC ÷ (monthly revenue per new customer × gross margin)**

Three inputs, each with a choice inside it:

- **CAC.** Fully loaded sales and marketing spend for a period (salaries, commissions, ads, tools, agencies, events), divided by the number of new customers won in that period. Conventions differ at the edges. Bessemer counts sales, marketing and the part of customer success tied to renewals and upsells; Murray splits sales and marketing spend between new and existing customers before computing CAC. Pick one convention and keep it.
- **Monthly revenue per new customer.** New MRR from the customers you won in the period, divided by how many you won. Murray is blunt about this one: "It's not the ARPA of our entire customer base" ([The SaaS CFO](https://www.thesaascfo.com/cac-payback-period/)). Benchmarkit's 2025 report also uses ARR from new customers.
- **Gross margin.** Your subscription gross margin: subscription revenue minus the cost of delivering it, as a share of subscription revenue. Murray and Benchmarkit's 2025 report both use the subscription line rather than total gross margin, so services revenue doesn't blur it.

The same name covers several formulas:

| Variant | Formula | Who uses it | Effect on the number |
|---|---|---|---|
| Revenue only | CAC ÷ monthly revenue per new customer | Quick estimates; no definition we reviewed uses it | Equals the standard figure × your gross margin, so it always reads shorter |
| Gross-margin adjusted, monthly | CAC ÷ (monthly revenue per new customer × gross margin) | Skok; Baremetrics; Bessemer measures against gross-margin-adjusted ARR | The standard form |
| Annual form | S&M spend ÷ (ARR from new customers × gross margin) × 12 | Benchmarkit 2025 report; The SaaS CFO (cohort ARR × subscription gross margin) | Same answer as the monthly form; the × 12 turns years into months |
| Net new MRR, "fully loaded" | CAC or S&M spend ÷ (net new MRR × gross margin), where net new MRR = new plus expansion minus churned | Airtree Ventures | Mixes retention into an acquisition metric: shorter with strong expansion, longer with heavy churn |

If you report the net new version, say so. It answers a broader question than the other three, and it will not line up with a benchmark built on new-customer revenue.

## A worked example: how much gross margin moves the answer

An illustrative early-stage company (made-up numbers, not a real business):

| Input | Value |
|---|---|
| Fully loaded S&M spend in March | $30,000 |
| New customers won in March | 20 |
| CAC | $30,000 ÷ 20 = $1,500 |
| New MRR from those 20 customers | $2,500 |
| Monthly revenue per new customer | $2,500 ÷ 20 = $125 |
| Subscription gross margin | 80% |

CAC payback = $1,500 ÷ ($125 × 0.80) = $1,500 ÷ $100 = **15.0 months**.

The annual form gives the same result. New ARR is $2,500 × 12 = $30,000, so $30,000 ÷ ($30,000 × 0.80) × 12 = 15.0 months.

Now change only the revenue basis and the margin:

| Basis | Calculation | Payback |
|---|---|---|
| Revenue only | $1,500 ÷ $125 | 12.0 months |
| Gross margin 80% | $1,500 ÷ ($125 × 0.80) | 15.0 months |
| Gross margin 70% | $1,500 ÷ ($125 × 0.70) = $1,500 ÷ $87.50 | 17.1 months |

The revenue-only figure lands exactly on the 12-month line. The real figure is 15.0, and 17.1 if margin slips to 70%. The gap is a fixed proportion: revenue-only payback equals the gross-margin figure multiplied by your gross margin, so at 80% margin it understates payback by 20%, and at 70% by 30%.

The contract-size view is kinder than the single rule. $125 a month is $1,500 a year, which puts this company in Benchmarkit's under $5K annual contract value (ACV) bucket. In the 2026 report, that bucket's 25th percentile is 10 months, its median 11 and its 75th percentile 17. The revenue-only figure sits just above the median. The real figure is about 1.4 times the median (15.0 ÷ 11 = 1.36) but still inside the middle half; only the 70% margin case, at 17.1, reaches the 75th percentile. Against a single 12-month rule, the revenue-only figure looks borderline and the real one misses. Against companies selling at the same price point, the gross margin adjustment takes this company from just behind the median to clearly behind it, though still within the normal range.

One more input choice shifts the result. If you divide by average revenue across all customers instead of new customers, the answer moves whenever new customers pay a different amount from the base. Say older customers on cheaper plans pull the all-customer average down to $100: the same company would compute $1,500 ÷ ($100 × 0.80) = 18.8 months. If new customers pay less than the base, the error runs the other way and payback looks shorter than it is.

The calculator at the end of this article runs the same formula on your own inputs.

## What is a good CAC payback period?

Compare by contract size, not against one number. The sources below measure different things, so the column that matters most is "Statistic":

| Source (year; data period) | Population | Statistic | CAC payback |
|---|---|---|---|
| [Benchmarkit 2026 report](https://www.benchmarkit.ai/2026-saas-ai-native-metrics) (June 2026; CY-25) | B2B SaaS and AI-native companies, self-reported survey; 198 of 342 participants reported it | Median (25th to 75th percentile) | 16 months (10 to 24) |
| Benchmarkit 2026 report (CY-24; CY-23; CY-22) | Same report, earlier years | Median (25th to 75th percentile) | 18 months (12 to 24); 14 (10 to 20); 16 (11 to 23) |
| [ICONIQ State of Software 2025](https://www.iconiq.com/growth/reports/2025-state-of-software) (data through Q2 2025) | Public SaaS plus ICONIQ portfolio; companies under $10M ARR excluded; 21 companies in 2025 | Top-quartile threshold | 15.9 months |
| [Bessemer, Scaling to $100 Million](https://www.bvp.com/atlas/scaling-to-100-million) (Sept 2021; 2010 to 1H21) | Bessemer cloud portfolio, $1M to $10M ARR | Average | 15 months |
| Bessemer, Scaling to $100 Million (Sept 2021) | Guidance | Target | SMB under 12; mid-market under 18; enterprise under 24 months |
| [Bessemer, State of the Cloud 2023](https://www.bvp.com/atlas/state-of-the-cloud-2023) | Guidance | Target tiers | Good 12 to 18; better 6 to 12; best 0 to 6 months |

Benchmarkit's 2026 report also cuts the CY-25 data by ACV, the amount a customer pays per year. Values below were read from the report's chart, and the report does not publish how many companies sit in each bucket, so treat the extremes with care:

| Annual contract value | 25th percentile | Median | 75th percentile |
|---|---|---|---|
| Under $5K | 10 | 11 | 17 |
| $5K to $10K | 8 | 12 | 20 |
| $10K to $25K | 10 | 18 | 34 |
| $25K to $50K | 13 | 17 | 24 |
| $50K to $100K | 15 | 22 | 27 |

Months; lower is faster. The median doubles from the smallest contracts (11) to the largest published bucket (22), but not in a straight line: $10K to $25K, at 18, sits above $25K to $50K, at 17. The $10K to $25K bucket also has the widest spread, 10 to 34 months. The 2026 report publishes no row above $100K ACV. For larger contracts, the nearest figures are in the older [2025 edition](https://www.benchmarkit.ai/2025benchmarks), with a different sample and buckets: its CY-24 medians were 24 months at $100K to $250K and 18 above $250K.

The 2026 report also cuts payback by 2025 growth rate. Medians were 14 months for companies growing under 10%, 18 for 11 to 20%, 22 for 21 to 30% (the highest), 14 for 31 to 50% and 10 for growth over 50%. That is a correlation in one year's survey, not evidence that faster payback causes growth or the reverse. By solution type, horizontal B2B SaaS applications had a median of 14 months and vertical SaaS 18.

### Why the numbers disagree

**The statistic.** Benchmarkit's 16 months is the middle company. ICONIQ's 15.9 is the line the fastest quarter of its companies beat. The two are almost the same number while measuring different things, so a close match between two benchmarks means nothing until you know which statistic each one reports. Bessemer's 15 is an average. Bessemer's tiers are goals, not measurements. Compare your number with a top-quartile line or a target and call that the norm, and an ordinary result will look like a failure.

**The population.** ICONIQ excludes companies under $10M ARR, and Bessemer notes its portfolio is not a random sample of the private market. We did not find a payback benchmark specific to companies under $1M ARR in these sources. If you are pre-seed or seed, the ACV table is the closest fit available, and a loose one.

**The method.** Benchmarkit's 2025 report also printed a public-company median of 34 months. That figure is computed from net new implied ARR, which nets churn, downsell and expansion, and the report itself warns it is not an apples-to-apples comparison with the private figure. The 2026 report prints no public comparison. Keep the 2025 public figure out of your comparison. We could not find ICONIQ's exact formula in its report. Nor could we find a payback formula in Benchmarkit's 2026 report, so we can't confirm its figures use the same gross-margin basis as the 2025 edition and the worked example above.

**The year.** Benchmarkit's median went from 16 months (CY-22) to 14 (CY-23) to 18 (CY-24) to 16 (CY-25): down 11% in the latest year and back to the CY-22 level. The earlier years match the figures in the 2025 edition, which drew on 148 companies. The report does not say whether they were recomputed for this year's sample, so read the series as indicative, not as the same companies tracked over time. Benchmarkit and ICONIQ publish yearly, so check for a newer edition before putting a figure in a board deck.

### Where "5 to 7 months" comes from

Some explainers call five to seven months best in class without a source. The likely origin is Skok's [SaaS Metrics 2.0](https://www.forentrepreneurs.com/saas-metrics-2/), where he wrote that many of the best SaaS businesses recover CAC in five to seven months and described his guidelines as early guesses that held up. That is one investor's opinion from portfolio experience in the early 2010s, and every source in the table above was published later. In his definitions he also wrote: "In practice, it is very rare to find Months to recover CAC as less than 12."

The 2026 data puts it in context. In Benchmarkit's ACV cut, the lowest 25th percentile in any bucket is 8 months ($5K to $10K), and for contracts under $5,000 a year it is 10; across all companies it is also 10. Five to seven months beats the top-quartile line of every published ACV bucket, which makes it an exceptional result rather than a target. The same data also dates Skok's "very rare" line: about a quarter of the 2026 sample reported 10 months or less.

### How to use the benchmarks

Find your ACV row and compare with its median and 75th percentile. If you are above $10M ARR, ICONIQ's top-quartile line tells you what the fastest peers achieve. Use Bessemer's tiers to set a goal. And whichever row you pick, name it, with its year, next to your number.

## How to read your CAC payback number

### Against churn

The formula assumes a customer stays until their CAC is repaid. Murray points out that it ignores churn and the time value of money, and churn is the one that can break it.

Here is what churn does to the worked example. This is our illustration under a simple model: constant monthly churn, no expansion, $100 of monthly gross profit per customer, billed at the start of each month. After n months, a cohort has earned $100 × (1 - (1 - churn)^n) ÷ churn of gross profit per customer originally won, which has to reach the $1,500 CAC.

| Monthly churn | Customers left at month 15 | Months for the cohort to repay CAC |
|---|---|---|
| 0% | 100% | 15.0 |
| 2% | 74% | 17.7 |
| 5% | 46% | 27.0 |
| 6.7% or more | about 35% or fewer | Never |

The last row follows from one rule: when monthly churn is at or above 1 ÷ payback months (1 ÷ 15 = 6.7% here), the cohort never earns its CAC back. On the nominal 15-month figure, a business with 2% churn and one with 5% churn look identical. In cash terms one recovers in under a year and a half and the other takes more than two years.

Expansion runs the other way. When surviving customers pay more over time (the expansion that lifts [net revenue retention](/startup/net-revenue-retention)), the cohort can repay faster than the nominal figure. Our reading: strong NRR makes a longer payback more tolerable, weak retention makes a short one less reassuring. Skok makes a similar allowance, noting that in enterprise land-and-expand models a payback of around 20 months can work.

### Over a trailing period, not one month

Airtree Ventures notes that acquisition spend can lead conversion by months, in freemium funnels and in long sales cycles. March's spend may close in June. With small numbers, one deal also moves the result: the worked example rests on 20 customers. Our suggestion is to compute payback over a trailing quarter or 12 months, summing spend, new customers and new MRR across the period, and to keep the window the same every time you report it.

### When payback is too short

A very fast payback is not automatically a trophy. [Airtree](https://www.airtree.vc/open-source-vc/startup-metrics-cac-payback-and-ltv-cac-ratio) points out that a payback that is "too low" can mean you are under-investing in sales and marketing. If yours is far below your ACV row's 25th percentile and growth is slow, treat that as a prompt to test more spend.

### Next to magic number and burn multiple

CAC payback and the [SaaS magic number](/startup/saas-magic-number) are close relatives: payback in months is roughly 12 ÷ (magic number × gross margin). At 80% gross margin, a magic number of 1.0 is a 15-month payback, and 0.75 is 20 months. The conversion is approximate, because the magic number nets churn and counts expansion. The [burn multiple](/startup/burn-multiple) asks a different question: how much total cash you burned per dollar of net new ARR, counting all spend rather than only sales and marketing. So a healthy payback can sit beside a poor burn multiple when R&D or overhead is heavy.

## How to shorten CAC payback

Every lever moves one term of the formula. These follow from the arithmetic; we have no measured effect sizes for them.

**Raise revenue per new customer (denominator).** Pricing, packaging and plan minimums change what new customers pay from month one; see our guide to [SaaS pricing models](/marketing/saas-pricing-models). In the worked example, $150 a month instead of $125 cuts payback from 15.0 to 12.5 months ($1,500 ÷ ($150 × 0.80)). The effect shows up in new-customer revenue first and in your all-customer average only slowly.

**Raise gross margin (denominator).** Lower hosting, support and onboarding cost per customer. Reclassifying those costs into sales and marketing does not count: margin rises, but CAC rises with it.

**Lower CAC through channel mix (numerator).** Calculate payback by channel where you can, then move spend toward the channels whose customers repay fastest. Our guide to [SaaS marketing strategies](/marketing/saas-marketing-strategies) covers how to choose them.

**Choose the motion deliberately (numerator and timing).** A product-led motion and a sales-led motion put very different costs into CAC and create different lags between spend and revenue. Our reading: if onboarding and free-tier costs sit outside sales and marketing in a product-led business, payback reads shorter than the economics are. Weigh the trade-off in [PLG vs sales-led SaaS](/startup/plg-saas).

Before pulling any of these hard, check [product-market fit](/startup/product-market-fit). Our view: tuning payback on a product customers don't yet pull from you mostly optimizes the wrong thing.

## Run your numbers

Our [calculator](/calculator) asks for MRR, total customers, monthly churn, CAC and gross margin (prefilled at 80%, and treated as 80% if left empty). It returns gross-margin-adjusted CAC payback next to LTV, LTV:CAC and net MRR growth. It computes revenue per account as total MRR ÷ total customers, an average across all customers, so if your new customers pay noticeably more or less than your base, read the payback with that in mind. Results display in whole months: $50,000 MRR, 500 customers, $1,000 CAC and 80% margin is 12.5 months, shown as 13.

Then find your row in the ACV table above, and put the formula basis, the period and the benchmark you compared against beside the number.

## FAQ

### What is a good CAC payback period?

It depends on contract size. Benchmarkit's 2026 report put the median at 16 months for 2025 (CY-25), based on 198 companies, with the middle half between 10 and 24 months. Medians were 11 months for contracts under $5,000 a year and 22 months for $50,000 to $100,000. Bessemer's 2021 targets are under 12 months for SMB, under 18 for mid-market and under 24 for enterprise.

### How do you calculate CAC?

Add up fully loaded sales and marketing spend for a period, including salaries, commissions, ads, tools and agencies, then divide by the number of new customers won in the same period. For example, $30,000 of spend and 20 new customers is a $1,500 CAC. Decide whether customer success work on renewals and upsells belongs in it, as Bessemer counts it, and keep that choice consistent.

### Should CAC payback include gross margin?

Yes. Revenue that pays for hosting, support and onboarding is not available to repay acquisition spend, so the standard formula divides by gross profit. Every definition we reviewed, including Skok's, Bessemer's and the one in Benchmarkit's 2025 report, does this. Skipping it shrinks the result to the true payback × your gross margin: at 80% margin, a 12-month revenue-only figure is really 15 months.

### Does CAC payback account for churn?

No. The formula assumes a customer stays until their acquisition cost is repaid, and it ignores the time value of money too. If customers leave earlier, their CAC is never recovered. Under a simple constant-churn model, a cohort never pays back when monthly churn is at or above 1 ÷ payback months, which is 6.7% for a 15-month payback. Read payback next to churn and net revenue retention.

### CAC payback vs LTV:CAC: which matters more?

They answer different questions. Payback measures speed: how many months of cash you are out for each new customer, which matters most when cash is scarce. LTV:CAC measures lifetime return, but lifetime value rests on a churn assumption. With $100 of monthly gross profit per customer, LTV is $5,000 at 2% monthly churn and $2,000 at 5%. For an early-stage founder, we would plan cash on payback and use LTV:CAC as a check.
