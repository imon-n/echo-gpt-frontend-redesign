import { ArrowUp } from "lucide-react";
import { useState } from "react";

export default function ExtensionInput() {
  const [value, setValue] = useState("");

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-2">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={3}
        placeholder="Ask about this page..."
        className="w-full resize-none bg-transparent px-2 py-1 text-xs text-white outline-none placeholder:text-zinc-600"
      />

      <div className="flex justify-end">
        <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white">
          <ArrowUp size={14} />
        </button>
      </div>
    </div>
  );
}