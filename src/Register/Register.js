import React, { useState } from "react";
import { Title } from "../Shared/Title";
import { Wrapper } from "../Shared/Wrapper";
import { FormWrapper } from "../Shared/FormWrapper";
import Input from "../Shared/Input/Input";
import { Form } from "react-router-dom";

export default function Register(props) {
  const [name, setName] = useState({ name: "", error: false });
  const [email, setEmail] = useState({ email: "", error: false });
  const [password, setPassword] = useState({ password: "", error: false });

  return (
    <Wrapper>
      <Title primary>Regístrate</Title>
      <FormWrapper></FormWrapper>
    </Wrapper>
  );
}
