import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import YJI2026Page from "./pages/YJI2026Page";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yji-2026" element={<YJI2026Page />} />
      </Routes>
    </div>
  );
}

export default App;
