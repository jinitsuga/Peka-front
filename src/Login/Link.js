import styled from "styled-components";

export const Link = styled.a`
  font-size: ${(props) => (props.big ? "15px" : "11px")};
  font-family: "Roboto", sans-serif;
  height: 20px;
  text-decoration: none;
  color: #483838;
  &:hover {
    color: #42855b;
    cursor: pointer;
  }
`;
