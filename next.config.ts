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
    ];
  },
};

export default nextConfig;
