import type { StructureResolver } from "sanity/structure";

// Each page is a fixed singleton (no add/delete), keeping the editing surface
// simple and safe for a non-technical editor.
const SINGLETONS: { id: string; title: string }[] = [
  { id: "home", title: "Home Page" },
  { id: "about", title: "About Page" },
  { id: "programsIndex", title: "Programs Page" },
  { id: "raceTeam", title: "Racing Teams Page" },
  { id: "campsCoaching", title: "Youth Sailing Page" },
  { id: "adultSailing", title: "Adult Sailing Page" },
  { id: "youthRegattas", title: "Youth Regattas Page" },
  { id: "calendar", title: "Calendar Page" },
  { id: "sampleStory", title: "Sample Story" },
  { id: "giving", title: "Giving Page" },
  { id: "contact", title: "Contact Page" },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Pages")
    .items(
      SINGLETONS.map(({ id, title }) =>
        S.listItem()
          .title(title)
          .id(id)
          .child(S.document().schemaType(id).documentId(id)),
      ),
    );
