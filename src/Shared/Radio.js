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
      <InputRadio name={props.name} type="radio"></InputRadio>
      <Label style={{ fontSize: "15px" }}>{props.label}</Label>
    </div>
  );
}
