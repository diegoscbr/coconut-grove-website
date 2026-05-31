# Multi-Page Mockups — PRD

**Owner:** Diego Escobar (PMG)
**Date:** 2026-05-31
**Status:** Approved, in execution
**Supersedes:** `PROTOTYPE_PLAN.md` Phase 1 (single-page prototype — completed, stakeholder buy-in secured)
**Sets up:** `HANDOFF.md` Phase 2 (Next.js + Sanity + Resend — now provisional pending mockup outcome)

---

## Problem Statement

Diego (at PMG) is building the CGSC Instructional Center site (cgscic.org). The Phase 1 single-page prototype has been approved by stakeholders, but the Phase 2 production stack — locked in `HANDOFF.md` as Next.js + Sanity + Resend — is now provisional. Before committing to backend architecture, schema, and component contracts, Diego needs every page of the IC site visualized as static HTML mockups so the full UI system is legible end-to-end. The current single-page prototype shows only the homepage with sections that expand inline; it does not reveal what *interior* pages should look like, what components a Phase 2 build will need, or what content gaps Maru and Rosa must close.

Without per-page mockups, Phase 2 risks (i) committing to a CMS schema before the page-level information architecture is settled, (ii) discovering missing components mid-build, and (iii) misallocating the "where do I fit?" pathway story across the wrong surfaces.

## Solution

Build **12 static HTML page templates** covering every page of the IC site, with structural + visual parity to `mouratoglou.com/en/` patterns (captured in `reference/inspiration/mouratoglou/`), CGSC content, and the brand system already in `prototype/`. Mockups rebuild `prototype/` in place — current SPA prototype is replaced (v1 preserved via git history). Filesystem mirrors the URL hierarchy (`prototype/programs/race-team.html` → `/programs/race-team`). A three-layer CSS architecture (`tokens.css` + `components.css` + `pages/*.css`) makes the mockup set a clean translation target for Phase 2 components. Deploys to the existing Vercel project (`diegoscbrs-projects/prototype`) at the existing URL.

Output: a complete navigable site at the prototype URL; a component library auditable section-by-section against Mouratoglou's INDEX files; a reconciled `BRAND_DECISIONS.md` v1.1 lock; an evaluable surface for the Phase 2 backend conversation.

## User Stories

1. As Diego (project lead), I want to navigate the full multi-page site through global nav so I can evaluate IA legibility before backend commits.
2. As Diego, I want a Programs landing page that explains the three program destinations so prospective members understand where they fit.
3. As Maru (incoming Director of Sailing Performance & Development), I want a dedicated Race Team page that absorbs the HPC and Junior pathway story so the premier-academy positioning has a single coherent surface.
4. As a prospective adult sailor, I want an Adult Sailing page that distinguishes the non-competitive track from the racing pipeline.
5. As a parent of a junior sailor, I want a Camps & Coaching page that surfaces seasonal offerings and entry-level pathways.
6. As a visitor curious about the club, I want an About page that combines the 80-year heritage story with the coaching roster on one scroll.
7. As a member, I want a Calendar page that combines upcoming regattas + recent news/stories so I have one "what's happening" hub.
8. As a content reader, I want individual story/post detail pages with shareable URLs.
9. As a prospective member, I want a Contact page with form, hours, address, and inquiry routing.
10. As a club member, I want a Marketplace index where I can browse fellow members' used sailing gear listings.
11. As a club member, I want a Marketplace listing detail page showing photos, description, and seller contact info.
12. As a club member, I want a Marketplace post-item form to list my used gear (mockup-only; no backend persistence yet).
13. As Diego, I want the Marketplace to be a member-only conceit (mockup shows an auth gate) so the surface reflects the intended access model.
14. As a Phase 2 dev (future me or contractor), I want a clean component library (tokens.css + components.css) that maps 1:1 to React components so translation is cheap.
15. As Diego, I want every Mouratoglou section pattern in `reference/inspiration/mouratoglou/*/INDEX.md` either present in the CGSC mockups or explicitly marked "cut, see note" so design decisions are auditable.
16. As Diego, I want TBDs visibly chip-marked (existing `.tbd` class) so content gaps surface as work items for Maru and Rosa.
17. As Diego, I want the live URL (`prototype-sooty-seven.vercel.app`) to track the latest mockup state so it serves as the shareable reference.
18. As a Phase 2 dev, I want each page at its own URL (e.g. `/programs/race-team`) so the IA matches eventual production routing.
19. As Diego, I want shared chrome (header, footer, mobile drawer, scrollspy) so navigation feels coherent across all 12 templates.
20. As Diego, I want the §1 hero subhead drift (BRAND_DECISIONS.md vs live) reconciled as part of this initiative, writing a v1.1 lock so brand spec doesn't accumulate debt.
21. As Diego, I want the 5-pillar story consolidated into 3 program destinations in BRAND_DECISIONS.md v1.1 so the IA matches the spec.
22. As Diego, I want the §8 Pathway visualization repositioned from Home to Race Team so the spec reflects the architectural shift.
23. As an interior-page reader, I want a page-subnav appearing under the hero on long pages (Mouratoglou pattern) so I can navigate within sections.
24. As a mobile user, I want the same hamburger + sticky bottom CTA reflow as the current prototype on all new pages.
25. As Diego, I want all forms (contact, marketplace post, newsletter) as visible no-op mockups so UX is evaluable without backend wiring.
26. As a Phase 2 dev, I want each Mouratoglou-token component (PROGRAM-CARD, ACCENT-BRACKET, METHOD-LIST, FAQ-ACCORDION, etc.) implemented once in `components.css` so its naming mirrors the reference vocabulary.
27. As Diego, I want a story/post template that demonstrates editorial layout (lead photo, byline, body, related posts) so the Calendar-absorbs-news IA is concrete.
28. As Diego, I want the Marketplace mockup to feel like a club bulletin board, not a Craigslist clone, so the visual character signals the member-only conceit.

## Implementation Decisions

### IA — locked

- **6 top-level nav pages:** Home · Programs · About · Calendar · Contact · Marketplace
- **Programs has a real landing page + 3 sub-pages:** Adult Sailing · Race Team · Camps & Coaching
- **Race Team absorbs HPC and the Junior pathway** as competitive-pipeline stages (Develop → Race → Compete → Perform). Junior Academy folds into Race Team's "Develop" stage and into Camps & Coaching for entry-level / non-competitive youth.
- **About is one scrolling page** with two sections: Heritage + Coaches. No news section on About.
- **Calendar absorbs the news/blog index.** Events + stories combined on one timeline. Two tabs or one merged feed — design decision deferred to Phase E.
- **Individual story/post has its own template** (`/calendar/[slug]`) with shareable URL.
- **Marketplace = 3 templates:** index + listing detail + post-item form. Member-only conceit (auth gate as visual element, not enforced).
- **Total: 12 page templates.**

### SKIP from Mouratoglou

- INTERNATIONAL directory (single club, not a multi-location brand)
- BOOK/CONTACT location-chooser overlay (single property)
- Anniversary sub-skin (no current campaign — Heritage section on About absorbs the vibe)
- Sticky search bar (content depth doesn't justify it yet)
- Sponsor wall (CGSC doesn't currently have commercial sponsors at the level Mouratoglou does — revisit at Phase 2 if club partners want a placement)

### Filesystem

```
prototype/
├── index.html                    Home (revised from current SPA)
├── programs/
│   ├── index.html                Programs landing
│   ├── adult-sailing.html
│   ├── race-team.html
│   └── camps-coaching.html
├── about.html
├── calendar/
│   ├── index.html                Events + news combined
│   └── [slug].html               Story detail template (one demo file)
├── contact.html
├── marketplace/
│   ├── index.html
│   ├── listing.html              Detail template (one demo file)
│   └── post.html                 Post-item form
├── assets/                       hero video, poster, future imagery
├── styles/
│   ├── tokens.css
│   ├── components.css
│   └── pages/
│       └── *.css
└── js/
    ├── site.js
    └── pages/
        └── *.js
```

Subfolder structure mirrors URL hierarchy. Vercel `cleanUrls` already on → URLs strip `.html`.

### Component architecture — three-layer split

- **`styles/tokens.css`** — design-system core (colors, type, spacing, motion). Extracted from the current `prototype/styles.css` `:root` block as starting point.
- **`styles/components.css`** — every reusable block: header/nav, footer, mobile drawer, hero variants, card variants (PROGRAM-CARD, AMBASSADOR-CARD, ARTICLE-CARD, LISTING-CARD, LOCATION-CARD, COACH-CARD), manifesto, page-subnav, accent-bracket, FAQ-accordion, contact-form, by-axis-browser, sponsor-wall (if used), newsletter band, inquiry CTA, value cloud, photo grid, announce bar.
- **`styles/pages/*.css`** — page-specific overrides only where a component doesn't generalize. Stays thin.

**Same logic for JS:**
- **`js/site.js`** — shared chrome (header, mobile drawer, scrollspy, newsletter form, any global)
- **`js/pages/race-team.js`** — pathway selector
- **`js/pages/contact.js`, `js/pages/marketplace-post.js`** — per-page form handlers

### Discipline

- Start the first 2-3 pages by writing page-specific CSS. Extract to `components.css` only when a pattern repeats. Don't pre-design the component library.
- All TBDs use the existing `.tbd` chip class so content gaps stay visibly tracked.
- Mouratoglou-token vocabulary (per reference INDEX files) is preserved in CSS class names where it usefully maps (e.g. `.accent-bracket`, `.page-subnav`, `.manifesto`, `.method-list`).

### Build order (8 phases)

- **A. Shell** — extract tokens.css, start components.css (header/footer/mobile drawer), create all 12 page skeletons with nav between them. *Outcome:* clickable full site, no body content.
- **B. Anchor interior — Race Team** — richest interior page; extracts the most components into `components.css`. Includes pathway visualization (moved from Home).
- **C. Home revision** — rebuild `prototype/index.html` against new components and new IA (3 program cards, sections link out).
- **D. Program variants** — Programs landing, Adult Sailing, Camps & Coaching. Reuse Race Team template.
- **E. About + Calendar + Story detail** — new templates not covered by program layout.
- **F. Contact** — form + map + hours.
- **G. Marketplace × 3** — index, listing detail, post-item form.
- **H. Polish + reconcile drift** — write `BRAND_DECISIONS.md` v1.1 (reconcile §1 hero subhead, §3 5→3 pillars, §7 grid, §8 Pathway location), link audit, mobile sanity pass.

### Deploy

- Same Vercel project: `diegoscbrs-projects/prototype`
- Same URL: `prototype-sooty-seven.vercel.app`
- Each commit auto-deploys via Vercel git integration
- No domain change as part of this PRD (cgscic.org cutover is a separate workstream tracked in the redesign-strategy memory)

### Drift to reconcile in Phase H (write BRAND_DECISIONS.md v1.1)

- **§1** — Hero subhead. Live prototype copy ("For 80 years the CGSC has been the training ground for sailors at every level. *Now, we're taking it to the next level, for all sailors on Biscayne Bay.*") becomes the v1.1 lock.
- **§3** — Five pillars → three program destinations (Adult Sailing · Race Team · Camps & Coaching). HPC and Junior absorbed.
- **§7** — Programs grid: featured + 4-grid → 3 cards. Featured-treatment language updated.
- **§8** — Pathway visualization relocates from Home to Race Team page.
- **§17 (new)** — Marketplace surface added as member-only club bulletin board.

## Testing Decisions

Mockup-quality bar; no unit tests, no Playwright. Verification is by-eye and by-browse.

**What makes a "good test" in this context:**
- A page renders correctly in Chrome (primary), Safari, mobile Safari
- All nav links resolve (no 404s, no broken anchors)
- Component library is internally consistent (same card pattern works in all contexts; same header behavior on all pages)
- The mockup set deploys cleanly to Vercel and passes a click-through

**Verification approach:**
- Use the `browse` (gstack) skill at the end of each phase to take screenshots + click-through, check console for errors
- Use `qa-only` skill at the end of Phase H to produce a final bug list
- Link audit before Phase H sign-off (script or manual)

**Modules and prior art:**
- Prior art for the visual reference: `reference/inspiration/mouratoglou/*/INDEX.md` — these are the section-by-section pattern manifests. Each component should be checkable against the matching INDEX entry.
- Prior art for the brand system: `prototype/styles.css` `:root` (tokens) — extract verbatim into `tokens.css`. Don't redesign the palette during this initiative.
- Prior art for the existing JS: `prototype/app.js` — pathway, mobile drawer, scrollspy, form-confirmation patterns all lift cleanly into the new architecture.

## Out of Scope

- Real photography. Placeholder gradients with alt text fine. Hero video already in `prototype/assets/hero.mp4` may stay on Home.
- Verified content for Maru-blocking TBDs (Olympian count, alumni names, hours, open-house cadence, coach-to-sailor ratio). All chip-marked as `.tbd`.
- Real Marketplace listings — 3-5 plausible fake listings authored for the mockup.
- Backend wiring of any form (contact, marketplace post, newsletter). All are visible no-ops with confirmation flash.
- Real auth for Marketplace. Gate is a visual conceit (e.g. "Members only · sign in to post") not an enforced check.
- Mobile pixel-perfection — responsive yes, polished mobile review later.
- Phase 2 stack decisions (Next.js, Sanity, Resend). Explicitly deferred until mockups are evaluated; outcome of this PRD informs that conversation.
- Individual coach bio pages.
- Individual regatta detail pages.
- Internationalization.
- SEO meta (title/og tags). Plausible defaults fine; not researched.
- Production cgscic.org cutover. The live WP site is currently compromised; addressing that is a separate workstream.
- Accessibility audit beyond the existing prototype's baseline. Full a11y pass deferred to Phase 2.

## Further Notes

**Context flags:**
- Live cgscic.org currently shows a compromised/spam page (WordPress install, per `redesign_strategy_decided_2026_05_31.md` memory). This work doesn't address the production cutover.
- DNS is at Namecheap, app currently at DigitalOcean. Go-live is a DNS flip, not a registrar transfer.
- 4 local commits on `main` are unpushed (per 2026-05-04 session state; HEAD `0fde160`). SSH key likely needs re-add. Push gate before Phase A starts.
- Stakeholder buy-in for the Phase 1 single-page prototype is secured. This PRD supersedes that artifact (which is preserved in git history).
- The brand system in `prototype/styles.css` is locked v1 (2026-05-01) modulo the documented drift in `BRAND_DECISIONS.md`. Drift gets reconciled in Phase H — don't redesign during Phases A-G.

**Future work surfaced but not in this PRD:**
- Mouratoglou-style mega-menu under top nav items — possible Phase 2 polish, not v1.
- Newsletter integration (Resend or similar) — Phase 2.
- Sanity CMS schema — Phase 2, informed by the component shapes this PRD produces.
- Individual coach bio pages, regatta detail pages, alumni profiles — Phase 3 or later.
- Member auth + Marketplace persistence — Phase 2 or 3 depending on member-system rollout.

**Filing note:** This PRD lives at the repo root as `MOCKUPS_PRD.md` (matches the convention of `PROTOTYPE_PLAN.md`, `HANDOFF.md`, `BRAND_DECISIONS.md`). It can be mirrored to a GitHub issue with `needs-triage` label once `gh auth login` is completed.
