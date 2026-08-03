#!/usr/bin/env node
// link-hubspot.mjs — give /marketing/hubspot-alternatives incoming internal links
// so it does not launch orphaned. Fragment-match then insert after sentence end.
// Varied anchors avoid an over-optimized exact-match footprint. --dry to verify.
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
const TARGET = "/marketing/hubspot-alternatives";
const A = (txt) => `<a href="${TARGET}">${txt}</a>`;
const plan = {
  "choosing-the-right-crm-for-your-startup": {
    frag: "should fit within your budget",
    insert: ` The most common budget shock is HubSpot's jump to Professional, which we break down in ${A("what HubSpot really costs")}.`,
  },
  "saas-marketing-strategies": {
    frag: "with one marketer and a limited budget",
    insert: ` Tooling eats that budget faster than channels do, which is why ${A("cheaper CRM options")} are worth pricing before you commit.`,
  },
  "carta-pricing": {
    frag: "The subscription is only part of the bill",
    insert: ` Mandatory onboarding fees are common in this bracket; the same pattern shows up in ${A("HubSpot's pricing")}.`,
  },
};
// WP caps per_page at 100 and the site has 175+ posts, so paginate.
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
  console.log(`  ✓ ${slug} → hubspot-alternatives`);
  applied++;
  if (!DRY) {
    await api(`/posts/${id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw }) });
    console.log(`    → ${slug} updated`);
  }
}
console.log(`\n${DRY ? "DRY RUN" : "Done"}: ${applied} insertable, ${skipped} skipped.`);
