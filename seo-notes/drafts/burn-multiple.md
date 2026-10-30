---
title: "Burn Multiple: Formula, Benchmarks by ARR and What's Good"
slug: burn-multiple
category: startup
meta_description: "The burn multiple formula, the input rules a board will accept, Sacks' original 2020 tiers and dated benchmarks by ARR band to judge what's good at your stage."
primary_keyword: burn multiple
word_count: 2378
---

# Burn Multiple: Formula, Benchmarks by ARR and What's Good

David Sacks introduced the burn multiple on April 23, 2020, in a [post that opens](https://sacks.substack.com/p/the-burn-multiple-51a7e43cb200) "As the economic crisis deepens." Six years later, on September 17, 2026, ICONIQ added it to its [Pacesetter Index](https://www.iconiq.com/growth/insights/the-iconiq-pacesetter-index) of top-growth AI companies, where compute costs make negative free cash flow common: "Neither cash flow nor growth captures that on its own, making burn multiple an important measure of capital efficiency." In that cohort the median is 1.8x at $10M to $25M ARR and 0.3x at $100M+. Same metric, very different bar.

The formula is net burn divided by net new ARR over the same period. A 2x means you burned $2 for every $1 of net new ARR. What counts as good is harder. Sacks' rule of thumb for venture-stage startups calls under 1x "Amazing" and 1.5x to 2x "Good." Broader data shifts with size too: a16z's 2022 analysis of private software companies put the median at 1.6x under $10M ARR and 0.5x at $75M and above.

Below: Sacks' tiers, board-ready input rules, a worked quarter, benchmarks by ARR band and the levers.

## What the burn multiple measures, and where it came from

Sacks' formula: **Burn Multiple = Net Burn / Net New ARR**. It asks "how much is the startup burning in order to generate each incremental dollar of ARR?" Lower is better.

He started from two existing ratios: the Hype Ratio (capital raised or burned over ARR, which his post links to Dave Kellogg's 2016 Hype Factor) and Bessemer's ratio of net new ARR to net burn. Sacks flipped Bessemer's version and called the result "an annualized version of the Hype Ratio."

Sacks calls it "a catch-all metric": "Any serious problem will eventually impact the Burn Multiple by either increasing burn, decreasing net new ARR, or (most tricky) increasing both but at disproportionate rates." He also reads it as a [product-market fit](/startup/product-market-fit) signal. A low multiple suggests "the market is pulling product out of the startup"; a high one, that "the startup is pushing its product onto the market."

Unlike burn rate (dollars spent per month) or runway (cash divided by burn rate), it relates burn to growth.

## Sacks' original tiers (April 2020)

"For venture-stage startups, these are reasonably good rules of thumb," Sacks wrote above this table:

| Burn multiple | Sacks' label |
|---|---|
| Under 1x | Amazing |
| 1 to 1.5x | Great |
| 1.5 to 2x | Good |
| 2 to 3x | Suspect |
| Over 3x | Bad |

It is one investor's 2020 rule of thumb, not measured data. Check the original before it goes in a deck.

His example: at a Q1 board meeting, $2M burned for $1M of new ARR is 2x, "reasonable for an early-stage startup." $5M for the same $1M is 5x, and the company "should probably cut costs immediately."

He expected it to fall with stage: "a seed stage company might have a Burn Multiple of 3 because it just started selling. After the Series A, it might drop to 2." Eventually it "should also approach 0 over time." Note the tension: 3x sits on the line between his own Suspect and Bad rows, yet he treats it as acceptable at seed.

## How to calculate burn multiple for a board deck

Sacks' 2020 post doesn't spell out the inputs. These rules draw on Lighter Capital, a16z and AirTree:

1. **Use operating net burn**, as a positive number when burning. [Lighter Capital](https://www.lightercapital.com/blog/how-to-calculate-your-burn-multiple) warns that "investor money, loans, and credit lines are not operating inflows, and counting them artificially lowers your burn."
2. **Strip true one-offs and show both figures**, such as a legal settlement, an equipment purchase or a one-off contractor project.
3. **Count net new ARR in full**: new plus expansion, minus churned and contracted ARR.
4. **Match the periods.** a16z recommends evaluating it every quarter; Lighter calls quarterly standard, with longer windows for long sales cycles.
5. **Report quarterly and trailing-12.** [AirTree](https://www.airtree.vc/open-source-vc/startup-metrics-burn-multiple) uses the quarter for recent changes and 12 months to smooth seasonal swings. Trailing-12 is total burn divided by total net new ARR.

An illustrative quarter (made-up numbers):

| Line | Amount |
|---|---|
| Operating net burn | $1.2M |
| New ARR | +$700K |
| Expansion ARR | +$150K |
| Churned ARR | -$200K |
| Contracted ARR | -$50K |
| Net new ARR | $600K |
| **Burn multiple** | **2.0x** ($1.2M ÷ $600K) |

The same quarter with four common mistakes:

| Mistake | Calculation | Result |
|---|---|---|
| New plus expansion, ignoring churn and contraction | $1.2M ÷ $850K | 1.41x |
| New logos only | $1.2M ÷ $700K | 1.71x |
| A $300K legal settlement left inside the $1.2M | $1.2M ÷ $600K vs $900K ÷ $600K | 2.0x reported vs 1.5x operating |
| One month of burn over a quarter of ARR | $400K ÷ $600K | 0.67x |

Three of the four flatter you. The settlement does the opposite, so show the operating 1.5x beside the reported 2.0x.

For trailing-12, take four made-up quarters: burn of $1.5M, $1.2M, $1.2M and $1.0M against net new ARR of $500K, $600K, $900K and $800K. Quarterly multiples are 3.0x, 2.0x, 1.33x and 1.25x; trailing-12 is $4.9M ÷ $2.8M = 1.75x. Averaging the four ratios instead gives about 1.9x, because it weights the weak first quarter as heavily as the stronger ones.

State your basis. Scale Venture Partners uses GAAP operating income instead of cash burn, noting that it is "usually within 10% of reported cash burn numbers anyways."

## When the number breaks: pre-revenue, tiny ARR and negative values

"Obviously if the startup is pre-revenue, net new ARR will be zero so the ratio will not even compute," Sacks wrote. Just above zero, the ratio explodes: a hypothetical $1.2M burn against $50K of net new ARR is 24x, which says more about timing than efficiency. In Scale's 2022 data, companies under $1M ARR had a pooled average of 3.4x.

Negative values mean opposite things. Negative burn with positive net new ARR is profitable growth. Positive burn with negative net new ARR means burning while shrinking, yet the ratio comes out negative and looks better than any healthy multiple. Show each input with its sign.

Our suggestion for pre-revenue and sub-$1M companies: report absolute burn, runway and their trend, and add the multiple once one deal no longer swings it. Sacks says a "bad" multiple is acceptable "Mostly in the earliest years, when sales are incipient and the product is still being built."

## What is a good burn multiple? Benchmarks by ARR

Start with who each dataset measured:

| Source (published; data) | Who | Statistic | Burn basis |
|---|---|---|---|
| [a16z](https://a16z.com/a-framework-for-navigating-down-markets/) (May 2022; window not stated) | Private software companies | Percentiles; 25th is the worse multiple | Cash burned |
| [Scale](https://www.scalevp.com/blog/benchmarking-saas-growth-and-burn) (July 2022; window not stated) | Scale Studio data points, private plus some public SaaS | Pooled average | GAAP operating income |
| ICONIQ Pacesetter Index (Sept 2026; 2024 to Q2 2026) | Top-quartile-growth AI-native or AI-driven companies | Median, top quartile | Not stated on its public page |

| Source | ARR band | Burn multiple |
|---|---|---|
| a16z 2022 | Under $10M | 1.6x median (25th 3.8x, 75th 1.1x) |
| a16z 2022 | $10M to $25M | 1.4x (1.8x, 0.8x) |
| a16z 2022 | $25M to $75M | 0.7x (1.1x, 0.5x) |
| a16z 2022 | $75M+ | 0.5x (0.9x, 0x) |
| Scale 2022 | Under $1M | 3.4x |
| Scale 2022 | $1M to $2.5M | 2.4x |
| Scale 2022 | $2.5M to $5M | 2.0x |
| Scale 2022 | $5M to $10M | 1.6x |
| Scale 2022 | $10M to $25M | 1.6x |
| Scale 2022 | $25M to $50M | 0.9x |
| Scale 2022 | $50M to $100M | 0.7x |
| Scale 2022 | $100M to $150M | 0.4x |
| ICONIQ 2026 | Under $10M | 1.3x median (0.8x top quartile) |
| ICONIQ 2026 | $10M to $25M | 1.8x (1.6x) |
| ICONIQ 2026 | $25M to $100M | 0.9x (0.5x) |
| ICONIQ 2026 | $100M+ | 0.3x (0.1x) |

[Lighter Capital's June 2026 benchmarks](https://www.lightercapital.com/blog/cash-efficiency-benchmarks-for-private-b2b-saas-startups) have no ARR bands but are recent: 83 private B2B SaaS startups with about $250K to $22M ARR, 2024 to 2025 data, in a lender-screened sample. Of the 55 burning cash, 51% were above 1.0x and 24% below 0.33x, so three in four sat at one end or the other. Lighter calls it bimodal; a single median would hide that.

Beside the data sit two rules of thumb: Sacks' tiers above, and Bessemer's. [Bessemer's State of the Cloud 2023](https://www.bvp.com/atlas/state-of-the-cloud-2023) calls "100% Revenue Growth and a 1.2X Burn multiple" the ideal growth profile, with targets aimed at "the typical Series B or C enterprise software company."

### Why the sources disagree

At $10M to $25M ARR the central figure is 1.4x (a16z 2022), 1.6x (Scale 2022) and 1.8x (ICONIQ 2026). That is not a trend. Our reading is that four differences account for the spread:

- Burn definition: cash burn, operating income or free cash flow.
- Statistic: median, pooled average or percentile.
- Population: private software (a16z), a VC dataset with some public SaaS (Scale), lender-screened startups (Lighter), top-growth AI companies (ICONIQ).
- Era: the 2022 datasets (windows not stated) likely reflect 2021 boom spending; Lighter and ICONIQ cover 2024 to 2026.

### How to use them

Pick the row for your ARR band and name the dataset in the deck. The multiple generally falls as ARR grows, though ICONIQ's cohort rises from 1.3x to 1.8x between its first two bands. Growth is no excuse either: in Scale's 2022 data, the fastest-growing companies (top decile and quartile) had the lowest burn multiples within their ARR band.

## What investors read into it

These are named firms' views, not a consensus.

a16z's growth team, May 2022: "We like burn multiples more than other efficiency metrics for recalibrating when market conditions change because they are all-encompassing." And: "If you need to add $100M of ARR with $50M of burn, you should build a plan to make sure your burn multiple is less than 0.5x."

Lighter Capital, a lender, says investors "won't accept" a multiple "above 2.0x with no story, no trend toward improvement," and: "A single quarter's burn multiple is a data point. The trend tells you the truth."

Bessemer wrote in 2023 that startups should still invest in growth, "but this growth should be at optimal costs, not growth-at-all-costs."

So show the quarterly and trailing-12 trend, state the basis, and footnote it, for example: "Burn multiple = operating net burn (excluding financing and a $300K one-off) ÷ net new ARR (new + expansion - churn - contraction), Q3 2026; trailing-12 1.75x."

## Burn multiple vs CAC payback, NRR and Rule of 40

| Metric | What it divides | Spend covered | When it fits |
|---|---|---|---|
| Burn multiple | Net burn ÷ net new ARR | All operating spend | Once net new ARR is meaningful |
| CAC payback | S&M spend vs gross-margin-adjusted new ARR, in months | Sales and marketing | When you pay to acquire |
| NRR | Cohort revenue now ÷ a year earlier | None | Once customers are a year old |
| Rule of 40 | Growth rate + profit margin | All, via profit | Feld: "at least $50 million in revenue" |

CAC payback is Bessemer's primary sales and marketing efficiency metric; its 2023 tiers were 12 to 18 months good, 6 to 12 better, 0 to 6 best. The burn multiple counts all spend, which matters because, as AirTree notes, R&D spend plays a big role in driving customer acquisition, particularly as more startups go [product-led](/startup/plg-saas).

NRR feeds the denominator: expansion adds to net new ARR, contraction and churn subtract. Weak [net revenue retention](/startup/net-revenue-retention) shows up in your burn multiple even when new sales look healthy.

The Rule of 40 appeared in a [2015 Brad Feld post](https://feld.com/archives/2015/02/rule-40-healthy-saas-company/) that passed on a late-stage investor's rule, and Scale argued in March 2022 that it "does not compute" for early-stage startups. Bessemer's growth-plus-FCF-margin score, which it also calls an efficiency score, is in this family and generally applies only after $25M+ ARR. It is not the reciprocal of the burn multiple.

## Levers that lower your burn multiple

**Plug the leak first.** Sacks: "Churn will net against the denominator of the Burn Multiple, causing the multiple to increase. A leaky bucket makes it hard to grow efficiently." Each churned dollar cancels a new one.

**Build expansion into pricing.** AirTree points to seat growth, usage-linked pricing and tiered features.

**Lower CAC and fix the sales ramp.** AirTree includes getting under-ramped reps productive; a16z lists right-sizing functions, improving margins and lowering CAC. For channel choice, see our guide to [choosing SaaS marketing strategies](/marketing/saas-marketing-strategies).

**Raise gross margin if you run AI-heavy.** Under 70% gross margin, AirTree multiplies the burn multiple by 70% ÷ gross margin. Illustration: at 55%, the sub-$10M median gross margin in ICONIQ's 2026 cohort, a raw 1.5x becomes (0.70 ÷ 0.55) × 1.5 = about 1.91x. AirTree suggests cutting COGS and delivery costs, testing price increases and adding higher-margin revenue.

**Cut burn that produces no ARR.** "The Burn Multiple doesn't care about sunk costs and always gives founders the chance to improve," Sacks writes. He even suggests that giving up some unprofitable revenue may be worth it.

**Plan backwards from the next round.** AirTree back-solves the multiple needed to hit the raise's ARR milestone with about six months of cash in reserve.

This week, compute last quarter's multiple and your trailing-12, write the footnote, and find the benchmark row for your ARR.

## FAQ

### What is a burn multiple?

Net burn divided by net new ARR for the same period: dollars burned per dollar of ARR added. David Sacks introduced it in April 2020. Lower is better, and he expected it to approach zero over time as a startup matures and burn falls.

### How do you calculate burn multiple?

Divide a quarter's operating net burn, excluding financing and true one-offs, by that quarter's net new ARR: new plus expansion, minus churn and contraction. For trailing-12, divide total burn by total net new ARR rather than averaging the four quarterly ratios.

### What is a good burn multiple?

Sacks' 2020 rule of thumb calls under 1x amazing and 1.5x to 2x good for venture-stage startups. Measured medians depend on size: a16z's 2022 data showed 1.6x under $10M ARR and 0.5x at $75M+. Compare with your ARR band and name the dataset.

### What is the difference between burn multiple, burn rate and runway?

Burn rate is the cash you spend per month. Runway is cash on hand divided by burn rate, so it counts the months you have left. Burn multiple compares burn with net new ARR over the same period, showing how efficiently that spending turns into growth.

### Can a burn multiple be negative?

Yes, with opposite meanings. Negative burn with positive net new ARR is profitable growth. Positive burn with shrinking ARR also gives a negative number, and that one is a warning sign that looks deceptively good. Report both inputs with their signs, not the ratio alone.
