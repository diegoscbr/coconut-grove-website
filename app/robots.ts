import type { MetadataRoute } from "next";

// Points crawlers at app/sitemap.ts. Everything is crawlable.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.cgscic.org/sitemap.xml",
  };
}
