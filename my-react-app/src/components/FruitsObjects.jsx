const FruitsObjects = () => {
  const fruits = [
    { id: 1, name: "apple", calories: 52.1, gram: 100 },
    { id: 2, name: "watermelon", calories: 30.4, gram: 100 },
    { id: 3, name: "banana", calories: 88.7, gram: 100 },
    { id: 4, name: "orange", calories: 47.1, gram: 100 },
  ];
  
  const lowCal = fruits.filter(fruit=>fruit.calories <80)
  const highCal = fruits.filter(fruit=>fruit.calories >=80)
  
  const ascOrdername= fruits.sort((a,b)=>a.name.localeCompare(b.name))//sort alphabet
  const descOrdername= fruits.sort((a,b)=>b.name.localeCompare(a.name))//reverse sort alphabet

  const ascOrderCal = fruits.sort((a,b)=>a.calories - b.calories);//sort numeric
  const descOrderCal = fruits.sort((a,b)=>b.calories - a.calories);//reverse sort numeric
  
  const listFruits = fruits.map((fruit) => {
    return (
      <li key={fruit.id}>
        Name:{fruit.name} Calories:{fruit.calories}
      </li>
    );
  });
  
  return <ul>{listFruits}</ul>;
};

export default FruitsObjects;
