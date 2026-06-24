import {
  MakerspaceLocation,
  TransportLocation,
  TournamentLocation,
  FoodLocation
} from "@/app/components/TournamentMap";

const tournamentLocations: TournamentLocation[] = [
  {
    label: "Boggs",
    mapLink: "https://www.google.com/maps/place/Gilbert+Hillhouse+Boggs+Building/@33.7757611,-84.4023174,16z/data=!3m1!4b1!4m6!3m5!1s0x88f5048963bf0de9:0xb9a8c30e4aaf1178!8m2!3d33.7757611!4d-84.3997425!16s%2Fg%2F11_qr2n_t?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.77597510547729, -84.39980687592467],
    events: [
      { eventName: "Engineering CAD", eventRooms: ["B5"] },
      { eventName: "Protein Modeling", eventRooms: ["B9"] },
    ],
  },
  {
    label: "CoC",
    mapLink: "https://www.google.com/maps/place/College+of+Computing/@33.7735466,-84.4062637,15z/data=!4m6!3m5!1s0x88f5048a69a04763:0xee74b8c342f891fa!8m2!3d33.7772356!4d-84.3973254!16s%2Fm%2F026fw2j?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.77769047534177, -84.39732736008136],
    events: [
      { eventName: "Codebusters", eventRooms: ["16"] },
      { eventName: "Meteorology", eventRooms: ["17"] },
    ],
    schoolHomeRooms: [
      { schoolName: "Friendship Christian School", homeRooms: ["101"] },
      { schoolName: "Innovation Academy", homeRooms: ["53"] },
      { schoolName: "Sprayberry High School", homeRooms: ["102"] },
      { schoolName: "Woodward Academy Upper School", homeRooms: ["52"] },
    ],
  },
  {
    label: "CULC",
    mapLink: "https://www.google.com/maps/place/Clough+Undergraduate+Learning+Commons/@33.7761583,-84.3952311,16z/data=!3m1!5s0x88f504620fdf5207:0xfe60772932020a8d!4m6!3m5!1s0x88f50489e24c4cc7:0x2f07c28c3abda31b!8m2!3d33.7749203!4d-84.3964148!16s%2Fm%2F0bmh8t0?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.775000536193694, -84.3963075155798],
    events: [
      { eventName: "Chem Lab", eventRooms: ["573 Lab"] },
      { eventName: "Crime Busters", eventRooms: ["587 Lab"] },
      { eventName: "Forensics", eventRooms: ["571 Lab"] },
      { eventName: "Fossils", eventRooms: ["152"] },
      { eventName: "Materials Science", eventRooms: ["575 Lab, 581 Lab"] },
      { eventName: "Potions and Poisons", eventRooms: ["572 Lab"] },
      { eventName: "Tower", eventRooms: ["144"] },
      { eventName: "Write It Do It", eventRooms: ["123, 125, 127, 131"] },
    ],
    activityRooms: [
      { activityName: "Movie Showing", activityRooms: ["152"]},
      { activityName: "Board Games", activityRooms: ["123"]},
      { activityName: "Carnival", activityRooms: ["Atrium"]},
    ]
  },
  {
    label: "East Architecture",
    mapLink: "https://www.google.com/maps/place/East+Architecture+Building/@33.7761579,-84.4055308,15z/data=!3m1!4b1!4m6!3m5!1s0x88f50461f73d1e21:0xcb0416f07a761d41!8m2!3d33.7761583!4d-84.3952311!16s%2Fg%2F11cr_gm9y3?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.776218438041454, -84.39499178593599],
    events: [
      { eventName: "Astronomy", eventRooms: ["123"] },
      { eventName: "Reach for the Stars", eventRooms: ["123"] }
    ],
    schoolHomeRooms: [
      { schoolName: "Tift County High School", homeRooms: ["107"] },
      { schoolName: "The Westminster Schools", homeRooms: ["207"] },
      { schoolName: "Upson Lee High School", homeRooms: ["309"] }
    ],
  },
  {
    label: "Howey",
    mapLink: "https://www.google.com/maps/place/Howey+Physics+Bldg,+Atlanta,+GA+30332/@33.7772352,-84.4076251,15z/data=!4m6!3m5!1s0x88f5048a4eae2249:0x1fb553e4ed731e06!8m2!3d33.777489!4d-84.3986032!16s%2Fg%2F1tctyd3j?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.7776405764111, -84.3986783057815],
    events: [
      { eventName: "Disease Detectives", eventRooms: ["L3"] },
      { eventName: "Wind Power", eventRooms: ["L4"] },
    ],
  },
  {
    label: "IC",
    mapLink: "https://www.google.com/maps/place/Instructional+Center/@33.7754474,-84.4115495,15z/data=!3m1!4b1!4m6!3m5!1s0x88f5048ea3eb8fa1:0x3e4111b0dbacc6a6!8m2!3d33.7754478!4d-84.4012498!16s%2Fg%2F11c1n7f4t3?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.77550128156202, -84.40126053276917],
    events: [
      { eventName: "Experimental Design", eventRooms: ["111, 115"] },
      { eventName: "Helicopter", eventRooms: ["211"] },
      { eventName: "Metric Mastery", eventRooms: ["109, 105"] },
      { eventName: "Mission Possible", eventRooms: ["103"] },
      { eventName: "Road Scholar", eventRooms: ["215"] },
    ],
    schoolHomeRooms: [
      { schoolName: "American Heritage School (B/C)", homeRooms: ["209"] },
      { schoolName: "Fulton Science Academy (B/C)", homeRooms: ["205"] },
    ],
  },
  {
    label: "Klaus",
    mapLink: "https://www.google.com/maps/place/Klaus+Advanced+Computing+Building/@33.7770288,-84.4061148,15z/data=!3m1!4b1!4m6!3m5!1s0x87b781ec0ab42ea5:0x16eec927f37b40ec!8m2!3d33.7770292!4d-84.3958151!16s%2Fm%2F02vws0z?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.777180777225105, -84.39583656160448],
    events: [
      { eventName: "Dynamic Planet", eventRooms: ["2447"] },
      { eventName: "Ecology", eventRooms: ["1456"] },
      { eventName: "Entomology", eventRooms: ["1443"] },
      { eventName: "Geologic Mapping", eventRooms: ["1447"] },
      { eventName: "Optics", eventRooms: ["2456"] },
    ],
    activityRooms: [
      { activityName: "SciOly Trivia", activityRooms: ["1443"]},
      { activityName: "E-Sports", activityRooms: ["1447"]},
    ]
  },
  {
    label: "Love",
    mapLink: "https://www.google.com/maps/place/J.+Erskine+Love+Building/@33.7767263,-84.4121413,15z/data=!3m1!4b1!4m6!3m5!1s0x88f5048c0ecd604d:0x5e14ad7857f11cde!8m2!3d33.7767267!4d-84.4018416!16s%2Fg%2F11c5_t1v22?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.776747491187, -84.40180663214677],
    events: [
      { eventName: "Bungee Drop", eventRooms: ["Atrium"] },
      { eventName: "Robot Tour", eventRooms: ["Atrium"] }
    ],
  },
  {
    label: "Mason",
    mapLink: "https://www.google.com/maps/place/Jesse+W.+Mason+Building/@33.7766403,-84.409174,15z/data=!3m1!4b1!4m6!3m5!1s0x88f5048a349f671f:0xb5c4c16c46fd3597!8m2!3d33.7766407!4d-84.3988743!16s%2Fg%2F11b7vvsbm8?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.776649522247936, -84.39903525838923],
    events: [
      { eventName: "Microbe Mission", eventRooms: ["5134"] },
    ],
    schoolHomeRooms: [
      { schoolName: "Duluth High School", homeRooms: ["3132"] },
      { schoolName: "Durham Academy Upper School", homeRooms: ["3133"] },
      { schoolName: "North Atlanta High School", homeRooms: ["2117"] },
    ],
  },
  {
    label: "Molecular Science & Engineering Building",
    mapLink: "https://www.google.com/maps/place/Molecular+Sciences+And+Engineering/@33.7759997,-84.3971331,16z/data=!4m6!3m5!1s0x88f5048aa2160b4f:0x1701591279ef9cda!8m2!3d33.7798348!4d-84.3966424!16s%2Fg%2F11c3tjv98j?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.77987258678034, -84.3966265376535],
    events: [
      { eventName: "Air Trajectory", eventRooms: ["Atrium 4, G021, G011"] },
      { eventName: "Anatomy and Physiology", eventRooms: ["G011"] },
      { eventName: "Electric Vehicle", eventRooms: ["G021, Atrium 2, G011"] },
      { eventName: "Scrambler", eventRooms: ["G021, Atrium 2, G011"] },
    ],
  },
  {
    label: "O'Keefe Gym",
    mapLink: "https://www.google.com/maps/place/O'Keefe+Gym/@33.7794362,-84.3941487,17z/data=!3m1!4b1!4m6!3m5!1s0x88f50460c8400001:0x609877aed89fe965!8m2!3d33.7794362!4d-84.3915738!16s%2Fg%2F11cs180q1l?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.77961452582521, -84.39161671825269],
    activityRooms: [
      { activityName: "Awards", activityRooms: ["Gym"] },
    ],
  },
  {
    label: "Skiles",
    mapLink: "https://www.google.com/maps/place/Skiles+Classroom+Building/@33.7735466,-84.4062637,15z/data=!3m1!4b1!4m6!3m5!1s0x88f50489d844c161:0x34bc0f7009348d16!8m2!3d33.773547!4d-84.395964!16s%2Fg%2F11dxkd716t?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.77369858338894, -84.39596400393388],
    schoolHomeRooms: [
      { schoolName: "Alpharetta High School", homeRooms: ["254"] },
      { schoolName: "Alton C. Crews Middle School", homeRooms: ["270"] },
      { schoolName: "Ballatyne Ridge High School", homeRooms: ["268"] },
      { schoolName: "Belair Middle School", homeRooms: ["154"] },
      { schoolName: "Brookwood High School", homeRooms: ["171"] },
      { schoolName: "Campbell Middle School", homeRooms: ["257"] },
      { schoolName: "Centennial Academy", homeRooms: ["256"] },
      { schoolName: "Chattahoochee High School", homeRooms: ["308"] },
      { schoolName: "Decatur High School", homeRooms: ["311"] },
      { schoolName: "Ed W. Clark High School", homeRooms: ["314"] },
      { schoolName: "Fairview Middle School", homeRooms: ["169"] },
      { schoolName: "Hess Academy", homeRooms: ["170"] },
      { schoolName: "Johns Creek High School", homeRooms: ["317"] },
      { schoolName: "Lakeside High School", homeRooms: ["156"] },
      { schoolName: "Lambert High School", homeRooms: ["371"], },
      { schoolName: "Maryville High School", homeRooms: ["246"] },
      { schoolName: "McCleskey Middle School", homeRooms: ["271"] },
      { schoolName: "Northgate High School",homeRooms: ["269"], },
      { schoolName: "Piney Grove Middle School", homeRooms: ["249"] },
      { schoolName: "Pope High School", homeRooms: ["202"] },
      { schoolName: "South Forsyth High School", homeRooms: ["168"] },
      { schoolName: "Walton High School", homeRooms: ["255"] },
      { schoolName: "Wilmington Academy of Arts and Sciences", homeRooms: ["368"] },
    ],
  },
  {
    label: "Tech Green",
    mapLink: "https://www.google.com/maps/place/Tech+White/@33.7746152,-84.4076351,15z/data=!3m1!4b1!4m6!3m5!1s0x88f50489ec1c461b:0x2d7e31c7758e29b3!8m2!3d33.7746156!4d-84.3973354!16s%2Fg%2F1w4vks6x?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.77478161322192, -84.39730757397054],
    activityRooms: [
      { activityName: "Outdoor Games", activityRooms: ["Field"]},
    ]
  },
  {
    label: "Van Leer",
    mapLink: "https://www.google.com/maps/place/Van+Leer+Building/@33.7759997,-84.3971331,16z/data=!3m1!4b1!4m6!3m5!1s0x88f5048a1b919b1f:0x4ebd83ca60615a8b!8m2!3d33.7759997!4d-84.3971331!16s%2Fg%2F11b6yhwzqh?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.776151279047426, -84.39710091742755],
    schoolHomeRooms: [
      { schoolName: "Blake Bass Middle School", homeRooms: ["C240"] },
      { schoolName: "Dodgen Middle School", homeRooms: ["C241"] },
      { schoolName: "Prattville Christian Academy", homeRooms: ["C341"] },
      { schoolName: "Taylor Road Middle School", homeRooms: ["C456"] },
      { schoolName: "East Coweta High School", homeRooms: ["C340"] },
      { schoolName: "Gilmer High School", homeRooms: ["E361"] },
      { schoolName: "Orlando Science High School", homeRooms: ["E283"] },
      { schoolName: "Southeast Bulloch High School", homeRooms: ["C457"] },
    ],
  },
  {
    label: "West Architecture",
    mapLink: "https://www.google.com/maps/place/33%C2%B046'33.8%22N+84%C2%B023'46.0%22W/@33.7760621,-84.4064208,15z/data=!3m1!4b1!4m4!3m3!8m2!3d33.7760625!4d-84.3961211?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.77606247565049, -84.3961210569472],
    schoolHomeRooms: [
      { schoolName: "Eagles Home Educators (B)", homeRooms: ["260"] },
      { schoolName: "Eagles Home Educators (C)", homeRooms: ["259"] },
      { schoolName: "GSMST", homeRooms: ["258"] },
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

const foodLocations: FoodLocation[] = [
  {
    label: "Student Center",
    mapLink: "https://www.google.com/maps/place/John+Lewis+Student+Center/@33.7757611,-84.4023174,16z/data=!4m6!3m5!1s0x88f50489a73dcb65:0xe5b99fb6b844e7bb!8m2!3d33.7740362!4d-84.3990168!16s%2Fm%2F0k6_f62?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.77407184605421, -84.39884514153347],
    food: [
      { foodName: "Panda Express"},
      { foodName: "Chick-fil-A"},
      { foodName: "Blue Donkey"},
    ],
  },
  {
    label: "Dunkin'/Jimmy John's",
    mapLink: "https://www.google.com/maps/place/Jimmy+John's/@33.7740344,-84.4170414,14z/data=!4m6!3m5!1s0x88f5050068a779ef:0xbcdd9da5f6c123bb!8m2!3d33.7750687!4d-84.4005218!16s%2Fg%2F11vrzn07v3?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.77646007113777, -84.4003902676549],
    food: [
      { foodName: "Dunkin' Donuts"},
      { foodName: "Jimmy John's"},
    ],
  },
]

const transportLocations: TransportLocation[] = [
  {
    label: "Bus Parking",
    mapLink: "https://www.google.com/maps/place/W21+parking+lot/@33.7755573,-84.3990029,20.19z/data=!4m6!3m5!1s0x88f50500235a4c81:0x86b64c069165eb1e!8m2!3d33.7756901!4d-84.3989351!16s%2Fg%2F11vyj17b5z?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.77570868699626, -84.39893589212272],
    description: "W21 Parking Lot",
  },
  {
    label: "Student Center Parking Deck",
    mapLink: "https://www.google.com/maps/place/Student+Center+Parking+Deck+-+Visitor+Area+3%2FW02/@33.773178,-84.4016702,17.69z/data=!4m6!3m5!1s0x88f5048eb5a324cf:0x1df7c282263ead87!8m2!3d33.7741942!4d-84.4006866!16s%2Fg%2F11h7f7kc19?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.774515732904604, -84.40109084286519],
    description: "Parking lot for general vehicles",
  },
  {
    label: "Area 4 Visitor Parking",
    mapLink: "https://www.google.com/maps/place/Area+4+-+Visitor+Parking/@33.777074,-84.3996004,18.01z/data=!4m10!1m2!2m1!1showey+parking!3m6!1s0x88f5057d8391b127:0x14fe852f2e209744!8m2!3d33.7780377!4d-84.3986405!15sCg1ob3dleSBwYXJraW5nkgELcGFya2luZ19sb3TgAQA!16s%2Fg%2F11h10z7f0s?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.778148598211054, -84.39862407593945],
    description: "Parking lot for general vehicles",
  },
  {
    label: "Area 5 Visitor Parking",
    mapLink: "https://www.google.com/maps/place/Area+5+Visitor+Parking+Deck/@33.7797859,-84.3986451,16.89z/data=!4m6!3m5!1s0x88f5048adf0037d5:0xe56906faad8ee4dc!8m2!3d33.7799012!4d-84.3987937!16s%2Fg%2F11b6dqkpd2?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.78033878948245, -84.39819448889514],
    description: "Parking lot for general vehicles",
  },
];
export { tournamentLocations, makerspaceLocations, transportLocations, foodLocations };