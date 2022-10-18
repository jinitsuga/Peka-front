import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ResetPassword from "../ResetPassword/ResetPassword";
import Nav from "../Nav/Nav";
import { Home } from "../Home/Home";
import { LoggedStatus } from "../Context/UserContext";
import { SetProductsList } from "../Context/UserContext";

export default function RouteSwitch() {
  const userLoggedIn = LoggedStatus();
  const setProducts = SetProductsList();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Nav />
            <Home setProducts={setProducts} />
          </div>
        }
      ></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/passreset" element={<ResetPassword />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/search" element={<Login />}></Route>
      {/* <Route path="/home" element={<Nav />}></Route> */}
    </Routes>
  );
}
