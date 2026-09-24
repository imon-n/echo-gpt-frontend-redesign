import { Globe } from "lucide-react";

export default function ContextCard() {
  return (
    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3">
      <div className="flex items-center gap-2">
        <Globe size={15} className="text-emerald-400" />

        <span className="text-xs font-medium text-emerald-400">
          Page connected
        </span>
      </div>

      <p className="mt-2 truncate text-xs text-zinc-500">
        Current webpage content is available to EchoGPT.
      </p>
    </div>
  );
}