import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactCard } from "@/components/competition/RepresentativeContacts";
import { competitions } from "@/data/competitions";
import { organizingCommitteeContacts } from "@/data/contacts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find organizing committee and individual competition contacts for iConclave 2026.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="border-b border-[#E7E8EC] pb-20 pt-32">
        <div className="container-wide">
          <span className="text-label mb-6 block text-[#8A8F98]">
            iConclave 2026
          </span>
          <h1 className="text-display max-w-4xl font-display font-bold tracking-tight text-[#111111]">
            CONTACT THE TEAM.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-[#5F6368]">
            Start with the relevant competition representative for rules,
            eligibility and event-day questions.
          </p>
        </div>
      </section>

      <section className="section-padding border-b border-[#E7E8EC] bg-[#F7F8FA]">
        <div className="container-wide">
          <div className="mb-10">
            <span className="text-label mb-3 block text-[#8A8F98]">
              Verified contacts
            </span>
            <h2 className="text-section font-display font-bold tracking-tight text-[#111111]">
              ORGANIZING COMMITTEE.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#5F6368]">
              These are the coordinator details currently available in the
              supplied official rulebook. More committee contacts can be added
              through the shared contact data file.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {organizingCommitteeContacts.map((representative, index) => (
              <ContactCard
                key={`${representative.name}-${index}`}
                representative={representative}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="mb-10">
            <span className="text-label mb-3 block text-[#8A8F98]">
              By segment
            </span>
            <h2 className="text-section font-display font-bold tracking-tight text-[#111111]">
              COMPETITION CONTACTS.
            </h2>
          </div>

          <div className="space-y-6">
            {competitions.map((competition) => (
              <section
                key={competition.slug}
                className="rounded-3xl border border-[#E7E8EC] bg-[#F7F8FA] p-5 md:p-7"
              >
                <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                  <div>
                    <p className="text-label text-[#8A8F98]">
                      {competition.organizerShort}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-[#111111]">
                      {competition.name}
                    </h3>
                  </div>
                  <Link
                    href={`/competitions/${competition.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[#5F6368] hover:text-[#111111]"
                  >
                    View competition
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {competition.representatives.map((representative, index) => (
                    <ContactCard
                      key={`${representative.name}-${index}`}
                      representative={representative}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

