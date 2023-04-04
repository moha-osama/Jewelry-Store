import classes from "./Error.module.css";
import Button from "../UI/Button/Button";
import Nav from "../Header/Nav";
import { useNavigate } from "react-router-dom";

const Error = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <Nav />
      </header>
      <div className={classes.error}>
        <div className={classes.container}>
          <h1>{props.title}</h1>
          <h3>{props.message}</h3>
          <Button
            title="Back"
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Error;
