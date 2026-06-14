import "./login-btn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginBtn from "./login-btn";
import axios from "axios";

export default function LoginField() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/login", {
        email: email,
        password: password,
      });

      const token = response.data;
      console.log(`Console: ${response.data}`);
      localStorage.setItem("token", token);

      navigate("/dashboard");
    } catch (err: any) {
      console.error(err);
    }
  }

  // Start UI

  return (
    <div className="flex items-center justify-center bg-mist-700 w-xl h-80 shadow-lg rounded-2xl">
      <form onSubmit={onSubmit} className="flex flex-col gap-5 w-80">
        <div className="flex flex-col gap-1">
          <div className="text-center text-white font-bold rounded-2xl bg-linear-to-r from-purple-500 to-orange-500">
            WatchWise
          </div>
          <label className="text-sm text-gray-300" htmlFor="email">
            Email
          </label>
          <input
            className="bg-mist-800 px-4 py-2 rounded-xl text-white outline-none focus:ring-2 focus:ring-purple-500 transition"
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        <LoginBtn />
      </form>
    </div>
  );

  // End Component
}
