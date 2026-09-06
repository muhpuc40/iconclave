// iCONCLAVE 2026 — shared event configuration

export const siteConfig = {
  name: "iConclave 2026",
  shortName: "iConclave",
  year: "2026",
  tagline: "Ideas. Intelligence. Innovation.",
  heroHeading: "WHERE IDEAS MEET INTELLIGENCE.",
  editorialStatement:
    "SIX COMPETITIONS.\nSIX WAYS TO COMPETE.\nONE iCONCLAVE.",
  editorialBody:
    "Research, technology, innovation, robotics, AI and problem-solving meet on one student stage.",
  university: "Premier University",
  location: "Chattogram, Bangladesh",
  description:
    "iConclave 2026 is a multidisciplinary competition for undergraduate students across Bangladesh, featuring six segments in research, technology, innovation and problem-solving.",
  organizerLine: "Organized by Faculty of Engineering, Premier University",
  registrationDeadline: "10 September 2026",
  globalRegistrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeYrZc2rqQ53VJSrnfStFGXNh_b0CX9ObMu1_HUB6j_KdtmIg/viewform?embedded=true",
  rulebookFolderUrl:
    "https://drive.google.com/drive/folders/1SY46TjVRNBmL_dhrnJ6NBTigOaIQvBpR",
  eventUrl: "https://www.facebook.com/share/18vRM56NV6/",
  poster: {
    src: "/posters/iconclave-2026.svg",
    width: 1080,
    height: 1350,
  },
  competitionCount: 6,
};

export type SiteConfig = typeof siteConfig;
