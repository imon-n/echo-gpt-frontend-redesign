import {
  Clock3,
  MessageSquare,
  Search,
  Trash2,
} from "lucide-react";
import { useState } from "react";

const conversations = [
  {
    id: 1,
    title: "React authentication flow",
    preview: "How should I structure Firebase authentication?",
    date: "Today",
  },
  {
    id: 2,
    title: "Computer vision project",
    preview: "Explain YOLO object detection step by step.",
    date: "Yesterday",
  },
  {
    id: 3,
    title: "Landing page redesign",
    preview: "Help me improve the SaaS landing page UX.",
    date: "Sep 22",
  },
  {
    id: 4,
    title: "Python problem solving",
    preview: "Explain this algorithm with an example.",
    date: "Sep 20",
  },
];

export default function History() {
  const [search, setSearch] = useState("");

  const filtered = conversations.filter((conversation) =>
    conversation.title
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <Clock3 size={19} />
            </div>

            <div>
              <h1 className="text-lg font-semibold text-zinc-950">
                History
              </h1>

              <p className="text-xs text-zinc-500 sm:text-sm">
                Browse your previous conversations
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
        {/* Search */}
        <div className="relative max-w-md">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <input
            type="search"
            placeholder="Search conversations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-11 w-full rounded-xl border border-zinc-200 bg-white pl-10 pr-4 text-sm text-zinc-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
          />
        </div>

        {/* List */}
        <div className="mt-6 space-y-3">
          {filtered.map((conversation) => (
            <div
              key={conversation.id}
              className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:border-violet-200 hover:shadow-md sm:p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-500">
                <MessageSquare size={18} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-zinc-900">
                  {conversation.title}
                </h3>

                <p className="mt-1 truncate text-xs text-zinc-500 sm:text-sm">
                  {conversation.preview}
                </p>
              </div>

              <div className="hidden items-center gap-4 sm:flex">
                <span className="text-xs text-zinc-400">
                  {conversation.date}
                </span>

                <button
                  type="button"
                  aria-label={`Delete ${conversation.title}`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 opacity-0 transition group-hover:opacity-100 hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="rounded-2xl border border-dashed border-zinc-200 py-16 text-center">
              <MessageSquare className="mx-auto h-8 w-8 text-zinc-300" />

              <p className="mt-3 text-sm font-medium text-zinc-600">
                No conversations found
              </p>

              <p className="mt-1 text-xs text-zinc-400">
                Try a different search term.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}