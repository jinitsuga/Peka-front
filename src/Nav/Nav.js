import React from "react";
import { Header } from "./Header";
import { Wrapper } from "../Shared/Wrapper";
import { Title } from "../Shared/Title";
import { Link } from "react-router-dom";
import { Notifications } from "./Notifications";
import { Navbar } from "./Navbar";
import { NavLink } from "../Shared/StyledLink";
import Signout from "./Signout";
import { UserInfo, LoggedStatus } from "../Context/UserContext";

export default function Nav() {
  const userLoggedIn = LoggedStatus();

  const userData = UserInfo();
  console.log(userData);

  return (
    <Header style={{ borderBottom: "solid 4px #483838 " }}>
      <div
        className="head-wrapper"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          margin: "20px",
        }}
      >
        <Title style={{ marginTop: "0", marginLeft: "25px", color: "#42855B" }}>
          Hola, {localStorage.name}!
        </Title>
        <Notifications style={{ marginRight: "15px" }}>
          <Link style={{ textDecoration: "none" }} to="/login">
            <Signout>Sign out</Signout>
          </Link>
        </Notifications>
      </div>
      <Navbar>
        <NavLink>Ofertar</NavLink>
        <NavLink>Buscar</NavLink>
      </Navbar>
    </Header>
  );
}
