import styled from "styled-components";
import { Link } from "react-router-dom";

export const Enlace = styled(Link)`
  font-size: ${(props) => (props.large ? "16px" : "13px")};
  font-family: "Roboto", sans-serif;
  border: ${(props) => (props.large ? "solid 1px" : "none")};
  border-radius: 3px;
  padding: 4px;
  height: 20px;
  text-decoration: none;
  color: #483838;
  &:hover {
    color: #42855b;
    cursor: pointer;
  }
`;
