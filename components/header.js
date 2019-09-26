import Link from "next/link";
import styled, { css } from "styled-components";
import ActiveLink from "./activeLink";
import NavTrigger from "./NavTrigger";

export default function Header(props) {
  return (
    <>
      <TopHeader hidden={props.hidden} isOpen={props.isOpen}>
        <Link href="/" passHref>
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
      <NavTrigger onClick={() => props.toggleNav()} open={props.isOpen} />
    </>
  );
}

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
  background-color: ${props => props.theme.colors.background};
  pointer-events: none;
  @media (max-width: 1200px) {
    padding-top: 22px;
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(6, 1fr);
    padding: 22px 5%;
    ${Desc} {
      grid-column: 3 / span 3;
    }
  }
  @media (max-width: 700px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    padding: 22px 20px 20px 20px;
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
