import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../Button/Button";
import Modal from "../UI/Modal";

import styles from "./UserForm.module.scss";

const UserForm = (props) => {
  // console.log(props);

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    // -- onSubmit Validation
    if (enteredUsername.trim().length <= 0) {
      //  -- Show Modal & dont execute rest of code
      console.log("Please Enter a Username 😡");

      const errorMessage = `Please enter a valid name  (non-empty values). 🙏`;

      console.log(errorMessage);

      return;
    }

    if (enteredAge.trim().length <= 0) {
      //  -- Show Modal & dont execute rest of code
      console.log("Please Enter a AGE 😟");

      const errorMessage = `Please enter a valid age (non-empty values). 😡`;
      return <Modal errorMessage={errorMessage} />;
    }

    // -- Push User data to parent ('App.js')
    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };
    props.onSubmitUserData(userData);

    // -- Resetting inputs
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <label>Username</label>
        <input
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />

        <label>Age(Years)</label>
        <input
          type="number"
          step="1"
          onChange={ageChangeHandler}
          value={enteredAge}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
