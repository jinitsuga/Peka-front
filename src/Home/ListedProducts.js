import React from "react";
import { ListItem } from "../Shared/ListItem";

export default function ListedProducts(props) {
  const products = props.filteredProducts.map((prod, index) => {
    return <ListItem key={index}>{prod.name}</ListItem>;
  });

  return (
    <ul
      style={{
        display: props.display,
        flexDirection: "column",
        listStyle: "none",
        paddingLeft: 0,
        marginTop: "-25px",
      }}
      className="listed-products"
    >
      {products}
    </ul>
  );
}
