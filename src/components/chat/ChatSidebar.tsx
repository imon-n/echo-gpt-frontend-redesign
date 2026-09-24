import {
  MessageSquare,
  Plus,
  Settings,
  Sparkles,
  LogOut,
  History,
  Image,
  LifeBuoy,
  CreditCard,
  Menu,
  X,
} from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function ChatSidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    setMobileOpen(false);
    navigate("/");
  };

  const isActive = (path: string) => location.pathname === path;

  const engagementItems = [
    {
      label: "Conversations",
      icon: MessageSquare,
      path: "/app",
    },
    {
      label: "History",
      icon: History,
      path: "/app/history",
    },
    {
      label: "Image Studio",
      icon: Image,
      path: "/app/image-studio",
      pro: true,
    },
  ];

  const supportItems = [
    {
      label: "Support",
      icon: LifeBuoy,
      path: "/support",
    },
    {
      label: "Subscriptions",
      icon: CreditCard,
      path: "/subscriptions",
    },
  ];

  /*
   * Close mobile sidebar after navigation
   */
  const handleMobileNavigation = () => {
    setMobileOpen(false);
  };

  /*
   * Sidebar content
   *
   * We keep the same content for both desktop
   * and mobile so there is no duplicated navigation logic.
   */
  const SidebarContent = () => (
    <>
      {/* ================= LOGO ================= */}
      <div className="flex h-16 shrink-0 items-center border-b border-zinc-100 px-5">
        <Link
          to="/"
          onClick={handleMobileNavigation}
          className="flex items-center gap-2"
          aria-label="EchoGPT Home"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 shadow-sm shadow-violet-600/20">
            <Sparkles size={16} className="text-white" />
          </div>

          <span className="font-semibold tracking-tight text-zinc-900">
            EchoGPT
          </span>
        </Link>

        {/* Mobile Close Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 md:hidden"
          aria-label="Close sidebar"
        >
          <X size={20} />
        </button>
      </div>

      {/* ================= NEW CHAT ================= */}
      <div className="shrink-0 p-4">
        <Link
          to="/app"
          onClick={handleMobileNavigation}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-violet-600/20 transition-all duration-200 hover:bg-violet-700 hover:shadow-md"
        >
          <Plus size={17} />
          New Chat
        </Link>
      </div>

      {/* ================= NAVIGATION ================= */}
      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        {/* ================= ENGAGEMENT ================= */}
        <div>
          <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            Engagement
          </p>

          <div className="space-y-1">
            {engagementItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={handleMobileNavigation}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-violet-50 text-violet-700"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                  }`}
                >
                  <Icon
                    size={17}
                    className={
                      active
                        ? "text-violet-600"
                        : "text-zinc-400 group-hover:text-zinc-600"
                    }
                  />

                  <span className="flex-1">{item.label}</span>

                  {item.pro && (
                    <span className="rounded-md bg-violet-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-violet-600">
                      PRO
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* ================= HELP & SUPPORT ================= */}
        <div className="mt-7">
          <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            Help & Support
          </p>

          <div className="space-y-1">
            {supportItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={handleMobileNavigation}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-violet-50 text-violet-700"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                  }`}
                >
                  <Icon
                    size={17}
                    className={
                      active
                        ? "text-violet-600"
                        : "text-zinc-400 group-hover:text-zinc-600"
                    }
                  />

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ================= SETTINGS ================= */}
        <div className="mt-7 border-t border-zinc-100 pt-4">
          <Link
            to="/settings"
            onClick={handleMobileNavigation}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive("/settings")
                ? "bg-violet-50 text-violet-700"
                : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
            }`}
          >
            <Settings
              size={17}
              className={
                isActive("/settings")
                  ? "text-violet-600"
                  : "text-zinc-400"
              }
            />

            Settings
          </Link>
        </div>
      </nav>

      {/* ================= USER ================= */}
      <div className="shrink-0 border-t border-zinc-100 p-4">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-semibold text-violet-700">
            {(
              user?.displayName ||
              user?.email ||
              "U"
            )
              .charAt(0)
              .toUpperCase()}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-zinc-800">
              {user?.displayName || "User"}
            </p>

            <p className="truncate text-xs text-zinc-400">
              {user?.email}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-500 transition-colors hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={16} />
          Sign out
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* =====================================================
          MOBILE HEADER
          Visible only below md
      ===================================================== */}
      <div className="fixed left-0 right-0 top-0 z-40 flex h-14 items-center border-b border-zinc-200 bg-white px-4 md:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
          aria-label="Open sidebar"
        >
          <Menu size={21} />
        </button>

        <Link
          to="/"
          className="ml-3 flex items-center gap-2"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-600">
            <Sparkles size={14} className="text-white" />
          </div>

          <span className="font-semibold tracking-tight text-zinc-900">
            EchoGPT
          </span>
        </Link>
      </div>

      {/* =====================================================
          MOBILE OVERLAY
          Clicking outside closes sidebar
      ===================================================== */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px] md:hidden"
        />
      )}

      {/* =====================================================
          MOBILE SIDEBAR
      ===================================================== */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-zinc-200 bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </aside>

      {/* =====================================================
          DESKTOP SIDEBAR
          Visible only at md and above
      ===================================================== */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-zinc-200 bg-white md:flex">
        <SidebarContent />
      </aside>
    </>
  );
}