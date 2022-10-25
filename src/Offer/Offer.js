import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { FormWrapper } from "../Shared/FormWrapper";
import { SecondaryButton } from "../Shared/Button";
import { Title } from "../Shared/Title";
import { FilterInput } from "../Shared/FilterInput";
import { GetProducts } from "../Context/UserContext";
import { DetailsWrapper, BadgesWrapper } from "../Shared/BadgeWrapper";
import { Badge } from "../Home/ItemBadge";
import Select from "../Shared/Select/Select";
import ListedProducts from "../Shared/ListedProducts";

export default function Offer() {
  const [offerProduct, setOfferProduct] = React.useState({
    type: "",
    quantity: "",
    unit: "",
    productId: "",
    description: "",
    pictures: "",
    badges: [],
  });
  const [offerInput, setOfferInput] = React.useState("");

  const [shownProducts, setShownProducts] = React.useState([]);

  const allProducts = GetProducts();

  const productNames = allProducts.map((prod) => prod.name);

  const filterProducts = (e) => {
    const filtered = allProducts.filter((prod) =>
      prod.name.includes(e.currentTarget.value.toLowerCase())
    );
    setShownProducts(filtered);
  };

  const selectItem = (e) => {
    setOfferProduct((oldProduct) => {
      return {
        ...oldProduct,
        badges: [e.target.textContent],
      };
    });
  };

  // Esconder la lista de productos con botón (tal vez dedicarle un state para eso)

  const offerBadges =
    offerProduct.badges.length > 0 &&
    offerProduct.badges.map((item, index) => <Badge key={index}>{item}</Badge>);

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
            setOfferInput(e.target.value);
            filterProducts(e);
          }}
        ></FilterInput>
        <DetailsWrapper>
          <BadgesWrapper>{offerBadges}</BadgesWrapper>
          <SecondaryButton
            style={{
              display: offerProduct.badges.length > 0 ? "flex" : "none",
            }}
          >
            Ofrecer
          </SecondaryButton>
        </DetailsWrapper>
        <ListedProducts
          addItem={selectItem}
          inputField={offerInput}
          filteredProducts={shownProducts}
          display="flex"
        ></ListedProducts>
        <Select options={["Kilos", "Gramos", "Atados"]}></Select>
      </FormWrapper>
    </Wrapper>
  );
}
