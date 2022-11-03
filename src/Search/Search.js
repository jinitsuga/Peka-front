import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { BadgesWrapper, DetailsWrapper } from "../Shared/BadgeWrapper";

import { Badge } from "../Home/ItemBadge";
import SearchBar from "../Shared/SearchBar";
import { GetProducts } from "../Context/UserContext";
import ListedProducts from "../Shared/ListedProducts";
// label={props.label}
// placeholder={props.placeholder}
// type={props.text}
// name={props.name}
// onChange={(e) => {
//   console.log(e.target.value);
//   props.setState(e.target.value);

export default function Search() {
  const [inputField, setInputField] = React.useState("");

  const [shownProducts, setShownProducts] = React.useState([]);

  const [searchProduct, setSearchProduct] = React.useState({
    type: "",
    quantity: "",
    unit: "",
    productId: "",
    description: "",
    pictures: "asd",
    badges: [],
  });

  const selectItem = (e) => {
    setSearchProduct((oldProduct) => {
      return {
        ...oldProduct,
        productId: e.target.id,
        badges: [e.target.textContent],
      };
    });
  };
  const itemBadges =
    searchProduct.badges.length > 0 &&
    searchProduct.badges.map((prod, index) => (
      <Badge key={index}>{prod}</Badge>
    ));
  // Renderizar ListedProducts debajo, pasandole filteredProducts como 'filteredProducts'

  const products = GetProducts();
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
    </Wrapper>
  );
}
