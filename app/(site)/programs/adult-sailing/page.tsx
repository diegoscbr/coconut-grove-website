import type { Metadata } from "next";
import Link from "next/link";
import { ADULT_SAILING_CONTENT } from "@/lib/content/adultSailing";
import { AdultProgram } from "@/components/AdultProgram";

export const metadata: Metadata = {
  title: "Adult Sailing",
  description:
    "US Sailing certification courses from Basic Keelboat to Celestial Navigation, free Wednesday night community sailing, and racing clinics for adults on Biscayne Bay.",
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
          <p className="subhead">
            {hero.subheadPre}
            <em>{hero.subheadEmphasis}</em>
            {hero.subheadPost}
          </p>
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
