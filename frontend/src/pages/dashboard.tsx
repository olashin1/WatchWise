// MovieDashboard.tsx
import { useMemo } from "react";
import type { Movie } from "../types/movie.interface";

type Props = {
  recentlyWatched: Movie[];
  watchlist: Movie[];
  recommendations: Movie[];
};

const prompts = [
  "What are we feeling tonight?",
  "Find your next comfort movie...",
  "Cozy mystery or epic adventure?",
  "Something dreamy, dark, or dramatic?",
  "What kind of vibe tonight?",
];

export default function MovieDashboard({
  recentlyWatched,
  watchlist,
  recommendations,
}: Props) {
  const placeholder = useMemo(
    () => prompts[Math.floor(Math.random() * prompts.length)],
    [],
  );

  return (
    <div className="min-h-screen bg-[#101014] text-[#f4efff] flex">
      <aside className="w-60 hidden md:flex flex-col border-r border-white/10 bg-[#111117]/90 p-6">
        <div className="mb-10 text-2xl tracking-[0.2em] text-[#c58cff]">
          CINEVA
        </div>

        <nav className="space-y-3">
          {[
            "Home",
            "Discover",
            "Watchlist",
            "History",
            "Genres",
            "Settings",
          ].map((item, index) => (
            <button
              key={item}
              className={`w-full rounded-2xl px-4 py-3 text-left transition ${
                index === 0
                  ? "bg-[#c58cff]/20 text-white"
                  : "text-[#aaa3b8] hover:bg-white/5 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="mt-auto text-sm text-[#aaa3b8]">Movie Lover</div>
      </aside>

      <main className="flex-1 overflow-hidden px-5 py-8 md:px-12">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-medium text-[#bda3db]">
            Good evening, Movie Lover
          </h1>

          <div className="mx-auto mt-8 flex max-w-3xl items-center gap-4 rounded-3xl border border-[#c58cff] bg-[#1f1c2a]/60 px-6 py-4 shadow-[0_0_35px_rgba(197,140,255,0.16)]">
            <span className="text-2xl text-[#c58cff]">⌕</span>
            <input
              className="w-full bg-transparent text-lg text-white outline-none placeholder:text-[#c58cff]"
              placeholder={placeholder}
            />
            <span className="text-2xl text-[#c58cff]">✦</span>
          </div>

          <p className="mt-3 text-sm text-[#aaa3b8]">
            New vibe every time you refresh
          </p>
        </header>

        <MovieSection title="Recently Watched" movies={recentlyWatched} />
        <MovieSection title="My Watchlist" movies={watchlist} />
        <MovieSection title="Recommended For You" movies={recommendations} />

        <footer className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center text-[#aaa3b8]">
          “Movies are a way of holding up a mirror to nature.”
          <br />
          <span className="text-[#c58cff]">— Tarkovsky</span>
        </footer>
      </main>
    </div>
  );
}

function MovieSection({ title, movies }: { title: string; movies: Movie[] }) {
  return (
    <section className="mb-12">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-medium">{title}</h2>
        <button className="text-sm text-[#c58cff] hover:text-white">
          View all ›
        </button>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <article className="group overflow-hidden rounded-2xl">
      <div className="aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 bg-[#171720]">
        <img
          src={movie.poster_url}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-3">
        <h3 className="line-clamp-2 text-sm font-medium text-white">
          {movie.title}
        </h3>

        <div className="mt-1 flex items-center justify-between text-sm text-[#aaa3b8]">
          <span>{movie.year}</span>
          <span className="text-[#c58cff]">★ {movie.rating}</span>
        </div>

        <p className="mt-1 text-xs text-[#aaa3b8]">{movie.genre}</p>
      </div>
    </article>
  );
}
