import React from "react";
import { CardWrapper } from "../Wrapper";
import { Text } from "../Text";
import { BabyTitle } from "../Title";

export default function WelcomeCard(props) {
  return (
    <CardWrapper>
      <BabyTitle> {props.title} </BabyTitle>
      <Text>{props.text}</Text>
    </CardWrapper>
  );
}
