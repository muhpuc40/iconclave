// iCONCLAVE 2026 — one source of truth for every competition page.

import {
  clashRepresentatives,
  pendingRepresentative,
  type Representative,
} from "@/data/contacts";

export type AccentColor = {
  from: string;
  to: string;
  single?: string;
};

export type RuleSection = {
  title: string;
  items: string[];
};

export type JudgingCriterion = {
  label: string;
  percentage: number;
  description: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type TimelineEvent = {
  label: string;
  date: string | null;
  description?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type DosDonts = {
  dos: string[];
  donts: string[];
};

export type Competition = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  heroLine: string;
  organizer: string;
  organizerShort: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  accent: AccentColor;
  tags: string[];
  index: number;
  poster: {
    src: string;
    width: number;
    height: number;
  };
  facts: {
    participation: string;
    teamSize: string;
    format: string;
    duration: string;
    date: string;
    venue: string;
    fee: string;
  };
  rounds: ProcessStep[];
  rules: RuleSection[];
  judgingCriteria: JudgingCriterion[];
  preparation: string[];
  dosDonts: DosDonts;
  timeline: TimelineEvent[];
  faqs: FAQ[];
  rulebookUrl: string | null;
  rulebookFileName: string;
  representatives: Representative[];
};

const poster = (slug: string) => ({
  src: `/posters/competitions/${slug}.svg`,
  width: 1080,
  height: 1350,
});

const sharedFacts = {
  participation: "Team",
  teamSize: "2–3 members",
  date: "Deadline: 10 Sep 2026",
  venue: "Premier University",
  fee: "See registration form",
};

const sharedRules: RuleSection[] = [
  {
    title: "Eligibility",
    items: [
      "Open to undergraduate students from universities across Bangladesh.",
      "Each team must have 2–3 members.",
      "Participants must complete the global registration form before the deadline.",
    ],
  },
  {
    title: "Registration",
    items: [
      "Registration is completed once through the official iConclave 2026 form.",
      "Select the intended competition carefully and provide accurate team information.",
      "Registration closes on 10 September 2026.",
    ],
  },
  {
    title: "Official Rulebook",
    items: [
      "Read the official rulebook for the selected competition before registering.",
      "Competition-specific requirements, judging and permitted materials are defined in that rulebook.",
      "The organizers' decision is final in matters not otherwise covered by the rulebook.",
    ],
  },
];

const sharedRounds: ProcessStep[] = [
  {
    number: "01",
    title: "Choose",
    description: "Select the competition that best fits your team's skills.",
  },
  {
    number: "02",
    title: "Read",
    description: "Review the official rulebook before submitting the form.",
  },
  {
    number: "03",
    title: "Register",
    description: "Complete the single iConclave registration form as a team.",
  },
  {
    number: "04",
    title: "Prepare",
    description: "Build, practise or refine your entry for the selected segment.",
  },
  {
    number: "05",
    title: "Compete",
    description: "Present your work and perform on the iConclave stage.",
  },
];

const sharedTimeline: TimelineEvent[] = [
  {
    label: "Registration Opens",
    date: "Open now",
    description: "The global iConclave 2026 registration form is accepting responses.",
  },
  {
    label: "Read the Rulebook",
    date: "Before registering",
    description: "Review the official rules for your chosen competition.",
  },
  {
    label: "Registration Closes",
    date: "10 September 2026",
  },
  {
    label: "Competition Day",
    date: null,
    description: "The detailed event schedule will be announced by the organizers.",
  },
  {
    label: "Results & Recognition",
    date: null,
  },
];

const sharedDosDonts: DosDonts = {
  dos: [
    "Read the official rulebook before registering",
    "Register with complete and accurate team details",
    "Prepare all required materials in advance",
    "Follow coordinator and judge instructions",
  ],
  donts: [
    "Miss the 10 September 2026 registration deadline",
    "Submit copied or uncredited work",
    "Change team members without organizer approval",
    "Treat website summaries as a replacement for the rulebook",
  ],
};

const sharedFaqs = (name: string): FAQ[] => [
  {
    question: `Who can join ${name}?`,
    answer:
      "Undergraduate students from universities across Bangladesh may participate in teams of 2–3 members.",
  },
  {
    question: "Where do we register?",
    answer:
      "Use the single iConclave 2026 registration page. There is no separate competition registration form.",
  },
  {
    question: "When is the registration deadline?",
    answer: "Registration closes on 10 September 2026.",
  },
  {
    question: "Where can we find the official rules?",
    answer:
      "Use the rulebook section on this page. If a local PDF has not yet been published, the official shared rulebook folder is linked there.",
  },
];

export const competitions: Competition[] = [
  {
    slug: "pitch3",
    name: "PITCH3",
    shortName: "PITCH3",
    tagline: "3 Minds. 3 Minutes. 1 Impact.",
    heroLine: "3 MINDS. 3 MINUTES. 1 IMPACT.",
    organizer: "Premier University Computer Club",
    organizerShort: "PUCC",
    category: "Research Communication",
    shortDescription:
      "Turn your research into a clear and impactful presentation.",
    longDescription:
      "PITCH3 challenges undergraduate teams to communicate the purpose, insight and impact of their research with clarity. Distil complex work into a concise three-minute presentation that a broad audience can understand.",
    accent: { from: "#1455D9", to: "#6633CC" },
    tags: ["Research", "Pitching", "Communication"],
    index: 1,
    poster: poster("pitch3"),
    facts: {
      ...sharedFacts,
      format: "Three-minute research pitch",
      duration: "3 minutes",
    },
    rounds: sharedRounds,
    rules: [
      ...sharedRules,
      {
        title: "Presentation",
        items: [
          "Explain the research question, approach and potential impact clearly.",
          "Stay within the official presentation time and format in the published rulebook.",
        ],
      },
    ],
    judgingCriteria: [],
    preparation: [
      "Identify the single most important message in your research",
      "Replace specialist jargon with direct, accessible language",
      "Rehearse to fit the complete pitch into three minutes",
      "Build a clear opening, evidence-led middle and memorable close",
      "Prepare concise answers to likely questions",
      "Check the final rulebook for slide and prop restrictions",
    ],
    dosDonts: sharedDosDonts,
    timeline: sharedTimeline,
    faqs: sharedFaqs("PITCH3"),
    rulebookUrl: "/rulebooks/PITCH3.pdf",
    rulebookFileName: "PITCH3.pdf",
    representatives: [pendingRepresentative()],
  },
  {
    slug: "clash-of-projects",
    name: "Clash of Projects",
    shortName: "Clash",
    tagline: "Create. Showcase. Inspire.",
    heroLine: "CREATE. SHOWCASE. INSPIRE.",
    organizer: "Premier University Robotics Club",
    organizerShort: "PURC",
    category: "Project Exhibition",
    shortDescription:
      "Present your project and demonstrate the idea and work behind it.",
    longDescription:
      "Clash of Projects is a technology project showcasing competition for original, innovative and practical work. Teams demonstrate their hardware, software or integrated solution and explain the problem, engineering process and real-world value behind it.",
    accent: { from: "#6633CC", to: "#C5229E" },
    tags: ["Projects", "Technology", "Innovation"],
    index: 2,
    poster: poster("clash-of-projects"),
    facts: {
      ...sharedFacts,
      format: "Poster or laptop demonstration",
      duration: "5–10 minutes",
    },
    rounds: sharedRounds,
    rules: [
      {
        title: "Eligibility",
        items: [
          "Participants must be undergraduate students from any discipline.",
          "Each team must consist of 2–3 members; cross-institutional teams are allowed.",
          "The presenter must be a registered team member.",
          "No member substitution is allowed without organizer approval.",
        ],
      },
      {
        title: "Project Requirements",
        items: [
          "Projects must be original, innovative and technology-based.",
          "Hardware, software or combined projects are allowed.",
          "The project should address a practical problem or demonstrate meaningful application.",
          "Data, research and third-party material must be cited appropriately.",
        ],
      },
      {
        title: "Presentation & Safety",
        items: [
          "Teams receive 5–10 minutes to present using a poster or laptop.",
          "Teams must bring their own equipment and required accessories.",
          "Projects must be safe for public exhibition and organizer instructions must be followed.",
        ],
      },
    ],
    judgingCriteria: [
      {
        label: "Innovative & Creative",
        percentage: 20,
        description: "Originality and creativity of the concept.",
      },
      {
        label: "Visual Presentation",
        percentage: 15,
        description: "Quality and clarity of the visual demonstration.",
      },
      {
        label: "Oral Presentation",
        percentage: 15,
        description: "Clarity, structure and delivery of the presentation.",
      },
      {
        label: "Feasibility",
        percentage: 10,
        description: "Practicality and realistic implementation potential.",
      },
      {
        label: "Cost Effectiveness",
        percentage: 10,
        description: "Efficient use of resources and cost awareness.",
      },
      {
        label: "Challenges Addressed",
        percentage: 10,
        description: "Understanding and handling of project challenges.",
      },
      {
        label: "Question & Answer",
        percentage: 20,
        description: "Accuracy, confidence and depth in the judging discussion.",
      },
    ],
    preparation: [
      "Test the complete project under exhibition conditions",
      "Prepare a five-to-ten-minute demonstration",
      "Bring power adapters, cables and backup materials",
      "Explain the problem, solution and practical impact clearly",
      "Credit all data, research and third-party resources",
      "Rehearse answers about feasibility, cost and challenges",
    ],
    dosDonts: sharedDosDonts,
    timeline: sharedTimeline,
    faqs: sharedFaqs("Clash of Projects"),
    rulebookUrl: "/rulebooks/clash-of-projects.pdf",
    rulebookFileName: "clash-of-projects.pdf",
    representatives: clashRepresentatives,
  },
  {
    slug: "hertech-hustle",
    name: "HerTech Hustle",
    shortName: "HerTech",
    tagline: "Empower. Triumph. Innovate.",
    heroLine: "EMPOWER. TRIUMPH. INNOVATE.",
    organizer:
      "IEEE Women in Engineering Premier University Student Branch Affinity Group",
    organizerShort: "IEEE WIE PUSB",
    category: "Knowledge & Innovation",
    shortDescription:
      "Test your knowledge, confidence, and ability to think under pressure.",
    longDescription:
      "HerTech Hustle brings knowledge, confidence and fast decision-making into one energetic competition. Teams respond under pressure, connect ideas and demonstrate the calm, collaborative thinking that drives innovation.",
    accent: { from: "#C5229E", to: "#6633CC" },
    tags: ["Knowledge", "Confidence", "Teamwork"],
    index: 3,
    poster: poster("hertech-hustle"),
    facts: {
      ...sharedFacts,
      format: "Knowledge and challenge rounds",
      duration: "See official rulebook",
    },
    rounds: sharedRounds,
    rules: sharedRules,
    judgingCriteria: [],
    preparation: [
      "Follow current developments in technology and innovation",
      "Practise concise team decision-making under time pressure",
      "Assign clear communication roles within the team",
      "Review the official round structure when published",
      "Build confidence through timed practice",
      "Prepare to explain the reasoning behind each answer",
    ],
    dosDonts: sharedDosDonts,
    timeline: sharedTimeline,
    faqs: sharedFaqs("HerTech Hustle"),
    rulebookUrl: "/rulebooks/HERTECH-HUSTLE.pdf",
    rulebookFileName: "hertech-hustle.pdf",
    representatives: [pendingRepresentative()],
  },
  {
    slug: "promptwar",
    name: "PromptWar",
    shortName: "PromptWar",
    tagline: "Think. Prompt. Conquer.",
    heroLine: "THINK. PROMPT. CONQUER.",
    organizer: "IEEE Computer Society Premier University Student Branch Chapter",
    organizerShort: "IEEE CS PUSBC",
    category: "AI & Prompting",
    shortDescription: "Put your AI and prompting skills to the test.",
    longDescription:
      "PromptWar challenges teams to turn clear thinking into precise instructions for AI. Participants interpret tasks, design effective prompts, evaluate outputs and iterate strategically to produce strong results under competition pressure.",
    accent: { from: "#1455D9", to: "#16A3D8" },
    tags: ["AI", "Prompting", "Problem Solving"],
    index: 4,
    poster: poster("promptwar"),
    facts: {
      ...sharedFacts,
      format: "Prompt-based challenge rounds",
      duration: "See official rulebook",
    },
    rounds: sharedRounds,
    rules: sharedRules,
    judgingCriteria: [],
    preparation: [
      "Practise writing clear prompts with explicit constraints",
      "Compare zero-shot and example-driven prompting",
      "Evaluate outputs for accuracy, relevance and completeness",
      "Learn to iterate without losing the original objective",
      "Review responsible and ethical AI use",
      "Check the rulebook for permitted tools and models",
    ],
    dosDonts: sharedDosDonts,
    timeline: sharedTimeline,
    faqs: sharedFaqs("PromptWar"),
    rulebookUrl: "/rulebooks/PROMPT-WAR.pdf",
    rulebookFileName: "promptwar.pdf",
    representatives: [pendingRepresentative()],
  },
  {
    slug: "goalbot-challenge",
    name: "GoalBot Challenge",
    shortName: "GoalBot",
    tagline: "Bot. Ball. Battle.",
    heroLine: "BOT. BALL. BATTLE.",
    organizer:
      "IEEE Robotics and Automation Society Premier University Student Branch Chapter",
    organizerShort: "IEEE RAS PUSBC",
    category: "Robotics",
    shortDescription:
      "Build, compete, and demonstrate your robotics skills.",
    longDescription:
      "GoalBot Challenge puts robotics into motion. Teams build and operate a robot designed for competitive play, balancing mechanical control, electrical reliability, programming and rapid tactical decisions.",
    accent: { from: "#F06B32", to: "#C5229E" },
    tags: ["Robotics", "Engineering", "Competition"],
    index: 5,
    poster: poster("goalbot-challenge"),
    facts: {
      ...sharedFacts,
      format: "Robot challenge matches",
      duration: "See official rulebook",
    },
    rounds: sharedRounds,
    rules: sharedRules,
    judgingCriteria: [],
    preparation: [
      "Build for reliable control and repeatable movement",
      "Test the robot, controller and power system together",
      "Carry permitted tools and spare components",
      "Practise team roles and match strategy",
      "Prioritize electrical and mechanical safety",
      "Verify all dimensions and constraints in the final rulebook",
    ],
    dosDonts: sharedDosDonts,
    timeline: sharedTimeline,
    faqs: sharedFaqs("GoalBot Challenge"),
    rulebookUrl: "/rulebooks/goalbot-challange.pdf",
    rulebookFileName: "goalbot-challenge.pdf",
    representatives: [pendingRepresentative()],
  },
  {
    slug: "research-exhibition",
    name: "Research Exhibition",
    shortName: "Research Exhibition",
    tagline: "Research. Reveal. Revolve.",
    heroLine: "RESEARCH. REVEAL. REVOLVE.",
    organizer:
      "IEEE Power & Energy Society Premier University Student Branch Chapter",
    organizerShort: "IEEE PES PUSBC",
    category: "Poster Presentation",
    shortDescription: "Present your research by poster presentation.",
    longDescription:
      "Research Exhibition gives undergraduate teams a visual platform for presenting research. A strong poster connects the question, method, evidence and implications into a coherent story that viewers and judges can understand quickly.",
    accent: { from: "#149B72", to: "#1455D9" },
    tags: ["Research", "Poster", "Presentation"],
    index: 6,
    poster: poster("research-exhibition"),
    facts: {
      ...sharedFacts,
      format: "Research poster presentation",
      duration: "See official rulebook",
    },
    rounds: sharedRounds,
    rules: sharedRules,
    judgingCriteria: [],
    preparation: [
      "Build a clear visual hierarchy for the poster",
      "Show the research question, method, findings and impact",
      "Use readable type, labelled figures and cited evidence",
      "Prepare a concise spoken walkthrough",
      "Anticipate questions about limitations and future work",
      "Confirm poster dimensions in the official rulebook",
    ],
    dosDonts: sharedDosDonts,
    timeline: sharedTimeline,
    faqs: sharedFaqs("Research Exhibition"),
    rulebookUrl: "/rulebooks/RESEARCH-EXHIBITON.pdf",
    rulebookFileName: "research-exhibition.pdf",
    representatives: [pendingRepresentative()],
  },
];

export function getCompetitionBySlug(slug: string): Competition | undefined {
  return competitions.find((competition) => competition.slug === slug);
}

export function getAllSlugs(): string[] {
  return competitions.map((competition) => competition.slug);
}

