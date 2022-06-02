import React from "react";
import Card from "../UI/Card";

import styles from "./User.module.scss";

const User = (props) => {
  //   console.log(props);

  return (
    <div className={styles.user}>
      {`${props.username} (${props.age} Years Old)`}{" "}
    </div>
  );
};

export default User;
