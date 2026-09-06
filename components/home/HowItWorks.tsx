"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, BookOpenCheck, Swords, Presentation } from "lucide-react";

const steps = [
  {
    icon: <Search size={20} />,
    step: "01",
    title: "Discover",
    description: "Explore the six competitions and find where your skills belong.",
  },
  {
    icon: <BookOpenCheck size={20} />,
    step: "02",
    title: "Prepare",
    description: "Read the rules, gather your team, and prepare your entry.",
  },
  {
    icon: <Swords size={20} />,
    step: "03",
    title: "Compete",
    description: "Show up, perform, and compete at your best.",
  },
  {
    icon: <Presentation size={20} />,
    step: "04",
    title: "Showcase",
    description: "Present your work to judges and peers on the iConclave stage.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-wide">
        <div className="mb-12">
          <span className="text-label text-[#8A8F98] block mb-3">How it works</span>
          <h2 className="text-section font-display font-bold text-[#111111] tracking-tight">
            FROM DISCOVERY TO THE STAGE.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col gap-4 p-6 md:p-8 border border-[#E7E8EC] md:border-r-0 last:md:border-r md:first:rounded-l-2xl md:last:rounded-r-2xl first:rounded-t-2xl last:rounded-b-2xl md:first:rounded-t-2xl md:first:rounded-bl-2xl md:last:rounded-tr-2xl md:last:rounded-b-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="text-[#1455D9] p-2 bg-[#1455D908] rounded-lg">{step.icon}</div>
                <span className="text-label text-[#8A8F98]">{step.step}</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-[#111111] mb-2">{step.title}</h3>
                <p className="text-[#5F6368] text-sm leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-px top-1/2 -translate-y-1/2 w-px h-8 bg-[#E7E8EC] z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
