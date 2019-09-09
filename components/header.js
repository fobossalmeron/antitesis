import Link from "next/link";
import styled, { css } from "styled-components";
import ActiveLink from "./activeLink";

export default function Header(props) {
  return (
    <>
      <TopHeader hidden={props.hidden} isOpen={props.isOpen}>
        <Link href="/home">
          <Logotype>
            ANTÍTESIS
            <br /> FILMS
          </Logotype>
        </Link>
        <Desc>
          CASA PRODUCTORA
          <br /> EN LA CIUDAD
          <br /> DE MÉXICO
        </Desc>
        <NavList>
          <ActiveLink href="/nosotros">
            <NavLink>Nosotros</NavLink>
          </ActiveLink>
          <ActiveLink href="/renta">
            <NavLink>Renta</NavLink>
          </ActiveLink>
          <ActiveLink href="/contacto">
            <NavLink>Contacto</NavLink>
          </ActiveLink>
        </NavList>
      </TopHeader>
      <NavTriggerMobile onClick={() => props.toggleNav()} open={props.isOpen} />
    </>
  );
}

const NavTriggerMobile = styled.div`
  display: none;
  height: 45px;
  max-width: 50px;
  width: 100%;
  justify-self: flex-end;
  position: fixed;
  right: 0;
  top: 0;
  margin-top: calc(2% + 4px);
  margin-right: 4%;
  z-index: 13;
  &:before,
  &:after {
    content: " ";
    height: 3px;
    width: 100%;
    background-color: ${props =>
      props.open
        ? props.theme.colors.background
        : props.theme.colors.foreground};
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
        transform: rotate(45deg) translate3d(13px, 14px, 0px);
      }
      &:after {
        transform: rotate(-45deg) translate3d(-1px, 0px, 0px);
      }
    `}
  @media (max-width: 1200px) {
    display: flex;
  }
  @media (max-width: 960px) {
    margin-top: 24px;
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
        transform: rotate(45deg) translate3d(10px,11px,0px);
      }
    `}
    &:after {
      top: 14px;
    }
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
        transform: rotate(45deg) translate3d(8px,9px,0px);
      }
    `}
  }
`;

const Desc = styled.span`
  display: flex;
  grid-column: 4 / span 4;
  margin: 0;
  max-width: 380px;
`;

const TopHeader = styled.header`
  display: ${props => (props.hidden ? "none" : "grid")};
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-start;
  letter-spacing: 0.05rem;
  font-size: 1.3rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 2% 4% 2% 4%;
  z-index: 8;
  color: ${props => props.theme.colors.foreground};
  background-color: ${props =>
    props.isOpen ? "none" : props.theme.colors.background};
  pointer-events: none;
  /* @media (max-width: 1260px) {
    grid-template-columns: repeat(6, 1fr);
  } */
  @media (max-width: 960px) {
    grid-template-columns: repeat(6, 1fr);
    padding: 20px 5%;
    ${Desc} {
      grid-column: 3 / span 3;
    }
  }
  @media (max-width: 700px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
  @media (max-width: 550px) {
    font-size: 0.8rem;
  }
  @media (max-width: 450px) {
    font-size: 0.6rem;
  }
`;

const Logotype = styled.a`
  display: flex;
  grid-column: 1 / span 2;
  max-width: 130px;
  margin: 0;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  pointer-events: auto;
`;

const NavList = styled.nav`
  display: flex;
  justify-content: space-between;
  grid-column: 8 / span 5;
  a {
    margin: 0;
    color: ${props => props.theme.colors.foreground};
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 2%;
    pointer-events: auto;
    &:nth-last-of-type(1) {
      margin-right: 0;
    }
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const NavLink = styled.a`
  &:after {
    content: " ";
    width: 100%;
    height: 2px;
    margin-top: 4px;
    display: block;
    transition: 0.2s ease all;
  }
  &:hover {
    &:after {
      background-color: ${props => props.theme.colors.foreground};
    }
  }
  ${props =>
    props.active &&
    css`
      &:after {
        background-color: ${props => props.theme.colors.foreground};
      }
    `}
`;
