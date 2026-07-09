export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";
import { CONTACT_QUERY } from "@/sanity/lib/queries";
import { CONTACT_CONTENT, type ContactContent } from "@/lib/content/contact";
import { Rich } from "@/components/Rich";

export default async function ContactPage() {
  const { data } = await sanityFetch({ query: CONTACT_QUERY });
  const c = ((data as Partial<ContactContent> | null) ?? {}) as ContactContent;
  const {
    hero = CONTACT_CONTENT.hero,
    inquiry = CONTACT_CONTENT.inquiry,
    contacts = CONTACT_CONTENT.contacts,
    visit = CONTACT_CONTENT.visit,
    map = CONTACT_CONTENT.map,
  } = c;

  return (
    <>
      <section className="hero-compact has-hero-photo hero-contact">
        <div className="container">
          <p className="breadcrumb">
            <a href={hero.breadcrumbHomeHref}>{hero.breadcrumbHomeLabel}</a>{" "}
            <span className="sep">{hero.breadcrumbSep}</span> {hero.breadcrumbCurrent}
          </p>
          <h1>{hero.headline}</h1>
          <p className="subhead">
            {hero.subheadLead} <em>{hero.subheadEm}</em>
          </p>
          <span className="location-chip">{hero.locationChip}</span>
        </div>
      </section>

      {/* Inquiry */}
      <section className="panel">
        <div className="container">
          <p className="section-eyebrow">{inquiry.eyebrow}</p>
          <h2 className="section-headline">{inquiry.headline}</h2>
          <p className="section-sub">{inquiry.sub}</p>

          <div className="inquiry-block">
            <div className="inquiry-form-side">
              <p className="inquiry-form-eyebrow">{inquiry.form.eyebrow}</p>
              <h3 className="inquiry-form-headline">
                {inquiry.form.headlineLead} <em>{inquiry.form.headlineEm}</em>
              </h3>
              <p className="inquiry-helper">{inquiry.form.helper}</p>

              <form className="inquiry-form" data-form-inquiry="" noValidate>
                <input type="text" name="name" placeholder={inquiry.form.namePlaceholder} required />
                <input type="email" name="email" placeholder={inquiry.form.emailPlaceholder} required />
                <input type="tel" name="phone" placeholder={inquiry.form.phonePlaceholder} />
                <select name="program">
                  <option value="">{inquiry.form.programDefaultOption}</option>
                  {inquiry.form.programOptions.map((o, i) => (
                    <option key={i}>{o.label}</option>
                  ))}
                </select>
                <input
                  type="text"
                  name="sailor-info"
                  placeholder={inquiry.form.sailorInfoPlaceholder}
                  className="full"
                />
                <textarea name="notes" placeholder={inquiry.form.notesPlaceholder} className="full"></textarea>
                <button type="submit">{inquiry.form.submitLabel}</button>
              </form>
            </div>

            <div className="inquiry-info-side">
              <p className="inquiry-info-eyebrow">{inquiry.info.eyebrow}</p>

              <div className="inquiry-info-block">
                <p className="lbl">{inquiry.info.phoneLabel}</p>
                <p className="val">
                  <a href={inquiry.info.phoneHref}>{inquiry.info.phoneText}</a>
                  <small>
                    {inquiry.info.phoneSmallPre}
                    <span className="tbd">{inquiry.info.phoneTbd}</span>
                  </small>
                </p>
              </div>

              <div className="inquiry-info-block">
                <p className="lbl">{inquiry.info.emailLabel}</p>
                <p className="val">
                  <a href={inquiry.info.emailHref}>{inquiry.info.emailText}</a>
                </p>
              </div>

              <div className="inquiry-info-block">
                <p className="lbl">{inquiry.info.addressLabel}</p>
                <p className="val">
                  {inquiry.info.addressLine1}
                  <small>{inquiry.info.addressSmall}</small>
                </p>
              </div>

              <div className="inquiry-info-block">
                <p className="lbl">{inquiry.info.openHouseLabel}</p>
                <p className="val">
                  <span className="tbd">{inquiry.info.openHouseTbd}</span>
                  <small>
                    {inquiry.info.openHouseSmallPre}
                    <a href={inquiry.info.openHouseLinkHref}>{inquiry.info.openHouseLinkText}</a>
                    {inquiry.info.openHouseSmallPost}
                  </small>
                </p>
              </div>

              <p className="inquiry-info-foot">{inquiry.info.foot}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructional Center contacts */}
      <section className="panel grey">
        <div className="container">
          <p className="section-eyebrow">{contacts.eyebrow}</p>
          <h2 className="section-headline">{contacts.headline}</h2>
          <p className="section-sub">{contacts.sub}</p>

          <div className="contact-people">
            {contacts.people.map((p, i) => (
              <div className="contact-person" key={i}>
                <div className="cp-photo" style={{ backgroundImage: `url('${p.photo}')` }}></div>
                <p className="cp-role">{p.role}</p>
                <p className="cp-name">{p.name}</p>
                <p className="cp-line">
                  <a href={p.phoneHref}>{p.phoneText}</a>
                </p>
                <p className="cp-line">
                  <a href={p.emailHref}>{p.emailText}</a>
                </p>
              </div>
            ))}
          </div>

          <p className="section-sub" style={{ marginTop: 28 }}>
            {contacts.footPre}
            <a href={contacts.clubLinkHref} target="_blank" rel="noopener">
              {contacts.clubLinkText}
            </a>
            {contacts.footMid}
            <a href={contacts.donateLinkHref} target="_blank" rel="noopener">
              {contacts.donateLinkText}
            </a>
          </p>
        </div>
      </section>

      {/* Visit the dock */}
      <section className="panel">
        <div className="container">
          <div className="split-2col">
            <div className="split-2col-media aerial bayview accent-bracket"></div>
            <div className="split-2col-body">
              <p className="section-eyebrow">{visit.eyebrow}</p>
              <h2 className="section-headline">{visit.headline}</h2>
              <p className="intro-prose">
                <Rich text={visit.prose} />
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 0" }}>
                <li style={{ padding: "6px 0", fontSize: 14, color: "var(--grey-700)" }}>
                  <b
                    style={{
                      display: "inline-block",
                      minWidth: 130,
                      color: "var(--charcoal)",
                      fontFamily: "var(--display)",
                      fontWeight: 700,
                    }}
                  >
                    {visit.list.officeHoursLabel}
                  </b>
                  <span className="tbd">{visit.list.officeHoursTbd}</span>
                </li>
                <li style={{ padding: "6px 0", fontSize: 14, color: "var(--grey-700)" }}>
                  <b
                    style={{
                      display: "inline-block",
                      minWidth: 130,
                      color: "var(--charcoal)",
                      fontFamily: "var(--display)",
                      fontWeight: 700,
                    }}
                  >
                    {visit.list.openHouseLabel}
                  </b>
                  <span className="tbd">{visit.list.openHouseTbd}</span>
                  {visit.list.openHouseTrailPre}
                  <a href={visit.list.calendarLinkHref}>{visit.list.calendarLinkText}</a>
                  {visit.list.openHouseTrailPost}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="panel grey">
        <div className="container">
          <p className="section-eyebrow">{map.eyebrow}</p>
          <h2 className="section-headline">{map.headline}</h2>
          <p className="section-sub">{map.sub}</p>

          <div
            style={{
              aspectRatio: "16 / 8",
              borderRadius: 4,
              background: "linear-gradient(135deg, #B7B5E8 0%, #4E4ACF 50%, #0C0969 110%)",
              position: "relative",
              overflow: "hidden",
              marginTop: 24,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 50% 50%, rgba(255, 139, 94, 0.35) 0%, transparent 25%)",
                pointerEvents: "none",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                textAlign: "center",
                color: "var(--white)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: 900,
                  fontSize: 24,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                {map.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--body)",
                  fontSize: 14,
                  opacity: 0.85,
                  margin: "6px 0 18px",
                }}
              >
                {map.address}
              </p>
              <a href={map.linkHref} target="_blank" rel="noopener" className="btn-light">
                {map.linkText}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
