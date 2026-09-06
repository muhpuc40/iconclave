import Image from "next/image";
import Link from "next/link";
import {
  associationPartners,
  organizingClubs,
  type Organizer,
} from "@/data/organizers";

function LogoCard({
  organizer,
  compact = false,
}: {
  organizer: Organizer;
  compact?: boolean;
}) {
  const content = (
    <>
      <div
        className={`relative flex w-full items-center justify-center ${
          compact ? "h-24 md:h-28" : "h-28 md:h-32"
        }`}>
        <Image
          src={organizer.logo}
          alt=""
          fill
          sizes={
            compact
              ? "(max-width: 639px) 100vw, 33vw"
              : "(max-width: 767px) 50vw, 17vw"
          }
          className="object-contain p-4"
        />
      </div>
      <div className="border-t border-[#E7E8EC] px-4 py-4 min-h-20 flex items-center justify-center">
        <p className="text-center text-xs md:text-sm font-semibold text-[#111111] leading-snug">
          {organizer.shortName}
        </p>
      </div>
    </>
  );

  const className =
    "group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E7E8EC] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#BFC2CA] hover:shadow-[0_18px_45px_rgba(17,17,17,0.07)]";

  return organizer.competitionSlug ? (
    <Link
      href={`/competitions/${organizer.competitionSlug}`}
      className={className}
      aria-label={`${organizer.name} — view competition`}>
      {content}
    </Link>
  ) : (
    <div className={className}>{content}</div>
  );
}

export function OrganizersSection() {
  return (
    <section
      id="organizers"
      className="section-padding border-y border-[#E7E8EC] bg-[#F7F8FA]">
      <div className="container-wide">
        <div className="mb-16">
          <span className="text-label text-[#8A8F98] block mb-3">
            In Association With
          </span>
          <h2 className="text-section font-display font-bold text-[#111111] tracking-tight mb-8">
            OUR INSTITUTIONAL PARTNERS
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
            {associationPartners.map((partner) => (
              <LogoCard key={partner.name} organizer={partner} compact />
            ))}
          </div>
        </div>

        <div>
          <span className="text-label text-[#8A8F98] block mb-3">
            Organized By
          </span>
          <h2 className="text-section font-display font-bold text-[#111111] tracking-tight mb-8">
            SIX STUDENT ORGANIZATIONS
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 md:gap-5">
            {organizingClubs.map((organizer) => (
              <LogoCard key={organizer.name} organizer={organizer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
