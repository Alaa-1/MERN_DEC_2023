import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Create from "./components/Create";
import Update from "./components/Update";
import OneMovie from "./components/OneMovie";
function App() {
  return (
    <div className="App">
      <h1>Movies Home 📽️</h1>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies/create" element={<Create />} />
        <Route path="/movies/:id" element={<OneMovie />} />
        <Route path="/movies/:id/update" element={<Update />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
