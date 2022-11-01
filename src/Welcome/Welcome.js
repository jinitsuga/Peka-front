import React from "react";
import { Title, SmallerTitle } from "../Shared/Title";
import { Wrapper } from "../Shared/Wrapper";
import { ListItem, StyledList } from "../Shared/ListItem";
import { Text } from "../Shared/Text";

export default function Welcome() {
  return (
    <Wrapper>
      <Title>Estás por entrar a Peka!</Title>
      <SmallerTitle style={{ fontSize: "18px" }}>
        Te damos la bienvenida, y te contamos un poco de qué va:
      </SmallerTitle>
    </Wrapper>
  );
}
