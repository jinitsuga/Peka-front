import React from "react";
import { Header } from "./Header";
import { Wrapper } from "../Shared/Wrapper";
import { Title } from "../Shared/Title";
import { Notifications } from "./Notifications";
import { Navbar } from "./Navbar";
import { NavLink } from "../Shared/StyledLink";
import { UserInfo } from "../Context/UserContext";

export default function Nav() {
  const userName = UserInfo().name;

  return (
    <Header>
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
          Hola, usuario!
        </Title>
        <Notifications style={{ marginRight: "15px" }}> notif</Notifications>
      </div>
      <Navbar>
        <NavLink to="/">Ofertar</NavLink>
        <NavLink>Buscar</NavLink>
      </Navbar>
    </Header>
  );
}

// Header / Nav
// 'Homepage' con opción de hacer una busqueda o hacer una oferta
