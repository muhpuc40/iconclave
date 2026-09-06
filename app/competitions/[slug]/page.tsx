import { notFound } from "next/navigation";
import { getCompetitionBySlug, getAllSlugs } from "@/data/competitions";
import { CompetitionHero } from "@/components/competition/CompetitionHero";
import { QuickFacts } from "@/components/competition/QuickFacts";
import { ProcessTimeline } from "@/components/competition/ProcessTimeline";
import { RulesAccordion } from "@/components/competition/RulesAccordion";
import { JudgingCriteria } from "@/components/competition/JudgingCriteria";
import { PreparationGuide } from "@/components/competition/PreparationGuide";
import { DosAndDonts } from "@/components/competition/DosAndDonts";
import { CompetitionTimeline } from "@/components/competition/CompetitionTimeline";
import { CompetitionFAQ } from "@/components/competition/CompetitionFAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { RulebookViewer } from "@/components/competition/RulebookViewer";
import { RepresentativeContacts } from "@/components/competition/RepresentativeContacts";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const competition = getCompetitionBySlug(slug);
  if (!competition) return { title: "Not Found" };
  return {
    title: competition.name,
    description: competition.shortDescription,
    openGraph: {
      title: `${competition.name} | iConclave 2026`,
      description: competition.shortDescription,
    },
  };
}

export default async function CompetitionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const competition = getCompetitionBySlug(slug);
  if (!competition) notFound();

  return (
    <div className="min-h-screen bg-white">
      <CompetitionHero competition={competition} />
      <QuickFacts competition={competition} />
      <ProcessTimeline competition={competition} />
      <RulesAccordion competition={competition} />
      <RulebookViewer competition={competition} />
      <JudgingCriteria competition={competition} />
      <PreparationGuide competition={competition} />
      <DosAndDonts competition={competition} />
      <CompetitionTimeline competition={competition} />
      <RepresentativeContacts competition={competition} />
      <CompetitionFAQ competition={competition} />
      <FinalCTA />
    </div>
  );
}
