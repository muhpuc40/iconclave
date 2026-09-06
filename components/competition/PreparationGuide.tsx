"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb } from "lucide-react";
import type { Competition } from "@/data/competitions";

export function PreparationGuide({ competition }: { competition: Competition }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-white border-b border-[#E7E8EC]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-label text-[#8A8F98] block mb-3">Preparation</span>
            <h2 className="text-section font-display font-bold text-[#111111] tracking-tight mb-4">
              BEFORE YOU COMPETE.
            </h2>
            <div className="flex items-start gap-2 p-3 bg-[#1455D908] border border-[#1455D920] rounded-xl">
              <Lightbulb size={16} className="text-[#1455D9] shrink-0 mt-0.5" />
              <p className="text-xs text-[#5F6368] leading-relaxed">
                These are preparation suggestions, not official rules.
                Always refer to the official rulebook for binding requirements.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {competition.preparation.map((tip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3 p-4 bg-[#F7F8FA] rounded-xl border border-[#E7E8EC]"
                >
                  <span
                    className="shrink-0 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center text-white mt-0.5"
                    style={{ background: competition.accent.from }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[#5F6368] text-sm leading-relaxed">{tip}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
