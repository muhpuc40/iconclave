import Link from "next/link";
import { ArrowUpRight, BookOpenText, CalendarDays, Users } from "lucide-react";
import { competitions } from "@/data/competitions";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration",
  description:
    "Register your 2–3 member undergraduate team for iConclave 2026 before 10 September 2026.",
};

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-[#E7E8EC] bg-white pb-20 pt-32">
        <div className="container-wide">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E7E8EC] bg-[#F7F8FA] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
            <span className="text-label text-[#5F6368]">
              Registration is now open
            </span>
          </div>

          <h1 className="text-display max-w-5xl font-display font-bold tracking-tight text-[#111111]">
            JOIN iCONCLAVE 2026.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#5F6368] md:text-xl">
            Undergraduate students from universities across Bangladesh can
            present ideas, showcase skills, and compete across research,
            technology, innovation and problem-solving.
          </p>
        </div>
      </section>
      <section className="border-b border-[#E7E8EC] bg-[#F7F8FA]">
        <div className="container-wide grid grid-cols-1 divide-y divide-[#E7E8EC] md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="flex items-start gap-3 px-1 py-7 md:px-7">
            <Users size={20} className="mt-0.5 shrink-0 text-[#1455D9]" />
            <div>
              <p className="text-label text-[#8A8F98]">Eligibility</p>
              <p className="mt-1 font-semibold text-[#111111]">
                All undergraduate students in Bangladesh
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 px-1 py-7 md:px-7">
            <Users size={20} className="mt-0.5 shrink-0 text-[#6633CC]" />
            <div>
              <p className="text-label text-[#8A8F98]">Team Size</p>
              <p className="mt-1 font-semibold text-[#111111]">2–3 members</p>
            </div>
          </div>
          <div className="flex items-start gap-3 px-1 py-7 md:px-7">
            <CalendarDays
              size={20}
              className="mt-0.5 shrink-0 text-[#C5229E]"
            />
            <div>
              <p className="text-label text-[#8A8F98]">Deadline</p>
              <p className="mt-1 font-semibold text-[#111111]">
                {siteConfig.registrationDeadline}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[#E7E8EC]">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-label mb-3 block text-[#8A8F98]">
                Before registering
              </span>
              <h2 className="text-section font-display font-bold tracking-tight text-[#111111]">
                CHOOSE YOUR SEGMENT.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#5F6368]">
                Read the official rulebook for your selected competition
                carefully, then submit the single form below.
              </p>
              <a
                href={siteConfig.rulebookFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1455D9] hover:underline">
                <BookOpenText size={15} />
                Competition rulebook folder
                <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
              {competitions.map((competition) => (
                <Link
                  key={competition.slug}
                  href={`/competitions/${competition.slug}`}
                  className="group rounded-2xl border border-[#E7E8EC] bg-[#F7F8FA] p-5 transition-all hover:border-[#111111] hover:bg-white">
                  <p className="text-label text-[#8A8F98]">
                    {String(competition.index).padStart(2, "0")} ·{" "}
                    {competition.category}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold text-[#111111]">
                    {competition.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#5F6368]">
                    {competition.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="form" className="section-padding scroll-mt-20 bg-[#F7F8FA]">
        <div className="container-wide">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-label mb-3 block text-[#8A8F98]">
                One form · all competitions
              </span>
              <h2 className="text-section font-display font-bold tracking-tight text-[#111111]">
                REGISTRATION FORM.
              </h2>
            </div>
            <a
              href={siteConfig.globalRegistrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-[10px] bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1455D9]">
              Open form in a new tab
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#E7E8EC] bg-white shadow-[0_24px_70px_rgba(17,17,17,.08)]">
            <iframe
              src={siteConfig.globalRegistrationUrl}
              title="iConclave 2026 Google registration form"
              loading="lazy"
              className="h-[1050px] w-full"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="mt-4 text-center text-xs text-[#8A8F98]">
            If Google prevents the form from loading inside this page, use the
            “Open form in a new tab” button above.
          </p>
        </div>
      </section>
    </div>
  );
}
