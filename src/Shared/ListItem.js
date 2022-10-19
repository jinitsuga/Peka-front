import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #483838;
  margin: 4px;
  padding: 4px;
  text-align: center;
  border: solid 1px;
  border-radius: 2px;
  width: 69px;
  height: 22px;
  &:hover {
    cursor: pointer;
  }
`;
