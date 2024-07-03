const Fruits = () => {
  const fruits = ["apple", "orange", "lemon", "strawberry"];
  const listItems = fruits.map((fruit) => <li>{fruit}</li>);
  return <ul>{listItems}</ul>;
};

export default Fruits;
