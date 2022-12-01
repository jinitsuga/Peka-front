import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ResetPassword from "../ResetPassword/ResetPassword";
import Nav from "../Nav/Nav";
import Offer from "../Offer/Offer";
import Welcome from "../Welcome/Welcome";
import Search from "../Search/Search";
import { Home } from "../Home/Home";
import { LoggedStatus } from "../Context/UserContext";
import { SetProductsList } from "../Context/UserContext";
import MyOffers from "../MyOffers/MyOffers";

export default function RouteSwitch() {
  const userLoggedIn = LoggedStatus();
  const setProducts = SetProductsList();

  // ugly routes, needs some cleaning up

  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />}></Route>
      <Route
        path="/home"
        element={
          <div>
            <Nav />
            <Home setProducts={setProducts} />
          </div>
        }
      ></Route>
      <Route
        path="/"
        element={
          localStorage.loggedIn ? (
            <div>
              <Nav />
              <Home setProducts={setProducts} />
            </div>
          ) : (
            <div>
              <Welcome />
            </div>
          )
        }
      ></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/passreset" element={<ResetPassword />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/search"
        element={
          <div>
            <Nav />
            <Search />
          </div>
        }
      ></Route>
      <Route
        path="/makeoffer"
        element={
          <div>
            <Nav />
            <Offer />
          </div>
        }
      ></Route>
      <Route
        path="/myoffers"
        element={
          <div>
            <Nav />
            <MyOffers />
          </div>
        }
      ></Route>
      {/* <Route path="/home" element={<Nav />}></Route> */}
    </Routes>
  );
}
