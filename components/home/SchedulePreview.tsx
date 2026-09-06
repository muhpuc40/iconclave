import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export function SchedulePreview() {
  return (
    <section className="section-padding bg-[#F7F8FA] border-y border-[#E7E8EC]">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-label text-[#8A8F98] block mb-3">Schedule</span>
            <h2 className="text-section font-display font-bold text-[#111111] tracking-tight">
              MARK YOUR CALENDAR.
            </h2>
          </div>
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5F6368] hover:text-[#111111] transition-colors group shrink-0"
          >
            View full schedule
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 py-16 rounded-2xl border border-dashed border-[#E7E8EC] bg-white">
          <Calendar size={32} className="text-[#E7E8EC]" />
          <p className="font-display font-bold text-xl text-[#111111]">Competition Date</p>
          <p className="text-label text-[#8A8F98] bg-[#F7F8FA] px-4 py-2 rounded-full">
            TO BE ANNOUNCED
          </p>
          <p className="text-[#8A8F98] text-sm text-center max-w-md">
            The detailed schedule will be published closer to the event. Stay tuned for updates.
          </p>
        </div>
      </div>
    </section>
  );
}
