import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { DetailsWrapper } from "../Shared/BadgeWrapper";
import { InputQty } from "../Shared/InputField";
import Select from "../Shared/Select/Select";
import { BabyTitle } from "../Shared/Title";
import { FormWrapper } from "../Shared/FormWrapper";
import { TextArea } from "../Shared/TextArea";
import { SecondaryButton, CloseButton } from "../Shared/Button";
import { editOffer } from "../helperFunctions";

// popup modal with options to edit the offer (probably not editing product)
// but editing quantities, description, etc

export default function EditOffer(props) {
  const [offer, setOffer] = React.useState({
    quantity: 0,
    quantityUnit: "",
    description: "",
    type: ["product", "seedling", "seeds"],
  });

  const handleQty = (e) => {
    setOffer((oldOffer) => {
      console.log(offer);
      return { ...oldOffer, [e.target.name]: e.target.value };
    });
  };

  return (
    <div
      className="modal-container"
      style={{
        display: props.show ? "flex" : "none",
        position: "fixed",
        bottom: "0",
        top: "0",
        right: "0",
        left: "0",
        background: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <Wrapper
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "250px",
          height: "275px",
          position: "fixed",
          left: "40%",
          top: "30%",
          bottom: "50%",
          zIndex: "2",
          border: "solid 2px #483838",
        }}
      >
        <CloseButton
          onClick={() => {
            props.setEdit(false);
          }}
          style={{
            width: "45px",
            height: "45px",
            alignSelf: "flex-end",
            fontSize: "20px",
            border: "solid 1px #483838",
          }}
        >
          X
        </CloseButton>
        <FormWrapper>
          <BabyTitle style={{ margin: "0" }}>Cantidad:</BabyTitle>
          <DetailsWrapper>
            <InputQty
              name="quantity"
              min="0"
              type="number"
              onChange={(e) => {
                handleQty(e);
              }}
            />
            <Select
              onChange={(e) => {
                handleQty(e);
              }}
              name="quantityUnit"
              options={[
                { name: "--Elige unidad--", value: null },
                { name: "Kilos", value: "kilograms" },
                { name: "Gramos", value: "grams" },
                { name: "Unidades", value: "units" },
                { name: "Atados", value: "bundles" },
              ]}
            ></Select>
          </DetailsWrapper>
          <BabyTitle style={{ margin: "0", marginBottom: "5px" }}>
            Descripción:
          </BabyTitle>
          <TextArea
            spellCheck="false"
            name="description"
            onChange={(e) => {
              handleQty(e);
            }}
            placeholder="Puedes editar la descripción"
          ></TextArea>
        </FormWrapper>
        <SecondaryButton
          onClick={() => {
            editOffer(`offers/${props.id}`, "PUT");
            props.setEdit(false);
          }}
        >
          Terminar edición
        </SecondaryButton>
      </Wrapper>
    </div>
  );
}
