import Image from "next/image";
import Link from "next/link";

// Canonical footer, ported 1:1 from the prototype (incl. TBD chips).
export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-newsletter">
        <div className="container">
          <div className="footer-newsletter-row">
            <div>
              <h2 className="footer-news-h">
                Stay in the loop with the Instructional Center.
              </h2>
            </div>
            <form className="footer-news-form" data-form-newsletter noValidate>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                aria-label="Email address"
                required
              />
              {/* Honeypot — hidden from humans, bots fill it and get filtered */}
              <input
                type="text"
                name="company"
                className="hp-field"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <button type="submit">Subscribe</button>
              <p className="footer-news-msg" data-news-msg role="status"></p>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-sitemap">
        <div className="container">
          <div className="footer-sitemap-row">
            <div className="footer-mark">
              <Image
                className="pen"
                src="/assets/cgsc-burgee.png"
                alt="CGSC burgee"
                width={252}
                height={168}
              />
              <div>
                <div className="top">Instructional Center</div>
                <div className="bot">Coconut Grove · 1946</div>
              </div>
              <a
                className="footer-club-link"
                href="https://cgsc.org"
                target="_blank"
                rel="noopener"
              >
                Main Club Site · cgsc.org →
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
          <div className="footer-bottom">
            <span>
              © 2026 Coconut Grove Sailing Club Instructional Center · 2990 S.
              Bayshore Drive, Miami, FL 33133
            </span>
            <div className="legal">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
