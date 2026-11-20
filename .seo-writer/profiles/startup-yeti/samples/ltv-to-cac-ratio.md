# LTV to CAC Ratio: Formula, 2026 Benchmarks and What's Good
<!-- meta_description: LTV to CAC ratio formula on a gross margin basis, where the 3:1 rule of thumb comes from, 2026 benchmarks by growth rate and stage, and a free calculator. -->
<!-- slug: ltv-to-cac-ratio | category: startup -->

Every LTV:CAC explainer we read for this article gives the same answer to "what's good": 3:1. The earliest statement of that rule we could find is a blog post from December 2009, in which David Skok wrote that lifetime value "should be about 3 x CAC" and that "3x appears to be a rough minimum" for SaaS ([Startup Killer](https://www.forentrepreneurs.com/startup-killer/)). [Benchmarkit's 2026 survey](https://www.benchmarkit.ai/2026-saas-ai-native-metrics) puts the median company above that line, at 4.1x for 2025. And whether your own number clears it depends on a choice none of those explainers ties to the rule: does your lifetime value count revenue, or gross profit?

The formula: **LTV:CAC = (monthly revenue per customer × gross margin ÷ monthly churn) ÷ CAC**. A result of 4 means each customer is expected to return $4 of gross profit over their lifetime for every $1 you spent to win them.

What's good: that 4.1x median covers calendar 2025 (CY-25) and the 146 of the survey's 342 companies that reported the metric, with the middle half between 2.7x and 7.8x. Bessemer Venture Partners recommends investing in customer acquisition once the ratio is 3x or more, measured on gross margin. Below: formula variants, a worked example showing how much churn moves the answer, where 3:1 came from, 2026 benchmarks by growth rate and ARR, how to read your ratio, and a calculator.

## What the LTV to CAC ratio measures

LTV:CAC compares the gross profit a customer brings in over their whole relationship with you (lifetime value, or LTV) with what it cost to acquire them (customer acquisition cost, or CAC).

Gross profit, not revenue, because revenue first has to cover the cost of serving the customer: hosting, support, onboarding. Only what remains can pay back acquisition spend. The investor and benchmark definitions we traced use gross profit. Skok's 2009 post bases LTV on the gross margin you expect to make from a customer. Bessemer, in its 2021 guide [Scaling to $100 Million](https://www.bvp.com/atlas/scaling-to-100-million), calls lifetime value "the gross margin-affected value of a customer." And the glossary in Benchmarkit's 2025 report defines the ratio as average ARR per account × recurring revenue gross margin ÷ churn rate, divided by CAC per new customer.

Not every explainer follows suit: some popular ones compute LTV on revenue alone. That is not a rounding difference. At 80% gross margin, revenue LTV is 25% higher than gross-margin LTV (1 ÷ 0.80 = 1.25), and the ratio rises with it.

## The LTV:CAC formula and its variants

**LTV:CAC = (monthly revenue per customer × gross margin ÷ monthly churn) ÷ CAC**

Two parts, each with choices inside:

- **LTV = ARPA × gross margin ÷ churn.** ARPA is average revenue per account. Dividing by churn is a shortcut for multiplying by the average customer lifetime, because lifetime = 1 ÷ churn: at 2% monthly churn, the average customer stays 50 months. Keep the periods consistent. Monthly ARPA goes with monthly churn, annual ARPA with annual churn.
- **CAC = fully loaded sales and marketing spend ÷ new customers won in the same period.** Fully loaded means salaries, commissions, ads, tools and agencies, not just the ad budget. The denominator is the trap. Bill Gurley [warned in 2012](https://abovethecrowd.com/2012/09/04/the-dangerous-seduction-of-the-lifetime-value-ltv-formula/) that marketers "often divide spend by total customers" instead of only the customers the spend actually bought (more on this below).

The same name covers several formulas:

| Variant | LTV formula | Who uses it | Effect on the ratio |
|---|---|---|---|
| Revenue LTV | ARPA ÷ churn | Some popular glossaries; the guideline on Skok's definitions page (below) | Higher than gross-margin LTV by 1 ÷ gross margin: 1.25 times at 80% |
| Gross-margin LTV | ARPA × gross margin ÷ churn | Skok (2009), Bessemer (2021), Benchmarkit's 2025 glossary | The standard form on this page and in our calculator |
| Discounted LTV | Annual gross profit × retention rate ÷ (1 + discount rate - retention rate) | One finance-training explainer we read; Gurley calls LTV "the net present value of the profit stream" | Lower, and much lower when churn is low (worked example below) |
| Revenue churn instead of logo churn | Churn = 1 minus gross revenue retention, not customers lost ÷ customers at start | Benchmarkit's 2024 benchmarks page; its 2025 glossary just says "churn rate" | Differs whenever bigger and smaller customers leave at different rates |

None of these counts expansion revenue. Skok's definitions page gives a separate formula for customers whose spend grows over time, and if a lot of your growth comes from existing accounts, your [net revenue retention](/startup/net-revenue-retention) says more about that than this ratio does.

## A worked example: how churn moves the ratio

An illustrative company (made-up numbers, not a real business):

| Input | Value |
|---|---|
| ARPA | $100 a month |
| Gross margin | 80% |
| CAC | $1,000 |
| Monthly churn | 2% |

LTV = $100 × 0.80 ÷ 0.02 = **$4,000**. LTV:CAC = $4,000 ÷ $1,000 = **4.0x**. The implied average lifetime is 1 ÷ 0.02 = 50 months.

Now change only churn:

| Monthly churn | LTV | LTV:CAC | Implied lifetime |
|---|---|---|---|
| 1% | $100 × 0.80 ÷ 0.01 = $8,000 | 8.0x | 100 months |
| 2% | $4,000 | 4.0x | 50 months |
| 3% | $100 × 0.80 ÷ 0.03 = $2,667 | 2.7x | 33 months |
| 5% | $100 × 0.80 ÷ 0.05 = $1,600 | 1.6x | 20 months |

The same company reads 8.0x or 1.6x depending on one input. Churn sits in the denominator, so halving it doubles the ratio. ARPA and margin move the ratio in direct proportion, and CAC moves it inversely, as churn does. Churn stands out because a move that sounds small isn't. Going from 2% to 3% a month takes the ratio from 4.0x to 2.7x.

**Basis.** On revenue, the 2% case becomes $100 ÷ 0.02 = $5,000 and 5.0x. Same company, same month, a full point higher.

**Monthly vs annual churn.** If you only know annual churn, don't divide it by 12, and don't multiply monthly churn by 12 to report an annual figure. 2% monthly churn compounds to 21.5% a year (1 - 0.98¹²), not 24%. 5% monthly compounds to 46.0%, not 60%.

**Discounting.** The simple formula treats a dollar of gross profit in year 10 as worth the same as one today. When churn is low, that matters a lot. A separate illustration, on annual figures (our calculation, using the discounted formula from the variants table): $200 of annual gross profit per customer, 5% annual churn, CAC $425.

- Undiscounted: LTV = $200 ÷ 0.05 = $4,000. Ratio $4,000 ÷ $425 = 9.4x. The implied lifetime is 1 ÷ 0.05 = 20 years.
- Discounted at 10% a year: LTV = $200 × 0.95 ÷ (1 + 0.10 - 0.95) = $1,266.67. Ratio $1,266.67 ÷ $425 = about 3.0x.

Discounting cuts LTV by 68% here (1 - $1,266.67 ÷ $4,000 = 0.68). The lower the churn, the more of the simple LTV sits in distant years, and the bigger that gap gets.

## Where the 3:1 rule comes from

The earliest version we found is Skok's December 2009 post, Startup Killer. He wrote that LTV "should be about 3 x CAC" for a viable SaaS or recurring revenue business, called 3x "a rough minimum," and noted that public companies such as Salesforce.com had multiples "more like 5 x CAC." He presented it as a very rough rule of thumb, and he defined LTV in the same post on gross margin.

In SaaS Metrics 2.0 (2013), Skok wrote that the best SaaS businesses run "higher than 3, sometimes as high as 7 or 8," and described his guidelines as early guesses that had held up well, with situations where it makes sense to break them.

Then the basis question. Skok's [definitions page](https://www.forentrepreneurs.com/saas-metrics-2-definitions-2/) says the "higher than 3" guideline assumes "the simpler LTV formula" without a gross margin adjustment, for a business with gross margin of 80% or higher. That contradicts the 2009 post, which built LTV on gross margin. Both are Skok's words; we can't tell you which he meant as the standard.

The difference is easy to convert. Gross-margin ratio = revenue ratio × gross margin.

| Starting point | Converted |
|---|---|
| 3.0 on revenue LTV, at 80% gross margin | 3.0 × 0.80 = 2.4 on gross-margin LTV |
| 3.0 on gross-margin LTV, at 80% gross margin | 3.0 ÷ 0.80 = 3.75 on revenue LTV |

So at 80% gross margin, a company at 2.6x on a gross-margin basis is at 2.6 ÷ 0.80 = 3.25 on a revenue basis. It fails Bessemer's 3x gross-margin bar and passes Skok's definitions-page bar, with the same customers.

Later sources kept 3x but pinned the basis. Bessemer's 2021 guidance applies 3x to gross-margin lifetime value: it recommends investing in acquisition "when CLTV / CACs are 3x+," and notes that customers are profitable only after 1x. Andreessen Horowitz, [writing about consumer companies](https://a16z.com/why-do-investors-care-so-much-about-ltvcac/) in 2023, said investors often use 3x as a rough benchmark of a consumer company's financial health, with LTV reaching 3x CAC within 5 years. That is consumer scope, and the 5-year limit is a stricter test than an uncapped lifetime.

Our verdict: 3:1 is guidance from investors' experience, not a measurement. It is a reasonable floor on a gross-margin basis. It is not what a typical SaaS company reports, as the next section shows.

## What is a good LTV to CAC ratio? 2026 benchmarks

Compare your ratio with a measured distribution, computed on a gross-margin basis, for companies like yours. The most current one we found is Benchmarkit's 2026 SaaS and AI-native metrics report, published June 2026: a self-reported survey of 342 B2B SaaS and AI-native software companies, of which 146 reported LTV:CAC.

| Data year (2026 report) | 25th percentile | Median | 75th percentile |
|---|---|---|---|
| CY-25 | 2.7x | 4.1x | 7.8x |
| CY-24 | 2.8x | 3.7x | 6.0x |
| CY-23 | 2.3x | 3.6x | 6.0x |
| CY-22 | 2.3x | 3.6x | 5.0x |

Values read from the report's charts. The median sat at 3.6x to 3.7x from CY-22 to CY-24 and rose to 4.1x in CY-25 (up 10.8%). The 75th percentile rose from 6.0x to 7.8x, a 30% jump, while the 25th percentile slipped from 2.8x to 2.7x. The report calls CY-25 an inflection point. It doesn't say whether the earlier years are the same companies, so read the series as indicative, not as one group tracked over time.

The 2026 report also cuts the CY-25 data by growth rate, ARR, go-to-market motion and solution type. Each of these charts is labelled N = 146, but the report doesn't publish how many companies sit in each bucket, so treat the extremes with care. Values are again read from the charts.

**By 2025 growth rate** (2026 report, CY-25, chart N = 146):

| Growth rate | 25th percentile | Median | 75th percentile |
|---|---|---|---|
| Under 10% | 2.0x | 3.2x | 4.1x |
| 11 to 20% | 3.1x | 4.6x | 7.7x |
| 21 to 30% | 3.5x | 3.9x | 7.0x |
| 31 to 50% | 2.8x | 4.0x | 6.8x |
| Over 50% | 3.8x | 7.2x | 10.8x |

The fastest growers had the highest median, 7.2x, and the slowest the lowest, 3.2x. That is a correlation in one year's survey, not proof that a high ratio causes growth. But it doesn't fit the idea that a high ratio usually means a company is starving its growth.

**By ARR** (2026 report, CY-25, chart N = 146):

| ARR | 25th percentile | Median | 75th percentile |
|---|---|---|---|
| Under $5M | 2.7x | 4.6x | 10.6x |
| $5M to $20M | 3.8x | 5.3x | 7.7x |
| $20M to $50M | 2.2x | 3.2x | 7.2x |
| $50M to $100M | 2.0x | 3.1x | 4.9x |
| Over $100M | 3.6x | 8.0x | 11.0x |

The 2026 report doesn't split the under-$5M bucket further. Benchmarkit's [2025 edition](https://www.benchmarkit.ai/2025benchmarks), a different sample (101 companies reporting, CY-24 data) with different buckets, put the median for companies under $1M ARR at 5.0x (25th percentile 3.0x, 75th 9.5x). Read it as a separate data point, not as a trend.

**By go-to-market motion and solution type** (2026 report, CY-25, chart N = 146):

| Segment | 25th percentile | Median | 75th percentile |
|---|---|---|---|
| Motion: product-led | 2.8x | 4.6x | 7.7x |
| Motion: sales-led | 2.7x | 4.0x | 7.0x |
| Motion: hybrid (product plus sales) | 2.7x | 6.8x | 9.8x |
| Solution: B2B SaaS application (horizontal) | 2.7x | 4.1x | 7.7x |
| Solution: vertical SaaS application | 3.7x | 5.6x | 10.9x |

### What these numbers can and can't tell you

**The formula isn't printed.** We couldn't find an LTV formula anywhere in the 2026 report. Benchmarkit's 2025 glossary and 2024 benchmarks page both define LTV on gross margin, and Aleph, the 2026 report's co-publisher, defines it in an explainer on the 2026 figures as annual revenue per customer × gross margin ÷ annual churn. So a gross-margin basis is the best-supported reading. It isn't confirmed, and neither is whether churn means customers or revenue.

**It's self-reported.** Companies supplied their own figures, so their choices about what goes into CAC and churn may differ from yours.

How to use it: find your growth-rate or ARR row and compare with its median and 75th percentile, not with the overall figure.

## How to read your LTV to CAC ratio

### Below 1x

A customer's lifetime gross profit doesn't even repay what you spent to win them, and overhead such as R&D and rent comes on top. Bessemer's guide says customers are profitable only after 1x. Fix this before you spend more on acquisition.

### Around 3x

This is Bessemer's threshold for investing in acquisition, on a gross-margin basis. In the 2026 data, 3.0x sits between the 25th percentile (2.7x) and the median (4.1x). A reasonable result, and an ordinary one.

### Very high

A high ratio isn't automatically a problem. Skok's best businesses reached 7 or 8, and the 2026 75th percentile is 7.8x. Two explainers we read, and Google's AI Overview for this query, treat ratios above 5x as a possible sign of underinvestment in growth, without citing a source for the threshold. Our reading: a high ratio with slow growth is a prompt to test more acquisition spend. A high ratio that comes mostly from very low churn may just be an undiscounted 100-month lifetime talking, as the discounting example above shows. Check how much of your LTV falls in years you can't yet see.

### When customers come in for free

If your CAC divides spend by every new customer, including those from word of mouth and organic search, a high ratio can be an accounting artifact. Gurley's point was that organic customers outperform purchased ones, so blending them flatters what paid acquisition returns. Where you can, compute paid CAC separately.

### Against CAC payback

[CAC payback](/startup/cac-payback-period) is CAC ÷ (ARPA × gross margin), in months. When both metrics use the same ARPA and gross margin, the two are linked by churn:

**LTV:CAC = 1 ÷ (payback months × monthly churn)**

In the worked example, payback is $1,000 ÷ ($100 × 0.80) = 12.5 months, and 1 ÷ (12.5 × 0.02) = 4.0x, the same answer. A 15-month payback gives 1 ÷ (15 × 0.02) = 3.33x at 2% churn and 1 ÷ (15 × 0.05) = 1.33x at 5%. To reach 3.0x on a 15-month payback, monthly churn has to be at or below 1 ÷ 45 = 2.22%.

Use it as a sanity check. If your stated payback and churn imply a ratio far from the one you report, one of the three numbers uses different inputs.

## How to improve your LTV to CAC ratio

Each lever moves one term of the formula. The figures below apply the formula to the worked example; they show the arithmetic only, with no measured effect behind them.

**Cut churn (LTV denominator).** In the example it's the widest swing: 2% to 1% doubles the ratio from 4.0x to 8.0x. Skok's SaaS Metrics 2.0 describes HubSpot improving its LTV:CAC mainly by cutting monthly MRR churn from 3.5% to 1.5%.

**Raise ARPA (LTV numerator).** Pricing and packaging change what each account pays; see our guide to [SaaS pricing models](/marketing/saas-pricing-models). At $120 a month instead of $100, LTV = $120 × 0.80 ÷ 0.02 = $4,800 and the ratio is 4.8x.

**Protect gross margin (LTV numerator).** If margin slips from 80% to 70%, LTV = $100 × 0.70 ÷ 0.02 = $3,500 and the ratio drops to 3.5x. Moving support or onboarding costs into sales and marketing doesn't help: margin rises, but CAC rises with it.

**Lower CAC by channel (denominator).** Compute the ratio per channel where your data allows, and shift spend toward the channels whose customers both cost less and stay longer. Cutting CAC from $1,000 to $800 takes the example to $4,000 ÷ $800 = 5.0x. Our guide to [SaaS marketing strategies](/marketing/saas-marketing-strategies) covers how to choose channels.

**Choose the motion deliberately.** In the 2026 Benchmarkit data, hybrid companies had the highest motion median, 6.8x, against 4.6x for product-led and 4.0x for sales-led. That doesn't mean switching motion will move your ratio; the motion has to fit the product. Weigh it in [PLG vs sales-led SaaS](/startup/plg-saas).

## Run your numbers

Our [calculator](/calculator) asks for MRR, total customers, monthly churn, CAC per customer and gross margin (prefilled at 80%, and treated as 80% if left empty or set to 0). An optional new and expansion MRR field feeds only the net MRR growth figure, not LTV. It computes:

- ARPA = MRR ÷ total customers, averaged across all customers rather than only new ones
- LTV = ARPA × gross margin ÷ monthly churn
- LTV:CAC = LTV ÷ CAC, shown to one decimal

So the result is gross-margin based, undiscounted, with no lifetime cap and no expansion revenue. The labels it shows are our own bands, not a measured standard: 5.0 and above "Excellent," 3.0 to 4.99 "Good," 1.0 to 2.99 "Below target," and below 1 "Needs improvement." It doesn't flag very high ratios. "Good" starts at 3.0, Bessemer's threshold for investing in acquisition. "Excellent" starts at 5.0, between the median (4.1x) and the 75th percentile (7.8x) in Benchmarkit's 2026 report (CY-25, 146 companies).

A worked run: $50,000 MRR, 500 customers, 5% monthly churn, $500 CAC and 80% margin. ARPA is $50,000 ÷ 500 = $100, LTV is $100 × 0.80 ÷ 0.05 = $1,600, and LTV:CAC is $1,600 ÷ $500 = 3.2x, labelled "Good."

Then find your row in the benchmark tables above, and put the basis, the churn type and the row beside your number.

## FAQ

### What is a good LTV to CAC ratio?

Benchmarkit's 2026 report put the median at 4.1x for 2025 (CY-25), based on 146 companies, with the middle half between 2.7x and 7.8x. In the same report, companies under $5M ARR had a median of 4.6x. Bessemer recommends investing in acquisition at 3x or more on a gross-margin basis, so treat 3:1 as a floor rather than a typical result.

### How do you calculate LTV for a SaaS company?

Multiply average monthly revenue per account by gross margin, then divide by monthly churn. With $100 a month, 80% gross margin and 2% churn, LTV is $100 × 0.80 ÷ 0.02 = $4,000. Keep periods consistent, decide whether churn means customers or revenue, and remember the simple formula ignores expansion and discounting, so it overstates LTV when churn is very low.

### Should LTV use revenue or gross margin?

Gross margin. Revenue first pays for hosting, support and onboarding, so only gross profit can repay acquisition spend. Skok's 2009 post, Bessemer and Benchmarkit's 2025 glossary all use it. Revenue LTV is higher by 1 ÷ gross margin, so at 80% margin a revenue-based 3.0x is 2.4x on a gross-margin basis. Whichever you use, state it next to the number.

### Can an LTV to CAC ratio be too high?

Not automatically. Benchmarkit's 2026 report put the 75th percentile at 7.8x for CY-25, and in the same data companies growing over 50% had a median of 7.2x. A high ratio is worth questioning when growth is slow, which may mean you could spend more on acquisition, or when it rests on very low churn, because an undiscounted lifetime of many years inflates LTV. Discount it and see what's left.

### LTV:CAC vs CAC payback: which should I track?

Both, because each checks the other. Payback tells you how long your cash is tied up in each new customer. The ratio tells you the total return if customers stay as long as your churn rate implies. With the same ARPA and margin, LTV:CAC equals 1 ÷ (payback months × monthly churn), so a 12.5-month payback at 2% churn is a 4.0x ratio. If your two figures disagree, check the inputs.
