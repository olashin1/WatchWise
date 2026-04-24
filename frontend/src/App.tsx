import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./pages/login-page";
import LoginPage from "./pages/login-page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
