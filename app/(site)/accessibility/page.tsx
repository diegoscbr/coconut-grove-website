import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { ACCESSIBILITY_CONTENT } from "@/lib/content/accessibility";

export const metadata: Metadata = ACCESSIBILITY_CONTENT.seo;

export default function AccessibilityPage() {
  return <LegalPage doc={ACCESSIBILITY_CONTENT} />;
}
