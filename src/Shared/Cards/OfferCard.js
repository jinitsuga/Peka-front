import React from "react";
import { OfferCardWrapper } from "../Wrapper";
import { SmallerTitle, BabyTitle } from "../Title";
import { DetailsWrapper } from "../BadgeWrapper";
import { Text } from "../Text";

export default function OfferCard(props) {
  return (
    <OfferCardWrapper beige={props.beige}>
      <SmallerTitle style={{ margin: "5px", marginTop: "15px" }}>
        {props.name}
      </SmallerTitle>
      <DetailsWrapper
        style={{
          maxWidth: "130px",
          borderBottom: "solid 3px",
          paddingBottom: "5px",
        }}
      >
        <BabyTitle style={{ margin: "0px", fontSize: "15px" }}>
          {props.quantity} {props.qtyUnit}
        </BabyTitle>
        <BabyTitle style={{ margin: "0px", fontSize: "15px" }}>
          {props.type}
        </BabyTitle>
      </DetailsWrapper>
      <Text>{props.description}</Text>
    </OfferCardWrapper>
  );
}
