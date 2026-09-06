"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Competition } from "@/data/competitions";

export function CompetitionTimeline({ competition }: { competition: Competition }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-white border-b border-[#E7E8EC]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-label text-[#8A8F98] block mb-3">Timeline</span>
            <h2 className="text-section font-display font-bold text-[#111111] tracking-tight">
              KEY DATES.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-6 bottom-6 w-px bg-[#E7E8EC]" />

              {competition.timeline.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-6 pb-8 last:pb-0 relative"
                >
                  {/* Dot */}
                  <div
                    className="relative z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 bg-white"
                    style={{ borderColor: competition.accent.from }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: competition.accent.from }}
                    />
                  </div>
                  <div className="pt-1">
                    <p className="font-semibold text-[#111111] text-base mb-1">{event.label}</p>
                    <p
                      className={`text-sm font-medium ${
                        event.date ? "text-[#1455D9]" : "text-[#8A8F98]"
                      }`}
                    >
                      {event.date ?? "To be announced"}
                    </p>
                    {event.description && (
                      <p className="text-[#5F6368] text-sm mt-1">{event.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
