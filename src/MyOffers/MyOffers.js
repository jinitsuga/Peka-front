import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { UserInfo } from "../Context/UserContext";
import OfferCard from "../Shared/Cards/OfferCard";
import { BabyTitle } from "../Shared/Title";
import { SecondaryButton } from "../Shared/Button";

export default function MyOffers() {
  const userData = UserInfo();

  const [userOffers, setUserOffers] = React.useState([]);

  async function getOffers() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // const reqData = JSON.stringify({
    //   type: "product",
    // });

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      //   body: reqData,
      redirect: "follow",
      credentials: "include",
    };

    await fetch(
      "https://peka-api-wt2x.onrender.com/users/3/offers",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setUserOffers(JSON.parse(result));
      })

      .catch((error) => console.log("error", error));
  }

  return (
    <Wrapper>
      <BabyTitle style={{ width: "400px", fontSize: "16px" }}>
        Aquí encontrarás tus ofertas activas. Puedes verlas, editarlas, o
        eliminar las que ya no tengas o quieras ofrecer.
      </BabyTitle>
      <SecondaryButton
        onClick={() => {
          getOffers();
        }}
      >
        Ver mis ofertas
      </SecondaryButton>
    </Wrapper>
  );
}
