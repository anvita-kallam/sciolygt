import allResults2022 from "../../data/allResults/states/allResults2022";
import allResults2023 from "../../data/allResults/states/allResults2023";
import allResults2024A from "../../data/allResults/states/allResults2024A";
import allResults2024AA from "../../data/allResults/states/allResults2024AA";
import allResults2025A from "../../data/allResults/states/allResults2025A";
import allResults2025AA from "../../data/allResults/states/allResults2025AA";
import allResultsYJI2024 from "../../data/allResults/YJI/allResultsYJI2024";
import allResultsYJI2025B from "../../data/allResults/YJI/allResultsYJI2025B";
import allResultsYJI2025C from "../../data/allResults/YJI/allResultsYJI2025C";
import eventResults2022 from "../../data/eventResults/states/eventResults2022";
import eventResults2023 from "../../data/eventResults/states/eventResults2023";
import eventResults2024A from "../../data/eventResults/states/eventResults2024A";
import eventResults2024AA from "../../data/eventResults/states/eventResults2024AA";
import eventResults2025A from "../../data/eventResults/states/eventResults2025A";
import eventResults2025AA from "../../data/eventResults/states/eventResults2025AA";
import eventResultsYJI2024 from "../../data/eventResults/yji/eventResultsYJI2024";
import eventResultsYJI2025B from "../../data/eventResults/yji/eventResultsYJI2025B";
import eventResultsYJI2025C from "../../data/eventResults/yji/eventResultsYJI2025C";

export type ResultEntry = {
  key: number;
  bold?: boolean;
  school: string;
  town?: string;
};

export type EventEntry = {
  key: number;
  event: string;
  school: string;
};

export type DivisionResults = {
  label: string;
  overall: ResultEntry[];
  events: EventEntry[];
  allResultsUrl?: string;
};

export type PastTournamentConfig = {
  slug: string;
  title: string;
  subtitle?: string;
  intro?: string;
  heroImage?: string;
  photos?: string[];
  photosUrl?: string;
  divisions: DivisionResults[];
  infoDocUrl?: string;
};

export const PAST_TOURNAMENT_INDEX = {
  states: ["2022", "2023", "2024", "2025"],
  yji: ["YJI2024", "YJI2025"],
} as const;

export const PAST_TOURNAMENT_ARCHIVE: Record<string, PastTournamentConfig> = {
  "2022": {
    slug: "2022",
    title: "2022 State Division C Tournament",
    subtitle: "State Comes To Tech!",
    intro:
      "Science Olympiad at Georgia Tech was honored to host the Division C State Tournament for the first time on the Georgia Tech campus for the 2021-2022 season. 30 teams came from across the state to the premier public institution in science and engineering to kick off what we hope to be a long-standing Science Olympiad tradition.",
    heroImage: "/images/2022/2022Pic.jpg",
    divisions: [
      {
        label: "Overall Results",
        overall: allResults2022,
        events: eventResults2022,
      },
    ],
  },
  "2023": {
    slug: "2023",
    title: "2023 State Division C Tournament",
    photos: [
      "/images/2023/2023-1.jpg",
      "/images/2023/2023-2.jpg",
      "/images/2023/2023-3.jpg",
      "/images/2023/2023-4.jpg",
      "/images/2023/2023-5.jpg",
      "/images/2023/2023-6.jpg",
      "/images/2023/2023-7.jpg",
      "/images/2023/2023-8.jpg",
      "/images/2023/2023-9.jpg",
      "/images/2023/2023-10.jpg",
      "/images/2023/2023-11.jpg",
      "/images/2023/2023-12.jpg",
      "/images/2023/2023-13.jpg",
      "/images/2023/2023-14.jpg",
      "/images/2023/2023-15.jpg",
      "/images/2023/2023-16.jpg",
      "/images/2023/2023-17.jpg",
      "/images/2023/2023-18.jpg",
      "/images/2023/2023-19.jpg",
      "/images/2023/2023-20.jpg",
    ],
    divisions: [
      {
        label: "Overall Results",
        overall: allResults2023,
        events: eventResults2023,
      },
    ],
  },
  "2024": {
    slug: "2024",
    title: "2024 State Tournament",
    photos: [
      "/images/2024/States/Pictures/1.jpg",
      "/images/2024/States/Pictures/2.jpg",
      "/images/2024/States/Pictures/3.jpg",
      "/images/2024/States/Pictures/4.jpg",
      "/images/2024/States/Pictures/5.jpg",
      "/images/2024/States/Pictures/6.jpg",
      "/images/2024/States/Pictures/9.jpg",
      "/images/2024/States/Pictures/10.jpg",
      "/images/2024/States/Pictures/11.jpg",
      "/images/2024/States/Pictures/12.jpg",
      "/images/2024/States/Pictures/13.jpg",
      "/images/2024/States/Pictures/14.jpg",
      "/images/2024/States/Pictures/15.jpg",
      "/images/2024/States/Pictures/16.jpg",
      "/images/2024/States/Pictures/17.jpg",
      "/images/2024/States/Pictures/18.jpg",
      "/images/2024/States/Pictures/20.jpg",
      "/images/2024/States/Pictures/22.jpg",
      "/images/2024/States/Pictures/23.jpg",
      "/images/2024/States/Pictures/24.jpg",
      "/images/2024/States/Pictures/25.jpg",
      "/images/2024/States/Pictures/26.jpg",
    ],
    photosUrl: "https://photos.app.goo.gl/XdMw9MzsvQxwv6Ca9",
    divisions: [
      {
        label: "AA Overall Results",
        overall: allResults2024AA,
        events: eventResults2024AA,
        allResultsUrl: "https://www.duosmium.org/results/2024-03-30_GA_states_aa_flight_c/",
      },
      {
        label: "A Overall Results",
        overall: allResults2024A,
        events: eventResults2024A,
        allResultsUrl: "https://www.duosmium.org/results/2024-03-30_GA_states_a_flight_c/",
      },
    ],
    infoDocUrl:
      "https://docs.google.com/document/d/e/2PACX-1vTAJKgutEODpvzm4NzgBcuhqj0ky6u9P7DMkQV31TaTa2BemLjdolwm0cMXUsr8ha729CfR_zSeOmi_/pub?embedded=true",
  },
  "2025": {
    slug: "2025",
    title: "2025 State Tournament",
    photosUrl: "https://photos.app.goo.gl/XdMw9MzsvQxwv6Ca9",
    divisions: [
      {
        label: "AA Overall Results",
        overall: allResults2025AA,
        events: eventResults2025AA,
        allResultsUrl: "https://www.duosmium.org/results/2025-03-29_GA_states_aa_flight_c/",
      },
      {
        label: "A Overall Results",
        overall: allResults2025A,
        events: eventResults2025A,
        allResultsUrl: "https://www.duosmium.org/results/2025-03-29_GA_states_a_flight_c/",
      },
    ],
    infoDocUrl:
      "https://docs.google.com/document/d/e/2PACX-1vQLpwFPRhY108IKXY2QAjRHFXRIDQWNNE591EB75ESCOWprOqaH1z_80JlemvtSyipHbT-8FeY0O34u/pub?embedded=true",
  },
  YJI2024: {
    slug: "YJI2024",
    title: "2024 Yellow Jacket Invitational",
    photos: [
      "/images/2024/YJIPictures/YJI_1.jpg",
      "/images/2024/YJIPictures/YJI_2.jpg",
      "/images/2024/YJIPictures/YJI_3.jpg",
      "/images/2024/YJIPictures/YJI_4.jpg",
      "/images/2024/YJIPictures/YJI_5.jpg",
      "/images/2024/YJIPictures/YJI_6.jpg",
      "/images/2024/YJIPictures/YJI_7.jpg",
      "/images/2024/YJIPictures/YJI_10.jpg",
      "/images/2024/YJIPictures/YJI_11.jpg",
    ],
    photosUrl: "https://photos.app.goo.gl/a4nUMNFUTm5BHeKx6",
    divisions: [
      {
        label: "Overall Results",
        overall: allResultsYJI2024,
        events: eventResultsYJI2024,
        allResultsUrl: "https://www.duosmium.org/results/2024-02-03_yellow_jacket_invitational_c/",
      },
    ],
    infoDocUrl:
      "https://docs.google.com/document/d/e/2PACX-1vTAJKgutEODpvzm4NzgBcuhqj0ky6u9P7DMkQV31TaTa2BemLjdolwm0cMXUsr8ha729CfR_zSeOmi_/pub?embedded=true",
  },
  YJI2025: {
    slug: "YJI2025",
    title: "2025 Yellow Jacket Invitational",
    photos: [
      "/images/2025/YJI/1.jpg",
      "/images/2025/YJI/2.jpg",
      "/images/2025/YJI/3.jpg",
      "/images/2025/YJI/4.jpg",
      "/images/2025/YJI/6.jpg",
      "/images/2025/YJI/7.jpg",
      "/images/2025/YJI/8.jpg",
    ],
    photosUrl: "https://drive.google.com/drive/u/2/folders/1OpN_nn9gztiPVLHnxrHHQEG91ASNSXAb",
    divisions: [
      {
        label: "Division B Overall Results",
        overall: allResultsYJI2025B,
        events: eventResultsYJI2025B,
      },
      {
        label: "Division C Overall Results",
        overall: allResultsYJI2025C,
        events: eventResultsYJI2025C,
      },
    ],
    infoDocUrl:
      "https://docs.google.com/document/d/1j9YKMA2QOkeO1PnCeraj5KCvax4C3yn5Auroo70hkhE/edit?tab=t.0",
  },
};
