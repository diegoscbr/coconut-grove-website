import type { Metadata } from "next";
import Link from "next/link";
import { FALL_YOUTH_CONTENT } from "@/lib/content/fallYouth";
import { FallYouth2026 } from "@/components/FallYouth2026";

// SEO fields come from the client's "Fall-Youth-Sailing-SEO Ready" doc —
// the title is absolute (no "· CGSC Instructional Center" template suffix).
export const metadata: Metadata = {
  title: { absolute: FALL_YOUTH_CONTENT.seo.title },
  description: FALL_YOUTH_CONTENT.seo.description,
};

export default function CampsCoachingPage() {
  const { hero } = FALL_YOUTH_CONTENT;

  return (
    <>
      <section className="hero-compact has-hero-photo hero-camps">
        <div className="container">
          <p className="breadcrumb">
            <Link href={hero.breadcrumbHomeHref}>{hero.breadcrumbHomeLabel}</Link>{" "}
            <span className="sep">→</span>{" "}
            <Link href={hero.breadcrumbProgramsHref}>{hero.breadcrumbProgramsLabel}</Link>{" "}
            <span className="sep">→</span> {hero.breadcrumbCurrent}
          </p>
          <h1>{hero.h1}</h1>
          <p className="subhead">{hero.subhead}</p>
          <span className="location-chip">{hero.locationChip}</span>
        </div>
      </section>

      {/* 2026 Fall Youth Sailing */}
      <FallYouth2026 />
    </>
  );
}
