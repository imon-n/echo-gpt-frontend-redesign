import { Puzzle, Settings } from "lucide-react";

export default function ExtensionHeader() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 px-4 py-4">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600">
          <Puzzle size={16} className="text-white" />
        </div>

        <span className="font-semibold text-white">
          EchoGPT
        </span>
      </div>

      <button
        type="button"
        className="rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-white"
        aria-label="Extension settings"
        title="Settings"
      >
        <Settings size={17} />
      </button>
    </header>
  );
}