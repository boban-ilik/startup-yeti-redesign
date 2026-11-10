---
title: "Usage-Based Pricing: When It Fits and How to Design It"
slug: usage-based-pricing
category: marketing
meta_description: "Usage based pricing for SaaS founders: when it fits, when it doesn't, hybrid designs, picking a value metric, AI credits and outcomes, and migrating from seats."
primary_keyword: usage based pricing
word_count: 3073
---

# Usage-Based Pricing: When It Fits and How to Design It

Search "usage based pricing" and the top results come from companies with something to sell. In Ahrefs' US results on November 10, 2026, all eight organic pages in the top 10 came from software vendors, and seven of them sell billing or monetization software. The #3 result, from m3ter, carries a banner saying m3ter is "now part of Salesforce", which publishes the #4 result. That doesn't make their advice wrong. It does mean few of them have a reason to tell you when usage pricing is the wrong call. Startup Yeti sells no billing software, so we can.

The retention data favors usage pricing. In the [2026 Aleph x Benchmarkit benchmarks](https://www.getaleph.com/answers/net-revenue-retention-saas-2026), usage-based companies posted a median net revenue retention (NRR, what last year's customers pay you now as a share of what they paid then) of 108% for calendar 2025, against 98% for seat-based companies. The filings show the cost. Twilio's 10-Q for the third quarter of 2026 says its usage-based fees "at times create differences between our forecasts and actual results", and Datadog's filing for the same quarter reports a reduction in usage from its largest customer. Higher expansion and lower predictability arrive together.

Our view, for a seed to Series B company: start with hybrid, a predictable base fee plus a usage meter, and spend your design effort on choosing the meter. If you are still deciding which model family suits how you sell, start with [our guide to SaaS pricing models by go-to-market motion](/marketing/saas-pricing-models).

## What usage-based pricing is, and the three shapes it takes

Usage-based pricing (UBP) charges customers for the units they consume, such as messages sent, compute used or AI actions run, instead of a flat plan fee or a price per seat. Consumption-based pricing is the same model under another name. The unit you charge for is your value metric: the thing a customer counts when judging whether the product was worth it.

It takes three shapes:

- **Pure pay-as-you-go.** The bill follows consumption, with no commitment. Snowflake charges on-demand customers "monthly in arrears," per its 10-Q for the quarter ended July 31, 2026.
- **Commit plus overage.** The customer commits to an amount of usage and pays for anything above it. Datadog's 10-Q for the quarter ended September 30, 2026 describes subscriptions for "a committed contractual amount of usage," with incremental usage charged on top.
- **Base fee with included usage.** A fixed fee buys an allowance, and usage beyond it is billed, as with Vercel Pro below.

| | Seat or flat subscription | Pure usage | Hybrid (base plus usage) |
|---|---|---|---|
| Customer pays for | Seats or a plan | Units consumed | A base fee, plus usage above an allowance or commitment |
| Buyer's bill predictability | High | Low unless the buyer caps spend | Bounded by the base |
| Your revenue predictability | High within the term | Low; moves with customer activity | A floor, with variance on top |
| Expansion path | More seats or a higher tier | More consumption | Both |
| Dated example (November 2026) | Intercom helpdesk seats, $85 per seat/month on Advanced, billed annually | Stripe Billing pay-as-you-go, 0.7% of billing volume | Vercel Pro, $20/month with $20 of included usage credit |

For flat-rate, tiered, freemium and the other models, see [the seven SaaS pricing models explained](/startup/choosing-the-right-pricing-model-for-saas-startups).

## What the data says, and who is saying it

### Retention: a 10-point gap in one dataset

The Aleph x Benchmarkit report covers 342 B2B SaaS and AI-native companies for calendar 2025, with NRR from the 230 that reported it. The usage-based 75th percentile reached 155%, and on Aleph's Rule of 40 page, companies combining subscription and usage posted the highest 75th-percentile Rule of 40 score, 43%. Aleph doesn't publish how many companies sit in each pricing bucket or how it classifies hybrids. It sells FP&A software, a smaller stake in your pricing choice than a billing vendor's.

Our reading: this is a correlation in one dataset for one year. Usage-priced companies may differ from seat-priced ones in category and stage, so the gap doesn't show that switching adds 10 points of NRR. For the calculation, and why usage-based NRR is measured differently, see [our net revenue retention guide](/startup/net-revenue-retention).

### What public usage companies tell investors

| Company | Metric as reported | Period | What the same filing says about variability |
|---|---|---|---|
| [Snowflake](https://www.sec.gov/Archives/edgar/data/1640147/000164014726000037/snow-20260731.htm) | Net revenue retention rate 126% | As of July 31, 2026 | Expects the rate "to decrease over the long-term" as long-tenured customers make up more of its revenue |
| [Datadog](https://www.sec.gov/Archives/edgar/data/1561550/000162828026070292/ddog-20260930.htm) | Trailing 12-month dollar-based net retention in the low 120s (about 120% a year earlier) | As of September 30, 2026 | Its largest customer reduced usage in Q3 2026 |
| [Twilio](https://www.sec.gov/Archives/edgar/data/1447669/000144766926000110/twlo-20260930.htm) | Dollar-based net expansion rate 114%, up from 109% | Q3 2026 vs Q3 2025 | Revenue comes mainly from usage-based fees, which can cause variability in results |

All three report expansion above 110% and flag variability in the same document. Each defines its metric differently, so don't compare the figures directly.

### Adoption: the 61% figure is a 2023 forecast

The 61% adoption figure that circulates on pages ranking for this term comes from OpenView Partners' State of Usage-Based Pricing, 2nd Edition, published February 2, 2023. It was a prediction that 61% of OpenView's SaaS index would adopt "some form of usage-based pricing" by the end of 2023. The reported figures were 15% with a largely usage-based or pay-as-you-go model and 46% taking a hybrid approach, a group that included companies only testing usage pricing. The post survives on the [Internet Archive](http://web.archive.org/web/20231221143946/https://openviewpartners.com/blog/state-of-usage-based-pricing/) and doesn't state its survey population.

Newer data comes from Kyle Poyar's [State of B2B Monetization in 2026](https://www.growthunhinged.com/p/the-state-of-b2b-monetization-in-2026), a survey of more than 230 software companies in April and May 2026. Hybrid (for example, seats with AI consumption on top) was the most popular model in that sample at 37%, up from the 25% respondents recalled for a year earlier. Early-stage companies under $5M ARR leaned most toward flat fees (37%). Two caveats: respondents chose to take part, and the newsletter says it is supported by Metronome, a usage-billing vendor.

## When usage-based pricing fits, and when it doesn't

These are our editorial rules, not measured findings. The "poor fit" list matters more, because vendor pages have the least reason to write it.

Usage pricing earns a place in your model when:

- The customer already counts the unit. If they track messages, API calls or resolved tickets for their own reasons, they can budget for a price on that unit.
- Each unit costs you real money. AI inference is the clearest current case. A flat price over a variable cost hands your margin to your heaviest users.
- Your accounts differ by an order of magnitude, and small ones need a cheap way in that can grow without a renegotiation.

It is a poor fit when:

- Value comes from people working together. Seats already track it.
- The buyer has a fixed annual budget and procurement wants one number.
- Customers can't control or predict their own usage, so every invoice is a surprise.
- You can't meter accurately, or can't explain an invoice line in one sentence.
- You are pre product-market fit. In Poyar's sample, companies under $5M ARR leaned most toward flat fees, and a simple price lets you learn what customers value before you meter it.

Poyar's survey also splits sentiment by model. Usage-based and outcome-based companies said revenue is hard to forecast, while hybrid companies were "generally the happiest" yet struggled to explain their pricing. In our reading, hybrid trades a forecasting problem for a communication problem.

## Hybrid pricing: four patterns from real pricing pages

"Hybrid" covers several designs, each giving the buyer a different kind of predictability. Four from current pricing pages, as of November 2026:

| Pattern | Example | How it's priced | What the buyer gets for predictability |
|---|---|---|---|
| Base fee equals included usage | [Vercel Pro](https://vercel.com/pricing) | $20/month including $20 of usage credit, then on-demand usage | A default $200 on-demand budget with notifications, an optional hard pause at 100%, and a Flat Rate CDN option |
| Commitment or pay-as-you-go | [Stripe Billing](https://stripe.com/billing/pricing) | 0.7% of billing volume pay-as-you-go, or $620/month on a 1-year contract covering up to $100,000 of monthly volume | A fixed monthly fee in exchange for a contract |
| Seats plus a usage meter | [Intercom](https://www.intercom.com/pricing) | $19 per seat/month on Essential for new customers (list $29), $85 on Advanced, $132 on Expert, billed annually, plus Fin AI Agent at $0.99 per outcome | The seat line is fixed; only the AI line moves |
| Seats converted into pooled credits | [GitHub Copilot](https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing) | Since June 1, 2026, each Business user adds 1,900 AI credits a month and each Enterprise user 3,900 to a shared pool; 1 credit = $0.01 | The pool absorbs uneven use; once it runs out, usage continues at per-credit rates or is blocked until the next cycle |

Stripe's numbers are easy to check. At $100,000 of monthly volume, pay-as-you-go costs $700, so the commitment saves $80, matching Stripe's "Save 11%" label. Below roughly $88,571 a month, the commitment costs more (our calculation). A usage-billing company sells its own product with a commitment option, which in our reading says buyers will pay to know the number. Salesforce's Agentforce offers three versions of that choice: Pre-Purchase, Pre-Commit (billed monthly in arrears, with a true-up at term end if usage falls short) and PayGo.

Intercom's pricing page shows a sample bill totaling $109.09 a month: 91 conversations resolved by Fin at $0.99 ($90.09), plus $19 for the 29 conversations the human team handled, the price of one Essential seat.

GitHub pools the allowance: 100 Business users share one pool of 190,000 credits rather than 100 separate buckets. That is $19 of included model usage per Business user per month, or $39 per Enterprise user (our calculation), and included credits don't carry over between months.

## How to pick the value metric

A good value metric passes five tests (our criteria):

1. The customer understands it and can predict it.
2. It rises when the customer gets more value.
3. It tracks your own costs closely enough to protect margin.
4. You can meter it accurately and show it on an invoice.
5. It doesn't penalize behavior you want. A hypothetical per-login fee would discourage the logins that keep customers engaged.

Datadog's Q3 2026 10-Q describes its method: each product has its own unit of measure, chosen as the unit that, "in working with customers and design partners, best indicates the value we deliver."

[Clay](https://www.clay.com/pricing) splits value from cost into two meters. Actions measure platform usage, such as enrichment, and reset each billing cycle. Data Credits buy data and AI from vendors in Clay's marketplace and roll over, up to twice the monthly amount on the Launch and Growth plans. As of November 2026, Launch starts at $185 a month, or $167 a month billed annually, and Clay says each plan includes enough Actions to cover 90% of customer usage. If model or data spend is a big part of your cost per customer, a second meter keeps it from distorting the price of the product itself.

Units also change. Our [Amplitude pricing review](/startup/amplitude-pricing) shows an event-based tier from the buyer's side, after Amplitude moved its unit from monthly tracked users to events.

The practical test: write the exact invoice line a customer will see, then ask whether their finance lead could predict next month's number from it. If not, the metric needs an allowance, a cap or a simpler unit.

## What usage pricing does to forecasting, NRR and board reporting

Snowflake's 10-Q says it recognizes revenue "based on platform consumption, which is inherently variable at our customers' discretion, and not based on the amount and duration of contract terms." Its remaining performance obligations (RPO, contracted revenue not yet recognized) were $9,004.3 million as of July 31, 2026, and exclude on-demand arrangements because they carry no minimum purchase commitment. Twilio's filing adds that customer usage "depends on factors generally outside of our control."

The illustration below uses made-up inputs, not company data: $100,000 of monthly revenue, a largest customer paying $20,000, and in the hybrid case every bill split 60% base and 40% usage. The largest customer's usage drops 30%.

| Pricing (illustrative) | Largest customer before | After a 30% usage drop | Company monthly revenue after |
|---|---|---|---|
| Seats | $20,000 | $20,000 until renewal | $100,000 |
| Hybrid (60% base, 40% usage) | $20,000 ($12,000 base + $8,000 usage) | $17,600 ($8,000 x 0.7 = $5,600 usage) | $97,600 |
| Pure usage | $20,000 | $14,000 | $94,000 |

Seats don't remove the risk; they move it to renewal, where the customer may cut seats. The hybrid base sets a floor. Pure usage puts the whole drop on next month's invoice.

Four reporting changes follow (our recommendations):

- Split committed revenue from on-demand usage, the way Snowflake keeps on-demand out of RPO.
- Forecast usage from trailing per-customer trends, not contract values.
- Watch concentration in usage revenue among your top customers each month.
- Give the board a floor and a range: committed revenue as the floor, usage as a band around it.

## AI pricing: tokens, credits and outcomes

Tokens are the chunks of text a model reads and writes, billed per million, and for an AI feature they are your cost of goods. As of November 2026, [Anthropic's API pricing](https://platform.claude.com/docs/en/about-claude/pricing) lists Claude Opus 5.5 at $4 per million input tokens and $20 per million output tokens, and Claude Sonnet 5.5 at $2 and $10. [OpenAI's API pricing](https://developers.openai.com/api/docs/pricing) lists gpt-6.1-sol at $2 and $10.

The same table lists the older Claude Opus 4.1 at $15 and $75, so the newer flagship's output list price is 73% lower (our calculation). Anthropic also notes that Claude 4.7 and later models use a tokenizer that produces about 30% more tokens for the same text, which offsets part of that drop. Two generations at one vendor don't make an industry-wide trend.

In Poyar's 2026 survey, internal costs and margins were the single most important factor in pricing AI capabilities (54% of respondents). The median target AI margin was about 50%, and only 12% aimed for SaaS-like margins of 80% or more. Put AI on a flat subscription and your heaviest users bring your biggest model bills; our piece on [why your best customers can lose you the most money](/startup/ai-wrapper) covers that trap.

**Credits.** Prepaid credits are a balance customers buy up front and draw down, so one currency can price many different actions. AI credit adoption was 29% in Poyar's sample. As of November 2026, [Salesforce sells Agentforce Flex Credits](https://www.salesforce.com/agentforce/pricing/) at $500 per 100,000; a non-voice Agentforce action uses 20 credits ($0.10). GitHub's pool and Clay's two meters, above, are two other credit designs.

**Outcomes.** Outcome-based pricing charges for a result instead of activity. Intercom charges $0.99 per Fin outcome, and only one outcome per conversation "even if Fin takes multiple actions," per its [help article on Fin outcomes](https://www.intercom.com/help/en/articles/8205718-fin-ai-agent-outcomes) dated September 23, 2026. A qualification outcome costs $9.99. A resolution counts when the customer confirms the answer was satisfactory, or leaves without asking for more help, which Intercom calls an "assumed resolution."

That definition is the contract. Before you copy outcome pricing, write down what counts as an outcome in your product, how a customer can dispute one, and what happens when a customer leaves without saying anything.

## How to move from seats to usage without breaking trust

1. **Meter before you bill.** Run shadow invoices for a few billing cycles so you and your customers see what they would have paid. A surprise found here is cheap.
2. **Add the meter on top of the base.** Keep seats or the plan fee and add usage above an allowance. You can shift weight toward usage later.
3. **Ship spend controls with the change.** Vercel's default $200 budget with an optional hard pause, GitHub's option for individual users to set a $0 budget and stop usage at the limit, Fin's usage reminders and hard limits, and Agentforce alerts in Digital Wallet are all models to copy.
4. **Give existing contracts a choice.** When [GitHub moved Copilot to usage-based billing](https://docs.github.com/en/copilot/reference/copilot-billing/request-based-billing-legacy/what-changed-with-billing) on June 1, 2026, annual-plan holders could stay on the old billing until their plan ended, cancel for a prorated refund, or switch to monthly with prorated credits. It was GitHub's second unit change in under 12 months; premium-request billing had begun on June 18, 2025. Each change resets what customers think they are paying for.
5. **Explain the unit in plain words, and give notice.** Cursor changed its Pro plan on June 16, 2025. On July 4, 2025, Michael Truell wrote on [Cursor's blog](https://cursor.com/blog/june-2025-pricing) that the changes "were not communicated clearly" and that Cursor would refund unexpected usage charges from the previous three weeks. Cursor had described included usage as "rate limits"; the post calls it a usage credit pool, worth "$20 of frontier model usage per month at API pricing" on the new Pro plan (as of July 2025; the post appears to have been edited since). Its stated reason was that the hardest requests cost an order of magnitude more than simple ones. In our reading, the explanation, not the reason, is what broke trust.

Under all five steps sits operations work: accurate metering, reconciliation between metered usage and invoices, and alerts that fire before a customer hits a cap. Build or buy it, but prove it on shadow invoices first.

## FAQ

### Is usage-based pricing the same as consumption-based pricing?

Yes. Both charge for units consumed rather than for seats or a flat plan, and vendor pages use the terms interchangeably.

### Usage-based vs subscription pricing: which is better?

Neither in general. A subscription gives both sides a predictable bill; usage ties revenue to consumption and makes forecasting harder. For a seed to Series B product, our default is hybrid: a subscription base plus a meter wherever value or cost scales with a countable unit.

### What are some examples of usage-based pricing?

Snowflake on-demand, Datadog commit plus overage, Vercel Pro, Stripe Billing, Intercom's Fin outcomes, GitHub Copilot's pooled credits and Clay's two meters, each dated above.

### Is usage-based pricing right for an early-stage startup?

Pure usage rarely is before product-market fit, in our view. Add a usage component when your costs scale with a unit, as with AI inference, or when customers differ too much in size for one price.

## Your first step

Export last quarter's usage and revenue by customer and check whether they move together. If your heaviest users are also your biggest payers, your current pricing already tracks value. If heavy users pay little, that gap is the case for a meter, and the unit you exported is your first candidate value metric.
