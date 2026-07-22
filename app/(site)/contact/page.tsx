import type { Metadata } from "next";
import { CONTACT_CONTENT } from "@/lib/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Instructional Center — 2990 S. Bayshore Drive, Miami, on Biscayne Bay.",
};

export default function ContactPage() {
  const { hero, contacts, map } = CONTACT_CONTENT;

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

      {/* Map */}
      <section className="panel">
        <div className="container">
          <p className="section-eyebrow">{map.eyebrow}</p>
          <h2 className="section-headline">{map.headline}</h2>
          <p className="section-sub">{map.sub}</p>

          <div className="map-embed">
            <iframe
              src={map.embedSrc}
              title={map.embedTitle}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="map-embed-foot">
            <a href={map.linkHref} target="_blank" rel="noopener">
              {map.linkText}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
