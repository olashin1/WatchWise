import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import type { Movie } from "../types/movie.interface";
import MovieCard from "../components/Dashboard/movie-card";
import Sidebar from "../components/Sidebar/sidebar";
import SearchBar from "../components/Dashboard/searchbar";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState<Movie[]>([]);

  const query = searchParams.get("query");

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.post<Movie[]>(
        "http://localhost:8000/recommend/search",
        {
          query,
        },
      );

      setMovies(response.data);
    }

    fetchMovies();
  }, [query]);
  return (
    <div className="flex min-h-screen bg-[#101014] text-white">
      <Sidebar />

      <main className="flex-1 px-10 py-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-2 text-4xl font-semibold">Recommendations</h1>

          <p className="mb-10 text-[#aaa3b8]">
            Based on "<span className="text-[#c58cff]">{query}</span>"
          </p>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <SearchBar />
        </div>
      </main>
    </div>
  );
}
