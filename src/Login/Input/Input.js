import React from "react";
import { InputField } from "./InputField";
import { Label } from "./Label";
import { ErrorMessage } from "./ErrorMsg";

export default function Input(props) {
  const inputRef = React.useRef(null);

  return (
    <Label htmlFor="email">
      Email
      <InputField
        ref={inputRef}
        type={props.type}
        name={props.name}
        required={props.required}
        onChange={(e) => {
          props.handleChange(e);
        }}
      ></InputField>
      <ErrorMessage>
        {" "}
        {props.email ? "Ingresa un email válido" : props.errorDetails}
      </ErrorMessage>
    </Label>
  );
}
