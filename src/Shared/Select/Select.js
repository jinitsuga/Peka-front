import { StyledSelect } from "./StyledSelect";
import { SelectOption } from "./SelectOption";
import { Label } from "../Input/Label";
import React from "react";

export default function Select(props) {
  const selectOptions = props.options.map((option, index) => (
    <SelectOption key={index}>{option}</SelectOption>
  ));
  return (
    <Label>
      <StyledSelect>{selectOptions}</StyledSelect>
    </Label>
  );
}
