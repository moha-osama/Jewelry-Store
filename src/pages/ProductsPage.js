import Products from "../components/Products/Products/Products";
import { Await, ScrollRestoration } from "react-router-dom";

const ProductsPage = () => {
  return (
    <>
      <Products />
      <ScrollRestoration />
    </>
  );
};

export default ProductsPage;
