import {
  ArrowUp,
  Mic,
  Paperclip,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { models } from "../../data/models";

interface Props {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [value, setValue] = useState("");
  const [selectedModel, setSelectedModel] = useState(
    models[0]?.name || "EchoGPT",
  );
  const [showModelDropdown, setShowModelDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const submit = () => {
    const trimmed = value.trim();

    if (!trimmed) return;

    onSend(trimmed);
    setValue("");
  };

  const isEmpty = !value.trim();

  // Close model dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowModelDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative rounded-2xl border border-zinc-200 bg-white p-3 shadow-lg shadow-zinc-200/40 transition-all duration-200 focus-within:border-violet-300 focus-within:shadow-violet-100/40">

      {/* ================= TOP BAR ================= */}
      <div className="mb-2 flex items-center justify-between border-b border-zinc-100 px-1 pb-2">

        {/* Model Selector */}
        <div
          ref={dropdownRef}
          className="relative"
        >
          <button
            type="button"
            onClick={() =>
              setShowModelDropdown((prev) => !prev)
            }
            aria-haspopup="listbox"
            aria-expanded={showModelDropdown}
            className="flex items-center gap-1.5 rounded-lg bg-zinc-50 px-2.5 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
          >
            <Sparkles
              size={13}
              className="text-violet-600"
            />

            <span>{selectedModel}</span>

            <ChevronDown
              size={12}
              className={`text-zinc-400 transition-transform duration-200 ${
                showModelDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          {showModelDropdown && (
            <div
              role="listbox"
              className="absolute bottom-full left-0 z-50 mb-2 w-48 overflow-hidden rounded-xl border border-zinc-200 bg-white py-1 shadow-xl shadow-zinc-200/50"
            >
              <div className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                Select model
              </div>

              {models.map((model) => {
                const isSelected =
                  selectedModel === model.name;

                return (
                  <button
                    key={model.id}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      setSelectedModel(model.name);
                      setShowModelDropdown(false);
                    }}
                    className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-xs transition-colors ${
                      isSelected
                        ? "bg-violet-50 text-violet-700"
                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                    }`}
                  >
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-bold ${
                        isSelected
                          ? "bg-violet-600 text-white"
                          : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      {model.name.charAt(0)}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate font-medium">
                        {model.name}
                      </p>

                      <p className="truncate text-[10px] text-zinc-400">
                        {model.provider}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Keyboard hint */}
        <span className="hidden text-[11px] text-zinc-400 sm:block">
          Enter to send · Shift + Enter for new line
        </span>
      </div>

      {/* ================= TEXTAREA ================= */}
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            submit();
          }
        }}
        rows={2}
        placeholder="Ask a question..."
        aria-label="Ask a question"
        className="w-full resize-none bg-transparent px-2 py-1 text-sm leading-6 text-zinc-900 outline-none placeholder:text-zinc-400"
      />

      {/* ================= BOTTOM ACTIONS ================= */}
      <div className="flex items-center justify-between px-1 pt-1">

        {/* Left Actions */}
        <div className="flex items-center gap-1">

          {/* Attachment */}
          <button
            type="button"
            aria-label="Attach document"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
          >
            <Paperclip size={17} />
          </button>

          {/* Voice */}
          <button
            type="button"
            aria-label="Voice input"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
          >
            <Mic size={17} />
          </button>
        </div>

        {/* Send */}
        <button
          type="button"
          onClick={submit}
          disabled={isEmpty}
          aria-label="Send message"
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white shadow-sm shadow-violet-600/20 transition-all duration-200 hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-400 disabled:shadow-none"
        >
          <ArrowUp size={17} />
        </button>
      </div>
    </div>
  );
}