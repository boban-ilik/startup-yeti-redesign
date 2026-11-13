#!/usr/bin/env node
// accuracy-pass-nov13.mjs — (1) NRR article: cite Anthropic's S-1/A of 2026-11-10 (NRR ~900% unchanged; nine-month
// revenue $33.2B vs $2.5B a year earlier); (2) content-marketing-for-startups: its Rank Math FAQ block has no attributes,
// so it renders empty; convert it to plain H3 + paragraph blocks (visible, and picked up by the template's FAQ schema). --dry
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const get = async (slug) => (await api(`/posts?slug=${slug}&context=edit&_fields=id,content`, { headers: { Authorization: auth } }))[0];
const save = async (post, raw) => { if (!DRY) { await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw }) }); console.log("  ✓ saved"); } };
const swap = (raw, a, b, label) => { const i = raw.indexOf(a); if (i < 0 || raw.indexOf(a, i + 1) >= 0) throw new Error(`${label}: not found exactly once`); console.log(`  ~ ${label}\n    NEW: ${b.replace(/<[^>]+>/g, "")}`); return raw.slice(0, i) + b + raw.slice(i + a.length); };

// 1. NRR
{
  const post = await get("net-revenue-retention"); let raw = post.content.raw;
  const S1A = "https://www.sec.gov/Archives/edgar/data/2130357/000162828026072484/anthropicpbc-sx1ax2.htm";
  raw = swap(raw,
    `<a href="https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm" target="_blank" rel="noopener">S-1 registration statement</a>, filed on October 26, 2026, reports`,
    `<a href="${S1A}" target="_blank" rel="noopener">S-1 registration statement</a>, filed on October 26, 2026 and amended on November 2 and November 10, reports`,
    "NRR intro: cite the latest amendment");
  raw = swap(raw,
    `Consumption-based revenue, metered in tokens, was 80% of revenue for the six months ended June 30, 2026, which reached $16.3 billion against $1.2 billion a year earlier. That is a half-year revenue figure; the NRR compares two quarters.`,
    `Consumption-based revenue, metered in tokens, was 80% of revenue for the six months ended June 30, 2026, according to the original filing. The November 10 amendment puts revenue for the nine months ended September 30, 2026 at $33.2 billion, up from $2.5 billion a year earlier. Those are multi-month revenue totals; the NRR compares two quarters.`,
    "NRR: add the amendment's nine-month revenue");
  raw = swap(raw, `because an S-1 can be amended.`, `because an S-1 can be amended, and this one was amended twice within three weeks of filing.`, "NRR: note the amendments");
  if (/[—–]/.test(raw.match(/amended[\s\S]{0,400}/)[0])) throw new Error("dash in new copy");
  await save(post, raw);
}
// 2. content-marketing-for-startups FAQ
{
  const post = await get("content-marketing-for-startups"); let raw = post.content.raw;
  const start = raw.indexOf("<!-- wp:rank-math/faq-block -->"), end = raw.indexOf("<!-- /wp:rank-math/faq-block -->");
  if (start < 0 || end < 0 || raw.indexOf("<!-- wp:rank-math/faq-block -->", start + 1) >= 0) throw new Error("FAQ block not found exactly once");
  const block = raw.slice(start, end + "<!-- /wp:rank-math/faq-block -->".length);
  const items = [...block.matchAll(/<h3[^>]*class="rank-math-question"[^>]*>([\s\S]*?)<\/h3>\s*<div class="rank-math-answer">([\s\S]*?)<\/div>/g)];
  if (items.length < 2) throw new Error(`only ${items.length} FAQ items parsed`);
  const out = items.map(([, q, a]) => {
    const question = q.replace(/<\/?strong>/g, "").trim();
    const answer = /^\s*<p[\s>]/.test(a) ? a.trim() : `<p>${a.trim()}</p>`;
    return `<!-- wp:heading {"level":3} -->\n<h3 class="wp-block-heading">${question}</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n${answer}\n<!-- /wp:paragraph -->`;
  }).join("\n\n");
  raw = raw.slice(0, start) + out + raw.slice(start + block.length);
  console.log(`  ~ content-marketing-for-startups: converted ${items.length} FAQ items to visible H3 + paragraph:`);
  for (const [, q] of items) console.log(`    · ${q.replace(/<[^>]+>/g, "")}`);
  await save(post, raw);
}
if (DRY) console.log("DRY RUN");
