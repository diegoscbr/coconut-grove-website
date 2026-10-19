import { HOME_CONTENT } from "@/lib/content/home";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Hero } from "@/components/Hero";
import { Rich } from "@/components/Rich";
import { CoachPortrait } from "@/components/CoachPortrait";
import { noArrow } from "@/lib/label";

export default function HomePage() {
  const {
    announcement,
    hero,
    programs,
    pathway,
    about,
    leadership,
  } = HOME_CONTENT;

  return (
    <>
      <AnnouncementBanner announcement={announcement} />
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
                  <span className="program-card-cta">Explore</span>
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
                  {noArrow(pathway.ctaLabel)}
                </a>
              </p>
              <p className="pathway-offramp">
                {pathway.offRampPre}
                <a href={pathway.offRampHref} className="link-more">{noArrow(pathway.offRampLinkText)}</a>
              </p>
            </div>
            <div className="split-2col-media race"></div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="panel charcoal">
        <div className="container">
          <div className="split-2col">
            <div className="split-2col-media aerial"></div>
            <div className="split-2col-body">
              <p className="section-eyebrow">{about.eyebrow}</p>
              <h2 className="section-headline">{about.headline}</h2>
              <p className="intro-prose">
                <Rich text={about.prose1} />
              </p>
              <p className="intro-prose">
                <Rich text={about.prose2} />
              </p>
              <p className="intro-prose">
                <Rich text={about.prose3} />
              </p>
              <p style={{ marginTop: 24 }}>
                <a href={about.ctaHref} className="btn-light">
                  {noArrow(about.ctaLabel)}
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
                <CoachPortrait name={p.name} />
                <p className="coach-name">{p.name}</p>
                <p className="coach-role">{p.role}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 32 }}>
            <a href={leadership.ctaHref} className="btn-primary">
              {noArrow(leadership.ctaLabel)}
            </a>
          </p>
        </div>
      </section>

    </>
  );
}
