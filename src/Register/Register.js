import React, { useState } from "react";
import { Title } from "../Shared/Title";
import { Wrapper } from "../Shared/Wrapper";
import { FormWrapper } from "../Shared/FormWrapper";
import Input from "../Shared/Input/Input";
import { Button } from "../Shared/Button";
import { StyledLink } from "../Shared/StyledLink";
import { ErrorMessage } from "../Shared/ErrorMsg";
// Make one singular handling function for every prop of that state, matching with target name

export default function Register(props) {
  const [registrationData, setRegistrationData] = useState({
    name: null,
    email: null,
    password: null,
    passwordConfirm: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setRegistrationData((oldData) => {
      return { ...oldData, [name]: value };
    });
  };

  async function signUserUp() {
    const reqHeaders = new Headers();
    reqHeaders.append("Content-type", "application/json");

    const reqData = JSON.stringify({
      name: registrationData.name,
      email: registrationData.email,
      password: registrationData.password,
    });

    const reqOptions = {
      method: "POST",
      headers: reqHeaders,
      body: reqData,
      redirect: "follow",
    };

    await fetch("https://peka-api-wt2x.onrender.com/signup", reqOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (nameValid && emailValid && passwordValid && confirmPasswordValid) {
      await signUserUp();
      console.log("data registered");
    }
  }

  // Form data to loop through - potentially better in separate file?
  const formData = [
    {
      name: "name",
      label: "Nombre",
      key: 0,
      onChange: handleChange,
      type: "text",
      required: true,
      errorMessage:
        "Tu nombre debe tener entre 3 y 16 caracteres alfanuméricos.",
      placeholder: "Tu nombre",
      pattern: /^[a-zA-Z0-9_][a-zA-Z0-9_ ]*[a-zA-Z0-9_]{2,16}$/,
    },
    {
      name: "email",
      label: "Email",
      key: 1,
      onChange: handleChange,
      type: "email",
      required: true,
      errorMessage: "Ese formato de email no es válido.",
      placeholder: "Dirección de email que quieras registrar",
      pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/,
    },
    {
      name: "password",
      label: "Contraseña",
      key: 2,
      onChange: handleChange,
      type: "password",
      required: true,
      errorMessage:
        "Tu contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número.",
      placeholder: "Contraseña",
      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    },
    {
      name: "passwordConfirm",
      label: "Confirmar contraseña",
      key: 3,
      onChange: handleChange,
      type: "password",
      required: true,
      errorMessage: "Las contraseñas no coinciden.",
      placeholder: "Confirma tu contraseña",
    },
  ];

  const nameValid = formData[0].pattern.test(registrationData.name);
  const emailValid = formData[1].pattern.test(registrationData.email);
  const passwordValid = formData[2].pattern.test(registrationData.password);
  const confirmPasswordValid =
    registrationData.password === registrationData.passwordConfirm;

  return (
    <Wrapper>
      <Title primary>❁ Regístrate</Title>
      <FormWrapper>
        <div className="input-wrap">
          <Input {...formData[0]}></Input>
          {!nameValid && registrationData.name ? (
            <ErrorMessage>{formData[0].errorMessage}</ErrorMessage>
          ) : (
            ""
          )}
        </div>
        <div className="input-wrap">
          <Input {...formData[1]}></Input>
          {!emailValid && registrationData.email ? (
            <ErrorMessage>{formData[1].errorMessage}</ErrorMessage>
          ) : (
            ""
          )}
        </div>
        <div className="input-wrap">
          <Input {...formData[2]}></Input>
          {!passwordValid && registrationData.password ? (
            <ErrorMessage>{formData[2].errorMessage}</ErrorMessage>
          ) : (
            ""
          )}
        </div>
        <div className="input-wrap">
          <Input {...formData[3]}></Input>
          {!confirmPasswordValid && registrationData.passwordConfirm ? (
            <ErrorMessage>{formData[3].errorMessage}</ErrorMessage>
          ) : (
            ""
          )}
        </div>
      </FormWrapper>
      <Button
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Registrarse
      </Button>
      <StyledLink to="/login">Ya te registraste? Entrá!</StyledLink>
    </Wrapper>
  );
}
