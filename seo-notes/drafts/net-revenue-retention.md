---
title: "Net Revenue Retention: Formula, Benchmarks and What's Good"
slug: net-revenue-retention
category: startup
meta_description: "How to calculate net revenue retention, what's good for your stage and ACV, and why Anthropic's 900% usage-based NRR is no benchmark for a seat-based startup."
primary_keyword: net revenue retention
word_count: 2030
---

# Net Revenue Retention: Formula, Benchmarks and What's Good

Anthropic's [S-1 registration statement](https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm), filed on October 26, 2026, reports net revenue retention of approximately 900% as of September 30, 2026. If your board deck says 97%, you might feel like you are failing, but the two numbers are not measured the same way.

Net revenue retention (NRR) is the recurring revenue you get today from the customers you had a year ago, divided by what those same customers paid you then. New customers are left out. As for what is good, the median was 101% in SaaS Capital's 2025 survey of 1,000+ private B2B SaaS companies and 102% in the 2026 Aleph x Benchmarkit report on 2025 data, where companies under $5M ARR had a median of 94%.

This guide covers the calculation, the benchmark that fits you, why Anthropic's figure is not your bar, and the levers.

## What net revenue retention measures

NRR follows a fixed group of customers, a cohort, for a period, usually 12 months. Some expand through upsells, cross-sells, price increases or higher usage. Some contract by downgrading or using less. Some churn. New sign-ups belong to a later cohort and stay out.

Expansion minus contraction minus churn is the "net." Above 100%, your installed base grew on its own, with zero new logos. Below 100%, new sales must refill a hole before they add growth.

Net dollar retention (NDR) is the same metric under another name for the SaaS Metrics Standards Board and ChartMogul. Public companies add labels such as Datadog's "dollar-based net retention" and MongoDB's "net ARR expansion rate." The footnoted definition matters more than the name.

## How to calculate NRR (with a worked example)

**NRR = (starting MRR + expansion − contraction − churn) ÷ starting MRR**

1. Freeze the list of customers active on a start date, with their MRR.
2. Twelve months later, pull MRR for exactly those customers.
3. Split the change into expansion, contraction and churn.
4. Exclude anyone who signed after the start date.
5. Divide ending cohort MRR by starting MRR.

Illustrative cohort (made-up numbers, not company data):

| Line | Amount | How it is used |
|---|---|---|
| Cohort on Oct 1, 2025 (40 customers) | $50,000 MRR | Starting MRR |
| Expansion over 12 months | +$9,000 | Upgrades, seats, price increases |
| Contraction | -$2,500 | Downgrades |
| Churn (6 customers lost) | -$4,000 | Cancellations |
| New customers signed after Oct 1 | $12,000 | Excluded |
| **NRR** | **105%** | (50,000 + 9,000 − 2,500 − 4,000) ÷ 50,000 |
| **GRR** | **87%** | (50,000 − 2,500 − 4,000) ÷ 50,000 |
| Wrong NRR (new customers included) | 129% | (52,500 + 12,000) ÷ 50,000 |
| Logo retention | 85% | 34 of 40 customers still paying |

105% is honest. 129% is what lumping everyone together produces; the 24-point gap came from sales, not retention.

Build the number from the customer list, not summed movement totals. The [SaaS Metrics Standards Board](https://www.saasmetricsboard.com/net-revenue-retention) calls this cohort method the most accurate and warns that a movement formula can be thrown off by customers who joined and churned inside the window.

Our [SaaS metrics calculator](/calculator) does not compute NRR, but it covers the board-deck figures that sit beside it: LTV, the LTV:CAC ratio, net MRR growth and CAC payback period.

## NRR vs GRR vs net dollar retention vs logo retention

| Metric | What it counts | Can exceed 100%? | What it tells you |
|---|---|---|---|
| NRR (also called NDR) | Cohort revenue after expansion, contraction and churn | Yes | Whether the installed base grows on its own |
| GRR (gross revenue retention) | Cohort revenue, each customer capped at starting MRR | No | Revenue kept before any upsell |
| Logo retention | Share of cohort customers still paying | No | Churn that a few large accounts can hide |

NRR is always at least as high as GRR, since expansion only adds. A wide gap means expansion is covering for churn, and expansion can slow.

## Six calculation mistakes that flatter or sink the number

1. **New-logo revenue leaking into expansion.** Aleph calls this the most common error. Above, it turns 105% into 129% and hides a 13% gross loss.
2. **Contraction dropped or folded into churn.** Drop it and NRR is overstated. Fold it into churn and NRR stays correct, but downgrades vanish as a separate warning sign.
3. **Multiplying a monthly rate instead of compounding.** 101% monthly is 1.01 to the 12th power, or 112.7% a year, not 112%. A 99% month compounds to 88.6%. The Standards Board's rule: monthly to the 12th power, quarterly to the 4th.
4. **Inconsistent windows.** Some companies report a point-in-time rate; Datadog averages 12 trailing point-in-time rates, weighted. ChartMogul recommends 12 months, to wash out seasonality, measured the same way every time.
5. **Unstated basis choices.** The Standards Board prefers recognized revenue over bookings or cash, allows a 30 to 90 day win-back window for returning customers, and wants usage overages clearly flagged.
6. **A cohort too young to measure.** The Standards Board notes the cohort method may not help a company with few or no customers older than a year. You can annualize a quarter, but with a dozen customers one upgrade swings it. Say so, and lean on GRR and logo retention.

## What is a good net revenue retention?

Published medians disagree, largely because they measure different companies.

| Source (published; data) | Population | Statistic | NRR |
|---|---|---|---|
| [SaaS Capital](https://www.saas-capital.com/wp-content/uploads/2025/09/RB32WS1-2025-B2B-SaaS-Retention-Benchmarks.pdf) (2025; surveyed Q1 2025) | 1,000+ private B2B SaaS companies | Median | 101% (GRR 91%) |
| SaaS Capital 2025, by ACV | $1M+ ARR, ACV under $12k / over $250k | Median (read from charts) | 98% / 106% |
| [Aleph x Benchmarkit](https://www.getaleph.com/answers/net-revenue-retention-saas-2026) (June 2026; CY2025) | 230 of 342 B2B SaaS and AI-native companies reporting NRR | Median / bottom quartile | 102% / 92% |
| Aleph x Benchmarkit 2026, by ARR | Under $5M ARR | Median | 94% |
| Aleph x Benchmarkit 2026, by pricing | Usage-based vs seat-based | Median | 108% vs 98% |
| [High Alpha](https://kylepoyar.substack.com/p/2025-saas-benchmarks-report) (2025; surveyed Aug to Sep 2025) | 800+ participants; ARR under $1M / $1M to $5M / $5M to $20M / $20M to $50M | Median | 100% / 104% / 103% / 103% |
| High Alpha 2025, same ARR bands | Same | 75th percentile | 116% / 110% / 115% / 110% |
| [ChartMogul](https://chartmogul.com/reports/saas-retention-the-ai-churn-wave/) (Dec 2025; 2025 retention) | B2B SaaS companies with $250k+ ARR | Median / upper quartile | 82% / 97% |
| [Bessemer](https://www.bvp.com/atlas/state-of-the-cloud-2023) (April 2023) | Investor guidance, not measured data | Good / better / best | 100% / 110% / 120%+ |

The 82% versus 101% to 102% gap is mostly about who is counted. ChartMogul's sample starts at $250k ARR, SaaS Capital's ACV cuts at $1M ARR, and the datasets cover different periods and respondents. That is our reading, not a published finding.

Compare yourself with the row matching your ARR, ACV and pricing model. Below 100% is common under $5M ARR and at low ACV. A 97% at $2M ARR beats the Aleph x Benchmarkit under-$5M median yet trails High Alpha's 104% for $1M to $5M, so name the dataset you compare against. Watch GRR too: SaaS Capital calls 90% or more "table stakes." Contract length barely moves its medians: multi-year 103%, annual 101%, month-to-month 100%.

## Anthropic's 900% and why usage revenue is not comparable

The S-1 calculates NRR by dividing Qualified Customers' revenue in the three months ending on the measurement date by their revenue in the three months ending a year earlier. A Qualified Customer is any customer with at least $1 of revenue in the base period, excluding Claude Pro and Max subscribers, whose fixed-price subscriptions do not reflect the expansion and contraction the metric is meant to capture.

So approximately 900% as of September 30, 2026 means those customers generated roughly nine times the revenue of the same quarter a year before. Consumption-based revenue, metered in tokens, was 80% of revenue for the six months ended June 30, 2026, which reached $16.3 billion against $1.2 billion a year earlier. That is a half-year revenue figure; the NRR compares two quarters.

Why it runs hot next to a seat-based startup's ARR-based NRR (our reading):

- Spend follows workload, so usage grows without a new contract.
- A customer with a few dollars of base-quarter revenue can multiply many times over.
- Quarterly revenue windows capture spikes that 12-month ARR smooths out.
- The fixed-price plans are excluded.

Usage-heavy public companies, each with its own definition, report figures in the 120s: Snowflake 126% as of July 31, 2026 (on product revenue), MongoDB's net ARR expansion rate 122% on the same date, and Datadog's trailing-12 rate in the low 120s as of June 30, 2026.

The same filings show the volatility. [Datadog's 10-Q](https://www.sec.gov/Archives/edgar/data/1561550/000162828026054458/ddog-20260630.htm) notes reduced usage from its largest customer starting in the third quarter of 2026. [Snowflake's 10-Q](https://www.sec.gov/Archives/edgar/data/1640147/000164014726000037/snow-20260731.htm) says it expects NRR to decrease over the long term. Anthropic says its metrics are not independently verified and many contracts let customers reduce usage with limited or no notice.

Compare your number with companies that share your pricing model and definition, not with Anthropic. And date the 900% when you cite it, because an S-1 can be amended.

## What investors read into your NRR

One reading is growth without new logos. In SaaS Capital's 2025 data, companies with NRR of 110% to 120% grew 9 percentage points faster than those at 100% to 110%. Kyle Poyar, co-author of High Alpha's 2025 report, calls NRR and CAC payback "the two strongest predictors of long term and profitable growth."

Another is a fundability bar, and Bessemer's 2023 tiers in the table above are one investor's published version of it.

A third treats it as a definition to audit. Altimeter's Jamin Ball [wrote in 2021](https://cloudedjudgement.substack.com/p/clouded-judgement-8621) that net retention is non-GAAP with no standard definition, so the footnote matters more than the headline. Aleph advises reporting NRR and GRR together, because NRR alone can mask churn.

Show NRR, GRR and logo retention side by side, with a one-line footnote such as "NRR = MRR on Oct 1, 2026 from customers active on Oct 1, 2025 ÷ their MRR on Oct 1, 2025; recognized revenue; new customers excluded; usage overages included."

## Levers that move NRR

**Price on an axis that grows with the customer.** High Alpha advises building natural upsell levers into packaging, negotiating annual increases at renewal, and charging for new core features instead of bundling them in. See [how pricing models fit each go-to-market motion](/marketing/saas-pricing-models).

**Add a usage or hybrid component where value scales with consumption.** Usage-based companies had a 108% median against 98% for seat-based in the Aleph x Benchmarkit data; the cost is the volatility the Datadog and Snowflake filings describe. For definitions, see [the seven SaaS pricing models explained](/startup/choosing-the-right-pricing-model-for-saas-startups).

**Give expansion a path that fits your motion.** In our view, product-led companies expand through self-serve upgrades and sales-led ones through account managers. Your [product-led vs sales-led decision](/startup/plg-saas) sets which to build.

**Right-size first deals and default to annual.** In ChartMogul's December 2025 report, Poyar advises starting small and proving value quickly rather than overselling the first deal, and selling more annual plans. SaaS Capital's term data suggests annual terms alone won't lift NRR much.

**Catch downgrades before they become cancellations.** Stripe advises offering paths that keep a customer rather than losing them entirely; a lower tier or pause option is our suggestion.

**Fix involuntary churn.** ChartMogul flags expired cards and declined payments; Stripe suggests renewal reminders and flexible payment options.

**Point customer success at accounts with room to grow.** That one is our editorial judgment.

Your next step: pull last year's cohort this week, compute NRR, GRR and logo retention, and write the footnote before anyone asks.

## FAQ

### What is net revenue retention?

Recurring revenue today from the customers you had at the start of a period, usually 12 months, divided by what they paid then. It nets expansion against contraction and churn, excludes new customers, and is also called NDR.

### How do you calculate net revenue retention?

Take a fixed cohort's starting MRR, add expansion, subtract contraction and churn, and divide by starting MRR, excluding anyone who signed later.

### What is a good net revenue retention?

It depends on size, ACV and pricing model. Medians were 101% in SaaS Capital's 2025 survey and 102% in the 2026 Aleph x Benchmarkit report, but 94% under $5M ARR in the latter. Bessemer's 2023 guidance called 100% good, 110% better, 120%+ best.

### What is the difference between NRR and GRR?

NRR includes expansion and can exceed 100%. GRR caps each customer at starting revenue, so it cannot. Together they show whether expansion is covering for churn.

### Can net revenue retention exceed 100%?

Yes, when expansion from existing customers outweighs revenue lost to contraction and churn, meaning the installed base grew without new customers. GRR and logo retention cannot, because they ignore expansion.
