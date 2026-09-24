import { motion } from "motion/react";
import {
  ArrowRight,
  Bot,
  Check,
  Play,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 sm:pt-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[320px] w-[420px] -translate-x-1/2 rounded-full bg-violet-100/70 blur-[90px] sm:h-[420px] sm:w-[600px] sm:blur-[110px] lg:h-[500px] lg:w-[700px] lg:blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HERO CONTENT ================= */}
        <div className="py-14 text-center sm:py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="mx-auto mb-6 flex w-fit items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 sm:mb-7 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Your unified AI workspace
            </div>

            {/* Heading */}
            <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-[1.08] tracking-tight text-zinc-950 sm:text-5xl sm:leading-[1.08] md:text-6xl lg:text-7xl">
              Every AI model.
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                One intelligent workspace.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-zinc-500 sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8">
              Chat, research, write and analyze with powerful AI models in
              one beautifully unified experience designed for modern work.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row">
              {/* Primary */}
              <Link
                to="/register"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-200 hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-600/25 sm:w-auto sm:px-6 sm:py-3.5"
              >
                Start chatting

                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              {/* Secondary */}
              <a
                href="#preview"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 sm:w-auto sm:px-6 sm:py-3.5"
              >
                <Play className="h-4 w-4 fill-zinc-800" />
                See how it works
              </a>
            </div>

            {/* Trust points */}
            <div className="mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-zinc-500 sm:mt-7 sm:gap-x-6 sm:text-sm">
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-emerald-500 sm:h-4 sm:w-4" />
                Multiple AI models
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-zinc-300 sm:block" />

              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-emerald-500 sm:h-4 sm:w-4" />
                Free to get started
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-zinc-300 sm:block" />

              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-emerald-500 sm:h-4 sm:w-4" />
                Browser extension
              </span>
            </div>
          </motion.div>

          {/* ================= PRODUCT PREVIEW ================= */}
          <motion.div
            id="preview"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mx-auto mt-14 max-w-6xl scroll-mt-24 sm:mt-16 lg:mt-20"
          >
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-2 -z-10 rounded-[24px] bg-violet-200/40 blur-xl sm:-inset-4 sm:rounded-[32px] sm:blur-2xl" />

              {/* Browser Window */}
              <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white text-left shadow-xl shadow-zinc-300/30 sm:rounded-2xl sm:shadow-2xl sm:shadow-zinc-300/40">
                {/* Browser Header */}
                <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-3 py-2.5 sm:px-5 sm:py-3">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-zinc-300 sm:h-3 sm:w-3" />
                    <div className="h-2.5 w-2.5 rounded-full bg-zinc-300 sm:h-3 sm:w-3" />
                    <div className="h-2.5 w-2.5 rounded-full bg-zinc-300 sm:h-3 sm:w-3" />
                  </div>

                  <div className="hidden h-7 w-64 items-center justify-center rounded-md border border-zinc-200 bg-white sm:flex">
                    <span className="text-[10px] text-zinc-400">
                      app.echogpt.ai
                    </span>
                  </div>

                  <div className="h-6 w-6 rounded-md bg-zinc-200 sm:h-7 sm:w-7" />
                </div>

                {/* App Preview */}
                <div className="grid min-h-[300px] grid-cols-1 sm:min-h-[360px] md:min-h-[420px] md:grid-cols-[210px_1fr]">
                  {/* Sidebar */}
                  <div className="hidden border-r border-zinc-200 bg-zinc-50 p-5 md:block">
                    {/* Logo */}
                    <div className="mb-8 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600">
                        <Bot className="h-4 w-4 text-white" />
                      </div>

                      <span className="text-sm font-bold text-zinc-900">
                        EchoGPT
                      </span>
                    </div>

                    {/* New Chat */}
                    <div className="mb-6 h-9 rounded-lg bg-violet-600" />

                    {/* Conversations */}
                    <div className="space-y-2">
                      <div className="h-8 rounded-lg bg-white" />
                      <div className="h-8 rounded-lg bg-white" />
                      <div className="h-8 rounded-lg bg-white" />
                      <div className="h-8 rounded-lg bg-white" />
                    </div>
                  </div>

                  {/* Main Chat */}
                  <div className="flex flex-col bg-white">
                    {/* Chat Header */}
                    <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3 sm:px-7 sm:py-4">
                      <div>
                        <div className="h-2.5 w-20 rounded bg-zinc-200 sm:h-3 sm:w-24" />
                        <div className="mt-2 h-2 w-14 rounded bg-zinc-100 sm:h-2.5 sm:w-16" />
                      </div>

                      <div className="h-7 w-20 rounded-lg bg-zinc-100 sm:h-8 sm:w-24" />
                    </div>

                    {/* Messages */}
                    <div className="flex flex-1 flex-col justify-center px-4 py-7 sm:px-10 sm:py-10">
                      <div className="mx-auto w-full max-w-2xl">
                        {/* User message */}
                        <div className="ml-auto mb-6 max-w-[75%] rounded-2xl rounded-br-md bg-violet-600 px-4 py-3 sm:mb-8 sm:max-w-md sm:px-5 sm:py-4">
                          <div className="h-2 w-32 rounded bg-white/40 sm:h-2.5 sm:w-40" />
                          <div className="mt-2 h-2 w-24 rounded bg-white/30 sm:h-2.5 sm:w-28" />
                        </div>

                        {/* AI message */}
                        <div className="flex gap-2.5 sm:gap-3">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-100 sm:h-8 sm:w-8">
                            <Sparkles className="h-3.5 w-3.5 text-violet-600 sm:h-4 sm:w-4" />
                          </div>

                          <div className="max-w-lg flex-1 pt-1">
                            <div className="h-2 w-full rounded bg-zinc-200 sm:h-2.5" />
                            <div className="mt-2 h-2 w-5/6 rounded bg-zinc-200 sm:h-2.5" />
                            <div className="mt-2 h-2 w-3/4 rounded bg-zinc-200 sm:h-2.5" />

                            <div className="mt-3 h-2 w-2/3 rounded bg-zinc-100 sm:mt-4 sm:h-2.5" />
                          </div>
                        </div>

                        {/* Input */}
                        <div className="mt-8 flex items-center gap-2 rounded-xl border border-zinc-200 bg-white p-2.5 shadow-sm sm:mt-12 sm:gap-3 sm:p-3">
                          <div className="h-7 flex-1 rounded-lg bg-zinc-50 sm:h-8" />

                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-600 sm:h-9 sm:w-9">
                            <ArrowRight className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}