import classes from "./CardItem.module.css";

import { Link } from "react-router-dom";

const CardItem = (props) => {
  const { slidesToShow, actions, title, price, mainImg, secondImg, id } = props;

  let className;
  if (slidesToShow === "3") {
    className = classes["big-card"];
  }
  if (slidesToShow === "4") {
    className = classes["small-card"];
  }
  if (actions === "true") {
    className = classes["product-card"];
  }

  return (
    <div className={`${classes["standard-container"]} ${className}`}>
      <div className={classes.card}>
        <div className={classes["img-box"]}>
          <img className={classes.alternative} src={secondImg} alt="ring" />
          <img className={classes.main} src={mainImg} alt="ring" />
        </div>
        <div className={classes.info}>
          <div className={classes.title}>
            <Link to={`/products/${id}`}>
              <h1>{title}</h1>
            </Link>
          </div>
          {actions === "true" && <p>${price}</p>}
        </div>
      </div>
      {actions === "true" || <span className={classes.price}>${price}</span>}
    </div>
  );
};

export default CardItem;
