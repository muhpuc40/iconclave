import { Check, X } from "lucide-react";
import type { Competition } from "@/data/competitions";

export function DosAndDonts({ competition }: { competition: Competition }) {
  return (
    <section className="section-padding bg-[#F7F8FA] border-b border-[#E7E8EC]">
      <div className="container-wide">
        <div className="mb-10">
          <span className="text-label text-[#8A8F98] block mb-3">Guidelines</span>
          <h2 className="text-section font-display font-bold text-[#111111] tracking-tight">
            DO &amp; DON&apos;T.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Do */}
          <div className="bg-white border border-[#E7E8EC] rounded-2xl p-6">
            <h3 className="font-display font-bold text-lg text-[#111111] mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#111111] flex items-center justify-center">
                <Check size={12} className="text-white" />
              </span>
              DO
            </h3>
            <ul className="space-y-3">
              {competition.dosDonts.dos.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="text-[#1455D9] shrink-0 mt-0.5" />
                  <span className="text-[#5F6368] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Don't */}
          <div className="bg-white border border-[#E7E8EC] rounded-2xl p-6">
            <h3 className="font-display font-bold text-lg text-[#111111] mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#111111] flex items-center justify-center">
                <X size={12} className="text-white" />
              </span>
              DON&apos;T
            </h3>
            <ul className="space-y-3">
              {competition.dosDonts.donts.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X size={16} className="text-[#C5229E] shrink-0 mt-0.5" />
                  <span className="text-[#5F6368] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-xs text-[#8A8F98] mt-4">
          These guidelines are advisory. Always refer to the official rulebook for binding rules.
        </p>
      </div>
    </section>
  );
}
