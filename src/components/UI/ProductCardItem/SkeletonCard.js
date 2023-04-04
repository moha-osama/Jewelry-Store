import classes from "./SkeletonCard.module.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <li key={i}>
        <div className={classes["skeleton-card"]}>
          <div className={classes.container}>
            <div className={classes.img}>
              <Skeleton height="18rem" />
            </div>
            <div className={classes.info}>
              <Skeleton width="12rem" />
              <Skeleton width="8rem" />
            </div>
          </div>
        </div>
      </li>
    ));
};

export default SkeletonCard;
