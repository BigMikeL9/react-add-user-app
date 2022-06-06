import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";

import styles from "./Modal.module.scss";

// console.log(styles);

const ModalWindow = (props) => {
  // console.log(props);

  const classes = `${styles.modal} ${styles[props.className] || ""}`;

  const closeModalHandler = () => {
    props.onCloseModal();
  };

  return (
    <div className={classes}>
      <div className={styles.modal__backdrop} onClick={closeModalHandler} />

      <div className={styles.modal__inner}>
        <h2>{props.errorTitle}</h2>
        <p>{props.errorMessage}</p>

        <Button
          type="button"
          className={styles["modal__inner-button"]}
          onClick={closeModalHandler}
        >
          Okay
        </Button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalWindow
          className={props.className}
          errorTitle={props.errorTitle}
          errorMessage={props.errorMessage}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
