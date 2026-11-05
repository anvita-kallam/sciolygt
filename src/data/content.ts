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
  { name: "Lyn Martin", role: "President", img: "/images/execPics/Lyn.jpg", group: "Leadership" },
  { name: "Ethan Maraldo", role: "VP of Communications", img: "/images/execPics/Ethan.jpeg", group: "Leadership" },
  { name: "Samrita Shetty", role: "VP of Tournament", img: "/images/execPics/Samrita.jpeg", group: "Leadership" },
  { name: "Connor Schmitt", role: "VP of Outreach", img: "/images/execPics/Connor.jpg", group: "Leadership" },
  { name: "Anvita Kallam", role: "Creative Co-Director", img: "/images/execPics/Anvita.jpg", group: "Creative" },
  { name: "Rachel Nam", role: "Creative Co-Director", img: "/images/execPics/Rachel.jpg", group: "Creative" },
  { name: "Johnny Chen", role: "Outreach Co-Director", img: "/images/execPics/Johnny.jpg", group: "Outreach" },
  { name: "Sean Chen", role: "Outreach Co-Director", img: "/images/execPics/Sean.jpg", group: "Outreach" },
  { name: "Krish Patil", role: "Logistics Co-Director", img: "/images/execPics/Krish.jpeg", group: "Logistics" },
  { name: "Joseph Pan", role: "Logistics Co-Director", img: "", group: "Logistics" },
  { name: "Thomas Becker", role: "Exam Co-Director", img: "/images/execPics/Thomas.JPG", group: "Exam" },
  { name: "Felix Gusic", role: "Exam Co-Director", img: "", group: "Exam" },
  { name: "Nathan Donagi", role: "Build Co-Director", img: "/images/execPics/Nathan.jpg", group: "Build" },
  { name: "Arthur Armaing", role: "Build Co-Director", img: "/images/execPics/Arthur.jpg", group: "Build" },
  { name: "Sishnukeshav Balamurali", role: "Finance Co-Director", img: "/images/execPics/Sishnu.jpg", group: "Finance" },
  { name: "Somil Choure", role: "Finance Co-Director", img: "/images/execPics/Somil.jpg", group: "Finance" },
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
      { label: "Registration Form", href: "https://docs.google.com/forms/d/e/1FAIpQLSeZF6hLS6IhVbEPWeOWE9BvlG3u7rYImFx2ALSMXzg3_eVO0Q/viewform?usp=dialog" },
      { label: "Registered Teams", href: "https://docs.google.com/spreadsheets/d/1bzKL1CUP3ku5pJzZDfvM74pIYtH4U0kkaA3RMDAWSA0/edit?usp=sharing" },
    ],
  },
  {
    name: "2027 Division C Georgia State Tournament",
    date: "April 10, 2027",
    description:
      "Science Olympiad at Georgia Tech is proud to host the 2027 Division C Georgia State Tournament. This event brings together hundreds of high school students from across the state to compete in rigorous science and engineering challenges.",
    details: [
      "Volunteers needed for event logistics, proctoring, and general support",
      "No prior Science Olympiad experience required",
      "Free food and t-shirts provided for volunteers",
    ],
    links: [
      { label: "Volunteer Sign-Up — Coming Soon", href: "" },
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
  volunteerUrl: "",
  eventSupervisorUrl: "https://forms.gle/mN4FfyZfoBiUcA3h9",
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
    "Science Olympiad at Georgia Tech would not be possible without the generous donations from our sponsors. All contributions are tax-deductible through our 501(c)(3) organization. If your company would like to get involved with Science Olympiad at Georgia Tech, please contact us at sponsorships@sciolygatech.org for more information.",
};

export const FAQ_ITEMS = [
  {
    question: "How many teams can participate in YJI?",
    answer:
      "Due to logistical constraints, we accept 60 Division C teams and 40 Division B teams. Spots are allotted on a first-come, first-served basis if registration exceeds capacity.",
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
