import React, { useState } from "react";

import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";
import Wrapper from "./components/Helpers/Wrapper";

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
    <Wrapper>
      <UserForm onSubmitUserData={submitUserDataHandler} />

      <UserList userData={userData} />
    </Wrapper>
  );
}

export default App;
