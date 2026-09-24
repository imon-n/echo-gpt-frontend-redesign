import {
  LogOut,
  ChevronRight,
  Settings as SettingsIcon,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const userInitial = (
    user?.displayName ||
    user?.email ||
    "U"
  )
    .charAt(0)
    .toUpperCase();

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-16 max-w-4xl items-center gap-3 px-4 sm:h-[68px] sm:px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
            <SettingsIcon size={18} />
          </div>

          <div>
            <h1 className="text-base font-semibold text-zinc-950 sm:text-lg">
              Settings
            </h1>

            <p className="hidden text-xs text-zinc-500 sm:block">
              Manage your account and preferences
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl space-y-8 px-4 py-6 sm:px-6 sm:py-8 lg:py-10">
        {/* Account */}
        <section>
          <h2 className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-zinc-400 sm:mb-4 sm:text-sm">
            Account
          </h2>

          <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Avatar */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-semibold text-violet-700 sm:h-12 sm:w-12 sm:text-base">
                {userInitial}
              </div>

              {/* User info */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-zinc-900 sm:text-base">
                  {user?.displayName || "EchoGPT User"}
                </p>

                <p className="mt-0.5 truncate text-xs text-zinc-500 sm:text-sm">
                  {user?.email || "No email available"}
                </p>
              </div>

              <ChevronRight className="h-4 w-4 shrink-0 text-zinc-300" />
            </div>
          </div>
        </section>

        {/* Sign out */}
        <section>
          <h2 className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-zinc-400 sm:mb-4 sm:text-sm">
            Account actions
          </h2>

          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 sm:px-5 sm:py-4"
          >
            <LogOut size={17} />
            <span>Sign out</span>
          </button>
        </section>
      </main>
    </div>
  );
}