import styled from "styled-components";

export const BadgesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 275px;
  height: auto;
  max-height: 125px;
  flex-wrap: wrap;
  margin: 10px;
  margin-top: 5px;
`;

export const DetailsWrapper = styled(BadgesWrapper)`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #483838;
  display: flex;
  max-width: 300px;
  height: auto;
  flex-wrap: nowrap;
  margin-bottom: 15px;
`;
