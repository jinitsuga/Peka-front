import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";

export default function RouteSwitch(props) {
  return (
    <Routes>
      <Route path="/" element={props.loggedIn ? null : <Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}
