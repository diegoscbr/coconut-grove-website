import Link from "next/link";

// Canonical mobile drawer, ported 1:1. Open/close is wired by SiteScripts via
// the data-action / data-drawer-link attributes (same as the prototype).
export function MobileDrawer() {
  return (
    <div className="mobile-drawer" id="mobile-drawer" aria-hidden="true">
      <div className="mobile-drawer-head">
        <div className="wordmark">
          <img className="pen" src="/assets/cgsc-burgee.png" alt="CGSC burgee" />
          <span className="text">
            <span className="top">Instructional Center</span>
            <span className="bot">Coconut Grove · 1946</span>
          </span>
        </div>
        <button
          className="mobile-drawer-close"
          data-action="close-drawer"
          aria-label="Close menu"
          type="button"
        >
          ×
        </button>
      </div>
      <nav aria-label="Mobile">
        <Link href="/" data-drawer-link>
          Home
        </Link>
        <Link href="/about" data-drawer-link>
          About Us
        </Link>
        <Link href="/programs" data-drawer-link>
          Programs
        </Link>
        <Link href="/programs/adult-sailing" className="drawer-sub" data-drawer-link>
          Adult Sailing
        </Link>
        <Link href="/programs/race-team" className="drawer-sub" data-drawer-link>
          Racing Teams
        </Link>
        <Link
          href="/programs/camps-coaching"
          className="drawer-sub"
          data-drawer-link
        >
          Youth Sailing
        </Link>
        <Link href="/youth-regattas" data-drawer-link>
          Youth Regattas
        </Link>
        <Link href="/calendar" data-drawer-link>
          Calendar
        </Link>
        <Link href="/contact" data-drawer-link>
          Contact
        </Link>
      </nav>
      <Link href="/giving" className="drawer-cta" data-drawer-link>
        Give →
      </Link>
    </div>
  );
}
