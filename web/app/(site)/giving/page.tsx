import { sanityFetch } from "@/sanity/lib/live";
import { GIVING_QUERY } from "@/sanity/lib/queries";
import { GIVING_CONTENT, type GivingContent } from "@/lib/content/giving";
import { Rich } from "@/components/Rich";

export const dynamic = "force-dynamic";

export default async function GivingPage() {
  const { data } = await sanityFetch({ query: GIVING_QUERY });
  const c = ((data as Partial<GivingContent> | null) ?? {}) as GivingContent;
  const {
    hero = GIVING_CONTENT.hero,
    whyGive = GIVING_CONTENT.whyGive,
    comingSoon = GIVING_CONTENT.comingSoon,
  } = c;

  return (
    <>
      <section className="hero-compact">
        <div className="container">
          <p className="breadcrumb">
            <a href={hero.breadcrumbHomeHref}>{hero.breadcrumbHomeLabel}</a>{" "}
            <span className="sep">{hero.breadcrumbSep}</span> {hero.breadcrumbCurrent}
          </p>
          <h1>{hero.headline}</h1>
          <p className="subhead">{hero.subhead}</p>
          <span className="location-chip">{hero.locationChip}</span>
        </div>
      </section>

      <section className="panel">
        <div className="container">
          <p className="section-eyebrow">{whyGive.eyebrow}</p>
          <h2 className="section-headline">{whyGive.headline}</h2>
          <p className="intro-prose">
            <Rich text={whyGive.prose1} />
          </p>
          <p className="intro-prose">
            <Rich text={whyGive.prose2} />
          </p>
        </div>
      </section>

      <section className="phase-placeholder">
        <div className="container">
          <span className="placeholder-tag">{comingSoon.tag}</span>
          <h3 className="placeholder-h">{comingSoon.headline}</h3>
          <p className="placeholder-sub">{comingSoon.sub}</p>
          <p style={{ marginTop: 8 }}>
            <a href={comingSoon.ctaHref} className="btn-primary">
              {comingSoon.ctaLabel}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
