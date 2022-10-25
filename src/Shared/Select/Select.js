import { StyledSelect } from "./StyledSelect";
import { SelectOption } from "./SelectOption";
import { Label } from "../Input/Label";
import React from "react";

export default function Select(props) {
  const selectOptions = props.options.map((option, index) => (
    <SelectOption key={index}>{option}</SelectOption>
  ));
  return (
    <Label
      style={{ marginBottom: "15px", alignSelf: "flex-start" }}
      htmlFor="unit"
    >
      {" "}
      {props.label}
      <StyledSelect>{selectOptions}</StyledSelect>
    </Label>
  );
}
