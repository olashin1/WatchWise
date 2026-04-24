import "./login-btn";
import LoginBtn from "./login-btn";

export default function LoginField() {
  return (
    <div className="flex items-center justify-center bg-mist-700 w-xl h-80 shadow-lg rounded-b-2xl">
      <form className="flex flex-col gap-5 w-80">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-300" htmlFor="email">
            Email
          </label>
          <input
            className="bg-mist-800 px-4 py-2 rounded-xl text-white outline-none focus:ring-2 focus:ring-purple-500 transition"
            type="text"
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
}
