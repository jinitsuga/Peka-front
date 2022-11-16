import { SecondaryButton } from "./Button";
import React from "react";
import { Wrapper } from "./Wrapper";

export default function Confirmation(props) {
  return (
    <div
      style={{
        display: props.show ? "flex" : "none",
        position: "fixed",
        bottom: "0",
        top: "0",
        right: "0",
        left: "0",
        background: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <Wrapper>
        <SecondaryButton>Sí, eliminar</SecondaryButton>
        <SecondaryButton>No!</SecondaryButton>
      </Wrapper>
    </div>
  );
}
