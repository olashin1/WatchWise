// components/MovieSection.tsx

import MovieCard from "./movie-card";
import type { Movie } from "../../types/movie.interface";

type MovieSectionProps = {
  title: string;
  movies: Movie[];
};

export default function MovieSection({ title, movies }: MovieSectionProps) {
  return (
    <section className="mb-12">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-medium">{title}</h2>

        <button className="text-sm text-[#c58cff] transition hover:text-white">
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
