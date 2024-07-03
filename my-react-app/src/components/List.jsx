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
      <h2 className="list-category">{itemCategory}</h2>
      <ul className="list-items">{listItems}</ul>
    </>
  );
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
