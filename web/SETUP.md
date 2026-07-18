# CGSC Instructional Center — run & edit

The site is a plain Next.js (App Router) app. **No CMS, no backend, no
environment variables.** All copy lives in typed TypeScript files in this repo —
edit a file, commit, push, and Vercel redeploys.

## Run it locally

```bash
npm install
npm run dev
```

Site: <http://localhost:3000>. `npm run build` must stay green before pushing.

## How to edit content

- **Copy (all text on every page):** edit the matching file in `lib/content/`.
  Each page has one file; the field names mirror the page sections top-to-bottom.
  Inline bold uses a `**bold**` convention (rendered by `components/Rich.tsx`).
- **Design (layout, color, type):** locked in `app/globals.css` (ported verbatim
  from `prototype/styles/*`). Pages only supply class names.
- **Media (photos, hero video, card imagery):** CSS/asset-driven under
  `public/assets`. The homepage hero video URL is the `hero.videoUrl` field in
  `lib/content/home.ts` (use `/assets/<file>.mp4` or a direct .mp4 URL —
  `lib/video.ts` rejects non-playable links like YouTube watch pages).
- **Nav / footer / drawer / sticky CTA:** `components/chrome/*`.

## Pages ↔ content files

| Route | Content file | Ported from |
|---|---|---|
| `/` | `lib/content/home.ts` | index.html |
| `/about` | `lib/content/about.ts` | about.html |
| `/programs` | `lib/content/programsIndex.ts` | programs/index.html |
| `/programs/race-team` | `lib/content/raceTeam.ts` | programs/race-team.html |
| `/programs/camps-coaching` | `lib/content/campsCoaching.ts` | programs/camps-coaching.html |
| `/programs/adult-sailing` | `lib/content/adultSailing.ts` | programs/adult-sailing.html |
| `/youth-regattas` | `lib/content/youthRegattas.ts` | youth-regattas.html |
| `/calendar` | `lib/content/calendar.ts` | calendar/index.html |
| `/calendar/sample-story` | `lib/content/sampleStory.ts` | calendar/sample-story.html |
| `/giving` | `lib/content/giving.ts` | giving.html |
| `/contact` | `lib/content/contact.ts` | contact.html |

## Project map

| Path | Purpose |
|---|---|
| `app/(site)/**` | Public site routes (share the nav/footer chrome) |
| `app/globals.css` | Locked design system (verbatim from prototype) |
| `components/chrome/*` | Canonical TopNav / Footer / MobileDrawer / StickyCTA |
| `components/SiteScripts.tsx` | Ported prototype JS (drawer, scrollspy, coach photos) |
| `components/Rich.tsx` | Inline `**bold**` renderer for prose |
| `lib/content/*` | Per-page content — the single source of truth |

## Deploying

Vercel with **Root Directory = `web`**; framework auto-detects Next.js. Every
page is statically prerendered at build time (no runtime data fetching), so
there is nothing else to configure.
