import styled, { css } from "styled-components";

const Label = styled.label.attrs((props) => ({ htmlFor: props.htmlFor }))`
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: ${(props) => (props.secondary ? "14px" : "20px")};
  color: #483838;
  margin-bottom: 1px;
  max-width: 250px;
`;

export { Label };
