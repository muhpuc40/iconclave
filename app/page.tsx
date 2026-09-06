import { HomeHero } from "@/components/hero/HomeHero";
import { StatStrip } from "@/components/hero/StatStrip";
import { EditorialIntro } from "@/components/home/EditorialIntro";
import { CompetitionExplorer } from "@/components/competitions/CompetitionExplorer";
import { WhyParticipate } from "@/components/home/WhyParticipate";
import { HowItWorks } from "@/components/home/HowItWorks";
import { SchedulePreview } from "@/components/home/SchedulePreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { OrganizersSection } from "@/components/home/OrganizersSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iConclave 2026 — Premier University",
  description:
    "Registration is open for six iConclave 2026 competitions for undergraduate students across Bangladesh.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatStrip />
      <EditorialIntro />
      <CompetitionExplorer />
      <WhyParticipate />
      <HowItWorks />
      <SchedulePreview />
      <OrganizersSection />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
