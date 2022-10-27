import styled from "styled-components";

export const TextArea = styled.textarea`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #483838;
  background: #d2d79f;
  height: 80px;
  width: 200px;
  border: none;
  border-radius: 4px;
  rows: 5;
  cols: 20;
  spellcheck: false;
  &:focus {
    outline-style: solid;
    outline-color: #42855b;
    outline-width: 2.5px;
  }
`;
