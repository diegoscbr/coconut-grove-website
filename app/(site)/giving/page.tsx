import type { Metadata } from "next";
import { GIVING_CONTENT } from "@/lib/content/giving";
import { GIVE_MIAMI_DAY_URL, isGiveMiamiDayLive } from "@/lib/giveMiamiDay";
import { jsonLd } from "@/lib/schema";
import { Rich } from "@/components/Rich";

const { seo } = GIVING_CONTENT;

// A function, not a const: the title and description switch to the
// post-campaign wording after November 19, and a module-level const would be
// evaluated once per server instance and could outlive the cutoff.
export function generateMetadata(): Metadata {
  const live = isGiveMiamiDayLive();
  const { title, description } = live ? seo.campaign : seo.afterCampaign;
  // The specification gives Open Graph a slightly different description during
  // the campaign; afterwards all three read the same.
  const socialDescription = live ? seo.campaign.socialDescription : description;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: seo.canonical },
    openGraph: {
      type: "website",
      siteName: "Coconut Grove Sailing Club Instructional Center",
      title,
      description: socialDescription,
      url: seo.canonical,
      images: [{ url: seo.ogImage, alt: seo.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: socialDescription,
      images: [seo.ogImage],
    },
  };
}

/**
 * Appendix 3 of the specification, verbatim. After November 19 the
 * specification swaps in a version whose donate target is a year-round URL
 * that has not been supplied; until it is, the post-campaign block carries the
 * organization alone rather than a DonateAction pointing at nothing.
 */
function ngoSchema(live: boolean) {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": "https://cgscic.org/#organization",
    name: "Coconut Grove Sailing Club Instructional Center",
    legalName: "Coconut Grove Sailing Club Instructional Center",
    url: "https://cgscic.org",
    nonprofitStatus: "Nonprofit501c3",
    description:
      "A 501(c)(3) nonprofit sailing school on Biscayne Bay in Coconut Grove, Miami, teaching youth and adults to sail.",
    telephone: "+1-305-747-2600",
    email: "icmanager@cgsc.org",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2990 South Bayshore Drive",
      addressLocality: "Miami",
      addressRegion: "FL",
      postalCode: "33133",
      addressCountry: "US",
    },
    ...(live
      ? {
          potentialAction: {
            "@type": "DonateAction",
            name: "Donate for Give Miami Day",
            startTime: "2026-11-14",
            endTime: "2026-11-19",
            target: {
              "@type": "EntryPoint",
              urlTemplate: GIVE_MIAMI_DAY_URL,
              actionPlatform: [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform",
              ],
            },
          },
        }
      : {}),
  };
}

export default function GivingPage() {
  const live = isGiveMiamiDayLive();
  const { hero, mission, impact, levels, matching, otherWays } = GIVING_CONTENT;
  const { check, sponsorship } = otherWays;

  return (
    <>
      {/* Hero. Mobile order per the specification: headline, body, date
          block, button. Donate links open in the same tab ("a new tab loses
          mobile donors"). */}
      <section className="hero-compact has-hero-photo hero-giving giving-hero">
        <div className="container">
          <p className="giving-hero-eyebrow">{hero.eyebrow}</p>
          <h1>{hero.headline}</h1>
          <p className="subhead">
            {hero.body}
            {live ? <> {hero.goal}</> : null}
          </p>
          {live ? (
            <>
              <div className="giving-dates">
                {hero.dateBlock.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <p className="giving-hero-cta">
                <a href={hero.ctaHref} className="btn-register">
                  {hero.ctaLabel}
                </a>
              </p>
            </>
          ) : null}
        </div>
      </section>

      {/* Our Mission */}
      <section className="panel">
        <div className="container giving-mission">
          <div className="giving-mission-aside">
            <p className="section-eyebrow">{mission.label}</p>
            <p className="giving-mission-statement">{mission.statement}</p>
          </div>
          <div>
            <h2 className="section-headline">{mission.headline}</h2>
            {mission.body.map((para, i) => (
              <p key={i} className="intro-prose">
                <Rich text={para} />
              </p>
            ))}
            <p className="giving-pullout">{mission.pullOut}</p>
          </div>
        </div>
      </section>

      {/* Impact by the numbers */}
      <section className="panel charcoal">
        <div className="container">
          <p className="section-eyebrow">{impact.eyebrow}</p>
          <h2 className="section-headline">{impact.headline}</h2>
          <div className="stats-grid giving-stats">
            {impact.figures.map((item) => (
              <div key={item.figure} className="stat-tile">
                <p className="num">{item.figure}</p>
                <p className="giving-stat-caption">
                  <Rich text={item.caption} />
                </p>
              </div>
            ))}
          </div>
          {live ? <p className="giving-closing">{impact.closingLine}</p> : null}
        </div>
      </section>

      {/* Gift levels */}
      <section className="panel grey">
        <div className="container">
          <h2 className="section-headline">{levels.headline}</h2>
          <ul className="gift-levels">
            {levels.items.map((level) => (
              <li
                key={level.amount}
                className={level.featuredTag ? "gift-level featured" : "gift-level"}
              >
                {level.featuredTag ? (
                  <span className="gift-level-tag">{level.featuredTag}</span>
                ) : null}
                <p className="gift-level-amount">{level.amount}</p>
                <p className="gift-level-does">{level.does}</p>
              </li>
            ))}
          </ul>
          <p className="giving-cta-row">
            <a href={levels.ctaHref} className="btn-register">
              {levels.ctaLabel}
            </a>
          </p>
        </div>
      </section>

      {/* Fund a matching grant — campaign only */}
      {live ? (
        <section className="panel">
          <div className="container">
            <p className="section-eyebrow">{matching.eyebrow}</p>
            <h2 className="section-headline">{matching.headline}</h2>
            {matching.body.map((para, i) => (
              <p key={i} className="intro-prose">
                {para}
              </p>
            ))}
            <p className="giving-cta-row">
              <a href={matching.ctaHref} className="btn-primary">
                {matching.ctaLabel}
              </a>
            </p>
          </div>
        </section>
      ) : null}

      {/* Other ways to give — below the online ask, by the specification */}
      <section className="panel grey">
        <div className="container">
          <h2 className="sr-only">{otherWays.headline}</h2>
          <div className="giving-other">
            <div>
              <h3 className="camp-sub">{check.headline}</h3>
              <p className="intro-prose">{check.intro}</p>
              <p className="giving-address">
                {check.address.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < check.address.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
            <div>
              <h3 className="camp-sub">{sponsorship.headline}</h3>
              <p className="intro-prose">{sponsorship.body}</p>
              <p className="giving-address">
                <b>{sponsorship.name}</b>
                <br />
                {sponsorship.role}
                <br />
                <a href={`mailto:${sponsorship.email}`}>{sponsorship.email}</a>
                <br />
                <a href={sponsorship.phoneHref}>{sponsorship.phoneText}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(ngoSchema(live)) }}
      />
    </>
  );
}
