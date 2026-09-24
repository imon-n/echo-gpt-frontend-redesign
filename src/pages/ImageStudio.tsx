import {
  Image as ImageIcon,
  Sparkles,
  Upload,
  WandSparkles,
} from "lucide-react";
import { useState } from "react";

const styles = [
  "Realistic",
  "Cinematic",
  "Illustration",
  "3D Render",
];

export default function ImageStudio() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Realistic");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <ImageIcon size={19} />
            </div>

            <div>
              <h1 className="text-lg font-semibold text-zinc-950">
                Image Studio
              </h1>

              <p className="text-xs text-zinc-500 sm:text-sm">
                Create images with AI
              </p>
            </div>
          </div>

          <span className="rounded-full bg-violet-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-violet-600">
            PRO
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          {/* Generator */}
          <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-2">
              <WandSparkles
                size={18}
                className="text-violet-600"
              />

              <h2 className="font-semibold text-zinc-900">
                Create an image
              </h2>
            </div>

            <div className="mt-6">
              <label
                htmlFor="image-prompt"
                className="text-sm font-medium text-zinc-800"
              >
                Describe your image
              </label>

              <textarea
                id="image-prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={6}
                placeholder="A cinematic football match under stadium lights..."
                className="mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-white p-4 text-sm leading-6 text-zinc-900 outline-none placeholder:text-zinc-400 transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            <div className="mt-5">
              <p className="text-sm font-medium text-zinc-800">
                Style
              </p>

              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {styles.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setStyle(item)}
                    className={`rounded-xl border px-3 py-2.5 text-xs font-medium transition ${
                      style === item
                        ? "border-violet-300 bg-violet-50 text-violet-700"
                        : "border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700 disabled:opacity-50"
              disabled={!prompt.trim()}
            >
              <Sparkles size={16} />
              Generate image
            </button>
          </section>

          {/* Preview */}
          <section className="flex min-h-[360px] flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-zinc-900">
                Preview
              </h2>

              <Upload
                size={17}
                className="text-zinc-400"
              />
            </div>

            <div className="flex flex-1 items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-zinc-300 shadow-sm">
                  <ImageIcon size={25} />
                </div>

                <p className="mt-4 text-sm font-medium text-zinc-600">
                  Your generated image will appear here
                </p>

                <p className="mt-1 max-w-xs text-xs leading-5 text-zinc-400">
                  Enter a prompt and choose a style to start creating.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}