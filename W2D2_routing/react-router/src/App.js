import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <h1>React Router 🛣️</h1>
      <Link to={"/home"}>Go Home</Link> |<Link to={"/about"}>About</Link>
      <Routes>
        {/* Route 1 - Home */}
        <Route path="/home" element={<Home />} />
        {/* Route 2 - About  */}
        <Route path="/about" element={<About />} />
        {/* Route 3 - hero  */}
        <Route
          path="/hero/:heroId"
          element={
            <>
              <Hero /> <About />
            </>
          }
        />

        {/* Route 3 - Error  */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
