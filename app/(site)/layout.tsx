import { TopNav } from "@/components/chrome/TopNav";
import { Footer } from "@/components/chrome/Footer";
import { MobileDrawer } from "@/components/chrome/MobileDrawer";
import { StickyCTA } from "@/components/chrome/StickyCTA";
import { SiteScripts } from "@/components/SiteScripts";

// Layout for the public site. The embedded Studio at /studio lives outside this
// group, so it never gets the site chrome.
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <TopNav />
      {children}
      <Footer />
      <StickyCTA />
      <MobileDrawer />
      <SiteScripts />
    </>
  );
}
