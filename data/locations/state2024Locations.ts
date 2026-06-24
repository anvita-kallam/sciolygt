import {
  MakerspaceLocation,
  TransportLocation,
  TournamentLocation,
  FoodLocation
} from "@/app/components/TournamentMap";

const tournamentLocations: TournamentLocation[] = [
  {
    label: "CULC",
    position: [33.775000536193694, -84.3963075155798],
    events: [
      { eventName: "Chem Lab", eventRooms: ["571"] },
      { eventName: "Experimental Design", eventRooms: ["573"] },
      { eventName: "Forensics", eventRooms: ["581"] },
      { eventName: "Fossils", eventRooms: ["575"] },
      { eventName: "Codebusters", eventRooms: ["152"] },
    ],
    schoolHomeRooms: [
      { schoolName: "Central HS", homeRooms: ["125"] },
      { schoolName: "Chattahoochee HS", homeRooms: ["127"] },
      { schoolName: "Duluth HS", homeRooms: ["129"] },
      { schoolName: "East Coweta HS", homeRooms: ["131"] },
      { schoolName: "Forsyth Central HS", homeRooms: ["323"] },
      { schoolName: "Fulton Innovation Academy", homeRooms: ["325"] },
      { schoolName: "Fulton Science Academy", homeRooms: ["423"] },
    ],
    mapLink: "https://www.google.com/maps/place/Clough+Undergraduate+Learning+Commons/@33.7750401,-84.396948,19.22z/data=!3m1!5s0x88f504620fdf5207:0xfe60772932020a8d!4m6!3m5!1s0x88f50489e24c4cc7:0x2f07c28c3abda31b!8m2!3d33.7749203!4d-84.3964148!16s%2Fm%2F0bmh8t0?entry=ttu"
  },
  {
    label: "Love",
    position: [33.776747491187, -84.40180663214677],
    events: [{ eventName: "Air Trajectory", eventRooms: ["Atrium"] }],
    mapLink: "https://www.google.com/maps/place/Love+Manufacturing+Bldg+(MRDC+II),+771+Ferst+Dr+NW,+Atlanta,+GA+30332/@33.7768018,-84.4022183,19.15z/data=!4m6!3m5!1s0x88f5048c0842dedb:0x5df31558584a2d13!8m2!3d33.7767386!4d-84.4017959!16s%2Fg%2F1tph2kvd?entry=ttu"
  },
  {
    label: "IC",
    position: [33.77550128156202, -84.40126053276917],
    events: [
      {
        eventName: "Anatomy and Physiology, Disease Detectives",
        eventRooms: ["111"],
      },
      { eventName: "Astronomy", eventRooms: ["109"] },
      { eventName: "Detector Building", eventRooms: ["209"] },
      { eventName: "Optics", eventRooms: ["103"] },
      { eventName: "Wind Power", eventRooms: ["115"] },
      { eventName: "Write It Do It", eventRooms: ["205", "211", "215"] },
    ],
    mapLink: "https://www.google.com/maps/place/Instructional+Center/@33.7754513,-84.4032535,17z/data=!3m1!4b1!4m6!3m5!1s0x88f5048ea3eb8fa1:0x3e4111b0dbacc6a6!8m2!3d33.7754478!4d-84.4012498!16s%2Fg%2F11c1n7f4t3?entry=ttu"
  },
  {
    label: "Howey",
    position: [33.7776405764111, -84.3986783057815],
    events: [
      { eventName: "Ecology, Forestry", eventRooms: ["L1"] },
      { eventName: "Fermi Questions, Science in the News", eventRooms: ["L3"] },
      { eventName: "Geologic Mapping, Dynamic Planet", eventRooms: ["L4"] },
      { eventName: "Microbe Mission", eventRooms: ["L5"] },
      { eventName: "Tower", eventRooms: ["L2"] },
    ],
    schoolHomeRooms: [
      { schoolName: "Alliance Academy", homeRooms: ["N210"] },
      { schoolName: "Alpharetta HS", homeRooms: ["S104"] },
      { schoolName: "St. Mary's Academy", homeRooms: ["S106"] },
      { schoolName: "Brookstone School", homeRooms: ["S107"] },
      { schoolName: "Brookwood HS", homeRooms: ["S204"] },
    ],
    mapLink: "https://www.google.com/maps/place/Howey+Physics+Bldg,+Atlanta,+GA+30332/@33.7774934,-84.4011781,17z/data=!3m1!4b1!4m6!3m5!1s0x88f5048a4eae2249:0x1fb553e4ed731e06!8m2!3d33.777489!4d-84.3986032!16s%2Fg%2F1tctyd3j?entry=ttu"
  },
  {
    label: "Klaus",
    position: [33.777180777225105, -84.39583656160448],
    events: [{ eventName: "Flight", eventRooms: ["Atrium"] }],
    mapLink: "https://www.google.com/maps/place/Klaus+building/@33.7773008,-84.3976518,17.85z/data=!4m6!3m5!1s0x88f5054bafecd067:0x7df46ec4cb65fac!8m2!3d33.7772349!4d-84.3962459!16s%2Fg%2F11txf2mlbc?entry=ttu"
  },
  {
    label: "MRDC",
    position: [33.77681638264601, -84.40059685584552],
    events: [
      { eventName: "Robot Tour", eventRooms: ["MSE Wing"] },
      { eventName: "Scrambler", eventRooms: ["MSE Wing"] },
    ],
    mapLink: "https://www.google.com/maps/place/MRDC/@33.776995,-84.4032094,17z/data=!3m1!4b1!4m6!3m5!1s0x88f505b0e2b19d2d:0xd99390deedd4d57e!8m2!3d33.7769906!4d-84.4006345!16s%2Fg%2F11hdqhfzfy?entry=ttu"
  },
  {
    label: "Skiles",
    position: [33.77369858338894, -84.39596400393388],
    schoolHomeRooms: [
      { schoolName: "Gilmer HS", homeRooms: ["154"] },
      { schoolName: "Greenbrier HS", homeRooms: ["168"] },
      { schoolName: "GSMST", homeRooms: ["169"] },
      { schoolName: "Johns Creek HS", homeRooms: ["170"] },
      { schoolName: "Lakeside (Evans) HS", homeRooms: ["171"] },
      { schoolName: "Lambert HS", homeRooms: ["246"] },
      { schoolName: "Madison County HS", homeRooms: ["254"] },
      { schoolName: "Metter HS", homeRooms: ["255"] },
      { schoolName: "North Gwinnett HS", homeRooms: ["268"] },
      { schoolName: "North Oconee HS", homeRooms: ["269"] },
      { schoolName: "Northgate HS", homeRooms: ["270"] },
      { schoolName: "Northview HS", homeRooms: ["271"] },
      { schoolName: "Oglethorpe County HS", homeRooms: ["308"] },
      { schoolName: "Paideia School", homeRooms: ["311"] },
      { schoolName: "River Ridge HS", homeRooms: ["314"] },
      { schoolName: "RMSST", homeRooms: ["317"] },
    ],
    mapLink: "https://www.google.com/maps/place/Skiles+Classroom+Building/@33.7735514,-84.3985389,17z/data=!3m1!4b1!4m6!3m5!1s0x88f50489d844c161:0x34bc0f7009348d16!8m2!3d33.773547!4d-84.395964!16s%2Fg%2F11dxkd716t?entry=ttu"
  },
  {
    label: "Van Leer",
    position: [33.776151279047426, -84.39710091742755],
    schoolHomeRooms: [
      { schoolName: "South Forsyth HS", homeRooms: ["C240"] },
      { schoolName: "Southeast Bulloch HS", homeRooms: ["C240"] },
      { schoolName: "The Westminster Schools", homeRooms: ["C340"] },
      { schoolName: "Upson-Lee HS", homeRooms: ["C341"] },
      { schoolName: "Valwood School", homeRooms: ["C456"] },
      { schoolName: "Walton HS", homeRooms: ["C457"] },
      { schoolName: "White County HS", homeRooms: ["E283"] },
      { schoolName: "Woodward Academy", homeRooms: ["E361"] },
    ],
    mapLink: "https://www.google.com/maps/place/Van+Leer+Building/@33.7760041,-84.399708,17z/data=!3m1!4b1!4m6!3m5!1s0x88f5048a1b919b1f:0x4ebd83ca60615a8b!8m2!3d33.7759997!4d-84.3971331!16s%2Fg%2F11b6yhwzqh?entry=ttu"
  },
];

const makerspaceLocations: MakerspaceLocation[] = [
  {
    label: "MILL",
    position: [33.776253752760226, -84.40172173860996],
    fullName: "Materials Innovation and Learning Laboratory",
    hrefId: "tours",
    mapLink: "https://www.google.com/maps/place/Materials+Innovation+and+Learning+Laboratory/@33.7765023,-84.404287,17z/data=!3m1!4b1!4m6!3m5!1s0x88f50596e8412ba3:0xafd14c44fb982ebd!8m2!3d33.7764979!4d-84.4017121!16s%2Fg%2F11gk8qkvdd?entry=ttu",
  },
  {
    label: "Invention Studio",
    position: [33.77729993365719, -84.40071135550421],
    hrefId: "tours",
    mapLink: "https://www.google.com/maps/place/The+Invention+Studio+at+Georgia+Tech/@33.7772871,-84.4055654,17z/data=!3m1!4b1!4m6!3m5!1s0x88f5048bf29ea091:0x4332d0a5614685e0!8m2!3d33.7772827!4d-84.4006945!16s%2Fg%2F11clysw2ck?entry=ttu",
  },
];

const transportLocations: TransportLocation[] = [
  {
    label: "Bus Parking: W21 Lot",
    position: [33.77715151834969, -84.39971892515817],
    description: "Parking lot for buses",
    mapLink: "https://www.google.com/maps/place/33%C2%B046'37.8%22N+84%C2%B023'59.0%22W/@33.7771559,-84.4022938,17z/data=!3m1!4b1!4m4!3m3!8m2!3d33.7771515!4d-84.3997189?entry=ttu",
  },
  {
    label: "General Parking: W2 Lot",
    position: [33.77389823077431, -84.39956788161535],
    description: "Parking lot for general vehicles",
    mapLink: "https://www.google.com/maps/place/33%C2%B046'26.0%22N+84%C2%B023'58.4%22W/@33.7739026,-84.4021428,17z/data=!3m1!4b1!4m4!3m3!8m2!3d33.7738982!4d-84.3995679?entry=ttu",
  },
  {
    label: "Drop Off Location",
    position: [33.77530902138295, -84.39596748697224],
    description: "Location for drop off",
    mapLink: "https://www.google.com/maps/place/33%C2%B046'31.1%22N+84%C2%B023'45.5%22W/@33.7753134,-84.3985424,17z/data=!3m1!4b1!4m4!3m3!8m2!3d33.775309!4d-84.3959675?entry=ttu",
  },
];

const foodLocations: FoodLocation[] = []
export { tournamentLocations, makerspaceLocations, transportLocations, foodLocations };
