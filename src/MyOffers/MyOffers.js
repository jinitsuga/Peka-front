import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { UserInfo } from "../Context/UserContext";
import OfferCard from "../Shared/Cards/OfferCard";
import { BabyTitle } from "../Shared/Title";
import { SecondaryButton } from "../Shared/Button";
import { GetProducts } from "../Context/UserContext";

export default function MyOffers() {
  const userData = UserInfo();
  const products = GetProducts();

  const [userOffers, setUserOffers] = React.useState([]);

  async function deleteOffer(id) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      //   body: reqData,
      redirect: "follow",
      credentials: "include",
    };
    await fetch(
      `https://peka-api-wt2x.onrender.com/offers/${id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log("error", err));
  }

  async function getOffers() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // const reqData = JSON.stringify({
    //   type: "offerct",
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
        setUserOffers(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  }

  const offers =
    userOffers.length > 0 &&
    userOffers.map((offer, index) => {
      const name = products.find((item) => item.id === offer.ProductId).name;
      return (
        <OfferCard
          name={name}
          key={index}
          quantity={offer.quantity}
          qtyUnit={offer.quantityUnit}
          type={offer.type}
          description={offer.description}
          id={index}
          delete={deleteOffer}
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
          getOffers();
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
