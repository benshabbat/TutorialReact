import "./button,css"//css external
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
  return (
    //css inline
    <button style={buttonStyle}>Click me</button>
    // <button className={style.button}>Click me</button>//css module
  );
};

export default Button;
