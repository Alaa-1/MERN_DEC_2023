import React from "react";

const DisplayAnimal = (props) => {
  const { animals } = props;
  return (
    <fieldset>
      <legend>DisplayAnimal.js</legend>
      <ul>
        {animals.map((oneAnimal, index) => {
          return <li key={index}>{oneAnimal}</li>;
        })}
      </ul>
    </fieldset>
  );
};

export default DisplayAnimal;
