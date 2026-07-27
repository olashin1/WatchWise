import { useEffect, useState } from "react";
import axios from "axios";

import type { Movie } from "../types/movie.interface";
import MovieCard from "../components/Dashboard/movie-card";
import Sidebar from "../components/Sidebar/sidebar";

export default function DiscoverPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const trending_day_url =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  useEffect(() => {
    function mapMovie(data: Movie) {
      return {
        id: data.id,
        title: data.title,
        overview: data.overview,
        poster_url: `https://image.tmdb.org/t/p/original${data.poster_url}`,
      };
    }
    async function fetchTrendingMovies() {
      try {
        const response = await axios.get<Movie[]>(
          "http://localhost:8000/discover",
        );
        setMovies(response.data);
      } catch (err) {
        console.error(`Error Occured: ${err}`);
      }
    }

    fetchTrendingMovies();
  }, []);
  return (
    <div className="flex min-h-screen bg-[#101014] text-white">
      <Sidebar />
      <main className="flex-1 px-10 py-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-2 text-4xl font-semibold">Trending Today</h1>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg-grid-cols-5">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
