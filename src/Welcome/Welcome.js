import React from "react";
import { Title, SmallerTitle } from "../Shared/Title";
import { Wrapper, ItemsWrapper } from "../Shared/Wrapper";
import WelcomeCard from "../Shared/Cards/WelcomeCard";
import { SecondaryButton } from "../Shared/Button";

export default function Welcome() {
  return (
    <Wrapper>
      <Title>Estás por entrar a Peka!</Title>
      <SmallerTitle style={{ fontSize: "18px" }}>
        Te damos la bienvenida, y te contamos un poco de qué va:
      </SmallerTitle>
      <ItemsWrapper style={{ flexDirection: "row" }}>
        <ItemsWrapper style={{ width: "180px" }}>
          <WelcomeCard
            title="¿Qué es Peka?"
            text="Una red social sencilla, conectando gente y los productos de sus huertas, con otras personas y productos."
          ></WelcomeCard>

          <WelcomeCard
            title="Cómo usar Peka"
            text="Fácil! Presiona entrar, registra una cuenta, arma una oferta de lo que tengas para intercambiar. Luego puedes esperar o buscar."
          ></WelcomeCard>
        </ItemsWrapper>
        <WelcomeCard
          //   offset={{ marginTop: "40px" }}
          title="Objetivo"
          text="La idea nace con el objetivo de conectar gente que disfrute compartir el proceso y los resultados de tener una huerta, 
          aunque sea con un solo producto, y ayudar a aquellos que tengan exceso de una cosa pero les falte otra,
        permitiéndoles intercambiar."
        ></WelcomeCard>
      </ItemsWrapper>
      <SecondaryButton>Entrar</SecondaryButton>
    </Wrapper>
  );
}
