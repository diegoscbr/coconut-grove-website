import { ADULT_PROGRAM_CONTENT } from "@/lib/content/adultProgram";
import { ADULT_SAILING_CONTENT } from "@/lib/content/adultSailing";
import { CourseGrid, Linkify } from "@/components/AdultSailingCourses";

/**
 * Adult Sailing program — the full body of the Adult Sailing page.
 * Copy lives in lib/content/adultProgram.ts; hero-card styles are shared
 * with the Summer Camp section (.camp-* in globals.css).
 */
export function AdultProgram() {
  const {
    registrationUrl,
    contactBand,
    lead,
    pathway,
    afterCertification,
    flyingScot,
    clinics,
    instructors,
    faq,
    readyToStart,
  } = ADULT_PROGRAM_CONTENT;

  return (
    <>
      {/* Contact + registration band. The specification calls this the single
          most important addition to the page: people called and emailed with
          general questions and had no obvious route before. One of exactly two
          Register buttons on the page; the other closes it. */}
      <section className="contact-band">
        <div className="container contact-band-inner">
          <div>
            <p className="contact-band-lead">{contactBand.questionLead}</p>
            <p className="contact-band-body">
              {contactBand.questionBody}{" "}
              <a href={contactBand.emailHref}>{contactBand.emailText}</a>
            </p>
          </div>
          <div className="contact-band-action">
            <p className="contact-band-lead">{contactBand.registerLead}</p>
            <a
              href={registrationUrl}
              className="btn-register"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactBand.ctaLabel}
            </a>
          </div>
        </div>
      </section>

      {/* Learn to Sail in Miami on Biscayne Bay */}
      <section className="panel grey" id="program">
        <div className="container">
          <div className="camp-hero">
            <p className="section-eyebrow">{lead.eyebrow}</p>
            <h2 className="camp-hero-title">{lead.title}</h2>
            <p className="camp-hero-tagline">{lead.tagline}</p>
            {/* The helm photo lands with the image pass, once Rosa's files are
                in public/assets and their real dimensions are known. The copy
                fields are already in place; set lead.image to render it. */}
            {lead.paragraphs.map((para, i) => (
              <p key={i} className="camp-hero-intro">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* US Sailing Certification Pathway */}
      <section className="panel" id="certification-pathway">
        <div className="container">
          <div className="split-2col">
            <div className="split-2col-body">
              <p className="section-eyebrow">{pathway.eyebrow}</p>
              <h2 className="section-headline">{pathway.headline}</h2>
              <p className="camp-lead">{pathway.lead}</p>
              {pathway.paragraphs.map((para, i) => (
                <p key={i} className="intro-prose">
                  {para}
                </p>
              ))}
            </div>
            <div
              className="split-2col-media photo accent-bracket"
              role="img"
              aria-label={ADULT_SAILING_CONTENT.seo.heroImageAlt}
              style={{ backgroundImage: `url('${pathway.image}')` }}
            ></div>
          </div>
          <CourseGrid courses={pathway.courses} />

          <div className="cruising-heading">
            <h3 className="camp-sub">{pathway.cruisingHeading}</h3>
            <p className="cruising-kicker">{pathway.cruisingKicker}</p>
          </div>
          <CourseGrid courses={pathway.cruisingCourses} />
        </div>
      </section>

      {/* Boat access for members — new in the September specification */}
      <section className="panel grey" id="after-certification">
        <div className="container">
          <p className="section-eyebrow">{afterCertification.eyebrow}</p>
          <h2 className="section-headline">{afterCertification.headline}</h2>
          <div className="split-2col">
            <div className="split-2col-body">
              {afterCertification.paragraphs.map((para, i) => (
                <p key={i} className="intro-prose">
                  {para}
                </p>
              ))}
            </div>
            <aside className="fleet-panel">
              <p className="fleet-panel-label">{afterCertification.panel.label}</p>
              <p className="fleet-panel-fleet">{afterCertification.panel.fleet}</p>
              <p className="fleet-panel-note">{afterCertification.panel.note}</p>
              <p className="fleet-panel-actions">
                <a
                  href={afterCertification.panel.primaryHref}
                  className="btn-register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {afterCertification.panel.primaryLabel}
                </a>
                <a
                  href={afterCertification.panel.secondaryHref}
                  className="fleet-panel-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {afterCertification.panel.secondaryLabel}
                </a>
              </p>
            </aside>
          </div>

          <h3 className="camp-sub" style={{ marginTop: 48 }}>
            {afterCertification.ensign.headline}
          </h3>
          <p className="intro-prose">{afterCertification.ensign.body}</p>
          <p className="intro-prose">
            <Linkify text={afterCertification.ensign.contact} />
          </p>

          <h3 className="camp-sub" style={{ marginTop: 40 }}>
            {afterCertification.racing.headline}
          </h3>
          <p className="intro-prose">{afterCertification.racing.body}</p>
          <p className="intro-prose">
            {afterCertification.racing.linkedPre}
            <a href={afterCertification.racing.linkedHref}>
              {afterCertification.racing.linkedLabel}
            </a>
            <Linkify text={afterCertification.racing.linkedPost} />
          </p>
        </div>
      </section>

      {/* Flying Scot Program */}
      <section className="panel" id="flying-scot">
        <div className="container">
          <p className="section-eyebrow">{flyingScot.eyebrow}</p>
          <h2 className="section-headline">{flyingScot.wednesday.headline}</h2>
          <p className="camp-lead">{flyingScot.wednesday.tagline}</p>
          <div className="split-2col">
            <div className="split-2col-body">
              {flyingScot.wednesday.paragraphs.map((para, i) => (
                <p key={i} className="intro-prose">
                  {para}
                </p>
              ))}
            </div>
            <div
              className="split-2col-media photo accent-bracket"
              role="img"
              aria-label={flyingScot.wednesday.imageAlt}
              style={{ backgroundImage: `url('${flyingScot.wednesday.image}')` }}
            ></div>
          </div>
          <dl className="course-meta standalone">
            {flyingScot.wednesday.meta.map((row, i) => (
              <div key={i}>
                <dt>{row.dt}</dt>
                <dd>
                  <Linkify text={row.dd} />
                </dd>
              </div>
            ))}
          </dl>

          <h3 className="camp-sub" style={{ marginTop: 56 }}>
            {flyingScot.restHeadline}
          </h3>
          <CourseGrid courses={flyingScot.courses} />
        </div>
      </section>

      {/* Clinics */}
      <section className="panel grey" id="clinics">
        <div className="container">
          <p className="section-eyebrow">{clinics.eyebrow}</p>
          <h2 className="section-headline">{clinics.headline}</h2>
          <p className="intro-prose">{clinics.intro}</p>
          <dl className="course-meta standalone">
            {clinics.meta.map((row, i) => (
              <div key={i}>
                <dt>{row.dt}</dt>
                <dd>
                  <Linkify text={row.dd} />
                </dd>
              </div>
            ))}
          </dl>
          <h3 className="camp-sub" style={{ marginTop: 40 }}>
            {clinics.fleetLead}
          </h3>
          <CourseGrid courses={clinics.fleets} />
          <p className="fleet-footnote">
            {clinics.fleetFootnotePre}
            <a href={clinics.fleetFootnoteHref}>{clinics.fleetFootnoteLink}</a>
            {clinics.fleetFootnotePost}
          </p>
        </div>
      </section>

      {/* Instructor roster — new in the September specification. Each person
          appears once, with every discipline they teach on that entry. */}
      <section className="panel" id="instructors">
        <div className="container">
          <p className="section-eyebrow">{instructors.eyebrow}</p>
          <h2 className="section-headline">{instructors.headline}</h2>
          <p className="intro-prose">{instructors.intro}</p>
          {instructors.groups.map((group, i) => (
            <div key={i} className="instructor-group">
              <h3 className="instructor-group-label">{group.label}</h3>
              <ul className={`instructor-grid${group.lead ? " tier-lead" : ""}`}>
                {group.people.map((person, j) => (
                  <li key={j} className="instructor">
                    <div className="instructor-portrait" aria-hidden="true"></div>
                    <p className="instructor-name">{person.name}</p>
                    <p className="instructor-role">{person.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="panel grey" id="faq">
        <div className="container">
          <h2 className="section-headline">{faq.headline}</h2>
          <div className="faq-accordion">
            {faq.items.map((item, i) => (
              <details key={i} className="faq-item">
                <summary>{item.question}</summary>
                <div className="faq-body">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to start */}
      <section className="panel charcoal" id="register">
        <div className="container">
          <h2 className="section-headline">{readyToStart.headline}</h2>
          <p className="section-sub">{readyToStart.body}</p>
          <p className="section-sub">
            <b>{readyToStart.contactName}</b> —{" "}
            <a href={readyToStart.emailHref}>{readyToStart.emailText}</a> |{" "}
            <a href={readyToStart.phoneHref}>{readyToStart.phoneText}</a>
          </p>
          <p className="camp-hero-cta">
            <a
              href={registrationUrl}
              className="btn-register"
              target="_blank"
              rel="noopener noreferrer"
            >
              {readyToStart.ctaLabel}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
