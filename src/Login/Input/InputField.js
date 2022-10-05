import styled, { css } from "styled-components";

const Input = styled.input.attrs({
  type: "email",
  placeholder: "Tu email registrado",
})`
  font-family: "Roboto", sans-serif;
  border: none;
  border-radius: 3px;
  width: 250px;
  height: 35px;
  &::placeholder {
    font-size: 12px;
  }
`;

export { Input };
