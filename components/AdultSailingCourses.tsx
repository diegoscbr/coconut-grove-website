import { Fragment } from "react";

// Ported helpers for the Adult Sailing page. Course copy stays editable as plain
// strings; email addresses embedded in meta rows / seasonal lines are rendered as
// mailto links (matching the prototype's inline <a> anchors) with no extra fields.

const EMAIL_SPLIT = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
const isEmail = (s: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s);

/** Renders a string, turning any bare email address into a mailto: link. */
export function Linkify({ text }: { text?: string | null }) {
  if (!text) return null;
  const parts = text.split(EMAIL_SPLIT);
  return (
    <>
      {parts.map((seg, i) =>
        isEmail(seg) ? (
          <a key={i} href={`mailto:${seg}`}>
            {seg}
          </a>
        ) : (
          <Fragment key={i}>{seg}</Fragment>
        ),
      )}
    </>
  );
}

type CourseMetaRow = { dt: string; dd: string };
type Course = {
  name: string;
  tagline?: string;
  desc: string;
  image: string;
  meta: CourseMetaRow[];
};

/** A `.course-grid` of `.course-card` articles, exactly as the prototype markup. */
export function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="course-grid">
      {courses.map((course, i) => (
        <article key={i} className="course-card">
          {course.image ? (
            <div
              className="course-card-media"
              style={{ backgroundImage: `url('${course.image}')` }}
            ></div>
          ) : null}
          <div className="course-card-inner">
            <h3 className="course-name">{course.name}</h3>
            {course.tagline ? <p className="course-tagline">{course.tagline}</p> : null}
            {course.desc ? <p className="course-desc">{course.desc}</p> : null}
            <dl className="course-meta">
              {course.meta.map((row, j) => (
                <div key={j}>
                  <dt>{row.dt}</dt>
                  <dd>
                    <Linkify text={row.dd} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      ))}
    </div>
  );
}
