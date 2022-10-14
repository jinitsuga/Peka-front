import "./App.css";
import React, { useState, useContext } from "react";
import RouteSwitch from "./Router/RouteSwitch";
import Nav from "./Nav/Nav";
import { UserContextProvider } from "./Context/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <RouteSwitch></RouteSwitch>
      </UserContextProvider>
    </div>
  );
}

export default App;
