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
    <aside className="w-60 hidden md:flex flex-col border-r border-white/10 bg-[#111117]/90 p-6">
      <div className="mb-10 text-2xl tracking-[0.2em] text-[#c58cff]">
        CINEVA
      </div>
      <nav className="space-y-3">
        {navItems.map((item, index) => (
          <button
            key={item.label}
            className={`w-full rounded-2xl px-4 py-3 text-left transition ${
              index === 0
                ? "bg-[#c58cff]/20 text-white"
                : "text-[#aaa3b8] hover:bg-white/5 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
