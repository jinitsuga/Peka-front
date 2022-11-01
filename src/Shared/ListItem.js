import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #483838;
  width: 320px;
  padding-left: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 10px;
`;

export const ProductListItem = styled.li`
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
    color: #42855b;
  }
`;
