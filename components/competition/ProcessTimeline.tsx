"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Competition } from "@/data/competitions";

export function ProcessTimeline({ competition }: { competition: Competition }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-white border-b border-[#E7E8EC]">
      <div className="container-wide">
        <div className="mb-10">
          <span className="text-label text-[#8A8F98] block mb-3">How it works</span>
          <h2 className="text-section font-display font-bold text-[#111111] tracking-tight">THE PROCESS.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {competition.rounds.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col gap-3 p-6 border border-[#E7E8EC] md:border-r-0 last:md:border-r"
            >
              {/* Connector line */}
              {i < competition.rounds.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-px h-6 bg-[#E7E8EC] translate-x-1/2 z-10" />
              )}
              <span
                className="font-display font-bold text-3xl tracking-tight"
                style={{
                  background: `linear-gradient(135deg, ${competition.accent.from} 0%, ${competition.accent.to} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {step.number}
              </span>
              <h3 className="font-display font-bold text-lg text-[#111111]">{step.title}</h3>
              <p className="text-[#5F6368] text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
