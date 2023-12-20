import { useState } from "react";
import "./App.css";
import DisplayPerson from "./components/DisplayPerson";
import ListItems from "./components/ListItems";
function App() {
  const btnStyle = {
    padding: "12px 15px",
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    background: "linear-gradient(30deg, rebeccapurple, magenta)",
    color: "#fff",
    border: "none",
  };
  const person = {
    name: "Joe",
    age: 45,
    favFood: "🍕",
  };
  const animals = ["🦓", "😺", "🐊", "🐦‍⬛"];

  //      State
  //       |      setState
  //       v        v             initial value
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
    // console.log(count);
  };
  // ---------------------------------------------------
  const [personObj, setPersonObj] = useState(person);
  const happyBirthday = () => {
    setPersonObj({ ...personObj, age: personObj.age + 1 });
  };
  return (
    <div className="App">
      {/* <h1>It's Working !!!</h1>
      <p>{JSON.stringify(person)}</p>/>*/}
      <DisplayPerson person={person} />
      <ListItems animals={animals} />
      <p>The count is: {count}</p>
      <button onClick={increase}>Increase +1</button>
      <hr />
      {JSON.stringify(personObj)}
      <p>This person's age is {} years old</p>
      <button style={btnStyle} onClick={happyBirthday}>
        Level UP
      </button>
    </div>
  );
}

export default App;
