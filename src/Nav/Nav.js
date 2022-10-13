import React from "react";
import { Header } from "./Header";
import { Wrapper } from "../Shared/Wrapper";
import { SmallerTitle } from "../Shared/Title";
import { Notifications } from "./Notifications";
import { Navbar } from "./Navbar";
import { NavLink } from "../Shared/StyledLink";

export default function Home() {
  return (
    <Header>
      <div
        className="head-wrapper"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          margin: "20px",
        }}
      >
        <SmallerTitle style={{ marginLeft: "15px", color: "#42855B" }}>
          Hola, usuario!
        </SmallerTitle>
        <Notifications style={{ marginRight: "15px" }}>
          {" "}
          Random noti
        </Notifications>
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
