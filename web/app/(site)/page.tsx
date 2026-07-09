import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/sanity/lib/queries";
import { HOME_CONTENT, type HomeContent } from "@/lib/content/home";
import { Hero } from "@/components/Hero";
import { Rich } from "@/components/Rich";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { data } = await sanityFetch({ query: HOME_QUERY });
  const c = ((data as Partial<HomeContent> | null) ?? {}) as HomeContent;
  const {
    hero = HOME_CONTENT.hero,
    programs = HOME_CONTENT.programs,
    pathway = HOME_CONTENT.pathway,
    about = HOME_CONTENT.about,
    leadership = HOME_CONTENT.leadership,
    dock = HOME_CONTENT.dock,
    finalCta = HOME_CONTENT.finalCta,
  } = c;

  return (
    <>
      <Hero hero={hero} />

      {/* Programs · 3-up */}
      <section className="panel">
        <div className="container">
          <p className="section-eyebrow">{programs.eyebrow}</p>
          <h2 className="section-headline">{programs.headline}</h2>
          <p className="section-sub">{programs.sub}</p>
          <div className="program-cards-grid">
            {programs.cards.map((card, i) => (
              <a key={i} href={card.href} className="program-card">
                <div className={`program-card-media ${card.mediaClass}`}></div>
                <div className="program-card-body">
                  <h3 className="program-card-title">{card.title}</h3>
                  <p className="program-card-line">{card.line}</p>
                  <span className="program-card-cta">Explore →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pathway preview */}
      <section className="panel grey">
        <div className="container">
          <div className="split-2col reverse">
            <div className="split-2col-body">
              <span className="section-tag">{pathway.tag}</span>
              <p className="section-eyebrow">{pathway.eyebrow}</p>
              <h2 className="section-headline">{pathway.headline}</h2>
              <p className="intro-prose">
                <Rich text={pathway.prose1} />
              </p>
              <p className="intro-prose">
                <Rich text={pathway.prose2} />
              </p>
              <p style={{ marginTop: 24 }}>
                <a href={pathway.ctaHref} className="btn-primary">
                  {pathway.ctaLabel}
                </a>
              </p>
              <p className="pathway-offramp">
                {pathway.offRampPre}
                <a href={pathway.offRampHref}>{pathway.offRampLinkText}</a>
              </p>
            </div>
            <div className="split-2col-media race accent-bracket"></div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="panel charcoal">
        <div className="container">
          <div className="split-2col">
            <div className="split-2col-media aerial accent-bracket"></div>
            <div className="split-2col-body">
              <p className="section-eyebrow">{about.eyebrow}</p>
              <h2 className="section-headline">{about.headline}</h2>
              <p className="intro-prose">
                <Rich text={about.prose1} />
              </p>
              <p className="intro-prose">
                <Rich text={about.prose2} />
              </p>
              <p style={{ marginTop: 24 }}>
                <a href={about.ctaHref} className="btn-light">
                  {about.ctaLabel}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="panel">
        <div className="container">
          <p className="section-eyebrow">{leadership.eyebrow}</p>
          <h2 className="section-headline">{leadership.headline}</h2>
          <p className="section-sub">{leadership.sub}</p>
          <div className="coach-grid leadership">
            {leadership.people.map((p, i) => (
              <div key={i} className="coach">
                <div className="coach-portrait"></div>
                <p className="coach-name">{p.name}</p>
                <p className="coach-role">{p.role}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 32 }}>
            <a href={leadership.ctaHref} className="btn-primary">
              {leadership.ctaLabel}
            </a>
          </p>
        </div>
      </section>

      {/* What's on the dock */}
      <section className="panel grey">
        <div className="container">
          <p className="section-eyebrow">{dock.eyebrow}</p>
          <h2 className="section-headline">{dock.headline}</h2>
          <p className="section-sub">{dock.sub}</p>

          {[dock.horizon, dock.recent].map((bucket, bi) => (
            <div key={bi} className="dock-bucket">
              <h3 className="dock-bucket-label">
                {bucket.label} <span className="count">{bucket.count}</span>
              </h3>
              <div className="preview-grid">
                {bucket.cards.map((card, i) => {
                  const cc = card as {
                    href: string;
                    mediaClass: string;
                    eyebrow: string;
                    eyebrowTbd?: string;
                    eyebrowClass?: string;
                    title: string;
                    meta: string;
                  };
                  return (
                    <a key={i} href={cc.href} className="preview-card">
                      <div className={`preview-card-media ${cc.mediaClass}`.trim()}></div>
                      <div className="preview-card-body">
                        <p
                          className={
                            cc.eyebrowClass
                              ? `preview-card-eyebrow ${cc.eyebrowClass}`
                              : "preview-card-eyebrow"
                          }
                        >
                          {cc.eyebrow}
                          {cc.eyebrowTbd ? (
                            <span className="tbd">{cc.eyebrowTbd}</span>
                          ) : null}
                        </p>
                        <h3 className="preview-card-title">{cc.title}</h3>
                        <p className="preview-card-meta">{cc.meta}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}

          <p style={{ marginTop: 32 }}>
            <a href={dock.ctaHref} className="btn-primary">
              {dock.ctaLabel}
            </a>
          </p>
        </div>
      </section>

      {/* Final inquiry CTA */}
      <section className="panel grey">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow" style={{ display: "block", textAlign: "center" }}>
            {finalCta.eyebrow}
          </p>
          <h2 className="section-headline" style={{ maxWidth: "none" }}>
            {finalCta.headline}
          </h2>
          <p className="section-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>
            {finalCta.sub}
          </p>
          <p style={{ marginTop: 8 }}>
            <a href={finalCta.ctaHref} className="btn-primary">
              {finalCta.ctaLabel}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
