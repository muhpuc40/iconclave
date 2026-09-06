"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  size?: "section" | "display";
  className?: string;
}

export function SectionHeading({
  label,
  heading,
  subheading,
  align = "left",
  size = "section",
  className,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-label text-[#8A8F98]"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: label ? 0.08 : 0 }}
        className={cn(
          "font-display font-bold tracking-tight text-[#111111]",
          size === "section" ? "text-section" : "text-display"
        )}
      >
        {heading}
      </motion.h2>
      {subheading && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="text-[#5F6368] text-lg max-w-2xl leading-relaxed"
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
}
