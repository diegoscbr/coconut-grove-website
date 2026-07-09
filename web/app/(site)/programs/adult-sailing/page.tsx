import { sanityFetch } from "@/sanity/lib/live";
import { ADULT_SAILING_QUERY } from "@/sanity/lib/queries";
import { ADULT_SAILING_CONTENT, type AdultSailingContent } from "@/lib/content/adultSailing";
import { Rich } from "@/components/Rich";
import { CourseGrid, Linkify } from "@/components/AdultSailingCourses";

export const dynamic = "force-dynamic";

export default async function AdultSailingPage() {
  const { data } = await sanityFetch({ query: ADULT_SAILING_QUERY });
  const c = ((data as Partial<AdultSailingContent> | null) ?? {}) as AdultSailingContent;
  const {
    hero = ADULT_SAILING_CONTENT.hero,
    subnav = ADULT_SAILING_CONTENT.subnav,
    intro = ADULT_SAILING_CONTENT.intro,
    beginner = ADULT_SAILING_CONTENT.beginner,
    intermediate = ADULT_SAILING_CONTENT.intermediate,
    cruising = ADULT_SAILING_CONTENT.cruising,
    seasonal = ADULT_SAILING_CONTENT.seasonal,
    whereWeSail = ADULT_SAILING_CONTENT.whereWeSail,
    coaches = ADULT_SAILING_CONTENT.coaches,
    register = ADULT_SAILING_CONTENT.register,
  } = c;

  return (
    <>
      <section className="hero-compact has-hero-photo hero-adult">
        <div className="container">
          <p className="breadcrumb">
            <a href="/">{hero.breadcrumbHome}</a> <span className="sep">→</span>{" "}
            <a href="/programs">{hero.breadcrumbPrograms}</a> <span className="sep">→</span>{" "}
            {hero.breadcrumbCurrent}
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

      <nav className="page-subnav" aria-label="Adult Sailing sections" data-scrollspy>
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
          {intro.paragraphs.map((para, i) => (
            <p key={i} className="intro-prose">
              {para}
            </p>
          ))}
          <p style={{ marginTop: 28 }}>
            <a href={intro.ctaHref} className="btn-primary" target="_blank" rel="noopener">
              {intro.ctaLabel}
            </a>
          </p>
        </div>
      </section>

      {/* Beginner / Novice */}
      <section className="panel grey" id="beginner">
        <div className="container">
          <p className="section-eyebrow">{beginner.eyebrow}</p>
          <h2 className="section-headline">{beginner.headline}</h2>
          <p className="section-sub">{beginner.sub}</p>
          <CourseGrid courses={beginner.courses} />
        </div>
      </section>

      {/* Intermediate */}
      <section className="panel" id="intermediate">
        <div className="container">
          <p className="section-eyebrow">{intermediate.eyebrow}</p>
          <h2 className="section-headline">{intermediate.headline}</h2>
          <p className="section-sub">{intermediate.sub}</p>
          <CourseGrid courses={intermediate.courses} />
        </div>
      </section>

      {/* Cruising & Navigation */}
      <section className="panel grey" id="cruising">
        <div className="container">
          <p className="section-eyebrow">{cruising.eyebrow}</p>
          <h2 className="section-headline">{cruising.headline}</h2>
          <p className="section-sub">{cruising.sub}</p>
          <CourseGrid courses={cruising.courses} />
        </div>
      </section>

      {/* Seasonal note */}
      <section className="panel charcoal">
        <div className="container">
          <p className="section-eyebrow">{seasonal.eyebrow}</p>
          <h2 className="section-headline">{seasonal.headline}</h2>
          <p className="section-sub">{seasonal.sub}</p>
          <div className="season-note">
            {seasonal.items.map((item, i) => (
              <div key={i} className="season-item">
                <p className="sn-name">{item.name}</p>
                {item.lines.map((line, j) => (
                  <p key={j} className="sn-line">
                    <Linkify text={line} />
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where we sail */}
      <section className="panel">
        <div className="container">
          <div className="split-2col reverse">
            <div className="split-2col-body">
              <p className="section-eyebrow">{whereWeSail.eyebrow}</p>
              <h2 className="section-headline">{whereWeSail.headline}</h2>
              <p className="intro-prose">
                <Rich text={whereWeSail.prose1} />
              </p>
              <p className="intro-prose">
                {whereWeSail.prose2Pre}
                <a href={whereWeSail.prose2LinkHref} target="_blank" rel="noopener">
                  {whereWeSail.prose2LinkText}
                </a>
              </p>
            </div>
            <div className="split-2col-media aerial bayview accent-bracket"></div>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="panel grey" id="coaches">
        <div className="container">
          <p className="section-eyebrow">{coaches.eyebrow}</p>
          <h2 className="section-headline">{coaches.headline}</h2>
          <p className="section-sub">{coaches.sub}</p>
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

      {/* Register & contact */}
      <section className="panel charcoal" id="register">
        <div className="container">
          <p className="section-eyebrow">{register.eyebrow}</p>
          <h2 className="section-headline">{register.headline}</h2>
          <p className="section-sub">{register.sub}</p>
          <p style={{ margin: "8px 0 0" }}>
            <a href={register.ctaHref} className="btn-primary" target="_blank" rel="noopener">
              {register.ctaLabel}
            </a>
          </p>

          <div className="inquiry-block" style={{ marginTop: 40 }}>
            <div className="inquiry-form-side">
              <p className="inquiry-form-eyebrow">{register.form.eyebrow}</p>
              <h3 className="inquiry-form-headline">
                {register.form.headlinePre}
                <em>{register.form.headlineEmphasis}</em>
              </h3>
              <p className="inquiry-helper">{register.form.helper}</p>

              <form className="inquiry-form" data-form-inquiry="" noValidate>
                <input type="text" name="name" placeholder={register.form.namePlaceholder} required />
                <input type="email" name="email" placeholder={register.form.emailPlaceholder} required />
                <select name="interest" className="full" defaultValue="">
                  <option value="">{register.form.interestLabel}</option>
                  {register.form.interestOptions.map((opt, i) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
                <select name="experience" className="full" defaultValue="">
                  <option value="">{register.form.experienceLabel}</option>
                  {register.form.experienceOptions.map((opt, i) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
                <textarea name="notes" placeholder={register.form.notesPlaceholder} className="full"></textarea>
                <button type="submit">{register.form.submitLabel}</button>
              </form>
            </div>

            <div className="inquiry-info-side">
              <p className="inquiry-info-eyebrow">{register.info.eyebrow}</p>
              <div className="inquiry-info-block">
                <p className="lbl">{register.info.contactLbl}</p>
                <p className="val">
                  <a href={`mailto:${register.info.contactEmail}`}>{register.info.contactEmail}</a>
                  <small>
                    <a href={register.info.contactPhoneHref}>{register.info.contactPhone}</a>
                  </small>
                </p>
              </div>
              <div className="inquiry-info-block">
                <p className="lbl">{register.info.officeLbl}</p>
                <p className="val">
                  <a href={register.info.officePhoneHref}>{register.info.officePhone}</a>
                </p>
              </div>
              <div className="inquiry-info-block">
                <p className="lbl">{register.info.locationLbl}</p>
                <p className="val">
                  {register.info.locationLine1}
                  <small>{register.info.locationLine2}</small>
                </p>
              </div>
              <p className="inquiry-info-foot">
                {register.info.footPre}
                <a href={`mailto:${register.info.footEmail}`}>{register.info.footEmail}</a>
                {register.info.footPost}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
