# Handoff — status and what's left

**Read this first in a new session.** Companion to `web/SETUP.md` (run/edit/deploy).

- **Branch:** `feat/nextjs-sanity-migration` (off `dev`) — despite the name, the
  Sanity layer has since been **removed** (2026-07-19): the site is now a plain
  Next.js app with all content in `lib/content/*.ts`. No CMS, no env vars.
- **What shipped:** the full static site migrated 1:1 into Next.js 16
  (App Router), 11 pages, all statically prerendered. `npm run build` is green.

## Architecture (recap)

- Design is locked in `app/globals.css` (verbatim from `prototype/styles/*`).
- Each page renders directly from its typed content constant in
  `lib/content/*.ts` — that file is the single source of truth for copy.
- Canonical chrome (nav/footer/drawer/sticky-CTA) → components in the `(site)`
  route group. Prototype `site.js` → `components/SiteScripts.tsx`.
- Media is CSS/asset-driven under `public/assets`.
- Inline bold uses a `**bold**` convention rendered by `components/Rich.tsx`.
- `lib/video.ts` (`toPlayableVideoUrl`) guards the hero `<video>` against
  non-playable URLs (e.g. YouTube watch pages); Google Drive share links are
  converted to direct-stream URLs but Drive is unreliable — don't ship it.

## MUST-DO before production

1. **Vercel project** with **Root Directory = `web`** (framework auto-detects
   Next.js). No environment variables are required.
2. **Hero video content** — `hero.videoUrl` in `lib/content/home.ts` must be a
   real playable source: `/assets/hero.mp4` in the repo, or a proper video host
   (Vimeo/Mux/Cloudflare Stream). Not a Google Drive share link.

## SHOULD-DO (quality)

3. **Per-page SEO metadata**: only a generic site-wide title/description exists
   today (`app/layout.tsx`). Add a `metadata` export per route, sourced from
   each page's content file.

## NICE-TO-HAVE (flagged in the PR)

- Human pixel-diff sign-off of every page vs the prototype (the one remaining
  acceptance check).
- Remove remaining create-next-app leftovers (default SVGs in `public/`).

## Gotchas for future-me

- SSH push isn't set up; use `gh auth setup-git` + push to the HTTPS URL.
- Commits omit the AI co-author trailer (user's global attribution-off setting).
- A stale `.env.local` with old Sanity credentials may still exist locally; it
  is unused and gitignored. The Sanity read token in it can be revoked at
  sanity.io/manage (project `ijencvxh`).
