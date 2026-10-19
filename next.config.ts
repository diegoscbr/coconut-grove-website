import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root — a stray lockfile in the home dir otherwise
  // confuses Next's auto-detection.
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      // Old WordPress Howler Regatta page, still in Google's index.
      { source: "/hh", destination: "/calendar", permanent: true },
      // Old WordPress donate page; the contact page and outside links used it.
      { source: "/donate", destination: "/giving", permanent: true },
      // /youth-regattas was three "Content coming soon" stubs and nothing else.
      // Removed 2026-10-11; it had been live and linked from the primary nav,
      // so it redirects rather than 404s. Race Team's #regattas section is the
      // nearest real content: actual regatta cards with dates.
      {
        source: "/youth-regattas",
        destination: "/programs/race-team#regattas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
