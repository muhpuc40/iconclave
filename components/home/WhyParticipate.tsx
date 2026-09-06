"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Hammer, FlaskConical, Trophy, Users } from "lucide-react";

const reasons = [
  {
    icon: <BookOpen size={22} />,
    title: "Learn",
    description:
      "Work with real problems in AI, robotics, research, and communication under competition conditions.",
  },
  {
    icon: <Hammer size={22} />,
    title: "Build",
    description:
      "Bring your projects and prototypes to a stage where ideas become tangible.",
  },
  {
    icon: <FlaskConical size={22} />,
    title: "Research",
    description:
      "Communicate your academic work and defend it in front of peers and judges.",
  },
  {
    icon: <Trophy size={22} />,
    title: "Compete",
    description:
      "Push yourself in a structured, high-energy competition environment.",
  },
  {
    icon: <Users size={22} />,
    title: "Connect",
    description:
      "Meet students, researchers, and tech enthusiasts from across disciplines.",
  },
];

export function WhyParticipate() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-[#F7F8FA] border-y border-[#E7E8EC]">
      <div className="container-wide">
        <div className="mb-12">
          <span className="text-label text-[#8A8F98] block mb-3">Why iConclave</span>
          <h2 className="text-section font-display font-bold text-[#111111] tracking-tight">
            FIVE REASONS TO COMPETE.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-[#E7E8EC] rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="text-[#1455D9] p-2 bg-[#1455D908] rounded-lg w-fit">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[#111111] mb-1">
                  {reason.title}
                </h3>
                <p className="text-[#5F6368] text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
