// Adult Sailing page content — copy from the client's build specification
// "CGSCIC-Adult-Sailing_Updated.docx" (September 2026), which supersedes the
// 2026-08-02 "SEO Ready" doc and the 2026-07-23 draft.
// Rendered by components/AdultProgram.tsx on /programs/adult-sailing.
// Single source of truth — edit this file to change the page's copy.
//
// Content rules from Part 4 of the specification, which outlive any redesign:
//   - No emojis anywhere.
//   - Membership is required for boat use, stated plainly, not softened.
//   - No claims that a certification alone makes someone ready to charter.
//   - All clinic enquiries route to adultsailing@cgsc.org, not to instructors
//     personally. Named contacts stay only for keelboat (Ed) and Flying Scot
//     (Bud), which the specification itself publishes.
//   - Each instructor appears once, with every discipline they teach listed.
//   - Course dates carry the year.

export const ADULT_CLASSES_REGISTRATION_URL =
  "https://theclubspot.com/register/camp/zzXFEJa92k/class";

export const MEMBER_BOAT_USAGE_URL =
  "https://www.cgsc.org/member-boat-usage-programs/";
export const CGSC_MEMBERSHIP_URL = "https://www.cgsc.org/membership/";

export const ADULT_PROGRAM_CONTENT = {
  registrationUrl: ADULT_CLASSES_REGISTRATION_URL,

  // High-visibility band directly under the hero. The specification calls this
  // "the single most important addition to the page": people called and
  // emailed with general questions and had no obvious route before.
  contactBand: {
    questionLead: "Got questions, not sure where to start?",
    questionBody: "Send us an email at",
    emailText: "adultsailing@cgsc.org",
    emailHref: "mailto:adultsailing@cgsc.org",
    registerLead: "Ready to register?",
    ctaLabel: "Register Here for Adult Classes",
  },

  lead: {
    eyebrow: "Adult Sailing Lessons · A US Sailing Accredited School in Miami",
    title: "Learn to Sail in Miami on Biscayne Bay",
    tagline:
      "Find your place on the water. Exceptional instruction, real community, and a lifelong passion for sailing.",
    paragraphs: [
      "Most people come to us to learn to sail. What they find is something they did not know they were looking for.",
      "As a US Sailing Accredited School, the CGSC Instructional Center holds every course to the highest national standards for safety, instruction, and seamanship. Our instructors are US Sailing certified, and they teach with the patience and care of people who remember their own first day at the helm.",
      "But the skills are only part of the story. The Coconut Grove Sailing Club has always been a place where a love of the water brings people together, across every age and demographic. You will arrive to learn something. You will stay because you have found your place in a community of sailors that has anchored Coconut Grove for eighty years and will for decades more.",
    ],
    // Small supporting photo. The specification is explicit: the source file is
    // small, do not scale it beyond about 300px wide. Empty until the file is
    // in public/assets/courses/ — the component renders the figure once it is.
    image: "",
    imageAlt: "An instructor coaching a student at the helm on Biscayne Bay",
    imageCaption: "Learning the helm on Biscayne Bay.",
  },

  pathway: {
    eyebrow: "US Sailing Certification Courses in Miami",
    headline: "US Sailing Certification Courses: From First Sail to Open Water",
    lead: "Wherever you want your sailing to go, local waters, longer passages, eventually a boat of your own, the US Sailing certification pathway is how you build toward it.",
    paragraphs: [
      "These are the courses at the heart of our adult program: a proven, step-by-step progression developed by US Sailing, the National Governing Body for the sport. Each level builds on the one before it, and each certification you earn is recorded in your Official Logbook, the record charter companies and sailing schools around the world recognize.",
      "You do not need any experience to begin. You do not need to own a boat. You only need to start. Basic Keelboat teaches you to sail. Basic Cruising and Bareboat Cruising build the seamanship and judgment a cruising boat asks of the person running it. Coastal and Celestial Navigation teach you to find your way without depending on a screen. How far along the pathway you go is up to you, and there is no schedule but your own.",
    ],
    image: "/assets/courses/basic-keelboat.jpg",
    courses: [
      {
        number: "01",
        name: "Basic Keelboat",
        tagline: "Where every sailor begins.",
        desc: "The national gold standard in sailing instruction, taught aboard our 23-foot Ensign keelboats. In a single immersive weekend, you will go from the dock to the helm, rigging the boat, reading the wind, and sailing it yourself.",
        image: "",
        meta: [
          { dt: "Prerequisite", dd: "None. Complete beginners welcome." },
          { dt: "You will learn", dd: "Sailing terminology, rigging, points of sail, knots, charts, navigation rules, anchoring, crew-overboard recovery, and more." },
          { dt: "Format", dd: "Classroom and on-the-water instruction" },
          { dt: "Schedule", dd: "Second and third weekend of every month (except August), 9 AM to 4 PM, Saturday and Sunday" },
          { dt: "Cost", dd: "$715 Members | $815 Non-Members" },
          { dt: "Leads to", dd: "US Sailing Basic Keelboat Certification" },
          { dt: "Contact", dd: "Ed Benitez | adultsailing@cgsc.org | 305.962.3216" },
        ],
      },
      {
        number: "02",
        name: "Basic Keelboat Certification and Coaching",
        tagline: "Turn what you have learned into a credential.",
        desc: "Your Basic Keelboat course builds the skills; certification confirms them. Two to four private lessons prepare you for the exam, a written test plus an on-the-water skills assessment. Certification is what unlocks the rest of the pathway, and what a charter company will ask to see.",
        image: "",
        meta: [
          { dt: "Prerequisite", dd: "Basic Keelboat course, or equivalent experience" },
          { dt: "Format", dd: "Private coaching, written exam, and on-the-water skills test" },
          { dt: "Private coaching", dd: "$80/hour per person, 3 hours minimum | $40 per hour for each additional student" },
          { dt: "Schedule", dd: "By request only" },
          { dt: "Certification cost", dd: "$335" },
          { dt: "Challengers", dd: "Experienced sailors may sit for the exam without taking lessons." },
          { dt: "Registration", dd: "Done on site on day of exam" },
        ],
      },
    ],
    // The remaining four courses sit under their own heading, per the
    // specification. The kicker is the client's wording.
    cruisingHeading: "Cruising and Navigation Certification Courses",
    cruisingKicker: "Remaining 2026 dates",
    cruisingCourses: [
      {
        number: "03",
        name: "Basic Cruising and Certification",
        tagline: "From sailing a boat to running one.",
        desc: "Three days aboard a cruising keelboat, where the boat becomes a system you are responsible for: engines, electrical, weather, safety gear, and the judgment to use them. This is the course where a day sailor starts becoming a skipper.",
        image: "",
        meta: [
          { dt: "Prerequisite", dd: "US Sailing Basic Keelboat Certification" },
          { dt: "You will learn", dd: "Boat systems, weather awareness, safety preparation, chart reading, navigation, docking and maneuvering under power." },
          { dt: "Schedule", dd: "9 AM to 4:30 PM | November 13–15, 2026" },
          { dt: "Cost", dd: "$1,275 Members | $1,375 Non-Members" },
          { dt: "Leads to", dd: "US Sailing Bareboat Cruising and Certification" },
        ],
        sessions: [{ startDate: "2026-11-13", endDate: "2026-11-15" }],
      },
      {
        number: "04",
        name: "Bareboat Cruising and Certification",
        tagline: "The certification that hands you the keys.",
        desc: "Four days of comprehensive on-the-water and on-land learning covering everything a skipper needs to take a boat away from the dock for days at a time: passage planning, provisioning, anchoring overnight, emergency procedures, advanced sail trim. This is the certification most charter companies look for.",
        image: "",
        meta: [
          { dt: "Prerequisite", dd: "US Sailing Basic Cruising Certification" },
          { dt: "You will learn", dd: "Cruise planning and provisioning, overnight anchoring, emergency procedures, advanced sail trim, crew management." },
          { dt: "Schedule", dd: "9 AM to 4:30 PM | October 16–19, 2026 | December 4–7, 2026" },
          { dt: "Cost", dd: "$1,520 Members | $1,620 Non-Members" },
        ],
        sessions: [
          { startDate: "2026-10-16", endDate: "2026-10-19" },
          { startDate: "2026-12-04", endDate: "2026-12-07" },
        ],
      },
      {
        number: "05",
        name: "Coastal Navigation",
        tagline: "Find your way when the screen goes dark.",
        desc: "Coastal Navigation teaches you to find your position and plot your course the way sailors have for centuries: paper charts, bearings, dead reckoning, tides and currents. It is the difference between following a boat's navigation and understanding it.",
        image: "",
        meta: [
          { dt: "Prerequisite", dd: "None, though Basic Keelboat is recommended" },
          { dt: "You will learn", dd: "Paper charts, plotting, bearings and fixes, dead reckoning, tides and currents, passage planning." },
          { dt: "Format", dd: "Four evening classroom sessions, Mondays and Thursdays 5:30 PM to 9 PM" },
          { dt: "Dates", dd: "October 5, 8, 12, 15, 2026" },
          { dt: "Cost", dd: "$825 Members | $925 Non-Members" },
        ],
        // Four evenings. One session spans the first to the last.
        sessions: [{ startDate: "2026-10-05", endDate: "2026-10-15" }],
      },
      {
        number: "06",
        name: "Celestial Navigation",
        tagline: "The oldest skill in sailing, and still the most reliable.",
        desc: "A sextant, an accurate clock, and the sun, moon, planets and stars, enough to fix your position anywhere on earth, with no shoreline in sight and no power on board. Few sailors ever learn it. Those who do never forget the first time it works.",
        image: "",
        meta: [
          { dt: "Prerequisite", dd: "US Sailing Coastal Navigation" },
          { dt: "You will learn", dd: "Sight reduction, sextant use, sun and star sights, time and the nautical almanac, position fixing at sea." },
          { dt: "Format", dd: "Six evening classroom sessions, Mondays and Thursdays 5:30 PM to 9 PM" },
          { dt: "Dates", dd: "October 26, 29 | November 2, 5, 9, 12, 2026" },
          { dt: "Cost", dd: "$1,190 Members | $1,290 Non-Members" },
        ],
        // Six evenings across two months. One session spans first to last.
        sessions: [{ startDate: "2026-10-26", endDate: "2026-11-12" }],
      },
    ],
  },

  // Section 3 of the specification. New to the page.
  afterCertification: {
    eyebrow: "Member Boat Use at Coconut Grove Sailing Club",
    headline: "Sailing After You Are Certified: Boat Access for CGSC Members",
    paragraphs: [
      "Our classes are open to everyone. What comes after them belongs to the club, so membership is required, and it is what turns a certification into somewhere to sail from. It is how sailors who learned here keep sailing, how people find their way back to a sport they loved years ago, and how most of them end up with a fleet, a race committee, and a Wednesday night crowd that knows their name.",
      "Members who earn their certification have the option to join our Member Boat Usage Program. Depending on the program they join, members get standing access to the club fleet, Sunfish, Lasers, Flying Scots, Ensigns, and our cruising boats, sailing and caring for the boats without the worry of marina, insurance, and maintenance costs. That is the single biggest advantage, and it is the continuity other sailing schools cannot offer.",
    ],
    panel: {
      label: "Open to CGSC members — the club fleet",
      fleet: "Sunfish · Lasers · Flying Scots · Ensigns (23-foot keelboats) · Cruising boats",
      note: "No marina fees. No insurance. No maintenance bills. Just the boats, and the people who keep them.",
      primaryLabel: "Member Boat Usage Programs",
      primaryHref: MEMBER_BOAT_USAGE_URL,
      secondaryLabel: "Become a member at CGSC",
      secondaryHref: CGSC_MEMBERSHIP_URL,
    },
    ensign: {
      headline: "Start with Our Keelboat Program: The Ensign Fleet",
      body: "Our keelboat program runs on five Ensigns, a 23-foot keelboat that is stable, sturdy, and forgiving, and the same boat you learned on. We teach on all five, and four are available to the membership. Once an instructor has checked you out, you can reserve one for a morning or an afternoon and take it out for a casual sail on Biscayne Bay. It is the club's most popular boat usage program, and the natural gateway into cruising.",
      contact: "Keelboat contact: Ed Benitez, Keelboat Instructor and Lead Coordinator | adultsailing@cgsc.org | 305.962.3216",
    },
    racing: {
      headline: "Sailboat Racing and Regattas on Biscayne Bay",
      body: "For sailors drawn to racing, no club on Biscayne Bay hosts more competitive regattas than Coconut Grove Sailing Club. New members are encouraged to serve on our race committees, one of the best ways to meet members across every fleet and see the sport from a completely different perspective.",
      // Split so "upcoming regattas and race dates" can link to the calendar.
      linkedPre: "New to Miami, or here for a season? Our regattas run year round across the Flying Scot, Laser/ILCA, Sunfish, and keelboat fleets, and the calendar is published well ahead, see ",
      linkedLabel: "upcoming regattas and race dates",
      linkedHref: "/calendar",
      linkedPost: ". Write to adultsailing@cgsc.org and we will tell you what is coming up, which fleets are looking for crew, and how to enter.",
    },
  },

  flyingScot: {
    eyebrow: "The Flying Scot Program",
    wednesday: {
      headline: "Free Community Sailing in Miami: Wednesday Nights on Biscayne Bay",
      tagline: "The best thing we do is free and open to everyone.",
      paragraphs: [
        "From the day the clocks change in March until they turn back in November, our Flying Scot fleet goes out on Biscayne Bay every Wednesday afternoon and welcomes sailors from all over the community to join them.",
        "The Flying Scot is a 19-foot one-design centerboard dinghy with a mainsail, jib, and spinnaker. Stable enough for a first-timer, quick enough to race hard, roomy enough for four adults. Between our club fleet and the Scots owned by members, there is almost always a place aboard for you. Arrive by 4:00 PM and we will pair you with a boat and a skipper.",
        "Just learned to sail? There is no better way to build real time on the water. Been at it forty years? Casual racing keeps your boat handling honest. Come once and you will see what we mean when we call this a community. Come twice and you will be a part of it.",
      ],
      image: "/assets/courses/flying-scot-racing.jpg",
      imageAlt: "Two Flying Scots racing close together on Biscayne Bay",
      meta: [
        { dt: "When", dd: "Every Wednesday during daylight saving time (March to November), arrive by 4:00 PM, sailing until about 7:00 PM" },
        { dt: "Cost", dd: "Free and open to the public" },
        { dt: "Experience", dd: "Some sailing experience is strongly recommended, but all levels are welcome." },
        { dt: "Bring", dd: "Sunscreen, long-sleeved beach shirt, a hat, and shoes you do not mind getting wet" },
        { dt: "Contact", dd: "Bud Price, flyingscot@cgsc.org" },
      ],
    },
    restHeadline: "The Rest of the Flying Scot Program",
    courses: [
      {
        name: "Flying Scot Beginner Lessons",
        tagline: "Learn on the boat the fleet sails.",
        desc: "Hands-on instruction aboard the 19-foot Flying Scot, up to three students to an instructor. Steering, tacking, sail trim, and the theory behind it, on the same boat that is out on the bay every Wednesday night.",
        image: "/assets/courses/flying-scot-lessons.jpg",
        meta: [
          { dt: "Format", dd: "3-hour sessions. Most students are solo-ready in 12 to 24 hours" },
          { dt: "Schedule", dd: "By request only" },
          { dt: "Cost", dd: "$285 per person" },
          { dt: "Contact", dd: "Bud Price, flyingscot@cgsc.org" },
        ],
      },
      {
        name: "Flying Scot Saturday Racing Clinics",
        tagline: "Level up your skills. Keep the company.",
        desc: "Short races, real coaching, and a post-sail debrief on the CGSC veranda. Casual enough to enjoy, serious enough to make you faster, and the natural next step once you have caught the racing bug on a Wednesday.",
        image: "/assets/courses/flying-scot-racing.jpg",
        meta: [
          { dt: "Schedule", dd: "The second and fourth Saturdays of every month" },
          { dt: "Cost", dd: "$75 Members | $100 Non-Members" },
          { dt: "Contact", dd: "Bud Price, flyingscot@cgsc.org" },
        ],
      },
    ],
  },

  clinics: {
    eyebrow: "Sailing and Windsurfing Clinics in Miami",
    headline: "Sailing Clinics in Miami: Sunfish, Laser/ILCA, and Windsurfing",
    intro:
      "Every clinic has the same goal: sharpen your boat handling and tactical decision-making in a supportive group setting, with an eye toward getting race-course ready. Whatever you sail, you will come away a more capable sailor. Most of these build on skills you already have, and every one of them will make you a better sailor on any boat you step onto.",
    meta: [
      { dt: "Cost", dd: "$75 Members | $90 Non-Members. Sunfish clinics are priced separately. Register and pay on site before the session." },
      { dt: "All clinic questions", dd: "adultsailing@cgsc.org | 305.747.2600" },
      { dt: "Format", dd: "2.5 to 3 hour sessions: on-land instruction, on-the-water drills, short-course casual racing" },
      { dt: "Prerequisite", dd: "Prior sailing experience is required. Beginner sailors looking for additional time on the water are welcome to join." },
    ],
    fleetLead: "Choose your fleet:",
    fleets: [
      {
        name: "Sunfish",
        tagline: "",
        desc: "",
        image: "/assets/courses/sunfish.jpg",
        meta: [
          { dt: "Cost", dd: "$60 Members | $75 Non-Members | $45 Members sailing their own boat" },
          { dt: "Fridays", dd: "Every Friday, 9 AM to Noon | Marika de Nie" },
          { dt: "Sundays", dd: "Every other Sunday, 1:30 PM to 4:30 PM | Manu Francia" },
          { dt: "Contact", dd: "adultsailing@cgsc.org" },
        ],
      },
      {
        name: "Laser / ILCA",
        tagline: "",
        desc: "",
        image: "/assets/courses/ilca.jpg",
        meta: [
          { dt: "Coach", dd: "Orlando Gonzalez" },
          { dt: "Schedule", dd: "Sets sail again May 2027 | Saturday, 9 AM to 11:30 AM" },
          { dt: "Contact", dd: "adultsailing@cgsc.org" },
        ],
      },
      {
        name: "Windsurfing",
        tagline: "",
        desc: "",
        image: "/assets/courses/windsurf.jpg",
        meta: [
          { dt: "Coach", dd: "Norlem Garcia" },
          { dt: "Schedule", dd: "First and third Saturday of every month (except August), 9 AM to 11:30 AM" },
          { dt: "Contact", dd: "adultsailing@cgsc.org" },
          { dt: "Note", dd: "Beginner lessons also available upon request." },
        ],
      },
    ],
    fleetFootnotePre: "Flying Scots — See ",
    fleetFootnoteLink: "the Flying Scot Program above",
    fleetFootnoteHref: "#flying-scot",
    fleetFootnotePost: ".",
  },

  // Section 6 of the specification. New to the page.
  // Each person appears once with every discipline listed; the specification
  // is explicit that nobody is split into two entries.
  instructors: {
    eyebrow: "US Sailing Certified Instructors in Miami",
    headline: "Meet Our Adult Sailing Instructors",
    intro:
      "Every adult course and clinic at the Instructional Center is taught by a US Sailing certified instructor, sailors who race, cruise, and teach on Biscayne Bay year round. These are the people you will be sailing with.",
    groups: [
      {
        label: "Program Leadership",
        lead: true,
        people: [
          { name: "Pierre Berthier", role: "Adult Sailing Chairperson" },
          { name: "Ed Benitez", role: "Keelboat Instructor and Lead Coordinator" },
        ],
      },
      {
        label: "Instructors",
        lead: false,
        people: [
          { name: "Andy Hacket", role: "Keelboat" },
          { name: "Rose Mather", role: "Keelboat" },
          { name: "Marika de Nie", role: "Keelboat and Sunfish" },
          { name: "Manu Francia", role: "Keelboat and Sunfish" },
          { name: "Liam Thomson", role: "Keelboat" },
          { name: "Mike Stephens", role: "Cruising and Navigation" },
          { name: "Orlando Gonzalez", role: "Laser / ILCA" },
          { name: "Norlem Garcia", role: "Windsurfing and Wing Foil" },
        ],
      },
    ],
  },

  faq: {
    headline: "Adult Sailing Lessons in Miami: Frequently Asked Questions",
    // Order matters. The ASA question is the one we are asked most and the
    // specification puts it first.
    items: [
      {
        question: "I am already ASA certified. Do I still need the US Sailing equivalent?",
        answer:
          "Yes. Our member boat use programs require US Sailing certification, so an American Sailing Association (ASA) certification does not carry over. This applies whether you are already a CGSC member or planning to become one. That said, you may not need to sit through the full course. Experienced sailors can challenge the course and go straight to the written and practical exams. A CGSC instructor will assess your skills during an on-the-water session first, then determine whether you need to take the course or are ready for the exams. The $335 certification fee applies either way; it covers both the written and the practical exam.",
      },
      {
        question: "Do I need any experience to learn to sail?",
        answer:
          "No. Our Basic Keelboat course starts from zero, no experience or equipment needed. You will go from the dock to the helm over a single weekend on Biscayne Bay.",
      },
      {
        question: "How do I earn a US Sailing certification?",
        answer:
          "Start with the Basic Keelboat course, then a short certification and coaching session with a written and on-the-water test. From there the pathway continues to Basic Cruising, Bareboat Cruising, and Coastal and Celestial Navigation.",
      },
      {
        question: "Do I need to own a boat?",
        answer:
          "No. We provide the boats for every course, from our 23-foot Ensign keelboats to cruising boats and Flying Scots.",
      },
      {
        question: "Do you offer free sailing?",
        answer:
          "Yes. Our Wednesday Night Community Sailing on Biscayne Bay is free and open to the public from March through November, no boat or membership required.",
      },
      {
        question: "How much do adult sailing lessons cost?",
        answer:
          "The Basic Keelboat course is $715 for members and $815 for non-members. Cruising, navigation, and clinic pricing is listed with each course above.",
      },
      {
        question: "Where are you located?",
        answer:
          "At Coconut Grove Sailing Club, 2990 S Bayshore Drive, Miami, FL 33133, on Biscayne Bay, right next to Peacock Park.",
      },
    ],
  },

  readyToStart: {
    headline: "Ready to Start Sailing in Miami?",
    body: "Not sure where you fit on the pathway? Tell us where you have been and where you would like to go, and we will point you to the right course.",
    contactName: "Rosa Lamela",
    emailText: "adultsailing@cgsc.org",
    emailHref: "mailto:adultsailing@cgsc.org",
    phoneText: "305.747.2600",
    phoneHref: "tel:+13057472600",
    ctaLabel: "Register Here for Adult Classes",
  },
};

export type AdultProgramContent = typeof ADULT_PROGRAM_CONTENT;
