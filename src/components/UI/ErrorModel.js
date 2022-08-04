import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import Wrapper from "../Helpers/Wrapper";
import classes from "./ErrorModel.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const MyModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-portal")
      )}

      {ReactDOM.createPortal(
        <MyModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-portal")
      )}
    </React.Fragment>
  );
};

export default ErrorModel;
