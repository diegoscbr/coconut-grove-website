import type { Metadata } from "next";
import { CALENDAR_CONTENT } from "@/lib/content/calendar";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Upcoming events, regattas, and news from the Instructional Center.",
};

export default function CalendarPage() {
  const { hero, embed, newsletter } = CALENDAR_CONTENT;

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

      {/* Google Calendar embed (renders once embed.src is set in lib/content/calendar.ts) */}
      <section className="panel">
        <div className="container">
          <p className="section-eyebrow">{embed.eyebrow}</p>
          <h2 className="section-headline">{embed.headline}</h2>
          <div className="calendar-embed">
            {embed.src ? (
              <iframe
                src={embed.src}
                title="CGSC Instructional Center event calendar"
                loading="lazy"
              />
            ) : (
              <div className="calendar-embed-placeholder">
                <span className="placeholder-chip">{embed.placeholderTag}</span>
                <p>{embed.placeholderNote}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter · coming soon */}
      <section className="phase-placeholder">
        <div className="container">
          <span className="placeholder-tag">{newsletter.tag}</span>
          <h3 className="placeholder-h">{newsletter.headline}</h3>
          <p className="placeholder-sub">{newsletter.sub}</p>
        </div>
      </section>
    </>
  );
}
