import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import SearchBar from "../Shared/SearchBar";
import { GetProducts } from "../Context/UserContext";
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
    </Wrapper>
  );
}
