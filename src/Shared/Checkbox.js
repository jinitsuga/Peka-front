import React from "react";
import { InputCheck } from "./InputField";
import { Label } from "./Input/Label";

export default function Checkbox(props) {
  return (
    <Label htmlFor={props.name}>
      {props.label}
      <InputCheck value={props.value} name={props.name}></InputCheck>
    </Label>
  );
}
