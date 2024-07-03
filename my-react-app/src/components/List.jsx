import PropTypes from "prop-types";

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

List.proptypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
