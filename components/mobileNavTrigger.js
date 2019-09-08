import styled from "styled-components";

export default function MobileNavTrigger({isOpen}) {
  return (
      <NavTriggerMobile onClick={() => props.toggleNav()} open={isOpen} />
  );
}

const NavTriggerMobile = styled.div`
  display: none;
  height: 30px;
  max-width: 50px;
  width: 100%;
  position: relative;
  justify-self: flex-end;
  margin-top: 3px;
  &:before,
  &:after {
    content: " ";
    height: 4px;
    width: 100%;
    background-color: ${props =>
      props.open
        ? props.theme.colors.background
        : props.theme.colors.foreground};
    position: absolute;
    left: 0px;
    top: 0px;
  }
  &:after {
    top: 19px;
  }
  @media (max-width: 1100px) {
    display: flex;
    grid-column: 12 / span 1;
  }
  @media (max-width: 900px) {
    display: flex;
    grid-column: 6 / span 1;
  }
`;