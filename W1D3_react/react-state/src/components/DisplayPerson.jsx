import React from "react";
import Car from "./Car";
const DisplayPerson = (props) => {
  const { person } = props;
  return (
    <div>
      <p>Name: {person.name} </p>
      <p>Age: {person.age}</p>
      <p>Favorite Food:{person.favFood} </p>
      <p>
        Car: <Car />
      </p>
    </div>
  );
};

export default DisplayPerson;
