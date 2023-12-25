import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [hero, setHero] = useState(null);
  const [heroId, setHeroId] = useState(1);

  // Axios
  const axiosHeroes = () => {
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${heroId}.json`
      )
      .then((response) => {
        setHero(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axiosHeroes();
  }, [heroId]);

  // axiosHeroes();
  return (
    <div className="App">
      <h1>Super Heroes 🦸🦸‍♀️</h1>
      <button
        onClick={() => {
          setHeroId(heroId + 1);
        }}
      >
        Next
      </button>
      {hero && (
        <div>
          <h3>{hero.name}</h3>
          <img src={hero.images.md} alt={hero.name} />{" "}
        </div>
      )}
    </div>
  );
}

export default App;
