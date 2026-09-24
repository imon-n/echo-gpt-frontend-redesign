import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({
  label,
  className = "",
  id,
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-zinc-800"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={`w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 transition-all duration-200 hover:border-zinc-300 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 disabled:cursor-not-allowed disabled:bg-zinc-50 disabled:text-zinc-400 ${className}`}
        {...props}
      />
    </div>
  );
}