import styled, { css } from "styled-components";

const ErrorMessage = styled.span`
  font-family: "Roboto", sans-serif;
  display: block;
  font-size: 12px;
  color: red;
  max-width: 250px;
  margin-bottom: 5px;
`;

export { ErrorMessage };

// .checkout-input:invalid[focus="true"] ~ .error-msg {
//   display: block;
// }
