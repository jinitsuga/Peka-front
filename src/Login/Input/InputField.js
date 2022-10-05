import styled, { css } from "styled-components";

const InputField = styled.input.attrs((props) => ({
  name: props.name,
  type: props.type,
  placeholder: "Tu email registrado",
  pattern: "/^[a-zA-Z0-9]*$/",
}))`
  font-family: "Roboto", sans-serif;
  border: none;
  border-radius: 3px;
  width: 250px;
  height: 30px;
  text-indent: 6px;
  &::placeholder {
    font-size: 12px;
  }
`;

export { InputField };
