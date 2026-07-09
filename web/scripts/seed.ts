/**
 * Seeds every page singleton into Sanity from the same content constants the
 * site renders as fallbacks — so the CMS matches the live replica exactly.
 *
 * Run once:  npm run seed
 * Requires SANITY_API_WRITE_TOKEN (an Editor token) in .env.local.
 */
import { createClient } from "@sanity/client";
import { HOME_CONTENT } from "../lib/content/home";
import { ABOUT_CONTENT } from "../lib/content/about";
import { CONTACT_CONTENT } from "../lib/content/contact";
import { GIVING_CONTENT } from "../lib/content/giving";
import { YOUTH_REGATTAS_CONTENT } from "../lib/content/youthRegattas";
import { CALENDAR_CONTENT } from "../lib/content/calendar";
import { SAMPLE_STORY_CONTENT } from "../lib/content/sampleStory";
import { PROGRAMS_INDEX_CONTENT } from "../lib/content/programsIndex";
import { RACE_TEAM_CONTENT } from "../lib/content/raceTeam";
import { CAMPS_COACHING_CONTENT } from "../lib/content/campsCoaching";
import { ADULT_SAILING_CONTENT } from "../lib/content/adultSailing";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
if (!token)
  throw new Error(
    "Missing SANITY_API_WRITE_TOKEN (create an Editor token at sanity.io/manage)",
  );

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-03-01",
  token,
  useCdn: false,
});

// _id === _type for each page singleton.
const docs = [
  { _id: "home", _type: "home", ...HOME_CONTENT },
  { _id: "about", _type: "about", ...ABOUT_CONTENT },
  { _id: "programsIndex", _type: "programsIndex", ...PROGRAMS_INDEX_CONTENT },
  { _id: "raceTeam", _type: "raceTeam", ...RACE_TEAM_CONTENT },
  { _id: "campsCoaching", _type: "campsCoaching", ...CAMPS_COACHING_CONTENT },
  { _id: "adultSailing", _type: "adultSailing", ...ADULT_SAILING_CONTENT },
  { _id: "youthRegattas", _type: "youthRegattas", ...YOUTH_REGATTAS_CONTENT },
  { _id: "calendar", _type: "calendar", ...CALENDAR_CONTENT },
  { _id: "sampleStory", _type: "sampleStory", ...SAMPLE_STORY_CONTENT },
  { _id: "giving", _type: "giving", ...GIVING_CONTENT },
  { _id: "contact", _type: "contact", ...CONTACT_CONTENT },
];

async function run() {
  for (const doc of docs) {
    await client.createOrReplace(doc as Parameters<typeof client.createOrReplace>[0]);
    console.log(`✓ seeded ${doc._type}`);
  }
  console.log(`\nDone — ${docs.length} pages seeded into "${dataset}".`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
