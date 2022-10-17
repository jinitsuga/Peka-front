import { Wrapper } from "../Shared/Wrapper";
import { FormWrapper } from "../Shared/FormWrapper";
import { FilterInput } from "../Shared/FilterInput";
import { Title } from "../Shared/Title";
import { GetProducts } from "../Context/UserContext";
import React from "react";

export function Home(props) {
  React.useEffect(() => {
    props.setProducts(["lul"]);
  }, []);
  const prodos = GetProducts();
  console.log(prodos);
  return (
    <Wrapper>
      <FormWrapper>
        <FilterInput
          style={{ marginBottom: "100px" }}
          label="¿Qué te gustaría ofrecer?"
          placeholder="ej: tomate, rúcula, apio..."
        ></FilterInput>
        <FilterInput
          label="¿Qué estás buscando?"
          placeholder="ej: lechuga, limones, menta..."
        ></FilterInput>
      </FormWrapper>
    </Wrapper>
  );
}
