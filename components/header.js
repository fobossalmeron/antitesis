import Link from "next/link";
import styled from "styled-components";
import { useEffect } from "react";

export default function Header(props) {
  return (
    <>
      <TopHeader hidden={props.hidden} isOpen={props.isOpen}>
        <Link href="/home">
          <Logotype>ANTÍTESIS FILMS</Logotype>
        </Link>
        <Desc>CASA PRODUCTORA EN LA CIUDAD DE MÉXICO</Desc>
        <NavList>
          <Link href="/nosotros" prefetch={true}>
            <a>Nosotros</a>
          </Link>
          <Link href="/renta" prefetch={true}>
            <a>Renta</a>
          </Link>
          <Link href="/contacto" prefetch={true}>
            <a>Contacto</a>
          </Link>
        </NavList>
      </TopHeader>
      <NavTriggerMobile onClick={() => props.toggleNav()} open={props.isOpen} />
    </>
  );
}

const NavTriggerMobile = styled.div`
  display: none;
  height: 30px;
  max-width: 50px;
  width: 100%;
  justify-self: flex-end;
  margin-top: 3px;
  position: absolute;
  right: 4%;
  top: 2%;
  z-index: 13;
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

  @media (max-width: 900px) {
    grid-template-columns: repeat(6, 1fr);
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
`;

const Desc = styled.span`
  display: flex;
  grid-column: 4 / span 4;
  margin: 0;
  max-width: 380px;
  @media (max-width: 900px) {
    grid-column: 3 / span 3;
  }
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
    padding-right: 2%;
    &:nth-last-of-type(1) {
      padding-right: 0;
    }
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;
