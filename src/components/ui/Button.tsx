import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-600/20",

    secondary:
      "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700",

    ghost:
      "text-white bg-zinc-800",
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}