// 2026 Fall Youth Sailing content — exact copy from the client's
// "Fall-Youth-Sailing-SEO Ready - FINAL" doc (2026-08-02).
// Rendered by components/FallYouth2026.tsx on /programs/camps-coaching.
// Single source of truth — edit this file to change the page's copy.

export const FALL_YOUTH_REGISTRATION_URL =
  "https://theclubspot.com/register/camp/fa7vTl77ap/class";

export type FallYouthProgram = {
  name: string;
  description?: string;
  options: {
    label?: string;
    description?: string;
    when: string[];
    fee: string;
  }[];
};

export const FALL_YOUTH_CONTENT = {
  registrationUrl: FALL_YOUTH_REGISTRATION_URL,
  seo: {
    title: "Youth Sailing Lessons & Camps in Miami | Coconut Grove Sailing",
    description:
      "Kids & teens learn to sail on Biscayne Bay — Optimist lessons, after-school sailing, windsurfing & racing in Coconut Grove, Miami. Ages 6+. Fall 2026.",
  },
  hero: {
    breadcrumbHomeLabel: "Home",
    breadcrumbHomeHref: "/",
    breadcrumbProgramsLabel: "Programs",
    breadcrumbProgramsHref: "/programs",
    breadcrumbCurrent: "Youth Sailing",
    h1: "Youth Sailing Lessons in Miami — Ages 6 and Up",
    subhead:
      "Youth sailing lessons, camps, and racing for kids and teens ages 6 and up — on Biscayne Bay at Coconut Grove Sailing Club in Miami.",
    locationChip: "Biscayne Bay · Coconut Grove",
  },
  header: {
    title: "2026 Fall Youth Sailing",
    dateChip: "August 29 – December 13",
    ctaLabel: "Register for Fall Youth Sailing →",
    ctaNote: "Registration is handled on Clubspot — opens in a new tab.",
  },
  familyNote: {
    headline: "A Note to Our Families",
    paragraphs: [
      "This past summer reminded us exactly why we do this. Nearly 400 children and teens came through our doors — many discovering sailing for the first time, realizing they could captain their own boat, building real skills, and planting the first seeds in their journey to becoming lifelong sailors.",
      "The school year is the perfect time to keep that going. Whether your child is stepping onto a boat for the very first time or continuing to build their skills and understanding of the sport, there's a place for them here — on the path toward racing or simply enjoying sailing as a passion they'll carry for life.",
      "This season, we're introducing a change we know will make a real difference: our Learn to Sail and Development programs now meet twice a week. Consistency is how young sailors improve. More time on the water reinforces each lesson before it fades and accelerates how quickly they learn. And that momentum builds real confidence — and real excitement about moving up to the next level.",
      "Thank you for being part of our community — we can't wait to see your kids on the water this fall.",
    ],
    signature: {
      name: "Rosa Lamela",
      role: "Director of Programs and Development",
      org: "Coconut Grove Sailing Club Instructional Center",
    },
  },
  pathwayImage: {
    src: "/assets/pathway/develop.jpg",
    alt: "Youth sailing pathway at Coconut Grove Sailing Club — from Optimist beginner lessons to racing and windsurfing",
  },
  // Program sections. Each program has one or more options;
  // single-option programs get one unlabeled option.
  optiSection: {
    headline: "Learn to Sail an Optimist",
    sub: "For beginner and novice sailors, ages 6–12",
    intro:
      "This is where every young sailor starts. Choose the level of commitment that fits your child — from a relaxed once-a-week introduction to twice-weekly practice for faster progress.",
    programs: [
      {
        name: "Discover Opti Sailing",
        description:
          "A relaxed, once-a-week introduction for children trying sailing for the first time — the perfect way to find out whether they love being on the water, with no experience needed. They'll sail the Optimist, the boat nearly every young sailor in the world learns on, and pick up the basics: steering, tacking, sail trim, points of sail, and rigging.",
        options: [
          {
            when: ["Fridays, 4:00 – 6:00 PM"],
            fee: "Member $825 | Non-Member $935",
          },
        ],
      },
      {
        name: "After School Opti Sailing",
        description:
          "For beginners who want to progress faster. With two practices a week instead of one, sailors get more time on the water and build their skills more quickly — learning steering, tacking, points of wind, sail trim, rigging, and docking, with two sailors to a boat. It's the fastest way to reach the Intermediate level, where they'll begin sailing solo.",
        options: [
          {
            when: ["Tuesdays & Thursdays, 4:00 – 6:00 PM"],
            fee: "Member $1,060 | Non-Member $1,165",
          },
        ],
      },
      {
        name: "After School + Weekend Combo",
        description:
          "Everything in After School Sailing, plus a longer weekend session. Where weekday practices move quickly, Saturdays offer a more relaxed pace with extra time both on land and on the water — and a little more room for fun.",
        options: [
          {
            when: ["Thursdays 4:00 – 6:00 PM · Saturdays 11:00 AM – 4:00 PM"],
            fee: "Member $1,275 | Non-Member $1,380",
          },
        ],
      },
      {
        name: "Intermediate Level Opti",
        description:
          "These sailors are ready to sail solo and improve their boat handling skills. Proper tacking, upwind and downwind sailing, and a first introduction to sailing a triangle course all come into view as they begin to prepare for racing. This is where their understanding of how the wind affects their boat begins to make sense.",
        options: [
          {
            when: [
              "Wednesdays 4:00 – 6:00 PM · Sundays 11:00 AM – 4:00 PM",
              "Thursdays, 4:00 – Saturdays 11:00 AM – 4:00 PM",
            ],
            fee: "Member $1,315 | Non-Member $1,420",
          },
        ],
      },
    ],
  },
  beyondSection: {
    headline: "The Pathway Beyond Opti",
    intro:
      "Once a sailor has their footing, the water opens up. Some try something new; some move to a bigger, faster boat. These programs are the next chapter.",
    windsurfingLead: {
      headline: "Windsurfing",
      body: "Fast, active, and endlessly fun, windsurfing is a favorite for kids and teens who want something different — before, during, or after Opti sailing. Today's child- and teen-friendly equipment helps newcomers gain confidence quickly, and more advanced sailors can work their way up to foiling. Ages 6 and up welcome.",
    },
    programs: [
      {
        name: "Discover Windsurfing",
        description:
          "For those kids who want to find out if fun, fast and exciting on the water is for them. This class is for those sailors trying windsurfing for the first time.",
        options: [
          {
            when: ["Fridays, 4:00 – 6:00 PM"],
            fee: "Member $825 | Non-Member $935",
          },
        ],
      },
      {
        name: "Learn to Windsurf",
        description:
          "For those ready to learn to windsurf. New sailors get comfortable on the board, find their balance, and learn to read the wind and steer — the foundation for everything that comes next. Child- and teen-friendly gear makes those first rides easier, so confidence builds fast. Ages 6+ welcome.",
        options: [
          {
            when: ["Fridays, 4:00 – 6:00 PM, Sundays, 9:00 AM – 12:00 PM"],
            fee: "Member $1,275 | Non-Member $1,380",
          },
        ],
      },
      {
        name: "Windsurfing Intermediate",
        description: "Choose the schedule:",
        options: [
          {
            label: "Two Weekdays",
            description:
              "The standard intermediate schedule — two afternoons a week for steady, consistent progress toward foiling.",
            when: ["Tuesdays & Wednesdays, 4:00 – 6:00 PM"],
            fee: "Member $1,060 | Non-Member $1,165",
          },
          {
            label: "After School + Sunday PM Combo",
            description:
              "One weekday afternoon plus a longer Sunday on the water — ideal for families whose weekday schedules are already packed. Your sailor still gets the twice-a-week consistency that drives progress, without needing to be on the water two afternoons after school.",
            when: [
              "Tuesdays or Wednesdays, 4:00 – 6:00 PM, plus Sundays, 1:00 – 5:00 PM",
            ],
            fee: "Member $1,315 | Non-Member $1,420",
          },
          {
            label: "3-Day Option",
            description:
              "For the sailor who can't get enough. Three sessions a week for kids who live for time on their boards and want to progress as fast as they can. It's the surest path from working toward foiling to flying above Biscayne Bay.",
            when: [
              "Tuesdays & Wednesdays, 4:00 – 6:00 PM, plus Sundays, 1:00 – 5:00 PM",
            ],
            fee: "Member $1,525 | Non-Member $1,630",
          },
        ],
      },
      {
        name: "Wing Foiling",
        description:
          "An exciting new addition to our program. Wing foiling offers speed, control, and a real sense of flight above the water — perfect for active sailors and newcomers alike. Helmets are required. Ages 9+ welcome.",
        options: [
          {
            when: ["Thursdays, 4:00 – 6:00 PM"],
            fee: "Member $825 | Non-Member $935",
          },
        ],
      },
      {
        name: "Wing Foil + Windsurf",
        description:
          "For those who want a taste of both exciting sports, we offer a two-day option:",
        options: [
          {
            when: [
              "Wing Foil Thursdays 4:00 – 6:00 PM | Windsurf Fridays: 4:00 – 6:00 PM",
            ],
            fee: "Member $1,275 | Non-Member $1,380",
          },
        ],
      },
      {
        name: "ILCA (Laser) Development",
        description:
          "For sailors ages 12+ who have outgrown the Opti, or teens just discovering the sport. The ILCA — long known as the Laser — is a 13-foot, one-person Olympic-class boat that rewards sailors ready for more speed and performance. Its adjustable rig grows with them, too: as they get taller and stronger, the boat adapts to match, making it one to sail for years rather than seasons. A complete boat is provided.",
        options: [
          {
            when: ["Fridays 4:00 – 6:00/7:00 PM · Saturdays 10:00 AM – 3:00 PM"],
            fee: "Member $1,275 | Non-Member $1,380",
          },
        ],
      },
      {
        name: "C420 Development",
        description:
          "The C420 is a two-person boat that's both fun to sail and rewarding to race with a partner aboard — and it's the boat of choice for high school and college teams across the country. Ideal for middle and high school students, with or without sailing experience. Ages 12+. A complete boat is provided.",
        options: [
          {
            label: "Choose your schedule:",
            when: ["Saturdays or Sundays 12:00 – 5:00 PM"],
            fee: "Member $1,060 | Non-Member $1,165",
          },
          {
            label: "Full Weekend",
            when: ["Saturdays and Sundays 12:00 – 5:00 PM"],
            fee: "Member $1,535 | Non-Member $1,640",
          },
        ],
      },
    ],
  },
  moreWaysSection: {
    headline: "More Ways to Get on the Water",
    programs: [
      {
        name: "Home School Sailing",
        description:
          "A growing program, and a wonderful way for home-school students to learn about wind, water, sailing, and windsurfing. Two three-hour morning sessions each week let sailors build lifelong skills while spending valuable time together. Our larger boats comfortably accommodate teens looking for adventure and camaraderie with kids their own age. Ages 6–17 welcome.",
        options: [
          {
            label: "One Day",
            when: ["Wednesdays or Thursdays, 10:00 AM – 1:00 PM"],
            fee: "$1,100",
          },
          {
            label: "Two Days",
            when: ["Wednesdays & Thursdays, 10:00 AM – 1:00 PM"],
            fee: "$1,495",
          },
        ],
      },
    ],
  },
  faq: {
    headline: "Frequently Asked Questions",
    items: [
      {
        question: "How old does my child need to be to start sailing?",
        answer:
          "Children can begin our Optimist and Learn to Sail and programs at age 6. Windsurfing also starts at age 6, and our bigger-boat development programs (ILCA and C420) begin at age 12.",
      },
      {
        question: "Does my child need any experience?",
        answer:
          "None at all. Beginners start with two sailors to a boat on an Optimist and move to sailing solo as their confidence grows.",
      },
      {
        question: "What is an Optimist?",
        answer:
          'The Optimist ("Opti") is a small, stable one-person sailboat used to teach nearly every young sailor in the world. It\'s the boat kids learn on before moving up to bigger boats.',
      },
      {
        question:
          "My middle schooler or teen has never sailed — where do they start?",
        answer:
          "Right here. Most begin in the C420, a two-person boat where new sailors learn alongside a partner and a coach — no experience needed. Teens who'd rather sail solo can start in the ILCA, and windsurfing is open to beginners at any age. Tell us your teen's age and interests and we'll point you to the right fit.",
      },
      {
        question: "Can my 7-year-old really learn to windsurf?",
        answer:
          "Yes — and more easily than you might expect. Today's kids' equipment is nothing like the windsurfing gear of twenty years ago: lighter boards, and small sails sized to a child's height and strength. Add shallow, protected water and a coach close by, and most young sailors are up and moving within their first few sessions.",
      },
      {
        question: "How often do you offer sailing lessons for children and teens?",
        answer:
          "We offer year-round sailing programs throughout the school year along with summer, winter and spring-break camps.",
      },
      {
        question: "Where are you located?",
        answer:
          "At Coconut Grove Sailing Club, 2990 S Bayshore Drive, Miami, FL 33133 — on Biscayne Bay, right next to Peacock Park.",
      },
    ],
  },
  readyToRace: {
    headline: "Ready to Race?",
    intro:
      "When a sailor is ready for competition, our racing teams take over from here — from friendly first regattas in the Green Fleet all the way to high school sailing. Racing has its own season, schedules, and details, so we've given it its own page.",
    listLead: "On the racing page you'll find:",
    fleets: [
      { name: "Opti Green Fleet", detail: "Beginner racing — the first step onto a team" },
      { name: "Opti Red / White / Blue Fleet", detail: "Advanced Opti racing" },
      { name: "ILCA Racing", detail: "Single-handed competition for sailors 12+" },
      { name: "C420 Racing", detail: "Two-person team racing" },
      { name: "High School Sailing", detail: "For student athletes racing under their school" },
    ],
    ctaLabel: "EXPLORE RACING TEAMS →",
    ctaHref: "/programs/race-team",
  },
  registration: {
    headline: "Registration",
    ctaLabel: "Register on Clubspot →",
  },
  contact: {
    headline: "Questions? Contact:",
    name: "Rosa Lamela",
    role: "Director of Programs & Development",
    emailText: "icmanager@cgsc.org",
    emailHref: "mailto:icmanager@cgsc.org",
    phoneText: "305.747.2600",
    phoneHref: "tel:+13057472600",
  },
};

export type FallYouthContent = typeof FALL_YOUTH_CONTENT;
