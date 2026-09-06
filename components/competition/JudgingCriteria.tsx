"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Competition } from "@/data/competitions";

export function JudgingCriteria({ competition }: { competition: Competition }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const hasCriteria = competition.judgingCriteria.length > 0;

  return (
    <section ref={ref} className="section-padding bg-[#F7F8FA] border-b border-[#E7E8EC]">
      <div className="container-wide">
        <div className="mb-10">
          <span className="text-label text-[#8A8F98] block mb-3">Evaluation</span>
          <h2 className="text-section font-display font-bold text-[#111111] tracking-tight">
            JUDGING CRITERIA.
          </h2>
        </div>

        {!hasCriteria ? (
          <div className="py-12 rounded-2xl border border-dashed border-[#E7E8EC] bg-white flex flex-col items-center gap-3">
            <p className="font-semibold text-[#111111]">Judging criteria will be announced.</p>
            <p className="text-[#8A8F98] text-sm text-center max-w-sm">
              Official judging percentages and scoring breakdown will be published
              in the rulebook when finalized.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {competition.judgingCriteria.map((criterion, i) => (
              <motion.div
                key={criterion.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white border border-[#E7E8EC] rounded-2xl p-6"
              >
                <div
                  className="font-display font-bold text-4xl mb-3"
                  style={{
                    background: `linear-gradient(135deg, ${competition.accent.from} 0%, ${competition.accent.to} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {criterion.percentage}%
                </div>
                <h3 className="font-semibold text-[#111111] mb-1">{criterion.label}</h3>
                <p className="text-[#5F6368] text-sm">{criterion.description}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
