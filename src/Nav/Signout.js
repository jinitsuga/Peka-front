import React from "react";
import { NavButton } from "../Shared/Button";
import { redirect } from "react-router-dom";
import { NavLink } from "../Shared/StyledLink";
import { useNavigate } from "react-router-dom";

export default function Signout() {
  const navigate = useNavigate();

  async function signOut() {
    await fetch("https://peka-api-wt2x.onrender.com/signout", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => {
        console.log("GO LOGIN PLS");
        navigate("/login");
      })
      .catch((error) => console.log("error", error));
  }

  async function handleSignout() {
    await signOut();
    localStorage.clear();
  }

  return (
    <NavButton
      onClick={() => {
        handleSignout();
      }}
    >
      Cerrar sesión
    </NavButton>
  );
}
