import { SUMMER_CAMP_CONTENT } from "@/lib/content/summerCamp";

/**
 * Summer Camp 2026 — the seasonal lead section of the Youth Sailing page.
 * Copy lives in lib/content/summerCamp.ts; styles in globals.css (.camp-*).
 */
export function SummerCamp2026() {
  const {
    registrationUrl,
    hero,
    programs,
    skillLevels,
    sessions,
    schedule,
    fees,
    whatToBring,
    parentInfo,
    contact,
    clinics,
  } = SUMMER_CAMP_CONTENT;

  return (
    <section className="panel grey" id="summer-camp">
      <div className="container">
        {/* Header card — dates, ages, intro, registration CTA */}
        <div className="camp-hero">
          <p className="section-eyebrow">{hero.eyebrow}</p>
          <h2 className="camp-hero-title">{hero.title}</h2>
          <div className="chips-row camp-hero-chips">
            <span className="chip rust">{hero.dateChip}</span>
            <span className="chip">{hero.ageChip}</span>
          </div>
          <p className="camp-hero-intro">{hero.intro}</p>
          <p className="camp-hero-cta">
            <a
              href={registrationUrl}
              className="btn-register"
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.ctaLabel}
            </a>
            <small>{hero.ctaNote}</small>
          </p>
        </div>

        {/* Our Programs */}
        <div className="camp-block">
          <h3 className="camp-sub">{programs.headline}</h3>
          <p className="intro-prose">{programs.intro}</p>
          <p className="camp-lead">{programs.boatsLead}</p>
          <ul className="camp-list">
            {programs.boats.map((boat, i) => (
              <li key={i}>
                <b>{boat.name}</b> {boat.detail}
              </li>
            ))}
          </ul>
        </div>

        {/* Skill Levels */}
        <div className="camp-block">
          <h3 className="camp-sub">{skillLevels.headline}</h3>
          <p className="intro-prose">{skillLevels.body}</p>
        </div>

        {/* Session Dates */}
        <div className="camp-block">
          <h3 className="camp-sub">{sessions.headline}</h3>
          <p className="intro-prose">{sessions.intro}</p>
          <ul className="camp-list">
            {sessions.flexibility.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <div className="camp-two-col">
            <div className="camp-data-card">
              <p className="camp-data-label">{sessions.twoWeekLabel}</p>
              {sessions.twoWeek.map((row, i) => (
                <div key={i} className="camp-data-row">
                  <span className="lbl">{row.label}</span>
                  <span className="val">{row.dates}</span>
                </div>
              ))}
            </div>
            <div className="camp-data-card">
              <p className="camp-data-label">{sessions.weeklyLabel}</p>
              {sessions.weekly.map((row, i) => (
                <div key={i} className="camp-data-row">
                  <span className="lbl">{row.label}</span>
                  <span className="val">{row.dates}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Daily Schedule + Fees */}
        <div className="camp-block">
          <div className="camp-two-col">
            <div className="camp-data-card">
              <p className="camp-data-label">{schedule.headline}</p>
              {schedule.rows.map((row, i) => (
                <div key={i} className="camp-data-row">
                  <span className="lbl">{row.label}</span>
                  <span className="val">{row.time}</span>
                </div>
              ))}
            </div>
            <div className="camp-data-card">
              <p className="camp-data-label">{fees.headline}</p>
              {fees.rows.map((row, i) => (
                <div key={i} className="camp-data-row">
                  <span className="lbl price">{row.price}</span>
                  <span className="val">{row.detail}</span>
                </div>
              ))}
              <p className="camp-data-foot">
                <a
                  href={registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register on Clubspot →
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* What to Bring */}
        <div className="camp-block">
          <h3 className="camp-sub">{whatToBring.headline}</h3>
          <p className="intro-prose">{whatToBring.intro}</p>
          <div className="camp-two-col three">
            <div className="camp-data-card">
              <p className="camp-data-label">{whatToBring.requiredLabel}</p>
              <ul className="camp-list check">
                {whatToBring.required.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="camp-data-card">
              <p className="camp-data-label">{whatToBring.sunLabel}</p>
              <ul className="camp-list check">
                {whatToBring.sun.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="camp-data-card">
              <p className="camp-data-label">{whatToBring.clothingLabel}</p>
              <ul className="camp-list check">
                {whatToBring.clothing.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="camp-tip">{whatToBring.tip}</p>
        </div>

        {/* Parent info & policies */}
        <div className="camp-block">
          <p className="section-eyebrow">{parentInfo.eyebrow}</p>
          <h3 className="camp-sub">{parentInfo.headline}</h3>
          <div className="faq-accordion">
            {parentInfo.items.map((item, i) => (
              <details key={i} className="faq-item">
                <summary>{item.summary}</summary>
                <div className="faq-body">
                  {item.paragraphs.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="camp-block camp-contact">
          <h3 className="camp-sub">{contact.headline}</h3>
          <p className="intro-prose">
            {contact.intro} <b>{contact.name}</b>{" "}
            <a href={contact.emailHref}>{contact.emailText}</a> ·{" "}
            <a href={contact.phoneHref}>{contact.phoneText}</a>
          </p>
        </div>

        {/* Summer Racing Clinics */}
        <div className="camp-clinics">
          <p className="section-eyebrow">{clinics.eyebrow}</p>
          <h3 className="camp-sub">{clinics.headline}</h3>
          <p className="intro-prose">{clinics.intro}</p>
          <p className="camp-lead">{clinics.openNote}</p>
          <div className="camp-two-col">
            {clinics.tracks.map((track, i) => (
              <div key={i} className="camp-data-card">
                <p className="camp-data-label">{track.title}</p>
                <p className="camp-clinic-coach">{track.coach}</p>
                {track.note ? <p className="camp-clinic-note">{track.note}</p> : null}
                {track.body ? <p className="camp-clinic-body">{track.body}</p> : null}
                <p className="camp-clinic-dates-label">{track.datesLabel}:</p>
                <ul className="camp-list">
                  {track.dates.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
                <p className="camp-clinic-hours">Hours: {track.hours}</p>
              </div>
            ))}
          </div>
          <p className="camp-lead">{clinics.cost}</p>
          <p className="camp-hero-cta">
            <a
              href={registrationUrl}
              className="btn-register"
              target="_blank"
              rel="noopener noreferrer"
            >
              {clinics.ctaLabel}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
