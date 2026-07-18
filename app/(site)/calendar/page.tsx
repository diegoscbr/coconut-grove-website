import type { Metadata } from "next";
import { CALENDAR_CONTENT } from "@/lib/content/calendar";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Upcoming events, regattas, and news from the Instructional Center.",
};

export default function CalendarPage() {
  const { hero } = CALENDAR_CONTENT;

  return (
    <>
      <section className="hero-compact has-hero-photo hero-calendar">
        <div className="container">
          <p className="breadcrumb">
            <a href={hero.breadcrumbHomeHref}>{hero.breadcrumbHomeLabel}</a>{" "}
            <span className="sep">{hero.breadcrumbSep}</span> {hero.breadcrumbCurrent}
          </p>
          <h1>{hero.headline}</h1>
          <p className="subhead">
            {hero.subhead}
            <em>{hero.subheadEm}</em>
          </p>
          <span className="location-chip">{hero.locationChip}</span>
        </div>
      </section>
    </>
  );
}
