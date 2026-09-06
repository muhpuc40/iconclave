// iCONCLAVE 2026 — schedule data

export type TimeSlot = {
  time: string;
  title: string;
  description?: string;
  competition?: string;
  type: "general" | "competition" | "ceremony" | "break";
};

export type ScheduleDay = {
  day: string;
  date: string | null;
  label: string;
  slots: TimeSlot[];
};

export const schedule: ScheduleDay[] = [
  {
    day: "Day 1",
    date: null,
    label: "Competition Day",
    slots: [
      {
        time: "TBA",
        title: "Registration & Check-in",
        description: "Teams check in and receive event-day instructions.",
        type: "general",
      },
      {
        time: "TBA",
        title: "Opening Ceremony",
        description: "Welcome address and official commencement of iConclave 2026.",
        type: "ceremony",
      },
      {
        time: "TBA",
        title: "PITCH3",
        description: "Three-minute research communication presentations.",
        competition: "pitch3",
        type: "competition",
      },
      {
        time: "TBA",
        title: "Clash of Projects",
        description: "Technology project exhibition and judging.",
        competition: "clash-of-projects",
        type: "competition",
      },
      {
        time: "TBA",
        title: "HerTech Hustle",
        description: "Knowledge, confidence and innovation challenges.",
        competition: "hertech-hustle",
        type: "competition",
      },
      {
        time: "TBA",
        title: "PromptWar",
        description: "AI and prompt engineering challenge rounds.",
        competition: "promptwar",
        type: "competition",
      },
      {
        time: "TBA",
        title: "GoalBot Challenge",
        description: "Robotics challenge matches.",
        competition: "goalbot-challenge",
        type: "competition",
      },
      {
        time: "TBA",
        title: "Research Exhibition",
        description: "Research poster presentations and judging.",
        competition: "research-exhibition",
        type: "competition",
      },
      {
        time: "TBA",
        title: "Break",
        description: "Lunch and networking.",
        type: "break",
      },
      {
        time: "TBA",
        title: "Closing Ceremony & Prize-giving",
        description: "Results announcement and award distribution.",
        type: "ceremony",
      },
    ],
  },
];

export const scheduleNote =
  "Registration closes on 10 September 2026. The event date, exact timings and venue allocations will be published by the organizers.";

