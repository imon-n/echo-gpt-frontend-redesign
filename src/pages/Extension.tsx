import ExtensionHeader from "../components/extension/ExtensionHeader";
import QuickActions from "../components/extension/QuickActions";
import ContextCard from "../components/extension/ContextCard";
import ExtensionInput from "../components/extension/ExtensionInput";

export default function Extension() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto min-h-screen max-w-md border-x border-zinc-800">
        <ExtensionHeader />

        <div className="space-y-6 p-4">
          <ContextCard />

          <QuickActions />

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-600">
              Ask EchoGPT
            </p>

            <ExtensionInput />
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-600">
              Recent
            </p>

            <div className="space-y-2">
              {[
                "Summarize this article",
                "Explain this section",
                "Rewrite this paragraph",
              ].map((item) => (
                <button
                  key={item}
                  className="w-full rounded-xl border border-zinc-800 p-3 text-left text-xs text-zinc-400 hover:bg-zinc-900"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}