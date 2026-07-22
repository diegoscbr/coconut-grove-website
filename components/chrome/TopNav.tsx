"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Canonical top nav, ported 1:1 from the hand-copied block in the prototype.
// Active link is derived from the current path instead of a per-file .active.
export function TopNav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="topnav" role="banner">
      <div className="topnav-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="Coconut Grove Sailing Club Instructional Center, founded 1946"
        >
          <Image
            className="pen"
            src="/assets/cgscic-logo.png"
            alt="CGSC Instructional Center logo"
            width={273}
            height={200}
            priority
          />
          <span className="text">
            <span className="top">Instructional Center</span>
            <span className="bot">Coconut Grove Sailing Club · 1946</span>
          </span>
        </Link>
        <nav className="topnav-links" aria-label="Primary">
          <Link href="/" className={isActive("/") ? "active" : undefined}>
            Home
          </Link>
          <Link
            href="/about"
            className={isActive("/about") ? "active" : undefined}
          >
            About Us
          </Link>
          <div className="nav-item">
            <Link
              href="/programs"
              className={isActive("/programs") ? "active" : undefined}
            >
              Programs
            </Link>
            <div className="nav-dropdown">
              <Link href="/programs/adult-sailing">Adult Sailing</Link>
              <Link href="/programs/race-team">Racing Teams</Link>
              <Link href="/programs/camps-coaching">Youth Sailing</Link>
            </div>
          </div>
          <Link
            href="/youth-regattas"
            className={isActive("/youth-regattas") ? "active" : undefined}
          >
            Youth Regattas
          </Link>
          <Link
            href="/calendar"
            className={isActive("/calendar") ? "active" : undefined}
          >
            Calendar
          </Link>
          <Link
            href="/contact"
            className={isActive("/contact") ? "active" : undefined}
          >
            Contact
          </Link>
        </nav>
        <Link href="/giving" className="topnav-cta">
          Give →
        </Link>
        <button
          className="topnav-burger"
          aria-label="Open menu"
          data-action="open-drawer"
          type="button"
        >
          <span></span>
        </button>
      </div>
    </header>
  );
}
