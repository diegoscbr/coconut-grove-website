import { sanityFetch } from "@/sanity/lib/live";
import { RACE_TEAM_QUERY } from "@/sanity/lib/queries";
import { RACE_TEAM_CONTENT, type RaceTeamContent } from "@/lib/content/raceTeam";
import { Rich } from "@/components/Rich";

export const dynamic = "force-dynamic";

export default async function RaceTeamPage() {
  const { data } = await sanityFetch({ query: RACE_TEAM_QUERY });
  const c = ((data as Partial<RaceTeamContent> | null) ?? {}) as RaceTeamContent;
  const {
    hero = RACE_TEAM_CONTENT.hero,
    subnav = RACE_TEAM_CONTENT.subnav,
    intro = RACE_TEAM_CONTENT.intro,
    bay = RACE_TEAM_CONTENT.bay,
    methodology = RACE_TEAM_CONTENT.methodology,
    pathway = RACE_TEAM_CONTENT.pathway,
    coaches = RACE_TEAM_CONTENT.coaches,
    stats = RACE_TEAM_CONTENT.stats,
    regattas = RACE_TEAM_CONTENT.regattas,
    faq = RACE_TEAM_CONTENT.faq,
    manifesto = RACE_TEAM_CONTENT.manifesto,
    inquiry = RACE_TEAM_CONTENT.inquiry,
  } = c;

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

          <div className="pathway-selector" data-pathway>
            <div className="pathway-list" role="tablist" aria-label="Pathway stages">
              {pathway.rungs.map((r, i) => {
                const active = r.rung === pathway.activeRung;
                return (
                  <button
                    key={i}
                    type="button"
                    className={active ? "pathway-item active" : "pathway-item"}
                    data-rung={r.rung}
                    role="tab"
                    id={`rung-${r.rung}`}
                    aria-controls="pathway-detail"
                    aria-selected={active ? "true" : "false"}
                  >
                    <span className="name">{r.name}</span>
                    <span className="age">{r.age}</span>
                  </button>
                );
              })}
            </div>
            <div
              className="pathway-detail"
              role="tabpanel"
              id="pathway-detail"
              aria-labelledby={`rung-${pathway.activeRung}`}
            >
              <div className="pathway-detail-img" data-pathway-img></div>
              <h3 className="pathway-detail-name" data-pathway-name>
                {pathway.detail.name}
              </h3>
              <p className="pathway-detail-age" data-pathway-age>
                {pathway.detail.age}
              </p>
              <p className="pathway-detail-desc" data-pathway-desc>
                {pathway.detail.desc}
              </p>
              <div className="pathway-meta" data-pathway-meta>
                {pathway.detail.meta.map((m, i) => (
                  <span key={i}>{m}</span>
                ))}
              </div>
            </div>
          </div>
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
              <a href={coaches.rosterHref} className="btn-ghost">
                {coaches.rosterLabel}
              </a>
            </div>
            <div className="split-2col-media race accent-bracket"></div>
          </div>

          <div className="coach-grid">
            {coaches.people.map((p, i) => (
              <div key={i} className="coach">
                <div className="coach-portrait"></div>
                <p className="coach-name">{p.name}</p>
                <p className="coach-role">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="panel" id="stats">
        <div className="container">
          <p className="section-eyebrow">{stats.eyebrow}</p>
          <h2 className="section-headline">{stats.headline}</h2>
          <p className="section-sub">{stats.sub}</p>

          <div className="stats-grid">
            {stats.tiles.map((t, i) => (
              <div key={i} className={t.tbd ? "stat-tile tbd" : "stat-tile"}>
                <p className="num">
                  {t.num}
                  {t.small ? (
                    <>
                      {" "}
                      <small>{t.small}</small>
                    </>
                  ) : null}
                </p>
                <p className="label">{t.label}</p>
              </div>
            ))}
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

      {/* Inquiry */}
      <section className="panel charcoal" id="inquire">
        <div className="container">
          <p className="section-eyebrow">{inquiry.eyebrow}</p>
          <h2 className="section-headline">{inquiry.headline}</h2>
          <p className="section-sub">{inquiry.sub}</p>

          <div className="inquiry-block">
            <div className="inquiry-form-side">
              <p className="inquiry-form-eyebrow">{inquiry.formEyebrow}</p>
              <h3 className="inquiry-form-headline">
                {inquiry.formHeadlinePre}
                <em>{inquiry.formHeadlineEm}</em>
              </h3>
              <p className="inquiry-helper">{inquiry.formHelper}</p>

              <form className="inquiry-form" data-form-inquiry noValidate>
                <input type="text" name="parent-name" placeholder={inquiry.parentNamePlaceholder} required />
                <input type="email" name="email" placeholder={inquiry.emailPlaceholder} required />
                <input type="text" name="sailor-name" placeholder={inquiry.sailorNamePlaceholder} />
                <input type="text" name="sailor-age" placeholder={inquiry.sailorAgePlaceholder} />
                <select name="experience" className="full">
                  <option value="">{inquiry.experienceLabel}</option>
                  {inquiry.experienceOptions.map((o, i) => (
                    <option key={i}>{o}</option>
                  ))}
                </select>
                <select name="rung" className="full">
                  <option value="">{inquiry.rungLabel}</option>
                  {inquiry.rungOptions.map((o, i) => (
                    <option key={i}>{o}</option>
                  ))}
                </select>
                <textarea name="notes" placeholder={inquiry.notesPlaceholder} className="full"></textarea>
                <button type="submit">{inquiry.submitLabel}</button>
              </form>
            </div>

            <div className="inquiry-info-side">
              <p className="inquiry-info-eyebrow">{inquiry.infoEyebrow}</p>

              <div className="inquiry-info-block">
                <p className="lbl">{inquiry.director.lbl}</p>
                <p className="val">
                  {inquiry.director.name}
                  <small>{inquiry.director.small}</small>
                </p>
              </div>

              <div className="inquiry-info-block">
                <p className="lbl">{inquiry.phone.lbl}</p>
                <p className="val">
                  <a href={inquiry.phone.href}>{inquiry.phone.number}</a>
                </p>
              </div>

              <div className="inquiry-info-block">
                <p className="lbl">{inquiry.email.lbl}</p>
                <p className="val">
                  <a href={inquiry.email.href}>{inquiry.email.address}</a>
                </p>
              </div>

              <div className="inquiry-info-block">
                <p className="lbl">{inquiry.visit.lbl}</p>
                <p className="val">
                  {inquiry.visit.line1}
                  <small>{inquiry.visit.line2}</small>
                </p>
              </div>

              <p className="inquiry-info-foot">
                {inquiry.footPre}
                <a href={inquiry.footLinkHref}>{inquiry.footLinkText}</a>
                {inquiry.footPost}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
