import { defineQuery } from "next-sanity";

// Each page is a singleton; a bare projection returns all its (primitive)
// content fields, which the page renders 1:1 (falling back to code defaults).
export const HOME_QUERY = defineQuery(`*[_type == "home"][0]`);
export const ABOUT_QUERY = defineQuery(`*[_type == "about"][0]`);
export const CONTACT_QUERY = defineQuery(`*[_type == "contact"][0]`);
export const GIVING_QUERY = defineQuery(`*[_type == "giving"][0]`);
export const YOUTH_REGATTAS_QUERY = defineQuery(`*[_type == "youthRegattas"][0]`);
export const CALENDAR_QUERY = defineQuery(`*[_type == "calendar"][0]`);
export const SAMPLE_STORY_QUERY = defineQuery(`*[_type == "sampleStory"][0]`);
export const PROGRAMS_INDEX_QUERY = defineQuery(`*[_type == "programsIndex"][0]`);
export const RACE_TEAM_QUERY = defineQuery(`*[_type == "raceTeam"][0]`);
export const CAMPS_COACHING_QUERY = defineQuery(`*[_type == "campsCoaching"][0]`);
export const ADULT_SAILING_QUERY = defineQuery(`*[_type == "adultSailing"][0]`);
