#!/usr/bin/env node
// link-ai-employees.mjs — incoming internal links for /startup/ai-employees
// so it launches un-orphaned. Fragment-match, insert after sentence end. --dry to verify.
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
const TARGET = "/startup/ai-employees";
const A = (txt) => `<a href="${TARGET}">${txt}</a>`;
const plan = {
  "ai-for-startups": {
    frag: "customer service, data analysis and product development, among others",
    insert: ` The furthest version of that is the ${A("AI employee")}, an agent handed an entire job function with a name attached.`,
  },
  "hiring-for-startups": {
    frag: "take the time to assess your current and future roles",
    insert: ` These days that assessment includes whether a seat needs a person at all; our guide to ${A("hiring an AI employee")} covers when software fills the role instead.`,
  },
};
// WP caps per_page at 100; the site has 175+ posts, so paginate the lookup.
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
  if (count > 1) console.log(`  ⚠ ${slug}: fragment ${count}×, using first`);
  const from = raw.indexOf(ins.frag) + ins.frag.length;
  const m = raw.slice(from).match(/[.!?]/);
  if (!m) { console.log(`  ✗ ${slug} SKIP: no sentence end`); skipped++; continue; }
  const pos = from + m.index + 1;
  raw = raw.slice(0, pos) + ins.insert + raw.slice(pos);
  console.log(`  ✓ ${slug} → ai-employees`);
  applied++;
  if (!DRY) {
    await api(`/posts/${id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw }) });
    console.log(`    → ${slug} updated`);
  }
}
console.log(`\n${DRY ? "DRY RUN" : "Done"}: ${applied} insertable, ${skipped} skipped.`);
