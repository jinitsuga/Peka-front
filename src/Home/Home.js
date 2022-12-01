import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { TextLink } from "../Shared/StyledLink";
import { FilterInput } from "../Shared/FilterInput";
import { GetProducts } from "../Context/UserContext";
import ListedProducts from "../Shared/ListedProducts";
import { Badge } from "./ItemBadge";
import { BadgesWrapper, DetailsWrapper } from "../Shared/BadgeWrapper";
import { SecondaryButton } from "../Shared/Button";
import { SmallerTitle } from "../Shared/Title";
import { Text } from "../Shared/Text";

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
    const filtered = allProducts.filter((prod) => {
      const prodName = prod.name
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "");
      return prodName.includes(e.currentTarget.value.toLowerCase());
    });
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
      <DetailsWrapper
        style={{
          flexDirection: "column",
          paddingBottom: "25px",
          marginBotton: "45px",
          borderBottom: "solid 4px",
        }}
      >
        <SmallerTitle>¿Qué te gustaría ofrecer?</SmallerTitle>
        <Text style={{ margin: "0px" }}>
          Si tienes vegetales para intercambiar, puedes dirigirte a{" "}
          <TextLink to="/makeoffer">Ofertar</TextLink> y completar los datos con
          lo que quieras ofrecer!
        </Text>
      </DetailsWrapper>
      {/* SEARCHING  */}
      <DetailsWrapper style={{ flexDirection: "column" }}>
        <SmallerTitle>¿Qué estás buscando?</SmallerTitle>
        <Text>
          Si buscas algo en particular, o prefieres simplemente mirar lo que la
          gente está ofreciendo, puedes dirigirte a
          <TextLink to="/search"> Buscar </TextLink> y realizar tu búsqueda!
        </Text>
      </DetailsWrapper>
    </Wrapper>
  );
}
