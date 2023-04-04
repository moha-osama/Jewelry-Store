import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

const Backdrop = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      className={classes.backdrop}
      onClick={() => {
        dispatch(uiActions.toggleCart());
      }}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
