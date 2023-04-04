import classes from "./MessageCard.module.css";

const MessageCard = () => {
  return (
    <div className={classes["message-card"]}>
      <div className={classes["img-box"]}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
          alt="user"
        />
      </div>
      <div className={classes.info}>
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default MessageCard;
