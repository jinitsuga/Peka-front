import React from "react";
import { CardWrapper } from "../Wrapper";
import { Text } from "../Text";
import { BabyTitle } from "../Title";

export default function WelcomeCard(props) {
  return (
    <CardWrapper style={props.offset}>
      <BabyTitle> {props.title} </BabyTitle>
      <Text style={{ margin: "0", marginBottom: "15px" }}>{props.text}</Text>
    </CardWrapper>
  );
}
