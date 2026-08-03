import Image from "next/image";
import Link from "next/link";
import {
  FALL_YOUTH_CONTENT,
  type FallYouthProgram,
} from "@/lib/content/fallYouth";

/**
 * 2026 Fall Youth Sailing — the full body of the Youth Sailing page.
 * Copy lives in lib/content/fallYouth.ts; styles are shared with the
 * Summer Camp / Adult Sailing card systems (.camp-* / .course-* in globals.css).
 */

function ProgramCards({ programs }: { programs: readonly FallYouthProgram[] }) {
  return (
    <div className="course-grid">
      {programs.map((program, i) => (
        <article key={i} className="course-card">
          <div className="course-card-inner">
            <h3 className="course-name">{program.name}</h3>
            {program.description ? (
              <p className="course-desc">{program.description}</p>
            ) : null}
            {program.options.map((option, j) => (
              <div key={j}>
                {option.label ? <p className="camp-lead">{option.label}</p> : null}
                {option.description ? (
                  <p className="course-desc">{option.description}</p>
                ) : null}
                <dl className="course-meta">
                  {option.when.map((when, k) => (
                    <div key={k}>
                      <dt>When</dt>
                      <dd>{when}</dd>
                    </div>
                  ))}
                  <div>
                    <dt>Season Fee</dt>
                    <dd>{option.fee}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function FallYouth2026() {
  const {
    registrationUrl,
    header,
    familyNote,
    pathwayImage,
    optiSection,
    beyondSection,
    moreWaysSection,
    faq,
    readyToRace,
    registration,
    contact,
  } = FALL_YOUTH_CONTENT;

  return (
    <>
      {/* Header card + note to families */}
      <section className="panel grey" id="fall-youth">
        {/* Legacy anchor — old links to /programs/camps-coaching#summer-camp
            (emails, socials, search results) land here instead of page top. */}
        <span id="summer-camp" aria-hidden="true" />
        <div className="container">
          <div className="camp-hero">
            <h2 className="camp-hero-title">{header.title}</h2>
            <div className="chips-row camp-hero-chips">
              <span className="chip rust">{header.dateChip}</span>
            </div>
            <p className="camp-hero-cta">
              <a
                href={registrationUrl}
                className="btn-register"
                target="_blank"
                rel="noopener noreferrer"
              >
                {header.ctaLabel}
              </a>
              <small>{header.ctaNote}</small>
            </p>
          </div>

          <div className="camp-block">
            <h3 className="camp-sub">{familyNote.headline}</h3>
            {familyNote.paragraphs.map((para, i) => (
              <p key={i} className="intro-prose">
                {para}
              </p>
            ))}
            <p className="intro-prose">
              <b>{familyNote.signature.name}</b>
              <br />
              {familyNote.signature.role}
              <br />
              {familyNote.signature.org}
            </p>
          </div>
        </div>
      </section>

      {/* Learn to Sail an Optimist */}
      <section className="panel" id="opti">
        <div className="container">
          <h2 className="section-headline">{optiSection.headline}</h2>
          <p className="camp-lead">{optiSection.sub}</p>
          <p className="intro-prose">{optiSection.intro}</p>
          <ProgramCards programs={optiSection.programs} />
        </div>
      </section>

      {/* The Pathway Beyond Opti */}
      <section className="panel grey" id="beyond-opti">
        <div className="container">
          <h2 className="section-headline">{beyondSection.headline}</h2>
          <p className="intro-prose">{beyondSection.intro}</p>
          <Image
            src={pathwayImage.src}
            alt={pathwayImage.alt}
            width={1440}
            height={1080}
            className="camp-photo"
            sizes="(max-width: 960px) 100vw, 880px"
          />
          <h3 className="camp-sub" style={{ marginTop: 40 }}>
            {beyondSection.windsurfingLead.headline}
          </h3>
          <p className="intro-prose">{beyondSection.windsurfingLead.body}</p>
          <ProgramCards programs={beyondSection.programs} />
        </div>
      </section>

      {/* More Ways to Get on the Water */}
      <section className="panel" id="more-ways">
        <div className="container">
          <h2 className="section-headline">{moreWaysSection.headline}</h2>
          <ProgramCards programs={moreWaysSection.programs} />
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
                <div className="faq-body">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Race? */}
      <section className="panel" id="racing">
        <div className="container">
          <h2 className="section-headline">{readyToRace.headline}</h2>
          <p className="intro-prose">{readyToRace.intro}</p>
          <p className="camp-lead">{readyToRace.listLead}</p>
          <ul className="camp-list">
            {readyToRace.fleets.map((fleet, i) => (
              <li key={i}>
                <b>{fleet.name}:</b> {fleet.detail}
              </li>
            ))}
          </ul>
          <p className="camp-hero-cta">
            <Link href={readyToRace.ctaHref} className="btn-register">
              {readyToRace.ctaLabel}
            </Link>
          </p>
        </div>
      </section>

      {/* Registration + contact */}
      <section className="panel charcoal" id="register">
        <div className="container">
          <h2 className="section-headline">{registration.headline}</h2>
          <p className="camp-hero-cta">
            <a
              href={registrationUrl}
              className="btn-register"
              target="_blank"
              rel="noopener noreferrer"
            >
              {registration.ctaLabel}
            </a>
          </p>
          <p className="section-sub">
            {contact.headline}
            <br />
            <b>{contact.name}</b> — {contact.role}
            <br />
            <a href={contact.emailHref}>{contact.emailText}</a> |{" "}
            <a href={contact.phoneHref}>{contact.phoneText}</a>
          </p>
        </div>
      </section>
    </>
  );
}
