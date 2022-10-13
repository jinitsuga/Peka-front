import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ResetPassword from "../ResetPassword/ResetPassword";
import Nav from "../Nav/Nav";

export default function RouteSwitch(props) {
  return (
    <Routes>
      <Route path="/" element={props.loggedIn ? <Nav /> : <Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/passreset" element={<ResetPassword />}></Route>
      <Route path="/home" element={<Nav />}></Route>
    </Routes>
  );
}
