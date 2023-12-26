import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Error from "./components/Error";
import Hero from "./components/Hero";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>React Router 🛣️</h1>
      <Link to={"/"}>Go Home</Link> |<Link to={"/form"}>Form</Link>
      <Routes>
        {/* Route 0 - Root Route */}
        <Route path="/" element={<h1>Landing Page 📟</h1>} />
        {/* Route 3 - hero  */}
        <Route path="/hero/:heroId" element={<Hero />} />
        {/* Route 4 - Form  */}
        <Route path="/form" element={<Form />} />
        {/* Route 5 - Error  */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
