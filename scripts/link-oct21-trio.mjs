#!/usr/bin/env node
// link-oct21-trio.mjs — incoming internal links for the 2026-10-21 articles
// (/innovation/model-context-protocol, /innovation/agentic-ai-examples, /team-management/forward-deployed-engineer).
// Appends one sentence at the end of the paragraph containing `frag`. --dry to verify.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const DRY = process.argv.includes("--dry");
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
const api = async (p, o = {}) => { const r = await fetch(WP + p, o); const b = await r.json(); if (!r.ok) throw new Error(`${p} → ${r.status}: ${JSON.stringify(b).slice(0, 200)}`); return b; };
const L = (href, txt) => `<a href="${href}">${txt}</a>`;
const MCP = "/innovation/model-context-protocol", AG = "/innovation/agentic-ai-examples", FDE = "/team-management/forward-deployed-engineer";
const plan = [
  ["ai-wrapper", "is half diagnosis, half cope", MCP, ` If you are weighing whether to plug your product into the assistants themselves, our guide to ${L(MCP, "the Model Context Protocol")} covers when that wins distribution and when it commoditizes you.`],
  ["ai-employees", "Vendors give them names and faces", AG, ` For named, dated deployments of the same technology, see our roundup of ${L(AG, "real agentic deployments")}.`],
  ["ai-employees", "the job is to figure out what", FDE, ` The enterprise version of that hire now has its own title; our guide to ${L(FDE, "the forward deployed engineer")} covers when it is worth the salary.`],
  ["ai-for-startups", "This includes hiring AI experts, buying software", FDE, ` Many AI vendors now send that expertise to you as ${L(FDE, "forward deployed engineers")}, embedded in your team until the product works.`],
  ["ai-for-startups", "The furthest version of that is the <a href=\"/startup/ai-employees\">AI employee</a>", AG, ` For what these agents actually do in production, see our list of ${L(AG, "agentic AI examples from real companies")}.`],
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
