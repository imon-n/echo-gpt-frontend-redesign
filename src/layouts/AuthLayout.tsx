import { Link, Outlet } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl">
        {/* Left Side */}
        <div className="hidden flex-1 flex-col justify-between border-r border-zinc-200 bg-zinc-50 p-8 lg:flex xl:p-12">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white">
              <Sparkles size={18} />
            </div>

            <span className="font-bold text-zinc-900">EchoGPT</span>
          </Link>

          <div>
            <h1 className="max-w-lg text-4xl font-bold leading-tight text-zinc-900 xl:text-5xl">
              Your AI workspace,
              <br />
              <span className="text-violet-600">beautifully unified.</span>
            </h1>

            <p className="mt-6 max-w-lg text-zinc-500 leading-7">
              Chat, create and explore with a modern AI experience.
            </p>
          </div>

          <p className="text-sm text-zinc-400">© 2026 EchoGPT</p>
        </div>

        {/* Right Side */}
        <div className="flex w-full items-center justify-center px-5 py-8 sm:px-8 lg:w-[480px] lg:px-10 xl:w-[520px]">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="mb-8 lg:hidden">
              <Link to="/" className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white">
                  <Sparkles size={18} />
                </div>

                <span className="font-bold text-zinc-900">EchoGPT</span>
              </Link>
            </div>

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
