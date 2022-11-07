import React from "react";
import { InputCheck } from "./InputField";
import { Label } from "./Input/Label";

export default function Checkbox(props) {
  return (
    <Label
      htmlFor={props.name}
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: "17px",
        margin: "10px",
      }}
    >
      {props.label}
      <InputCheck
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      ></InputCheck>
    </Label>
  );
}
