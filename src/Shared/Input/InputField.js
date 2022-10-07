import styled, { css } from "styled-components";

const InputField = styled.input.attrs((props) => ({
  name: props.name,
  type: props.type,
  placeholder: props.placeholder,
}))`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #483838;
  border: none;
  border-radius: 3px;
  width: 250px;
  height: 30px;
  text-indent: 6px;
  margin-bottom: 5px;
  margin-top: 5px;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    outline-style: solid;
    outline-color: #42855b;
    outline-width: 2.5px;
  }
`;

export { InputField };
