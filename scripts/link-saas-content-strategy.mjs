#!/usr/bin/env node
// link-saas-content-strategy.mjs — first two in-body incoming links to /marketing/saas-content-marketing-strategy
// (optimizer cycle 1, 2026-11-13): a new sequel paragraph in the startups prequel, and one sentence in the GTM hub. --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const T = "/marketing/saas-content-marketing-strategy";
const once = (raw, frag, slug) => { const i = raw.indexOf(frag); if (i < 0 || raw.indexOf(frag, i + 1) >= 0) throw new Error(`${slug}: fragment not found exactly once: ${frag}`); return i; };

const plan = [
  { slug: "content-marketing-for-startups", apply(raw) {
      // New paragraph block after the paragraph containing "The machinery isn".
      const i = once(raw, "The machinery isn", this.slug);
      const pEnd = raw.indexOf("</p>", i) + 4;
      const blockEnd = raw.startsWith("\n<!-- /wp:paragraph -->", pEnd) ? pEnd + "\n<!-- /wp:paragraph -->".length : pEnd;
      const ins = `\n\n<!-- wp:paragraph -->\n<p>Once the product works, the job changes. Our <a href="${T}">SaaS content marketing strategy</a> guide is the sequel: the four assets to build next, in payback order.</p>\n<!-- /wp:paragraph -->`;
      return raw.slice(0, blockEnd) + ins + raw.slice(blockEnd);
  } },
  { slug: "saas-marketing-strategies", apply(raw) {
      const frag = `in <a href="/startup/content-marketing-for-startups">content marketing for startups</a>.`;
      const i = once(raw, frag, this.slug) + frag.length;
      return raw.slice(0, i) + ` The post-PMF version, built around four product-led assets, is our <a href="${T}">SaaS content marketing strategy</a>.` + raw.slice(i);
  } },
];

for (const step of plan) {
  const post = (await api(`/posts?slug=${step.slug}&context=edit&_fields=id,content`, { headers: { Authorization: auth } }))[0];
  const raw = post.content.raw;
  if (raw.includes(`href="${T}"`)) { console.log(`  = ${step.slug}: already links`); continue; }
  const out = step.apply(raw);
  const at = out.indexOf(`href="${T}"`);
  console.log(`  + ${step.slug} (post ${post.id}): …${JSON.stringify(out.slice(at - 140, at + 90))}`);
  if (!DRY) { await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: out }) }); console.log(`  ✓ ${step.slug} saved`); }
}
if (DRY) console.log("DRY RUN");
