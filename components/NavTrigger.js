import styled, { css } from "styled-components";

export default function NavTrigger(props) {
  return (
    <>
      <NavTriggerMobile onClick={props.onClick} open={props.open} />
      <NavTriggerMobile2 open={!props.open} />
    </>
  );
}

const NavTriggerMobile = styled.div`
  cursor: pointer;
  display: none;
  height: 45px;
  max-width: 50px;
  width: 100%;
  justify-self: flex-end;
  position: fixed;
  right: 0;
  top: 0;
  margin-top: 34px;
  margin-right: 4%;
  z-index: 13;
  &:before,
  &:after {
    content: " ";
    height: 3px;
    width: 100%;
    /* background-color: ${props =>
      props.open
        ? props.theme.colors.background
        : props.theme.colors.foreground}; */
    background-color: ${props => props.theme.colors.foreground};
    position: absolute;
    right: 0px;
    top: 0px;
    transition: transform 0.3s ease;
  }
  &:after {
    top: 19px;
  }
  ${props =>
    props.open &&
    css`
      &:before {
        transform: rotate(-45deg) translate3d(-7px, 6px, 0px);
      }
      &:after {
        transform: rotate(45deg) translate3d(-7px, -7px, 0px);
      }
    `}
  @media (max-width: 1200px) {
    display: flex;
  }
  @media (max-width: 960px) {
    margin-right: 5%;
  }
  @media (max-width: 700px) {
    &:before,
    &:after {
      height: 2px;
      max-width: 40px;
    }
    ${props =>
      props.open &&
      css`
        &:before {
          transform: rotate(-45deg) translate3d(-5px, 5px, 0px);
        }
        &:after {
          transform: rotate(45deg) translate3d(-5px, -5px, 0px);
        }
      `}
    &:after {
      top: 14px;
    }
  }
  @media (max-width: 600px) {
    margin-right: 20px;
  }
  @media (max-width: 370px) {
    &:before,
    &:after {
      max-width: 30px;
    }
    &:after {
      top: 11px;
    }
    ${props =>
      props.open &&
      css`
        &:before {
          transform: rotate(-45deg) translate3d(-4px, 4px, 0px);
        }
        &:after {
          transform: rotate(45deg) translate3d(-4px, -4px, 0px);
        }
      `}
  }
`;

const NavTriggerMobile2 = styled(NavTriggerMobile)`
  opacity: 0;
  z-index: 12;
  &:before,
  &:after {
    background-color: ${props =>
      !props.open
        ? props.theme.colors.background
        : props.theme.colors.foreground};
  }
`;
