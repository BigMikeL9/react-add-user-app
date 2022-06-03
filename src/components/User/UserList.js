import React from "react";

import Card from "../UI/Card";
import User from "./User";

import styles from "./UserList.module.scss";

const UserList = (props) => {
  //   console.log(props);

  // -- Guard Clause -> display message if no users shown
  if (!props.userData) {
    return (
      <Card>
        <p className={styles.message}>Please enter a Username and Age 😇</p>
      </Card>
    );
  }

  return (
    <Card>
      <ul className={styles["user-list"]}>
        {props.userData.map((data) => (
          <User key={data.key} username={data.username} age={data.age}></User>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
