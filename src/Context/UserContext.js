import React, { useState, useContext } from "react";

const UserContext = React.createContext();
const UserUpdate = React.createContext();

const LoggedIn = React.createContext();
const LogUser = React.createContext();

const Products = React.createContext();
const SetProducts = React.createContext();

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

export function GetProducts() {
  return useContext(Products);
}
export function SetProductsList() {
  return useContext(SetProducts);
}

export function UserContextProvider({ children }) {
  React.useEffect(() => {
    const reqOptions = { method: "GET", redirect: "follow" };

    fetch("https://peka-api-wt2x.onrender.com/products", reqOptions)
      // .then((response) => response.text())
      .then((result) => result.text())
      .then((result) => JSON.parse(result))
      .then((products) => setProducts(products))
      .catch((err) => console.log("error", err));

    // setProducts(productsList);
  }, []);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [products, setProducts] = useState([]);

  return (
    <UserContext.Provider value={userInfo}>
      <UserUpdate.Provider value={setUserInfo}>
        <LoggedIn.Provider value={loggedIn}>
          <LogUser.Provider value={setLoggedIn}>
            <Products.Provider value={products}>
              <SetProducts.Provider value={setProducts}>
                {children}
              </SetProducts.Provider>
            </Products.Provider>
          </LogUser.Provider>
        </LoggedIn.Provider>
      </UserUpdate.Provider>
    </UserContext.Provider>
  );
}
