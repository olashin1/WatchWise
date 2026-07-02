import "./login-btn";
import { useNavigate } from "react-router-dom";
import LoginBtn from "./login-btn";
import axios from "axios";
import { supabase } from "../../lib/supabase";

export default function LoginField() {
  const navigate = useNavigate();
  // New method
  async function login(formData: FormData) {
    try {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error(`Error Occured: ${error}`);
      }

      if (data.user) {
        console.log("Rediecting user...");
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(`Error: ${err} occured.`);
    }
  }

  // Start UI

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#101014] w-full">
      <div className="w-105 rounded-3xl border border-[#2b2b36] bg-[#1b1b22] p-8 shadow-2xl">
        <form action={login} className="flex flex-col gap-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white">
              <span className="text-purple-400">Watch</span>Wise
            </h1>

            <p className="text-sm text-gray-400">
              Personalized movie recommendations powered by AI.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-300"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="rounded-xl border border-[#32323d] bg-[#25252f] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-300"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="rounded-xl border border-[#32323d] bg-[#25252f] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
            />
          </div>

          <LoginBtn />

          <p className="text-center text-sm text-gray-500">
            New to WatchWise?{" "}
            <button
              type="button"
              className="font-medium text-purple-400 hover:text-purple-300"
            >
              Create an account
            </button>
          </p>
        </form>
      </div>
    </div>
  );

  // End Component
}
