import React, { useState } from "react";
import { Wrapper } from "../Shared/Wrapper";
import { Title } from "../Shared/Title";
import Input from "../Shared/Input/Input";
import { Button } from "../Shared/Button";
import { FormWrapper } from "../Shared/FormWrapper";
import { Enlace } from "../Shared/Enlace";
import { ButtonWrapper } from "./ButtonWrapper";
import { Link } from "react-router-dom";

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
      placeholder: "Tu email registrado",
    },
    {
      name: "Contraseña",
      label: "Contraseña",
      onChange: handlePassword,
      type: "password",
      required: true,
      error: password.error,
      errorMessage: "Esa contraseña no es válida",
      placeholder: "Tu contraseña",
    },
  ];

  function handlePassword(e) {
    setPassword((oldPw) => {
      return { ...oldPw, password: e.target.value };
    });
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
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

  return (
    <Wrapper>
      <Title primary> Acceder a Peka:</Title>
      <FormWrapper>
        {formData.map((el, index) => {
          return <Input {...el} key={index} />;
        })}
      </FormWrapper>
      <ButtonWrapper>
        <Button primary>Ingresar</Button>
        <div
          className="login-links"
          style={{
            width: "250px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "25px",
          }}
        >
          <Enlace to="/register">🌻 Registrarse 🌻</Enlace>
          <Enlace to="/passreset">Olvidé mi contraseña</Enlace>
        </div>
      </ButtonWrapper>
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
