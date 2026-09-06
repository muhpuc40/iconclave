"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-[#111111] relative overflow-hidden">
      {/* Subtle gradient blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #1455D9 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #C5229E 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #6633CC 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-wide relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-label text-white/40 block mb-8">iConclave 2026</span>
          <h2 className="text-display font-display font-bold tracking-tight text-white mb-6">
            READY TO
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #1455D9 0%, #6633CC 50%, #C5229E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              TAKE THE STAGE?
            </span>
          </h2>
          <p className="text-white/60 text-xl max-w-md mx-auto mb-12 leading-relaxed">
            Six competitions.
            <br />
            One opportunity to build, think, research and compete.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/competitions"
              className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold bg-white text-[#111111] rounded-[10px] hover:bg-[#F7F8FA] transition-colors group"
            >
              Explore Competitions
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/registration"
              className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold bg-transparent text-white border border-white/20 rounded-[10px] hover:border-white/50 transition-colors"
            >
              Register Now
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
