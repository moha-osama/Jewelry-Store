import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import Button from "../UI/Button/Button";

const Header = () => {
  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.summary}>
          <p>Diamonds ring on white gold</p>
          <h1>
            High Quality Ring for <br />
            Unique Design
          </h1>
          <div className={classes.btn}>
            <Link to="/products">
              <Button title="Shop Now" />
            </Link>
          </div>
        </div>
        <div className={classes["img-box"]}>
          <img
            src="https://pics.clipartpng.com/Silver_Ring_with_Diamond_PNG_Clipart-305.png"
            alt="Jewelry"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
