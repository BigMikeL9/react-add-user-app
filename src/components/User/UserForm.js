import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../Button/Button";
import Modal from "../UI/Modal";

import styles from "./UserForm.module.scss";

const UserForm = (props) => {
  // console.log(props);

  // -- 🟠 USING 'useRef' --
  const usernameRef = useRef();
  const ageRef = useRef();

  // -- 🔴 USING 'useState' [not best when we just want to read a value] --
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  const [modalState, setModalState] = useState({
    isError: false,
    errorTitle: "Error 💥",
    errorMessage: "An Error Ocurred!",
  });

  const closeModalHandler = () => {
    setModalState({
      isError: false,
      errorTitle: "Error 💥",
      errorMessage: "An Error Ocurred!",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // -- 🟠 USING 'useRef' --
    const enteredUsername = usernameRef.current.value;
    const enteredAge = ageRef.current.value;

    // -- onSubmit Validation --
    // -- If no input is entered
    if (enteredUsername.trim().length <= 0 || enteredAge.trim().length <= 0) {
      //  -- Show Modal & dont execute rest of code
      setModalState({
        isError: true,
        errorTitle: "Invalid Input(s) 🙀",
        errorMessage:
          "Please enter a valid name and age (non-empty values). 🙏",
      });

      return;
    }

    // -- if age entered is smaller that 0
    if (+enteredAge <= 0) {
      setModalState({
        isError: true,
        errorTitle: `Age Error 👵`,
        errorMessage: `Entered age is too low 👶.`,
      });

      return;
    }

    // -- Forward User data to parent ('App.js') --
    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };
    props.onSubmitUserData(userData);

    // -- Resetting inputs --
    // -- 🟠 USING 'useRef' [USE this hook when we just want to read a value and not manipulate it] --
    // 📝 NOTE ->  not good practice to manipulate 'value' through 'useRef', but its okay here with resetting input values
    usernameRef.current.value = "";
    ageRef.current.value = "";

    // -- 🔴 USING 'useState' [not best when we just want to read a value] --
    // setEnteredUsername("");
    // setEnteredAge("");
  };

  // -- 🔴 USING 'useState' [not best when we just want to read a value] --
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // -- 🔴 USING 'useState' [not best when we just want to read a value] --
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  return (
    <Card>
      {/* -- ⭐⭐ Conditionally Rendering Error Modal ⭐⭐ -- */}
      {modalState.isError && (
        <Modal
          className={"show-modal"}
          errorTitle={modalState.errorTitle}
          errorMessage={modalState.errorMessage}
          onCloseModal={closeModalHandler}
        />
      )}

      <form className={styles.form} onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          // -- 🟠 USING 'useRef' --
          ref={usernameRef}

          // -- 🔴 USING 'useState' --
          // onChange={usernameChangeHandler}
          // value={enteredUsername}
        />

        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          step="1"
          // -- 🟠 USING 'useRef' --
          ref={ageRef}

          // -- 🔴 USING 'useState' --
          // onChange={ageChangeHandler}
          // value={enteredAge}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
