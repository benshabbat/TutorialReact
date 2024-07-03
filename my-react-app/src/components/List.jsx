import React from "react";

const List = (props) => {
  const itemList = props.items;
  const itemCategory = props.category;

  const listItems = itemList.map((item) => {
    return (
      <li key={item.id}>
        Name:{item.name} Calories:{item.calories}
      </li>
    );
  });
  return (
    <>
      <h2>{itemCategory}</h2>
      <ul>{listItems}</ul>
    </>
  );
};

export default List;
