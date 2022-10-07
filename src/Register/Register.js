import React, { useState } from "react";
import { Title } from "../Shared/Title";
import { Wrapper } from "../Shared/Wrapper";
import { FormWrapper } from "../Shared/FormWrapper";
import Input from "../Shared/Input/Input";
import { Form } from "react-router-dom";
import { Button } from "../Shared/Button";
import { Enlace } from "../Shared/Enlace";

export default function Register(props) {
  const [name, setName] = useState({ name: null, error: false });
  const [email, setEmail] = useState({ email: null, error: false });
  const [password, setPassword] = useState({ password: null, error: false });
  const [confirmPassword, setConfirmPassword] = useState({
    confirmPassword: null,
    error: false,
  });

  // Form data to loop through - potentially better in separate file?
  const formData = [
    {
      name: "Nombre",
      label: "Nombre",
      onChange: handleName,
      type: "text",
      required: true,
      error: name.error,
      errorMessage:
        "Tu nombre debe tener entre 3 y 16 caracteres alfanuméricos",
      placeholder: "Tu nombre",
    },
    {
      name: "Email",
      label: "Email",
      onChange: handleEmail,
      type: "email",
      required: true,
      error: email.error,
      errorMessage: "Ese formato de email no es válido.",
      placeholder: "Dirección de email que quieras registrar",
    },
    {
      name: "Contraseña",
      label: "Contraseña",
      onChange: (e) => {
        handlePassword(e);
      },
      type: "password",
      required: true,
      error: password.error,
      errorMessage:
        "Tu contraseña debe tener al menos 8 caracteres, una letra y un número.",
      placeholder: "Contraseña",
    },
    {
      name: "Confirmar contraseña",
      label: "Confirmar contraseña",
      onChange: handlePasswordConfirmation,
      type: "password",
      required: true,
      error: confirmPassword.error,
      errorMessage: "Las contraseñas no son iguales.",
      placeholder: "Confirma tu contraseña",
    },
  ];

  // Validation / state handling functions
  function handleName(e) {
    setName((oldName) => {
      return { ...oldName, name: e.target.value };
    });
    const regex = /^[A-Za-z0-9_-]{2,16}$/;
    !regex.test(name.name)
      ? setName((oldName) => {
          return { ...oldName, error: true };
        })
      : setName((oldName) => {
          return { ...oldName, error: false };
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

  function handlePassword(e) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    !regex.test(password.password)
      ? setPassword((oldPw) => {
          return { ...oldPw, error: true };
        })
      : setPassword((oldPw) => {
          return { ...oldPw, error: false };
        });
    setPassword((oldPw) => {
      return { ...oldPw, password: e.target.value };
    });
  }
  function handlePasswordConfirmation(e) {
    setConfirmPassword((oldConfirm) => {
      return { ...oldConfirm, confirmPassword: e.target.value };
    });
  }

  return (
    <Wrapper>
      <Title primary>❁ Regístrate</Title>
      <FormWrapper>
        {formData.map((el, index) => {
          return <Input {...el} key={index} />;
        })}
      </FormWrapper>
      <Button>Registrarse</Button>
      <Enlace to="/">Ya te registraste? Entrá!</Enlace>
    </Wrapper>
  );
}
