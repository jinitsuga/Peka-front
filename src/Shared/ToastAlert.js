import styled from "styled-components";

export const Alert = styled.div`
  display: ${(props) => (props.shown == true ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => (props.warning == true ? "red" : "#483838")};
  background: ${(props) => (props.warning == true ? "#c7a5a8" : "#D2D79F")};
  width: 220px;
  height: 45px;
  border: solid 2px;
  border-radius: 4px;
`;
