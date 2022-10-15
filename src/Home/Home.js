import { Wrapper } from "../Shared/Wrapper";
import { FormWrapper } from "../Shared/FormWrapper";
import { FilterInput } from "../Shared/FilterInput";
import { Title } from "../Shared/Title";

export function Home() {
  return (
    <Wrapper>
      <FormWrapper>
        <FilterInput
          style={{ marginBottom: "100px" }}
          label="¿Qué estás buscando?"
          placeholder="ej: tomate, rúcula, apio..."
        ></FilterInput>
        <FilterInput
          label="¿Qué te gustaría ofrecer?"
          placeholder="ej: lechuga, limones, menta..."
        ></FilterInput>
      </FormWrapper>
    </Wrapper>
  );
}
