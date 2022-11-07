import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import { UserInfo } from "../Context/UserContext";
import OfferCard from "../Shared/Cards/OfferCard";

export default function MyOffers() {
  const userData = UserInfo();
  console.log(userData);
  return <Wrapper></Wrapper>;
}
