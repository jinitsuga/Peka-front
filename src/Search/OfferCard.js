import React from "react";
import { OfferCard } from "../Shared/Wrapper";
import { SmallerTitle, BabyTitle } from "../Shared/Title";
import { DetailsWrapper } from "../Shared/BadgeWrapper";
import { Text } from "../Shared/Text";

export default function OfferCard() {
  return (
    <OfferCard beige={props.beige}>
      <SmallerTitle>{props.name}</SmallerTitle>
      <DetailsWrapper>
        <BabyTitle>
          {props.quantity} {props.quantityUnit}
        </BabyTitle>
        <BabyTitle>{props.type}</BabyTitle>
      </DetailsWrapper>
      <Text>{props.description}</Text>
    </OfferCard>
  );
}
