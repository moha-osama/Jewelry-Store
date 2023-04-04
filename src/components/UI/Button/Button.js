import classes from "./Button.module.css";

const Button = (props) => {
  let className;
  if (props.color === "black") {
    className = classes.blackBtn;
  } else {
    className = classes.whiteBtn;
  }

  return (
    <button {...props} className={`${classes.button} ${className}`}>
      {props.title}
    </button>
  );
};

export default Button;
