#!/usr/bin/env node
// link-valuation-multiples.mjs — incoming links for /startup/saas-valuation-multiples, published 2026-11-27
// from sibling metric pages. --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const V = `/startup/saas-valuation-multiples`;
// [host slug, link target, current fragment (must occur once), replacement]
const plan = [
  ["rule-of-40", V,
    `a growth-weighted score explains more.`,
    `a growth-weighted score explains more. Current multiples by growth band are in our <a href="${V}">SaaS valuation multiples guide</a>.`],
  ["saas-metrics", V,
    `covers the profit-measure choice.`,
    `covers the profit-measure choice, and our <a href="${V}">SaaS valuation multiples guide</a> shows what growth does to a multiple.`],
  ["net-revenue-retention", V,
    `one investor's published version of it.`,
    `one investor's published version of it. Retention also shows up in price; our <a href="${V}">SaaS valuation multiples guide</a> covers the link to valuation.`],
];
for (const [slug, L, cur, rep] of plan) {
  const post = (await api(`/posts?slug=${slug}&context=edit&_fields=id,content`, { headers: { Authorization: auth } }))[0];
  const raw = post.content.raw;
  const i = raw.indexOf(cur); if (i < 0 || raw.indexOf(cur, i + 1) >= 0) throw new Error(`${slug}: fragment not found exactly once`);
  if (raw.includes(`href="${L}"`)) throw new Error(`${slug}: already links to ${L}`);
  if (/[\u2014\u2013]/.test(rep)) throw new Error("dash in new copy");
  console.log(`  ~ ${slug} -> ${L}: ...${rep.replace(/<[^>]+>/g, "").slice(-110)}`);
  if (!DRY) { await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw.slice(0, i) + rep + raw.slice(i + cur.length) }) }); console.log(`    ✓ saved`); }
}
if (DRY) console.log("DRY RUN");
