#!/usr/bin/env node
// fix-broken-links-nov13.mjs — repair dead outbound links found by the 2026-11-13 link check (433 external links).
// "archive": point the link at its Wayback snapshot (keeps the citation). "unlink": remove the <a>, keep its text.
// FlexJobs was a false alarm (loads in a browser) and the Startup Genome link is handled by the saas-growth-strategy
// optimizer proposal, so neither is here. --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const plan = [
  ["social-media-metrics", "https://www.voguebusiness.com/story/beauty/battle-of-the-beauty-socials-how-brands-can-succeed-across-platforms", "archive"],
  ["strategies-for-setting-the-right-price", "https://www.paddle.com/resources/price-anchoring-to-optimize-your-pricing-strategy", "archive"],
  ["challenging-client-relationships", "https://basecamp.com/articles/how-to-set-client-expectations", "archive"],
  ["gamification", "https://rewardtheworld.net/gamification-case-studies-lessons-from-top-brands/", "archive"],
  ["how-boundaries-can-boost-your-career", "https://originalintent.co.uk/articles/leadership-skills-for-2024-setting-boundaries/", "archive"],
  ["best-places-to-work-remotely-near-you", "https://www.malikahkelly.com/blog/2026/1/9/the-rise-of-wellness-retreats-in-2026", "unlink"],
  ["the-accelerator-advantage", "https://www.nextidal.com/2025/06/30/top-startup-accelerators-mentorship-and-funding-for-early-stage-founders/", "unlink"],
  ["cloud", "https://www.linkedin.com/in/mgris/", "unlink"],
  ["best-gadgets-for-leaders", "https://www.anker.com/products/a1277", "unlink"],
  ["what-to-look-for-when-hiring-your-2", "https://www.shrm.org/certification/educators/Documents/Recruitment%20and%20Selection%20IM.pdf", "unlink"],
  ["ai-hallucinations", "https://claudeai.wiki/category/ai-blog/", "unlink"],
];
const snapshots = Object.fromEntries(JSON.parse(readFileSync(process.env.BROKEN_PLAN, "utf8")).map((x) => [x.url, x.snapshot]));
for (const [slug, prefix, mode] of plan) {
  const post = (await api(`/posts?slug=${slug}&context=edit&_fields=id,content`, { headers: { Authorization: auth } }))[0];
  let raw = post.content.raw;
  // Match the full href that starts with the (possibly truncated in the report) URL prefix.
  const re = new RegExp(`<a\\s[^>]*href="(${prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^"]*)"[^>]*>([\\s\\S]*?)</a>`, "g");
  const hits = [...raw.matchAll(re)];
  if (!hits.length) throw new Error(`${slug}: link not found`);
  for (const h of hits) {
    const [whole, url, text] = h;
    let rep;
    if (mode === "archive") {
      const snap = snapshots[url] ?? Object.entries(snapshots).find(([k]) => url.startsWith(k.slice(0, 80)))?.[1];
      if (!snap) throw new Error(`${slug}: no snapshot for ${url}`);
      rep = whole.replace(`href="${url}"`, `href="${snap}"`);
    } else rep = text;
    raw = raw.replace(whole, rep);
    console.log(`  ${mode === "archive" ? "→ archive" : "✂ unlink "}  ${slug}: "${text.replace(/<[^>]+>/g, "").slice(0, 60)}"${mode === "archive" ? "  " + rep.match(/href="([^"]+)"/)[1].slice(0, 70) : ""}`);
  }
  if (!DRY) { await api(`/posts/${post.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ content: raw }) }); console.log(`    ✓ saved ${slug}`); }
}
if (DRY) console.log("DRY RUN");
