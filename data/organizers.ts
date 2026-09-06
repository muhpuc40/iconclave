export type Organizer = {
  name: string;
  shortName: string;
  logo: string;
  competitionSlug?: string;
};

export const associationPartners: Organizer[] = [
  {
    name: "Department of CSE",
    shortName: "Department of CSE",
    logo: "/organizers/premier-university.png",
  },
  {
    name: "Department of EEE",
    shortName: "Department of EEE",
    logo: "/organizers/premier-university.png",
  },
  {
    name: "IEEE Premier University Student Branch",
    shortName: "IEEE PUSB",
    logo: "/organizers/ieee-pusb.png",
  },
];

export const organizingClubs: Organizer[] = [
  {
    name: "Premier University Robotics Club",
    shortName: "PUCRC",
    logo: "/organizers/premier-university-robotics-club.png",
    competitionSlug: "clash-of-projects",
  },
  {
    name: "Premier University Computer Club",
    shortName: "PUCC",
    logo: "/organizers/premier-university-computer-club.png",
    competitionSlug: "pitch3",
  },
  {
    name: "IEEE Women in Engineering Premier University Student Branch Affinity Group",
    shortName: "IEEE WIE PUSB",
    logo: "/organizers/ieee-wie-pusb.png",
    competitionSlug: "hertech-hustle",
  },
  {
    name: "IEEE Computer Society Premier University Student Branch Chapter",
    shortName: "IEEE CS PUSBC",
    logo: "/organizers/ieee-cs-pusbc.png",
    competitionSlug: "promptwar",
  },
  {
    name: "IEEE Robotics and Automation Society Premier University Student Branch Chapter",
    shortName: "IEEE RAS PUSBC",
    logo: "/organizers/ieee-ras-pusbc.png",
    competitionSlug: "goalbot-challenge",
  },
  {
    name: "IEEE Power & Energy Society Premier University Student Branch Chapter",
    shortName: "IEEE PES PUSBC",
    logo: "/organizers/ieee-pes-pusbc.png",
    competitionSlug: "research-exhibition",
  },
];
