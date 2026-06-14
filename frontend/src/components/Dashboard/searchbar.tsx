import { useMemo } from "react";

const prompts = [
  "What are we feeling tonight?",
  "Find your next comfort movie...",
  "Cozy mystery or epic adventure?",
  "Something dreamy, dark, or dramatic?",
  "What kind of vibe tonight?",
];

type SearchBarProps = {
  onSearch?: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const placeholder = useMemo(
    () => prompts[Math.floor(Math.random() * prompts.length)],
    [],
  );

  return (
    <div className="mx-auto mt-8 flex max-w-3xl items-center gap-4 rounded-3xl border border-[#c58cff] bg-[#1f1c2a]/60 px-6 py-4 shadow-[0_0_35px_rgba(197,140,255,0.16)]">
      <span className="text-2xl text-[#c58cff]">⌕</span>

      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch?.(e.target.value)}
        className="w-full bg-transparent text-lg text-white outline-none placeholder:text-[#c58cff]"
      />

      <span className="text-2xl text-[#c58cff]">✦</span>
    </div>
  );
}
