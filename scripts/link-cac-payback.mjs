#!/usr/bin/env node
// link-cac-payback.mjs — incoming links for /startup/cac-payback-period (published 2026-11-19, post 2116)
// from the four sibling pages that discuss CAC payback without a dedicated page to point to. --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const L = `/startup/cac-payback-period`;
// [host slug, current fragment (must occur once), replacement]
const plan = [
  ["saas-magic-number",
    `the classic 0.75 implies a 20-month payback, outside Bessemer's good tier.</p>`,
    `the classic 0.75 implies a 20-month payback, outside Bessemer's good tier. Our <a href="${L}">CAC payback period guide</a> compares that against 2025 benchmarks by contract size.</p>`],
  ["burn-multiple",
    `<p>CAC payback is Bessemer's primary sales and marketing efficiency metric;`,
    `<p><a href="${L}">CAC payback</a> is Bessemer's primary sales and marketing efficiency metric;`],
  ["plg-saas",
    `net revenue retention (NRR), LTV:CAC, and CAC payback period.`,
    `net revenue retention (NRR), LTV:CAC, and <a href="${L}">CAC payback period</a>.`],
  ["saas-growth-strategy",
    `Four are enough: CAC payback period (aim under ~12 months before scaling acquisition)`,
    `Four are enough: <a href="${L}">CAC payback period</a> (aim under ~12 months before scaling acquisition)`],
];
for (const [slug, cur, rep] of plan) {
  const post = (await api(`/posts?slug=${slug}&context=edit&_fields=id,content`, { headers: { Authorization: auth } }))[0];
  const raw = post.content.raw;
  const i = raw.indexOf(cur); if (i < 0 || raw.indexOf(cur, i + 1) >= 0) throw new Error(`${slug}: fragment not found exactly once`);
  if (raw.includes(`href="${L}"`)) throw new Error(`${slug}: already links to ${L}`);
  if (/[—–]/.test(rep)) throw new Error("dash in new copy");
  console.log(`  ~ ${slug}: …${rep.replace(/<[^>]+>/g, "").slice(-120)}`);
  if (!DRY) { await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw.slice(0, i) + rep + raw.slice(i + cur.length) }) }); console.log(`    ✓ saved`); }
}
if (DRY) console.log("DRY RUN");
