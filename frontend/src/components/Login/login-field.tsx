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
    <div className="flex items-center justify-center bg-mist-700 w-xl h-80 shadow-lg rounded-2xl">
      <form action={login} className="flex flex-col gap-5 w-80">
        <div className="flex flex-col gap-1">
          <div className="text-center text-white font-bold rounded-2xl bg-linear-to-r from-purple-500 to-orange-500">
            WatchWise
          </div>
          <label className="text-sm text-gray-300" htmlFor="email">
            Email
          </label>
          <input
            className="bg-mist-800 px-4 py-2 rounded-xl text-white outline-none focus:ring-2 focus:ring-purple-500 transition"
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-300" htmlFor="password">
            Password
          </label>
          <input
            className="bg-mist-800 px-4 py-2 rounded-xl text-white outline-none focus:ring-2 focus:ring-purple-500 transition"
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
          />
        </div>

        <LoginBtn />
      </form>
    </div>
  );

  // End Component
}
