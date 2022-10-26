import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { FormWrapper } from "../Shared/FormWrapper";
import { SecondaryButton } from "../Shared/Button";
import { Title, SmallerTitle } from "../Shared/Title";
import { InputQty } from "../Shared/InputField";
import { FilterInput } from "../Shared/FilterInput";
import { GetProducts } from "../Context/UserContext";
import { DetailsWrapper, BadgesWrapper } from "../Shared/BadgeWrapper";
import { Badge } from "../Home/ItemBadge";
import Select from "../Shared/Select/Select";
import ListedProducts from "../Shared/ListedProducts";
import RadioBtn from "../Shared/Radio";

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
    const filtered = allProducts.filter((prod) => {
      const produ = {
        name: prod.name.normalize("NFD").replace(/\p{Diacritic}/gu, ""),
        id: prod.id,
      };
      return produ.name.includes(e.currentTarget.value.toLowerCase());
    });
    setShownProducts(filtered);
    console.log(filtered);
  };

  const selectItem = (e) => {
    setOfferProduct((oldProduct) => {
      return {
        ...oldProduct,
        productId: e.target.id,
        badges: [e.target.textContent],
      };
    });
  };
  const handleQty = (e) => {
    setOfferProduct((oldProduct) => {
      return { ...oldProduct, [e.target.name]: e.target.value };
    });
  };
  const handleRadio = (e) => {
    setOfferProduct((oldProduct) => {
      return { ...oldProduct, type: e.target.value };
    });
    console.log(offerProduct);
  };

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
        </DetailsWrapper>
        <ListedProducts
          addItem={selectItem}
          inputField={offerInput}
          filteredProducts={shownProducts}
          display="flex"
        ></ListedProducts>
        <SmallerTitle style={{ marginTop: "5px" }}>Cantidad:</SmallerTitle>
        <DetailsWrapper style={{ width: "100%" }}>
          <InputQty
            onChange={(e) => {
              handleQty(e);
            }}
            name="quantity"
            min="0"
            type="number"
          ></InputQty>
          <Select
            onChange={(e) => {
              handleQty(e);
            }}
            name="unit"
            options={["--Elige unidad--", "Kilos", "Gramos", "Atados"]}
          ></Select>
        </DetailsWrapper>
        <RadioBtn
          value="producto"
          onChange={(e) => {
            handleRadio(e);
          }}
          name="plantin-semilla"
          label="Producto"
          checked={offerProduct.type === "producto"}
        ></RadioBtn>
        <RadioBtn
          value="plantin"
          onChange={(e) => {
            handleRadio(e);
          }}
          name="plantin-semilla"
          label="Plantín"
          checked={offerProduct.type === "plantin"}
        ></RadioBtn>
        <RadioBtn
          value="semilla"
          name="plantin-semilla"
          label="Semilla"
          onChange={(e) => {
            handleRadio(e);
          }}
          checked={offerProduct.type === "semilla"}
        ></RadioBtn>
        <SecondaryButton
          style={{
            display: offerProduct.badges.length > 0 ? "flex" : "none",
            marginTop: "20px",
          }}
        >
          Ofrecer
        </SecondaryButton>
      </FormWrapper>
    </Wrapper>
  );
}
