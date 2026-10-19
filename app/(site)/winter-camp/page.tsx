import type { Metadata } from "next";
import Link from "next/link";
import {
  WINTER_CAMP_CONTENT,
  WINTER_CAMP_LAST_UPDATED,
  formatTuition,
} from "@/lib/content/winterCamp";
import { faqSchema, jsonLd } from "@/lib/schema";
import { noArrow } from "@/lib/label";

// Section 1 of the "Winter Break Camp Page — Build Specification". The title
// is absolute: it carries its own brand suffix.
const { seo } = WINTER_CAMP_CONTENT;

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  alternates: { canonical: seo.canonical },
  openGraph: {
    type: "website",
    siteName: "Coconut Grove Sailing Club Instructional Center",
    title: seo.title,
    description: seo.description,
    url: seo.canonical,
    images: [{ url: seo.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

const ORG = "Coconut Grove Sailing Club Instructional Center";

/** Section 6, block one: the three sessions as an ItemList of EducationEvent. */
function sessionsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Winter Break Sailing Camp 2026",
    itemListElement: WINTER_CAMP_CONTENT.sessions.items.map((session, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "EducationEvent",
        name: session.schemaName,
        description: "Four-day sailing camp for kids and teens ages 6-16 on Biscayne Bay.",
        startDate: session.startDate,
        endDate: session.endDate,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        url: seo.canonical,
        typicalAgeRange: "6-16",
        location: {
          "@type": "Place",
          name: ORG,
          address: {
            "@type": "PostalAddress",
            streetAddress: "2990 South Bayshore Drive",
            addressLocality: "Miami",
            addressRegion: "FL",
            postalCode: "33133",
            addressCountry: "US",
          },
        },
        organizer: { "@type": "Organization", name: ORG, url: "https://www.cgscic.org" },
        offers: {
          "@type": "Offer",
          url: WINTER_CAMP_CONTENT.registrationUrl,
          price: String(session.tuition),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };
}

function RegisterButton() {
  const { registrationUrl, sessions } = WINTER_CAMP_CONTENT;
  return (
    <a
      href={registrationUrl}
      className="btn-register winter-register"
      target="_blank"
      rel="noopener noreferrer"
    >
      {noArrow(sessions.ctaLabel)}
    </a>
  );
}

export default function WinterCampPage() {
  const { hero, sessions, groups, day, bring, faq, contact } = WINTER_CAMP_CONTENT;

  return (
    <>
      <section className="hero-compact has-hero-photo hero-camps">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> <span className="sep">/</span>{" "}
            <Link href="/programs">Programs</Link> <span className="sep">/</span>{" "}
            <Link href="/programs/camps-coaching">Youth Sailing</Link>{" "}
            <span className="sep">/</span> {hero.breadcrumbCurrent}
          </p>
          <h1>{hero.h1}</h1>
          <p className="subhead">{hero.subhead}</p>
        </div>
      </section>

      {/* Sessions and tuition */}
      <section className="panel" id="sessions">
        <div className="container">
          <h2 className="section-headline">{sessions.headline}</h2>
          <p className="intro-prose">{sessions.intro}</p>

          <p className="section-eyebrow winter-label">{sessions.label}</p>
          <div className="winter-sessions">
            {sessions.items.map((session) => (
              <article key={session.name} className="course-card">
                <div className="course-card-inner">
                  <p className="winter-session-name">{session.name}</p>
                  <p className="winter-session-dates">{session.dates}</p>
                  <p className="winter-session-price">{formatTuition(session.tuition)}</p>
                  <p className="course-desc">{session.note}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="camp-hero-cta winter-cta">
            <RegisterButton />
            <span className="winter-cta-note">{sessions.ctaNote}</span>
          </p>
        </div>
      </section>

      {/* What your child will sail */}
      <section className="panel grey" id="groups">
        <div className="container">
          <h2 className="section-headline">{groups.headline}</h2>
          <p className="intro-prose">{groups.intro}</p>
          <div className="winter-groups">
            {groups.items.map((group) => (
              <article key={group.name} className="course-card">
                <div className="course-card-inner">
                  <h3 className="course-name">{group.name}</h3>
                  <p className="winter-group-ages">{group.ages}</p>
                  <p className="course-desc">{group.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* A day at camp — a definition list, so it stacks on a phone instead
          of side-scrolling like a table would. */}
      <section className="panel" id="day">
        <div className="container">
          <h2 className="section-headline">{day.headline}</h2>
          <dl className="winter-day">
            <div className="winter-day-head" aria-hidden="true">
              <span>{day.columns[0]}</span>
              <span>{day.columns[1]}</span>
            </div>
            {day.rows.map((row) => (
              <div key={row.time}>
                <dt>{row.time}</dt>
                <dd>{row.what}</dd>
              </div>
            ))}
          </dl>
          <p className="intro-prose winter-day-note">{day.note}</p>
        </div>
      </section>

      {/* What to bring */}
      <section className="panel grey" id="bring">
        <div className="container">
          <h2 className="section-headline">{bring.headline}</h2>
          <p className="intro-prose">{bring.body}</p>
        </div>
      </section>

      {/* Common questions — answers stay in the HTML inside <details> */}
      <section className="panel" id="faq">
        <div className="container">
          <h2 className="section-headline">{faq.headline}</h2>
          <div className="faq-accordion winter-faq">
            {faq.items.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>
                  <h3 className="faq-q">{item.question}</h3>
                </summary>
                <div className="faq-body">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Questions + the repeated register button the mobile section asks for */}
      <section className="panel charcoal" id="contact">
        <div className="container">
          <h2 className="section-headline">{contact.headline}</h2>
          <p className="section-sub">{contact.body}</p>
          <p className="section-sub winter-contact">
            {contact.name}, {contact.role} ·{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a> ·{" "}
            <a href={contact.phoneHref}>{contact.phoneText}</a>
          </p>
          <p className="camp-hero-cta winter-cta">
            <RegisterButton />
          </p>
          <p className="winter-updated">
            Last updated{" "}
            <time dateTime={WINTER_CAMP_LAST_UPDATED.iso}>
              {WINTER_CAMP_LAST_UPDATED.text}
            </time>
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(sessionsSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // FAQPage is a WebPage, so it can carry the dateModified the
          // specification asks for; the ItemList type cannot.
          __html: jsonLd({
            ...faqSchema(faq.items),
            dateModified: WINTER_CAMP_LAST_UPDATED.iso,
          }),
        }}
      />
    </>
  );
}
