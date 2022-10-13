import "./App.css";
import React, { useState } from "react";
import RouteSwitch from "./Router/RouteSwitch";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <div className="App">
      <RouteSwitch loggedIn={loggedIn}></RouteSwitch>
    </div>
  );
}

export default App;
