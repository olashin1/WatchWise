import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Discover", path: "/discover" },
  { label: "Watchlist", path: "/watchlist" },
  { label: "History", path: "/history" },
  { label: "Genres", path: "/genres" },
  { label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-60 flex-col border-r border-white/10 bg-[#111117]/90 p-6 md:flex">
      <div className="mb-10 text-2xl tracking-[0.2em] text-[#c58cff]">
        WATCHWISE
      </div>

      <nav className="space-y-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block w-full rounded-2xl px-4 py-3 text-left transition ${
                isActive
                  ? "bg-[#c58cff]/20 text-white"
                  : "text-[#aaa3b8] hover:bg-white/5 hover:text-white"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto text-sm text-[#aaa3b8]">Movie Lover</div>
    </aside>
  );
}
