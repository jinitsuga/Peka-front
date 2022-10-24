import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { FormWrapper } from "../Shared/FormWrapper";
import { SecondaryButton } from "../Shared/Button";
import { Title } from "../Shared/Title";
import { FilterInput } from "../Shared/FilterInput";
import { GetProducts } from "../Context/UserContext";
import { DetailsWrapper, BadgesWrapper } from "../Shared/BadgeWrapper";
import { Badge } from "../Home/ItemBadge";
import ListedProducts from "../Shared/ListedProducts";

export default function Offer() {
  const [offerProducts, setOfferProducts] = React.useState({
    type: "",
    quantity: "",
    unit: "",
    productId: "",
    description: "",
    pictures: "",
  });
  const [offerInput, setOfferInput] = React.useState("");

  const [shownProducts, setShownProducts] = React.useState([]);

  const allProducts = GetProducts();

  const productNames = allProducts.map((prod) => prod.name);

  const filterProducts = (e) => {
    const filtered = productNames.filter((prod) =>
      prod.name.includes(e.currentTarget.value.toLowerCase())
    );
    setShownProducts(filtered);
  };

  return (
    <Wrapper>
      <FormWrapper>
        <FilterInput
          label="Ingresa el producto que quieras ofrecer"
          placeholder="ej: limones, albhaca, papas"
          type="text"
          name="make-offer"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        ></FilterInput>
        {/* <ListedProducts></ListedProducts> */}
      </FormWrapper>
    </Wrapper>
  );
}

// Make offer requests
// These offers go on the users client info
// It can receive some already selected products (by the user) from the Home component
