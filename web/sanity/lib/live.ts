import { defineLive } from "next-sanity/live";
import { client } from "./client";

// serverToken/browserToken are optional: without them, published content still
// renders. A read token unlocks draft previews + click-to-edit in the Studio.
const token = process.env.SANITY_API_READ_TOKEN;

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
});
