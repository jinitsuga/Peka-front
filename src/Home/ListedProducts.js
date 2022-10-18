import React from "react";
import { ListItem } from "../Shared/ListItem";

export default function ListedProducts(props) {
  const products = props.filteredProducts.map((prod) => {
    return <ListItem>{prod.name}</ListItem>;
  });

  return <ul className="listed-products">{products}</ul>;
}
