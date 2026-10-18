import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PRIVACY_CONTENT } from "@/lib/content/privacy";

export const metadata: Metadata = PRIVACY_CONTENT.seo;

export default function PrivacyPage() {
  return <LegalPage doc={PRIVACY_CONTENT} />;
}
