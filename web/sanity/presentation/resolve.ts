import {
  defineLocations,
  type PresentationPluginOptions,
} from "sanity/presentation";

// Maps each page document to its front-end URL so the Presentation tool opens
// the live page with click-to-edit overlays.
const singleLocation = (title: string, href: string) =>
  defineLocations({
    select: {},
    resolve: () => ({ locations: [{ title, href }] }),
  });

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    home: singleLocation("Home Page", "/"),
    about: singleLocation("About Page", "/about"),
    programsIndex: singleLocation("Programs Page", "/programs"),
    raceTeam: singleLocation("Racing Teams Page", "/programs/race-team"),
    campsCoaching: singleLocation("Youth Sailing Page", "/programs/camps-coaching"),
    adultSailing: singleLocation("Adult Sailing Page", "/programs/adult-sailing"),
    youthRegattas: singleLocation("Youth Regattas Page", "/youth-regattas"),
    calendar: singleLocation("Calendar Page", "/calendar"),
    sampleStory: singleLocation("Sample Story", "/calendar/sample-story"),
    giving: singleLocation("Giving Page", "/giving"),
    contact: singleLocation("Contact Page", "/contact"),
  },
};
