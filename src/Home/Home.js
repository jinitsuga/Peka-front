import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { FormWrapper } from "../Shared/FormWrapper";
import { FilterInput } from "../Shared/FilterInput";
import { Title } from "../Shared/Title";
import { GetProducts } from "../Context/UserContext";
import ListedProducts from "./ListedProducts";

export function Home(props) {
  // React.useEffect(() => {
  //   const productsList = [
  //     {
  //       name: "acelga",
  //     },
  //     {
  //       name: "ajo",
  //     },
  //     {
  //       name: "albhaca",
  //     },
  //     {
  //       name: "apio",
  //     },
  //     {
  //       name: "arándano",
  //     },
  //     {
  //       name: "arveja",
  //     },
  //     {
  //       name: "berenjena",
  //     },
  //     {
  //       name: "boniato",
  //     },
  //     {
  //       name: "brócoli",
  //     },
  //     {
  //       name: "calabacín",
  //     },
  //     {
  //       name: "cebolla",
  //     },
  //     {
  //       name: "chaucha",
  //     },
  //     {
  //       name: "choclo",
  //     },
  //     {
  //       name: "ciruela",
  //     },
  //     {
  //       name: "coliflor",
  //     },
  //     {
  //       name: "durazno",
  //     },
  //     {
  //       name: "espinaca",
  //     },
  //     {
  //       name: "frutilla",
  //     },
  //     {
  //       name: "higo",
  //     },
  //     {
  //       name: "kiwi",
  //     },
  //     {
  //       name: "lechuga",
  //     },
  //     {
  //       name: "limón",
  //     },
  //     {
  //       name: "mandarina",
  //     },
  //     {
  //       name: "manzana",
  //     },
  //     {
  //       name: "melón",
  //     },
  //     {
  //       name: "membrillo",
  //     },
  //     {
  //       name: "morrón",
  //     },
  //     {
  //       name: "nabo",
  //     },
  //     {
  //       name: "naranja",
  //     },
  //     {
  //       name: "papa",
  //     },
  //     {
  //       name: "pelón",
  //     },
  //     {
  //       name: "pepino",
  //     },
  //     {
  //       name: "pera",
  //     },
  //     {
  //       name: "perejil",
  //     },
  //     {
  //       name: "pomelo",
  //     },
  //     {
  //       name: "puerro",
  //     },
  //     {
  //       name: "rabanito",
  //     },
  //     {
  //       name: "remolacha",
  //     },
  //     {
  //       name: "repollo",
  //     },
  //     {
  //       name: "sandía",
  //     },
  //     {
  //       name: "tomate",
  //     },
  //     {
  //       name: "uva",
  //     },
  //     {
  //       name: "zanahoria",
  //     },
  //     {
  //       name: "zapallito",
  //     },
  //     {
  //       name: "zapallito",
  //     },
  //   ];

  //   props.setProducts(productsList);
  // }, []);

  const [shownProducts, setShownProducts] = React.useState({
    showOn: "",
    products: [],
  });
  const [productSearch, setProductSearch] = React.useState({
    input: "",
    sendSearch: [],
  });
  const [productOffer, setProductOffer] = React.useState({
    input: "",
    sendOffer: [],
  });

  const products = GetProducts();

  // Revisit async function later when server's running
  // async function getProducts() {
  //   await fetch("https://peka-api-wt2x.onrender.com/products").then((result) =>
  //     JSON.parse(result)
  //   );
  // }

  const filterProducts = (e, field) => {
    const filtered = products.filter((prod) =>
      prod.name.includes(e.currentTarget.value.toLowerCase())
    );
    setShownProducts((oldShown) => {
      return { showOn: field, products: filtered };
    });

    console.log(shownProducts);
  };

  return (
    <Wrapper>
      <FormWrapper>
        <FilterInput
          style={{ marginBottom: "100px" }}
          label="¿Qué te gustaría ofrecer?"
          placeholder="ej: tomate, rúcula, apio..."
          onChange={(e) => {
            // setShownProducts(e.currentTarget.value);
            setProductOffer((oldOffer) => {
              return { ...oldOffer, input: e.target.value };
            });
            filterProducts(e, "offer");
            console.log(productOffer);
          }}
        ></FilterInput>
        <ListedProducts
          inputField={productOffer.input}
          filteredProducts={shownProducts.products}
          display={shownProducts.showOn === "offer" ? "flex" : "none"}
        ></ListedProducts>
        <FilterInput
          label="¿Qué estás buscando?"
          placeholder="ej: lechuga, limones, menta..."
          onChange={(e) => {
            filterProducts(e, "search");
            setProductSearch((oldSearch) => {
              return { ...oldSearch, input: e.target.value };
            });
          }}
        ></FilterInput>
        <ListedProducts
          inputField={productSearch.input}
          filteredProducts={shownProducts.products}
          display={shownProducts.showOn === "search" ? "flex" : "none"}
        ></ListedProducts>
      </FormWrapper>
    </Wrapper>
  );
}
