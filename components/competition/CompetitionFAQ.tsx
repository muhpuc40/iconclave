import { Accordion } from "@/components/ui/Accordion";
import type { Competition } from "@/data/competitions";

export function CompetitionFAQ({ competition }: { competition: Competition }) {
  const items = competition.faqs.map((faq, i) => ({
    id: `comp-faq-${i}`,
    trigger: faq.question,
    content: <p className="text-sm">{faq.answer}</p>,
  }));

  return (
    <section className="section-padding bg-[#F7F8FA] border-b border-[#E7E8EC]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-label text-[#8A8F98] block mb-3">FAQ</span>
            <h2 className="text-section font-display font-bold text-[#111111] tracking-tight">
              COMMON QUESTIONS.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={items} allowMultiple />
          </div>
        </div>
      </div>
    </section>
  );
}
