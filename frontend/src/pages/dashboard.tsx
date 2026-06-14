// MovieDashboard.tsx
import { useMemo } from "react";
import type { Movie } from "../types/movie.interface";
import MovieSection from "../components/Dashboard/movie-section";
import Sidebar from "../components/Sidebar/sidebar";
import SearchBar from "../components/Dashboard/searchbar";

type Props = {
  recentlyWatched: Movie[];
  watchlist: Movie[];
  recommendations: Movie[];
};

export default function MovieDashboard({
  recentlyWatched,
  watchlist,
  recommendations,
}: Props) {
  return (
    <div className="min-h-screen bg-[#101014] text-[#f4efff] flex">
      <Sidebar />

      <main className="flex-1 overflow-hidden px-5 py-8 md:px-12">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-medium text-[#bda3db]">
            Good evening, Movie Lover
          </h1>
          <SearchBar />
        </header>

        <MovieSection title="Recently Watched" movies={recentlyWatched} />
        <MovieSection title="My Watchlist" movies={watchlist} />
        <MovieSection title="Recommended For You" movies={recommendations} />

        <footer className="mt-12 rounded-3xl border border-white/10 bg-white/3 p-8 text-center text-[#aaa3b8]">
          “Movies are a way of holding up a mirror to nature.”
          <br />
          <span className="text-[#c58cff]">— Tarkovsky</span>
        </footer>
      </main>
    </div>
  );
}
