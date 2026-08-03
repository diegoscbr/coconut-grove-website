// Coach name → headshot. Keys must match the rendered `.coach-name` text in
// lib/content/about.ts byte for byte — SiteScripts.tsx looks the photo up by
// that string. Coaches without a photo keep the styled gradient placeholder.
// Order follows the org-chart roster in lib/content/about.ts.
export const COACH_PHOTOS: Record<string, string> = {
  "Lauren Simpson": "/assets/coaches/lauren.jpg",
  "Maru Urban": "/assets/coaches/maru.jpg",
  "Rosa Lamela": "/assets/coaches/rosa.jpg",
  'Diunieski "Koki" Gutierrez': "/assets/coaches/koki.jpg",
  "Raul Ramos": "/assets/coaches/raul.jpg",
  "Aish Nedunchezhiyan": "/assets/coaches/aish.jpg",
  'Luis Orlando "Kope" Novoa': "/assets/coaches/kope.jpg",
  "Orlando Gonzalez": "/assets/coaches/orlando.jpg",
  "Steve Mitchell": "/assets/coaches/steve.jpg",
  "Sebastian Lopez": "/assets/coaches/sebastian.jpg",
  "Oscar Sanchez Barreto": "/assets/coaches/oscar.jpg",
  "Norlem Garcia": "/assets/coaches/norlem.jpg",
  "Jonathan Rodriguez": "/assets/coaches/jonathan.jpg",
  // No headshot yet — gradient placeholder until the client sends one:
  // Justin Louden, Halsey Richartz, Alastar Cook, Michelle Perera,
  // Alex Figueroa, Erick Demario.
};
