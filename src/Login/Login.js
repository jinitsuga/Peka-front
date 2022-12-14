import React, { useState } from "react";
import { Wrapper } from "../Shared/Wrapper";
import { Title } from "../Shared/Title";
import Input from "../Shared/Input/Input";
import { Link } from "react-router-dom";
import { Button } from "../Shared/Button";
import { FormWrapper } from "../Shared/FormWrapper";
import { StyledLink } from "../Shared/StyledLink";
import { ButtonWrapper } from "./ButtonWrapper";
import { ErrorMessage } from "../Shared/ErrorMsg";
import { UpdateUser } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
console.log(`${process.env.REACT_APP_API_URL}signin`);
export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const updateUser = UpdateUser();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setLoginData((oldData) => {
      return { ...oldData, [name]: value };
    });
  };

  async function logUserIn() {
    const reqHeaders = new Headers();
    reqHeaders.append("Content-type", "application/json");

    const reqData = JSON.stringify({
      email: loginData.email,
      password: loginData.password,
    });

    const reqOptions = {
      method: "POST",
      headers: reqHeaders,
      body: reqData,
      redirect: "follow",
      credentials: "include",
    };

    let responseStatus = "";
    await fetch(`${process.env.REACT_APP_API_URL}signin`, reqOptions)
      .then((response) => {
        responseStatus = response.statusText;
        return response.text();
      })
      .then((result) => {
        if (responseStatus === "OK") {
          const respObj = JSON.parse(result);
          updateUser({
            name: respObj.name,
            email: respObj.email,
            id: respObj.id,
          });
          localStorage.setItem("name", respObj.name);
          localStorage.setItem("email", respObj.email);
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("id", respObj.id);
        }
      })
      .then(() => {
        navigate("/home");
      })

      // .then(() => {
      //   if (responseStatus === "OK") {
      //     navigate("/");
      //   }
      // })
      .catch((error) => console.log("error => ", error.message));
  }

  const formData = [
    {
      name: "email",
      label: "Email",
      onChange: handleChange,
      type: "email",
      required: true,
      errorMessage: "Ese email no es v??lido!",
      placeholder: "Tu email registrado",
      pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/,
    },
    {
      name: "password",
      label: "Contrase??a",
      onChange: handleChange,
      type: "password",
      required: true,
      errorMessage:
        "Tu contrase??a debe tener al menos 8 caracteres, incluyendo una letra y un n??mero.",
      placeholder: "Tu contrase??a",
      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    },
  ];

  const emailValid = formData[0].pattern.test(loginData.email);
  const passwordValid = formData[1].pattern.test(loginData.password);

  async function handleLogin(e) {
    await logUserIn();

    console.log("user logged in");
  }

  return (
    <Wrapper>
      <Title> Acceder a Peka:</Title>
      <FormWrapper>
        <div className="input-wrap">
          <Input {...formData[0]} />
          {!emailValid && loginData.email ? (
            <ErrorMessage>{formData[0].errorMessage}</ErrorMessage>
          ) : (
            ""
          )}
        </div>
        <div className="input-wrap">
          <Input {...formData[1]} />
          {!passwordValid && loginData.password ? (
            <ErrorMessage>{formData[1].errorMessage}</ErrorMessage>
          ) : (
            ""
          )}
        </div>
      </FormWrapper>
      <ButtonWrapper>
        <Link style={{ textDecoration: "none" }}>
          <Button
            primary
            onClick={() => {
              if (emailValid && passwordValid) handleLogin();
            }}
          >
            Ingresar
          </Button>
        </Link>
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
          <StyledLink to="/register">???? Registrarse</StyledLink>
          <StyledLink to="/passreset">Olvid?? mi contrase??a</StyledLink>
        </div>
      </ButtonWrapper>
    </Wrapper>
  );
}
