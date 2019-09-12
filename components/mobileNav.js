import SocialNav from "./SocialNav";
import styled, { css } from "styled-components";
import ActiveLink from "./activeLink";

export default function MobileNav(props) {
  return (
    <>
      <NavTrigger onClick={props.toggleNav} open={props.isOpen} />

      <NavWrapper open={props.isOpen}>
        <Navs>
          <MobileNavList onClick={props.closeNav}>
            <ActiveLink href="/home">
              <NavLink>
                <span>Home</span>
              </NavLink>
            </ActiveLink>
            <ActiveLink href="/nosotros">
              <NavLink>
                <span>Nosotros</span>
              </NavLink>
            </ActiveLink>
            <ActiveLink href="/renta">
              <NavLink>
                <span>Renta</span>
              </NavLink>
            </ActiveLink>
            <ActiveLink href="/contacto">
              <NavLink>
                <span>Contacto</span>
              </NavLink>
            </ActiveLink>
          </MobileNavList>
          <SocialNav isOpen={props.isOpen} menuNav />
        </Navs>
      </NavWrapper>
    </>
  );
}

const Navs = styled.div`
  grid-column: 4 / span 9;
  @media (max-width: 900px) {
    grid-column: 2 / span 10;
  }
`;

const NavLink = styled.a`
margin-bottom:10px;
  span {
    position: relative;
    &:after {
      content: " ";
      height: 2px;
      width: 100%;
      margin-top: 0px;
      display: block;
      position: absolute;
      transition: 0.2s ease all;
      background-color: ${props =>
        props.active ? props.theme.colors.background : "transparent"};
    }
    &:hover::after {
      background-color: ${props => props.theme.colors.background};
    }
  }
`;

const MobileNavList = styled.nav`
  flex-direction: column;
  display: flex;
  text-transform: uppercase;
`;

const NavTrigger = styled.div`
  width: 60px;
  height: 79px;
  position: fixed;
  z-index: 10;
  left: 0px;
  bottom: 50%;
  transform: translateY(50%);
  margin-left: 4%;
  cursor: pointer;
  &:before,
  &:after {
    content: " ";
    height: 100%;
    width: 4px;
    background-color: ${props =>
      props.open
        ? props.theme.colors.background
        : props.theme.colors.foreground};
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: bottom center;
    transition: transform 0.3s ease;
  }
  &:after {
    left: 20px;
  }
  ${props =>
    props.open &&
    css`
      &:before {
        transform: rotate(45deg) translate3d(-20px, 5px, 0px);
      }
      &:after {
        transform: rotate(-45deg) translate3d(20px, 5px, 0px);
      }
    `}
  @media (max-width: 1200px) {
    display: none;
  }
`;

const NavWrapper = styled.div`
  opacity: 0;
  padding: 2% 4% 0 4%;
  z-index: 9;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  color: white;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  background-color: ${props => props.theme.colors.foreground};
  color: ${props => props.theme.colors.background};
  pointer-events: none;
  transition: opacity 0.3s ease-in;
  @media (max-width: 900px) {
    a {
      padding-bottom: 2%;
    }
  }
  @media (max-width: 900px) {
    a {
      font-size: 2rem;
    }
  }
  @media (max-width: 450px) {
    a {
      font-size: 1.5rem;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ${props =>
    props.open &&
    css`
      opacity: 1;
      transition: opacity 0.2s ease-in;
      pointer-events: auto;
    `}
`;
