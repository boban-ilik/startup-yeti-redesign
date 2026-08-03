# Thin-content consolidation plan

Source: GSC "Crawled – currently not indexed" audit, 2026-07-21.
Of the 82 genuine thin posts, 19 were already handled (11 noindex + 8 redirect).
**63 remain.** Data joined per post: referring domains (Ahrefs), GSC impressions
(6mo), incoming internal links, word count. See `consolidation_set.json`.

## Rule learned from the prune pass

Almost every remaining post **has backlinks** (3–11 referring domains). So every
merge must be a **301 to the surviving hub**, never a noindex or delete —
noindexing strands external equity on a page forbidden from ranking.

Redirected posts must also be excluded from `getStaticPaths` + `fetchPosts`
(see `src/data/noindex.js`), or Cloudflare serves the static asset and the
redirect never fires.

## Split of the 63

| Group | Count | Action |
|---|---|---|
| Real demand (GSC impressions ≥10) | 14 | **Improve, do NOT merge** |
| Already un-orphaned 2026-07-21 | 12 (net) | Keep, watch |
| **Merge candidates (near-zero impressions)** | **~35** | **Consolidate into ~7 hubs** |

### Do NOT merge — these show demand (impressions in 6mo)

crowdfunding-for-startups (257) · organizational-behavior (122) ·
startup-financing (80) · consulting-for-startups (59) · seed-stage-startups (52) ·
startup-accounting (36) · upgrade-your-checkout-game (26) ·
the-accelerator-advantage (19) · content-marketing-for-startups (17) ·
essential-tools-for-startup-success (16) · remote-work-revolution (16) ·
why-are-remote-workers-ideal-for-a-startup (14) · startup-insurance-101 (12) ·
how-to-turn-setbacks-into-success-stories (10)

### Special case: /business/gamification

11 referring domains — the **most-linked post on the site** after the homepage.
Only 9 impressions. This is an improve-and-retarget candidate, not a merge.

## Proposed clusters

Survivor chosen by combined signal (internal links + refdomains + topic fit).
"rd" = referring domains consolidated into the hub.

### A. Remote team culture & connection — 5 posts → 1 (rd 19)
- **Survivor:** `/remote-work/remote-team-culture-how-to-build-one-in-your-company` (16 internal links, already the de-facto hub)
- Merge: 6-fun-team-building-exercises (rd6) · work-retreat-experiences (rd6) · annual-in-person-retreats (rd5) · evolution-of-coworking-spaces (rd0)

### B. Employee experience: retention, benefits, training — 6 posts → 1 (rd 35)
- **Survivor:** `/team-management/people-management-tips-unlocking-the-potential-of-your-team` (11 internal links)
- Merge: effective-employee-feedback (rd8) · benefits-for-teams-culture (rd6) · employee-wellness-programs (rd6) · employee-training-and-development (rd5) · the-right-talent-for-your-team (rd5) · 5-ways-to-train-management-retain (rd3)
- Highest equity consolidation in the set.

### C. Hiring for startups — 3 posts → 1 (rd 11)
- **Survivor:** `/startup/hiring-for-startups` (rd8)
- Merge: how-retirees-bring-value (rd3) · 6-ways-to-use-interns (rd0)

### D. Remote work operations — 3 posts → existing indexed page
- **Survivor:** `/remote-work/tips-for-remote-work` (already indexed, 16 impressions, NOT in the thin set)
- Merge: 8-tips-productive-zoom-call (rd4) · strategies-for-remote-onboarding (rd3) · startup-founders-delegate-remote-teams (rd3)

### E. CRM & startup tooling — 3 posts → 1 (rd 11)
- **Survivor:** `/startup/choosing-the-right-crm-for-your-startup` (rd5, best topic fit)
- Merge: the-role-of-crm-in-startup-operations (rd2, 1352w — most content) · the-anatomy-of-startup-apps (rd4) · 8-ways-technology-can-save-hours (rd0)

### F. Startup financial management — 3 posts → 1 (rd 10)
- **Survivor:** `/business/managing-cash-flow` (clearest search intent)
- Merge: financial-reporting-in-strategic-decision-making (rd6) · building-a-resilient-business (rd2)
- Note: keep separate from `/startup/startup-financing` (funding ≠ ops).

### G. Startup marketing basics — 3 posts → existing cluster page
- **Survivor:** `/startup/content-marketing-for-startups` (2,703w, 17 impressions)
- Merge: importance-of-high-quality-content (rd4) · which-marketing-strategies-best-for-startup-budget (rd2) · role-of-branding-agencies (rd2)

### Unclustered leftovers (no good home)
a-b-testing-strategies (rd4) · minimize-risks-maximize-rewards (rd4) ·
the-psychology-of-entrepreneurship (rd5) · local-businesses-global-trends (rd8) ·
challenging-client-relationships (rd4) · future-of-customer-service (rd1) ·
how-to-turn-your-side-hustle-into-a-startup (rd0) · the-path-to-seed-funding (rd8)

Decide individually: most are improve-in-place or fold into a demand page.

## Execution per cluster (do NOT batch all 7)

1. Write the merged article (survivor absorbs the unique substance of each merged post).
2. Update the survivor in WP via the pipeline.
3. Add 301s for every merged slug (both slash variants) to `public/_redirects`.
   **Scan for duplicate paths before pushing** — a single dup rejects the whole file.
4. Add merged slugs to `REDIRECTED_PATHS` in `src/data/noindex.js`.
5. Repoint any internal links that pointed at merged posts.
6. Build locally, verify: merged posts absent from build, 301s resolve, no internal
   links into redirects.
