import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ResetPassword from "../ResetPassword/ResetPassword";
import Nav from "../Nav/Nav";
import { Home } from "../Home/Home";
import { LoggedStatus } from "../Context/UserContext";

export default function RouteSwitch() {
  const userLoggedIn = LoggedStatus();

  return (
    <Routes>
      <Route
        path="/"
        element={
          localStorage.logged ? (
            <div>
              <Nav />
              <Home />
            </div>
          ) : (
            <Login />
          )
        }
      ></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/passreset" element={<ResetPassword />}></Route>
      <Route path="/login" element={<Login />}></Route>
      {/* <Route path="/home" element={<Nav />}></Route> */}
    </Routes>
  );
}
