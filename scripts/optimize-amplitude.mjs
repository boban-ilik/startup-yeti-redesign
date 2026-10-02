#!/usr/bin/env node
// optimize-amplitude.mjs — on-page-optimizer cycle 1 for /startup/amplitude-pricing (WP 1858).
// Title/meta, stale-fact fixes vs amplitude.com/pricing (2026-10-01), new Enterprise + Add-on
// sections, worked calculator examples, FAQ 6→11, links, em-dashes → 0. --dry verifies only.
// Phase 2 (live only): incoming links from the-cost-of-pitchbook (1178) and salesforce-cost (2018).
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const POST_ID = 1858;
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
async function api(path, opts = {}) {
  const res = await fetch(WP + path, opts);
  const text = await res.text();
  let body; try { body = JSON.parse(text); } catch { throw new Error(`${path} → HTTP ${res.status}, non-JSON: ${text.slice(0, 80)}`); }
  if (!res.ok) throw new Error(`${path} → ${res.status}: ${JSON.stringify(body).slice(0, 200)}`);
  return body;
}
const ext = (href, txt) => `<a href="${href}" target="_blank" rel="noreferrer noopener">${txt}</a>`;
const VENDR = "https://www.vendr.com/marketplace/amplitude", PRICELEVEL = "https://www.pricelevel.com/vendors/amplitude/pricing";
const TITLE = "Amplitude Pricing in 2026: Free to Enterprise";
const EXCERPT = "Amplitude pricing in 2026: a free plan with 2M events, Plus from $0 to 70M events ($75 to $4,692 a month), and what Growth and Enterprise contracts cost.";
const P = (html) => `<!-- wp:paragraph -->\n<p>${html}</p>\n<!-- /wp:paragraph -->`;
const H2 = (t) => `<!-- wp:heading -->\n<h2 class="wp-block-heading">${t}</h2>\n<!-- /wp:heading -->`;
const LI = (inner) => `<!-- wp:list-item -->\n<li>${inner}</li>\n<!-- /wp:list-item -->`;
const UL = (items) => `<!-- wp:list -->\n<ul class="wp-block-list">${items.map(LI).join("\n\n")}</ul>\n<!-- /wp:list -->`;

const ENTERPRISE = [H2("Amplitude Enterprise and Growth Pricing: What Contracts Look Like"),
  P(`Growth and Enterprise are quote-only, so the useful numbers come from buyers, not the pricing page. Two procurement datasets publish them.`),
  P(`<strong>Vendr (updated February 2026, 421 purchases):</strong> the median Amplitude buyer pays <strong>$64,000 a year</strong>, with contracts recorded from $24,750 to $382,219. Growth plans for mid-market teams (100K to 250K MTUs) typically land at $40,000 to $80,000; Enterprise deals at 500K MTUs and up run $100,000 to $250,000+. Buyers who negotiated saved 15.7% on average.`),
  P(`<strong>PriceLevel (two itemised contracts, median $48,000):</strong> the line items are the part worth reading. A 51-to-200-employee US company pays <strong>$45,000 a year: Growth platform $30,000 plus the Experiment add-on at $15,000</strong>, auto-renewing since early 2024. A 201-to-500-employee company on 600 million events a year pays $51,000: Growth $30,000, Experiment $15,000, Govern $3,000, Accounts $3,000.`),
  P(`Three things those contracts tell you that the pricing page doesn't:`),
  UL([`<strong>The Growth platform itself starts around $30,000 a year</strong> for a mid-sized team, barely above the $19,300 a 25M-event team pays on self-serve Plus. The jump is the add-ons, not the platform.`,
      `<strong>Experiment is the expensive add-on:</strong> $15,000 on a $30,000 platform, or 50% of the plan price, which matches Amplitude's "percentage of your platform plan" language.`,
      `<strong>Enterprise is a different market.</strong> At $100,000 and up you are paying for data access controls, SCIM, a customer success manager and a one-day SLA, not for more events.`]),
  P(`Sources: ${ext(VENDR, "Vendr's Amplitude marketplace page")} and ${ext(PRICELEVEL, "PriceLevel's Amplitude contracts")}. One caution on Vendr: its page still describes the retired $49 Plus and 1,000-MTU Starter tiers, so trust its contract data and ignore its plan summary.`)].join("\n\n");

const ADDONS = [H2("Add-On Pricing: Session Replay, Experiment, Accounts"),
  P(`Every plan includes a slice of each product; the add-ons buy more volume or advanced features, and Amplitude prices them as a percentage of your platform plan rather than as flat fees. The published limits, per plan:`),
  `<!-- wp:table -->\n<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>Product</th><th>Free</th><th>Plus</th><th>Growth</th><th>Enterprise</th></tr></thead><tbody><tr><td>Session Replay (sessions/month)</td><td>10,000</td><td>10,000</td><td>20,000, add-on for more</td><td>50,000, add-on for more</td></tr><tr><td>Replay retention</td><td>1 month</td><td>1 month</td><td>1 month, add-on to 12</td><td>1 month, add-on to 12</td></tr><tr><td>Active feature experiments</td><td>1</td><td>1</td><td>2, add-on for unlimited</td><td>2, add-on for unlimited</td></tr><tr><td>Agent Analytics (sessions/month)</td><td>5,000</td><td>5,000</td><td>10,000</td><td>20,000</td></tr><tr><td>AI feedback records/month</td><td>2,000</td><td>2,000</td><td>2,000, add-on for more</td><td>2,000, add-on for more</td></tr><tr><td>Live guides and surveys</td><td>1</td><td>1</td><td>2, add-on for unlimited</td><td>2, add-on for unlimited</td></tr></tbody></table></figure>\n<!-- /wp:table -->`,
  P(`<strong>What the add-ons cost.</strong> Amplitude publishes no add-on prices. The one hard number in public procurement data is the Experiment add-on at <strong>$15,000 a year on a $30,000 Growth platform</strong> (PriceLevel), so budget roughly half the platform price for full experimentation: unlimited active experiments, multi-armed bandits, stratified sampling, holdout groups. Session Replay at custom volumes with 3 to 12 months of retention, Guides and Surveys, Activation, Web Experiment and Accounts are the other expanded packages, all Growth and Enterprise only. In the PriceLevel contracts, Accounts and Govern were $3,000 a year each, a tenth of the platform price.`),
  P(`Practical read: if replay or experimentation is the reason you want Amplitude, price Growth plus the add-on from day one. Plus's 10,000 replays and single active experiment are a taste, not a plan.`)].join("\n\n");

const R = [
  // intro
  [`forever</strong> — enough to run real product analytics through pre-PMF and well into early traction, with no credit card required. Paid pricing now starts at $0 on the Plus plan and scales with event volume, all the way to 70 million events a month before you ever need a sales conversation. The quote-based tiers above that are where the confusion (and a lot of scary secondhand numbers) comes from.</p>`,
   `forever</strong>, enough to run real product analytics through pre-PMF and well into early traction, with no credit card required. Paid pricing starts at $0 on the Plus plan and scales with event volume, all the way to 70 million events a month before you ever need a sales conversation. The quote-based tiers above that are where the confusion (and a lot of scary secondhand numbers) comes from: Growth and Enterprise contracts run from about $25,000 to well past $250,000 a year, and this post shows what sits behind those numbers.</p>`],
  [`<p>This post lays out what each tier actually includes, what Plus really costs at startup scale based on Amplitude's own calculator, the under-publicized scholarship programs that get qualifying startups the Growth plan free, and an honest like-for-like comparison with Mixpanel and PostHog.</p>`,
   `<p>This post lays out what each tier includes, what Plus costs at startup scale based on Amplitude's own calculator (re-checked October 2026), what Growth and Enterprise contracts look like in procurement data, what the add-ons cost, the under-publicized scholarship programs that get qualifying startups the Growth plan free, and a like-for-like comparison with Mixpanel and PostHog.</p>`],
  // what Amplitude is (inserted after the disclosure paragraph)
  [`has no business relationship with the vendors discussed.</em></p>\n<!-- /wp:paragraph -->`,
   `has no business relationship with the vendors discussed.</em></p>\n<!-- /wp:paragraph -->\n\n${H2("What Amplitude Is (and Isn't)")}\n\n${P(`Amplitude is a product analytics platform: it records the events users trigger inside your app or site (a signup, a click, a purchase) and turns them into funnels, retention curves, cohorts and experiments. Founded in 2012 out of Y Combinator, it serves 5,200+ customers, including 30 of the Fortune 100, per its own company page. What it isn't: a web-traffic counter like Google Analytics, or a seat-priced tool. Every plan includes unlimited team members; you pay for event volume, and that single fact explains most of the pricing below.`)}`],
  // plans
  [`<p><strong>Free — $0.</strong> 2 million events per month, forever, no credit card required. Includes AI Agents &amp; MCP, core product analytics, one-time cohort syncs, 2,000 AI feedback records, 10K monthly session replays, limited experiments, guides and surveys, and 500 active AI Visibility prompts. Genuinely enough for solo founders and pre-PMF products, not a crippled trial.</p>`,
   `<p><strong>Free: $0.</strong> 2 million events per month, forever, no credit card required. Includes AI Agents and MCP, core product analytics, Agent Analytics (5,000 agent sessions a month), one-time cohort syncs, 2,000 AI feedback records, 10K monthly session replays, one active experiment, limited guides and surveys, and AI Visibility at limited volume. Genuinely enough for solo founders and pre-PMF products, not a crippled trial.</p>`],
  [`<p><strong>Plus — starts at $0, scales to 70 million events.</strong> Your first 2 million events each month stay free; you pay only for volume above that, with no overage penalties. Adds custom events and formulas, 20 behavioral cohorts, alerts, heatmaps, 1,000 active AI Visibility prompts, and 2-year data retention on top of everything in Free. At Amplitude's own 200-events-per-MTU conversion, 70M events is roughly 350,000 monthly tracked users, which means Plus covers small-to-mid startups and a good chunk of the mid-market before a custom quote enters the picture.</p>`,
   `<p><strong>Plus: starts at $0, scales to 70 million events.</strong> Your first 2 million events each month stay free; you pay only for volume above that, with no overage penalties (a credit card is required to activate it). Adds custom events and formulas, 20 behavioral cohorts, alerts, heatmaps, webhooks, three collaboration spaces, and 2-year data retention on top of everything in Free. Amplitude's own plan table caps Plus at 70M events or roughly 700,000 monthly tracked users, which means Plus covers small-to-mid startups and a good chunk of the mid-market before a custom quote enters the picture.</p>`],
  [`<p><strong>Growth — custom quote, event-based pricing.</strong> Everything in Plus, plus advanced behavioral exploration, currency conversion, monitoring and alerts, 20K monthly session replays, 2,500 AI Visibility prompts, and SSO with project permissions. This is also where the add-ons unlock (more below). Where Series A–B startups land once experimentation becomes core.</p>`,
   `<p><strong>Growth: custom quote, event-based pricing.</strong> Everything in Plus, plus advanced behavioral exploration, currency conversion, monitoring and alerts, 20K monthly session replays, 10,000 agent sessions, two active experiments, SSO with project permissions, and a support SLA of two business days. This is also where the add-ons unlock (more below). Where Series A–B startups land once experimentation becomes core.</p>`],
  [`<p><strong>Enterprise — custom quote, event-based pricing.</strong> Everything in Growth, plus unlimited projects per portfolio, data access controls, unlimited monitoring and alerts, 50K monthly session replays, and advanced user management with RBAC. For 500+ employee and multi-product orgs.</p>`,
   `<p><strong>Enterprise: custom quote, event-based pricing.</strong> Everything in Growth, plus unlimited projects per portfolio, data access controls, unlimited monitoring and alerts, 50K monthly session replays, 20,000 agent sessions, advanced user management with RBAC and SCIM, a customer success manager, and a one-business-day support SLA. For 500+ employee and multi-product orgs.</p>`],
  // what founders pay
  [`<h2 class="wp-block-heading">What Founders Actually Pay</h2>`, `<h2 class="wp-block-heading">What Founders Actually Pay on Plus</h2>`],
  [`<p>Amplitude publishes a Plus calculator, so for once the entry-tier math needs no guesswork. On annual billing, per the calculator: <strong>$75/month at 3M events, $576/month at 10M, $1,260/month at 20M, and $4,692/month at the 70M ceiling</strong> — roughly $900 to $56,000 per year depending entirely on volume. Month-to-month billing runs about 20–25% higher.</p>`,
   `<p>Amplitude publishes a Plus calculator, so for once the entry-tier math needs no guesswork. On annual billing, per the calculator: <strong>$75/month at 3M events, $576/month at 10M, $1,260/month at 20M, and $4,692/month at the 70M ceiling</strong>, roughly $900 to $56,000 per year depending entirely on volume. Month-to-month billing runs about 20 to 25% higher. We re-read the calculator in October 2026 and the curve is unchanged from July: at 20M events it still shows $1,260, which works out to $0.00006 per event.</p>\n<!-- /wp:paragraph -->\n\n${P(`Worked examples, because event volume, not headcount, is what moves the bill:`)}\n\n${UL([`<strong>1.5M events a month:</strong> $0. You are inside the Free allowance and never need Plus.`, `<strong>3M events a month:</strong> $75/month on annual billing, about $900 a year. A seed-stage B2B product with a few thousand active users.`, `<strong>10M events a month:</strong> $576/month, about $6,900 a year. A typical Series A consumer or product-led app.`, `<strong>25M events a month:</strong> $1,610/month, about $19,300 a year, the point where most teams start comparing Plus against a Growth quote.`, `<strong>70M events a month:</strong> $4,692/month, about $56,000 a year, the Plus ceiling. Above it you are in Growth or Enterprise territory whether you like it or not.`])}\n\n<!-- wp:paragraph -->\n<p>The 1.5M and 70M lines bracket the whole self-serve range; between them the calculator is close to a straight line with a small volume discount, and nothing on Plus is hidden behind a quote.</p>`],
  [`<p>Procurement marketplaces like <a href="https://www.vendr.com/marketplace/amplitude">Vendr</a> and <a href="https://www.pricelevel.com/vendors/amplitude/pricing">PriceLevel</a> document negotiated contracts in the <strong>$45,000–$70,000/year</strong> range, which matches the top of the Plus curve and typical Growth entry points. If you need the Growth add-ons (experimentation, high-volume replay, activation syncs), expect a higher effective cost per event than Plus; Vendr documents Growth deals up to roughly $80,000/year. Anything above $100K is enterprise territory with add-ons stacked on top.</p>`,
   `<p>Above the Plus ceiling the numbers stop being self-serve. The two sections after the size guide cover what Growth and Enterprise contracts look like in procurement data, and what the add-ons cost on top.</p>`],
  [`<strong>$900–$15,000/year</strong> — self-serve, no sales call, cancel anytime.</p>`, `<strong>$900–$15,000/year</strong>: self-serve, no sales call, cancel anytime.</p>`],
  // by size
  [`<p><strong>Mid to enterprise (50M–150M events/month): $45,000–$150,000/year.</strong> Series B+ with scaled product teams. Plus itself tops out at $56K/year at 70M events; above that volume, or when Experiment and Session Replay add-ons enter, you're negotiating Growth, where Vendr data clusters between $45K and $80K.</p>`,
   `<p><strong>Mid to enterprise (50M–150M events/month): $40,000–$150,000/year.</strong> Series B+ with scaled product teams. Plus itself tops out at $56K/year at 70M events; above that volume, or when Experiment and Session Replay add-ons enter, you're negotiating Growth, where Vendr's February 2026 data puts contracts between $40,000 and $80,000.</p>`],
  [`<p><strong>Enterprise (200M+ events/month): $150,000+/year.</strong> Public companies and multi-product orgs, with add-ons priced as a percentage of the platform plan stacking on top.</p>`,
   `<p><strong>Enterprise (200M+ events/month): $100,000–$250,000+/year.</strong> Public companies and multi-product orgs, with add-ons priced as a percentage of the platform plan stacking on top; Vendr's largest recorded Amplitude contract is $382,219.</p>`],
  // new sections before negotiation
  [`<!-- wp:heading -->\n<h2 class="wp-block-heading">How to Negotiate Amplitude</h2>`, `${ENTERPRISE}\n\n${ADDONS}\n\n<!-- wp:heading -->\n<h2 class="wp-block-heading">How to Negotiate Amplitude</h2>`],
  // negotiation
  [`Show the alternative's pricing in writing. This lever matters mostly on Growth and Enterprise quotes; at Plus volumes, Amplitude is usually already the price leader for a comparable bundle.</p>`,
   `Show the alternative's pricing in writing. This lever matters mostly on Growth and Enterprise quotes; at Plus volumes, Amplitude is usually already the price leader for a comparable bundle. The same move works on any quote-based tool; see how it plays out with <a href="/startup/carta-pricing">Carta's pricing</a>.</p>`],
  [`<p>Combined effect: a multi-year, quarter-end Growth deal with competitive leverage can land 25–45% below sticker. That's five figures of saving on a typical contract.</p>`,
   `<p>Combined effect: a multi-year, quarter-end Growth deal with competitive leverage can land 25–45% below sticker. Vendr's average across 421 purchases is a more modest 15.7%, so treat the top of that range as the reward for doing all three. Either way it is five figures on a typical contract.</p>`],
  // scholarship
  [`including the features that normally sit behind a custom quote — Analytics, Feature and Web Experimentation, Session Replay, and Activation — with generous limits`, `including the features that normally sit behind a custom quote (Analytics, Feature and Web Experimentation, Session Replay, and Activation) with generous limits`],
  [`and it doesn't expire after a year — it remains free`, `and it doesn't expire after a year; it remains free`],
  // comparison
  [`<li><strong>Amplitude</strong> — the cheapest bundled platform`, `<li><strong>Amplitude:</strong> the cheapest bundled platform`],
  [`<li><strong>Mixpanel</strong> — per-event transparency`, `<li><strong>Mixpanel:</strong> per-event transparency`],
  [`<li><strong>PostHog</strong> — lowest raw analytics cost`, `<li><strong>PostHog:</strong> lowest raw analytics cost`],
  [`For how SaaS tools structure these tiers, see <a href="/startup/choosing-the-right-pricing-model-for-saas-startups/">SaaS pricing models</a>.</p>`, `For how SaaS tools structure these tiers, see our guide to <a href="/marketing/saas-pricing-models">SaaS pricing models</a>.</p>`],
  [`<p>For more pricing breakdowns of tools founders use to evaluate companies, see <a href="/startup/the-cost-of-pitchbook/">PitchBook pricing</a>.</p>`, `<p>For more pricing breakdowns of tools founders buy, see <a href="/startup/the-cost-of-pitchbook/">PitchBook pricing</a>, <a href="/startup/carta-pricing">Carta pricing</a> and <a href="/startup/salesforce-cost">Salesforce cost</a>.</p>`],
];

const FAQS = [
  ["Does Amplitude have a free version?", `Yes. The Free plan gives you 2 million events per month, forever, with no credit card required, and it's genuinely capable: 10K monthly session replays, one active experiment, guides and surveys, AI feedback records, Agent Analytics, and AI Agents and MCP are all included. Past 2M events you move to Plus, which starts at $0 and charges only for volume above the free allowance.`],
  ["How much does Amplitude cost?", `Free is $0 for 2 million events a month. Plus starts at $0 and scales with events: on annual billing the calculator shows $75/month at 3M, $576 at 10M, $1,260 at 20M and $4,692 at the 70M ceiling. Growth and Enterprise are custom quotes: Vendr's median Amplitude contract is $64,000 a year, with Growth typically $40,000 to $80,000 and Enterprise $100,000 to $250,000+.`],
  ["How much does Amplitude Enterprise cost?", `$100,000 to $250,000+ a year in Vendr's February 2026 data, with the largest recorded contract at $382,219. The price buys data access controls, SCIM, a customer success manager and a one-business-day SLA on top of Growth; event volume is negotiated per deal. Expect 15 to 35% off the first quote with a competing bid and a multi-year term.`],
  ["How much does Amplitude Session Replay cost?", `Replay is included on every plan: 10,000 sessions a month on Free and Plus, 20,000 on Growth and 50,000 on Enterprise, each with one month of retention. Higher volumes, 3 to 12 months of retention, AI summaries and targeted capture are a Growth or Enterprise add-on priced as a percentage of your platform plan; Amplitude publishes no flat rate for it.`],
  ["How much should I budget for Amplitude in year one?", `Less than most founders expect. Under 2 million events a month, budget $0. On Plus with annual billing, Amplitude's calculator shows $75/month at 3M events, $576/month at 10M, and $1,260/month at 20M. If you have under $10M raised and fewer than 20 employees, apply for the <a href="https://amplitude.com/startups" target="_blank" rel="noreferrer noopener">Startup Scholarship</a> and get the Growth plan free for a year. Only Growth-tier deals with add-ons move the budget into the $40,000 to $80,000 range Vendr documents.`],
  ["Is Amplitude a one-time payment?", `No. Amplitude runs on subscriptions. The Free plan is recurring with no expiration; Plus is self-serve with annual or monthly billing; Growth and Enterprise are annual contracts that auto-renew unless cancelled before the renewal date. Multi-year commitments unlock 15–30% discounts.`],
  ["What are events (and what happened to MTUs)?", `An event is any tracked user action: a page view, a click, a signup. Amplitude now prices on events, the same unit as Mixpanel and PostHog. The old unit, MTUs (Monthly Tracked Users), still appears in some program limits; Amplitude's plan table equates Plus's 70M events to about 700K MTUs, roughly 100 events per tracked user.`],
  ["Can you pay monthly instead of annually?", `Yes, on Plus, and you give up the annual discount: month-to-month runs roughly 20 to 25% more (at 3M events, $94/month vs $75/month annual, per the calculator). Growth and Enterprise are annual contracts. If your funding situation is uncertain, start on Plus monthly until you have 12 months of runway secured.`],
  ["Does Amplitude offer a free trial?", `No trial, and you don't need one: the Free plan has no time limit, 2 million events a month and no credit card requirement, so you can run it for as long as it fits. Plus asks for a card only when you move above the free allowance. Growth can be had free for a year through the Startup Scholarship if you qualify (under $10M raised, under 20 employees).`],
  ["Is Amplitude a legit company?", `Yes. Amplitude was founded in 2012 out of Y Combinator and, per its own company page, serves 5,200+ customers including 30 of the Fortune 100, with 700+ employees across the US, Europe and Asia. Review sites rate the product well (SoftwareAdvice shows 4.6 out of 5 across 68 reviews); the recurring complaint is cost at scale, not the software.`],
  ["Is Amplitude expensive for startups?", `At startup volumes it's currently the most affordable bundled option on the market. The Free plan's 2 million events per month is double what Mixpanel and PostHog give away, Plus starts at $0 with no overage penalties, and at 10M to 20M events Plus runs roughly a quarter of Mixpanel's list price. The premium reputation comes from Growth and Enterprise, which are priced for scaled product orgs running heavy experimentation.`],
];
const serialize = (o) => JSON.stringify(o).replace(/--/g, "\\u002d\\u002d").replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026").replace(/\\"/g, "\\u0022");
const base = Date.now();
const questions = FAQS.map(([q, a], i) => ({ id: `faq-question-${base + i}`, title: `<strong>${q}</strong>`, content: a, visible: true }));
const FAQ_BLOCK = `<!-- wp:rank-math/faq-block ${serialize({ questions })} -->\n<div class="wp-block-rank-math-faq-block">` + questions.map((q) => `<div class="rank-math-faq-item"><h3 class="rank-math-question">${q.title}</h3><div class="rank-math-answer">${q.content}</div></div>`).join("") + `</div>\n<!-- /wp:rank-math/faq-block -->`;

const post = await api(`/posts/${POST_ID}?context=edit&_fields=id,title,content,excerpt,modified`, { headers: { Authorization: auth } });
let raw = post.content.raw.replace(/\u00a0/g, " ");
const before = raw;
const misses = [];
for (const [from, to] of R) { const n = raw.split(from).length - 1; if (n !== 1) { misses.push(`${n}× : ${from.slice(0, 90)}…`); continue; } raw = raw.replace(from, to); }
if (misses.length) throw new Error("replacements not matching exactly once:\n  " + misses.join("\n  "));
const fs = raw.indexOf("<!-- wp:rank-math/faq-block"), fe = raw.indexOf("<!-- /wp:rank-math/faq-block -->") + "<!-- /wp:rank-math/faq-block -->".length;
if (fs < 0) throw new Error("FAQ block not found");
raw = raw.slice(0, fs) + FAQ_BLOCK + raw.slice(fe);
const words = (s) => s.replace(/<!--[\s\S]*?-->/g, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim().split(" ").length;
const checks = {
  "em-dashes": (raw.match(/\u2014/g) || []).length,
  "stale 350,000 MTU": (raw.match(/350,000/g) || []).length,
  "stale AI Visibility prompts": (raw.match(/AI Visibility prompts/g) || []).length,
  "stale $45,000–$70,000": (raw.match(/\$45,000–\$70,000/g) || []).length,
  "stale 200-events-per-MTU": (raw.match(/200-events-per-MTU|200 events per MTU/g) || []).length,
  "H2": (raw.match(/<h2 /g) || []).length, "FAQ items": (raw.match(/rank-math-faq-item/g) || []).length,
  "internal links": (raw.match(/href="\/(?:startup|marketing|business)\//g) || []).length,
  "title len (+15 suffix)": TITLE.length + 15, "excerpt len": EXCERPT.length,
};
console.log(`words: ${words(before)} → ${words(raw)}`); console.table(checks);
for (const m of raw.matchAll(/.{70}\u2014.{70}/gs)) console.log("EM-DASH CONTEXT:", JSON.stringify(m[0]));
const bad = ["em-dashes", "stale 350,000 MTU", "stale AI Visibility prompts", "stale $45,000–$70,000", "stale 200-events-per-MTU"].filter((k) => checks[k] !== 0);
if (bad.length || checks["excerpt len"] > 160 || checks["FAQ items"] !== 11) throw new Error("verification failed: " + JSON.stringify(bad));
const newCopy = R.map(([, t]) => t).concat(FAQS.map(([, a]) => a)).join(" ").replace(/<[^>]+>/g, " ");
console.log("forbidden-default hits:", (newCopy.match(/\b(comprehensive|thorough|in-depth|engaging|valuable|actionable|seamless|cutting-edge|dive deep|unlock the power|game-chang\w*|moreover|furthermore|additionally)\b/gi) || []).join(", ") || "none");
if (DRY) { console.log("DRY RUN — nothing written."); process.exit(0); }

await api(`/posts/${POST_ID}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ title: TITLE, excerpt: EXCERPT, content: raw }) });
const chk = await api(`/posts/${POST_ID}?context=edit&_fields=title,excerpt,content,modified`, { headers: { Authorization: auth } });
console.log("✓ written. modified:", chk.modified, "| title:", chk.title.raw, "| excerpt ok:", chk.excerpt.raw === EXCERPT, "| em-dashes:", (chk.content.raw.match(/\u2014/g) || []).length, "| FAQ:", (chk.content.raw.match(/rank-math-faq-item/g) || []).length, "| enterprise H2:", chk.content.raw.includes("What Contracts Look Like"));

// Phase 2: incoming links
const TARGET = "/startup/amplitude-pricing";
const donors = [
  { id: 1178, slug: "the-cost-of-pitchbook", frag: "Some startups use it to", end: "research investors before fundraising rounds</a>.", insert: ` We have priced the rest of a founder's data stack the same way, including <a href="${TARGET}">Amplitude's pricing</a>.` },
  { id: 2018, slug: "salesforce-cost", frag: "the sticker is an opening bid, and this one comes with an expensive ecosystem attached to it.", insert: ` The pattern holds from <a href="${TARGET}">Amplitude's event-based pricing</a> to PitchBook's quotes: the published number is where the conversation starts.` },
];
for (const d of donors) {
  const p = await api(`/posts/${d.id}?context=edit&_fields=id,content`, { headers: { Authorization: auth } });
  let r = p.content.raw;
  if (r.includes(`href="${TARGET}"`)) { console.log(`  ⚠ ${d.slug} already links, skipped`); continue; }
  const key = d.end || d.frag; const i = r.indexOf(key);
  if (i < 0) { console.log(`  ✗ ${d.slug}: fragment not found`); continue; }
  const pos = i + key.length; r = r.slice(0, pos) + d.insert + r.slice(pos);
  await api(`/posts/${d.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: r }) });
  const c = await api(`/posts/${d.id}?context=edit&_fields=content`, { headers: { Authorization: auth } });
  console.log(`  ${c.content.raw.includes(`href="${TARGET}"`) ? "✓" : "✗ NOT PERSISTED"} ${d.slug} → amplitude-pricing`);
}
