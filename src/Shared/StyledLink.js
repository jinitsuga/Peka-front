import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  border: none;
  border-radius: 4px;
  padding: 3px;
  height: 20px;
  text-decoration: none;
  color: #483838;
  &:hover {
    color: #42855b;
  }
`;
