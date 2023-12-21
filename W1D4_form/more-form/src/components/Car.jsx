import React from "react";
import styles from "./Car.module.css";
const Car = ({ data }) => {
  return (
    <details>
      <summary style={{ background: data.color }}>{data.model}</summary>
      <p>
        {data.model} is {data.hp} HP car. It's color is {data.color}
      </p>
    </details>
  );
};

export default Car;
