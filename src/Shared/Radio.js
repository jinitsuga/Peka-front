import React from "react";
import { InputRadio } from "./InputField";
import { Label } from "./Input/Label";

export default function RadioBtn(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
      }}
    >
      <InputRadio
        value={props.value}
        name={props.name}
        type="radio"
        onChange={props.onChange}
        checked={props.checked}
      ></InputRadio>
      <Label htmlFor={props.name} style={{ fontSize: "15px" }}>
        {props.label}
      </Label>
    </div>
  );
}
