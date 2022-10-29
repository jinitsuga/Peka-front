import { StyledSelect } from "./StyledSelect";
import { SelectOption } from "./SelectOption";
import { Label } from "../Input/Label";
import React from "react";

export default function Select(props) {
  const selectOptions = props.options.map((option, index) => (
    <SelectOption key={index} value={option.value}>
      {option.name}
    </SelectOption>
  ));
  return (
    <Label style={{ margin: "5px", alignSelf: "flex-start" }} htmlFor="unit">
      {" "}
      {props.label}
      <StyledSelect name={props.name} onChange={props.onChange}>
        {selectOptions}
      </StyledSelect>
    </Label>
  );
}
