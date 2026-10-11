import type { Metadata } from "next";
import { PARENT_GUIDE_CONTENT } from "@/lib/content/parentGuide";
import Link from "next/link";
import { Rich } from "@/components/Rich";

export const metadata: Metadata = PARENT_GUIDE_CONTENT.seo;

export default function ParentGuidePage() {
  const { hero, intro, comparison, next, registrationUrl } =
    PARENT_GUIDE_CONTENT;

  return (
    <>
      <section className="hero-compact has-hero-photo hero-camps">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> <span className="sep">→</span>{" "}
            <Link href="/programs">Programs</Link> <span className="sep">→</span>{" "}
            {hero.breadcrumbCurrent}
          </p>
          <h1>{hero.headline}</h1>
          <p className="subhead">{hero.subhead}</p>
          <span className="location-chip">{hero.locationChip}</span>
        </div>
      </section>

      <section className="panel">
        <div className="container">
          <p className="section-eyebrow">{intro.eyebrow}</p>
          <h2 className="section-headline">{intro.headline}</h2>
          {intro.prose.map((para, i) => (
            <p key={i} className="intro-prose">
              <Rich text={para} />
            </p>
          ))}
        </div>
      </section>

      <section className="panel grey">
        <div className="container">
          <p className="section-eyebrow">{comparison.eyebrow}</p>
          <h2 className="section-headline">{comparison.headline}</h2>
          <p className="intro-prose">{comparison.lead}</p>

          <div className="compare-wrap">
            <table className="compare-table">
              <caption className="sr-only">
                Youth sailing programs compared by age range, days per week, and
                member and non-member fees.
              </caption>
              <thead>
                <tr>
                  {comparison.columns.map((column) => (
                    <th key={column} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr key={row.program}>
                    <th scope="row">{row.program}</th>
                    <td>{row.ages}</td>
                    <td>{row.days}</td>
                    <td>{row.memberFee}</td>
                    <td>{row.nonMemberFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="giving-legal">
            {comparison.footnotes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>

          <p style={{ marginTop: 20 }}>
            <Link href={comparison.ctaHref} className="btn-primary">
              {comparison.ctaLabel}
            </Link>
          </p>
        </div>
      </section>

      <section className="panel">
        <div className="container">
          <p className="section-eyebrow">{next.eyebrow}</p>
          <h2 className="section-headline">{next.headline}</h2>
          <p className="intro-prose">{next.prose}</p>
          <p style={{ marginTop: 20 }}>
            <a
              href={registrationUrl}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {next.registerLabel}
            </a>
          </p>
          <p className="intro-prose" style={{ marginTop: 20 }}>
            <b>{next.contactName}</b>, {next.contactRole}
            <br />
            <a href={`mailto:${next.contactEmail}`}>{next.contactEmail}</a>
          </p>
        </div>
      </section>
    </>
  );
}
