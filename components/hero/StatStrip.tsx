"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "06", label: "Competitions" },
  { number: "06", label: "Club" },
  { number: "50k+", label: "Prizemoney" },
  { number: "2026", label: "Year" },
];

export function StatStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="border-y border-[#E7E8EC] bg-[#F7F8FA]">
      <div className="container-wide">
        <div className="grid grid-cols-4 divide-x divide-[#E7E8EC]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-8 md:py-10 gap-1">
              <span className="font-display font-bold text-3xl md:text-5xl text-[#111111] tracking-tight">
                {stat.number}
              </span>
              <span className="text-label text-[#8A8F98]">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
