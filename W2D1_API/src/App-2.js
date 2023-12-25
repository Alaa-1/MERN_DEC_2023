import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [heroes, setHeroes] = useState([]);

  // vanilla JS fetch
  const fetchHeroes = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json") // promise
      .then((serverResponse) => serverResponse.json())
      .then((jsonResponse) => setHeroes(jsonResponse)) // successfull
      .catch((error) => console.log("Something went wrong ❌❌❌❌", error)); // errors
  };
  // Axios
  const axiosHeroes = () => {
    axios
      .get("https://akabab.github.io/superhero-api/api/all.json")
      .then((response) => {
        setHeroes(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axiosHeroes();
  }, []);

  // axiosHeroes();
  return (
    <div className="App">
      <h1>Super Heroes 🦸🦸‍♀️</h1>
      {/* <button onClick={fetchHeroes}>Fetch Heroes</button>
      <button onClick={axiosHeroes}>Axios Heroes</button> */}
      {/* {JSON.stringify(heroes)} */}
      <table>
        <thead>
          <th>name</th>
          <th>image</th>
          <th>power</th>
          <th>publisher</th>
        </thead>
        <tbody>
          {heroes.map((oneHero) => {
            return (
              <tr key={oneHero.id}>
                <td>{oneHero.name}</td>
                <td>
                  <img
                    src={oneHero.images.sm}
                    alt={oneHero.name}
                    width="80px"
                  />
                </td>
                <td>{oneHero.powerstats.power}</td>
                <td>{oneHero.biography.publisher}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
