import { useState } from "react";

const Form = (props) => {
  // STATE
  const [sport, setSport] = useState("");
  const [olympics, setOlympics] = useState(["⚽", "🏀"]);
  const [error, setError] = useState("");
  // Logic
  const sportHandler = (e) => {
    e.preventDefault();
    setOlympics([...olympics, sport]);
    setSport("");
  };
  const checkLength = (value) => {
    setSport(value);
    if (value.length < 3) {
      setError("❌❌❌❌");
    } else {
      setError("");
    }
  };
  return (
    // Apperance
    <fieldset>
      <legend>Form.jsx</legend>
      <div>
        <form onSubmit={sportHandler}>
          <p>sport state: {sport} </p>
          <p>olympics state: {JSON.stringify(olympics)}</p>
          <div>
            <label>Sport: </label>
            <input
              onChange={(e) => checkLength(e.target.value)}
              value={sport}
            />
          </div>
          <p>{error}</p>
          <button>Submit</button>
        </form>
      </div>
    </fieldset>
  );
};

export default Form;
