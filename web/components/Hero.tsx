import { stegaClean } from "next-sanity";
import { toPlayableVideoUrl } from "@/lib/video";

export type HeroData = {
  eyebrow?: string | null;
  headlineLines?: string[] | null;
  modifier?: string | null;
  subhead?: string | null;
  subheadEmphasis?: string | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
  posterUrl?: string | null;
  videoUrl?: string | null;
};

/**
 * Renders the homepage hero from CMS content. The markup + classNames are a
 * 1:1 port of prototype/index.html; the design lives entirely in globals.css.
 * Strings are rendered as-is so Sanity's stega overlays make them click-to-edit
 * in the Studio's Presentation view. URLs are stega-cleaned before use.
 */
export function Hero({ hero }: { hero: HeroData | null | undefined }) {
  if (!hero) return null;

  const videoUrl = toPlayableVideoUrl(
    hero.videoUrl ? stegaClean(hero.videoUrl) : null,
  );
  const posterUrl = hero.posterUrl ? stegaClean(hero.posterUrl) : undefined;
  const ctaHref = hero.ctaHref ? stegaClean(hero.ctaHref) : "/contact";

  return (
    <section className="hero" aria-labelledby="hero-h">
      {videoUrl && (
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterUrl}
          aria-hidden="true"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
      <div className="hero-inner">
        <div>
          {hero.eyebrow && <p className="hero-eyebrow">{hero.eyebrow}</p>}
          <h1 className="hero-headline" id="hero-h">
            {(hero.headlineLines ?? []).map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </h1>
          {hero.modifier && <p className="hero-modifier">{hero.modifier}</p>}
          {(hero.subhead || hero.subheadEmphasis) && (
            <p className="hero-subhead">
              {hero.subhead}
              {hero.subheadEmphasis && <em>{hero.subheadEmphasis}</em>}
            </p>
          )}
        </div>
        {hero.ctaLabel && (
          <div className="hero-foot">
            <a href={ctaHref} className="hero-cta">
              {hero.ctaLabel} →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
