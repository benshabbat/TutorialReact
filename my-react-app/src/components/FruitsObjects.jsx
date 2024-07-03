const FruitsObjects = () => {

    const fruits = [
        {id:1,name:'apple',calories:52.1,gram:100},
        {id:1,name:'watermelon',calories:30.4,gram:100},
        {id:1,name:'banana',calories:88.7,gram:100},
        {id:1,name:'orange',calories:47.1,gram:100},
    ]
    const listFruits = fruits.map(fruit=>{
        <li key={fruit.id}>Name:{fruit.name} Calories:{fruit.calories}</li>
    })
  return (
    <div>{listFruits}</div>
  )
}

export default FruitsObjects