import Image from "next/image";
import { Phone, UserRound } from "lucide-react";
import type { Representative } from "@/data/contacts";
import type { Competition } from "@/data/competitions";

export function ContactCard({
  representative,
}: {
  representative: Representative;
}) {
  return (
    <article className="flex items-center gap-4 rounded-2xl border border-[#E7E8EC] bg-white p-4 md:p-5">
      <Image
        src={representative.image}
        alt={
          representative.name === "To be announced"
            ? "Representative placeholder"
            : `Portrait of ${representative.name}`
        }
        width={600}
        height={600}
        className="h-20 w-20 shrink-0 rounded-xl object-cover"
      />
      <div className="min-w-0">
        <p className="font-display text-lg font-bold text-[#111111]">
          {representative.name}
        </p>
        <p className="mt-0.5 text-xs text-[#8A8F98]">{representative.role}</p>
        {representative.phone ? (
          <a
            href={`tel:${representative.phone}`}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#1455D9] hover:underline"
          >
            <Phone size={14} />
            {representative.phone}
          </a>
        ) : (
          <span className="mt-3 inline-flex items-center gap-2 text-sm text-[#8A8F98]">
            <UserRound size={14} />
            Contact pending
          </span>
        )}
      </div>
    </article>
  );
}

export function RepresentativeContacts({
  competition,
}: {
  competition: Competition;
}) {
  return (
    <section className="section-padding border-b border-[#E7E8EC] bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="text-label text-[#8A8F98] block mb-3">
              Need help?
            </span>
            <h2 className="text-section font-display font-bold text-[#111111] tracking-tight">
              COMPETITION CONTACT.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#5F6368]">
              Contact the representative for questions specific to{" "}
              {competition.name}.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            {competition.representatives.map((representative, index) => (
              <ContactCard
                key={`${representative.name}-${index}`}
                representative={representative}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
