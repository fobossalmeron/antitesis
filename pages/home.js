import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { proyects } from "../portafolio/proyects.json";
import ReactCursorPosition from "react-cursor-position";
import CursorVideo from "./../components/CursorVideo";
import Proyect from "./../components/Proyect";
import withSizes from "react-sizes";

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
    <HomeWrapper isEnabled={!props.isMobile}>
      <Head>
        <title>Antitesis Films</title>
      </Head>
      {slides}
      {!props.isMobile ? <CursorVideo counter={counter} /> : ""}
      <Counter>
        <Fade>{counter + 1 + "/8"}</Fade>
      </Counter>
    </HomeWrapper>
  );
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 1200
});

export default withSizes(mapSizesToProps)(Index);

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
    display:none;
  }
`;

const HomeWrapper = styled(ReactCursorPosition)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
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
    padding-bottom:100px;
  }
`;
