import classes from "./Messages.module.css";
import MessageCard from "../UI/Message-Card/MessageCard";

const Messages = () => {
  return (
    <section className={classes["message-card"]}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>What Our Client's About Us</h1>
        </div>
        <div className={classes.messages}>
          <MessageCard />
          <MessageCard />
          <MessageCard />
        </div>
      </div>
    </section>
  );
};

export default Messages;
