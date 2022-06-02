import React from "react";
import Button from "../Button/Button";

import styles from "./Modal.module.scss";

console.log(styles);

const Modal = (props) => {
  console.log(props);

  return (
    <div className={styles.modal}>
      <div className={styles.modal__inner}>
        <h1>Invalid input</h1>
        <p>{props.errorMessage}</p>

        <Button type="button" className={styles["modal__inner-button"]}>
          Okay
        </Button>
      </div>
    </div>
  );
};

export default Modal;
