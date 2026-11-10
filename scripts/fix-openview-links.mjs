#!/usr/bin/env node
// fix-openview-links.mjs — replace dead/redirecting OpenView links (checked 2026-11-10: /expansion-saas-benchmarks/ 404s,
// /blog/ and /blog/product-led-growth/ redirect to the homepage). --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const HA = (txt) => `<a href="https://www.highalpha.com/saas-benchmarks" target="_blank" rel="noopener">${txt}</a>`;
const A = (path) => new RegExp(`<a [^>]*href="https://openviewpartners\\.com${path}"[^>]*>(.*?)</a>`, "s");
const plan = {
  "saas-marketing-strategies": [[new RegExp(`published yearly in ${A("/expansion-saas-benchmarks/").source}\\.`, "s"), `published yearly in ${HA("High Alpha's SaaS Benchmarks Report")}.`]],
  "plg-saas": [
    [new RegExp(`${A("/expansion-saas-benchmarks/").source} are the standard reference`, "s"), `${HA("High Alpha's annual SaaS Benchmarks Report")} is a useful reference`],
    [/href="https:\/\/openviewpartners\.com\/blog\/product-led-growth\/"/, 'href="https://web.archive.org/web/20231205013658/https://openviewpartners.com/blog/product-led-growth/"'],
  ],
  "saas-marketing-plan": [[new RegExp(`benchmarks like ${A("/blog/").source}`, "s"), `benchmarks like ${HA("High Alpha's annual report")}`]],
};
for (const [slug, swaps] of Object.entries(plan)) {
  const post = (await api(`/posts?slug=${slug}&context=edit&_fields=id,content`, { headers: { Authorization: auth } }))[0];
  let raw = post.content.raw;
  for (const [re, rep] of swaps) {
    const m = raw.match(new RegExp(re.source, re.flags + "g"));
    if (!m || m.length !== 1) throw new Error(`${slug}: ${m ? m.length : 0} matches for ${re.source.slice(0, 70)}`);
    console.log(`  ~ ${slug}: ${JSON.stringify(m[0]).slice(0, 110)}\n      → ${JSON.stringify(raw.match(re)[0].replace(re, rep)).slice(0, 110)}`);
    raw = raw.replace(re, rep);
  }
  if (/openviewpartners\.com\/(expansion-saas-benchmarks|blog\/")/.test(raw)) throw new Error(`${slug}: dead OpenView link left`);
  if (!DRY) { await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw }) }); console.log(`  ✓ ${slug} saved`); }
}
if (DRY) console.log("DRY RUN");
