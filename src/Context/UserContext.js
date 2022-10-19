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
    const productsList = [
      {
        name: "acelga",
      },
      {
        name: "ajo",
      },
      {
        name: "albhaca",
      },
      {
        name: "apio",
      },
      {
        name: "arándano",
      },
      {
        name: "arveja",
      },
      {
        name: "berenjena",
      },
      {
        name: "boniato",
      },
      {
        name: "brócoli",
      },
      {
        name: "calabacín",
      },
      {
        name: "cebolla",
      },
      {
        name: "chaucha",
      },
      {
        name: "choclo",
      },
      {
        name: "ciruela",
      },
      {
        name: "coliflor",
      },
      {
        name: "durazno",
      },
      {
        name: "espinaca",
      },
      {
        name: "frutilla",
      },
      {
        name: "higo",
      },
      {
        name: "kiwi",
      },
      {
        name: "lechuga",
      },
      {
        name: "limón",
      },
      {
        name: "mandarina",
      },
      {
        name: "manzana",
      },
      {
        name: "melón",
      },
      {
        name: "membrillo",
      },
      {
        name: "morrón",
      },
      {
        name: "nabo",
      },
      {
        name: "naranja",
      },
      {
        name: "papa",
      },
      {
        name: "pelón",
      },
      {
        name: "pepino",
      },
      {
        name: "pera",
      },
      {
        name: "perejil",
      },
      {
        name: "pomelo",
      },
      {
        name: "puerro",
      },
      {
        name: "rabanito",
      },
      {
        name: "remolacha",
      },
      {
        name: "repollo",
      },
      {
        name: "sandía",
      },
      {
        name: "tomate",
      },
      {
        name: "uva",
      },
      {
        name: "zanahoria",
      },

      {
        name: "zapallito",
      },
    ];

    setProducts(productsList);
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
