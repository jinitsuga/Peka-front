import React from "react";
import { NavButton } from "../Shared/Button";
import { NavLink } from "../Shared/StyledLink";
import { Navigate } from "react-router-dom";

export default function Signout() {
  async function signOut() {
    await fetch("https://peka-api-wt2x.onrender.com/signout", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => {
        localStorage.clear();
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <NavButton
      onClick={() => {
        signOut();
      }}
    >
      Sign out
    </NavButton>
  );
}
