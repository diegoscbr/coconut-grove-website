import type { Metadata } from "next";
import Link from "next/link";
import { REGISTER_CONTENT } from "@/lib/content/register";
import { noArrow } from "@/lib/label";

export const metadata: Metadata = REGISTER_CONTENT.seo;

export default function RegisterPage() {
  const { hero, routes, help } = REGISTER_CONTENT;

  return (
    <>
      <section className="hero-compact has-hero-photo hero-programs">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> <span className="sep">/</span>{" "}
            {hero.breadcrumbCurrent}
          </p>
          <h1>{hero.headline}</h1>
          <p className="subhead">{hero.subhead}</p>
          <span className="location-chip">{hero.locationChip}</span>
        </div>
      </section>

      <section className="panel">
        <div className="container">
          <div className="register-grid">
            {routes.map((route) => (
              <div key={route.title} className="register-card">
                <p className="register-eyebrow">{route.eyebrow}</p>
                <h2 className="register-title">{route.title}</h2>
                <dl className="register-meta">
                  <div>
                    <dt>Who</dt>
                    <dd>{route.who}</dd>
                  </div>
                  <div>
                    <dt>Season</dt>
                    <dd>{route.season}</dd>
                  </div>
                </dl>
                <p className="register-body">{route.body}</p>
                <div className="register-actions">
                  {route.external ? (
                    <a
                      href={route.ctaHref}
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {noArrow(route.ctaLabel)}
                    </a>
                  ) : (
                    <Link href={route.ctaHref} className="btn-primary">
                      {noArrow(route.ctaLabel)}
                    </Link>
                  )}
                  <Link href={route.detailHref} className="register-detail">
                    {route.detailLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel grey">
        <div className="container">
          <p className="section-eyebrow">{help.eyebrow}</p>
          <h2 className="section-headline">{help.headline}</h2>
          <p className="intro-prose">{help.prose}</p>
          <p style={{ marginTop: 20 }}>
            <Link href={help.ctaHref} className="btn-primary">
              {noArrow(help.ctaLabel)}
            </Link>
          </p>
          <p className="pathway-offramp" style={{ marginTop: 20 }}>
            {help.contactPre}
            <Link href={help.contactHref} className="link-more">{noArrow(help.contactLinkText)}</Link>
            {help.contactPost}
          </p>
        </div>
      </section>
    </>
  );
}
