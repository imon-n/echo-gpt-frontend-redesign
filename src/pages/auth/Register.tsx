import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, UserPlus } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import {
  registerUser,
  loginWithGoogle,
} from "../../firebase/auth";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");

  // Email Registration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await registerUser(name, email, password);
      navigate("/app");
    } catch (error: any) {
      setError(error.message || "Failed to create account.");
    } finally {
      setLoading(false);
    }
  };

  // Google Registration
  const handleGoogleRegister = async () => {
    setError("");
    setGoogleLoading(true);

    try {
      await loginWithGoogle();
      navigate("/app");
    } catch (error: any) {
      setError(error.message || "Google signup failed.");
    } finally {
      setGoogleLoading(false);
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
      <div className="mb-7 text-center sm:mb-8">
        <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
          <UserPlus
            className="h-5 w-5"
            aria-hidden="true"
          />
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
          Create your account
        </h1>

        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-zinc-500">
          Start your EchoGPT journey today.
        </p>
      </div>

      {/* Google */}
      <button
        type="button"
        onClick={handleGoogleRegister}
        disabled={googleLoading || loading}
        className="flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white text-sm font-medium text-zinc-800 shadow-sm transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <FcGoogle
          className="h-5 w-5"
          aria-hidden="true"
        />

        {googleLoading
          ? "Creating account..."
          : "Continue with Google"}
      </button>

      {/* Divider */}
      <div className="my-6 flex items-center gap-3 sm:my-7 sm:gap-4">
        <div className="h-px flex-1 bg-zinc-200" />

        <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">
          or
        </span>

        <div className="h-px flex-1 bg-zinc-200" />
      </div>

      {/* Error */}
      {error && (
        <div
          role="alert"
          className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs leading-5 text-red-600 sm:text-sm"
        >
          {error}
        </div>
      )}

      {/* Registration Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Full Name */}
        <Input
          label="Full name"
          type="text"
          placeholder="Nur Mohammad Imon"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email */}
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Create Account */}
        <Button
          type="submit"
          className="group flex w-full items-center justify-center gap-2"
          disabled={loading || googleLoading}
        >
          {loading ? (
            "Creating account..."
          ) : (
            <>
              Create account

              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </Button>
      </form>

      {/* Login */}
      <p className="mt-7 text-center text-xs text-zinc-500 sm:mt-8 sm:text-sm">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-violet-600 transition-colors hover:text-violet-700"
        >
          Sign in
        </Link>
      </p>

      {/* Security Note */}
      <p className="mt-6 text-center text-[11px] leading-5 text-zinc-400 sm:mt-7">
        By creating an account, you agree to use EchoGPT responsibly
        and securely.
      </p>
    </div>
  );
}