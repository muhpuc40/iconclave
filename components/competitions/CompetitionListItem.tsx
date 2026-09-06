"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import type { Competition } from "@/data/competitions";

interface CompetitionListItemProps {
  competition: Competition;
  index: number;
}

export function CompetitionListItem({ competition, index }: CompetitionListItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const accentColor = competition.accent.from;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link
        href={`/competitions/${competition.slug}`}
        className="group flex items-start gap-6 md:gap-8 py-7 md:py-8 border-b border-[#E7E8EC] hover:border-transparent transition-all duration-300 relative"
        style={{ "--accent": accentColor } as React.CSSProperties}
      >
        {/* Hover background */}
        <div
          className="absolute inset-0 -mx-4 md:-mx-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `${accentColor}06` }}
        />

        {/* Number */}
        <span className="relative shrink-0 text-label text-[#8A8F98] group-hover:text-[#111111] transition-colors pt-1">
          {String(competition.index).padStart(2, "0")}
        </span>

        {/* Content */}
        <div className="relative flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-[#111111] group-hover:text-[var(--accent)] transition-colors duration-200 tracking-tight">
              {competition.name}
            </h3>
            <span className="text-sm text-[#8A8F98] font-medium">
              {competition.category}
            </span>
          </div>
          <p className="text-[#5F6368] text-base mb-4 leading-relaxed line-clamp-2">
            {competition.shortDescription}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#8A8F98]">{competition.organizerShort}</span>
            <span className="text-[#E7E8EC]">·</span>
            {competition.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="relative shrink-0 flex items-center self-center">
          <ArrowRight
            size={20}
            className="text-[#E7E8EC] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-200"
          />
        </div>
      </Link>
    </motion.div>
  );
}
