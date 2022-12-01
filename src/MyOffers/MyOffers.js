import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { UserInfo } from "../Context/UserContext";
import OfferCard from "../Shared/Cards/OfferCard";
import { BabyTitle } from "../Shared/Title";
import { SecondaryButton } from "../Shared/Button";
import { GetProducts } from "../Context/UserContext";
import { getUserOffers } from "../helperFunctions";

export default function MyOffers() {
  const userData = UserInfo();
  const products = GetProducts();

  const [userOffers, setUserOffers] = React.useState([]);

  //  ---------------
  // ESCONDER BOTÓN DESPUES DE MOSTRAR OFERTAS
  // Agregar el ID del usuario a localStorage para no perderlo en refresh
  //  ---------------

  async function getOffers() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      credentials: "include",
    };

    await fetch(
      `https://peka-api-wt2x.onrender.com/users/${userData.id}/offers`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setUserOffers(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  }

  const offers =
    userOffers.length > 0 &&
    userOffers.map((offer, index) => {
      console.log(offer);
      return (
        <OfferCard
          owner={true}
          name={offer.product.name}
          key={index}
          productId={offer.product.id}
          quantity={offer.quantity}
          qtyUnit={offer.quantityUnit}
          type={offer.type}
          description={offer.description}
          id={index}
          offerId={offer.id}
          updateOffers={setUserOffers}
          userOffers={userOffers}
        />
      );
    });

  return (
    <Wrapper>
      <BabyTitle style={{ width: "400px", fontSize: "16px" }}>
        Aquí encontrarás tus ofertas activas. Puedes verlas, editarlas, o
        eliminar las que ya no tengas o quieras ofrecer.
      </BabyTitle>
      <SecondaryButton
        onClick={() => {
          getUserOffers("GET", userData.id, setUserOffers);
        }}
      >
        Ver mis ofertas
      </SecondaryButton>
      <Wrapper
        style={{
          display: "grid",
          gridTemplateColumns: "1FR 1FR",
          gridTemplateRows: "1FR",
          alignItems: "center",
          paddingBottom: "10px",
          flexDirection: "row",
          marginTop: "25px",
        }}
      >
        {offers}
      </Wrapper>
    </Wrapper>
  );
}
