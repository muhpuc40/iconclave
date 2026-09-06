import { Calendar, Clock } from "lucide-react";
import { schedule, scheduleNote } from "@/data/schedule";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "iConclave 2026 event schedule — competition timings, ceremonies and key activities.",
};

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-[#E7E8EC] bg-white">
        <div className="container-wide">
          <span className="text-label text-[#8A8F98] block mb-6">
            iConclave 2026
          </span>
          <h1 className="text-display font-display font-bold tracking-tight text-[#111111] mb-6">
            SCHEDULE
          </h1>
          <p className="text-[#5F6368] text-xl max-w-xl leading-relaxed">
            {scheduleNote}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          {schedule.map((day) => (
            <div key={day.day} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <Calendar size={20} className="text-[#8A8F98]" />
                <div>
                  <h2 className="font-display font-bold text-2xl text-[#111111]">
                    {day.label}
                  </h2>
                  <p className="text-sm text-[#8A8F98] mt-0.5">
                    {day.date ?? "Date to be announced"}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {day.slots.map((slot, i) => (
                  <div
                    key={i}
                    className={`flex flex-col md:flex-row md:items-center gap-4 p-5 rounded-xl border border-[#E7E8EC] ${
                      slot.type === "ceremony"
                        ? "bg-[#111111] text-white"
                        : slot.type === "break"
                          ? "bg-[#F7F8FA]"
                          : "bg-white"
                    }`}>
                    <div className="flex items-center gap-2 shrink-0 w-24">
                      <Clock
                        size={14}
                        className={
                          slot.type === "ceremony"
                            ? "text-white/50"
                            : "text-[#8A8F98]"
                        }
                      />
                      <span
                        className={`text-label ${
                          slot.type === "ceremony"
                            ? "text-white/70"
                            : "text-[#8A8F98]"
                        }`}>
                        {slot.time}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-semibold ${
                          slot.type === "ceremony"
                            ? "text-white"
                            : "text-[#111111]"
                        }`}>
                        {slot.title}
                      </p>
                      {slot.description && (
                        <p
                          className={`text-sm mt-0.5 ${
                            slot.type === "ceremony"
                              ? "text-white/60"
                              : "text-[#5F6368]"
                          }`}>
                          {slot.description}
                        </p>
                      )}
                    </div>
                    {slot.type === "competition" && (
                      <div className="shrink-0">
                        <span className="text-label text-[#1455D9] bg-[#1455D908] px-2.5 py-1 rounded-full">
                          Competition
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
