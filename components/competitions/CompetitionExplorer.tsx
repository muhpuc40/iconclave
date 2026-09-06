import { SectionHeading } from "@/components/ui/SectionHeading";
import { CompetitionListItem } from "./CompetitionListItem";
import { competitions } from "@/data/competitions";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CompetitionExplorer() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading label="Competitions" heading="CHOOSE YOUR ARENA..." />
          <Link
            href="/competitions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5F6368] hover:text-[#111111] transition-colors group shrink-0">
            View all competitions
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div>
          {competitions.map((comp, i) => (
            <CompetitionListItem key={comp.slug} competition={comp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
