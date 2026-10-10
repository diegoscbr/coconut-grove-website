import Link from "next/link";
import { Rich } from "@/components/Rich";
import type { LegalDoc } from "@/lib/content/legalDoc";

/**
 * Renders a policy page from a LegalDoc. Three routes share this: /privacy,
 * /terms and /accessibility. Reuses the site's existing hero, panel and
 * intro-prose classes so the pages read as part of the site, not bolted on.
 */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  const { hero, effective, intro, sections, contact } = doc;

  return (
    <>
      <section className="hero-compact">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> <span className="sep">→</span>{" "}
            {hero.breadcrumbCurrent}
          </p>
          <h1>{hero.headline}</h1>
          <p className="subhead">{hero.subhead}</p>
        </div>
      </section>

      <section className="panel">
        <div className="container">
          <p className="legal-effective">{effective}</p>
          <div className="legal-doc">
            {intro.map((para, i) => (
              <p key={i} className="intro-prose">
                <Rich text={para} />
              </p>
            ))}

            {sections.map((section) => (
              <section key={section.heading} className="legal-section">
                <h2>{section.heading}</h2>
                {section.body?.map((para, i) => (
                  <p key={i}>
                    <Rich text={para} />
                  </p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((item, i) => (
                      <li key={i}>
                        <Rich text={item} />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="legal-section">
              <h2>{contact.heading}</h2>
              <p>
                <Rich text={contact.lead} />
              </p>
              <p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <br />
                {contact.address.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < contact.address.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
