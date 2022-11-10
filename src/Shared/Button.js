import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 800;
  border: none;
  border-radius: 4px;
  padding: 15px;
  width: 125px;
  height: 65px;
  color: #483838;
  background: #d2d79f;
  margin-bottom: 20px;
  &:hover {
    color: #d2d79f;
    background: #42855b;
    transform: scale(1.07);
    cursor: pointer;
  }
  &:active {
    color: #d2d79f;
    background: #483838;
    transform: scale(1.07);
  }
`;

const SecondaryButton = styled(Button)`
  font-size: 14px;
  width: 90px;
  height: 40px;
  margin-bottom: 0px;
`;

const NavButton = styled(SecondaryButton)`
  background: #90b77d;
  color: #483838;
  &:hover {
    color: #d2d79f;
    background: #42855b;
    transform: scale(1.07);
  }
`;

const CloseButton = styled(SecondaryButton)`
&:hover {
  color: #d2d79f;
  background: #42855b;
  transform: scale(1.07);
  cursor: pointer;


`;

const EditButton = styled(SecondaryButton)`
  font-size: 12px;
  width: 80px;
  height: 30px;
  &:hover {
    background: ${(props) => (props.red ? "red" : "#42855b")};
  }
  &:active {
    color: #d2d79f;
    background: #483838;
  }
`;
export { Button, SecondaryButton, NavButton, CloseButton, EditButton };
