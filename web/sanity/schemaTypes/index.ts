import type { SchemaTypeDefinition } from "sanity";
import { home, dockBucket } from "./home";
import { hero } from "./hero";
import { about } from "./about";
import { contact } from "./contact";
import { giving } from "./giving";
import { youthRegattas } from "./youthRegattas";
import { calendar } from "./calendar";
import { sampleStory } from "./sampleStory";
import { programsIndex } from "./programsIndex";
import { raceTeam } from "./raceTeam";
import { campsCoaching } from "./campsCoaching";
import { adultSailing } from "./adultSailing";

export const schemaTypes: SchemaTypeDefinition[] = [
  // page singletons
  home,
  about,
  programsIndex,
  raceTeam,
  campsCoaching,
  adultSailing,
  youthRegattas,
  calendar,
  sampleStory,
  giving,
  contact,
  // shared objects
  hero,
  dockBucket,
];
