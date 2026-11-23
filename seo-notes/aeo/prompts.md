# AEO prompt baseline: Startup Yeti (drafted 2026-11-23)

Purpose: check whether AI answers (ChatGPT, Perplexity, Google AI Overviews / AI Mode, Gemini, Copilot) cite startupyeti.com for the founder questions our pages answer, and which sources they cite instead. Prompts are written the way a founder asks, not as keywords. Each maps to the page that should earn the citation.

Run plan (after the Ahrefs API key resets on 2026-11-28):
1. **Free-standing check (Ahrefs' own prompt database, no setup):** `brand-radar-cited-pages` and `brand-radar-ai-responses` with `prompts=ahrefs`, `where cited_domain = startupyeti.com`, per data source, US. Tells us where we are already cited.
2. **Custom baseline (this list):** create one Brand Radar report "Startup Yeti AEO baseline" (brand: startupyeti.com, Startup Yeti), load the prompts below with their cluster tags, US only, then read `brand-radar-cited-pages` / `cited-domains` per prompt. Confirm the unit cost and any custom-prompt plan limit on a small first call before loading all 30; recurring refresh frequency to be agreed with Boban (default proposal: monthly).
3. **Classify each miss** in `baseline-YYYY-MM-DD.md`: (a) our page exists and AI cites others → refresh/optimize that page first; (b) AI cites third-party reviews, lists or threads → EARN target list; (c) no page of ours → new-article candidate.
4. **Retest monthly** alongside the optimizer reviews; log changes, not just levels.

| # | Prompt (as a founder would ask) | Cluster | Page that should be cited |
|---|---|---|---|
| 1 | What is a good CAC payback period for a SaaS startup? | metrics | /startup/cac-payback-period |
| 2 | How do I calculate CAC payback with gross margin? | metrics | /startup/cac-payback-period |
| 3 | Is 3:1 still the right LTV to CAC ratio target? | metrics | /startup/ltv-to-cac-ratio |
| 4 | Should LTV use revenue or gross margin? | metrics | /startup/ltv-to-cac-ratio |
| 5 | What is a normal monthly churn rate for B2B SaaS? | metrics | /startup/saas-churn-rate (publishing) |
| 6 | How do I convert monthly churn to annual churn? | metrics | /startup/saas-churn-rate (publishing) |
| 7 | What is a good SaaS magic number in 2026? | metrics | /startup/saas-magic-number |
| 8 | What is a good burn multiple for a Series A company? | metrics | /startup/burn-multiple |
| 9 | What net revenue retention do investors expect from a SaaS startup? | metrics | /startup/net-revenue-retention |
| 10 | How do I know if my startup has product-market fit? | metrics | /startup/product-market-fit |
| 11 | Is there a free SaaS metrics calculator for LTV and CAC payback? | tool | /calculator |
| 12 | How much does Carta cost for an early-stage startup? | pricing | /startup/carta-pricing |
| 13 | How much does a PitchBook subscription cost? | pricing | /startup/the-cost-of-pitchbook |
| 14 | How much does Salesforce really cost per user in 2026? | pricing | /startup/salesforce-cost |
| 15 | How much does Rippling cost for a 20-person startup? | pricing | /startup/rippling-pricing |
| 16 | How much does Amplitude cost when you outgrow the free plan? | pricing | /startup/amplitude-pricing |
| 17 | What are the best HubSpot alternatives for a startup? | alternatives | /marketing/hubspot-alternatives |
| 18 | What are cheaper alternatives to Pipedrive? | alternatives | /startup/pipedrive-alternatives |
| 19 | What is the best payroll software for a startup? | alternatives | /startup/best-payroll-software-for-startups |
| 20 | Should my SaaS use usage-based pricing or seat-based pricing? | pricing strategy | /marketing/usage-based-pricing |
| 21 | Which SaaS pricing model is best for an early-stage product? | pricing strategy | /marketing/saas-pricing-models |
| 22 | When does venture debt make sense for a startup? | funding | /startup/venture-debt |
| 23 | Should my SaaS be product-led or sales-led? | GTM | /startup/plg-saas |
| 24 | What does a GTM engineer do? | GTM | /marketing/gtm-engineer |
| 25 | How do I write a positioning statement for a B2B startup? | positioning | /marketing/positioning-statement |
| 26 | How do I run win/loss interviews as a founder? | positioning | /marketing/win-loss-analysis |
| 27 | What should a SaaS marketing plan include for the first year? | marketing | /marketing/saas-marketing-plan |
| 28 | What is a forward deployed engineer? | AI and roles | /team-management/forward-deployed-engineer |
| 29 | What is MCP (Model Context Protocol) and why does it matter for startups? | AI | /innovation/model-context-protocol |
| 30 | Is building an AI wrapper startup a bad idea? | AI | /startup/ai-wrapper |

Notes:
- 11 of 30 are metric questions because the calculator is the site's one measurable conversion.
- Prompt 13 targets PitchBook, the site's historically strongest page (see the Sept 2026 core update memory).
- Keep wording stable between runs; add new prompts as new rows rather than editing old ones, so trends stay comparable.
