import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { globalFAQs } from "@/data/faq";

export function FAQPreview() {
  const previewFAQs = globalFAQs.slice(0, 4);

  const items = previewFAQs.map((faq, i) => ({
    id: `faq-preview-${i}`,
    trigger: faq.question,
    content: <p>{faq.answer}</p>,
  }));

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-label text-[#8A8F98] block mb-3">FAQ</span>
            <h2 className="text-section font-display font-bold text-[#111111] tracking-tight">
              QUICK ANSWERS.
            </h2>
          </div>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5F6368] hover:text-[#111111] transition-colors group shrink-0"
          >
            All questions
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="max-w-3xl">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
