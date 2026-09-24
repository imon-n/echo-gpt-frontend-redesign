import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

import Button from "../ui/Button";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[68px] sm:px-5 lg:h-[80px] lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-2.5"
          aria-label="EchoGPT Home"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 shadow-sm shadow-violet-600/20 sm:h-9 sm:w-9 sm:rounded-xl">
            <Sparkles
              size={16}
              className="text-white sm:h-[18px] sm:w-[18px]"
              aria-hidden="true"
            />
          </div>

          <span className="text-base font-bold tracking-tight text-zinc-950 sm:text-lg">
            EchoGPT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-6 md:flex lg:gap-8"
          aria-label="Main navigation"
        >
          <a
            href="#features"
            className="text-sm font-semibold text-zinc-800 transition-colors hover:text-zinc-950 lg:text-lg"
          >
            Features
          </a>

          <a
            href="#models"
            className="text-sm font-semibold text-zinc-800 transition-colors hover:text-zinc-950 lg:text-lg"
          >
            Models
          </a>

          <a
            href="#extension"
            className="text-sm font-semibold text-zinc-800 transition-colors hover:text-zinc-950 lg:text-lg"
          >
            Extension
          </a>

          <a
            href="#faq"
            className="text-sm font-semibold text-zinc-800 transition-colors hover:text-zinc-950 lg:text-lg"
          >
            FAQ
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex lg:gap-3">
          {user ? (
            <Button onClick={() => navigate("/app")}>
              Open Workspace
              <ArrowRight size={16} />
            </Button>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost"  className = "text-amber-900">Log in</Button>
              </Link>

              <Link to="/register">
                <Button>
                  Get Started
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 sm:h-10 sm:w-10 md:hidden"
        >
          {open ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 shadow-lg sm:px-5 sm:py-6 md:hidden">
          <nav
            className="flex flex-col gap-1.5 sm:gap-2"
            aria-label="Mobile navigation"
          >
            <a
              href="#features"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-950 sm:py-3"
            >
              Features
            </a>

            <a
              href="#models"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-950 sm:py-3"
            >
              Models
            </a>

            <a
              href="#extension"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-950 sm:py-3"
            >
              Extension
            </a>

            <a
              href="#faq"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-950 sm:py-3"
            >
              FAQ
            </a>

            <div className="mt-2 border-t border-zinc-100 pt-3 sm:mt-3 sm:pt-4">
              {user ? (
                <Button
                  className="w-full"
                  onClick={() => {
                    closeMenu();
                    navigate("/app");
                  }}
                >
                  Open Workspace
                  <ArrowRight size={16} />
                </Button>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link to="/login" onClick={closeMenu}>
                    <Button variant="ghost" className="w-full">
                      Log in
                    </Button>
                  </Link>

                  <Link to="/register" onClick={closeMenu}>
                    <Button className="w-full">
                      Get Started
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}