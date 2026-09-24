import { ArrowLeft, FileQuestion } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 text-center">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100/60 blur-3xl" />

      <div className="relative max-w-md">
        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
          <FileQuestion className="h-8 w-8" />
        </div>

        {/* 404 */}
        <p className="mt-7 text-7xl font-bold tracking-tight text-violet-600 sm:text-8xl">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-zinc-500 sm:text-base">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-200 hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-600/25"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          />
          Back home
        </Link>
      </div>
    </div>
  );
}