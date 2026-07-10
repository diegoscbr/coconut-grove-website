# Migration Handoff — status, issues, and what's left

**Read this first in a new session.** Companion to `web/SETUP.md` (how to run/seed).

- **Branch:** `feat/nextjs-sanity-migration` (off `dev`)
- **Draft PR:** #5 → `dev` — https://github.com/diegoscbr/coconut-grove-website/pull/5
- **Sanity project:** `ijencvxh`, dataset `production`
- **What shipped:** the full static site migrated 1:1 into Next.js 16 (App Router)
  + Sanity, on Vercel. 11 pages + embedded Studio at `/studio`. `npm run build`
  is green; all routes return 200 in dev.

## Architecture (recap)

- Design is locked in `app/globals.css` (verbatim from `prototype/styles/*`).
- Each page is a Sanity singleton. Pages render from Sanity **and fall back to
  `lib/content/*.ts`** (typed content constants), so the site is a 1:1 replica
  with zero setup. The same constants seed Sanity via `npm run seed`.
- Canonical chrome (nav/footer/drawer/sticky-CTA) → components in the `(site)`
  route group. Prototype `site.js` → `components/SiteScripts.tsx`.
- Media is CSS/asset-driven under `public/assets` (not Sanity-managed yet).
- Inline bold uses a `**bold**` convention rendered by `components/Rich.tsx`.

---

## Issues — status

### ✅ FIXED (committed on this branch)
1. **Presentation preview spun forever** — root cause `Error: Unauthorized -
   Session not found`: the draft-mode *enable* route validated the preview secret
   through the CDN, which doesn't have a just-created secret.
   Fix: `app/api/draft-mode/enable/route.ts` now uses `useCdn: false`.
2. **Hero video / bad URLs** — a Google Drive **share** link isn't a playable
   video. Fix: `lib/video.ts` (`toPlayableVideoUrl`) converts Drive share links
   to a direct-stream URL and skips `<video>` for non-playable URLs (stops
   media-error spam). Wired into `components/Hero.tsx`.

### ⚠️ NEEDS A USER ACTION (not code)
3. **Restart the dev server** so the enable-route fix loads, then re-open the
   Studio Presentation tab. (`cd web && kill <pid>; npm run dev`)
4. **Hero video content** — don't use the Google Drive link. Options, best last:
   set the field to `/assets/hero.mp4` (works today) → upload MP4 to Sanity (needs
   a file field, see should-do #7) → real host (Vimeo/Mux/Cloudflare Stream).
5. **Seed + publish** so production serves real CMS content, not code fallbacks:
   add an Editor token as `SANITY_API_WRITE_TOKEN` in `.env.local`, run
   `npm run seed`, then Publish each page in the Studio.

### ℹ️ BENIGN DEV NOISE (no action; gone in production)
6. **`TypeError: Error in input stream` flood + red "N Issues" badge** — it's
   `<SanityLive>` reconnecting under Turbopack dev (`No activity within 45000ms …
   Reconnecting`). Live updates actually work (`<SanityLive> action called …
   updated tags` in the dev log). Production uses tag revalidation, not the
   long-lived dev stream, so this disappears.

---

## MUST-DO before production

1. **Vercel project** with **Root Directory = `web`** (framework auto-detects Next.js).
2. **Env vars in Vercel** (Production + Preview): `NEXT_PUBLIC_SANITY_PROJECT_ID`,
   `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`,
   `SANITY_API_READ_TOKEN`, `NEXT_PUBLIC_SITE_URL=https://<prod-domain>`.
3. **CORS**: add the production domain to Sanity → API → CORS **with credentials**
   (same as localhost). Presentation's preview origin reads `NEXT_PUBLIC_SITE_URL`.
4. **Seed + publish content** (issue #5 above).
5. **Fix the hero video** (issue #4 above) — don't ship the Drive link.

## SHOULD-DO (quality)

6. **Live updates in prod**: add Sanity's "Invalidate Sync Tags" webhook so
   published edits appear without a redeploy (next-sanity v13 tag revalidation).
7. **Per-page SEO metadata**: only a generic site-wide title/description exists
   today. Add `generateMetadata` per route, sourced from each page's Sanity content.
8. **Proper hero video field**: replace the URL string with a Sanity file upload
   (or a video-host embed) so editors upload directly.

## NICE-TO-HAVE (flagged in the PR)

- Upgrade `**bold**` prose to real Portable Text rich text.
- Move nav/footer copy into a Sanity `siteSettings` singleton.
- Migrate `public/assets` media to Sanity image/file assets.
- Remove create-next-app leftovers (`app/page.module.css`, default SVGs in `public/`).
- Human pixel-diff sign-off of every page vs the prototype (the one remaining
  acceptance check).

## Gotchas for future-me

- No Sanity typegen → `sanityFetch` data is typed `{}`; pages cast it and fall
  back to content defaults. A **partially-filled** Sanity doc can leave nested
  arrays undefined — top-level destructuring defaults cover missing sections, but
  if a page ever crashes on `.map`, deep-merge the fetched data over the default.
- SSH push isn't set up; use `gh auth setup-git` + push to the HTTPS URL.
- Commits omit the AI co-author trailer (user's global attribution-off setting).
