import React from "react";
import { ProductListItem } from "./ListItem";
import { CloseButton } from "./Button";

export default function ListedProducts(props) {
  React.useEffect(() => {
    setListShown(props.inputField !== "" ? true : false);
  }, [props.inputField]);

  const [listShown, setListShown] = React.useState(true);

  const handleClick = (e) => setListShown(!listShown);

  const products = props.filteredProducts.map((prod, index) => {
    return (
      <ProductListItem id={prod.id} onClick={props.addItem} key={prod.id}>
        {prod.name}
      </ProductListItem>
    );
  });

  return (
    <div style={{ display: listShown ? "block" : "none" }}>
      <CloseButton
        onClick={(e) => {
          handleClick(e);
        }}
        style={{ width: "20px", height: "20px" }}
      >
        X
      </CloseButton>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          listStyle: "none",
          paddingLeft: 0,
          padding: "5px",
          marginTop: "5px",
          background: "#D2D79F",
          maxWidth: "200px",
          flexWrap: "wrap",
          borderRadius: "5px",
        }}
        className="listed-products"
      >
        {products}
      </ul>
    </div>
  );
}
