import { useState } from "react";
import classes from "./Info.module.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Info = () => {
  const [start, setStart] = useState(false);
  return (
    <section className={classes.info}>
      <ScrollTrigger onEnter={() => setStart(true)}>
        <nav>
          {start && (
            <ul>
              <li>
                <p>
                  <CountUp
                    start={0}
                    end={12}
                    duration={1}
                    style={{ color: "black" }}
                  />
                </p>
                <h6>All over World</h6>
              </li>
              <hr />
              <li>
                <p>
                  <CountUp
                    start={0}
                    end={20}
                    duration={1}
                    style={{ color: "black" }}
                  />
                </p>
                <h6>Customer</h6>
              </li>
              <hr />
              <li>
                <p>
                  <CountUp
                    start={0}
                    end={150}
                    duration={1}
                    style={{ color: "black" }}
                  />
                </p>
                <h6>Product Available</h6>
              </li>
              <hr />
              <li>
                <p>
                  <CountUp
                    start={0}
                    end={1000}
                    duration={1}
                    style={{ color: "black" }}
                  />
                </p>
                <h6>Product Reviews</h6>
              </li>
            </ul>
          )}
        </nav>
      </ScrollTrigger>
    </section>
  );
};

export default Info;
