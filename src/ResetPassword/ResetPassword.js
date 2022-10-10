import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { FormWrapper } from "../Shared/FormWrapper";
import Input from "../Shared/Input/Input";
import { Button, SecondaryButton } from "../Shared/Button";
import { Text } from "../Shared/Text";
import { Title, SmallerTitle } from "../Shared/Title";
import { StyledLink } from "../Shared/StyledLink";
import { ErrorMessage } from "../Shared/ErrorMsg";

export default function ResetPassword() {
  const [email, setEmail] = React.useState("");
  const [passReset, setPassReset] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setEmail(value);
  };

  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const emailValid = emailRegex.test(email);

  console.log(email);
  return (
    <Wrapper>
      <FormWrapper style={{ display: passReset ? "none" : "flex" }}>
        <SmallerTitle>Recuperación de contraseña</SmallerTitle>
        <div className="input-wrap">
          <Input
            name="email"
            label="Email"
            type="email"
            onChange={handleChange}
            required={true}
            placeholder="Tu email registrado"
          ></Input>
          {!emailValid && email ? (
            <ErrorMessage>Ese formato de email no es válido.</ErrorMessage>
          ) : (
            ""
          )}
        </div>
        <SecondaryButton
          onClick={() => {
            setPassReset(true);
          }}
        >
          Recuperar contraseña
        </SecondaryButton>
      </FormWrapper>
      <div
        className="confirmacion"
        style={{
          display: passReset ? "flex" : "none",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title>Listo!</Title>
        <Text>
          Si tu email está registrado, recibirás un mensaje (en tu casilla de
          correo) con instrucciones para reiniciar tu contraseña.
        </Text>
        <StyledLink to="/">Volver al inicio</StyledLink>
      </div>
    </Wrapper>
  );
}
