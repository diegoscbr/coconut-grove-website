import type { Metadata } from "next";
import { Fragment } from "react";
import { SAMPLE_STORY_CONTENT } from "@/lib/content/sampleStory";
import { Rich } from "@/components/Rich";

export const metadata: Metadata = {
  title: "Story",
  description:
    "News from the Instructional Center on Biscayne Bay.",
};

type Part = { text: string; href?: string; em?: boolean };

function renderPart(part: Part, i: number) {
  if (part.href) {
    return (
      <a key={i} href={part.href}>
        {part.text}
      </a>
    );
  }
  if (part.em) {
    return <em key={i}>{part.text}</em>;
  }
  return <Rich key={i} text={part.text} />;
}

export default function SampleStoryPage() {
  const {
    hero,
    article,
    related,
  } = SAMPLE_STORY_CONTENT;

  return (
    <>
      <section className="hero-compact">
        <div className="container">
          <p className="breadcrumb">
            {hero.crumbs.map((crumb, i) => (
              <Fragment key={i}>
                <a href={crumb.href}>{crumb.label}</a> <span className="sep">{hero.crumbSep}</span>{" "}
              </Fragment>
            ))}
            {hero.crumbCurrent}
          </p>
          <h1>{hero.title}</h1>
          <p className="subhead">
            <em>{hero.subheadEm}</em>
            {hero.subheadRest}
          </p>
        </div>
      </section>

      <article className="panel">
        <div className="container">
          <div className="article-meta">
            <span className="cat">{article.meta.cat}</span>
            <span className="byline">{article.meta.byline}</span>
            <span>{article.meta.info}</span>
          </div>

          <div className="article-lead-img" role="img" aria-label={article.leadImgLabel}></div>

          <div className="article-body">
            {article.body.map((block, i) => {
              if (block.kind === "h2") {
                return <h2 key={i}>{block.text}</h2>;
              }
              if (block.kind === "quote") {
                return (
                  <blockquote key={i}>
                    {(block.parts ?? []).map(renderPart)}
                    <cite>{block.cite}</cite>
                  </blockquote>
                );
              }
              return <p key={i}>{(block.parts ?? []).map(renderPart)}</p>;
            })}
          </div>

          <p style={{ marginTop: 48, textAlign: "center" }}>
            <a href={article.backHref} className="btn-primary">
              {article.backLabel}
            </a>
          </p>
        </div>
      </article>

      {/* Related */}
      <section className="panel grey">
        <div className="container">
          <p className="section-eyebrow">{related.eyebrow}</p>
          <h2 className="section-headline">{related.headline}</h2>

          <div className="preview-grid">
            {related.cards.map((card, i) => (
              <a key={i} href={card.href} className="preview-card">
                <div className={`preview-card-media ${card.mediaClass}`.trim()}></div>
                <div className="preview-card-body">
                  <p
                    className={
                      card.eyebrowClass
                        ? `preview-card-eyebrow ${card.eyebrowClass}`
                        : "preview-card-eyebrow"
                    }
                  >
                    {card.eyebrow}
                  </p>
                  <h3 className="preview-card-title">{card.title}</h3>
                  <p className="preview-card-meta">{card.meta}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
