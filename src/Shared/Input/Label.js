import styled, { css } from "styled-components";

const Label = styled.label.attrs((props) => ({ htmlFor: props.htmlFor }))`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #483838;
  margin-bottom: 10px;
`;

export { Label };
