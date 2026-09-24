import {
  Check,
  CreditCard,
  Sparkles,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For exploring the EchoGPT experience.",
    features: [
      "Basic AI conversations",
      "Conversation history",
      "Browser extension access",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    description: "For users who need more AI capability.",
    features: [
      "Advanced AI models",
      "Image Studio",
      "Higher usage limits",
      "Priority access",
    ],
    popular: true,
  },
];

export default function Subscriptions() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-zinc-200">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <CreditCard size={19} />
            </div>

            <div>
              <h1 className="text-lg font-semibold text-zinc-950">
                Subscriptions
              </h1>

              <p className="text-xs text-zinc-500 sm:text-sm">
                Manage your EchoGPT plan
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-white p-6 shadow-sm sm:p-7 ${
                plan.popular
                  ? "border-violet-300 shadow-violet-100"
                  : "border-zinc-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-violet-600">
                  <Sparkles size={11} />
                  Popular
                </span>
              )}

              <h2 className="text-lg font-semibold text-zinc-950">
                {plan.name}
              </h2>

              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-zinc-950">
                  {plan.price}
                </span>

                {plan.name === "Pro" && (
                  <span className="mb-1 text-sm text-zinc-400">
                    /month
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {plan.description}
              </p>

              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-zinc-600"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                      <Check size={12} />
                    </div>

                    {feature}
                  </div>
                ))}
              </div>

              <button
                type="button"
                className={`mt-7 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-violet-600 text-white hover:bg-violet-700"
                    : "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                {plan.name === "Pro"
                  ? "Upgrade to Pro"
                  : "Current plan"}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}