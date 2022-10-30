import styled from "styled-components";

export const Alert = styled.div`
  display: ${(props) => (props.shown === true ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  text-align: center;
  position: fixed;
  bottom: 50%;
  padding: 8px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: ${(props) => (props.warning === true ? "14px" : "18px")};
  color: ${(props) => (props.warning === true ? "red" : "green")};
  background: ${(props) =>
    props.warning === true
      ? "#c7a5a8"
      : "linear-gradient(145deg,#D2D79F, #90B77D )"};
  width: 220px;
  height: 45px;
  border: solid 2px;
  border-radius: 6px;
`;
