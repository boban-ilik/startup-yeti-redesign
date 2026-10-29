#!/usr/bin/env node
// link-oct29-trio.mjs — incoming internal links for the 2026-10-29 articles
// (/marketing/gtm-engineer, /startup/product-market-fit, /startup/net-revenue-retention).
// Appends one sentence at the end of the paragraph containing `frag`. --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const L = (href, txt) => `<a href="${href}">${txt}</a>`;
const GTM = "/marketing/gtm-engineer", PMF = "/startup/product-market-fit", NRR = "/startup/net-revenue-retention";
const plan = [
  ["saas-marketing-strategies", "</strong> (above 100% means the base grows", NRR, ` Our guide to ${L(NRR, "net revenue retention")} shows how to calculate it without the usual mistakes and what counts as good for your stage.`],
  ["hubspot-alternatives", "If you are pre-product-market-fit with a founder-led sales motion", PMF, ` Not sure which side of that line you are on? Our guide to ${L(PMF, "measuring product-market fit")} gives you two tests that settle it.`],
  ["saas-content-marketing-strategy", "pre-product-market fit, start instead", PMF, ` If you are unsure whether the product works yet, our guide to ${L(PMF, "product-market fit")} covers the survey and retention-curve tests.`],
  ["forward-deployed-engineer", "14% in go-to-market or sales", GTM, ` If what you need is someone automating prospecting, scoring and routing on the sales side, that is a different hire: see our guide to ${L(GTM, "the GTM engineer")}.`],
  ["ai-employees", "for sales outreach", GTM, ` The human role that builds and tunes outreach systems like these now has its own title; our guide to ${L(GTM, "the GTM engineer")} covers when to hire one.`],
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
