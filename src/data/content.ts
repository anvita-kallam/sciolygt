export const CONTACT = {
  email: "scioly.gatech@gmail.com",
  instagram: "https://www.instagram.com/gtscioly/",
  instagramHandle: "@gtscioly",
  soinc: "https://www.soinc.org/",
};

export const HERO = {
  eyebrow: "Georgia Institute of Technology",
  title: "Science Olympiad",
};

export const ABOUT = {
  mission:
    "Science Olympiad at Georgia Tech is an undergraduate student group with a mission to engage and empower students striving to become scientists and engineers through the Science Olympiad experience.",
  detail:
    "We work year-round to promote Science Olympiad opportunities for students both within and outside of Georgia. We are especially excited to be hosting the Georgia Science Olympiad State Tournament and our 4th annual Yellow Jacket Invitational!",
  stats: [
    { value: "5th", label: "Year Hosting States" },
    { value: "4th", label: "Annual YJI" },
    { value: "23+", label: "STEM Events" },
  ],
};

export type TeamMember = {
  name: string;
  role: string;
  img: string;
  group: string;
};

export const TEAM: TeamMember[] = [
  { name: "Ethan Maraldo", role: "President", img: "/images/execPics/Ethan.jpeg", group: "Leadership" },
  { name: "Femke Kovoor", role: "VP of Club Logistics & Outreach", img: "/images/execPics/Femke.jpg", group: "Leadership" },
  { name: "Krish Patil", role: "VP of Tournament Logistics", img: "/images/execPics/Krish.jpeg", group: "Leadership" },
  { name: "Victor Hesu", role: "VP of Communications", img: "/images/execPics/Victor.jpg", group: "Leadership" },
  { name: "Samrita Shetty", role: "Logistics Co-Director", img: "/images/execPics/Samrita.jpeg", group: "Logistics" },
  { name: "Rachel Nam", role: "Logistics Co-Director", img: "/images/execPics/Rachel.jpg", group: "Logistics" },
  { name: "Thomas Becker", role: "Exam Co-Director", img: "/images/execPics/Thomas.JPG", group: "Exam" },
  { name: "Larissa Martin", role: "Exam Co-Director", img: "/images/execPics/Lyn.jpg", group: "Exam" },
  { name: "Devam Shrivastava", role: "Build Co-Director", img: "/images/execPics/Devam.jpeg", group: "Build" },
  { name: "Nathan Donagi", role: "Build Co-Director", img: "/images/execPics/Nathan.jpg", group: "Build" },
  { name: "Justin Li", role: "Finance Co-Director", img: "/images/execPics/Justin.jpg", group: "Finance" },
  { name: "Sishnukeshav Balamurali", role: "Finance Co-Director", img: "/images/execPics/Sishnu.jpg", group: "Finance" },
  { name: "Swathi Mugundu Pradeep", role: "Creative Co-Director", img: "/images/execPics/Swathi.jpg", group: "Creative" },
  { name: "Melody Lee", role: "Creative Co-Director", img: "/images/execPics/Melody.jpeg", group: "Creative" },
  { name: "Johnny Chen", role: "Outreach Co-Director", img: "/images/execPics/Johnny.jpg", group: "Outreach" },
  { name: "Yaitihya Sahoo", role: "Outreach Co-Director", img: "/images/execPics/Yaiti.jpg", group: "Outreach" },
];

export type Tournament = {
  name: string;
  date: string;
  description: string;
  details: string[];
  links: { label: string; href: string }[];
  highlight?: string;
};

export const TOURNAMENTS: Tournament[] = [
  {
    name: "Yellow Jacket Invitational 2027",
    date: "February 6, 2027",
    description:
      "Our 4th annual invitational welcomes Division B and Division C teams from across the region for a full day of STEM competition on the Georgia Tech campus.",
    details: [
      "Regular registration: $190/team — August 9th – December 13th",
      "Late registration: $210/team — December 14th – January 10th",
      "August 9th – August 22nd: Georgia schools only",
      "August 23rd onward: schools outside Georgia may register",
    ],
    links: [
      { label: "Registration Form — Coming Soon", href: "" },
      { label: "Registered Teams — Coming Soon", href: "" },
    ],
  },
  {
    name: "2026 Division C Georgia State Tournament",
    date: "April 4, 2026",
    description:
      "Science Olympiad at Georgia Tech is proud to host the 2026 Division C Georgia State Tournament. This event brings together hundreds of high school students from across the state to compete in rigorous science and engineering challenges.",
    details: [
      "Volunteers needed for event logistics, proctoring, and general support",
      "No prior Science Olympiad experience required",
      "Free food and t-shirts provided for volunteers",
    ],
    links: [
      { label: "Volunteer Sign-Up", href: "https://docs.google.com/forms/d/e/1FAIpQLSekFTVWk0ZQ-mK0fVWTKB21nae7Nm60SFrXWxuVJWlGmNUWpA/viewform" },
    ],
  },
];

export type PastTournamentLink = {
  label: string;
  href: string;
};

export const PAST_TOURNAMENTS: {
  states: PastTournamentLink[];
  yji: PastTournamentLink[];
} = {
  states: [
    { label: "2022", href: "/pastTournaments/2022" },
    { label: "2023", href: "/pastTournaments/2023" },
    { label: "2024", href: "/pastTournaments/2024" },
    { label: "2025", href: "/pastTournaments/2025" },
  ],
  yji: [
    { label: "2024", href: "/pastTournaments/YJI2024" },
    { label: "2025", href: "/pastTournaments/YJI2025" },
    { label: "2026", href: "/yji-2026" },
  ],
};

export const GET_INVOLVED = {
  engageUrl: "https://gatech.campuslabs.com/engage/",
  steps: [
    { step: "01", title: "Visit Engage", description: "Go to gatech.campuslabs.com/engage/ and log in with your Georgia Tech email." },
    { step: "02", title: "Join the organization", description: "Search for Science Olympiad and click Join to become a member." },
    { step: "03", title: "Volunteer at tournaments", description: "Help run events at YJI or the Georgia State Tournament — no prior experience needed." },
  ],
  volunteerNote:
    "We are looking for volunteers to help with event logistics, proctoring, and general support. Free food and t-shirts are provided!",
};

export const SPONSORSHIP = {
  intro:
    "Science Olympiad provides a STEM-oriented competition environment, where passionate high school students and Georgia Tech student volunteers coalesce. Funding is necessary to host the State tournament and workshops for Atlanta high school students on the prestigious Georgia Tech campus.",
  tiers: [
    { name: "Gold", amount: "$2,500+", benefit: "Major feature in all events, logo on any promotions, special mentions — in addition to rewards below." },
    { name: "Silver", amount: "$1,000+", benefit: "Logo featured on t-shirts, mentions in selected events and media — in addition to rewards below." },
    { name: "Bronze", amount: "$500+", benefit: "Acknowledgment during event, logo in program brochure." },
  ],
  sponsors: ["Georgia Tech Seal"],
};

export const FAQ_ITEMS = [
  {
    question: "How many teams can participate in YJI?",
    answer:
      "Due to logistical constraints, we accept 50 Division C teams and 30 Division B teams. Spots are allotted on a first-come, first-served basis if registration exceeds capacity.",
  },
  {
    question: "How many teams per school are allowed?",
    answer:
      "We guarantee 2 teams per school per division (up to 4 teams for schools with both B and C programs). Additional teams may be allowed on a case-by-case basis.",
  },
  {
    question: "What is the registration fee?",
    answer:
      "Regular registration (August 9 – December 13): $190/team. Late registration (December 14 – January 10): $210/team. From August 9–22, only Georgia schools can register; schools outside Georgia may begin registering on August 23. Checks must be payable to Georgia Tech with 'Science Olympiad @ Georgia Tech' in the memo line.",
  },
  {
    question: "How can GT students get involved?",
    answer:
      "Visit Engage (gatech.campuslabs.com/engage/), log in with your GT email, search for Science Olympiad, and click Join. You can also volunteer at our tournaments.",
  },
  {
    question: "I need an invoice for payment — who do I contact?",
    answer: "Email scioly.gatech@gmail.com if you need an invoice for payment.",
  },
  {
    question: "Where can I learn more about Science Olympiad nationally?",
    answer: "Visit soinc.org for official rules, event descriptions, and national tournament information.",
  },
];
