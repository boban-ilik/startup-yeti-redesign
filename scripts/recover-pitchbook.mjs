#!/usr/bin/env node
// recover-pitchbook.mjs — on-page-optimizer cycle 2 for /startup/the-cost-of-pitchbook.
// Re-sources every Vendr claim to the archived snapshot, fixes the free-trial FAQ, writes
// the excerpt, adds the add-ons driver + 4 FAQs, strips em-dashes. --dry to verify only.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";

const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const POST_ID = 1178;
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
async function api(path, opts = {}) {
  const res = await fetch(WP + path, opts);
  const text = await res.text();
  let body; try { body = JSON.parse(text); } catch { throw new Error(`${path} → HTTP ${res.status}, non-JSON: ${text.slice(0, 80)}`); }
  if (!res.ok) throw new Error(`${path} → ${res.status}: ${JSON.stringify(body).slice(0, 200)}`);
  return body;
}

const ARCHIVE = "https://web.archive.org/web/20250617223802/https://www.vendr.com/marketplace/pitchbook";
const A = `<a href="${ARCHIVE}" target="_blank" rel="noreferrer noopener">`;
const ext = (href, txt) => `<a href="${href}" target="_blank" rel="noreferrer noopener">${txt}</a>`;
const FAILORY = "https://www.failory.com/blog/pitchbook-pricing";
const TAGNIFI = "https://about.tagnifi.com/pitchbook-reviews-features-pricing-and-alternatives/";
const PB_PRICING = "https://pitchbook.com/pricing";

const EXCERPT = "PitchBook pricing from 101 real contracts: median $32,000 a year, $20,000 for one seat, up to $125,000. What drives the quote, and the 5 levers that cut it.";
const ALT = "Scale balancing PitchBook's annual subscription cost against a startup budget";

const R = [
  // intro
  [`<p>PitchBook doesn't publish its pricing publicly. There's no pricing page, no free tier, and no monthly plan. You have to request a quote, sit through a demo, and negotiate — which means most people searching for PitchBook pricing never get a straight answer.</p>`,
   `<p>PitchBook doesn't publish its pricing. Its pricing page is a quote-request form: no price list, no free tier, no monthly plan. You request a quote, sit through a demo, and negotiate, which is why most people searching for PitchBook pricing never get a straight answer.</p>`],
  [`<p>Based on verified contract data from 114 procurement transactions logged by <a href="https://www.vendr.com/marketplace/pitchbook" target="_blank" data-type="link" data-id="https://www.vendr.com/marketplace/pitchbook" rel="noreferrer noopener">Vendr</a>, here's exactly what PitchBook costs in 2026, what drives the final number, and whether it makes sense for a startup budget.</p>`,
   `<p>Based on Vendr's procurement data covering 101 real PitchBook purchases (a June 2025 snapshot; Vendr has since removed the page, so we link the ${A}archived copy</a>), plus reported quotes from Failory and TagniFi, here's what PitchBook costs in 2026, what drives the final number, and whether it makes sense for a startup budget.</p>`],
  // how much
  [`<p>PitchBook pricing ranges from $12,000 to $70,000+ per year, depending on the number of users, the data modules included, and contract length. According to verified procurement data from Vendr (114 transactions analysed), the median annual contract sits around $30,000, while the average contract value is approximately $56,000 — reflecting the pull of large enterprise deals.</p>`,
   `<p>PitchBook pricing ranges from $12,000 to $70,000+ per year, depending on the number of users, the data modules included, and contract length. In Vendr's procurement data (101 purchases), the median annual contract is $32,000, with contracts running from $20,000 at the low end to $125,000 at the top. Reported quotes fill in the edges: ${ext(FAILORY, "Failory's")} lowest is $12,000 for a single seat, and ${ext(TAGNIFI, "TagniFi's")} highest is $70,000 for a 10-user investment bank.</p>`],
  [`<p>Solo users — analysts, independent advisors, individual founders — typically pay in the range of $15,000–$20,000 per year for a single named seat with core access. Vendr's data puts the single-user list price at approximately $20,000.</p>`,
   `<p>Solo users (analysts, independent advisors, individual founders) typically pay $15,000–$20,000 per year for a single named seat with core access. Vendr's data puts the single-user list price at $20,000, roughly $1,667 a month, though PitchBook bills annually. On a 5-seat contract, one buyer in the same dataset reported $633.33 per user per month.</p>`],
  [`pay $70,000–$124,500+ annually based on Vendr's observed contract range.`,
   `pay $70,000–$125,000 annually based on Vendr's observed contract range.`],
  // drivers
  [`<p>First-time buyers often receive introductory pricing. Renewals without prior negotiation tend to escalate — Vendr documents typical renewal increases of 5–10% or more annually. Customers who negotiate at renewal consistently secure flat or reduced rates.</p>`,
   `<p>First-time buyers often receive introductory pricing. Renewals without prior negotiation tend to escalate: buyers in Vendr's data report proposed uplifts of 5% to 7% a year, and one team saw PitchBook try to strip the first-year signing discount at renewal. Those who pushed for a flat renewal, or committed to a two-year term, got the uplift waived.</p>`],
  [`occasionally qualify for reduced packages — though this requires`,
   `occasionally qualify for reduced packages, though this requires`],
  [`that context can help frame your internal justification for the spend.</p>\n<!-- /wp:paragraph -->`,
   `that context can help frame your internal justification for the spend.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><strong>5. Add-ons quoted separately: API, CRM integration, Direct Data</strong></p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>The platform licence is not the whole bill. PitchBook's own ${ext(PB_PRICING, "pricing page")} names Direct Data and CRM Integration as premium offerings on top of it, and API access is sold as a separate product priced by call volume. None of the three has a public rate:</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul class="wp-block-list"><!-- wp:list-item -->\n<li><strong>Direct Data:</strong> bulk delivery of PitchBook's datasets into your own systems, by data feed or API</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li><strong>CRM Integration:</strong> the connector that pushes PitchBook records into HubSpot or Salesforce</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li><strong>API:</strong> metered by call volume and quoted on request</li>\n<!-- /wp:list-item --></ul>\n<!-- /wp:list -->\n\n<!-- wp:paragraph -->\n<p>Among the reasons customers give TagniFi for leaving PitchBook, the cost of API and CRM integrations and aggressive annual increases both make the list. Two rules follow: get every add-on as its own line on the order form before you sign, and treat "included in enterprise" as unconfirmed until it is written down.</p>\n<!-- /wp:paragraph -->`],
  // comparison
  [`<td>$12,000–$70,000+ (median $30K, avg $56K)</td>`, `<td>$12,000–$125,000 (median $32,000)</td>`],
  [`<p><em>Sources:&nbsp;<a href="https://www.vendr.com/marketplace/pitchbook" target="_blank" data-type="link" data-id="https://www.vendr.com/marketplace/pitchbook" rel="noreferrer noopener">Vendr</a>&nbsp;(PitchBook, Preqin),`,
   `<p><em>Sources:&nbsp;${A}Vendr</a>&nbsp;(PitchBook, archived June 2025 snapshot), ${ext("https://www.vendr.com/marketplace/preqin", "Vendr")} (Preqin),`],
  [`($49/month equivalent) — or $99/month`, `($49/month equivalent), or $99/month`],
  [`Preqin is priced comparably to PitchBook — Vendr's data`, `Preqin is priced comparably to PitchBook: Vendr's data`],
  // worth it
  [`PitchBook is priced for institutions — VC funds, PE firms, investment banks — where`, `PitchBook is priced for institutions (VC funds, PE firms, investment banks) where`],
  [`<li>Benchmarking your valuation ahead of a fundraise — PitchBook's`, `<li>Benchmarking your valuation ahead of a fundraise: PitchBook's`],
  [`<li>Tracking specific investors — portfolio company data`, `<li>Tracking specific investors: portfolio company data`],
  [`ask PitchBook about short-term access — they occasionally offer this for startups.`, `ask PitchBook about short-term access, which they occasionally offer to startups.`],
  // negotiate
  [`puts buyers at a disadvantage — until they realize`, `puts buyers at a disadvantage, until they realize`],
  [`<p>According to&nbsp;<a href="https://www.vendr.com/marketplace/pitchbook" target="_blank" data-type="link" data-id="https://www.vendr.com/marketplace/pitchbook" rel="noreferrer noopener">Vendr's procurement data</a>, buyers who negotiate actively save an average of 13.72% — and aggressive negotiators achieve 20–35% below initial quotes.</p>`,
   `<p>In ${A}Vendr's procurement data</a>, buyers who negotiated saved 14% on average. Bringing a competing offer moved pricing 5 to 10%, and one multi-year commitment landed 22% off list plus free service for the rest of the calendar year.</p>`],
  [`<p><strong>Lever 2: Time your purchase or renewal to Q4 — specifically October and November.</strong><br>PitchBook operates on a calendar-year fiscal cycle. In October and November, sales reps are under pressure to hit annual targets, which tilts the negotiation toward the buyer. A company that schedules its renewal or first contract in Q4 will almost always secure a better discount than the same company negotiating in March or April.</p>`,
   `<p><strong>Lever 2: Time your purchase or renewal to Q4, specifically October and November.</strong><br>PitchBook operates on a calendar-year fiscal cycle. In October and November, sales reps are under pressure to hit annual targets, which tilts the negotiation toward the buyer. A company that schedules its renewal or first contract in Q4 will almost always secure a better discount than the same company negotiating in March or April. The same end-of-quarter leverage works on <a href="/startup/salesforce-cost">Salesforce's pricing</a>, where the gap between quote and contract is just as wide.</p>`],
  [`once a base contract is agreed — but starting narrow`, `once a base contract is agreed, but starting narrow`],
  [`A buyer who can show a real quote from a competing vendor — even one they don't intend to use — creates a credible alternative that PitchBook reps will price against.</p>`,
   `A buyer who can show a real quote from a competing vendor, even one they don't intend to use, creates a credible alternative that PitchBook reps will price against. Vendr's buyer notes include one team that used a lowball Dealroom quote to cut its renewal and another that cited AlphaSense to bring pricing in line with its budget.</p>`],
  [`Downgrading scope is cheaper for PitchBook than losing a customer.</p>`,
   `Downgrading scope is cheaper for PitchBook than losing a customer. Expect a push to remove the first-year discount at renewal; buyers who held firm on a flat renewal kept it, and one secured the continuation of a 10% signing discount at first renewal.</p>`],
];

// FAQ block rebuilt (Rank Math block: JSON attrs + static HTML)
const FAQS = [
  ["How much does PitchBook cost for one user?", `A single-seat PitchBook subscription typically costs $15,000–$20,000 per year depending on the data modules included. ${A}Vendr's procurement data</a> puts the single-user list price at $20,000; Failory's lowest reported single seat is $12,000. PitchBook does not publish official pricing, so every quote is custom.`],
  ["Does PitchBook offer a free trial?", `Yes, but only on request and at PitchBook's discretion. Its pricing page says to fill out a form and it will "see if a free trial might be right for you." There is no self-serve trial and no free tier, so expect a sales call first, and ask for trial access to the exact modules you would buy.`],
  ["How much is PitchBook per month?", `PitchBook bills annually; there is no monthly plan. A $20,000 single seat works out to roughly $1,667 a month, and one 5-seat buyer in Vendr's data reported $633.33 per user per month. Quarterly billing exists but usually carries a higher effective annual rate.`],
  ["How much does the PitchBook API cost?", `PitchBook sells API access as a separate product, priced by call volume, with no public rate. Direct Data (bulk delivery by feed or API) and CRM Integration (the HubSpot and Salesforce connector) are also premium add-ons quoted on top of the platform licence. Get each one as its own line on the order form.`],
  ["Can you get PitchBook for free?", `Some universities and business schools provide free PitchBook access to students and faculty through institutional licences. If you're affiliated with an academic institution, check whether your school has a PitchBook agreement before purchasing.`],
  ["Is there a free alternative to PitchBook?", `Not a like-for-like one. Crunchbase is the usual stand-in for founders: company and funding profiles at a fraction of PitchBook's price, with a free trial of its Pro plan. It covers most investor research before a raise, not institutional-grade valuation data. Students and faculty can often use PitchBook itself through a university licence.`],
  ["Is PitchBook worth it?", `For VC funds, PE firms, investment banks, and corporate development teams, usually yes: one sourced deal covers a $32,000 median contract. For most early-stage startups, no, not at full price. PitchBook earns its cost only for recurring work such as valuation benchmarking before a raise or diligence on acquirers; for one-off investor research, Crunchbase does the job.`],
  ["Is PitchBook pricing negotiable?", `Yes. PitchBook's quoted price is rarely the final price. Multi-year commitments, competing quotes, and reduced module packages are the standard levers. In ${A}Vendr's procurement data</a>, negotiated buyers saved 14% on average, a competing offer moved pricing 5 to 10%, and one multi-year deal landed 22% off list.`],
  ["How does PitchBook billing work?", `PitchBook contracts are typically billed annually. Quarterly billing options exist but usually come at a higher effective annual rate. Multi-year deals are billed annually for each year of the contract.`],
  ["What is the cheapest PitchBook plan?", `The lowest reported PitchBook pricing for an individual seat with core access is about $12,000 per year, Failory's lowest reported single seat. A more typical single-seat entry price is $20,000 per year, the list price in ${A}Vendr's procurement data</a>.`],
];
const serialize = (obj) => JSON.stringify(obj).replace(/--/g, "\\u002d\\u002d").replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026").replace(/\\"/g, "\\u0022");
const base = Date.now();
const questions = FAQS.map(([q, a], i) => ({ id: `faq-question-${base + i}`, title: `<strong>${q}</strong>`, content: a, visible: true }));
const faqHtml = `<div class="wp-block-rank-math-faq-block">` + questions.map((q) => `<div class="rank-math-faq-item"><h3 class="rank-math-question">${q.title}</h3><div class="rank-math-answer">${q.content}</div></div>`).join("") + `</div>`;
const FAQ_BLOCK = `<!-- wp:rank-math/faq-block ${serialize({ questions })} -->\n${faqHtml}\n<!-- /wp:rank-math/faq-block -->`;

const li = (inner) => `<!-- wp:list-item -->\n<li>${inner}</li>\n<!-- /wp:list-item -->`;
const SOURCES = `<!-- wp:list -->\n<ul class="wp-block-list">` + [
  `${A}PitchBook Pricing &amp; Contract Data, Vendr (archived June 2025 snapshot)</a>&nbsp;(101 purchases; Vendr has since removed the page)`,
  `${ext(PB_PRICING, "PitchBook pricing page")}&nbsp;(official)`,
  `${ext(FAILORY, "PitchBook Pricing: Here's What 8 Customers Pay, Failory")}`,
  `${ext(TAGNIFI, "PitchBook: Reviews, Features, Pricing and Alternatives, TagniFi")}`,
  `${ext("https://www.g2.com/products/pitchbook/pricing", "PitchBook Pricing Reviews, G2")}`,
  `${ext("https://dealroom.co/pricing", "Dealroom Pricing, dealroom.co")}&nbsp;(official)`,
  `${ext("https://about.crunchbase.com/products/crunchbase-pro", "Crunchbase Pro, about.crunchbase.com")}&nbsp;(official)`,
  `${ext("https://www.vendr.com/marketplace/preqin", "Preqin Pricing Data, Vendr")}`,
].map(li).join("\n\n") + `</ul>\n<!-- /wp:list -->`;

// ── load, transform, verify ──
const post = await api(`/posts/${POST_ID}?context=edit&_fields=id,title,content,excerpt,featured_media,modified`, { headers: { Authorization: auth } });
let raw = post.content.raw;
const before = raw;
const misses = [];
for (const [from, to] of R) {
  const n = raw.split(from).length - 1;
  if (n !== 1) { misses.push(`${n}× : ${from.slice(0, 80)}…`); continue; }
  raw = raw.replace(from, to);
}
if (misses.length) throw new Error(`replacements not matching exactly once:\n  ` + misses.join("\n  "));
const faqStart = raw.indexOf("<!-- wp:rank-math/faq-block"), faqEnd = raw.indexOf("<!-- /wp:rank-math/faq-block -->") + "<!-- /wp:rank-math/faq-block -->".length;
if (faqStart < 0 || faqEnd < faqStart) throw new Error("FAQ block not found");
raw = raw.slice(0, faqStart) + FAQ_BLOCK + raw.slice(faqEnd);
const srcH = raw.indexOf('<h2 class="wp-block-heading">Sources</h2>');
const lStart = raw.indexOf("<!-- wp:list -->", srcH), lEnd = raw.indexOf("<!-- /wp:list -->", lStart) + "<!-- /wp:list -->".length;
if (srcH < 0 || lStart < 0) throw new Error("Sources list not found");
raw = raw.slice(0, lStart) + SOURCES + raw.slice(lEnd);

const text = raw.replace(/<!--[\s\S]*?-->/g, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
const words = text.split(" ").length;
const beforeWords = before.replace(/<!--[\s\S]*?-->/g, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim().split(" ").length;
const checks = {
  "em-dashes": (raw.match(/\u2014/g) || []).length,
  "live vendr pitchbook links": (raw.match(/href="https:\/\/www\.vendr\.com\/marketplace\/pitchbook"/g) || []).length,
  "archive links": (raw.match(new RegExp(ARCHIVE.replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&"), "g")) || []).length,
  "stale '114'": (raw.match(/114/g) || []).length,
  "stale '$30,000'/'$30K'": (raw.match(/around \$30,000|\$30K/g) || []).length,
  "stale '$56,000'/'$56K'": (raw.match(/\$56,000|\$56K/g) || []).length,
  "stale '13.72'": (raw.match(/13\.72/g) || []).length,
  "stale '20–35%'": (raw.match(/20–35%/g) || []).length,
  "stale '$124,500'": (raw.match(/124,500/g) || []).length,
  "'no pricing page' claim": (raw.match(/no pricing page/g) || []).length,
  "salesforce-cost link": (raw.match(/href="\/startup\/salesforce-cost"/g) || []).length,
  "FAQ items": (raw.match(/rank-math-faq-item/g) || []).length,
  "H2": (raw.match(/<h2 /g) || []).length,
  "H3": (raw.match(/<h3 /g) || []).length,
  "excerpt length": EXCERPT.length,
};
console.log(`words: ${beforeWords} → ${words}`);
console.table(checks);
const bad = ["em-dashes", "live vendr pitchbook links", "stale '114'", "stale '$30,000'/'$30K'", "stale '$56,000'/'$56K'", "stale '13.72'", "stale '20–35%'", "stale '$124,500'", "'no pricing page' claim"].filter((k) => checks[k] !== 0);
if (bad.length || checks["excerpt length"] > 160 || checks["salesforce-cost link"] !== 1 || checks["FAQ items"] !== 10) throw new Error("verification failed: " + JSON.stringify({ bad, excerpt: checks["excerpt length"] }));
// forbidden-defaults scan on the new copy only
const newCopy = R.map(([, to]) => to).concat(FAQS.map(([, a]) => a)).join(" ").replace(/<[^>]+>/g, " ");
const forbidden = /\b(comprehensive|thorough|in-depth|engaging|valuable|actionable|leverage|seamless|cutting-edge|dive deep|unlock the power|game-chang\w*|moreover|furthermore|additionally)\b/gi;
console.log("forbidden-default hits in new copy:", (newCopy.match(forbidden) || []).join(", ") || "none");
if (DRY) { console.log("\nDRY RUN — nothing written. New FAQ titles:"); FAQS.forEach(([q]) => console.log(" -", q)); process.exit(0); }

// ── write ──
await api(`/posts/${POST_ID}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw, excerpt: EXCERPT }) });
await api(`/media/${post.featured_media}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ alt_text: ALT }) });
const check = await api(`/posts/${POST_ID}?context=edit&_fields=content,excerpt,modified,featured_media`, { headers: { Authorization: auth } });
const media = await api(`/media/${post.featured_media}?_fields=alt_text`, { headers: { Authorization: auth } });
console.log("\n✓ written. modified:", check.modified);
console.log("  excerpt persisted:", check.excerpt.raw === EXCERPT);
console.log("  archive links persisted:", (check.content.raw.match(/web\.archive\.org/g) || []).length);
console.log("  em-dashes persisted:", (check.content.raw.match(/\u2014/g) || []).length);
console.log("  FAQ items persisted:", (check.content.raw.match(/rank-math-faq-item/g) || []).length);
console.log("  alt persisted:", media.alt_text === ALT);
