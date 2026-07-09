// Adult Sailing page content — exact copy ported from prototype/programs/adult-sailing.html.
// Single source of truth: renders as a fallback (so the page is a 1:1 replica with
// zero setup) AND seeds Sanity (initialValue on the adultSailing schema).
export const ADULT_SAILING_CONTENT = {
  hero: {
    breadcrumbHome: "Home",
    breadcrumbPrograms: "Programs",
    breadcrumbCurrent: "Adult Sailing",
    h1: "Adult Sailing",
    subheadPre:
      "A US Sailing-accredited school. Courses and clinics for every level — ",
    subheadEmphasis: "first-timers to cruising and racing",
    subheadPost: " — taught by US Sailing-certified instructors.",
    locationChip: "Biscayne Bay · Coconut Grove",
  },
  subnav: [
    { href: "#about", label: "The Program" },
    { href: "#beginner", label: "Beginner" },
    { href: "#intermediate", label: "Intermediate" },
    { href: "#cruising", label: "Cruising & Nav" },
    { href: "#coaches", label: "Coaches" },
    { href: "#register", label: "Register" },
  ],
  intro: {
    eyebrow: "Adult Sailing",
    headline: "Learn from US Sailing-certified pros.",
    paragraphs: [
      "As a recognized US Sailing Accredited School, the CGSC Instructional Center is proud to offer an adult program rooted in professionalism, integrity, and a passion for getting you confidently out on the water.",
      "All our instructors are US Sailing certified, ensuring every course meets the highest national standards for safety, instruction, and seamanship.",
      "Whether you're a complete beginner or looking to advance your skills, you can feel confident that you're learning from experienced professionals dedicated to your success on the water.",
    ],
    ctaLabel: "Register for 2026 courses →",
    ctaHref: "https://theclubspot.com/register/camp/LdHHFDWymd/class",
  },
  beginner: {
    eyebrow: "Beginner / Novice",
    headline: "Start here.",
    sub: "New to sailing, or getting back into it after time away — foundational courses on stable, forgiving boats.",
    courses: [
      {
        name: "Basic Keelboat Course",
        desc: "Get started with the national gold standard in sailing instruction. Taught on a 23′ Ensign keelboat, this immersive weekend course introduces core sailing skills and safety procedures — sailing terminology, rigging, points of sail, knots, charts, emergency recovery, navigation rules, anchoring, and more.",
        image: "/assets/courses/basic-keelboat.jpg",
        meta: [
          { dt: "Goal", dd: "Foundation for US Sailing Basic Keelboat Certification" },
          { dt: "Format", dd: "Classroom + on-the-water" },
          { dt: "Schedule", dd: "2nd or 3rd weekend monthly · Sat & Sun, 9 AM–4 PM" },
          { dt: "Cost", dd: "$645 members · $745 non-members" },
          { dt: "Contact", dd: "Rosa Lamela · adultsailing@cgsc.org · 305.747.2600" },
        ],
      },
      {
        name: "Flying Scot Beginner Lessons",
        desc: "Learn to sail on the nimble and stable 19′ Flying Scot — perfect for two students and an instructor. A great intro to sailing in a hands-on, supportive setting.",
        image: "/assets/courses/flying-scot-lessons.jpg",
        meta: [
          { dt: "Goal", dd: "Learn steering, tacking, and basic sailing theory" },
          { dt: "Format", dd: "3-hour classroom + water sessions (12–24 hours to solo-ready)" },
          { dt: "Schedule", dd: "On request" },
          { dt: "Cost", dd: "$285 per 3-hr session" },
          { dt: "Contact", dd: "Bud Price · flyingscot@cgsc.org" },
        ],
      },
      {
        name: "Learn to Windsurf or Wingfoil",
        desc: "Experience the thrill of windsurfing — where balance, wind, and water come together for an unforgettable ride. This beginner-friendly course is the perfect introduction to one of the most dynamic and rewarding watersports. We also welcome returning windsurfers who haven't sailed in a while and are looking to brush up their skills in a supportive environment.",
        image: "/assets/courses/windsurf.jpg",
        meta: [
          { dt: "Prereq", dd: "A willingness to try something new (and very cool)" },
          { dt: "Format", dd: "On-land instruction followed by on-the-water practice" },
          { dt: "Schedule", dd: "Beginners — 1st & 3rd Sat · Intermediate — 2nd & 4th Sat · 9 AM–12 PM" },
          { dt: "Cost", dd: "$225 members · $265 non-members" },
          { dt: "Note", dd: "Most students gain confidence after 4–6 sessions" },
          { dt: "Contact", dd: "Rosa Lamela · adultsailing@cgsc.org · 305.747.2600" },
        ],
      },
    ],
  },
  intermediate: {
    eyebrow: "Intermediate Courses & Clinics",
    headline: "Sharpen the skill.",
    sub: "Certification coaching and casual racing clinics to build confidence and tactical awareness in small-boat racing.",
    courses: [
      {
        name: "Basic Keelboat Certification & Coaching",
        desc: "Take your next step toward certification. Two to five private lessons prepare you for the exam, which includes a written quiz and an on-the-water skills test. Experienced sailors may test without lessons.",
        image: "/assets/courses/basic-keelboat.jpg",
        meta: [
          { dt: "Coaching", dd: "$80/hr first person · $40/hr each additional student" },
          { dt: "Exam", dd: "Certification exam $305" },
          { dt: "Note", dd: "Challengers welcome — test without lessons" },
        ],
      },
      {
        name: "1-Day Sunfish Course",
        desc: "A dynamic course for students ready to transition to single-handed dinghy sailing.",
        image: "/assets/courses/sunfish.jpg",
        meta: [
          { dt: "Goal", dd: "Prepare for Sunfish Racing Clinics" },
          { dt: "Format", dd: "Land drills, rigging, sailing, capsize practice · full-day" },
          { dt: "Schedule", dd: "1st Saturday of each month · 9 AM–4 PM" },
          { dt: "Cost", dd: "$305 members · $355 non-members" },
        ],
      },
      {
        name: "Sunfish Racing Clinics",
        desc: "Casual, fun racing clinics to build your confidence and tactical awareness in small-boat racing.",
        image: "/assets/courses/sunfish.jpg",
        meta: [
          { dt: "Prereq", dd: "Basic Keelboat or prior experience" },
          { dt: "Level", dd: "Beginner racing" },
          { dt: "Format", dd: "3-hour clinic" },
          { dt: "Schedule", dd: "Sundays, 3–6 PM" },
          { dt: "Cost", dd: "$50 members · $70 non-members" },
        ],
      },
      {
        name: "Flying Scot Saturday Racing Clinics",
        desc: "Casual racing and community sailing with post-sail debriefs on the CGSC veranda.",
        image: "/assets/courses/flying-scot-racing.jpg",
        meta: [
          { dt: "Format", dd: "3-hour session with short races and group feedback" },
          { dt: "Schedule", dd: "2 Saturdays/month · 10 AM–1 PM" },
          { dt: "Cost", dd: "$75 per day" },
        ],
      },
      {
        name: "Laser / ILCA Clinics",
        desc: "Ready to sharpen your skills and get race-course confident? Ideal for intermediate Laser/ILCA sailors refining boat handling and racing strategy. Hands-on coaching focused on mark roundings, starts, upwind/downwind tactics, and situational awareness — in a fun, supportive environment.",
        image: "/assets/courses/ilca.jpg",
        meta: [
          { dt: "Prereq", dd: "Comfortable sailing solo in moderate wind, managing basic sail trim and maneuvers" },
          { dt: "Format", dd: "On-water drills, tactical discussions, race simulations" },
          { dt: "Schedule", dd: "Saturdays, 9 AM–1 PM" },
          { dt: "Cost", dd: "$75 members · $95 non-members" },
        ],
      },
      {
        name: "Windsurfing Clinics",
        desc: "Ready to take your windsurfing to the next level? Perfect for intermediate sailors comfortable on the board who want to dip into windsurfing competition. Guided coaching on different courses, racing drills, and an introduction to beginner-level racing tactics — in a relaxed, supportive setting.",
        image: "/assets/courses/windsurf.jpg",
        meta: [
          { dt: "Prereq", dd: "Comfortable sailing in moderate wind and completing basic maneuvers" },
          { dt: "Format", dd: "On-water training focused on racing techniques and decision-making" },
          { dt: "Schedule", dd: "Saturdays, 1–4 PM" },
          { dt: "Cost", dd: "$75 members · $95 non-members" },
          { dt: "Contact", dd: "Rosa Lamela · adultsailing@cgsc.org · (305) 747-2600" },
        ],
      },
    ],
  },
  cruising: {
    eyebrow: "Cruising & Navigation",
    headline: "Go further.",
    sub: "Multi-day cruising certifications and classroom navigation courses for sailors building toward bigger water.",
    courses: [
      {
        name: "Basic Cruising Course + Certification",
        desc: "Build on your keelboat skills with three days of cruising-focused instruction covering boat systems, weather awareness, safety preparations, chart reading, navigation, and more.",
        image: "",
        meta: [
          { dt: "Prereq", dd: "US Sailing Basic Keelboat Certification" },
          { dt: "Schedule", dd: "Dec 19–21, 2025 · Jan 9–11 · Mar 20–22 · May 1–3 · 9 AM–4:30 PM" },
          { dt: "Cost", dd: "$1,155 members · $1,255 non-members" },
        ],
      },
      {
        name: "Bareboat Cruising Certification",
        desc: "A 4-day in-depth course covering planning and provisioning for extended cruising, emergency procedures, anchoring overnight, advanced sail trim, and other key topics.",
        image: "",
        meta: [
          { dt: "Prereq", dd: "Basic Cruising Certification" },
          { dt: "Schedule", dd: "Dec 5–8 · Feb 20–23 · Apr 17–20 · Jun 26–29 · 9 AM–4:30 PM" },
          { dt: "Cost", dd: "$1,375 members · $1,475 non-members" },
        ],
      },
      {
        name: "Coastal Navigation",
        desc: "Navigate with confidence — without electronics. Learn traditional skills using paper charts, bearings, dead-reckoning plotting, and more.",
        image: "",
        meta: [
          { dt: "Format", dd: "4-evening classroom course · Mon & Thu, 5:30–9 PM" },
          { dt: "Dates", dd: "January 19, 22, 26, 29" },
          { dt: "Class size", dd: "Max 4 students" },
          { dt: "Cost", dd: "$720 members · $770 non-members" },
        ],
      },
      {
        name: "Celestial Navigation",
        desc: "Master the timeless art of navigating by the sun, moon, planets, and stars.",
        image: "",
        meta: [
          { dt: "Prereq", dd: "US Sailing Coastal Navigation" },
          { dt: "Format", dd: "6 classroom sessions · Mon & Thu, 5:30–9 PM" },
          { dt: "Dates", dd: "March 9, 12, 16, 23, 26" },
          { dt: "Cost", dd: "$1,025 members · $1,075 non-members" },
        ],
      },
    ],
  },
  seasonal: {
    eyebrow: "Off-season",
    headline: "Keep your skills sharp this winter.",
    sub: "While Flying Scot Wednesday-night racing and Laser clinics take a break until daylight saving returns on March 8, the fun continues — sign up for Flying Scot, Windsurf, and Sunfish clinics to keep sailing, learning, and connecting with your fleet.",
    items: [
      {
        name: "Flying Scot Clinics",
        lines: ["Every other Saturday · 10 AM–1 PM", "Bud Price · flyingscot@cgsc.org"],
      },
      {
        name: "Sunfish Clinics",
        lines: ["Sundays · 3–6 PM", "Marc Pendaries · Marc.pendaries@hotmail.com"],
      },
      {
        name: "Windsurf Clinics",
        lines: ["Saturdays · 1–4 PM", "Norlem Garcia · garcianorlem@gmail.com"],
      },
    ],
  },
  whereWeSail: {
    eyebrow: "Where we sail",
    headline: "On Biscayne Bay, in Coconut Grove.",
    prose1:
      "The Instructional Center is on the water at **2990 S. Bayshore Drive** — a five-minute walk from downtown Coconut Grove, with the full CGSC fleet, dock, and coaching staff on site.",
    prose2Pre:
      "CGSC Instructional Center is a 501(c)(3) nonprofit and part of Coconut Grove Sailing Club. ",
    prose2LinkText: "Visit the parent club →",
    prose2LinkHref: "https://cgsc.org/",
  },
  coaches: {
    eyebrow: "The instructors",
    headline: "US Sailing-certified, across every program.",
    sub: "Every adult course and clinic is taught by US Sailing-certified instructors — the same staff who run the Center's youth and high-performance programs.",
    people: [
      { name: "Maru Urban", role: "Director · Sailing Performance & Development" },
      { name: "Steve Mitchell", role: "High Performance Lead" },
      { name: "Rosa Lamela", role: "Director of Programs Development" },
      { name: "Orlando Gonzalez", role: "ILCA Coach" },
      { name: "Lauren Simpson", role: "General Manager" },
    ],
    ctaLabel: "Meet the full team →",
    ctaHref: "/about#coaches",
  },
  register: {
    eyebrow: "Register",
    headline: "Sign up for 2026 adult courses.",
    sub: "Registration is open through Clubspot. Not sure which course fits? Send a note or call — Rosa runs the adult program.",
    ctaLabel: "Click here to sign up →",
    ctaHref: "https://theclubspot.com/register/camp/LdHHFDWymd/class",
    form: {
      eyebrow: "Questions first?",
      headlinePre: "Not sure which course fits? ",
      headlineEmphasis: "Ask us.",
      helper: "Tell us your experience level and what you want to do on the water; we'll point you to the right course or clinic.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Email",
      interestLabel: "Which course interests you?",
      interestOptions: [
        "Basic Keelboat",
        "Flying Scot lessons",
        "Windsurf / Wingfoil",
        "Sunfish course / clinics",
        "Laser / ILCA clinics",
        "Cruising & certification",
        "Navigation (Coastal / Celestial)",
        "Not sure — help me choose",
      ],
      experienceLabel: "Sailing experience",
      experienceOptions: [
        "Total beginner",
        "Some sailing, long time ago",
        "Sail occasionally now",
        "Experienced, want to refine",
      ],
      notesPlaceholder: "Anything else? (Optional)",
      submitLabel: "Send →",
    },
    info: {
      eyebrow: "Adult program contact",
      contactLbl: "Rosa Lamela · Director of Programs Development",
      contactEmail: "adultsailing@cgsc.org",
      contactPhone: "305.747.2600",
      contactPhoneHref: "tel:+13057472600",
      officeLbl: "Main office",
      officePhone: "(305) 444-4571",
      officePhoneHref: "tel:+13054444571",
      locationLbl: "Location",
      locationLine1: "2990 S. Bayshore Drive",
      locationLine2: "Miami, FL 33133",
      footPre: "Flying Scot lessons: contact Bud Price · ",
      footEmail: "flyingscot@cgsc.org",
      footPost: ".",
    },
  },
};

export type AdultSailingContent = typeof ADULT_SAILING_CONTENT;
