// LandingPage.tsx
import SearchBar from "../components/Dashboard/searchbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#101014] text-[#f4efff]">
      <nav className="flex items-center justify-between px-6 py-6 md:px-12">
        <h1 className="text-xl font-semibold text-[#c58cff]">WatchWise</h1>

        <button className="rounded-full border border-white/10 px-5 py-2 text-sm text-[#f4efff] hover:bg-white/10 transition">
          Sign In
        </button>
      </nav>

      <main className="flex min-h-[80vh] items-center justify-center px-6">
        <section className="w-full max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#8f7aa8]">
            Personalized Movie Discovery
          </p>

          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
            Discover movies that feel like your favorites.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#aaa3b8]">
            WatchWise learns what you like and helps you find movies that match
            your taste over time.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-full bg-[#c58cff] px-6 py-3 font-medium text-[#101014] hover:bg-[#bda3db] transition">
              Get Started
            </button>

            <button className="rounded-full border border-white/10 px-6 py-3 font-medium text-[#f4efff] hover:bg-white/10 transition">
              Learn More
            </button>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-[#c58cff]">Search</h3>
              <p className="text-sm text-[#aaa3b8]">
                Find movies using TMDB-powered search.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-[#c58cff]">Learn</h3>
              <p className="text-sm text-[#aaa3b8]">
                Your ratings shape your taste profile.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-[#c58cff]">Recommend</h3>
              <p className="text-sm text-[#aaa3b8]">
                Get better suggestions the more you watch.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
