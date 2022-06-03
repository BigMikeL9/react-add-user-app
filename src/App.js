import React, { useState } from "react";

import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";

function App() {
  const [userData, setUserData] = useState("");

  const submitUserDataHandler = (data) => {
    // console.log(data);

    const userData = {
      key: Date.now().toString(),
      username: data.username,
      age: data.age,
    };

    // -- ⭐⭐⭐⭐ --
    setUserData((prevUserData) => [userData, ...prevUserData]);
  };

  return (
    <>
      <UserForm onSubmitUserData={submitUserDataHandler} />

      <UserList userData={userData} />
    </>
  );
}

export default App;
