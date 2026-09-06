import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OrganizersSection } from "@/components/home/OrganizersSection";
import { competitions } from "@/data/competitions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about iConclave 2026, a six-segment student competition at Premier University.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="border-b border-[#E7E8EC] pb-24 pt-32">
        <div className="container-wide">
          <span className="text-label mb-6 block text-[#8A8F98]">About</span>
          <h1 className="text-display max-w-4xl font-display font-bold tracking-tight text-[#111111]">
            IDEAS. INTELLIGENCE. INNOVATION.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#5F6368]">
            iConclave is where students stop watching and start doing.
          </p>
        </div>
      </section>

      <section className="section-padding border-b border-[#E7E8EC]">
        <div className="container-wide grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="text-label mb-3 block text-[#8A8F98]">
              What it is
            </span>
            <h2 className="text-section font-display font-bold tracking-tight text-[#111111]">
              ONE PLATFORM.
            </h2>
          </div>
          <div className="space-y-6 lg:col-span-8">
            <p className="text-lg leading-relaxed text-[#5F6368]">
              iConclave 2026 is a multidisciplinary technology and innovation
              competition at Premier University, Chattogram. It brings together
              six distinct competitions for undergraduate students from
              universities across Bangladesh.
            </p>
            <p className="text-lg leading-relaxed text-[#5F6368]">
              The program gives teams a place to present research, showcase
              projects, test AI and robotics skills, and solve problems under
              real competitive pressure.
            </p>
            <p className="text-lg leading-relaxed text-[#5F6368]">
              Every segment is different, but the purpose is shared: make good
              ideas clearer, stronger and visible to a wider community.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[#E7E8EC] bg-[#F7F8FA]">
        <div className="container-wide">
          <div className="mb-10">
            <span className="text-label mb-3 block text-[#8A8F98]">
              Competitions
            </span>
            <h2 className="text-section font-display font-bold tracking-tight text-[#111111]">
              SIX ARENAS.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {competitions.map((competition) => (
              <Link
                key={competition.slug}
                href={`/competitions/${competition.slug}`}
                className="group flex min-h-64 flex-col rounded-2xl border border-[#E7E8EC] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#111111]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-label text-[#8A8F98]">
                    {String(competition.index).padStart(2, "0")}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-[#BFC2CA] transition-transform group-hover:translate-x-1 group-hover:text-[#111111]"
                  />
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold text-[#111111]">
                  {competition.name}
                </h3>
                <p className="mt-2 text-sm font-semibold" style={{ color: competition.accent.from }}>
                  {competition.tagline}
                </p>
                <p className="mt-auto pt-6 text-sm leading-relaxed text-[#5F6368]">
                  {competition.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <OrganizersSection />
    </div>
  );
}

