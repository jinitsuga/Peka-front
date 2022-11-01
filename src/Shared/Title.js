import styled from "styled-components";

const Title = styled.h2`
  font-size: 28px;
  color: #483838;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
`;
const SmallerTitle = styled(Title)`
  font-size: 20px;
  font-weight: 500;
  max-width: 320px;
  text-align: center;
`;
const BabyTitle = styled(SmallerTitle)`
  font-size: 18px;
`;
export { Title, SmallerTitle, BabyTitle };

// font-size: ${(props) => (props.primary ? "28px" : "20px")};
// color: #483838;
// font-family: "Poppins", sans-serif;
// font-weight: 900;
