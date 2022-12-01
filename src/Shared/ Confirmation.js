import { SecondaryButton } from "./Button";
import React from "react";
import { BabyTitle } from "./Title";
import { DetailsWrapper } from "./BadgeWrapper";
import { deleteOffer } from "../helperFunctions";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          position: "fixed",
          left: "40%",
          top: "30%",
          bottom: "50%",
          zIndex: "2",
        }}
      >
        <BabyTitle
          style={{
            color: "#D2D79F",
            border: "solid 1px",
            fontSize: "22px",
            padding: "10px",
          }}
        >
          ¿Eliminar oferta?
        </BabyTitle>
        <DetailsWrapper>
          <SecondaryButton
            style={{ margin: "10px" }}
            onClick={() => {
              deleteOffer(
                props.id,
                props.index,
                props.userOffers,
                props.updateOffers
              );
              props.setDeleteOffer(false);
            }}
          >
            Sí, eliminar
          </SecondaryButton>
          <SecondaryButton
            style={{ margin: "10px" }}
            onClick={() => {
              props.setDeleteOffer(false);
            }}
          >
            No!
          </SecondaryButton>
        </DetailsWrapper>
      </div>
    </div>
  );
}
