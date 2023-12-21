import "./App.css";
import Form from "./components/Form";
import AnotherForm from "./components/AnotherForm";
function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
        <h1>React Forms 📄</h1>
      </div>
      <Form />
      <AnotherForm />
    </fieldset>
  );
}

export default App;
