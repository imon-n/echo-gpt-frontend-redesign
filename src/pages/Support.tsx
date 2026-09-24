import {
  BookOpen,
  LifeBuoy,
  Mail,
  MessageCircle,
} from "lucide-react";

const options = [
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Learn how to use EchoGPT and its features.",
    action: "Browse docs",
  },
  {
    icon: MessageCircle,
    title: "Community",
    description: "Find answers and discuss common questions.",
    action: "Join community",
  },
  {
    icon: Mail,
    title: "Contact support",
    description: "Get help with your account or workspace.",
    action: "Contact us",
  },
];

export default function Support() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-zinc-200">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <LifeBuoy size={19} />
            </div>

            <div>
              <h1 className="text-lg font-semibold text-zinc-950">
                Support
              </h1>

              <p className="text-xs text-zinc-500 sm:text-sm">
                How can we help?
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {options.map((option) => {
            const Icon = option.icon;

            return (
              <div
                key={option.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-md sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <Icon size={19} />
                </div>

                <h2 className="mt-5 text-base font-semibold text-zinc-900">
                  {option.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {option.description}
                </p>

                <button
                  type="button"
                  className="mt-5 text-sm font-semibold text-violet-600 hover:text-violet-700"
                >
                  {option.action} →
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-5 sm:p-6">
          <h2 className="text-base font-semibold text-zinc-900">
            Need more help?
          </h2>

          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Send us a message and include as much detail as possible
            about your issue.
          </p>

          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700"
          >
            <Mail size={16} />
            Contact support
          </button>
        </div>
      </main>
    </div>
  );
}