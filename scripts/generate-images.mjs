#!/usr/bin/env node
// generate-images.mjs — create article images via the OpenAI Images API.
// Credentials read at runtime from ~/.startupyeti-publish.env (OPENAI_API_KEY=...).
//
// Usage:
//   node scripts/generate-images.mjs path/to/prompts.json
//
// prompts.json shape:
// [
//   { "file": "saas-topic-featured.png",  "prompt": "..." },
//   { "file": "saas-topic-inarticle1.png", "prompt": "..." }
// ]
//
// Images land in content-drafts/images/ as 1536x1024 PNGs, ready for the
// existing optimize-and-attach step (which converts to 1200w WebP on upload).

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { homedir } from "node:os";

const OUT_DIR = "/Users/bobanilikj/startup-yeti-redesign/content-drafts/images";
const ENV_FILE = `${homedir()}/.startupyeti-publish.env`;

function fail(msg) { console.error("✗ " + msg); process.exit(1); }

const env = Object.fromEntries(
  readFileSync(ENV_FILE, "utf8").split("\n").filter(Boolean).map((l) => {
    const i = l.indexOf("=");
    return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
  })
);
if (!env.OPENAI_API_KEY) fail(`OPENAI_API_KEY not set in ${ENV_FILE}. Add a line: OPENAI_API_KEY=sk-...`);

const jobs = JSON.parse(readFileSync(process.argv[2] || fail("Pass a prompts JSON path."), "utf8"));
if (!Array.isArray(jobs) || !jobs.length) fail("prompts JSON must be a non-empty array of {file, prompt}.");
mkdirSync(OUT_DIR, { recursive: true });

for (const job of jobs) {
  if (!job.file || !job.prompt) fail("Each entry needs {file, prompt}.");
  process.stdout.write(`generating ${job.file} ... `);
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-image-1.5",
      prompt: job.prompt,
      size: "1536x1024",
      quality: "high",
      n: 1,
    }),
  });
  const body = await res.json();
  if (!res.ok) fail(`OpenAI API ${res.status}: ${JSON.stringify(body.error || body).slice(0, 300)}`);
  const b64 = body.data?.[0]?.b64_json;
  if (!b64) fail(`No image data returned for ${job.file}.`);
  const out = `${OUT_DIR}/${job.file}`;
  writeFileSync(out, Buffer.from(b64, "base64"));
  console.log(`✓ saved (${(Buffer.from(b64, "base64").length / 1024 | 0)} KB) → ${out}`);
}
console.log(`\nDone. Review the images in ${OUT_DIR}, then approve for attach + publish.`);
