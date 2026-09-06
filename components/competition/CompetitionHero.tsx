"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import { ArrowDown, ArrowUpRight, ChevronLeft } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import type { Competition } from "@/data/competitions";

export function CompetitionHero({ competition }: { competition: Competition }) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden border-b border-[#E7E8EC] bg-white">
        <div
          className="absolute inset-0 opacity-70"
          aria-hidden="true"
          style={{
            background: `radial-gradient(circle at 15% 28%, ${competition.accent.from}18, transparent 31%), radial-gradient(circle at 88% 70%, ${competition.accent.to}12, transparent 34%)`,
          }}
        />
        <div className="hero-grid absolute inset-0 opacity-45" aria-hidden="true" />

        <div className="container-wide relative z-10 pb-20 pt-28 md:pt-32 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-9"
          >
            <Link
              href="/competitions"
              className="inline-flex items-center gap-1.5 text-sm text-[#8A8F98] transition-colors hover:text-[#111111]"
            >
              <ChevronLeft size={14} />
              All Competitions
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -22, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
              className="mx-auto w-full max-w-[430px] lg:col-span-5 lg:mx-0"
            >
              <div
                className="absolute -inset-5 -z-10 rounded-[36px] opacity-20 blur-3xl"
                style={{
                  background: `linear-gradient(135deg, ${competition.accent.from}, ${competition.accent.to})`,
                }}
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] border border-white bg-[#111111] shadow-[0_28px_80px_rgba(17,17,17,0.18)]">
                <Image
                  src={competition.poster.src}
                  alt={`${competition.name} official competition poster`}
                  fill
                  priority
                  sizes="(max-width: 1023px) 88vw, 36vw"
                  className="object-cover"
                />
              </div>
            </motion.div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="mb-5 flex flex-wrap items-center gap-3"
              >
                <span className="text-label text-[#8A8F98]">
                  {String(competition.index).padStart(2, "0")}
                </span>
                <span className="text-[#D6D8DE]">—</span>
                <span className="text-sm text-[#5F6368]">
                  {competition.organizerShort}
                </span>
              </motion.div>

              <div className="mb-5 overflow-hidden">
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.68, delay: 0.2, ease: "easeOut" }}
                  className="font-display text-[clamp(3.5rem,7vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.055em] text-[#111111]"
                >
                  {competition.name.toUpperCase()}
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="mb-5 font-display text-2xl font-bold leading-tight md:text-4xl"
                style={{ color: competition.accent.from }}
              >
                {competition.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.38 }}
                className="mb-7 max-w-2xl text-lg leading-relaxed text-[#5F6368]"
              >
                {competition.longDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.46 }}
                className="mb-8 flex flex-wrap gap-2"
              >
                {competition.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="/registration"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-[#111111] px-6 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Register Now
                  <ArrowUpRight size={16} />
                </Link>
                <a
                  href="#rulebook"
                  className="inline-flex items-center gap-2 rounded-[10px] border border-[#D6D8DE] bg-white px-6 py-3.5 text-base font-semibold text-[#111111] transition-colors hover:border-[#111111]"
                >
                  View Rulebook
                  <ArrowDown size={15} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

