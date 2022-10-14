import "./App.css";
import React from "react";
import RouteSwitch from "./Router/RouteSwitch";
import Nav from "./Nav/Nav";
import { UserContextProvider } from "./Context/UserContext";
import { LoggedStatus } from "./Context/UserContext";

function App() {
  const userLoggedIn = LoggedStatus();

  return (
    <div className="App">
      <UserContextProvider>
        <RouteSwitch></RouteSwitch>
      </UserContextProvider>
    </div>
  );
}

export default App;
