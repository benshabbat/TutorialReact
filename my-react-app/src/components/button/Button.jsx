import style from "./button.module.css";

const Button = () => {
  const buttonStyle = {
    backgroundColor: "blueviolet",
    borderRadius: "20%",
    border: "1px solid gray",
    color: "wheat",
    padding: "5px 10px",
    cursor: "pointer",
  };
  return (
    <button style={buttonStyle}>Click me</button>
    // <button className={style.button}>Click me</button>
  );
};

export default Button;
