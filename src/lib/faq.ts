// faq.ts — pull question/answer pairs out of a post's rendered WordPress HTML for FAQPage JSON-LD.
// Posts use four FAQ markups (as of Nov 2026): Rank Math FAQ blocks; an FAQ H2 followed by H3 questions;
// <p><strong>Q?</strong><br>A</p>; and <p><strong>Q?</strong></p> followed by answer paragraphs.

export interface FaqItem { question: string; answer: string }

const ENTITIES: Record<string, string> = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " ", hellip: "…", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“", ndash: "-", mdash: "-" };

function toText(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/(p|li|h\d)>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, name) => ENTITIES[name.toLowerCase()] ?? m)
    .replace(/\s+/g, " ")
    .trim();
}

// The FAQ section: from an H2 whose text mentions FAQ / frequently asked, up to the next H2.
function faqSection(html: string): string | null {
  const h2 = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
  let m: RegExpExecArray | null;
  while ((m = h2.exec(html))) {
    if (/faq|frequently asked/i.test(toText(m[1]))) {
      const start = m.index + m[0].length;
      const next = html.slice(start).search(/<h2[\s>]/i);
      return next < 0 ? html.slice(start) : html.slice(start, start + next);
    }
  }
  return null;
}

export function extractFaq(html: string): FaqItem[] {
  const pairs: FaqItem[] = [];
  const push = (q: string, a: string) => {
    const question = toText(q), answer = toText(a);
    if (question && answer) pairs.push({ question, answer });
  };

  // 1. Rank Math FAQ block (can sit anywhere in the post).
  const rankMath = /<h3[^>]*class="[^"]*rank-math-question[^"]*"[^>]*>([\s\S]*?)<\/h3>\s*<div[^>]*class="[^"]*rank-math-answer[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
  for (const m of html.matchAll(rankMath)) push(m[1], m[2]);
  if (pairs.length) return pairs;

  const section = faqSection(html);
  if (!section) return pairs;

  // 2. H3 questions, answer = everything until the next H3.
  for (const m of section.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3[\s>]|$)/gi)) push(m[1], m[2]);
  if (pairs.length) return pairs;

  // 3. <p><strong>Q?</strong><br>A</p>
  for (const m of section.matchAll(/<p[^>]*>\s*<strong>([\s\S]*?)<\/strong>\s*<br\s*\/?>([\s\S]*?)<\/p>/gi)) push(m[1], m[2]);
  if (pairs.length) return pairs;

  // 4. <p><strong>Q?</strong></p> followed by answer paragraphs until the next bold question.
  const q4 = /<p[^>]*>\s*<strong>([^<]*\?)\s*<\/strong>\s*<\/p>([\s\S]*?)(?=<p[^>]*>\s*<strong>[^<]*\?\s*<\/strong>\s*<\/p>|$)/gi;
  for (const m of section.matchAll(q4)) push(m[1], m[2]);
  return pairs;
}
