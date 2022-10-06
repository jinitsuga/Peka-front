import React from "react";
import { InputField } from "./InputField";
import { Label } from "./Label";
import { ErrorMessage } from "./ErrorMsg";

export default function Input(props) {
  console.log(props.error);
  return (
    <Label htmlFor="email">
      {props.name}
      <InputField
        placeholder={props.placeholder}
        value={props.value}
        type={props.type}
        name={props.name}
        required={props.required}
        onChange={(e) => {
          props.onChange(e);
        }}
      ></InputField>
      <ErrorMessage error={props.error}>{props.errorMessage}</ErrorMessage>
    </Label>
  );
}
