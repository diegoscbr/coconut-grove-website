import { TopNav } from "@/components/chrome/TopNav";
import { Footer } from "@/components/chrome/Footer";
import { MobileDrawer } from "@/components/chrome/MobileDrawer";
import { StickyCTA } from "@/components/chrome/StickyCTA";
import { SiteScripts } from "@/components/SiteScripts";
import { giveButton } from "@/lib/giveMiamiDay";

// Hourly ISR so the Give Miami Day button and campaign copy switch off on
// their own after November 19 (lib/giveMiamiDay.ts). Without this every route
// is fully static and would keep the campaign label until the next deploy.
export const revalidate = 3600;

// Layout for the public site. The embedded Studio at /studio lives outside this
// group, so it never gets the site chrome.
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Resolved on the server and passed down, so the client-rendered nav cannot
  // disagree with the server HTML near the cutoff.
  const give = giveButton();

  return (
    <>
      {/* First focusable element on every page, so a keyboard or screen reader
          user can jump the nav. Claimed by /accessibility, so keep it first. */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <TopNav give={give} />
      <main id="main">{children}</main>
      <Footer give={give} />
      <StickyCTA give={give} />
      <MobileDrawer give={give} />
      <SiteScripts />
    </>
  );
}
