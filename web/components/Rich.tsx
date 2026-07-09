import { Fragment } from "react";

/**
 * Renders a copy string with inline **bold** spans as <b>. Lets prose stay a
 * single editable Sanity string while preserving the prototype's bold lead-ins.
 * (A later pass can upgrade these fields to full Portable Text rich text.)
 */
export function Rich({ text }: { text?: string | null }) {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((seg, i) =>
        seg.startsWith("**") && seg.endsWith("**") ? (
          <b key={i}>{seg.slice(2, -2)}</b>
        ) : (
          <Fragment key={i}>{seg}</Fragment>
        ),
      )}
    </>
  );
}
