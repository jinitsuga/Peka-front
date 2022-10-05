import styled, { css } from "styled-components";

const Title = styled.h2`
  font-size: ${(props) => (props.primary ? "28px" : "20px")};
  color: #483838;
  font-family: "Indie Flower", cursive;
  font-weight: 900;
`;

export { Title };
