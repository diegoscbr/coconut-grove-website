"use client";

import { useIsPresentationTool } from "next-sanity/hooks";

export function DisableDraftMode() {
  const isPresentationTool = useIsPresentationTool();

  // Hide the button when the page is embedded inside the Studio's Presentation
  // iframe (the editor exits draft mode from the Studio itself).
  if (isPresentationTool) return null;

  return (
    <a
      href="/api/draft-mode/disable"
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 50,
        background: "#111",
        color: "#fff",
        padding: "8px 14px",
        borderRadius: 999,
        fontSize: 13,
        fontFamily: "var(--body)",
      }}
    >
      Exit preview
    </a>
  );
}
