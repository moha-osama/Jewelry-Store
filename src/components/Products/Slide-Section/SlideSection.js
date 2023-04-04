import classes from "./SlideSection.module.css";
import Slider from "react-slick";
import CardItem from "../../UI/ProductCardItem/CardItem";

import { useSelector } from "react-redux";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideSection = (props) => {
  const { slidesToShow, header, actions } = props;

  const productsList = useSelector((state) => state.cart.items);

  let dataArr = [];
  for (const key in productsList) {
    dataArr.push({
      id: key,
      title: productsList[key].title,
      mainImg: productsList[key].main_img,
      secondImg: productsList[key].second_img,
      price: productsList[key].price,
      isFavourite: productsList[key].isFavourite,
    });
  }

  let slidesToShowNum = Number(slidesToShow);

  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShowNum,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: slidesToShowNum - 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className={classes["slide-section"]}>
      <div className={classes.header}>
        <h1>{header}</h1>
        <p>See More &rarr;</p>
      </div>
      <nav>
        <ul>
          <Slider {...setting}>
            {dataArr.map((item) => (
              <li key={item.id}>
                <CardItem
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  mainImg={item.mainImg}
                  secondImg={item.secondImg}
                  isFavourite={item.isFavourite}
                  slidesToShow={slidesToShow}
                  actions={actions}
                />
              </li>
            ))}
          </Slider>
        </ul>
      </nav>
    </section>
  );
};

export default SlideSection;
