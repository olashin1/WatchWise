import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const prompts = [
  "What are we feeling tonight?",
  "Find your next comfort movie...",
  "Cozy mystery or epic adventure?",
  "Something dreamy, dark, or dramatic?",
  "What kind of vibe tonight?",
];

export default function SearchBar() {
  const placeholder = useMemo(
    () => prompts[Math.floor(Math.random() * prompts.length)],
    [],
  );

  function search() {
    if (!query.trim()) return;

    navigate(`/search?query=${encodeURIComponent(query)}`);
  }

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-8 flex max-w-3xl items-center gap-4 rounded-3xl border border-[#c58cff] bg-[#1f1c2a]/60 px-6 py-4 shadow-[0_0_35px_rgba(197,140,255,0.16)]">
      <span className="text-2xl text-[#c58cff]">⌕</span>

      <input
        type="text"
        value={query}
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-transparent text-lg text-white outline-none placeholder:text-[#c58cff]"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            search();
          }
        }}
      />

      <span className="text-2xl text-[#c58cff]">✦</span>
    </div>
  );
}
