import type { Metadata } from "next";
import { GIVING_CONTENT } from "@/lib/content/giving";
import { Rich } from "@/components/Rich";

export const metadata: Metadata = {
  title: "Giving",
  description:
    "Support the Instructional Center — a 501(c)(3) nonprofit teaching sailing on Biscayne Bay.",
};

export default function GivingPage() {
  const { hero, whyGive, checks, giveOnline } = GIVING_CONTENT;

  return (
    <>
      <section className="hero-compact has-hero-photo hero-giving">
        <div className="container">
          <p className="breadcrumb">
            <a href={hero.breadcrumbHomeHref}>{hero.breadcrumbHomeLabel}</a>{" "}
            <span className="sep">{hero.breadcrumbSep}</span> {hero.breadcrumbCurrent}
          </p>
          <h1>{hero.headline}</h1>
          <p className="subhead">{hero.subhead}</p>
          <span className="location-chip">{hero.locationChip}</span>
        </div>
      </section>

      <section className="panel">
        <div className="container">
          <p className="section-eyebrow">{whyGive.eyebrow}</p>
          <h2 className="section-headline">{whyGive.headline}</h2>
          <p className="intro-prose">
            <Rich text={whyGive.prose1} />
          </p>
          <ul className="giving-legal">
            {whyGive.legalLines.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Give by check */}
      <section className="panel grey">
        <div className="container">
          <p className="section-eyebrow">{checks.eyebrow}</p>
          <p className="intro-prose">
            <Rich text={checks.intro} />
          </p>
          <p className="giving-address">
            {checks.address.map((line, i) => (
              <span key={i}>
                {line}
                {i < checks.address.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="panel">
        <div className="container">
          <p className="section-eyebrow">{giveOnline.eyebrow}</p>
          <h2 className="section-headline">{giveOnline.headline}</h2>
          <p className="intro-prose">{giveOnline.sub}</p>

          <ul className="give-tiers">
            {giveOnline.tiers.map((tier) => (
              <li key={tier.amount}>
                <b>{tier.amount}</b>
                <span>{tier.line}</span>
              </li>
            ))}
          </ul>
          <p className="give-tiers-note">{giveOnline.tiersNote}</p>

          <p style={{ marginTop: 24 }}>
            <a
              href={giveOnline.ctaHref}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {giveOnline.ctaLabel}
            </a>
          </p>

          <p className="intro-prose" style={{ marginTop: 24 }}>
            {giveOnline.aside}{" "}
            <a href={giveOnline.asideCtaHref}>{giveOnline.asideCtaLabel}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
