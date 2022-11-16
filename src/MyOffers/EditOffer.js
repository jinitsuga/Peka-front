import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { FilterInput } from "../Shared/FilterInput";
import ListedProducts from "../Shared/ListedProducts";
import { BadgesWrapper, DetailsWrapper } from "../Shared/BadgeWrapper";
import { InputQty } from "../Shared/InputField";
import Select from "../Shared/Select/Select";
import { BabyTitle } from "../Shared/Title";
import { FormWrapper } from "../Shared/FormWrapper";
import { TextArea } from "../Shared/TextArea";
import { SecondaryButton } from "../Shared/Button";

// popup modal with options to edit the offer (probably not editing product)
// but editing quantities, description, etc

export default function EditOffer(props) {
  const [offer, setOffer] = React.useState({ quantity: 0, unit: "" });

  return (
    <Wrapper
      style={{
        display: props.show ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: "50%",
      }}
    >
      <FormWrapper>
        <BabyTitle>Cantidad:</BabyTitle>
        <DetailsWrapper>
          <InputQty
            name="quantity"
            min="0"
            type="number"
            onChange={() => {
              handleQty(e);
            }}
          />
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
        <BabyTitle>Descripción:</BabyTitle>
        <TextArea
          spellCheck="false"
          name="description"
          onChange={(e) => {
            handleQty(e);
          }}
          placeholder="Puedes editar la descripción"
        ></TextArea>
      </FormWrapper>
      <SecondaryButton>Terminar edición</SecondaryButton>
    </Wrapper>
  );
}
