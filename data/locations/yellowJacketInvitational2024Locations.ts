import {
  MakerspaceLocation,
  TransportLocation,
  TournamentLocation,
  FoodLocation
} from "@/app/components/TournamentMap";

const tournamentLocations: TournamentLocation[] = [
  {
    label: "East Architecture",
    position: [33.776218438041454, -84.39499178593599],
    events: [{ eventName: "Pokemon Pathology", eventRooms: ["309"] }],
    schoolHomeRooms: [
      { schoolName: "Chattahoochee High School", homeRooms: ["207"] },
      { schoolName: "The Westminster Schools", homeRooms: ["107"] },
    ],
  },
  {
    label: "CULC",
    position: [33.775000536193694, -84.3963075155798],
    events: [
      { eventName: "Chem Lab", eventRooms: ["571"] },
      { eventName: "Experimental Design", eventRooms: ["573"] },
      { eventName: "Fermi Questions/Awards", eventRooms: ["152"] },
      { eventName: "Forensics", eventRooms: ["581"] },
    ],
    schoolHomeRooms: [
      { schoolName: "Lexington High School", homeRooms: ["129"] },
      { schoolName: "South Cobb High School", homeRooms: ["423"] },
    ],
  },
  {
    label: "IC",
    position: [33.77550128156202, -84.40126053276917],
    events: [
      { eventName: "Fossils", eventRooms: ["109"] },
      { eventName: "Microbe Mission", eventRooms: ["115"] },
      { eventName: "Optics", eventRooms: ["103"] },
    ],
  },
  {
    label: "Love",
    position: [33.776747491187, -84.40180663214677],
    events: [{ eventName: "Air Trajectory", eventRooms: ["Atrium"] }],
  },
  {
    label: "Mason",
    position: [33.776649522247936, -84.39903525838923],
    events: [
      { eventName: "Anatomy & Physiology", eventRooms: ["5134"] },
      { eventName: "Codebusters", eventRooms: ["1133"] },
      { eventName: "Disease Detectives", eventRooms: ["2117"] },
      { eventName: "Wind Power", eventRooms: ["3133"] },
    ],
  },
  {
    label: "Skiles",
    position: [33.77369858338894, -84.39596400393388],
    events: [{ eventName: "Astronomy", eventRooms: ["249"] }],
    schoolHomeRooms: [
      { schoolName: "Campbell High School", homeRooms: ["168"] },
      { schoolName: "Collins Hill High School", homeRooms: ["169"] },
      { schoolName: "East Coweta High School", homeRooms: ["171"] },
      { schoolName: "Gilmer High School", homeRooms: ["314"] },
      { schoolName: "Jackson County High School", homeRooms: ["308"] },
      {
        schoolName: "James S. Rickards High School",
        homeRooms: ["254", "255"],
      },
      { schoolName: "Lakeside High School", homeRooms: ["311"] },
      {
        schoolName: "Lakeside High School, Evans, GA",
        homeRooms: ["269", "268"],
      },
      { schoolName: "Northview High School", homeRooms: ["170"] },
      { schoolName: "Orlando Science High School", homeRooms: ["270", "271"] },
      { schoolName: "West Forsyth High School", homeRooms: ["317"] },
      { schoolName: "Wheeler High School", homeRooms: ["154"] },
    ],
  },
  {
    label: "CoC",
    position: [33.77769047534177, -84.39732736008136],
    events: [
      { eventName: "Detector Building", eventRooms: ["16"] },
      { eventName: "Dynamic Planet", eventRooms: ["17"] },
      { eventName: "Quantum Quandaries", eventRooms: ["101"] },
    ],
  },
  {
    label: "Howey",
    position: [33.7776405764111, -84.3986783057815],
    events: [
      { eventName: "Ecology", eventRooms: ["L1"] },
      { eventName: "Forestry", eventRooms: ["L3"] },
      { eventName: "Geologic Mapping", eventRooms: ["L4"] },
      { eventName: "Tower", eventRooms: ["L2"] },
    ],
  },
  {
    label: "Klaus",
    position: [33.777180777225105, -84.39583656160448],
    events: [{ eventName: "Flight", eventRooms: ["Atrium"] }],
  },
  {
    label: "MRDC",
    position: [33.77681638264601, -84.40059685584552],
    events: [
      { eventName: "Robot Tour", eventRooms: ["MSE Wing"] },
      { eventName: "Scrambler", eventRooms: ["MSE Wing"] },
    ],
  },
  {
    label: "Boggs",
    position: [33.775885403501604, -84.39975333174158],
    events: [{ eventName: "Write It Do It", eventRooms: ["B9", "B5"] }],
  },
  {
    label: "West Architecture",
    position: [33.77606247565049, -84.3961210569472],
    schoolHomeRooms: [
      { schoolName: "Alliance Academy for Innovation", homeRooms: ["258"] },
    ],
  },
  {
    label: "Van Leer",
    position: [33.776151279047426, -84.39710091742755],
    schoolHomeRooms: [
      { schoolName: "Ed W. Clark High School", homeRooms: ["C240"] },
      { schoolName: "FCS Innovation Academy", homeRooms: ["C241"] },
      { schoolName: "Fulton Science Academy", homeRooms: ["C456", "C457"] },
      { schoolName: "Johns Creek High School", homeRooms: ["C340"] },
      { schoolName: "Lambert High School", homeRooms: ["C341"] },
    ],
  },
  {
    label: "Bunger-Henry",
    position: [33.77582399765655, -84.39827320393375],
    schoolHomeRooms: [
      { schoolName: "Northgate High School", homeRooms: ["380"] },
    ],
  },
];

const makerspaceLocations: MakerspaceLocation[] = [
  {
    label: "MILL",
    position: [33.776253752760226, -84.40172173860996],
    fullName: "Materials Innovation and Learning Laboratory",
    hrefId: "mill-tour",
  },
  {
    label: "Invention Studio",
    position: [33.77729993365719, -84.40071135550421],
    hrefId: "invention-studio-tour",
  },
  {
    label: "HIVE",
    position: [33.775493431965835, -84.39736309239572],
    fullName: "Interdisciplinary Design Commons",
    hrefId: "hive-tour",
  },
];

const transportLocations: TransportLocation[] = [
  {
    label: "Bus Parking: W21 Lot",
    position: [33.77715151834969, -84.39971892515817],
    description: "Parking lot for buses",
  },
  {
    label: "General Parking: W2 Lot",
    position: [33.77389823077431, -84.39956788161535],
    description: "Parking lot for general vehicles",
  },
  {
    label: "Drop Off Location",
    position: [33.77530902138295, -84.39596748697224],
    description: "Location for drop off",
  },
];

export { tournamentLocations, makerspaceLocations, transportLocations };
