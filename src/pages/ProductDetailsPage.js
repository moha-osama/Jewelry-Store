import ProductDetails from "../components/Products/ProductDetails/ProductDetails";
import { useLoaderData, defer, Await } from "react-router-dom";

const ProductDetailsPage = () => {
  const { product } = useLoaderData();
  return (
    <Await resolve={product}>
      {(loadProductDetail) => <ProductDetails data={loadProductDetail} />}
    </Await>
  );
};

export default ProductDetailsPage;

async function loadProductDetail(id) {
  const response = await fetch(
    `https://jewelry-store-9b864-default-rtdb.firebaseio.com/products/${id}.json`
  );
  if (!response.ok) {
  }
  const responseData = await response.json();
  return responseData;
}

export async function loader({ params }) {
  const id = params.productId;
  return defer({
    product: await loadProductDetail(id),
  });
}
