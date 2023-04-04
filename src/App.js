import { Suspense, lazy, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Root from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailsPage, {
  loader as productDetailsLoader,
} from "./pages/ProductDetailsPage";
import AuthPage, { action as authAction } from "./pages/AuthPage";
import Cart from "./components/Cart/Cart";
import Notification from "./components/UI/Notification/Notification";

import { useSelector, useDispatch } from "react-redux";
import { sendItemToCart, fetchProductsData } from "./store/products-actions";

const ProductsPage = lazy(() => import("./pages/ProductsPage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />} />
      <Route path="products">
        <Route
          index={true}
          element={
            <Suspense>
              <ProductsPage />
            </Suspense>
          }
        />
        <Route
          path=":productId"
          id="product-detail"
          element={<ProductDetailsPage />}
          loader={productDetailsLoader}
          errorElement={<ErrorPage />}
        />
      </Route>
      <Route
        path="auth"
        element={<AuthPage />}
        action={authAction}
        errorElement={<ErrorPage />}
      />
    </>
  )
);

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const cartVisible = useSelector((state) => state.ui.cartVisible);
  const notification = useSelector((state) => state.ui.notification);

  const cart = useSelector((state) => state.cart.cart);
  const cartChanged = useSelector((state) => state.cart.cartChanged);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cartChanged) {
      dispatch(sendItemToCart(cart));
    }
  }, [cartChanged, dispatch, cart]);

  return (
    <>
      {cartVisible && <Cart />}
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
        />
      )}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
