import { useEffect, useState } from "react";

import classes from "./Products.module.css";
import DropList from "../../UI/Droplist/DropList";
import Nav from "../../Header/Nav";
import CardItem from "../../UI/ProductCardItem/CardItem";
import SkeletonCard from "../../UI/ProductCardItem/SkeletonCard";

import { fetchProductsData } from "../../../store/products-actions";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.cart.items);
  const dataIsLoading = useSelector((state) => state.ui.dataIsLoading);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  let arr = [];
  for (const key in productsList) {
    arr.push({
      id: key,
      title: productsList[key].title,
      mainImg: productsList[key].main_img,
      secondImg: productsList[key].second_img,
      price: productsList[key].price,
      isFavourite: productsList[key].isFavourite,
    });
  }
  const [products, setProducts] = useState(arr);

  //
  //Drop list options
  //

  let priceFilter = {
    address: "Price",
    items: [
      { id: "priceOption0", label: "All", available: 13 },
      { id: "priceOption1", label: "under $99", available: 13 },
      { id: "priceOption2", label: "$100-$250", available: 40 },
      { id: "priceOption3", label: "$250-$750", available: 129 },
      { id: "priceOption4", label: "over $750", available: 3 },
    ],
  };

  const filterChangeHandler = (value) => {
    if (value === "All") {
      setProducts(arr);
    }
    if (value === "under $99") {
      setProducts(arr.filter((item) => item.price < 99));
    }
    if (value === "$100-$250") {
      setProducts(arr.filter((item) => item.price > 100 && item.price < 250));
    }
    if (value === "$250-$750") {
      setProducts(arr.filter((item) => item.price > 250 && item.price < 750));
    }
    if (value === "over $750") {
      setProducts(arr.filter((item) => item.price > 750));
    }
  };

  return (
    <>
      <header>
        <Nav />
      </header>
      <>
        <div className={classes.container}>
          <input type="checkbox" id={classes.check} />
          <label htmlFor={classes.check} className={classes["check-btn"]}>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M6 8a.5.5 0 00.5.5h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 00-.708.708L12.293 7.5H6.5A.5.5 0 006 8zm-2.5 7a.5.5 0 01-.5-.5v-13a.5.5 0 011 0v13a.5.5 0 01-.5.5z"
              />
            </svg>
          </label>
          <div className={classes.aside}>
            <div className={classes["aside-container"]}>
              <h1>Filter by</h1>
              <DropList data={priceFilter} onFilter={filterChangeHandler} />
            </div>
          </div>
          <div className={classes.main}>
            <nav className={classes["main-container"]}>
              {dataIsLoading ? (
                <ul>
                  <SkeletonCard cards={6} />
                </ul>
              ) : (
                <ul>
                  {products.map((item) => (
                    <li key={item.id}>
                      <CardItem
                        id={item.id}
                        actions="true"
                        title={item.title}
                        price={item.price}
                        mainImg={item.mainImg}
                        secondImg={item.secondImg}
                        isFavourite={item.isFavourite}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </nav>
          </div>
        </div>
      </>
    </>
  );
};

export default Products;
