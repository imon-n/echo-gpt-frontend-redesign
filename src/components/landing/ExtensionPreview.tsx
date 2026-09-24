import { Puzzle, FileText, Lightbulb, PenLine } from "lucide-react";

export default function ExtensionPreview() {
  return (
    <section
      id="extension"
      className="bg-white py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 md:gap-14 lg:grid-cols-2 lg:items-center lg:px-8">
        {/* ================= LEFT CONTENT ================= */}
        <div>
          <p className="mb-2 text-xs font-medium text-violet-600 sm:mb-3 sm:text-sm">
            BROWSER EXTENSION
          </p>

          <h2 className="text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl md:text-5xl">
            AI wherever you browse
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:mt-5 sm:text-base sm:leading-8">
            Bring EchoGPT directly into your browser. Understand, summarize and
            rewrite webpages without leaving your current workflow.
          </p>

          <div className="mt-6 flex items-center gap-2.5 text-zinc-600 sm:mt-8 sm:gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600 sm:h-9 sm:w-9">
              <Puzzle size={17} className="sm:h-[19px] sm:w-[19px]" />
            </div>

            <span className="text-xs font-medium sm:text-sm">
              Designed for a fast browser workflow
            </span>
          </div>
        </div>

        {/* ================= EXTENSION PREVIEW ================= */}
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl shadow-zinc-200/60 sm:rounded-3xl sm:p-5">
            {/* Header */}
            <div className="flex items-center justify-between gap-3 border-b border-zinc-100 pb-3 sm:pb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-600 sm:h-8 sm:w-8">
                  <Puzzle size={14} className="text-white sm:h-4 sm:w-4" />
                </div>

                <span className="text-sm font-semibold text-zinc-900 sm:text-base">
                  EchoGPT
                </span>
              </div>

              <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-600 sm:gap-1.5 sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Page connected
              </span>
            </div>

            {/* Quick Actions */}
            <div className="mt-4 sm:mt-5">
              <div className="mb-2.5 text-[10px] font-semibold tracking-wider text-zinc-400 sm:mb-3 sm:text-xs">
                QUICK ACTIONS
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <QuickAction icon={<FileText size={15} />} text="Summarize" />

                <QuickAction icon={<Lightbulb size={15} />} text="Explain" />

                <QuickAction icon={<PenLine size={15} />} text="Rewrite" />

                <QuickAction icon={<Puzzle size={15} />} text="Ask page" />
              </div>

              {/* Input */}
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-2.5 transition focus-within:border-violet-300 focus-within:bg-white sm:mt-5 sm:gap-3 sm:p-3">
                <div className="flex-1 text-xs text-zinc-400 sm:text-sm">
                  Ask anything about this page...
                </div>

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-600 sm:h-8 sm:w-8">
                  <PenLine size={13} className="text-white sm:h-3.5 sm:w-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickAction({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <button className="group flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white p-2.5 text-left text-xs font-medium text-zinc-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50/50 hover:text-violet-700 hover:shadow-md sm:gap-2 sm:rounded-xl sm:p-3 sm:text-sm">
      <span className="text-zinc-400 transition-colors group-hover:text-violet-600">
        {icon}
      </span>

      {text}
    </button>
  );
}
