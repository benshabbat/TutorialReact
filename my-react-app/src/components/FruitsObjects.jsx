import List from "./List";

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
  

  
  return<List items={fruits} category="Fruits"/>
  
  

};



export default FruitsObjects;
