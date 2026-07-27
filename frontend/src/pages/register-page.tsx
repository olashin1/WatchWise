import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import AuthCard from "../components/Register/auth-card";
import AuthInput from "../components/Register/auth-input";
import AuthMessage from "../components/Register/auth-message";
import AuthSubmitButton from "../components/Register/auth-submit-btn";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function register(formData: FormData) {
    setErrorMessage("");
    setSuccessMessage("");
    setIsLoading(true);

    try {
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");

      if (
        typeof email !== "string" ||
        typeof password !== "string" ||
        typeof confirmPassword !== "string"
      ) {
        setErrorMessage("Please complete every field.");
        return;
      }

      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }

      if (password.length < 6) {
        setErrorMessage("Password must be at least 6 characters.");
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      if (data.session) {
        navigate("/dashboard");
        return;
      }

      setSuccessMessage(
        "Account created. Check your email to confirm your account.",
      );
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthCard
      title="Create your account"
      description="Start discovering personalized movie recommendations."
    >
      <form action={register} className="flex flex-col gap-6">
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
          autoComplete="new-password"
          minLength={6}
          required
        />

        <AuthInput
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="••••••••"
          autoComplete="new-password"
          minLength={6}
          required
        />

        {errorMessage && <AuthMessage type="error" message={errorMessage} />}

        {successMessage && (
          <AuthMessage type="success" message={successMessage} />
        )}

        <AuthSubmitButton
          isLoading={isLoading}
          defaultText="Create account"
          loadingText="Creating account..."
        />

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="font-medium text-purple-400 transition hover:text-purple-300"
          >
            Log in
          </button>
        </p>
      </form>
    </AuthCard>
  );
}
