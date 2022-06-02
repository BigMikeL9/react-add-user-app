import React from "react";

import styles from "./Card.module.scss";

const Card = (props) => {
  // console.log(props);

  const classes = `${styles.card} ${props.className || ""}`;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
