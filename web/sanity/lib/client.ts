import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, studioUrl } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // published content via CDN; draft-mode paths bypass this
  stega: {
    // Enables click-to-edit overlays: encodes Content Source Maps into strings
    studioUrl,
  },
});
