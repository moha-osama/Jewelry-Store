import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchProductsData = () => {
  return async (dispatch) => {
    dispatch(uiActions.toggleLoadingStatus());
    const sendRequest = async () => {
      const response = await fetch(
        "https://jewelry-store-9b864-default-rtdb.firebaseio.com/products.json"
      );
      if (!response.ok) {
        throw new Error("can't get data");
      }
      const responseData = await response.json();
      return responseData;
    };
    try {
      const productsData = await sendRequest();
      dispatch(uiActions.toggleLoadingStatus());
      dispatch(
        cartActions.getItems({
          items: productsData,
        })
      );
    } catch (error) {
      throw new Error("can't get data!");
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://jewelry-store-9b864-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("can't get data");
      }
      const responseData = await response.json();
      return responseData;
    };
    try {
      const cartData = await sendRequest();
      dispatch(
        cartActions.getCartItems({
          items: cartData,
        })
      );
    } catch (error) {
      throw new Error("can't get data!");
    }
  };
};

export const sendItemToCart = (cartData) => {
  return async (dispatch) => {
    dispatch(uiActions.showLoadingStatus());
    const sendRequest = async () => {
      const response = await fetch(
        "https://jewelry-store-9b864-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cartData) }
      );
      if (!response.ok) {
        throw new Error("something went wromg");
      }
    };
    try {
      await sendRequest();
      dispatch(uiActions.showLoadingStatus());
      dispatch(
        uiActions.showNotification({
          status: "success",
          message: "saved successfully",
        })
      );
      setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 2000);
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          message: "can't save progress",
        })
      );
      setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 2000);
    }
  };
};
