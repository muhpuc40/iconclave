import { Accordion } from "@/components/ui/Accordion";
import { globalFAQs } from "@/data/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about iConclave 2026 — registration, competitions, eligibility, and more.",
};

const categories = Array.from(
  new Set(globalFAQs.map((f) => f.category ?? "General"))
);

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 border-b border-[#E7E8EC] bg-white">
        <div className="container-wide">
          <span className="text-label text-[#8A8F98] block mb-6">Help</span>
          <h1 className="text-display font-display font-bold tracking-tight text-[#111111] mb-6">
            FREQUENTLY ASKED
            <br />
            QUESTIONS.
          </h1>
          <p className="text-[#5F6368] text-xl max-w-xl leading-relaxed">
            Everything you need to know about iConclave 2026.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Category nav */}
            <aside className="lg:col-span-3">
              <nav className="sticky top-24">
                <span className="text-label text-[#8A8F98] block mb-4">Categories</span>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <a
                        href={`#cat-${cat}`}
                        className="block text-sm text-[#5F6368] hover:text-[#111111] py-1.5 transition-colors"
                      >
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* FAQ sections */}
            <div className="lg:col-span-9 space-y-12">
              {categories.map((cat) => {
                const catFAQs = globalFAQs.filter(
                  (f) => (f.category ?? "General") === cat
                );
                const items = catFAQs.map((faq, i) => ({
                  id: `faq-${cat}-${i}`,
                  trigger: faq.question,
                  content: <p className="text-sm">{faq.answer}</p>,
                }));
                return (
                  <div key={cat} id={`cat-${cat}`}>
                    <h2 className="font-display font-bold text-xl text-[#111111] mb-4 pb-4 border-b border-[#E7E8EC]">
                      {cat}
                    </h2>
                    <Accordion items={items} allowMultiple />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
