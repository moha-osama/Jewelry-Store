import classes from "./Cart.module.css";

import CartItem from "./CartItem";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import { AiOutlineClose } from "react-icons/ai";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const toggleCartHadnler = () => {
    dispatch(uiActions.toggleCart());
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Modal>
      <div className={classes.cart}>
        <div className={classes.header}>
          <h2>Your Shopping Cart</h2>
          <span onClick={toggleCartHadnler}>
            <AiOutlineClose />
          </span>
        </div>
        <div className={classes.title}>
          <p>Item</p>
          <p>Info</p>
          <p>Quantity</p>
        </div>
        <nav>
          <ul>
            {cartItems ? (
              cartItems.map((item) => (
                <li key={item.id}>
                  <CartItem
                    id={item.id}
                    mainImg={item.mainImg}
                    price={item.price}
                    title={item.title}
                    quantity={item.quantity}
                  />
                </li>
              ))
            ) : (
              <p style={{ textAlign: "center" }}>No Items Found</p>
            )}
          </ul>
        </nav>
        <div className={classes.footer}>
          <p>
            Total: <strong>$</strong>
            {totalPrice.toFixed(0)}
          </p>
          <div className={classes.actions}>
            <Button title="Check Out" color="black" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
