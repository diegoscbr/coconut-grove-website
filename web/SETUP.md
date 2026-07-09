# CGSC Instructional Center — Next.js + Sanity

The full static site migrated 1:1 into Next.js (App Router) + Sanity, on Vercel.
Every page renders exactly like the prototype and every copy section is editable
in Sanity. **No backend to run** — Sanity hosts content + the editing UI; Vercel
hosts the site.

## How it works

- **Design is locked in code** (`app/globals.css`, ported verbatim from
  `prototype/styles/*`). The CMS never touches layout, color, or type.
- **Copy lives in Sanity.** Each page is a singleton document; its fields hold
  the editable copy. The client edits with click-to-edit live preview.
- **Content source of truth = `lib/content/*.ts`.** Each page renders from Sanity
  and falls back to these constants, so the site is a 1:1 replica even before the
  dataset is seeded. The same constants seed Sanity (`npm run seed`).
- **Media** (photos, hero video, card imagery) stays CSS/asset-driven under
  `public/assets`, exactly as the prototype. Swap in real uploads later.

## Run it locally

Prereqs already configured in `.env.local`: `NEXT_PUBLIC_SANITY_PROJECT_ID`,
`NEXT_PUBLIC_SANITY_DATASET=production`. Make sure `http://localhost:3000` is a
CORS origin **with credentials** (sanity.io/manage → API → CORS) and
`SANITY_API_READ_TOKEN` (Viewer) is set for preview/click-to-edit.

```bash
npm run dev
```

- Site: <http://localhost:3000> — renders 1:1 immediately (from content defaults).
- Studio (editing UI): <http://localhost:3000/studio>

## Seed Sanity with the exact copy (one time)

So the CMS matches the live site, push all content into Sanity:

1. Create an **Editor** token at sanity.io/manage → API → Tokens, and add it to
   `.env.local` as `SANITY_API_WRITE_TOKEN=...`
2. Run:
   ```bash
   npm run seed
   ```
   This creates/replaces all 11 page documents from `lib/content/*`.
3. Open `/studio` → each page now shows its copy → edit and Publish.
4. Click-to-edit: open the **Presentation** tool, click any text on the page,
   type, Publish — live in seconds.

## Pages

| Route | Document | Source |
|---|---|---|
| `/` | `home` | index.html |
| `/about` | `about` | about.html |
| `/programs` | `programsIndex` | programs/index.html |
| `/programs/race-team` | `raceTeam` | programs/race-team.html |
| `/programs/camps-coaching` | `campsCoaching` | programs/camps-coaching.html |
| `/programs/adult-sailing` | `adultSailing` | programs/adult-sailing.html |
| `/youth-regattas` | `youthRegattas` | youth-regattas.html |
| `/calendar` | `calendar` | calendar/index.html |
| `/calendar/sample-story` | `sampleStory` | calendar/sample-story.html |
| `/giving` | `giving` | giving.html |
| `/contact` | `contact` | contact.html |

## Project map

| Path | Purpose |
|---|---|
| `app/(site)/**` | Public site routes (share the nav/footer chrome) |
| `app/studio/**` | Embedded Sanity Studio (no site chrome) |
| `app/globals.css` | Locked design system (verbatim from prototype) |
| `components/chrome/*` | Canonical TopNav / Footer / MobileDrawer / StickyCTA |
| `components/SiteScripts.tsx` | Ported prototype JS (drawer, scrollspy, coach photos) |
| `components/Rich.tsx` | Inline `**bold**` renderer for prose |
| `lib/content/*` | Per-page content (renders + seeds) |
| `sanity/schemaTypes/*` | Per-page editable field schemas |
| `scripts/seed.ts` | One-command content seeder |

## Known simplifications (safe to upgrade later)

- Prose bold uses a `**bold**` convention in plain-text fields (rendered as
  `<b>`), rather than full Portable Text rich text.
- Nav/footer are canonical components (edited in code), not yet in Sanity.
- Media is static under `public/assets`; not yet Sanity-managed image fields.
