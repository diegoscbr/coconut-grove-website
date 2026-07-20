import type { Metadata } from "next";
import Link from "next/link";
import { RACE_TEAM_CONTENT } from "@/lib/content/raceTeam";
import { Rich } from "@/components/Rich";
import { PathwaySelector } from "@/components/PathwaySelector";

export const metadata: Metadata = {
  title: "Racing Teams",
  description:
    "Competitive youth race teams coached out of the Instructional Center on Biscayne Bay.",
};

export default function RaceTeamPage() {
  const {
    hero,
    subnav,
    intro,
    bay,
    methodology,
    pathway,
    coaches,
    regattas,
    faq,
    manifesto,
    inquiry,
  } = RACE_TEAM_CONTENT;

  return (
    <>
      <section className="hero-compact has-hero-photo hero-race-team">
        <div className="container">
          <p className="breadcrumb">
            <a href={hero.breadcrumbHome.href}>{hero.breadcrumbHome.label}</a>{" "}
            <span className="sep">→</span>{" "}
            <a href={hero.breadcrumbPrograms.href}>{hero.breadcrumbPrograms.label}</a>{" "}
            <span className="sep">→</span> {hero.breadcrumbCurrent}
          </p>
          <h1>{hero.h1}</h1>
          <p className="subhead">
            {hero.subheadPre}
            <em>{hero.subheadEmphasis}</em>
            {hero.subheadPost}
          </p>
          <span className="location-chip">{hero.locationChip}</span>
        </div>
      </section>

      {/* Page subnav */}
      <nav className="page-subnav" aria-label="Racing Teams sections" data-scrollspy>
        <div className="page-subnav-inner">
          {subnav.map((item, i) => (
            <a key={i} href={item.href} className={i === 0 ? "active" : undefined}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Intro */}
      <section className="panel" id="team">
        <div className="container">
          <p className="section-eyebrow">{intro.eyebrow}</p>
          <h2 className="section-headline">{intro.headline}</h2>
          <p className="intro-prose">
            <Rich text={intro.prose1} />
          </p>
          <p className="intro-prose">
            <Rich text={intro.prose2} />
          </p>
        </div>
      </section>

      {/* The Bay (Playground equivalent) */}
      <section className="panel charcoal">
        <div className="container">
          <div className="split-2col reverse">
            <div className="split-2col-body">
              <p className="section-eyebrow">{bay.eyebrow}</p>
              <h2 className="section-headline">{bay.headline}</h2>
              <p className="intro-prose">
                <Rich text={bay.prose1} />
              </p>
              <p className="intro-prose">
                {bay.prose2Pre}
                <em>{bay.prose2Em}</em>
                {bay.prose2Post}
              </p>
            </div>
            <div className="split-2col-media aerial"></div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="panel" id="methodology">
        <div className="container">
          <div className="split-2col">
            <div className="split-2col-media coaches accent-bracket"></div>
            <div className="split-2col-body">
              <p className="section-eyebrow">{methodology.eyebrow}</p>
              <h2 className="section-headline">{methodology.headline}</h2>
              <p className="intro-prose">
                <Rich text={methodology.intro} />
              </p>
              <ol className="method-list">
                {methodology.methods.map((m, i) => (
                  <li key={i}>
                    <Rich text={m.text} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Pathway */}
      <section className="panel grey" id="pathway">
        <div className="container">
          <p className="section-eyebrow">{pathway.eyebrow}</p>
          <h2 className="section-headline">{pathway.headline}</h2>
          <p className="section-sub">{pathway.sub}</p>

          <PathwaySelector rungs={pathway.rungs} initialRung={pathway.activeRung} />
        </div>
      </section>

      {/* Coaches */}
      <section className="panel charcoal" id="coaches">
        <div className="container">
          <div className="split-2col">
            <div className="split-2col-body">
              <p className="section-eyebrow">{coaches.eyebrow}</p>
              <h2 className="section-headline">
                {coaches.headlinePre}
                <em>{coaches.headlineEm}</em>
                {coaches.headlinePost}
              </h2>
              <p className="intro-prose">
                <Rich text={coaches.prose1} />
              </p>
              <p className="intro-prose">
                <Rich text={coaches.prose2} />
              </p>
              <Link href={coaches.rosterHref} className="btn-ghost">
                {coaches.rosterLabel}
              </Link>
            </div>
            <div className="split-2col-media race accent-bracket"></div>
          </div>
        </div>
      </section>

      {/* Selected regattas */}
      <section className="panel grey" id="regattas">
        <div className="container">
          <p className="section-eyebrow">{regattas.eyebrow}</p>
          <h2 className="section-headline">{regattas.headline}</h2>
          <p className="section-sub">{regattas.sub}</p>

          <div className="regatta-grid">
            {regattas.cards.map((r, i) => (
              <article key={i} className="regatta-card">
                <p className="regatta-date">
                  {r.datePre}
                  {r.dateTbd ? <span className="tbd">{r.dateTbd}</span> : null}
                </p>
                <h3 className="regatta-name">{r.name}</h3>
                <p className="regatta-meta">{r.meta}</p>
                {r.verified ? <p className="verified">{r.verified}</p> : null}
              </article>
            ))}
          </div>

          <p style={{ marginTop: 32 }}>
            <a href={regattas.ctaHref} className="btn-primary">
              {regattas.ctaLabel}
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="panel charcoal" id="faq">
        <div className="container">
          <p className="section-eyebrow">{faq.eyebrow}</p>
          <h2 className="section-headline">{faq.headline}</h2>

          <div className="faq-accordion">
            {faq.items.map((item, i) => (
              <details key={i} className="faq-item">
                <summary>{item.q}</summary>
                <div className="faq-body">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="manifesto" aria-label={manifesto.ariaLabel}>
        <div className="container">
          {manifesto.lines.map((line, i) => (
            <p key={i} className={line.accent ? "manifesto-line accent" : "manifesto-line"}>
              {line.text}
            </p>
          ))}
        </div>
      </section>

      {/* Inquiry — routes to the contact page */}
      <section className="panel charcoal" id="inquire">
        <div className="container">
          <p className="section-eyebrow">{inquiry.eyebrow}</p>
          <h2 className="section-headline">{inquiry.headline}</h2>
          <p className="section-sub">{inquiry.sub}</p>
          <p style={{ marginTop: 8 }}>
            <Link href={inquiry.ctaHref} className="btn-primary">
              {inquiry.ctaLabel}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
