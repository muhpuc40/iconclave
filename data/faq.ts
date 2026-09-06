// iCONCLAVE 2026 — global FAQ

export type FAQEntry = {
  question: string;
  answer: string;
  category?: string;
};

export const globalFAQs: FAQEntry[] = [
  {
    question: "What is iConclave 2026?",
    answer:
      "iConclave 2026 is a six-segment student competition at Premier University covering research communication, project exhibition, knowledge, AI prompting, robotics and poster presentation.",
    category: "General",
  },
  {
    question: "Who can participate?",
    answer:
      "Registration is open to undergraduate students from universities across Bangladesh.",
    category: "General",
  },
  {
    question: "How large can a team be?",
    answer: "Each team must have 2–3 members.",
    category: "General",
  },
  {
    question: "Which competitions are available?",
    answer:
      "The six segments are PITCH3, Clash of Projects, HerTech Hustle, PromptWar, GoalBot Challenge and Research Exhibition.",
    category: "General",
  },
  {
    question: "How do we register?",
    answer:
      "Use the single global Google form on the Registration page. There are no separate registration forms for individual competitions.",
    category: "Registration",
  },
  {
    question: "When is the registration deadline?",
    answer: "Registration closes on 10 September 2026.",
    category: "Registration",
  },
  {
    question: "Should we read the rulebook first?",
    answer:
      "Yes. Participants are requested to read the official rulebook for their selected competition carefully before registering.",
    category: "Registration",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Use the official registration form and current rulebook for the latest fee information.",
    category: "Registration",
  },
  {
    question: "Where will the event take place?",
    answer:
      "The event is organized at Premier University, Chattogram. Detailed venue allocations will be published with the final schedule.",
    category: "Logistics",
  },
  {
    question: "When is the competition day?",
    answer:
      "The event date and detailed schedule will be announced by the organizers.",
    category: "Logistics",
  },
  {
    question: "Where can I download a rulebook?",
    answer:
      "Each competition page has one rulebook download button and an embedded PDF viewer. Until a local PDF is published, the button opens the official shared rulebook folder.",
    category: "Rules",
  },
  {
    question: "How do I contact a competition representative?",
    answer:
      "Open the Contact page or scroll to the contact section on the relevant competition page. Published names and phone numbers appear there.",
    category: "Contact",
  },
];

