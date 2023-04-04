import classes from "./About.module.css";
import Button from "../UI/Button/Button";

const About = () => {
  return (
    <section className={classes["about-page"]}>
      <div className={classes.container}>
        <div className={classes.gallery}>
          <div className={classes["gallery-container"]}>
            <figure className={`${classes.item} ${classes["item_1"]}`}>
              <img
                src="https://media.istockphoto.com/id/1182639214/photo/middle-age-couple-in-jewelry-store.jpg?s=612x612&w=0&k=20&c=SX9O8zt0pK3bpPJEEb9qcjW11eleKvDImPpT5FvVf3M="
                alt="store"
              />
            </figure>
            <figure className={`${classes.item} ${classes["item_2"]}`}>
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/610e8172e7d6460b6551cf50/Attractive-middle-age-couple-in-jewelry-store/960x0.jpg"
                alt="store"
              />
            </figure>
          </div>
        </div>
        <div className={classes.summary}>
          <h3>About Us</h3>
          <h1>
            Designed by Our
            <br />
            Talented Staff
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <div>
            <Button color="black" title="Learn more" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
