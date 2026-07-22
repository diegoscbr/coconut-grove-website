// Contact page content — exact copy ported from prototype/contact.html.
// Single source of truth — edit this file to change the page's copy.
export const CONTACT_CONTENT = {
  hero: {
    breadcrumbHomeLabel: "Home",
    breadcrumbHomeHref: "/",
    breadcrumbSep: "→",
    breadcrumbCurrent: "Contact",
    headline: "Contact Us",
    subheadLead: "Coconut Grove Sailing Club Instructional Center.",
    subheadEm: "Reach the team directly — by phone or email.",
    locationChip: "2990 S. Bayshore Drive · Miami, FL 33133",
  },
  // The "Send a note" inquiry section (form + direct-line column) was removed
  // at the client's request on 2026-07-23 — copy lives in git history.
  contacts: {
    eyebrow: "Who to reach",
    headline: "Instructional Center contacts.",
    sub: "Coconut Grove Sailing Club Instructional Center. Reach the team directly and a coach will point you to the right program or course.",
    people: [
      {
        photo: "/assets/coaches/maru.jpg",
        role: "Director of Sailing Performance",
        name: "Maru Urban",
        phoneText: "(305) 444-4571 ×11",
        phoneHref: "tel:+13054444571,11",
        emailText: "icdirector@cgsc.org",
        emailHref: "mailto:icdirector@cgsc.org",
      },
      {
        photo: "/assets/coaches/rosa.jpg",
        role: "Director of Programs & Development",
        name: "Rosa Lamela",
        phoneText: "(305) 444-4571 ×11",
        phoneHref: "tel:+13054444571,11",
        emailText: "icmanager@cgsc.org",
        emailHref: "mailto:icmanager@cgsc.org",
      },
      {
        photo: "/assets/coaches/lauren.jpg",
        role: "General Manager",
        name: "Lauren Simpson",
        phoneText: "(305) 444-4571 ×18",
        phoneHref: "tel:+13054444571,18",
        emailText: "info@cgsc.org",
        emailHref: "mailto:info@cgsc.org",
      },
    ],
    footPre: "CGSC Instructional Center is a 501(c)(3) nonprofit and part of ",
    clubLinkText: "Coconut Grove Sailing Club",
    clubLinkHref: "https://cgsc.org/",
    footMid: ". ",
    donateLinkText: "Donate →",
    donateLinkHref: "https://cgscic.org/donate/",
  },
  visit: {
    eyebrow: "Visit the dock",
    headline: "2990 S. Bayshore Drive.",
    prose:
      "We're on Biscayne Bay at **2990 S. Bayshore Drive** in Coconut Grove — the full CGSC fleet, dock, and coaching staff on site. The fastest way to know if CGSC is right for you is to walk down the dock and meet the boats, the water, and the coaches.",
    list: {
      officeHoursLabel: "Office hours",
      officeHoursTbd: "TBD — call ahead to confirm",
      openHouseLabel: "Open house",
      openHouseTbd: "Cadence TBD",
      openHouseTrailPre: " — see the ",
      calendarLinkText: "calendar",
      calendarLinkHref: "/calendar",
      openHouseTrailPost: " for confirmed dates",
    },
  },
  map: {
    eyebrow: "Find us",
    headline: "Coconut Grove waterfront.",
    sub: "We're on the water at 2990 S. Bayshore Drive — five minutes from downtown Coconut Grove.",
    embedTitle: "Map to the CGSC Instructional Center, 2990 S. Bayshore Drive, Miami",
    embedSrc:
      "https://www.google.com/maps?q=Coconut+Grove+Sailing+Club,+2990+S+Bayshore+Dr,+Miami,+FL+33133&z=16&output=embed",
    linkText: "Open in Google Maps →",
    linkHref:
      "https://www.google.com/maps/search/?api=1&query=2990+S+Bayshore+Drive+Miami+FL+33133",
  },
};

export type ContactContent = typeof CONTACT_CONTENT;
