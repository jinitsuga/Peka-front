import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
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

const NavLink = styled(StyledLink)`
  font-size: 20px;
  font-weight: 600;
  padding: 10px;
  color: #483838;
  border-radius: 0;
  &:hover {
    color: #42855b;
    border-bottom: solid 2px;
  }
`;

const TextLink = styled(NavLink)`
  font-size: 15px;
  padding: 0px;
`;
export { StyledLink, NavLink, TextLink };
