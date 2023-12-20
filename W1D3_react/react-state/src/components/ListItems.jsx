import React from "react";
import Item from "./Item";
const ListItems = (props) => {
  const { animals } = props;
  return (
    <div>
      <ul>
        {animals.map((element, idx) => {
          return <Item element={element} idx={idx} />;
        })}
      </ul>
    </div>
  );
};

export default ListItems;
