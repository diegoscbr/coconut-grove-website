import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { TERMS_CONTENT } from "@/lib/content/terms";

export const metadata: Metadata = TERMS_CONTENT.seo;

export default function TermsPage() {
  return <LegalPage doc={TERMS_CONTENT} />;
}
