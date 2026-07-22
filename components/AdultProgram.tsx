import { ADULT_PROGRAM_CONTENT } from "@/lib/content/adultProgram";
import { CourseGrid, Linkify } from "@/components/AdultSailingCourses";

/**
 * Adult Sailing program — the full body of the Adult Sailing page.
 * Copy lives in lib/content/adultProgram.ts; hero-card styles are shared
 * with the Summer Camp section (.camp-* in globals.css).
 */
export function AdultProgram() {
  const { registrationUrl, lead, pathway, flyingScot, clinics, readyToStart } =
    ADULT_PROGRAM_CONTENT;

  return (
    <>
      {/* Lead card — find your place, registration CTA */}
      <section className="panel grey" id="about">
        <div className="container">
          <div className="camp-hero">
            <p className="section-eyebrow">{lead.eyebrow}</p>
            <h2 className="camp-hero-title">{lead.title}</h2>
            <p className="camp-hero-tagline">{lead.tagline}</p>
            {lead.paragraphs.map((para, i) => (
              <p key={i} className="camp-hero-intro">
                {para}
              </p>
            ))}
            <p className="camp-hero-cta">
              <a
                href={registrationUrl}
                className="btn-register"
                target="_blank"
                rel="noopener noreferrer"
              >
                {lead.ctaLabel}
              </a>
              <small>{lead.ctaNote}</small>
            </p>
          </div>
        </div>
      </section>

      {/* US Sailing Certification Pathway */}
      <section className="panel" id="pathway">
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
              style={{ backgroundImage: `url('${pathway.image}')` }}
            ></div>
          </div>
          <CourseGrid courses={pathway.courses} />
        </div>
      </section>

      {/* Flying Scot Program */}
      <section className="panel grey" id="flying-scot">
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
      <section className="panel" id="clinics">
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
