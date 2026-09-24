import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 md:py-24 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-violet-200 bg-violet-50 px-5 py-14 text-center sm:rounded-3xl sm:px-8 sm:py-16 md:px-12 md:py-20">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-violet-200/50 blur-3xl sm:-left-24 sm:-top-24 sm:h-64 sm:w-64" />

        <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-indigo-200/50 blur-3xl sm:-bottom-24 sm:-right-24 sm:h-64 sm:w-64" />

        <div className="relative">
          {/* Badge */}
          <div className="mx-auto mb-4 flex w-fit items-center gap-1.5 rounded-full border border-violet-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-violet-600 shadow-sm sm:mb-5 sm:gap-2 sm:px-3.5 sm:text-xs">
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            Start your AI workflow
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-4xl md:text-5xl">
            Ready to work smarter with AI?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:mt-5 sm:text-base sm:leading-7">
            Start building a more focused AI workflow today with all your
            favorite models in one intelligent workspace.
          </p>

          <Link
            to="/register"
            className="group mx-auto mt-6 inline-flex items-center gap-1.5 rounded-xl bg-violet-600 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-200 hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-600/25 sm:mt-8 sm:gap-2 sm:px-6 sm:py-3.5 sm:text-sm"
          >
            Get started
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 sm:h-[17px] sm:w-[17px]"
            />
          </Link>

          <p className="mt-3 text-[11px] text-zinc-400 sm:mt-4 sm:text-xs">
            Free to get started · No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
