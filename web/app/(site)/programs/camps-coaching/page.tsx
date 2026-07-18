import { CAMPS_COACHING_CONTENT } from "@/lib/content/campsCoaching";
import { Rich } from "@/components/Rich";

export default function CampsCoachingPage() {
  const {
    hero,
    subnav,
    intro,
    camps,
    private: privateCoaching,
    faq,
    inquire,
  } = CAMPS_COACHING_CONTENT;

  return (
    <>
      <section className="hero-compact has-hero-photo hero-camps">
        <div className="container">
          <p className="breadcrumb"><a href={hero.breadcrumbHomeHref}>{hero.breadcrumbHomeLabel}</a> <span className="sep">→</span> <a href={hero.breadcrumbProgramsHref}>{hero.breadcrumbProgramsLabel}</a> <span className="sep">→</span> {hero.breadcrumbCurrent}</p>
          <h1>{hero.h1}</h1>
          <p className="subhead">{hero.subheadBefore}<em>{hero.subheadEmphasis}</em>{hero.subheadAfter}</p>
          <span className="location-chip">{hero.locationChip}</span>
        </div>
      </section>

      <nav className="page-subnav" aria-label="Youth Sailing sections" data-scrollspy>
        <div className="page-subnav-inner">
          {subnav.map((item, i) => (
            <a key={i} href={item.href} className={i === 0 ? "active" : undefined}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Intro */}
      <section className="panel" id="about">
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

      {/* Available Camps */}
      <section className="panel grey" id="camps">
        <div className="container">
          <p className="camps-count"><em>{camps.countNumber}</em> {camps.countLabel}</p>

          <div className="filter-row" aria-label="Filter camps">
            <label>{camps.filters.label}</label>
            {camps.filters.selects.map((sel, i) => (
              <select key={i} aria-label={sel.ariaLabel}>
                {sel.options.map((opt, j) => (
                  <option key={j}>{opt}</option>
                ))}
              </select>
            ))}
          </div>

          <div className="preview-grid">
            {camps.cards.map((card, i) => (
              <article key={i} className="preview-card">
                <div className={`preview-card-media ${card.mediaClass}`.trim()}></div>
                <div className="preview-card-body">
                  <div className="chips-row">
                    {card.chips.map((chip, j) => (
                      <span key={j} className={chip.cls ? `chip ${chip.cls}` : "chip"}>
                        {chip.label}
                      </span>
                    ))}
                  </div>
                  <h3 className="preview-card-title">{card.title}</h3>
                  <p className="preview-card-meta">{card.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Private coaching */}
      <section className="panel charcoal" id="private">
        <div className="container">
          <div className="split-2col">
            <div className="split-2col-media coaches accent-bracket"></div>
            <div className="split-2col-body">
              <p className="section-eyebrow">{privateCoaching.eyebrow}</p>
              <h2 className="section-headline">{privateCoaching.headline}</h2>
              <p className="intro-prose">
                <Rich text={privateCoaching.prose1} />
              </p>
              <p className="intro-prose">
                {privateCoaching.prose2Pre}
                <b>
                  {privateCoaching.prose2Bold}
                  <span className="tbd">{privateCoaching.prose2Tbd}</span>
                </b>
                {privateCoaching.prose2Post}
              </p>
              <p style={{ marginTop: 24 }}>
                <a href={privateCoaching.ctaHref} className="btn-ghost">
                  {privateCoaching.ctaLabel}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="panel" id="faq">
        <div className="container">
          <p className="section-eyebrow">{faq.eyebrow}</p>
          <h2 className="section-headline">{faq.headline}</h2>

          <div className="faq-accordion">
            {faq.items.map((item, i) => (
              <details key={i} className="faq-item">
                <summary>{item.summary}</summary>
                <div className="faq-body">
                  <Rich text={item.bodyPre} />
                  {item.linkHref ? <a href={item.linkHref}>{item.linkText}</a> : null}
                  <Rich text={item.bodyPost} />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inquire */}
      <section className="panel charcoal" id="inquire">
        <div className="container">
          <p className="section-eyebrow">{inquire.eyebrow}</p>
          <h2 className="section-headline">{inquire.headline}</h2>
          <p className="section-sub">{inquire.sub}</p>

          <div className="inquiry-block">
            <div className="inquiry-form-side">
              <p className="inquiry-form-eyebrow">{inquire.form.eyebrow}</p>
              <h3 className="inquiry-form-headline">
                {inquire.form.headlinePre}
                <em>{inquire.form.headlineEmphasis}</em>
              </h3>
              <p className="inquiry-helper">{inquire.form.helper}</p>

              <form className="inquiry-form" data-form-inquiry noValidate>
                <input type="text" name="name" placeholder={inquire.form.namePlaceholder} required />
                <input type="email" name="email" placeholder={inquire.form.emailPlaceholder} required />
                <input type="text" name="sailor-age" placeholder={inquire.form.agePlaceholder} className="full" />
                <select name="camp-type" className="full">
                  {inquire.form.campTypeOptions.map((opt, i) => (
                    <option key={i} value={i === 0 ? "" : undefined}>
                      {opt}
                    </option>
                  ))}
                </select>
                <textarea name="notes" placeholder={inquire.form.notesPlaceholder} className="full"></textarea>
                <button type="submit">{inquire.form.submitLabel}</button>
              </form>
            </div>

            <div className="inquiry-info-side">
              <p className="inquiry-info-eyebrow">{inquire.info.eyebrow}</p>
              <div className="inquiry-info-block">
                <p className="lbl">{inquire.info.phoneLabel}</p>
                <p className="val"><a href={inquire.info.phoneHref}>{inquire.info.phoneText}</a></p>
              </div>
              <div className="inquiry-info-block">
                <p className="lbl">{inquire.info.emailLabel}</p>
                <p className="val"><a href={inquire.info.emailHref}>{inquire.info.emailText}</a></p>
              </div>
              <div className="inquiry-info-block">
                <p className="lbl">{inquire.info.visitLabel}</p>
                <p className="val">{inquire.info.addressLine1}<small>{inquire.info.addressLine2}</small></p>
              </div>
              <p className="inquiry-info-foot">
                {inquire.info.footPre}
                <a href={inquire.info.footLinkHref}>{inquire.info.footLinkText}</a>
                {inquire.info.footPost}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
