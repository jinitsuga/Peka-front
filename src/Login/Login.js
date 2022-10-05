import React from "react";
import { Wrapper } from "./Wrapper";
import { Title } from "./Title";
import Input from "./Input/Input";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChange(e, name) {
    setEmail(e.target.value);
  }
  console.log(email);
  return (
    <Wrapper>
      <Title primary> Acceder a Peka:</Title>
      <Input
        email
        type="email"
        name="email"
        required={true}
        handleChange={handleChange}
      ></Input>
    </Wrapper>
  );
}
