import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  padding: 10px;
  padding-bottom: 45px;
  background: #90b77d;
  width: 450px;
  max-width: 480px;
`;

const BrownWrapper = styled(Wrapper)`
  background: #483838;
  padding: 25px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 2px;
`;
export { Wrapper, BrownWrapper, CardWrapper };
