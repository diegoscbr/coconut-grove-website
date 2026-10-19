// Render-time label cleanup. Content files keep their copy exactly as the
// client wrote it; the typed "→" is a display concern, so it comes off here.
// Buttons show the bare label; text links get a drawn chevron (.link-more).

const TRAILING_ARROW = /\s*→\s*$/;

export function noArrow(label: string): string {
  return label.replace(TRAILING_ARROW, "");
}

/** "Diunieski "Koki" Gutierrez" → "DG". Nicknames in quotes are skipped. */
export function initials(name: string): string {
  return name
    .replace(/["“”][^"“”]*["“”]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
