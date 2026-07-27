import type { Movie } from "../../types/movie.interface";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-2/3 overflow-hidden rounded-2xl border border-white/10 bg-[#171720]">
        <img
          src={movie.poster_url}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {/* Overview Overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-linear-to-t from-black/95 via-black/90 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
          <p className="line-clamp-6 text-xs leading-relaxed text-white">
            {movie.overview}
          </p>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="line-clamp-2 text-sm font-medium text-white">
          {movie.title}
        </h3>

        <div className="mt-1 text-sm text-[#aaa3b8]">
          <span>{movie.year}</span>
        </div>

        <p className="mt-1 text-xs text-[#aaa3b8]">{movie.genres}</p>
      </div>
    </article>
  );
}
