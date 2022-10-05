import styled, { css } from "styled-components";

const Label = styled.label.attrs((props) => ({ htmlFor: props.htmlFor }))`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #483838;
`;

export { Label };
