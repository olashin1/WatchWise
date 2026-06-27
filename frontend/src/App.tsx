import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./pages/login-page";
import LoginPage from "./pages/login-page";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landing-page";

import {
  recentlyWatched,
  watchlist,
  recommendations,
} from "./mockData/mockMovies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* <Route path="/discover" element={<Discover />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/history" element={<History />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
