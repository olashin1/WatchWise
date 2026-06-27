import Sidebar from "../components/Sidebar/sidebar";
import SearchBar from "../components/Dashboard/searchbar";

export default function MovieDashboard() {
  return (
    <div className="min-h-screen bg-[#101014] text-[#f4efff] flex">
      <Sidebar />

      <main className="flex-1 flex items-center justify-center px-6">
        <section className="w-full max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#8f7aa8]">
            WatchWise
          </p>

          <h1 className="mb-6 text-4xl md:text-6xl font-semibold text-[#f4efff]">
            What do you want to watch?
          </h1>

          <p className="mb-10 text-[#aaa3b8] text-lg">
            Search for movies, discover recommendations, and build your taste
            profile.
          </p>

          <SearchBar />

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-[#aaa3b8]">
            <button className="rounded-full border border-white/10 px-5 py-2 hover:bg-white/10">
              Recently Watched
            </button>

            <button className="rounded-full border border-white/10 px-5 py-2 hover:bg-white/10">
              My Watchlist
            </button>

            <button className="rounded-full border border-white/10 px-5 py-2 hover:bg-white/10">
              Recommendations
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
