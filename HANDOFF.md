# Production Hand-off · Phase 2

> **Goal**: take the stakeholder-approved prototype and ship a real cgscic.org. This doc is the engineering + design contract — what to build, with what tools, in what order. Source of truth for spec stays `BRAND_DECISIONS.md`.

**Prerequisites for kicking off Phase 2:**
- ✅ Stakeholder sign-off on the prototype (Phase 1)
- ✅ Maru / Rosa / Lauren provide responses to the UNVERIFIABLE rows in `BRAND_DECISIONS.corrections.md`
- ✅ Diego's hero video cut delivered (or v0 fallback approved)

---

## 1 · Stack

| Concern | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router)** | First-class Vercel support; locked brand uses Inter + heavy hero media which `next/font` + `next/image` solve cleanly |
| Hosting | **Vercel** | Default deploy target; preview URLs per branch; Marketplace integrations slot in directly |
| Language | **TypeScript** | Component contracts stay tight; CMS schemas can be typed |
| Styling | **Tailwind CSS** + CSS custom properties for tokens | Locked palette/type maps cleanly to Tailwind config; tokens stay portable |
| Type loading | **`next/font` (Inter, Inter Tight)** | Self-hosted weights, zero CLS, no Google Fonts CDN dependency |
| Rendering | **Cache Components (Next.js 16) with `use cache`** | Homepage is mostly static (locked sections) with dynamic islands (calendar, programs rotation) — PPR is the right shape |
| CMS | **Sanity** via Vercel Marketplace (preferred) — or Payload CMS if a self-hosted option is wanted | Stories + calendar + champions wall + featured-pillar rotation all need editor surfaces; Sanity is the cleanest non-engineer write path |
| Form backend | **Server Actions** + Resend for email + Vercel Postgres (via Neon Marketplace) for submissions | No third-party form tool; full control over routing logic |
| Newsletter | **Resend Audiences** (or ConvertKit via Marketplace) | Coach-written monthly send; Resend keeps it in one provider with the form emails |
| Analytics | **Vercel Web Analytics** + Speed Insights | Zero-config, real-user metrics |
| Bot protection | **Vercel BotID** on the inquiry form | GA since June 2025; stops form-spam without recaptcha friction |

**Verify before adopting anything above** — don't lean on training-data assumptions for Vercel APIs. Read current docs at https://vercel.com/docs and the Next.js docs at https://nextjs.org/docs before writing code that depends on a specific config shape.

---

## 2 · Repository structure (target)

```
.
├── app/
│   ├── layout.tsx              ← root layout, fonts, top nav, footer
│   ├── page.tsx                ← homepage (the 8 sections)
│   ├── globals.css             ← Tailwind + token CSS vars
│   ├── (sections)/             ← homepage sections as components
│   │   ├── hero.tsx
│   │   ├── programs-grid.tsx   ← featured pillar + 4 (rotation-aware)
│   │   ├── pathway.tsx         ← interactive selector
│   │   ├── coaching.tsx
│   │   ├── champions.tsx
│   │   ├── the-bay.tsx
│   │   ├── stories-calendar.tsx
│   │   ├── visit.tsx           ← inline inquiry form
│   │   └── site-footer.tsx
│   ├── stories/
│   │   ├── page.tsx            ← /stories index
│   │   └── [slug]/page.tsx     ← /stories/[slug]
│   ├── calendar/page.tsx       ← /calendar full view
│   └── api/                    ← (only if absolutely needed; prefer Server Actions)
├── components/                 ← shared UI primitives (button, pennant, etc.)
├── lib/
│   ├── sanity.ts               ← client + queries
│   ├── inquiry.ts              ← server action for the form
│   └── tokens.ts               ← typed exports of palette + type scale
├── public/
│   ├── pennant.svg
│   ├── og.jpg
│   └── (placeholder media until photography lands)
├── BRAND_DECISIONS.md          ← spec (don't fork into code; reference here)
├── HANDOFF.md                  ← this file
├── next.config.ts
├── vercel.ts                   ← deployment config (preferred over vercel.json)
├── tailwind.config.ts
└── package.json
```

---

## 3 · Design tokens

Pull from `BRAND_DECISIONS.md §5`. Encode as both CSS custom properties (in `globals.css`) and TypeScript exports (in `lib/tokens.ts`) so design + code stay in sync.

### Color

| Token | Value | Use |
|---|---|---|
| `--cgsc-navy` | `#1A3A8A` | Primary surface, headers, nav, body emphasis |
| `--cgsc-navy-deep` | `#142A66` | Gradient ends, footer dark band |
| `--cgsc-light-blue` | `#4A8FCF` | Secondary, links, sub-marks, tints |
| `--cgsc-rust` | `#FF8B5E` | Accent only — italic emphasis, peak/marquee pins, active states |
| `--cgsc-white` | `#FFFFFF` | Base |
| `--cgsc-soft` | `#F6FAFF` | Soft surfaces, locked panels |
| `--cgsc-charcoal` | `#111111` | Body text |
| `--cgsc-warning` | `#C45656` | "Retired" / strikethrough notes only |

### Type

| Token | Family | Weight | Tracking | Use |
|---|---|---|---|---|
| `display` | Inter Tight | 900 | `-0.035em` | Hero stack, section titles |
| `display-md` | Inter Tight | 800 | `-0.015em` | Sub-headings |
| `body` | Inter | 400 | normal | Paragraph copy |
| `body-emph` | Inter | 500 italic | normal | "Now…" beat (rust color) |
| `ui` | Inter | 700 | `0.18em` uppercase | Eyebrows, button labels |
| `mono-sm` | Inter | 600 | `0.04em` | Hex codes, dev labels |

Inter loaded via `next/font/google` with `display: 'swap'` and the weight axes the design uses. Inter Tight is a separate family — load both.

### Spacing scale

Tailwind defaults are fine — no custom scale needed. Section vertical rhythm: `py-20` desktop, `py-12` mobile, with `py-28` for hero only.

### Motion

Brand is restrained — no flashy animation. Permitted:
- Hero video plays on loop, muted
- Pathway selector → 200ms cross-fade between right-panel states
- Programs rotation slot → no client-side animation, server-rendered per request
- Card hover → 1px border darken + subtle shadow lift (150ms)

Reduced-motion fallback: respect `prefers-reduced-motion: reduce` for the cross-fade; everything else stays static.

---

## 4 · Component contracts (per section)

Each section locks its props + content sources. Stories/calendar items come from CMS; everything else is mostly static config.

### `<Hero>`
- **Props**: `videoSrc?: string`, `posterSrc: string`
- **Content**: locked headline + subhead from `BRAND_DECISIONS.md §1`
- **Notes**: video plays on desktop; mobile defaults to poster + tap-to-play affordance per §16. CLS budget: zero — explicitly size the video container.

### `<ProgramsGrid>` (rotatable spotlight)
- **Props**: `featuredPillar: 'hpc' | 'camps' | 'race' | 'junior' | 'adult'` + `eyebrow: string` + 5 pillar definitions from a typed `pillars` array
- **Content source**: featured pillar + eyebrow controlled by **CMS field** (Sanity: `homepageFeature` document with `pillarId` + `eyebrow` + optional `customImage`); fallback to default `hpc / "The new chapter"` if unset
- **Why CMS**: rotates seasonally per §7 — non-engineers (Maru / staff) update without a deploy

### `<Pathway>` (interactive selector)
- **Props**: `defaultRung?: 'discover' | 'develop' | 'race' | 'compete' | 'perform'` (default: `'race'`)
- **Content**: 5 rungs hardcoded from §8 (rung copy doesn't rotate; this is brand-fixed)
- **Interactivity**: client component (`'use client'`); state managed with `useState`. Mobile: collapses to accordion.
- **A11y**: rungs are `<button>` inside `role="tablist"`; right panel is `role="tabpanel"` with proper `aria-labelledby`.

### `<Coaching>` (numbers + named coaches)
- **Props**: `stats: Stat[]` + `coaches: Coach[]`
- **Content source**: CMS-driven (`Coach` document + `Stat` document). Stats: years on Bay, Olympians in lineage, named coaches, coach-to-sailor ratio.
- **Notes**: until UNVERIFIABLE rows confirmed (Olympian count, ratio), render TBD badges that the CMS can replace.

### `<Champions>` (heritage + alumni wall)
- **Props**: `alumni: Alumnus[]` (≥12 at launch)
- **Content source**: CMS — `Alumnus` document with name, year, achievement, photo, `isOlympian` flag
- **Notes**: olympians get accent ring; everyone equal weight per §10.

### `<TheBay>` (4-season grid · "Sailing year-round")
- **Props**: `seasons: Season[]` (winter / spring / summer / fall) + `stats: Stat[]`
- **Content source**: mostly static (regatta calendar changes once a year), but CMS-backed so non-engineers can edit dates
- **Notes**: "600+ at Orange Bowl" anchor stat retired (PR #1) — replace with a verified CGSC-specific number from Maru/Rosa.

### `<StoriesCalendar>` (split: latest stories + upcoming events)
- **Props**: `latestStories: Story[]` (3 most recent) + `upcomingEvents: Event[]` (4 nearest future)
- **Content source**: CMS (`Story` and `Event` documents)
- **Notes**: each side has a "View all →" link to dedicated `/stories` and `/calendar` pages per §12.

### `<Visit>` (inline inquiry form)
- **Server Action**: `submitInquiry(formData)` — validates with zod, persists to Postgres, sends emails via Resend (one to academy inbox, auto-ack to inquirer)
- **Form fields**: name · email · sailor name · sailor age · experience (select: brand-new / once-twice / some / racing) · interest (select: not-sure / junior / camp / adult / race / hpc) · free-text "Anything else?"
- **Routing logic**: `interest` value determines which inbox to CC (junior → junior coach, hpc → Maru, etc.) — config in `lib/inquiry-routing.ts`
- **Bot protection**: `@vercel/botid` — wrap submit handler

### `<SiteFooter>` (newsletter + sitemap)
- **Server Action**: `subscribeNewsletter(email)` — validates, adds to Resend audience, sends double-opt-in
- **Sitemap nav**: 4 columns + wordmark per §14
- **Bottom bar**: `© 2026 Coconut Grove Sailing Club Instructional Center` · Privacy · Terms · Accessibility

### `<TopNav>` (sticky navy bar)
- **Props**: `currentPath: string` (for active-link state)
- **Behavior**: sticky on scroll, no shrink (per §15). Active link gets 2px rust underline. Mobile collapses to hamburger; full-screen overlay drawer on tap.

---

## 5 · CMS schema (Sanity)

Minimum documents to model:

| Type | Fields |
|---|---|
| `homepageFeature` | `pillarId` (ref to pillar), `eyebrow` (string), `customImage` (image, optional) |
| `pillar` | `id` (slug), `name`, `oneLiner`, `defaultImage`, `description` (rich text) |
| `coach` | `name`, `role`, `bio`, `photo`, `isLead` (bool) |
| `stat` | `value`, `label`, `accent` (bool, for HPC-style highlight) |
| `alumnus` | `name`, `year`, `achievement` (one-liner), `photo`, `isOlympian` (bool), `quote` (optional) |
| `story` | `title`, `slug`, `category` (enum: feature/race/program/profile), `excerpt`, `body` (portable text), `coverImage`, `publishedAt` |
| `event` | `name`, `category` (enum: race/openhouse/clinic/enrollment), `dateStart`, `dateEnd`, `description`, `ctaLabel`, `ctaHref` |
| `season` | `id` (winter/spring/summer/fall), `featuredEvent` (ref), `secondary` (array of strings) |

All previewable with Sanity's draft + live preview integration.

---

## 6 · Performance budgets

Measured against real-user data (Vercel Speed Insights):

| Metric | Budget | Rationale |
|---|---|---|
| LCP | ≤ 2.5s @ p75 mobile | Hero video is the LCP candidate — preload poster, lazy video |
| CLS | ≤ 0.05 | Explicit dimensions on every image + video |
| FID / INP | ≤ 200ms | Pathway selector is the only meaningful client-side interaction |
| Hero video size | ≤ 2 MB @ 720p | Cellular-friendly; transcode H.265 for Safari, H.264 fallback |
| Total page weight (initial) | ≤ 800 KB excl. hero video | Tight; achievable with no client-side framework state past Pathway |
| Lighthouse Performance | ≥ 90 mobile | Verified per PR via Speed Insights |

If any budget slips, the fix is content (smaller video, fewer alumni faces above the fold) before code (don't add client-side optimization libraries).

---

## 7 · Accessibility

Target: **WCAG 2.2 AA**. Specific commitments:

- Color contrast ≥ 4.5:1 for body, ≥ 3:1 for large text — verified across navy + rust combinations
- All interactive elements (Pathway, form, nav, sticky CTA) keyboard-navigable
- Focus rings — preserved, visible against navy (white ring with 2px offset)
- Pathway tablist ARIA correct (`role="tablist"`, `role="tab"`, `role="tabpanel"`)
- Inquiry form labels properly associated; error messages tied to inputs via `aria-describedby`
- Hero video has captions (or is decorative — declare `aria-hidden` if so)
- `prefers-reduced-motion` respected (no autoplay video, no fade transitions)

---

## 8 · Build / deploy pipeline

- **PRs**: every PR gets a Vercel preview URL automatically
- **Production**: `main` branch auto-deploys to production
- **Promotions**: use Vercel Rolling Releases (GA since June 2025) for any change touching the inquiry form or CMS schemas — gradual rollout with rollback if error rate spikes
- **Pre-deploy checks** (CI):
  - `next build` clean
  - `tsc --noEmit` passes
  - Tailwind purge produces sane bundle
  - Sanity schema validation
  - Lighthouse CI on the homepage (warns if Performance < 90)

---

## 9 · Launch timeline (target)

Estimates assume one engineer + one designer collaborating, with Diego on creative direction.

| Week | Focus | Deliverables |
|---|---|---|
| 1 | Scaffolding | Next.js + Tailwind + Sanity initialized, deployed empty to Vercel preview, top nav + footer working |
| 2 | Static sections | Hero, Programs grid (no rotation yet), Pathway, Coaching wired to CMS placeholders |
| 3 | Dynamic surfaces | Champions wall, The Bay seasons, Stories/Calendar reading from CMS |
| 4 | Forms + integrations | Inquiry form server action, BotID, Resend wiring; Newsletter signup |
| 5 | Content + media | Real photography integrated; video integrated; CMS populated by Maru's team |
| 6 | Polish + launch | Performance pass, a11y pass, Lighthouse > 90, stakeholder sign-off, production deploy |

Realistic floor: 4 weeks if content lands fast and the CMS doesn't churn. Realistic ceiling: 8 weeks if photography or fact-corrections drag.

---

## 10 · Open questions for kickoff

Things to resolve before week 1:
- [ ] Stakeholder approval of Phase 1 prototype (gating Phase 2)
- [ ] Maru / Rosa responses on UNVERIFIABLE rows (gating real Champions wall + Olympian counts)
- [ ] Diego's hero video cut delivery date (gating real LCP measurement)
- [ ] CMS choice confirmed — Sanity vs. Payload (default: Sanity unless self-hosting is a hard requirement)
- [ ] Domain plan — does cgscic.org get pointed at the new build, or do we ship to `new.cgscic.org` first?
- [ ] Analytics privacy stance — Vercel Web Analytics is privacy-first by default, but confirm with CGSC if any extra disclosure is needed
- [ ] Newsletter cadence committed to (monthly is the promise in the footer copy — confirm Maru's team can sustain it)

---

## 11 · When you start the next session

1. `git status` and `git log --oneline -8` — confirm where you are
2. Open `BRAND_DECISIONS.md` (spec) and this `HANDOFF.md` (build plan) side by side
3. If Phase 1 prototype is built, the next move is **scaffolding** (week 1 above)
4. If not, finish Phase 1 first (`PROTOTYPE_PLAN.md`)
5. Don't trust training-data API knowledge for Vercel / Next.js / Sanity — read current docs before writing config

The brand is locked. The facts are partly verified. The prototype plan is concrete. Phase 2 is sequential and unambiguous. Build with confidence — when in doubt, the answer is in `BRAND_DECISIONS.md`.
