import React from "react";
import { Header } from "./Header";
import { Wrapper } from "../Shared/Wrapper";
import { SmallerTitle } from "../Shared/Title";

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <div className="head-wrapper">
          <SmallerTitle></SmallerTitle>
        </div>
      </Header>
    </Wrapper>
  );
}

// Header / Nav
// 'Homepage' con opción de hacer una busqueda o hacer una oferta
