import type { Metadata } from "next";
import { PROGRAMS_INDEX_CONTENT } from "@/lib/content/programsIndex";
import { Rich } from "@/components/Rich";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Youth sailing, racing teams, and adult programs at the Instructional Center on Biscayne Bay.",
};

export default function ProgramsPage() {
  const {
    hero,
    summerCallout,
    cards,
    fit,
    coaches,
    inquiry,
  } = PROGRAMS_INDEX_CONTENT;

  return (
    <>
      <section className="hero-compact has-hero-photo hero-programs">
        <div className="container">
          <p className="breadcrumb">
            <a href={hero.breadcrumbHref}>{hero.breadcrumbLabel}</a>{" "}
            <span className="sep">→</span> {hero.breadcrumbCurrent}
          </p>
          <h1>{hero.headline}</h1>
          <p className="subhead">{hero.subhead}</p>
          <span className="location-chip">{hero.locationChip}</span>
        </div>
      </section>

      {/* Program cards */}
      <section className="panel">
        <div className="container">
          <a href={summerCallout.ctaHref} className="summer-callout">
            <span className="summer-callout-eyebrow">{summerCallout.eyebrow}</span>
            <span className="summer-callout-body">
              <b>{summerCallout.message}</b> {summerCallout.detail}
            </span>
            <span className="summer-callout-cta">{summerCallout.ctaLabel}</span>
          </a>
          <div className="program-cards-grid">
            {cards.items.map((card, i) => (
              <a key={i} href={card.href} className="program-card">
                <div className={`program-card-media ${card.mediaClass}`}></div>
                <div className="program-card-body">
                  <p className="program-card-eyebrow">{card.eyebrow}</p>
                  <h3 className="program-card-title">{card.title}</h3>
                  <p className="program-card-line">{card.line}</p>
                  <span className="program-card-cta">Explore →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Where do you fit? */}
      <section className="panel charcoal">
        <div className="container">
          <div className="split-2col reverse">
            <div className="split-2col-body">
              <p className="section-eyebrow">{fit.eyebrow}</p>
              <h2 className="section-headline">{fit.headline}</h2>
              <p className="intro-prose">
                <Rich text={fit.prose1} />
              </p>
              <p className="intro-prose">
                <Rich text={fit.prose2} />
              </p>
              <p style={{ marginTop: 24 }}>
                <a href={fit.ctaHref} className="btn-light">
                  {fit.ctaLabel}
                </a>
              </p>
            </div>
            <div className="split-2col-media race"></div>
          </div>
        </div>
      </section>

      {/* Coaches preview */}
      <section className="panel">
        <div className="container">
          <p className="section-eyebrow">{coaches.eyebrow}</p>
          <h2 className="section-headline">{coaches.headline}</h2>
          <p className="section-sub">
            {coaches.subPre}
            <em>{coaches.subEm}</em>
          </p>

          <div className="coach-grid">
            {coaches.people.map((p, i) => (
              <div key={i} className="coach">
                <div className="coach-portrait"></div>
                <p className="coach-name">{p.name}</p>
                <p className="coach-role">{p.role}</p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 32 }}>
            <a href={coaches.ctaHref} className="btn-primary">
              {coaches.ctaLabel}
            </a>
          </p>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="panel charcoal">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow" style={{ display: "block", textAlign: "center" }}>
            {inquiry.eyebrow}
          </p>
          <h2 className="section-headline" style={{ maxWidth: "none" }}>
            {inquiry.headline}
          </h2>
          <p
            className="section-sub"
            style={{ marginLeft: "auto", marginRight: "auto", color: "rgba(255,255,255,0.85)" }}
          >
            {inquiry.sub}
          </p>
          <p style={{ marginTop: 8 }}>
            <a href={inquiry.ctaHref} className="btn-light">
              {inquiry.ctaLabel}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
