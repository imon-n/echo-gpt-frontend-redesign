import { motion } from "motion/react";
import {
  ArrowUpRight,
  Brain,
  Check,
  Sparkles,
  Zap,
} from "lucide-react";

import { models } from "../../data/models";

export default function ModelShowcase() {
  const [featuredModel, ...otherModels] = models;

  return (
    <section
      id="models"
      className="relative overflow-hidden border-y border-zinc-200 bg-zinc-50 py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl sm:h-72 sm:w-72 lg:h-80 lg:w-80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-violet-600 shadow-sm sm:mb-4 sm:gap-2 sm:px-3 sm:text-xs">
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            AI Models
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-4xl md:text-5xl">
            The right model for
            <span className="text-violet-600"> every task.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:mt-5 sm:text-base sm:leading-7">
            Access multiple AI models from one unified workspace. Switch
            between models whenever your workflow needs a different kind of
            intelligence.
          </p>
        </div>

        {/* ================= MODEL AREA ================= */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:mt-14 lg:grid-cols-5">
          {/* ================= FEATURED MODEL ================= */}
          {featuredModel && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7 lg:col-span-2 lg:p-8"
            >
              {/* Glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-100 blur-3xl transition-all duration-500 group-hover:bg-violet-200 sm:-right-20 sm:-top-20 sm:h-52 sm:w-52" />

              <div className="relative">
                {/* Top */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-lg font-bold text-white shadow-lg shadow-violet-600/20 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-xl">
                    {featuredModel.name.charAt(0)}
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-600 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Available
                  </span>
                </div>

                {/* Content */}
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-widest text-violet-600 sm:mt-8 sm:text-xs">
                  Featured Model
                </p>

                <h3 className="mt-1.5 text-xl font-bold text-zinc-950 sm:mt-2 sm:text-2xl">
                  {featuredModel.name}
                </h3>

                <p className="mt-1 text-xs font-medium text-zinc-400 sm:text-sm">
                  {featuredModel.provider}
                </p>

                <p className="mt-4 text-sm leading-6 text-zinc-500 sm:mt-5">
                  {featuredModel.description}
                </p>

                {/* Capabilities */}
                <div className="mt-6 space-y-2.5 sm:mt-7 sm:space-y-3">
                  {[
                    "Advanced reasoning",
                    "Fast response",
                    "General purpose tasks",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-zinc-600 sm:gap-2.5 sm:text-sm"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100">
                        <Check className="h-3 w-3 text-violet-600" />
                      </div>

                      {item}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 transition-colors hover:text-violet-600 sm:mt-8 sm:gap-2 sm:text-sm">
                  Explore model
                  <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= OTHER MODELS ================= */}
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:col-span-3">
            {otherModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50 sm:rounded-3xl sm:p-6"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-100 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 sm:-right-12 sm:-top-12 sm:h-32 sm:w-32" />

                <div className="relative">
                  {/* Icon + Arrow */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-sm font-bold text-zinc-900 transition-colors group-hover:bg-violet-600 group-hover:text-white sm:h-11 sm:w-11 sm:rounded-xl">
                      {model.name.charAt(0)}
                    </div>

                    <ArrowUpRight className="h-3.5 w-3.5 text-zinc-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-500 sm:h-4 sm:w-4" />
                  </div>

                  {/* Category */}
                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-widest text-violet-600 sm:mt-6 sm:text-[11px]">
                    {model.category}
                  </p>

                  {/* Name */}
                  <h3 className="mt-1.5 text-lg font-bold text-zinc-950 sm:mt-2 sm:text-xl">
                    {model.name}
                  </h3>

                  {/* Provider */}
                  <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
                    {model.provider}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-5 text-zinc-500 sm:mt-4 sm:text-sm sm:leading-6">
                    {model.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-5 flex items-center gap-1.5 border-t border-zinc-100 pt-4 text-[11px] font-medium text-zinc-400 sm:mt-6 sm:gap-2 sm:pt-5 sm:text-xs">
                    <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    Ready to use
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM INFO ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-zinc-200 bg-white px-4 py-4 shadow-sm sm:mt-8 sm:flex-row sm:items-center sm:rounded-2xl sm:px-5"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 sm:h-9 sm:w-9">
              <Brain className="h-3.5 w-3.5 text-violet-600 sm:h-4 sm:w-4" />
            </div>

            <div>
              <p className="text-xs font-semibold text-zinc-900 sm:text-sm">
                One workspace, multiple models
              </p>

              <p className="mt-0.5 text-[11px] text-zinc-500 sm:text-xs">
                Switch models without changing your workflow.
              </p>
            </div>
          </div>

          <button className="text-xs font-semibold text-violet-600 transition-colors hover:text-violet-700 sm:text-sm">
            Compare capabilities →
          </button>
        </motion.div>
      </div>
    </section>
  );
}