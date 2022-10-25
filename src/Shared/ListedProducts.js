import React from "react";
import { ListItem } from "./ListItem";
import { CloseButton } from "./Button";

export default function ListedProducts(props) {
  React.useEffect(() => {
    setListShown(props.inputField !== "" ? true : false);
  }, [props.inputField]);

  const [listShown, setListShown] = React.useState(true);

  const handleClick = (e) => setListShown(!listShown);

  const products = props.filteredProducts.map((prod, index) => {
    return (
      <ListItem onClick={props.addItem} key={index}>
        {prod.name}
      </ListItem>
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
          width: "100px",
          borderRadius: "5px",
        }}
        className="listed-products"
      >
        {products}
      </ul>
    </div>
  );
}
