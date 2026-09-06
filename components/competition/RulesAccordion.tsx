import { Accordion } from "@/components/ui/Accordion";
import { Download } from "lucide-react";
import type { Competition } from "@/data/competitions";
import { siteConfig } from "@/data/site";

export function RulesAccordion({ competition }: { competition: Competition }) {
  const items = competition.rules.map((section, i) => ({
    id: `rule-${i}`,
    trigger: section.title,
    content: (
      <ul className="space-y-2">
        {section.items.map((item, j) => (
          <li key={j} className="flex items-start gap-3">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-[#8A8F98] shrink-0" />
            <span className="text-[#5F6368] text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    ),
  }));

  return (
    <section className="section-padding bg-white border-b border-[#E7E8EC]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-label text-[#8A8F98] block mb-3">Official Rules</span>
            <h2 className="text-section font-display font-bold text-[#111111] tracking-tight mb-4">
              RULES &amp; REGULATIONS.
            </h2>
            <p className="text-[#5F6368] text-sm leading-relaxed">
              Official rules will be published in the rulebook when finalized.
              The sections below will be updated with complete rule details.
            </p>
            <a
              href={competition.rulebookUrl ?? siteConfig.rulebookFolderUrl}
              target="_blank"
              rel="noopener noreferrer"
              download={competition.rulebookUrl ? competition.rulebookFileName : undefined}
              className="mt-7 inline-flex items-center gap-2 rounded-[10px] bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1455D9]"
            >
              <Download size={15} />
              Download Rulebook
            </a>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={items} allowMultiple />
          </div>
        </div>
      </div>
    </section>
  );
}
