import React from "react";
import { Wrapper } from "./Wrapper";
import { FilterInput } from "./FilterInput";
import ListedProducts from "./ListedProducts";
import { Badge } from "../Home/ItemBadge";

// filterInput
// detailswrapper, badgeswrapper
// listedProducts
// badge
// shownproducts state

export default function SearchBar(props) {
  const filterProducts = (e) => {
    const filtered = props.allProducts.filter((prod) => {
      const produ = {
        name: prod.name.normalize("NFD").replace(/\p{Diacritic}/gu, ""),
        id: prod.id,
      };
      return produ.name.includes(e.currentTarget.value.toLowerCase());
    });
    props.setShownProds(filtered);
    console.log(filtered);
  };
  return (
    <Wrapper>
      <FilterInput
        label={props.label}
        placeholder={props.placeholder}
        type={props.text}
        name={props.name}
        onChange={(e) => {
          console.log(e.target.value);
          props.setStatusInput(e.target.value);
          filterProducts(e);
        }}
      ></FilterInput>
    </Wrapper>
  );
}
