import { useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { proyects } from "../portafolio/proyects.json";
import CursorVideo from "./../components/CursorVideo";
import Proyect from "./../components/Proyect";
import withSizes from "react-sizes";
import HeadSEO from "./../components/HeadSEO";
import ArrowIcon from "./../static/assets/img/layout/arrow.svg";

const Index = props => {
  const [counter, setCounter] = useState(1);

  var slides = Object.entries(proyects).map(function(_proyect, index) {
    var currentProyect = _proyect[1];
    var currentProyectId = _proyect[0];
    if (currentProyect.title === "Miedo Chico") {
      return;
    } else {
      return (
        <Proyect
          key={"screen" + index}
          counterNumber={index}
          setCounter={setCounter}
          title={currentProyect.title}
          title2={currentProyect.title2}
          mobileHeading={currentProyect.mobileHeading}
          mobileSubtitles={currentProyect.mobileSubtitles}
          subtitle={currentProyect.subtitle}
          link={currentProyectId}
          clip={currentProyect.clip}
          still={currentProyect.still}
        />
      );
    }
  });

  return (
    <HomeWrapper isEnabled={!props.isMobile} className="wrapperEnd">
      <HeadSEO
        title={"Antitesis Films | Inicio"}
        desc={`Somos una casa productora de cine, videoclips y formatos web, que se caracterizan 
        por ser la Antítesis de la agenda global, resultando en ficciones y documentales auténticos 
        desde una perspectiva que cuestiona.`}
        canonical={"https://somosantitesis.com/"}
      />
      {props.isNotMobile && <CursorVideo counter={counter} />}
      {slides}
      <Counter>
        <Fade>{counter + 1 + "/8"}</Fade>
      </Counter>
      <Arrow reveal={counter == 0 || counter == 7} turned={counter > 1}>
        <ArrowIcon />
      </Arrow>
    </HomeWrapper>
  );
};

const mapSizesToProps = ({ width }) => ({
  isNotMobile: width > 1200
});

export default withSizes(mapSizesToProps)(Index);

const Arrow = styled.div`
  position: fixed;
  padding-bottom: 2%;
  padding-top: 1%;
  padding-left: 76.9%;
  bottom: 0;
  left: 0;
  z-index: 2;
  opacity: ${props => (props.reveal ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;
  @media (max-width: 1200px) {
    padding-left: 50%;
  }
  @media (max-width: 600px) {
    display: none;
  }
  svg {
    width: 50px;
    height: auto;
    display: block;
    margin-bottom: -3px;
    transform: ${props => (props.turned ? "rotate(180deg)" : "rotate(0)")};
  }
`;

const Counter = styled.div`
  font-size: 1.32rem;
  position: fixed;
  padding-bottom: 2%;
  padding-top: 1%;
  padding-left: 27%;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: ${props => props.theme.colors.background};
  width: 100%;
  @media (max-width: 1200px) {
    padding-left: 4%;
  }
  @media (max-width: 600px) {
    padding-left: 20px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  -webkit-overflow-scrolling: touch;
  position: relative;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  padding: 180px 4% 0 4%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 880px) {
    grid-template-columns: 0.7fr 1fr 1fr 1fr 1fr 0.7fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 0.7fr 1fr 1fr 1fr 1fr 0.5fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.2fr;
  }
  @media (max-width: 400px) {
    grid-template-columns: 0.2fr 1fr 1fr 1fr 1fr 0.2fr;
    padding-top: 70px;
    padding-bottom: 100px;
  }
`;
