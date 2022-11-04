import React from "react";
import { OfferCardWrapperWrapper } from "../Shared/Wrapper";
import { SmallerTitle, BabyTitle } from "../Shared/Title";
import { DetailsWrapper } from "../Shared/BadgeWrapper";
import { Text } from "../Shared/Text";

export default function OfferCardWrapper(props) {
  return (
    <OfferCardWrapper beige={props.beige}>
      <SmallerTitle>{props.name}</SmallerTitle>
      <DetailsWrapper>
        <BabyTitle>
          {props.quantity} {props.quantityUnit}
        </BabyTitle>
        <BabyTitle>{props.type}</BabyTitle>
      </DetailsWrapper>
      <Text>{props.description}</Text>
    </OfferCardWrapper>
  );
}
