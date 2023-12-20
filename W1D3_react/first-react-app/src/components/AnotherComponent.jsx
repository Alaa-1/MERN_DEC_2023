import React from "react";

const AnotherComponent = (props) => {
  console.log(props);
  return (
    <fieldset>
      <legend>AnotherCompoenent.js</legend>
      <div>
        <h2>Another Compoenents</h2>
        <p>First Name: {props.fname}</p>
        <p>Age: {props.age}</p>
      </div>
      <p>{JSON.stringify(props)}</p>
    </fieldset>
  );
};

export default AnotherComponent;
