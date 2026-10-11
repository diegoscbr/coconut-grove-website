import Image from "next/image";
import Link from "next/link";

// Canonical footer, ported 1:1 from the prototype (incl. TBD chips).
// The newsletter band was removed 2026-10-09: its capture webhook was never
// configured, so every signup 503d and was dropped. Restore with one revert
// once NEWSLETTER_SHEET_WEBHOOK exists — and update /privacy in the same PR.
export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-sitemap">
        <div className="container">
          <div className="footer-sitemap-row">
            <div className="footer-mark">
              <Image
                className="pen"
                src="/assets/cgscic-logo.png"
                alt="CGSC Instructional Center logo"
                width={273}
                height={200}
              />
              <div>
                <div className="top">Instructional Center</div>
                <div className="bot">Coconut Grove Sailing Club · 1946</div>
              </div>
              <a
                className="footer-club-link"
                href="https://cgsc.org"
                target="_blank"
                rel="noopener"
              >
                Coconut Grove Sailing Club — Membership, Moorings &amp; Club Life →
              </a>
            </div>
            <div className="footer-col">
              <h6>Explore</h6>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/youth-regattas">Youth Regattas</Link>
                </li>
                <li>
                  <Link href="/calendar">Calendar</Link>
                </li>
                <li>
                  <Link href="/giving">Giving</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h6>Programs</h6>
              <ul>
                <li>
                  <Link href="/programs/adult-sailing">Adult Sailing</Link>
                </li>
                <li>
                  <Link href="/programs/race-team">Racing Teams</Link>
                </li>
                <li>
                  <Link href="/programs/camps-coaching">Youth Sailing</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h6>Useful Links</h6>
              <ul>
                <li>
                  <a
                    href="https://www.ussailing.org"
                    target="_blank"
                    rel="noopener"
                  >
                    US Sailing
                  </a>
                </li>
                <li>
                  <a href="https://cgsc.org" target="_blank" rel="noopener">
                    CGSC
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.vakaros.com/en-eu"
                    target="_blank"
                    rel="noopener"
                  >
                    Vakaros
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nobmultisports.com/en/"
                    target="_blank"
                    rel="noopener"
                  >
                    NOBs
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h6>Follow</h6>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/CoconutGroveSailingClubInstructionalCenter"
                    target="_blank"
                    rel="noopener"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/cgscic_/"
                    target="_blank"
                    rel="noopener"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="footer-legal">
            CGSC Instructional Center (CGSCIC) is a 501(c)(3) nonprofit
            organization dedicated to expanding access to sailing and youth
            development on the water. Your gift directly supports our youth
            sailing program through scholarships, equipment maintenance and
            capital purchases that make it possible for CGSCIC to empower the
            next generation of sailors.
          </p>
          {/* Punch list S9 — SMS compliance disclosure. Treat as a compliance
              artifact, not marketing copy: do not reword it further.

              Two deliberate departures from the text Peter supplied, both
              recorded here so nobody "restores" it to match the punch list:
                1. The two pages it names are links now, and those pages exist
                   (S4, pulled off hold by Peter 2026-10-09).
                2. "Instruction Center" in the first sentence is corrected to
                   "Instructional Center" (Diego, 2026-10-10). Peter's text had
                   it both ways in consecutive sentences; this was the only
                   place on the site missing the "-al", and the entity's name
                   is a locked brand decision. Flagged to Peter and Anita. */}
          <p className="footer-sms">
            You can text Coconut Grove Sailing Club Instructional Center for
            information regarding our sailing programs and program registration.
            By texting CGSCIC, you agree to receive conversational messages from
            Coconut Grove Sailing Club Instructional Center. Reply STOP to
            opt-out; Reply HELP for support; Message &amp; data rates may apply;
            Messaging frequency may vary. For more information, please visit our{" "}
            <Link href="/privacy">Privacy Policy</Link> page or our{" "}
            <Link href="/terms">Terms of Service</Link> page.
          </p>
          <div className="footer-bottom">
            <span>
              © 2026 Coconut Grove Sailing Club Instructional Center · 2990 S.
              Bayshore Drive, Miami, FL 33133
            </span>
            <div className="legal">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/accessibility">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
