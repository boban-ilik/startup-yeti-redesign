#!/usr/bin/env node
// link-nov13-optimizer-extras.mjs — the cross-post link edits proposed alongside the 2026-11-13 optimizer cycles:
// two incoming-anchor rewrites for /marketing/saas-growth-strategy (stop calling it "the Series A marketing mistake"),
// and one new incoming link to /startup/pipedrive-alternatives from /startup/automation-tools. --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
// [host slug, current fragment (must occur once), replacement]
const plan = [
  ["saas-marketing-strategies",
    `the post-raise hiring spree we described in <a href="/marketing/saas-growth-strategy">the Series A marketing mistake</a>.`,
    `the post-raise hiring spree we described in our <a href="/marketing/saas-growth-strategy">SaaS growth strategy</a> guide.`],
  ["saas-marketing-plan",
    `It's the same pattern we covered in <a href="/marketing/saas-growth-strategy">The Series A Marketing Mistake</a>: scaling`,
    `It's the same pattern we covered in our <a href="/marketing/saas-growth-strategy">SaaS growth strategy</a> guide: scaling`],
  ["automation-tools",
    `">Zoho CRM</a>.</p>`,
    `">Zoho CRM</a>. If you're comparing sales-first CRMs, our breakdown of <a href="/startup/pipedrive-alternatives">Pipedrive and its alternatives</a> prices nine options side by side.</p>`],
];
for (const [slug, cur, rep] of plan) {
  const post = (await api(`/posts?slug=${slug}&context=edit&_fields=id,content`, { headers: { Authorization: auth } }))[0];
  const raw = post.content.raw;
  const i = raw.indexOf(cur); if (i < 0 || raw.indexOf(cur, i + 1) >= 0) throw new Error(`${slug}: fragment not found exactly once`);
  if (/[—–]/.test(rep)) throw new Error("dash in new copy");
  console.log(`  ~ ${slug}: …${rep.replace(/<[^>]+>/g, "").slice(-130)}`);
  if (!DRY) { await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw.slice(0, i) + rep + raw.slice(i + cur.length) }) }); console.log(`    ✓ saved`); }
}
if (DRY) console.log("DRY RUN");
