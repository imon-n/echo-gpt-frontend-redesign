import { Check, Sparkles } from "lucide-react";

export default function WhyEchoGPT() {
  const points = [
    "One clean interface instead of multiple AI tabs",
    "Designed for real productivity workflows",
    "Fast browser-based AI assistance",
    "Organized conversations",
    "Responsive on every screen",
    "Accessible and keyboard-friendly interface",
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm sm:rounded-3xl sm:p-8 md:p-10 lg:p-16">
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-200/40 blur-3xl sm:-right-28 sm:-top-28 sm:h-72 sm:w-72 lg:-right-32 lg:-top-32 lg:h-80 lg:w-80" />

          <div className="relative grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left content */}
            <div>
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-white px-2.5 py-1 text-[11px] font-semibold tracking-wide text-violet-600 shadow-sm sm:mb-4 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs">
                <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                WHY ECHOGPT
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-4xl md:text-5xl">
                Less switching.
                <br />
                <span className="text-violet-600">
                  More creating.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:mt-5 sm:text-base sm:leading-7 lg:leading-8">
                EchoGPT brings your AI workflow into a focused,
                thoughtfully designed workspace so you can spend less
                time switching between tools and more time getting
                things done.
              </p>
            </div>

            {/* Points */}
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {points.map((point) => (
                <div
                  key={point}
                  className="group rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-md hover:shadow-violet-100/40 sm:rounded-2xl sm:p-5"
                >
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600 transition-colors group-hover:bg-violet-600 group-hover:text-white sm:h-6 sm:w-6">
                      <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </div>

                    <p className="text-xs leading-5 text-zinc-600 sm:text-sm sm:leading-6">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}