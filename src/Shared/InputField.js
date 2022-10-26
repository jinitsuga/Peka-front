import styled, { css } from "styled-components";

const InputField = styled.input.attrs((props) => ({
  name: props.name,
  type: props.type,
  placeholder: props.placeholder,
}))`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  color: #483838;
  border: none;
  border-radius: 4px;
  width: 250px;
  height: 30px;
  text-indent: 6px;
  margin-bottom: 2px;
  margin-top: 5px;
  background: #d2d79f;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    outline-style: solid;
    outline-color: #42855b;
    outline-width: 2.5px;
  }
`;
const InputQty = styled(InputField)`
  width: 75px;
  height: 30px;
  margin: 5px;
`;

const InputRadio = styled(InputQty).attrs((props) => ({
  name: props.name,
  type: "radio",
}))`
  width: 50px;
  height: 30px;
`;

export { InputField, InputQty, InputRadio };
