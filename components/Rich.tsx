import { Fragment } from "react";

/**
 * Renders a copy string with inline **bold** spans as <b> and [text](href)
 * spans as links. Lets prose stay a single editable string while preserving
 * the prototype's bold lead-ins and in-copy links.
 */
export function Rich({ text }: { text?: string | null }) {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((seg, i) => {
        if (seg.startsWith("**") && seg.endsWith("**")) {
          return <b key={i}>{seg.slice(2, -2)}</b>;
        }
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(seg);
        if (link) {
          return (
            <a key={i} href={link[2]}>
              {link[1]}
            </a>
          );
        }
        return <Fragment key={i}>{seg}</Fragment>;
      })}
    </>
  );
}
