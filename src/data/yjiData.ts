export type YjiResult = {
  key: number;
  school: string;
  town?: string;
  bold?: boolean;
};

export type YjiEventResult = {
  key: number;
  event: string;
  school: string;
};

export const YJI_2026 = {
  title: "2026 Yellow Jacket Invitational",
  examsUrl:
    "https://drive.google.com/drive/folders/1jpx6jMnmFTmXE5KQ185vRekH6mGl29Xt?usp=sharing",
  videoUrl: "https://www.youtube.com/embed/lD41akxuV60",
};

export const YJI_OVERALL_B: YjiResult[] = [
  { key: 1, bold: true, school: "Fulton Science Academy (Team A)", town: "Alpharetta, GA" },
  { key: 2, bold: true, school: "Piney Grove Middle School (Team Grove)", town: "Cumming, GA" },
  { key: 3, bold: true, school: "Dodgen Middle School (Team A)", town: "Marietta, GA" },
  { key: 4, school: "Bearden Middle School (Team A)", town: "Knoxville, TN" },
  { key: 5, school: "Alton C. Crews Middle School (Team Gold)", town: "Lawrenceville, GA" },
  { key: 6, school: "Fulton Science Academy (Team B)", town: "Alpharetta, GA" },
];

export const YJI_OVERALL_C: YjiResult[] = [
  { key: 1, bold: true, school: "Fulton Science Academy (Team 1)", town: "Alpharetta, GA" },
  { key: 2, bold: true, school: "Walton High School (Team A)", town: "Marietta, GA" },
  { key: 3, bold: true, school: "Camas High School (Team Black)", town: "Camas, WA" },
  { key: 4, school: "Ardrey Kell High School (Team Purple Knights)", town: "Charlotte, NC" },
  { key: 5, school: "James S. Rickards High School (Team 1)", town: "Tallahassee, FL" },
  { key: 6, school: "Ballantyne Ridge High School (Team Varsity)", town: "Charlotte, NC" },
];

export const YJI_EVENTS_B: YjiEventResult[] = [
  { key: 1, event: "Anatomy and Physiology", school: "Vickery Creek MS (Team Silver)" },
  { key: 2, event: "Circuit Lab", school: "Bearden MS (Team A)" },
  { key: 3, event: "Codebusters", school: "Fulton Science Academy (Team A)" },
  { key: 4, event: "Crime Busters", school: "Piney Grove MS (Team Grove)" },
  { key: 5, event: "Disease Detectives", school: "Fulton Science Academy (Team A)" },
  { key: 6, event: "Dynamic Planet", school: "Fairview MS" },
  { key: 7, event: "Entomology", school: "Taylor Road MS (Team A)" },
  { key: 8, event: "Experimental Design", school: "Fulton Science Academy (Team A)" },
  { key: 9, event: "Heredity", school: "Alton C. Crews MS (Team Gold)" },
  { key: 10, event: "Machines", school: "Dodgen MS (Team A)" },
  { key: 11, event: "Meterology", school: "Fulton Science Academy (Team A)" },
  { key: 12, event: "Metric Master", school: "Taylor Road MS (Team A)" },
  { key: 13, event: "Potions and Poisons", school: "Dodgen MS (Team A)" },
  { key: 14, event: "Remote Sensing", school: "Dodgen MS (Team A)" },
  { key: 15, event: "Rocks and Minerals", school: "Piney Grove MS (Team Grove)" },
  { key: 16, event: "Solar System", school: "Fulton Science Academy (Team A)" },
  { key: 17, event: "Water Quality", school: "Alton C. Crews MS (Team Gold)" },
  { key: 18, event: "Write It Do It", school: "Taylor Road MS (Team A)" },
  { key: 19, event: "Boomilever (Trial)", school: "Alton C. Crews MS (Team Gold)" },
  { key: 20, event: "Helicopter (Trial)", school: "Bearden MS (Team A)" },
  { key: 21, event: "Hovercraft (Trial)", school: "Alton C. Crews MS (Team Maroon)" },
  { key: 22, event: "Mission Possible (Trial)", school: "Bearden MS (Team A)" },
  { key: 23, event: "Pokemon (Trial)", school: "Alton C. Crews MS (Team Gold)" },
  { key: 24, event: "Scrambler (Trial)", school: "Dodgen MS (Team A)" },
];

export const YJI_EVENTS_C: YjiEventResult[] = [
  { key: 1, event: "Anatomy and Physiology", school: "Ardrey Kell HS (Team Purple Knights)" },
  { key: 2, event: "Astronomy", school: "Fulton Science Academy (Team 1)" },
  { key: 3, event: "Chemistry Lab", school: "James S. Rickards HS (Team 1)" },
  { key: 4, event: "Circuit Lab", school: "Fulton Science Academy (Team 2)" },
  { key: 5, event: "Codebusters", school: "Walton HS (Team A)" },
  { key: 6, event: "Designer Genes", school: "Ardrey Kell HS (Team Purple Knights)" },
  { key: 7, event: "Disease Detectives", school: "Fulton Science Academy (Team 1)" },
  { key: 8, event: "Dynamic Planet", school: "Walton HS (Team B)" },
  { key: 9, event: "Engineering CAD", school: "Decatur HS (Team 1)" },
  { key: 10, event: "Entomology", school: "Camas HS (Team Black)" },
  { key: 11, event: "Experimental Design", school: "Walton HS (Team A)" },
  { key: 12, event: "Forensics", school: "Fulton Science Academy (Team 1)" },
  { key: 13, event: "Machines", school: "Ardrey Kell HS (Team Purple Knights)" },
  { key: 14, event: "Materials Science", school: "Fulton Science Academy (Team 1)" },
  { key: 15, event: "Remote Sensing", school: "Fulton Science Academy (Team 1)" },
  { key: 16, event: "Rocks and Minerals", school: "Walton HS (Team A)" },
  { key: 17, event: "Water Quality", school: "Camas HS (Team Black)" },
  { key: 18, event: "Boomilever (Trial)", school: "James S. Rickards HS (Team 1)" },
  { key: 19, event: "Bungee Drop (Trial)", school: "Alpharetta HS (Team 1)" },
  { key: 20, event: "Electric Vehicle (Trial)", school: "Walton HS (Team B)" },
  { key: 21, event: "Helicopter (Trial)", school: "GSMST (Team B)" },
  { key: 22, event: "Hovercraft (Trial)", school: "Walton HS (Team B)" },
  { key: 23, event: "Pokemon (Trial)", school: "Ballantyne Ridge HS (Team V1)" },
  { key: 24, event: "Robot Tour (Trial)", school: "Walton HS (Team B)" },
];
