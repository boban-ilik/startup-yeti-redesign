#!/usr/bin/env node
// link-oct30-duo.mjs — incoming internal links for the 2026-10-30 articles
// (/startup/rippling-pricing, /startup/burn-multiple).
// Appends one sentence at the end of the paragraph containing `frag`. --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const L = (href, txt) => `<a href="${href}">${txt}</a>`;
const RIP = "/startup/rippling-pricing", BM = "/startup/burn-multiple";
const plan = [
  ["best-payroll-software-for-startups", "one click revokes everything", RIP, ` For what that integration costs at 10 to 100 employees, see our breakdown of ${L(RIP, "Rippling pricing")}.`],
  ["carta-pricing", "set by negotiation rather than a number on a page", RIP, ` Rippling works the same way for HR and payroll; our ${L(RIP, "Rippling pricing breakdown")} shows what startups actually pay there.`],
  ["startup-accounting", "Your burn rate is the speed at which", BM, ` Once you have recurring revenue, pair it with the ${L(BM, "burn multiple")}, which shows how much you burn for each dollar of net new ARR.`],
  ["startup-financing", "Runway = Current cash", BM, ` Runway tells you how long the money lasts; the ${L(BM, "burn multiple")} tells you how efficiently it turns into growth.`],
  ["net-revenue-retention", "does not compute NRR", BM, ` NRR also feeds the ${L(BM, "burn multiple")}, because expansion and churn both count in its net new ARR.`],
];
const bySlug = {};
for (const [slug, frag, target, ins] of plan) (bySlug[slug] ||= []).push({ frag, target, ins });
for (const [slug, items] of Object.entries(bySlug)) {
  const post = (await api(`/posts?slug=${slug}&context=edit&_fields=id,content`, { headers: { Authorization: auth } }))[0];
  let raw = post.content.raw.replace(/ /g, " ");
  let changed = 0;
  for (const { frag, target, ins } of items) {
    if (raw.includes(`href="${target}"`)) { console.log(`  = ${slug}: already links ${target}`); continue; }
    const i = raw.indexOf(frag); if (i < 0 || raw.indexOf(frag, i + 1) >= 0) throw new Error(`${slug}: fragment not unique/found: ${frag}`);
    const end = raw.indexOf("</p>", i); if (end < 0) throw new Error(`${slug}: no </p> after fragment`);
    const pre = raw.slice(0, end); const tail = pre.match(/(<br\s*\/?>|&nbsp;|\s)+$/)?.[0] || ""; const before = pre.slice(0, pre.length - tail.length);
    raw = before + ins + tail + raw.slice(end); changed++;
    console.log(`  + ${slug} → ${target}: …${JSON.stringify(before.slice(-70))}`);
  }
  if (!DRY && changed) { await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw }) }); console.log(`  ✓ ${slug} saved (${changed})`); }
}
if (DRY) console.log("DRY RUN");
