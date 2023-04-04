import classes from "./CartItem.module.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { mainImg, price, title, quantity, id } = props;

  const removeItemHandler = () => {
    dispatch(cartActions.removeCartItem(id));
  };
  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({ mainImg, price, title, quantity, id })
    );
  };

  return (
    <div className={classes["cart-item"]}>
      <div className={classes["img-box"]}>
        <img src={mainImg} alt={title} />
      </div>
      <div className={classes.info}>
        <h1>{title}</h1>
        <p>${price}</p>
      </div>
      <div className={classes.actions}>
        <button className={classes["left-btn"]} onClick={removeItemHandler}>
          -
        </button>
        <span>{quantity}</span>
        <button className={classes["right-btn"]} onClick={addItemHandler}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
