import classes from "./Footer.module.css";
import Button from "../UI/Button/Button";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.input}>
        <h1>
          Get more updates to Subscribe in <br /> our Newsletters
        </h1>
        <div className={classes["input-field"]}>
          <input placeholder="Your email address" />
          <div className={classes.btn}>
            <Button title="Subscribe" color="black" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
