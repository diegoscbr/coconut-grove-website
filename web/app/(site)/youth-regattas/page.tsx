import { YOUTH_REGATTAS_CONTENT } from "@/lib/content/youthRegattas";

export default function YouthRegattasPage() {
  const {
    hero,
    subnav,
    sponsors,
    logistics,
    results,
  } = YOUTH_REGATTAS_CONTENT;

  return (
    <>
      <section className="hero-compact">
        <div className="container">
          <p className="breadcrumb">
            <a href="/">{hero.breadcrumbHome}</a> <span className="sep">→</span> {hero.breadcrumbCurrent}
          </p>
          <h1>{hero.h1}</h1>
          <p className="subhead">
            {hero.subhead}
            <em>{hero.subheadEmphasis}</em>
          </p>
          <span className="location-chip">{hero.locationChip}</span>
        </div>
      </section>

      <nav className="page-subnav" aria-label="Youth Regattas sections" data-scrollspy>
        <div className="page-subnav-inner">
          {subnav.map((item, i) => (
            <a key={i} href={item.href} className={i === 0 ? "active" : undefined}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="panel" id="sponsors">
        <div className="container">
          <p className="section-eyebrow">{sponsors.eyebrow}</p>
          <h2 className="section-headline">{sponsors.headline}</h2>
          <p className="section-sub">{sponsors.sub}</p>
          <span className="tbd">{sponsors.tbd}</span>
        </div>
      </section>

      <section className="panel grey" id="logistics">
        <div className="container">
          <p className="section-eyebrow">{logistics.eyebrow}</p>
          <h2 className="section-headline">{logistics.headline}</h2>
          <p className="section-sub">{logistics.sub}</p>
          <span className="tbd">{logistics.tbd}</span>
        </div>
      </section>

      <section className="panel" id="results">
        <div className="container">
          <p className="section-eyebrow">{results.eyebrow}</p>
          <h2 className="section-headline">{results.headline}</h2>
          <p className="section-sub">{results.sub}</p>
          <span className="tbd">{results.tbd}</span>
        </div>
      </section>
    </>
  );
}
