import type { Metadata } from "next";
import { ABOUT_CONTENT } from "@/lib/content/about";
import { Rich } from "@/components/Rich";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the coaches, heritage, and mission of the Coconut Grove Sailing Club Instructional Center on Biscayne Bay.",
};

export default function AboutPage() {
  const {
    hero,
    subnav,
    coaches,
    heritage,
    mission,
    inquiry,
  } = ABOUT_CONTENT;

  return (
    <>
      <section className="hero-compact has-hero-photo hero-about">
        <div className="container">
          <p className="breadcrumb">
            <a href={hero.breadcrumbHomeHref}>{hero.breadcrumbHomeLabel}</a>{" "}
            <span className="sep">{hero.breadcrumbSep}</span> {hero.breadcrumbCurrent}
          </p>
          <h1>{hero.headline}</h1>
          <p className="subhead">
            {hero.subheadPre}
            <em>{hero.subheadEm}</em>
            {hero.subheadPost}
          </p>
          <span className="location-chip">{hero.locationChip}</span>
        </div>
      </section>

      <nav className="page-subnav" aria-label="About sections" data-scrollspy="">
        <div className="page-subnav-inner">
          {subnav.items.map((item, i) => (
            <a key={i} href={item.href} className={item.active ? "active" : undefined}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Coaches */}
      <section className="panel" id="coaches">
        <div className="container">
          <p className="section-eyebrow">{coaches.eyebrow}</p>

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

      {/* Heritage */}
      <section className="panel" id="heritage">
        <div className="container">
          <div className="split-2col fill-media">
            <div className="split-2col-media aerial"></div>
            <div className="split-2col-body">
              <p className="section-eyebrow">{heritage.eyebrow}</p>
              <h2 className="section-headline">{heritage.headline}</h2>
              <p className="intro-prose">
                <Rich text={heritage.prose1} />
              </p>
              <p className="intro-prose">
                <Rich text={heritage.prose2} />
              </p>
              <p className="intro-prose">
                <Rich text={heritage.prose3} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The mission */}
      <section className="panel charcoal" id="mission">
        <div className="container">
          <div className="split-2col reverse fill-media">
            <div className="split-2col-body">
              <p className="section-eyebrow">{mission.eyebrow}</p>
              <h2 className="section-headline">{mission.headline}</h2>
              <p className="intro-prose">
                <Rich text={mission.prose1} />
              </p>
              <p className="intro-prose">
                <Rich text={mission.prose2} />
              </p>
              <p className="intro-prose">
                <Rich text={mission.prose3} />
              </p>
            </div>
            <div className="split-2col-media race"></div>
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="panel grey">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow" style={{ display: "block", textAlign: "center" }}>
            {inquiry.eyebrow}
          </p>
          <h2 className="section-headline" style={{ maxWidth: "none" }}>
            {inquiry.headline}
          </h2>
          <p className="section-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>
            {inquiry.sub}
          </p>
          <p style={{ marginTop: 8 }}>
            <a href={inquiry.ctaHref} className="btn-primary">
              {inquiry.ctaLabel}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
