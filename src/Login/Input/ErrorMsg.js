import styled, { css } from "styled-components";

const ErrorMessage = styled.span`
  display: block;
  font-size: 14px;
  color: blue;

  ${(props) => props.ref}::invalid & {
    color: red;
  }
`;

export { ErrorMessage };

// .checkout-input:invalid[focus="true"] ~ .error-msg {
//   display: block;
// }
