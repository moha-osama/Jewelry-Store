import React from "react";
import classes from "./ProductDetails.module.css";

import Nav from "../../Header/Nav";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import CollectionSlides from "./CollectionSlides";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

const ProductDetails = ({ data }) => {
  const isLoading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(cartActions.addItemToCart(data));
  };

  const images = [data.main_img, data.second_img];

  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <div className={classes["container"]}>
        <div className={classes["preview-section"]}>
          <CollectionSlides images={images} />
        </div>
        <div className={classes["product-info"]}>
          <h1>{data.title}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore et dolore
            <br />
            magna aliqua. Ut enim ad minim veniam,
            <br /> quis laborum.
          </p>
          <h3>${data.price}</h3>
          <div className={classes.action}>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <button onClick={addItemToCartHandler}>Add To Cart</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
