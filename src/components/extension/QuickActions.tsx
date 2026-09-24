import {
  FileText,
  Lightbulb,
  PenLine,
  Languages,
} from "lucide-react";

import { quickActions } from "../../data/quickActions";

const icons = {
  FileText,
  Lightbulb,
  PenLine,
  Languages,
};

export default function QuickActions() {
  return (
    <div>
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-600">
        Quick actions
      </p>

      <div className="grid grid-cols-2 gap-2">
        {quickActions.map((action) => {
          const Icon = icons[action.icon as keyof typeof icons];

          return (
            <button
              key={action.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 text-left hover:border-zinc-700"
            >
              <Icon size={16} className="text-violet-400" />

              <p className="mt-2 text-xs font-medium text-white">
                {action.title}
              </p>

              <p className="mt-1 text-[11px] text-zinc-600">
                {action.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}