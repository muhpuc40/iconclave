import { Users, LayoutList, Clock, Banknote, Calendar, MapPin } from "lucide-react";
import type { Competition } from "@/data/competitions";

function Fact({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2 p-5 border-r border-[#E7E8EC] last:border-r-0">
      <div className="text-[#8A8F98]">{icon}</div>
      <span className="text-label text-[#8A8F98]">{label}</span>
      <span className="font-semibold text-[#111111] text-sm leading-snug">{value}</span>
    </div>
  );
}

export function QuickFacts({ competition }: { competition: Competition }) {
  const facts = [
    { icon: <Users size={16} />, label: "Team Size", value: competition.facts.teamSize },
    { icon: <LayoutList size={16} />, label: "Format", value: competition.facts.format },
    { icon: <Clock size={16} />, label: "Duration", value: competition.facts.duration },
    { icon: <Banknote size={16} />, label: "Registration", value: competition.facts.fee },
    { icon: <Calendar size={16} />, label: "Date", value: competition.facts.date },
    { icon: <MapPin size={16} />, label: "Venue", value: competition.facts.venue },
  ];

  return (
    <section className="bg-[#F7F8FA] border-b border-[#E7E8EC]">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-[#E7E8EC]">
          {facts.map((fact) => (
            <Fact key={fact.label} {...fact} />
          ))}
        </div>
      </div>
    </section>
  );
}
