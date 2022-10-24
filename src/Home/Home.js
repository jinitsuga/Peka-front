import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { FormWrapper } from "../Shared/FormWrapper";
import { FilterInput } from "../Shared/FilterInput";
import { Title } from "../Shared/Title";
import { GetProducts } from "../Context/UserContext";
import ListedProducts from "../Shared/ListedProducts";
import { Badge } from "./ItemBadge";
import { BadgesWrapper, DetailsWrapper } from "../Shared/BadgeWrapper";
import { SecondaryButton } from "../Shared/Button";

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
    sendItems: [],
    number: 0,
  });
  const [productOffer, setProductOffer] = React.useState({
    input: "",
    sendItems: [],
    number: 0,
  });

  const allProducts = GetProducts();

  const productNames = allProducts.map((prod) => prod.name);

  const offerItemBadges =
    productOffer.sendItems.length > 0 &&
    productOffer.sendItems.map((item, index) => {
      return <Badge key={index}>{item}</Badge>;
    });

  const searchItemBadges =
    productSearch.sendItems.length > 0 &&
    productSearch.sendItems.map((item, index) => {
      return <Badge key={index}>{item}</Badge>;
    });

  const filterProducts = (e, field) => {
    const filtered = allProducts.filter((prod) =>
      prod.name.includes(e.currentTarget.value.toLowerCase())
    );
    setShownProducts((oldShown) => {
      return { showOn: field, products: filtered };
    });
  };

  const addItem = (e) => {
    const addFunc =
      shownProducts.showOn === "offer" ? setProductOffer : setProductSearch;
    addFunc((oldData) => {
      if (oldData.sendItems.length >= 5) return oldData;
      return {
        ...oldData,
        sendItems: [...oldData.sendItems, e.target.textContent],
      };
    });
  };
  return (
    <Wrapper>
      <FormWrapper>
        <FilterInput
          style={{ marginBottom: "100px" }}
          label="¿Qué te gustaría ofrecer?"
          placeholder="ej: tomate, rúcula, apio..."
          onChange={(e) => {
            setProductOffer((oldOffer) => {
              return { ...oldOffer, input: e.target.value };
            });
            filterProducts(e, "offer");
          }}
        ></FilterInput>
        <DetailsWrapper>
          <BadgesWrapper>{offerItemBadges}</BadgesWrapper>
          <SecondaryButton
            style={{
              display: productOffer.sendItems.length > 0 ? "flex" : "none",
            }}
          >
            Ofrecer
          </SecondaryButton>
        </DetailsWrapper>
        <ListedProducts
          addItem={addItem}
          inputField={productOffer.input}
          filteredProducts={shownProducts.products}
          display={shownProducts.showOn === "offer" ? "flex" : "none"}
        ></ListedProducts>

        {/* SEARCHING  */}
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
        <DetailsWrapper>
          <BadgesWrapper> {searchItemBadges} </BadgesWrapper>
          <SecondaryButton
            style={{
              display: productSearch.sendItems.length > 0 ? "flex" : "none",
            }}
          >
            Buscar
          </SecondaryButton>
        </DetailsWrapper>
        <ListedProducts
          addItem={addItem}
          inputField={productSearch.input}
          filteredProducts={shownProducts.products}
          display={shownProducts.showOn === "search" ? "flex" : "none"}
        ></ListedProducts>
      </FormWrapper>
    </Wrapper>
  );
}
