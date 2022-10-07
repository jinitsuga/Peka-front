import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { FormWrapper } from "../Shared/FormWrapper";
import Input from "../Shared/Input/Input";
import { Button } from "../Shared/Button";
import { Text } from "../Shared/Text";
import { Title } from "../Shared/Title";
import { Enlace } from "../Shared/Enlace";

export default function ResetPassword() {
  const [email, setEmail] = React.useState({ email: null, error: false });
  const [passReset, setPassReset] = React.useState(false);

  // name: "Email",
  // label: "Email",
  // onChange: handleEmail,
  // type: "email",
  // required: true,
  // error: email.error,
  // errorMessage: "Ese email no es válido!",
  // placeholder: "Tu email registrado",

  const handleEmail = (e) => {
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
  };

  return (
    <Wrapper>
      <FormWrapper style={{ display: passReset ? "none" : "flex" }}>
        <Input
          name="Email"
          label="Reset"
          type="email"
          onChange={handleEmail}
          required={true}
          placeholder="Tu email registrado"
          errorMessage="Ese formato de email no es válido"
          error={email.error}
        ></Input>
        <Button
          onClick={() => {
            setPassReset(true);
          }}
        >
          Recuperar contraseña
        </Button>
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
        <Title primary>Listo!</Title>
        <Text>
          Si tu email está registrado, recibirás un mensaje con instrucciones
          para reiniciar tu contraseña.
        </Text>
        <Enlace large={true} to="/">
          Volver al inicio
        </Enlace>
      </div>
    </Wrapper>
  );
}
