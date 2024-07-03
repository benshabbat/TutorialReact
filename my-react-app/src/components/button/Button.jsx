import "./button.css"//css external
import style from "./button.module.css";//css module

const Button = () => {
    
    //css inline
  const buttonStyle = {
    backgroundColor: "blueviolet",
    borderRadius: "20%",
    border: "1px solid gray",
    color: "wheat",
    padding: "5px 10px",
    cursor: "pointer",
  };

  const handleClick=()=>{
    console.log("Clicked")
  }
  return (
  
    <button style={buttonStyle} onClick={handleClick}>Click me</button>  //css inline
    // <button className={style.button}>Click me</button>//css module
    // <button className="button">Click me</button>//css external  //css inline
  );
};

export default Button;
