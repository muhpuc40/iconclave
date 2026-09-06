"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function EditorialIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const lines = ["SIX COMPETITIONS,", "SIX WAYS TO COMPETE,", "ONE iCONCLAVE."];

  return (
    <section
      ref={ref}
      className="section-padding bg-white border-b border-[#E7E8EC]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            {lines.map((line, i) => (
              <div key={line} className="overflow-hidden">
                <motion.h2
                  initial={{ opacity: 0, y: 32 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.12,
                    ease: "easeOut",
                  }}
                  className="text-editorial font-display font-bold tracking-tight text-[#111111] leading-tight">
                  {line === "ONE iCONCLAVE." ? (
                    <>
                      ONE{" "}
                      <span
                        style={{
                          background:
                            "linear-gradient(135deg, #1455D9 0%, #6633CC 50%, #C5229E 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}>
                        iCONCLAVE
                      </span>
                    </>
                  ) : (
                    line
                  )}
                </motion.h2>
              </div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-4">
            <p className="text-[#5F6368] text-lg leading-relaxed">
              From prompt engineering and research communication to robotics,
              project innovation and energy-focused research, iConclave brings
              together diverse competitions under one platform.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
