import React, { useState } from "react";
import { Wrapper } from "./Wrapper";
import { Title } from "./Title";
import Input from "./Input/Input";

export default function Login() {
  const [email, setEmail] = useState({ email: "", error: false });
  const [password, setPassword] = useState({ password: "", error: false });

  const formData = [
    {
      name: "Email",
      label: "Email",
      onChange: handleEmail,
      type: "email",
      required: true,
      error: email.error,
      errorMessage: "Ese email no es válido!",
    },
    // {
    //   label: "Password",
    //   value: password,
    //   onChange: handlePassword,
    //   type: "email",
    // },
  ];

  function handlePassword(e) {
    setPassword((oldPw) => {
      return { ...oldPw, password: e.target.value };
    });
  }

  function handleEmail(e) {
    setEmail((oldEmail) => {
      return { ...oldEmail, email: e.target.value };
    });
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})*$/;
    !regex.test(email.email)
      ? setEmail((oldEmail) => {
          return { ...oldEmail, error: true };
        })
      : setEmail((oldEmail) => {
          return { ...oldEmail, error: false };
        });
  }
  console.log(email);
  return (
    <Wrapper>
      <Title primary> Acceder a Peka:</Title>
      {formData.map((el, index) => {
        return <Input {...el} key={index} />;
      })}
    </Wrapper>
  );
}

{
  /* <Input
email
type="email"
name="email"
required={true}
handleChange={handleEmail}
></Input> */
}
