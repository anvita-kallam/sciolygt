export type RegisteredTeam = {
  school: string;
  teams: number;
  state: string;
};

/** Deduped YJI 2027 registered schools (duplicate entries removed). */
export const YJI_2027_TEAMS = {
  divisionB: [
    { school: "Fulton Science Academy", teams: 2, state: "GA" },
    { school: "Autrey Mill Middle School", teams: 2, state: "GA" },
    { school: "Piney Grove Middle School", teams: 2, state: "GA" },
    { school: "Summerour Middle School", teams: 1, state: "GA" },
    { school: "Dodgen Middle School", teams: 2, state: "GA" },
    { school: "Vickery Creek Middle School", teams: 2, state: "GA" },
    { school: "Archimedean Middle Conservatory (MS)", teams: 2, state: "FL" },
    { school: "Alton C. Crews Middle School", teams: 2, state: "GA" },
    { school: "Orlando Science Middle School", teams: 2, state: "FL" },
    { school: "Cato Ridge Middle School", teams: 2, state: "NC" },
    { school: "Fairview Middle School", teams: 1, state: "FL" },
  ] satisfies RegisteredTeam[],
  divisionC: [
    { school: "Fulton Science Academy", teams: 2, state: "GA" },
    { school: "Starr's Mill High School", teams: 2, state: "GA" },
    { school: "Walton High School", teams: 2, state: "GA" },
    { school: "Decatur High School", teams: 2, state: "GA" },
    { school: "Innovation Academy", teams: 2, state: "GA" },
    { school: "East Coweta High School", teams: 1, state: "GA" },
    { school: "The Westminster Schools", teams: 1, state: "GA" },
    { school: "Northview High School", teams: 2, state: "GA" },
    { school: "Woodward Academy", teams: 2, state: "GA" },
    { school: "Northgate High School", teams: 2, state: "GA" },
    { school: "Middle College High School", teams: 2, state: "TN" },
    { school: "Southeast Bullock High School", teams: 2, state: "GA" },
    { school: "Effingham College and Career Academy", teams: 1, state: "GA" },
    { school: "Alliance Academy for Innovation", teams: 2, state: "GA" },
    { school: "Gilmer High School", teams: 1, state: "GA" },
    { school: "Sprayberry High School", teams: 1, state: "GA" },
    { school: "Gwinnett School of Mathematics Science and Technology", teams: 1, state: "GA" },
    { school: "North Atlanta High School", teams: 1, state: "GA" },
    { school: "Florida Atlantic University High School", teams: 2, state: "FL" },
    { school: "Denmark High School", teams: 2, state: "GA" },
    { school: "Archimedean Upper Conservatory", teams: 2, state: "FL" },
    { school: "Lakeside High School (Evans)", teams: 2, state: "GA" },
    { school: "Ed W. Clark High School", teams: 2, state: "NV" },
    { school: "Alpharetta High School", teams: 2, state: "GA" },
    { school: "Durham Academy", teams: 1, state: "NC" },
    { school: "Olympia High School", teams: 2, state: "FL" },
    { school: "Upson Lee High School", teams: 1, state: "GA" },
    { school: "Duluth High School", teams: 2, state: "GA" },
    { school: "Pope High School", teams: 1, state: "GA" },
    { school: "Chattahoochee High School", teams: 2, state: "GA" },
    { school: "Seckinger High School", teams: 1, state: "GA" },
  ] satisfies RegisteredTeam[],
};

export const YJI_2027_TEAM_COUNTS = {
  divisionB: YJI_2027_TEAMS.divisionB.reduce((sum, t) => sum + t.teams, 0),
  divisionC: YJI_2027_TEAMS.divisionC.reduce((sum, t) => sum + t.teams, 0),
};
