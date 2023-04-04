import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Icon.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Icon = () => {
  const [className, setClassName] = useState(classes.hidden);

  function onScroll() {
    let y = window.scrollY;
    if (y >= 800) {
      setClassName(classes.shown);
    } else {
      setClassName(classes.hidden);
    }
  }
  window.addEventListener("scroll", onScroll);

  return (
    <Link to="/products">
      <div className={`${classes.icon} ${className}`}>
        <div className={classes.contianer}>
          <AiOutlineShoppingCart />
        </div>
      </div>
    </Link>
  );
};

export default Icon;
