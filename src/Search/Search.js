import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { BadgesWrapper, DetailsWrapper } from "../Shared/BadgeWrapper";
import { SecondaryButton } from "../Shared/Button";
import { Badge } from "../Home/ItemBadge";
import SearchBar from "../Shared/SearchBar";
import { GetProducts } from "../Context/UserContext";
import ListedProducts from "../Shared/ListedProducts";
import OfferCard from "./OfferCard";
import Checkbox from "../Shared/Checkbox";

export default function Search() {
  const [inputField, setInputField] = React.useState("");

  const [shownProducts, setShownProducts] = React.useState([]);

  const [offers, setOffers] = React.useState([]);

  const [searchProduct, setSearchProduct] = React.useState({
    type: "",
    quantity: "",
    unit: "",
    productId: "",
    description: "",
    pictures: "asd",
    badges: [],
  });

  const products = GetProducts();

  const checkboxData = [
    {
      name: "type-check",
      value: "product",
      label: "Producto",
      onChange: (e) => {
        handleCheckbox(e);
      },
    },
    {
      name: "type-check",
      value: "seedling",
      label: "Plantín",
      onChange: (e) => {
        handleCheckbox(e);
      },
    },
    {
      name: "type-check",
      value: "seeds",
      label: "Semillas",
      onChange: (e) => {
        handleCheckbox(e);
      },
    },
  ];
  const checkboxes = checkboxData.map((item) => <Checkbox {...item} />);

  const selectItem = (e) => {
    setSearchProduct((oldProduct) => {
      return {
        ...oldProduct,
        productId: e.target.id,
        badges: [e.target.textContent],
      };
    });
  };

  function handleCheckbox(e) {
    setSearchProduct((oldProduct) => {
      return { ...oldProduct, type: e.target.value };
    });
  }
  async function makeSearch() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const reqData = JSON.stringify({
      type: "product",
    });

    console.log(reqData);
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      //   body: reqData,
      redirect: "follow",
      credentials: "include",
    };

    await fetch("https://peka-api-wt2x.onrender.com/offers/", requestOptions)
      .then((response) => response.text())
      .then((result) => setOffers(JSON.parse(result)))
      .catch((error) => console.log("error", error));
  }
  console.log(offers);

  const offerCards =
    offers.length > 0 &&
    offers.map((produ, index) => {
      const name = products.find((item) => item.id === produ.ProductId).name;
      return (
        <OfferCard
          beige
          name={name}
          quantity={produ.quantity}
          qtyUnit={produ.quantityUnit}
          type={produ.type}
          description={produ.description}
          key={index}
        ></OfferCard>
      );
    });

  const itemBadges =
    searchProduct.badges.length > 0 &&
    searchProduct.badges.map((prod, index) => (
      <Badge key={index}>{prod}</Badge>
    ));

  return (
    <Wrapper>
      <SearchBar
        allProducts={products}
        setShownProds={setShownProducts}
        setStatusInput={setInputField}
        placeholder="ej: frutilla, apio, zanahoria..."
        label="Haz tu búsqueda!"
      ></SearchBar>
      <DetailsWrapper>
        <BadgesWrapper>{itemBadges}</BadgesWrapper>
      </DetailsWrapper>
      <ListedProducts
        addItem={selectItem}
        inputField={inputField}
        filteredProducts={shownProducts}
        display="flex"
      ></ListedProducts>
      <div>{checkboxes}</div>
      <SecondaryButton
        onClick={() => {
          makeSearch();
        }}
        style={{ display: searchProduct.badges.length > 0 ? "flex" : "none" }}
      >
        Buscar
      </SecondaryButton>
      <Wrapper
        style={{
          display: "grid",
          gridTemplateColumns: "1FR 1FR",
          gridTemplateRows: "1FR",
          alignItems: "center",
          paddingBottom: "10px",
          flexDirection: "row",
          marginTop: "45px",
        }}
      >
        {offerCards}{" "}
      </Wrapper>
    </Wrapper>
  );
}
