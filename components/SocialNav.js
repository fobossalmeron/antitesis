import Ig from "../static/assets/img/social/ig.svg";
import Tw from "../static/assets/img/social/tw.svg";
import Fb from "../static/assets/img/social/fb.svg";
import Yt from "../static/assets/img/social/yt.svg";
import Vm from "../static/assets/img/social/vm.svg";
import styled from "styled-components";

export default function SocialNav({ isOpen, menuNav }) {
  return (
    <Social isOpen={isOpen} menuNav={menuNav}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/somos.antitesis"
      >
        <Fb />
      </a>
      {/* <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/somos.antitesis/"
      >
        <Tw />
      </a> */}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/somos.antitesis/"
      >
        <Ig />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/channel/UC4FaZ7lsNEeAOzAKaAJKUXA"
      >
        <Yt />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/somos.antitesis/"
      >
        <Vm />
      </a>
    </Social>
  );
}


const Social = styled.div`
  align-self: flex-end;
  justify-self: flex-start;
  font-size: 1.3em;
  min-width: 85px;
  margin-bottom: -8px;
  display: ${props => (!props.menuNav ? "flex" : "none")};
  a {
    color: inherit;
    text-decoration: none;
    pointer-events: auto;
  }
  svg {
    width: 28px;
    height: 28px;
    margin-right: 8px;
    * {
      fill: ${props =>
        props.isOpen
          ? props.theme.colors.background
          : props.theme.colors.foreground};
      transition: fill 300ms ease-out;
    }
    .plasta {
      fill: ${props =>
        props.isOpen
          ? props.theme.colors.background
          : props.theme.colors.foreground};
      opacity: 0;
      transition: opacity 150ms ease-out;
    }
    &:hover {
      *:not(.plasta) {
        fill: ${props =>
          props.isOpen
            ? props.theme.colors.foreground
            : props.theme.colors.background};
      }
      .plasta {
        opacity: 1;
      }
    }
  }
  @media (max-width: 1200px) {
    display: ${props => (props.menuNav ? "flex" : "none")};
    grid-column: 4 / span 9;
    margin-top: 25px;
    a{
      pointer-events:${props => (props.isOpen ? "auto" : "none")};
    }
  }
`;