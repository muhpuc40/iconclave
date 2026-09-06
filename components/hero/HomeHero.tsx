"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig, type MotionProps } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

const fadeUp = (delay: number): MotionProps => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export function HomeHero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-white">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="hero-orb hero-orb-three" aria-hidden="true" />

        <div className="container-wide relative z-10 grid grid-cols-1 items-center gap-14 pb-20 pt-28 lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-32">
          <div className="lg:col-span-7">
            <motion.div {...fadeUp(0.08)} className="mb-7">
              <span className="text-label tracking-[0.22em] text-[#6F7480]">
                iCONCLAVE &nbsp;&mdash;&nbsp; 2026
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.16, ease: "easeOut" }}
                className="font-display text-[clamp(3.5rem,7.1vw,7.4rem)] font-bold leading-[0.88] tracking-[-0.055em] text-[#111111]">
                WHERE IDEAS
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.25, ease: "easeOut" }}
                className="gradient-text mb-8 font-display text-[clamp(3.5rem,7.1vw,7.4rem)] font-bold leading-[0.88] tracking-[-0.055em]">
                MEET INTELLIGENCE
              </motion.h1>
            </div>

            <motion.p
              {...fadeUp(0.36)}
              className="mb-9 max-w-xl text-xl leading-relaxed text-[#5F6368] md:text-2xl">
              Six competitions.
              <br />
              One stage for innovation.
            </motion.p>

            <motion.div
              {...fadeUp(0.46)}
              className="flex flex-wrap gap-3 md:gap-4">
              <Link
                href="/competitions"
                className="group inline-flex items-center gap-2 rounded-[10px] bg-[#111111] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#1455D9]">
                Explore Competitions
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/registration"
                className="inline-flex items-center gap-2 rounded-[10px] border border-[#D6D8DE] bg-white/70 px-6 py-3.5 text-base font-semibold text-[#111111] backdrop-blur-sm transition-colors hover:border-[#111111]">
                Register Now
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[470px] lg:col-span-5 lg:mr-0">
            <div className="absolute -inset-7 -z-10 rounded-[40px] bg-gradient-to-br from-[#1455D9]/15 via-[#6633CC]/10 to-[#C5229E]/15 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/80 bg-[#111111] shadow-[0_32px_90px_rgba(40,29,86,0.24)]">
              <Image
                src={siteConfig.poster.src}
                alt="iConclave 2026 registration poster"
                fill
                priority
                sizes="(max-width: 1023px) 90vw, 38vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-center text-[11px] font-medium tracking-[0.15em] text-[#8A8F98]">
              POSTER SIZE · {siteConfig.poster.width} ×{" "}
              {siteConfig.poster.height} PX · 4:5
            </p>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
