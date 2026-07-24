#!/usr/bin/env node
// link-carta.mjs — give the new /startup/carta-pricing page incoming internal
// links from 3 topically adjacent donors so it does not launch orphaned.
// Same proven method as unorphan-pass.mjs: match a distinctive plain-text
// fragment, insert a new sentence after that sentence's end punctuation.
// Anchors are varied (not all exact-match) to avoid an over-optimized footprint.
// Run with --dry to verify fragments without writing.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";

const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
async function api(path, opts = {}) {
  const res = await fetch(WP + path, opts);
  const text = await res.text();
  let body; try { body = JSON.parse(text); } catch { throw new Error(`${path} → HTTP ${res.status}, non-JSON: ${text.slice(0, 80)}`); }
  if (!res.ok) throw new Error(`${path} → ${res.status}: ${JSON.stringify(body).slice(0, 200)}`);
  return body;
}
const TARGET = "/startup/carta-pricing";
const A = (txt) => `<a href="${TARGET}">${txt}</a>`;
const plan = {
  "pre-seed-valuation-a-startups-guide": {
    frag: "understanding pre-seed valuation is key in the early stages of a startup",
    insert: ` Once you issue employee options you will also need a 409A valuation, and our guide to ${A("what a 409A costs")} breaks down the price.`,
  },
  "best-payroll-software-for-startups": {
    frag: "handles almost everything automatically",
    insert: ` Payroll is only one line in the back-office budget; equity is another, and our breakdown of ${A("cap table pricing")} shows what Carta runs.`,
  },
  "the-cost-of-pitchbook": {
    frag: "one of the most expensive options in its category",
    insert: ` For another startup tool that hides its real price behind a sales quote, see what ${A("Carta pricing")} actually costs.`,
  },
};

// WP caps per_page at 100 and the site has 174 posts, so paginate the lookup.
const idOf = {};
for (let page = 1; page <= 2; page++) {
  const batch = await api(`/posts?per_page=100&page=${page}&_fields=id,slug`, { headers: { Authorization: auth } });
  for (const p of batch) idOf[p.slug] = p.id;
}
let applied = 0, skipped = 0;
for (const [slug, ins] of Object.entries(plan)) {
  const id = idOf[slug];
  if (!id) { console.log(`  ✗ donor not found: ${slug}`); skipped++; continue; }
  const post = await api(`/posts/${id}?context=edit&_fields=id,slug,content`, { headers: { Authorization: auth } });
  let raw = post.content.raw ?? post.content.rendered;
  if (raw.includes(TARGET)) { console.log(`  ⚠ ${slug} already links to target, skipping`); skipped++; continue; }
  const count = raw.split(ins.frag).length - 1;
  if (count === 0) { console.log(`  ✗ ${slug} SKIP: fragment not found`); skipped++; continue; }
  if (count > 1) console.log(`  ⚠ ${slug}: fragment appears ${count}×, using first`);
  const from = raw.indexOf(ins.frag) + ins.frag.length;
  const m = raw.slice(from).match(/[.!?]/);
  if (!m) { console.log(`  ✗ ${slug} SKIP: no sentence end`); skipped++; continue; }
  const pos = from + m.index + 1;
  raw = raw.slice(0, pos) + ins.insert + raw.slice(pos);
  console.log(`  ✓ ${slug} → carta-pricing`);
  applied++;
  if (!DRY) {
    await api(`/posts/${id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw }) });
    console.log(`    → ${slug} updated`);
  }
}
console.log(`\n${DRY ? "DRY RUN" : "Done"}: ${applied} insertable, ${skipped} skipped.`);
