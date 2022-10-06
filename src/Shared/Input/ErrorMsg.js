import styled, { css } from "styled-components";

const ErrorMessage = styled.span`
  display: ${(props) => (props.error ? "block" : "none")};
  font-size: 12px;
  color: red;
`;

export { ErrorMessage };

// .checkout-input:invalid[focus="true"] ~ .error-msg {
//   display: block;
// }
