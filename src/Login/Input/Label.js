import styled, { css } from "styled-components";

const Label = styled.label.attrs((props) => ({ htmlFor: props.htmlFor }))`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #483838;
`;

export { Label };
