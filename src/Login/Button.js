import styled, { css } from "styled-components";

export const Button = styled.button`
  font-size: 18px;
  font-weight 800;
  border: none;
  border-radius: 4px;
  width: ${(props) => (props.primary ? "125px" : "80px")};
  height: ${(props) => (props.primary ? "55px" : "35px")};
  color: #483838;
  background: #d2d79f;
  &:hover {
    color: #d2d79f;
    background: #42855B;
    transform: scale(1.07)
  }
  &:active {
    color: #d2d79f;
    background: #483838;
    transform: scale(1.07)
  }
`;
