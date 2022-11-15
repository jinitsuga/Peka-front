import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { FormWrapper } from "../Shared/FormWrapper";
import { SecondaryButton } from "../Shared/Button";
import { SmallerTitle } from "../Shared/Title";
import { InputQty } from "../Shared/InputField";
import { FilterInput } from "../Shared/FilterInput";
import { GetProducts } from "../Context/UserContext";
import { DetailsWrapper, BadgesWrapper } from "../Shared/BadgeWrapper";
import { Badge } from "../Home/ItemBadge";
import Select from "../Shared/Select/Select";
import ListedProducts from "../Shared/ListedProducts";
import RadioBtn from "../Shared/Radio";
import { TextArea } from "../Shared/TextArea";
import { Alert } from "../Shared/ToastAlert";
import { useNavigate } from "react-router-dom";

export default function Offer() {
  const [offerProduct, setOfferProduct] = React.useState({
    type: "",
    quantity: "",
    unit: "",
    productId: "",
    description: "",
    pictures: "asd",
    badges: [],
  });
  const [offerInput, setOfferInput] = React.useState("");

  const [shownProducts, setShownProducts] = React.useState([]);

  const [message, setMessage] = React.useState({
    shown: false,
    warning: true,
  });

  const allProducts = GetProducts();
  const navigate = useNavigate();

  // const productNames = allProducts.map((prod) => prod.name);

  const filterProducts = (e) => {
    const filtered = allProducts.filter((prod) => {
      const produ = {
        name: prod.name.normalize("NFD").replace(/\p{Diacritic}/gu, ""),
        id: prod.id,
      };
      return produ.name.includes(e.currentTarget.value.toLowerCase());
    });
    setShownProducts(filtered);
  };
  const resetForm = () => {
    setOfferProduct({
      type: "",
      quantity: "",
      unit: "",
      productId: "",
      description: "",
      pictures: "asd",
      badges: [],
    });
  };

  const selectItem = (e) => {
    setOfferProduct((oldProduct) => {
      return {
        ...oldProduct,
        productId: e.target.id,
        badges: [e.target.textContent],
      };
    });
  };
  const handleQty = (e) => {
    setOfferProduct((oldProduct) => {
      return { ...oldProduct, [e.target.name]: e.target.value };
    });
  };
  const handleRadio = (e) => {
    setOfferProduct((oldProduct) => {
      return { ...oldProduct, type: e.target.value };
    });
    console.log(offerProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      offerProduct.type !== "" &&
      offerProduct.quantity !== "" &&
      offerProduct.unit !== "" &&
      offerProduct.productId !== ""
    ) {
      setMessage({ shown: true, warning: false });
      resetForm();

      setTimeout(() => {
        setMessage((oldMsg) => {
          return { ...oldMsg, shown: false };
        });
      }, 3000);
    } else {
      setMessage({ shown: true, warning: true });
      setTimeout(() => {
        setMessage((oldMsg) => {
          return { ...oldMsg, shown: false };
        });
      }, 4000);
    }
  };

  async function sendOffer() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const reqData = JSON.stringify({
      quantity: Number(offerProduct.quantity),
      quantityUnit: offerProduct.unit,
      type: offerProduct.type,
      productId: Number(offerProduct.productId),
      description: offerProduct.description,
      pictures: offerProduct.pictures,
    });

    console.log(reqData);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: reqData,
      redirect: "follow",
      credentials: "include",
    };

    await fetch("https://peka-api-wt2x.onrender.com/offers", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  const offerBadges =
    offerProduct.badges.length > 0 &&
    offerProduct.badges.map((item, index) => <Badge key={index}>{item}</Badge>);

  return (
    <Wrapper>
      <FormWrapper>
        <FilterInput
          label="Ingresa el producto que quieras ofrecer"
          placeholder="ej: limones, albhaca, papas"
          type="text"
          name="make-offer"
          onChange={(e) => {
            console.log(e.target.value);
            setOfferInput(e.target.value);
            filterProducts(e);
          }}
        ></FilterInput>
        <DetailsWrapper>
          <BadgesWrapper>{offerBadges}</BadgesWrapper>
        </DetailsWrapper>
        <ListedProducts
          addItem={selectItem}
          inputField={offerInput}
          filteredProducts={shownProducts}
          display="flex"
        ></ListedProducts>
        <SmallerTitle style={{ marginTop: "5px", marginBottom: "5px" }}>
          Cantidad:
        </SmallerTitle>
        <DetailsWrapper style={{ width: "100%" }}>
          <InputQty
            onChange={(e) => {
              handleQty(e);
            }}
            name="quantity"
            min="0"
            type="number"
          ></InputQty>
          <Select
            onChange={(e) => {
              handleQty(e);
            }}
            name="unit"
            options={[
              { name: "--Elige unidad--", value: null },
              { name: "Kilos", value: "kilograms" },
              { name: "Gramos", value: "grams" },
              { name: "Unidades", value: "units" },
              { name: "Atados", value: "bundles" },
            ]}
          ></Select>
        </DetailsWrapper>
        <DetailsWrapper style={{ flexDirection: "column" }}>
          <SmallerTitle style={{ marginTop: "20px", marginBottom: "5px" }}>
            Tipo:
          </SmallerTitle>
          <RadioBtn
            value="product"
            onChange={(e) => {
              handleRadio(e);
            }}
            name="plantin-semilla"
            label="Producto"
            checked={offerProduct.type === "product"}
          ></RadioBtn>
          <RadioBtn
            value="seedling"
            onChange={(e) => {
              handleRadio(e);
            }}
            name="plantin-semilla"
            label="Plantín"
            checked={offerProduct.type === "seedling"}
          ></RadioBtn>
          <RadioBtn
            value="seeds"
            name="plantin-semilla"
            label="Semilla"
            onChange={(e) => {
              handleRadio(e);
            }}
            checked={offerProduct.type === "seeds"}
          ></RadioBtn>
        </DetailsWrapper>
        <SmallerTitle style={{ marginTop: "25px" }}>
          Incluye una breve descripción:
        </SmallerTitle>
        <TextArea
          spellCheck="false"
          name="description"
          onChange={(e) => {
            handleQty(e);
          }}
          placeholder="Describe lo que quieres ofrecer :)"
        ></TextArea>

        <SecondaryButton
          onClick={(e) => {
            handleSubmit(e);

            sendOffer();
            // Navegar de nuevo aquí para 'reiniciar' el form?
          }}
          style={{
            display: offerProduct.badges.length > 0 ? "flex" : "none",
            marginTop: "20px",
          }}
        >
          Ofrecer
        </SecondaryButton>
        <Alert shown={message.shown} warning={message.warning}>
          {message.warning
            ? "Asegurate de haber completado todos los campos necesarios."
            : "❁ Oferta creada!"}
        </Alert>
      </FormWrapper>
    </Wrapper>
  );
}
