import classes from "./Notification.module.css";

import { MdOutlineDone } from "react-icons/md";
import { MdOutlineSmsFailed } from "react-icons/md";

const Notification = (props) => {
  let statusClass;
  if (props.status === "error") {
    statusClass = classes.error;
  }
  if (props.status === "success") {
    statusClass = classes.success;
  }

  const cssClasses = `${classes.notification} ${statusClass}`;

  return (
    <div className={cssClasses}>
      <span>
        {props.status === "success" ? (
          <MdOutlineDone />
        ) : (
          <MdOutlineSmsFailed />
        )}
      </span>
      <p>{props.message}</p>
    </div>
  );
};

export default Notification;
