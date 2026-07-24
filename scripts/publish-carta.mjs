#!/usr/bin/env node
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
const WP = "https://admin.startupyeti.com/wp-json/wp/v2";
const SRC = "/Users/bobanilikj/startup-yeti-redesign/content-drafts/images";
const HTML = "seo-notes/drafts/carta-pricing.html";
const env = Object.fromEntries(readFileSync(homedir() + "/.startupyeti-publish.env", "utf8").split("\n").filter(Boolean).map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
const auth = "Basic " + Buffer.from(`${env.WP_USER}:${env.WP_APP_PASSWORD}`).toString("base64");
async function api(path, opts = {}) {
  const res = await fetch(WP + path, opts);
  const text = await res.text();
  let body; try { body = JSON.parse(text); } catch { throw new Error(`${path} → HTTP ${res.status}, non-JSON: ${text.slice(0, 80)}`); }
  if (!res.ok) throw new Error(`${path} → ${res.status}: ${JSON.stringify(body).slice(0, 200)}`);
  return body;
}
// featured image only (cost chart is text-table; no in-article figures)
const src = `${SRC}/Carta pricing Featured Image.png`;
const alt = "A cap table pie chart of equity ownership among stakeholders beside a dollar price tag, illustrating Carta cost";
const buf = await sharp(readFileSync(src)).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 88 }).toBuffer();
const meta = await sharp(buf).metadata();
const m = await api(`/media`, { method: "POST", headers: { Authorization: auth, "Content-Disposition": `attachment; filename="carta-pricing-featured.webp"`, "Content-Type": "image/webp" }, body: buf });
await api(`/media/${m.id}`, { method: "POST", headers: { Authorization: auth, "Content-Type": "application/json" }, body: JSON.stringify({ alt_text: alt }) });
console.log(`✓ featured carta-pricing-featured.webp: ${(buf.length / 1024 | 0)}KB ${meta.width}x${meta.height}, media id ${m.id}`);

const content = readFileSync(HTML, "utf8");
if (content.includes("IN-ARTICLE IMAGE")) throw new Error("Unexpected image placeholder in HTML");
const post = await api(`/posts`, {
  method: "POST",
  headers: { Authorization: auth, "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "Carta Pricing 2026: What It Really Costs",
    slug: "carta-pricing",
    excerpt: "Carta's pricing is quote-based and opaque. Here's what startups actually pay for cap table management and 409A valuations in 2026, plus cheaper alternatives.",
    content, status: "publish", categories: [26], featured_media: m.id,
  }),
});
console.log(`\n✓ PUBLISHED — id ${post.id}, slug "${post.slug}", status ${post.status}`);
