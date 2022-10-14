import React, { useState, useContext } from "react";

const UserContext = React.createContext();
const UserUpdate = React.createContext();

export function UserInfo() {
  return useContext(UserContext);
}
export function UpdateUser() {
  return useContext(UserUpdate);
}

export function UserContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider value={userInfo}>
      <UserUpdate.Provider value={setUserInfo}>{children}</UserUpdate.Provider>
    </UserContext.Provider>
  );
}
