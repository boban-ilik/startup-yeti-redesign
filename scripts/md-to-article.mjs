#!/usr/bin/env node
// md-to-article.mjs — convert an seo-notes/drafts/*.md (YAML front matter + Markdown) into
// the article JSON scripts/publish.mjs expects. Usage: node scripts/md-to-article.mjs <md> <imagePath> <imageAlt> <out.json>
import { readFileSync, writeFileSync } from "node:fs";
import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
const [md, imagePath, imageAlt, out] = process.argv.slice(2);
const raw = readFileSync(md, "utf8");
const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
if (!m) throw new Error("no front matter");
const fm = Object.fromEntries(m[1].split("\n").map((l) => { const i = l.indexOf(":"); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^"|"$/g, "")]; }));
const body = m[2].replace(/^\s*# .*\n/, "").trim();          // drop the H1, the template renders the title
let html = micromark(body, { extensions: [gfm()], htmlExtensions: [gfmHtml()] });
html = html.replace(/<a href="(https?:\/\/[^"]+)">/g, '<a href="$1" target="_blank" rel="noopener">');
if (/[—–]/.test(html)) throw new Error("dash found");
const cat = fm.category.toLowerCase().replace(/\s+/g, "-");
writeFileSync(out, JSON.stringify({ title: fm.title, slug: fm.slug, excerpt: fm.meta_description, content: html, categorySlug: cat, status: "publish", imagePath, imageAlt }, null, 2));
console.log(`${fm.slug}: ${cat}, ${html.length} chars, h2=${(html.match(/<h2>/g)||[]).length}, tables=${(html.match(/<table>/g)||[]).length}, links=${(html.match(/<a /g)||[]).length}, excerpt=${fm.meta_description.length}`);
