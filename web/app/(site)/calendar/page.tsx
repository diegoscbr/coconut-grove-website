import { sanityFetch } from "@/sanity/lib/live";
import { CALENDAR_QUERY } from "@/sanity/lib/queries";
import { CALENDAR_CONTENT, type CalendarContent } from "@/lib/content/calendar";

export const dynamic = "force-dynamic";

export default async function CalendarPage() {
  const { data } = await sanityFetch({ query: CALENDAR_QUERY });
  const c = ((data as Partial<CalendarContent> | null) ?? {}) as CalendarContent;
  const { hero = CALENDAR_CONTENT.hero } = c;

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
