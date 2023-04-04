import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label>
        <input {...props} placeholder=" " required />
        <span>{props.label}</span>
      </label>
    </div>
  );
};

export default Input;
