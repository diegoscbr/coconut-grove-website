import type { Metadata } from "next";
import Link from "next/link";
import {
  CAMP_POLICIES_CONTENT,
  CAMP_POLICIES_LAST_UPDATED,
  campPoliciesToc,
} from "@/lib/content/campPolicies";
import { jsonLd } from "@/lib/schema";

const c = CAMP_POLICIES_CONTENT;

export const metadata: Metadata = {
  title: { absolute: c.seo.title },
  description: c.seo.description,
  alternates: { canonical: c.seo.canonical },
  openGraph: {
    type: "website",
    siteName: "Coconut Grove Sailing Club Instructional Center",
    title: c.seo.title,
    description: c.seo.description,
    url: c.seo.canonical,
  },
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="policy-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function CampPoliciesPage() {
  const toc = campPoliciesToc();

  return (
    <>
      <section className="hero-compact has-hero-photo hero-camps">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> <span className="sep">/</span>{" "}
            <Link href="/programs">Programs</Link> <span className="sep">/</span>{" "}
            {c.hero.breadcrumbCurrent}
          </p>
          <h1>{c.hero.h1}</h1>
          <p className="subhead">{c.hero.subhead}</p>
        </div>
      </section>

      <section className="panel">
        <div className="container policy-layout">
          <nav className="policy-toc" aria-label={c.tocLabel}>
            <p className="policy-toc-head">{c.tocLabel}</p>
            {toc.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="policy-body">
            <section className="policy-sec" id={c.day.id}>
              <h2 className="section-headline">{c.day.headline}</h2>
              <dl className="winter-day">
                {c.day.rows.map((row) => (
                  <div key={row.time}>
                    <dt>{row.time}</dt>
                    <dd>{row.what}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="policy-sec" id={c.bring.id}>
              <h2 className="section-headline">{c.bring.headline}</h2>
              <p className="intro-prose">{c.bring.intro}</p>
              <h3 className="policy-sub">{c.bring.required.label}</h3>
              <BulletList items={c.bring.required.items} />
              <p className="policy-note">{c.bring.required.sunLabel}</p>
              <BulletList items={c.bring.required.sun} />
              <h3 className="policy-sub">{c.bring.clothing.label}</h3>
              <BulletList items={c.bring.clothing.items} />
              <p className="policy-callout">{c.bring.callout}</p>
            </section>

            <section className="policy-sec" id={c.touch.id}>
              <h2 className="section-headline">{c.touch.headline}</h2>
              <p className="intro-prose">{c.touch.intro}</p>
              <ul className="policy-list">
                {c.touch.groups.map((g) => (
                  <li key={g.name}>
                    <b>{g.name}:</b> {g.body}
                  </li>
                ))}
              </ul>
              <p className="policy-callout">{c.touch.callout}</p>
              <h3 className="policy-sub">{c.touch.photos.headline}</h3>
              <p className="intro-prose">{c.touch.photos.body}</p>
            </section>

            <section className="policy-sec" id={c.dropoff.id}>
              <h2 className="section-headline">{c.dropoff.headline}</h2>
              {c.dropoff.blocks.map((b) => (
                <div key={b.headline}>
                  <h3 className="policy-sub">{b.headline}</h3>
                  <p className="intro-prose">{b.body}</p>
                </div>
              ))}
            </section>

            <section className="policy-sec" id={c.parking.id}>
              <h2 className="section-headline">{c.parking.headline}</h2>
              <p className="intro-prose">{c.parking.body}</p>
            </section>

            <section className="policy-sec" id={c.weather.id}>
              <h2 className="section-headline">{c.weather.headline}</h2>
              <p className="policy-callout">{c.weather.strong}</p>
              <p className="intro-prose">{c.weather.body}</p>
            </section>

            <section className="policy-sec" id={c.refund.id}>
              <h2 className="section-headline">{c.refund.headline}</h2>
              {c.refund.paragraphs.map((p) => (
                <p key={p} className="intro-prose">
                  {p}
                </p>
              ))}
            </section>

            <section className="policy-sec" id={c.conduct.id}>
              <h2 className="section-headline">{c.conduct.headline}</h2>
              <p className="intro-prose">{c.conduct.body}</p>
              <p className="intro-prose">
                <Link href={c.conduct.linkHref} className="link-more">
                  {c.conduct.linkLabel}
                </Link>
              </p>
            </section>

            <section className="policy-sec" id={c.parents.id}>
              <h2 className="section-headline">{c.parents.headline}</h2>
              <h3 className="policy-sub">{c.parents.dont.label}</h3>
              <BulletList items={c.parents.dont.items} />
              <h3 className="policy-sub">{c.parents.do.label}</h3>
              <BulletList items={c.parents.do.items} />
            </section>

            <section className="policy-sec policy-contact" id={c.contact.id}>
              <h2 className="section-headline">{c.contact.headline}</h2>
              <p className="intro-prose">
                <b>
                  {c.contact.name}, {c.contact.role}
                </b>
                <br />
                <a href={`mailto:${c.contact.email}`}>{c.contact.email}</a> ·{" "}
                <a href={c.contact.phoneHref}>{c.contact.phoneText}</a>
              </p>
              <p className="winter-updated">
                Last updated{" "}
                <time dateTime={CAMP_POLICIES_LAST_UPDATED.iso}>
                  {CAMP_POLICIES_LAST_UPDATED.text}
                </time>
              </p>
            </section>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: c.hero.h1,
            url: c.seo.canonical,
            dateModified: CAMP_POLICIES_LAST_UPDATED.iso,
          }),
        }}
      />
    </>
  );
}
