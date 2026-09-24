import { Link } from "react-router-dom";
import { ArrowUpRight, Bot, Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "AI Models", href: "#models" },
  { label: "Extension", href: "#extension" },
  { label: "FAQ", href: "#faq" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "mailto:hello@echogpt.ai" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-8 py-10 sm:gap-10 sm:py-12 md:grid-cols-2 lg:gap-12 lg:py-16 lg:grid-cols-5">
          {/* ================= BRAND ================= */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              aria-label="EchoGPT Home"
              className="inline-flex items-center gap-2 sm:gap-2.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 shadow-sm shadow-violet-600/20 sm:h-10 sm:w-10 sm:rounded-xl">
                <Bot className="h-4.5 w-4.5 text-white sm:h-5 sm:w-5" />
              </div>

              <span className="text-lg font-bold tracking-tight text-zinc-950 sm:text-xl">
                EchoGPT
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-xs leading-5 text-zinc-500 sm:mt-5 sm:text-sm sm:leading-6">
              Every AI model. One intelligent workspace. Chat, research,
              write and analyze with powerful AI models in one unified
              experience.
            </p>

            {/* Email */}
            <a
              href="mailto:hello@echogpt.ai"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-violet-600 sm:mt-6 sm:gap-2 sm:text-sm"
            >
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              hello@echogpt.ai
            </a>

            {/* ================= SOCIAL LINKS ================= */}
            <div className="mt-6 flex items-center gap-2 sm:mt-7">
              {/* GitHub */}
              <a
                href="#"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-all duration-200 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 sm:h-9 sm:w-9"
              >
                <FaGithub className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-all duration-200 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 sm:h-9 sm:w-9"
              >
                <FaLinkedinIn className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X / Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-all duration-200 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 sm:h-9 sm:w-9"
              >
                <FaXTwitter className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            </div>
          </div>

          {/* ================= PRODUCT ================= */}
          <div>
            <h3 className="text-xs font-semibold text-zinc-900 sm:text-sm">
              Product
            </h3>

            <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-zinc-500 transition-colors hover:text-violet-600 sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COMPANY ================= */}
          <div>
            <h3 className="text-xs font-semibold text-zinc-900 sm:text-sm">
              Company
            </h3>

            <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-zinc-500 transition-colors hover:text-violet-600 sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= GET STARTED ================= */}
          <div>
            <h3 className="text-xs font-semibold text-zinc-900 sm:text-sm">
              Get Started
            </h3>

            <p className="mt-4 text-xs leading-5 text-zinc-500 sm:mt-5 sm:text-sm sm:leading-6">
              Start exploring a smarter way to work with AI.
            </p>

            <Link
              to="/register"
              className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-violet-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm shadow-violet-600/20 transition-all duration-200 hover:bg-violet-700 hover:shadow-md sm:mt-5 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
            >
              Start for free
              <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col gap-3 border-t border-zinc-200 py-5 sm:gap-5 sm:py-6 md:flex-row md:items-center md:justify-between">
          {/* Copyright */}
          <p className="text-[11px] text-zinc-500 sm:text-xs md:text-sm">
            © {currentYear} EchoGPT. All rights reserved.
          </p>

          {/* Legal */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] text-zinc-500 transition-colors hover:text-zinc-900 sm:text-xs md:text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}