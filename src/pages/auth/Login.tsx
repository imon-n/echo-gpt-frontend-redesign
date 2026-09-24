import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, LockKeyhole, Sparkles } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { loginUser, loginWithGoogle } from "../../firebase/auth";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");

  // Email Login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await loginUser(email, password);
      navigate("/app");
    } catch (error: any) {
      setError(error.message || "Failed to login.");
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setError("");
    setGoogleLoading(true);

    try {
      await loginWithGoogle();
      navigate("/app");
    } catch (error: any) {
      setError(error.message || "Google login failed.");
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
          <LockKeyhole
            className="h-5 w-5"
            aria-hidden="true"
          />
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
          Welcome back
        </h1>

        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-zinc-500">
          Sign in to continue to your EchoGPT workspace.
        </p>
      </div>

      {/* Google Login */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={googleLoading || loading}
        className="flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white text-sm font-medium text-zinc-800 shadow-sm transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <FcGoogle
          className="h-5 w-5"
          aria-hidden="true"
        />

        {googleLoading ? "Signing in..." : "Continue with Google"}
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

      {/* Email Login */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
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
        <div>
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="mt-2.5 text-right">
            <Link
              to="/forgot-password"
              className="text-xs font-semibold text-violet-600 transition-colors hover:text-violet-700 sm:text-sm"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        {/* Sign In */}
        <Button
          type="submit"
          className="group flex w-full items-center justify-center gap-2"
          disabled={loading || googleLoading}
        >
          {loading ? (
            "Signing in..."
          ) : (
            <>
              Sign in

              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </Button>
      </form>

      {/* Register */}
      <p className="mt-7 text-center text-xs text-zinc-500 sm:mt-8 sm:text-sm">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-violet-600 transition-colors hover:text-violet-700"
        >
          Create account
        </Link>
      </p>

      {/* Security Note */}
      <p className="mt-6 text-center text-[11px] leading-5 text-zinc-400 sm:mt-7">
        By continuing, you agree to use EchoGPT responsibly and securely.
      </p>
    </div>
  );
}