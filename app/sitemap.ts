import type { MetadataRoute } from "next";

// Both October 2026 build specifications (Winter Break Camp, Giving) ask for
// their page to be in the XML sitemap; the site had none. Every public route
// is listed. Add new pages here.
const SITE = "https://www.cgscic.org";

const ROUTES = [
  "/",
  "/about",
  "/programs",
  "/programs/adult-sailing",
  "/programs/race-team",
  "/programs/camps-coaching",
  "/programs/parent-guide",
  "/winter-camp",
  "/register",
  "/calendar",
  "/giving",
  "/contact",
  "/privacy",
  "/terms",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({ url: `${SITE}${route === "/" ? "" : route}` }));
}
