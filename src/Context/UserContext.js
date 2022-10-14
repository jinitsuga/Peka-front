import React, { useState, useContext } from "react";

const UserContext = React.createContext();
const UserUpdate = React.createContext();

const LoggedIn = React.createContext();
const LogUser = React.createContext();

export function UserInfo() {
  return useContext(UserContext);
}
export function UpdateUser() {
  return useContext(UserUpdate);
}

export function LoggedStatus() {
  return useContext(LoggedIn);
}

export function UpdateLogin() {
  return useContext(LogUser);
}

export function UserContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider value={userInfo}>
      <UserUpdate.Provider value={setUserInfo}>
        <LoggedIn.Provider value={loggedIn}>
          <LogUser.Provider value={setLoggedIn}>{children}</LogUser.Provider>
        </LoggedIn.Provider>
      </UserUpdate.Provider>
    </UserContext.Provider>
  );
}
