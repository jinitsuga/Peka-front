import React, { useState } from "react";
import { Title } from "../Shared/Title";
import { Wrapper } from "../Shared/Wrapper";
import { FormWrapper } from "../Shared/FormWrapper";
import Input from "../Shared/Input/Input";
import { Form } from "react-router-dom";
import { Button } from "../Shared/Button";
import { Enlace } from "../Shared/Enlace";
import { ErrorMessage } from "../Shared/ErrorMsg";
// Make one singular handling function for every prop of that state, matching with target name

export default function Register(props) {
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

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
        "Tu nombre debe tener entre 3 y 16 caracteres alfanuméricos",
      placeholder: "Tu nombre",
      pattern: /^[a-zA-Z0-9_-]{3,16}$/,
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
    },
    {
      name: "password",
      label: "Contraseña",
      key: 2,
      onChange: handleChange,
      type: "password",
      required: true,
      errorMessage:
        "Tu contraseña debe tener al menos 8 caracteres, una letra y un número.",
      placeholder: "Contraseña",
    },
    {
      name: "passwordConfirm",
      label: "Confirmar contraseña",
      key: 3,
      onChange: handleChange,
      type: "password",
      required: true,
      errorMessage: "Las contraseñas no son iguales.",
      placeholder: "Confirma tu contraseña",
    },
  ];
  const nameValid = formData[0].pattern.test(registrationData.name);
  // state handling function
  function handleChange(e) {
    const { name, value } = e.target;
    setRegistrationData((oldData) => {
      return { ...oldData, [name]: value };
    });
  }

  return (
    <Wrapper>
      <Title primary>❁ Regístrate</Title>
      <FormWrapper>
        <div className="input-wrap">
          <Input {...formData[0]}></Input>
          {!nameValid ? (
            <ErrorMessage>{formData[0].errorMessage}</ErrorMessage>
          ) : (
            ""
          )}
        </div>
        <div className="input-wrap">
          <Input {...formData[1]}></Input>
        </div>
        <div className="input-wrap">
          <Input {...formData[2]}></Input>
        </div>
        <div className="input-wrap">
          <Input {...formData[3]}></Input>
        </div>
      </FormWrapper>
      <Button>Registrarse</Button>
      <Enlace to="/">Ya te registraste? Entrá!</Enlace>
    </Wrapper>
  );
}
