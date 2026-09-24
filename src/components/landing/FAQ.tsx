import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is EchoGPT?",
    a: "EchoGPT is a unified AI workspace concept that brings conversations, AI models and browser assistance into one interface.",
  },
  {
    q: "Do I need multiple accounts?",
    a: "The redesigned experience is designed around a single EchoGPT workspace.",
  },
  {
    q: "Can I use EchoGPT from my browser?",
    a: "Yes. The project includes a browser extension concept focused on contextual AI actions.",
  },
  {
    q: "Is EchoGPT available on mobile?",
    a: "The redesigned web interface is responsive and optimized for mobile, tablet and desktop.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-white "
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm md:text-xl font-semibold tracking-wide text-violet-600 ">
            FAQ
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:mt-3 sm:text-4xl md:text-5xl">
            Frequently asked questions
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:mt-5 sm:text-base sm:leading-7">
            Everything you need to know about the EchoGPT experience.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-8 space-y-3 sm:mt-10 md:mt-12">
          {faqs.map((faq, index) => {
            const isActive = active === index;

            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-xl border bg-white transition-all duration-200 sm:rounded-2xl ${
                  isActive
                    ? "border-violet-200 shadow-md shadow-violet-100/50"
                    : "border-zinc-200 shadow-sm hover:border-zinc-300"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 p-4 text-left sm:gap-4 sm:p-5"
                  onClick={() =>
                    setActive(isActive ? null : index)
                  }
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className={`text-sm font-medium leading-6 transition-colors sm:text-base ${
                      isActive
                        ? "text-violet-700"
                        : "text-zinc-900"
                    }`}
                  >
                    {faq.q}
                  </span>

                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-200 sm:h-8 sm:w-8 ${
                      isActive
                        ? "bg-violet-100 text-violet-600"
                        : "bg-zinc-100 text-zinc-500"
                    }`}
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 sm:h-[17px] sm:w-[17px] ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {isActive && (
                  <div
                    id={`faq-answer-${index}`}
                    className="border-t border-zinc-100 px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4"
                  >
                    <p className="text-xs leading-6 text-zinc-500 sm:text-sm sm:leading-7">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}