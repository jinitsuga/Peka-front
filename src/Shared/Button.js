import styled, { css } from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.primary ? "18px" : "14px")};
  font-weight 800;
  border: none;
  border-radius: 4px;
  padding: 15px;
  // width: ${(props) => (props.primary ? "125px" : "80px")};
  height: ${(props) => (props.primary ? "65px" : "45px")};
  color: #483838;
  background: #d2d79f;
  margin-bottom: 20px;
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
