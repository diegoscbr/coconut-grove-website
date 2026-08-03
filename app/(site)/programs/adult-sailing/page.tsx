import type { Metadata } from "next";
import Link from "next/link";
import { ADULT_SAILING_CONTENT } from "@/lib/content/adultSailing";
import { AdultProgram } from "@/components/AdultProgram";

// SEO fields come from the client's "CGSCIC-Adult-Sailing-Page - SEO Ready" doc —
// the title is absolute (no "· CGSC Instructional Center" template suffix).
export const metadata: Metadata = {
  title: { absolute: ADULT_SAILING_CONTENT.seo.title },
  description: ADULT_SAILING_CONTENT.seo.description,
};

export default function AdultSailingPage() {
  const { hero, subnav } = ADULT_SAILING_CONTENT;

  return (
    <>
      <section className="hero-compact has-hero-photo hero-adult">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">{hero.breadcrumbHome}</Link> <span className="sep">→</span>{" "}
            <Link href="/programs">{hero.breadcrumbPrograms}</Link> <span className="sep">→</span>{" "}
            {hero.breadcrumbCurrent}
          </p>
          <h1>{hero.h1}</h1>
          <p className="subhead">{hero.subhead}</p>
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

      {/* Adult program — lead, certification pathway, Flying Scot, clinics, register */}
      <AdultProgram />
    </>
  );
}
