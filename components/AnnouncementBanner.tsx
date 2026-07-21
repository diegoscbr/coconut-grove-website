const MARQUEE_REPEATS = 8;

export type AnnouncementData = {
  message: string;
  href: string;
  ariaLabel: string;
};

/**
 * Scrolling announcement strip pinned to the top of the homepage, directly
 * under the top nav. The whole strip is one link; the marquee is pure CSS
 * (no client JS). Reduced-motion users get a static centered line instead.
 */
export function AnnouncementBanner({ announcement }: { announcement: AnnouncementData | null | undefined }) {
  if (!announcement) return null;

  const items = Array.from({ length: MARQUEE_REPEATS }, (_, i) => (
    <span key={i} className="announce-item">
      {announcement.message}
      <span className="announce-sep">→</span>
    </span>
  ));

  return (
    <a href={announcement.href} className="announce-banner" aria-label={announcement.ariaLabel}>
      <div className="announce-track" aria-hidden="true">
        {/* Two identical groups make the loop seamless: the track slides -50%. */}
        <div className="announce-group">{items}</div>
        <div className="announce-group">{items}</div>
      </div>
      <span className="announce-static" aria-hidden="true">
        {announcement.message}
        <span className="announce-sep">→</span>
      </span>
    </a>
  );
}
