import styled from "styled-components";

const Title = styled.h2`
  font-size: 28px;
  color: #483838;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
`;
const SmallerTitle = styled(Title)`
  font-size: 20px;
`;

export { Title, SmallerTitle };

// font-size: ${(props) => (props.primary ? "28px" : "20px")};
// color: #483838;
// font-family: "Poppins", sans-serif;
// font-weight: 900;
