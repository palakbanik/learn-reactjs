import React from "react";

const FoodItems = ({ items }) => {
  const emptyMessage = items.length === 0 ? <h6>I'm still hungry.</h6> : null;

  return (
    <>
      {emptyMessage}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
