import "./App.css";
import CarForm from "./components/CarForm";
function App() {
  const carList = [
    {
      model: "Tesla",
      hp: 700,
      color: "#ffffff",
    },
    {
      model: "Ford",
      hp: 350,
      color: "#808080",
    },
  ];
  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
        <CarForm carList={carList} />
      </div>
    </fieldset>
  );
}

export default App;
