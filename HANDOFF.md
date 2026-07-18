# Handoff — status and what's left

**Read this first in a new session.** Companion to `SETUP.md` (run/edit/deploy).

- **State (2026-07-19):** plain Next.js 16 (App Router) app at the **repo
  root** — no CMS, no env vars, all content in `lib/content/*.ts`. The Sanity
  layer was removed and the old static `prototype/` site deleted; the Next.js
  app was hoisted from `web/` to the root so `npm run build` works from the
  repo root.
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

1. **Vercel project Root Directory must be the repo root** (clear any old
   `web`/`prototype` setting; framework auto-detects Next.js). The `.vercel/`
   link dir at the root still points at the original "prototype" Vercel project
   so its domains carry over. No environment variables are required.
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
