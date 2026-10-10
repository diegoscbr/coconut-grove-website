import type { Metadata } from "next";
import Link from "next/link";
import { ADULT_SAILING_CONTENT } from "@/lib/content/adultSailing";
import { ADULT_PROGRAM_CONTENT } from "@/lib/content/adultProgram";
import { AdultProgram } from "@/components/AdultProgram";
import {
  courseSchema,
  faqSchema,
  jsonLd,
  sportsActivityLocationSchema,
} from "@/lib/schema";

// SEO fields come from Part 3 of the client's build specification
// "CGSCIC-Adult-Sailing_Updated.docx" — the title is absolute (no
// "· CGSC Instructional Center" template suffix, the string carries its own).
const { seo } = ADULT_SAILING_CONTENT;

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  alternates: { canonical: seo.canonical },
  openGraph: {
    type: "website",
    siteName: "CGSC Instructional Center",
    title: seo.title,
    description: seo.description,
    url: seo.canonical,
    images: [{ url: seo.ogImage, alt: seo.heroImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

// Part 3 asks for three structured-data blocks. All six certification courses
// are covered; the builders read the same content objects the page renders, so
// a copy edit cannot leave the schema behind.
const CERTIFICATION_COURSES = [
  ...ADULT_PROGRAM_CONTENT.pathway.courses,
  ...ADULT_PROGRAM_CONTENT.pathway.cruisingCourses,
];

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
          <p className="subhead">{hero.subhead}</p>
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

      {/* Adult program — lead, certification pathway, boat access, Flying Scot,
          clinics, instructors, FAQ, register */}
      <AdultProgram />

      {CERTIFICATION_COURSES.map((course) => (
        <script
          key={course.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(courseSchema(course)) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(faqSchema(ADULT_PROGRAM_CONTENT.faq.items)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(sportsActivityLocationSchema()),
        }}
      />
    </>
  );
}
