import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./header";
import Logo from "../static/assets/img/layout/favicon.svg";
import SocialNav from "./SocialNav";
import Nav from "./Nav";
import { initGA, logPageView } from "utils/analytics";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

export default ({ children, title = "Antitesis", changeTheme, visible }) => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const closeNav = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
    document.getElementById("PageWrapper").scrollTop = 0;
  }, [router.route]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  const doChangeTheme = () => {
    changeTheme();
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Styles />
      <PageWrapper id="PageWrapper" visible={visible}>
        <Header toggleNav={toggleNav} closeNav={closeNav} isOpen={isOpen} />
        <Nav toggleNav={toggleNav} closeNav={closeNav} isOpen={isOpen} />

        {children}
        <ModeToggler isOpen={isOpen} onClick={() => doChangeTheme()}>
          <Logo />
        </ModeToggler>

        <Footer isOpen={isOpen}>
          <SocialNav isOpen={isOpen} />
          <Date>© MMXIX</Date>
        </Footer>
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease;
  width: 100%;
  padding: 180px 4% 0 4%;
  height: 100%;
  position: relative;
  flex-direction: column;
  overflow-y: scroll;
  display: flex;
  justify-content: flex-start;
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
  -webkit-overflow-scrolling: touch;
  -moz-scrollbar-color: ${props =>
    props.theme.colors.foreground + " " + props.theme.colors.background};
  scrollbar-width: thin;
  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.background};
  }
  &::-webkit-scrollbar {
    width: 7px;
    background-color: ${props => props.theme.colors.background};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.foreground};
    border: none;
  }
  @media (max-width: 700px) {
    padding-top: 150px;
  }
  @media (max-width: 550px) {
    padding-top: 110px;
  }
`;

const ModeToggler = styled.div`
  cursor: pointer;
  justify-content: flex-end;
  display: ${props => (props.hidden ? "none" : "flex")};
  position: fixed;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  width: 15%;
  height: auto;
  margin-right: 4%;
  max-width: 175px;
  z-index: 10;
  svg {
    width: 100%;
    max-width: 108px;
    path {
      fill: ${props =>
        props.isOpen
          ? props.theme.colors.background
          : props.theme.colors.foreground};
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 4% 2% 4%;
  width: 100%;
  color: ${props =>
    props.isOpen
      ? props.theme.colors.background
      : props.theme.colors.foreground};
  justify-content: space-between;
  z-index: 10;
  pointer-events: none;
  @media (max-width: 1200px) {
    justify-content: flex-end;
  }
`;

const Date = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  font-size: 1.3em;
  min-width: 100px;
  text-align: right;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
  @media (max-width: 500px) {
    font-size: 0.6rem;
  }
`;

const Styles = createGlobalStyle`
  html{
    background-color: ${props => props.theme.colors.foreground};
  }
  body {
    color: ${props => props.theme.colors.foreground};
  }
`;
