import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

import AuthCard from "../Register/auth-card";
import AuthInput from "../Register/auth-input";
import AuthMessage from "../Register/auth-message";
import AuthSubmitButton from "../Register/auth-submit-btn";

export default function LoginField() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function login(formData: FormData) {
    setErrorMessage("");
    setIsLoading(true);

    try {
      const email = formData.get("email");
      const password = formData.get("password");

      if (typeof email !== "string" || typeof password !== "string") {
        setErrorMessage("Please enter your email and password.");
        return;
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      if (data.user) {
        console.log("Redirecting user...");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthCard
      title="Welcome back"
      description="Personalized movie recommendations powered by AI."
    >
      <form action={login} className="flex flex-col gap-6">
        <AuthInput
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />

        <AuthInput
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          autoComplete="current-password"
          required
        />

        {errorMessage && <AuthMessage type="error" message={errorMessage} />}

        <AuthSubmitButton
          isLoading={isLoading}
          defaultText="Log in"
          loadingText="Logging in..."
        />

        <p className="text-center text-sm text-gray-500">
          New to WatchWise?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="font-medium text-purple-400 transition hover:text-purple-300"
          >
            Create an account
          </button>
        </p>
      </form>
    </AuthCard>
  );
}
