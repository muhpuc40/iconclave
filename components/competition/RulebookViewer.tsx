import { BookOpenText } from "lucide-react";
import type { Competition } from "@/data/competitions";

export function RulebookViewer({
  competition,
}: {
  competition: Competition;
}) {
  return (
    <section
      id="rulebook"
      className="section-padding scroll-mt-20 border-b border-[#E7E8EC] bg-[#111111]"
    >
      <div className="container-wide">
        <div className="mb-10">
          <span className="text-label mb-3 block text-white/45">
            Official PDF
          </span>
          <h2 className="text-section font-display font-bold tracking-tight text-white">
            RULEBOOK PREVIEW.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55">
            The viewer is optimized for the landscape rulebook format. Use the
            download button in the rules section for a full-screen copy.
          </p>
        </div>

        {competition.rulebookUrl ? (
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl">
            <object
              data={`${competition.rulebookUrl}#view=FitH&toolbar=1`}
              type="application/pdf"
              aria-label={`${competition.name} official rulebook`}
              className="h-[72vh] min-h-[560px] w-full"
            >
              <div className="flex min-h-[560px] items-center justify-center p-8 text-center">
                <p className="max-w-md text-[#5F6368]">
                  Your browser cannot display this PDF inline. Use the download
                  button in the rules section to open it.
                </p>
              </div>
            </object>
          </div>
        ) : (
          <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.04] px-6 text-center">
            <BookOpenText size={36} className="mb-5 text-white/30" />
            <p className="font-display text-xl font-bold text-white">
              PDF coming soon
            </p>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/50">
              Add{" "}
              <code className="rounded bg-white/10 px-1.5 py-1 text-white/75">
                public/rulebooks/{competition.rulebookFileName}
              </code>{" "}
              and set its link in{" "}
              <code className="rounded bg-white/10 px-1.5 py-1 text-white/75">
                data/competitions.ts
              </code>
              . The embedded viewer will appear automatically.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
