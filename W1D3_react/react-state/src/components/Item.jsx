import React from "react";
import styles from "./Item.module.css";
const Item = (props) => {
  const { element, idx } = props;
  return (
    <li key={idx} className={styles.itm}>
      {element}
    </li>
  );
};

export default Item;
