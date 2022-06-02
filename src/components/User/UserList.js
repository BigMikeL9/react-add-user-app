import React from "react";

import Card from "../UI/Card";
import User from "./User";

import styles from "./UserList.module.scss";

const UserList = (props) => {
  //   console.log(props);

  // -- Guard Clause -> Dont execute the rest of the code if no input in entered
  if (!props.userData) return;

  return (
    <Card className={styles["user-list"]}>
      {props.userData.map((data) => (
        <User key={data.key} username={data.username} age={data.age}></User>
      ))}
    </Card>
  );
};

export default UserList;
