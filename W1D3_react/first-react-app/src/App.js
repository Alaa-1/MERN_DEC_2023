import "./App.css";
import AnotherComponent from "./components/AnotherComponent";
import DisplayAnimal from "./components/DisplayAnimal";
function App() {
  const pi = 3.14;
  const message = "Hello from the outside!";
  const animals = ["🦁", "🦒", "🦓", "🐊"];
  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
        <h1>Hello React ! 👋</h1>
        <p>Pi = {pi}</p>
        <h2>{message}</h2>
        {animals}
        <AnotherComponent fname={"John"} age={55} />
        {/* <AnotherComponent />
        <AnotherComponent />
        <AnotherComponent />
        <AnotherComponent /> */}
        <DisplayAnimal animals={animals} message={message} />
      </div>
    </fieldset>
  );
}

export default App;
