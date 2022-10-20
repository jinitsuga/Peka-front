import React from "react";
import { ListItem } from "../Shared/ListItem";

export default function ListedProducts(props) {
  const products = props.filteredProducts.map((prod, index) => {
    return (
      <ListItem onClick={props.addItem} key={index}>
        {prod.name}
      </ListItem>
    );
  });

  return (
    <ul
      style={{
        display: props.inputField !== "" ? props.display : "none",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        listStyle: "none",
        paddingLeft: 0,
        padding: "5px",
        marginTop: "5px",
        background: "#D2D79F",
        width: "100px",
        borderRadius: "5px",
      }}
      className="listed-products"
    >
      {products}
    </ul>
  );
}
