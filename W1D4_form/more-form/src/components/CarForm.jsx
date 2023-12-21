import { useState } from "react";
import Display from "./Display";
const CarForm = ({ carList }) => {
  // STATE
  const [model, setModel] = useState("");
  const [hp, setHp] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [cars, setCars] = useState(carList);
  //   console.log(cars);

  const carHandler = (e) => {
    e.preventDefault();
    const carObj = {
      model: model,
      hp: hp,
      color: color,
    };
    // console.log(carObj);
    setCars([...cars, carObj]);
    setModel("");
    setHp("");
    setColor("#ffffff");
  };

  return (
    <fieldset>
      <legend>CarForm.jsx</legend>
      <form onSubmit={carHandler}>
        <p>model state: {JSON.stringify(model)}</p>
        <p>hp state: {JSON.stringify(hp)}</p>
        <p>color: {JSON.stringify(color)}</p>
        <p>Car List: {JSON.stringify(cars)}</p>
        <div>
          <label>Car Model: </label>
          <input onChange={(e) => setModel(e.target.value)} value={model} />
        </div>
        <div>
          <label>Horse Power: </label>
          <input
            type="number"
            onChange={(e) => setHp(e.target.value)}
            value={hp}
          />
        </div>
        <div>
          <label>Color: </label>
          <input
            type="color"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
        </div>
        <button>Create</button>
      </form>
      <Display cars={cars} />
    </fieldset>
  );
};

export default CarForm;
