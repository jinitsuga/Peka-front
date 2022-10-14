import { Wrapper } from "../Shared/Wrapper";
import { FormWrapper } from "../Shared/FormWrapper";
import { FilterInput } from "../Shared/FilterInput";
import { Title } from "../Shared/Title";

export function Home() {
  return (
    <Wrapper>
      <FormWrapper>
        <FilterInput
          label="¿Qué estás buscando?"
          placeholder="ej: tomate, rúcula, apio..."
        ></FilterInput>
      </FormWrapper>
    </Wrapper>
  );
}
