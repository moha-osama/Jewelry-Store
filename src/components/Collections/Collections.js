import classes from "./Collections.module.css";
import Button from "../UI/Button/Button";

const Collections = () => {
  return (
    <section className={classes["collection-page"]}>
      <div className={classes.container}>
        <div className={classes.summary}>
          <h1>
            Our Store is filled with amazing &<br />
            Modern collections
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et do.
          </p>
          <div className={classes.btn}>
            <Button title="Learn more &rarr;" color="black" />
          </div>
        </div>
        <div className={classes.collection}>
          <figure className={`${classes.item} ${classes["item_1"]}`}>
            <img
              src="https://static-cdn5.vigbo.tech/u3760/21552/blog/4963071/4125837/52980196/500-leonovaolga-saltstudio-eb1083d4c6a08a59268c58280bc2c8b2.jpg"
              alt="ring"
            />
          </figure>
          <figure className={`${classes.item} ${classes["item_2"]}`}>
            <img
              src="https://media.istockphoto.com/id/163122066/photo/round-diamonds-necklace.jpg?s=612x612&w=0&k=20&c=WGZd7NPAX1FyYPrjjnIM-c8jinMHT-GAIF4BLMYjtD4="
              alt="ring"
            />
          </figure>
          <figure className={`${classes.item} ${classes["item_3"]}`}>
            <img
              src="https://i.pinimg.com/originals/6d/b5/2d/6db52d76b167b48903b4a61228622ed3.jpg"
              alt="ring"
            />
          </figure>
          <figure className={`${classes.item} ${classes["item_4"]}`}>
            <img
              src="https://otherplanet.photo/wp-content/uploads/2022/06/crystals-bracelet-packshot-on-black-background-and-reflection.jpg"
              alt="ring"
            />
            <div className={classes.overlay}>
              <h1>120+ Collections</h1>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Collections;
