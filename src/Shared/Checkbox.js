import React from "react";
import { InputCheck } from "./InputField";
import { Label } from "./Input/Label";

export default function Checkbox(props) {
  return (
    <Label htmlFor={props.name}>
      {props.label}
      <InputCheck name={props.name}></InputCheck>
    </Label>
  );
}
