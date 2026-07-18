import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Coconut Grove Sailing Club Instructional Center · Sailing on Biscayne Bay since 1946",
    template: "%s · CGSC Instructional Center",
  },
  description:
    "The Instructional Center — a 501(c)(3) nonprofit carrying Coconut Grove's sailing legacy forward on Biscayne Bay. Youth sailing, racing teams, and adult programs for every sailor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="has-sticky-cta">{children}</body>
    </html>
  );
}
