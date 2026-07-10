import { client } from "@/sanity/lib/client";
import { defineEnableDraftMode } from "next-sanity/draft-mode";

// Preview-secret validation must bypass the CDN (a freshly-created secret isn't
// on the CDN yet → "Unauthorized - Session not found" and a preview that never
// loads). A token + useCdn:false reads live from the API.
export const { GET } = defineEnableDraftMode({
  client: client.withConfig({
    token: process.env.SANITY_API_READ_TOKEN,
    useCdn: false,
  }),
});
