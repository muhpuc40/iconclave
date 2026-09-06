import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { competitions } from "@/data/competitions";
import { organizingClubs } from "@/data/organizers";
import { siteConfig } from "@/data/site";

const siteLinks = [
  { label: "Competitions", href: "/competitions" },
  { label: "Registration", href: "/registration" },
  { label: "Schedule", href: "/schedule" },
  { label: "About iConclave", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#E7E8EC] bg-[#F7F8FA] pb-6 pt-4">
      <div className="container-wide">
        <div className="mb-1 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/brand/iconclave-logo.png"
              alt="iConclave"
              width={3750}
              height={1000}
              priority
              className="h-18 w-auto md:h-11"
            />
            <p className="max-w-xs text-sm leading-relaxed text-[#5F6368] mt-5">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#8A8F98]">
              {siteConfig.organizerLine}
            </p>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-label mb-5 text-[#8A8F98]">Competitions</h3>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {competitions.map((competition) => (
                <li key={competition.slug}>
                  <Link
                    href={`/competitions/${competition.slug}`}
                    className="text-sm text-[#5F6368] transition-colors hover:text-[#111111]">
                    {competition.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={siteConfig.eventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1455D9] hover:underline">
              Facebook event
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-label mb-5 text-[#8A8F98]">Explore</h3>
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-1">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#5F6368] transition-colors hover:text-[#111111]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-[#E7E8EC] pt-8 md:flex-row md:items-center">
          <p className="text-xs text-[#8A8F98]">
            &copy; {siteConfig.year} iConclave &mdash; {siteConfig.university},{" "}
            {siteConfig.location}
          </p>
          <p className="text-xs text-[#8A8F98]">
            An Inter-University Competition
          </p>
        </div>
      </div>
    </footer>
  );
}
