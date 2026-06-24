import {
  MakerspaceLocation,
  TransportLocation,
  TournamentLocation,
  FoodLocation
} from "@/app/components/TournamentMap";

const tournamentLocations: TournamentLocation[] = [
  {
    label: "CULC",
    mapLink: "https://www.google.com/maps/place/Clough+Undergraduate+Learning+Commons/@33.7761583,-84.3952311,16z/data=!3m1!5s0x88f504620fdf5207:0xfe60772932020a8d!4m6!3m5!1s0x88f50489e24c4cc7:0x2f07c28c3abda31b!8m2!3d33.7749203!4d-84.3964148!16s%2Fm%2F0bmh8t0?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.775000536193694, -84.3963075155798],
    events: [
      { eventName: "Chem Lab", eventRooms: ["581"] },
      { eventName: "Experimental Design", eventRooms: ["572"] },
      { eventName: "Forensics", eventRooms: ["571"] },
      { eventName: "Materials Science", eventRooms: ["587"] },
    ],
    activityRooms: [
      { activityName: "Puzzle Hunt Room", activityRooms: ["571"]},
      { activityName: "Puzzle Hunt Room", activityRooms: ["581"]},
      { activityName: "Puzzle Hunt Room", activityRooms: ["572"]},
    ]
  },
  {
    label: "East Architecture",
    mapLink: "https://www.google.com/maps/place/East+Architecture+Building/@33.7761579,-84.4055308,15z/data=!3m1!4b1!4m6!3m5!1s0x88f50461f73d1e21:0xcb0416f07a761d41!8m2!3d33.7761583!4d-84.3952311!16s%2Fg%2F11cr_gm9y3?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.776218438041454, -84.39499178593599],
    events: [
      { eventName: "Tower", eventRooms: ["123"] },
    ],
    schoolHomeRooms: [
      { schoolName: "Rockdale Magnet School for Science and Tech", homeRooms: ["207"] },
      { schoolName: "South Forsyth HS", homeRooms: ["107"] },
      { schoolName: "The Westminster Schools", homeRooms: ["309"] }
    ],
  },
  {
    label: "Howey",
    mapLink: "https://www.google.com/maps/place/Howey+Physics+Bldg,+Atlanta,+GA+30332/@33.7772352,-84.4076251,15z/data=!4m6!3m5!1s0x88f5048a4eae2249:0x1fb553e4ed731e06!8m2!3d33.777489!4d-84.3986032!16s%2Fg%2F1tctyd3j?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.7776405764111, -84.3986783057815],
    events: [
      { eventName: "Anatomy and Physiology", eventRooms: ["L4"] },
      { eventName: "Astronomy", eventRooms: ["L3"] },
      { eventName: "Codebusters", eventRooms: ["L2"] },
      { eventName: "Wind Power", eventRooms: ["L1"] },
    ],
    activityRooms: [
      { activityName: "Puzzle Hunt Room", activityRooms: ["L1"]},
      { activityName: "Puzzle Hunt Room", activityRooms: ["L2"]},
    ]
  },
  {
    label: "IC",
    mapLink: "https://www.google.com/maps/place/Instructional+Center/@33.7754474,-84.4115495,15z/data=!3m1!4b1!4m6!3m5!1s0x88f5048ea3eb8fa1:0x3e4111b0dbacc6a6!8m2!3d33.7754478!4d-84.4012498!16s%2Fg%2F11c1n7f4t3?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.77550128156202, -84.40126053276917],
    events: [
      { eventName: "Bungee Drop", eventRooms: ["Atrium"] },
      { eventName: "Entomology", eventRooms: ["105"] },
      { eventName: "Fossils", eventRooms: ["109"] },
      { eventName: "Helicopter", eventRooms: ["211"] },
      { eventName: "Pokemon Medley", eventRooms: ["215"] },
      { eventName: "Science in the News", eventRooms: ["209"] },
      { eventName: "Write It Do It", eventRooms: ["111, 115"] },
    ],
    activityRooms: [
      { activityName: "Puzzle Hunt Room", activityRooms: ["109"]},
    ]
  },
  {
    label: "Klaus",
    mapLink: "https://www.google.com/maps/place/Klaus+Advanced+Computing+Building/@33.7770288,-84.4061148,15z/data=!3m1!4b1!4m6!3m5!1s0x87b781ec0ab42ea5:0x16eec927f37b40ec!8m2!3d33.7770292!4d-84.3958151!16s%2Fm%2F02vws0z?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.777180777225105, -84.39583656160448],
    events: [
      { eventName: "Disease Detectives", eventRooms: ["1443"] },
      { eventName: "Dynamic Planet", eventRooms: ["2447"] },
      { eventName: "Ecology", eventRooms: ["2456"] },
      { eventName: "Geologic Mapping", eventRooms: ["1456"] },
      { eventName: "Microbe Mission", eventRooms: ["1447"] },
      { eventName: "Optics", eventRooms: ["2443"] },
    ],
    activityRooms: [
      { activityName: "Puzzle Hunt Room", activityRooms: ["1443"]},
      { activityName: "Puzzle Hunt Room", activityRooms: ["2443"]},
      { activityName: "Puzzle Hunt Room", activityRooms: ["1456"]},
    ]
  },
  {
    label: "Montgomery-Knight",
    mapLink: "https://www.google.com/maps/place/Daniel+Guggenheim+School+of+Aerospace+Engineering/@33.7724508,-84.39614,20.1z/data=!4m14!1m7!3m6!1s0x88f504629cd12c15:0x7e0ddb2c725e3280!2sDaniel+Guggenheim+School+of+Aerospace+Engineering!8m2!3d33.7722661!4d-84.3960504!16s%2Fg%2F11_pwfzc0!3m5!1s0x88f504629cd12c15:0x7e0ddb2c725e3280!8m2!3d33.7722661!4d-84.3960504!16s%2Fg%2F11_pwfzc0?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
    position: [33.772244783744554, -84.39605744427689],
    events: [
      { eventName: "Air Trajectory", eventRooms: ["Flight Lab"] },
    ],
  },
  {
    label: "Petit",
    mapLink: "https://www.google.com/maps/place/Parker+H.+Petit+Institute+for+Bioengineering+and+Biosciences+at+Georgia+Tech/@33.7785896,-84.4023538,16z/data=!4m14!1m7!3m6!1s0x88f5048a7d30c7b5:0x8a5640871e53729d!2sParker+H.+Petit+Institute+for+Bioengineering+and+Biosciences+at+Georgia+Tech!8m2!3d33.7785897!4d-84.3974829!16s%2Fg%2F1tf6hgyh!3m5!1s0x88f5048a7d30c7b5:0x8a5640871e53729d!8m2!3d33.7785897!4d-84.3974829!16s%2Fg%2F1tf6hgyh?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
    position: [33.77896414797502, -84.39722542752244],
    events: [
      { eventName: "Electric Vehicle", eventRooms: ["Atrium"] },
      { eventName: "Robot Tour", eventRooms: ["Atrium"] },
    ],
    activityRooms: [
      { activityName: "Puzzle Hunt Room", activityRooms: ["Atrium"]},
    ]
  },
  {
    label: "Skiles",
    mapLink: "https://www.google.com/maps/place/Skiles+Classroom+Building/@33.7735466,-84.4062637,15z/data=!3m1!4b1!4m6!3m5!1s0x88f50489d844c161:0x34bc0f7009348d16!8m2!3d33.773547!4d-84.395964!16s%2Fg%2F11dxkd716t?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.77369858338894, -84.39596400393388],
    schoolHomeRooms: [
      { schoolName: "Atlanta International School", homeRooms: ["254"] },
      { schoolName: "Central HS", homeRooms: ["270"] },
      { schoolName: "Discovery HS", homeRooms: ["268"] },
      { schoolName: "Eagles Home Educators", homeRooms: ["154"] },
      { schoolName: "Gilmer HS", homeRooms: ["171"] },
      { schoolName: "Harris County HS", homeRooms: ["257"] },
      { schoolName: "Madison County HS", homeRooms: ["256"] },
      { schoolName: "Metter HS", homeRooms: ["308"] },
      { schoolName: "North Hall HS", homeRooms: ["311"] },
      { schoolName: "Paideia School", homeRooms: ["314"] },
      { schoolName: "Saint Mary's Academy", homeRooms: ["169"] },
      { schoolName: "Savannah Christian Preparatory School", homeRooms: ["170"] },
      { schoolName: "Southeast Bulloch HS", homeRooms: ["317"] },
      { schoolName: "Alpharetta HS", homeRooms: ["156"] },
      { schoolName: "Brookwood HS", homeRooms: ["371"], },
      { schoolName: "Chattahoochee HS", homeRooms: ["246"] },
      { schoolName: "Columbus HS", homeRooms: ["271"] },
      { schoolName: "East Coweta",homeRooms: ["269"], },
      { schoolName: "Forsyth Central HS", homeRooms: ["249"] },
      { schoolName: "Fulton County Schools Innovation Academy", homeRooms: ["202"] },
      { schoolName: "Fulton Science Academy", homeRooms: ["168"] },
      { schoolName: "Greenbrier HS", homeRooms: ["255"] },
      { schoolName: "Gwinnett School of Mathematics, Science, and Technology", homeRooms: ["368"] },
    ],
  },
  {
    label: "Sustainable Education",
    mapLink: "https://www.google.com/maps/place/O.+Lamar+Allen+Sustainable+Education+Building/@33.776197,-84.4013782,16z/data=!3m1!4b1!4m6!3m5!1s0x88f5048a2ca38d3b:0xb548a71368636f38!8m2!3d33.776197!4d-84.3988033!16s%2Fg%2F11b6xm6hx7?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
    position: [33.77623554178977, -84.39879913599437],
    events: [
      { eventName: "Engineering CAD", eventRooms: ["121"] },
    ],
  },
  {
    label: "Skiles Walkway",
    mapLink: "https://www.google.com/maps/place/Skiles+Walkway,+Atlanta,+GA+30332/@33.77386,-84.3975467,20.23z/data=!4m6!3m5!1s0x88f50489c105980b:0xe5fa0b593ff84900!8m2!3d33.774003!4d-84.3969282!16s%2Fg%2F11g_zlkj1m?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
    position: [33.77401664869434, -84.39741833588879],
    activityRooms: [
      { activityName: "Club Fair", activityRooms: ["Atrium"]},
    ]
  },
  {
    label: "Van Leer",
    mapLink: "https://www.google.com/maps/place/Van+Leer+Building/@33.7759997,-84.3971331,16z/data=!3m1!4b1!4m6!3m5!1s0x88f5048a1b919b1f:0x4ebd83ca60615a8b!8m2!3d33.7759997!4d-84.3971331!16s%2Fg%2F11b6yhwzqh?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.776151279047426, -84.39710091742755],
    schoolHomeRooms: [
      { schoolName: "Johns Creek HS", homeRooms: ["C240"] },
      { schoolName: "Joseph Wheeler HS", homeRooms: ["C241"] },
      { schoolName: "Lakeside (Evans) HS", homeRooms: ["C340"] },
      { schoolName: "Lambert HS", homeRooms: ["E361"] },
      { schoolName: "North Gwinnett HS", homeRooms: ["E283"] },
      { schoolName: "Northgate HS", homeRooms: ["C341"] },
      { schoolName: "Northview HS", homeRooms: ["C457"] },
      { schoolName: "River Ridge HS", homeRooms: ["C456"] },
    ],
  },
  {
    label: "West Architecture",
    mapLink: "https://www.google.com/maps/place/33%C2%B046'33.8%22N+84%C2%B023'46.0%22W/@33.7760621,-84.4064208,15z/data=!3m1!4b1!4m4!3m3!8m2!3d33.7760625!4d-84.3961211?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    position: [33.77606247565049, -84.3961210569472],
    schoolHomeRooms: [
      { schoolName: "Veterans HS", homeRooms: ["260"] },
      { schoolName: "Walton HS", homeRooms: ["259"] },
      { schoolName: "Woodward Academy", homeRooms: ["258"] },
    ],
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
  // {
  //   label: "Area 5 Visitor Parking",
  //   mapLink: "https://www.google.com/maps/place/Area+5+Visitor+Parking+Deck/@33.7797859,-84.3986451,16.89z/data=!4m6!3m5!1s0x88f5048adf0037d5:0xe56906faad8ee4dc!8m2!3d33.7799012!4d-84.3987937!16s%2Fg%2F11b6dqkpd2?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
  //   position: [33.78033878948245, -84.39819448889514],
  //   description: "Parking lot for general vehicles",
  // },
];

const makerspaceLocations: MakerspaceLocation[] = [];
export { tournamentLocations, makerspaceLocations, transportLocations, foodLocations };
