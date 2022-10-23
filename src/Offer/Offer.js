import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { FormWrapper } from "../Shared/FormWrapper";
import { Title } from "../Shared/Title";
import { FilterInput } from "../Shared/FilterInput";
import { GetProducts } from "../Context/UserContext";

export default function Offer() {
  const [offerProducts, setOfferProducts] = React.useState({
    type: "",
    quantity: "",
    unit: "",
    productId: "",
    description: "",
    pictures: "",
  });

  const [shownProducts, setShownProducts] = React.useState([]);

  const allProducts = GetProducts();

  return (
    <Wrapper>
      <FormWrapper>
        <FilterInput
          label="Ingresa el producto que quieras ofrecer"
          placeholder="ej: limones, albhaca, papas"
          type="text"
          name="make-offer"
        ></FilterInput>
      </FormWrapper>
    </Wrapper>
  );
}

// Make offer requests
// These offers go on the users client info
// It can receive some already selected products (by the user) from the Home component
