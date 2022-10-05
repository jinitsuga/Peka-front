import React from "react";
import { Wrapper } from "./Wrapper";
import { Title } from "./Title";
import { Input } from "./Input/InputField";

export default function Login() {
  return (
    <Wrapper>
      <Title primary> Acceder a Peka:</Title>
      <label htmlFor="name">
        <Input></Input>
      </label>
    </Wrapper>
  );
}
