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
  width: 200px;
  border: solid 2px #42855b;
  border-radius: 5px;
  margin: 5px;
  background-color: #d2d79f;
  &:hover {
    transition-duration: 0.35s;
    transform: scale(1.05);
  }
`;

const ItemsWrapper = styled(CardWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 450px;
  border: none;
  background-color: #90b77d;
  flex-wrap: wrap;
`;

const OfferCardWrapper = styled(CardWrapper)`
  background: linear-gradient(45deg, #d2d79f 90%, #483838 30%);
  color: #90b77d;
  width: 175px;
  height: 275px;
  border: solid 2px #483838;
  align-self: center;
  justify-self: center;
  &:hover {
    transition-duration: 0.2s;
    transform: scale(1.05);
  }
`;

export { Wrapper, BrownWrapper, CardWrapper, ItemsWrapper, OfferCardWrapper };
