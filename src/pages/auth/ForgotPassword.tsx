import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  KeyRound,
  Sparkles,
} from "lucide-react";

import { resetUserPassword } from "../../firebase/auth";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      await resetUserPassword(email);
      setMessage("Password reset email sent.");
    } catch {
      setError("Unable to send reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Mobile Brand */}
      <div className="mb-8 flex items-center justify-center gap-2 lg:hidden">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 shadow-sm shadow-violet-600/20">
          <Sparkles
            className="h-4.5 w-4.5 text-white"
            aria-hidden="true"
          />
        </div>

        <span className="text-lg font-bold tracking-tight text-zinc-950">
          EchoGPT
        </span>
      </div>

      {/* Heading */}
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
          <KeyRound
            className="h-5 w-5"
            aria-hidden="true"
          />
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
          Reset your password
        </h1>

        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-zinc-500">
          Enter your email and we'll send you a reset link.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-7 space-y-5 sm:mt-8"
      >
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Success Message */}
        {message && (
          <div
            role="status"
            className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs leading-5 text-emerald-700 sm:text-sm"
          >
            {message}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs leading-5 text-red-600 sm:text-sm"
          >
            {error}
          </div>
        )}

        <Button
          type="submit"
          className="group flex w-full items-center justify-center gap-2"
          disabled={loading}
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              Send reset link

              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </Button>
      </form>

      {/* Back to Login */}
      <Link
        to="/login"
        className="group mt-7 flex items-center justify-center gap-2 text-xs font-semibold text-violet-600 transition-colors hover:text-violet-700 sm:mt-8 sm:text-sm"
      >
        <ArrowLeft
          className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
          aria-hidden="true"
        />
        Back to login
      </Link>

      {/* Security Note */}
      <p className="mt-6 text-center text-[11px] leading-5 text-zinc-400 sm:mt-7">
        We'll send a secure password reset link to your email.
      </p>
    </div>
  );
}