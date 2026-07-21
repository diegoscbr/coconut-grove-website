import type { Metadata } from "next";
import { CAMPS_COACHING_CONTENT } from "@/lib/content/campsCoaching";
import { SummerCamp2026 } from "@/components/SummerCamp2026";

export const metadata: Metadata = {
  title: "Youth Sailing",
  description:
    "Summer Camp 2026 registration is open — June 8 to August 7, ages 6–17. Youth sailing camps and private coaching at the Instructional Center on Biscayne Bay.",
};

export default function CampsCoachingPage() {
  const { hero } = CAMPS_COACHING_CONTENT;

  return (
    <>
      <section className="hero-compact has-hero-photo hero-camps">
        <div className="container">
          <p className="breadcrumb"><a href={hero.breadcrumbHomeHref}>{hero.breadcrumbHomeLabel}</a> <span className="sep">→</span> <a href={hero.breadcrumbProgramsHref}>{hero.breadcrumbProgramsLabel}</a> <span className="sep">→</span> {hero.breadcrumbCurrent}</p>
          <h1>{hero.h1}</h1>
          <p className="subhead">{hero.subheadBefore}<em>{hero.subheadEmphasis}</em>{hero.subheadAfter}</p>
          <span className="location-chip">{hero.locationChip}</span>
        </div>
      </section>

      {/* Summer Camp 2026 */}
      <SummerCamp2026 />
    </>
  );
}
