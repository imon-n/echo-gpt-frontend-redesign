import {
  Layers,
  MessageSquare,
  Globe,
  Zap,
  Focus,
  Monitor,
} from "lucide-react";

import { motion } from "motion/react";
import { features } from "../../data/features";

const icons = {
  Layers,
  MessageSquare,
  Globe,
  Zap,
  Focus,
  Monitor,
};

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-medium text-violet-600 sm:mb-3 sm:text-sm">
            POWERFUL FEATURES
          </p>

          <h2 className="text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl md:text-5xl">
            Built around the way you work
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:mt-5 sm:text-base sm:leading-7">
            Everything you need to turn AI into a practical daily
            productivity tool.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[feature.icon as keyof typeof icons];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/40 sm:rounded-2xl sm:p-6 lg:p-7"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-600 sm:mb-6 sm:h-11 sm:w-11 sm:rounded-xl">
                  <Icon
                    size={19}
                    className="sm:h-[21px] sm:w-[21px]"
                  />
                </div>

                <h3 className="text-base font-semibold text-zinc-900 sm:text-lg">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500 sm:mt-3 sm:leading-7">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}