import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Slide from "react-reveal/Slide";
import Link from "next/link";
import withSizes from "react-sizes";

const Proyect = props => {
  const [ref, inView, entry] = useInView({
    threshold: 0.9,
    rootMargin: "200px"
  });

  useEffect(() => {
    if (inView) {
      props.setCounter(props.counterNumber);
    }
  }, [inView]);

  const multipleHeadings = mobileHeading => {
    let _headings = mobileHeading.map(function(heading, index) {
      var newKey = heading.piece.replace(/[^A-Z0-9]/gi, "_");
      return (
        <h2 className="mobile" key={`heading_${index}_${newKey}`}>
          {heading.piece}
        </h2>
      );
    });
    return _headings;
  };
  const multipleSubtitles = mobileSubtitles => {
    let _subtitles = mobileSubtitles.map(function(subtitle, index) {
      var newKey = subtitle.piece.replace(/[^A-Z0-9]/gi, "_");
      return (
        <h3 className="mobile" key={`subtitle_${index}_${newKey}`}>
          {subtitle.piece}
        </h3>
      );
    });
    return _subtitles;
  };

  var secondTitle = props.title2 !== undefined ? props.title2 : "";

  return (
    <ProyectWrapper>
      <Info ref={ref}>
        <Slide bottom cascade when={inView}>
          <h2 className={props.mobileHeading !== undefined ? "desktop" : ""}>
            {props.title}
          </h2>
          <h2 className={props.mobileHeading !== undefined ? "desktop" : ""}>
            {secondTitle}
          </h2>
          {props.mobileHeading !== undefined
            ? multipleHeadings(props.mobileHeading)
            : ""}
        </Slide>
        <Additional>
          <Subtitle>
            <Slide bottom cascade when={inView}>
              <h3
                className={props.mobileSubtitles !== undefined ? "desktop" : ""}
              >
                {props.subtitle}
              </h3>
              {props.mobileSubtitles !== undefined
                ? multipleSubtitles(props.mobileSubtitles)
                : ""}
            </Slide>
          </Subtitle>
          <Fade bottom when={inView}>
            <Link href="/[id]" as={`/${props.link}`}>
              <h4>Ver Proyecto</h4>
            </Link>
          </Fade>
          {props.isMobile ? (
            <StillContainer>
              <Fade when={inView}>
                <Still
                  style={{
                    backgroundImage: `url(static/assets/img/stills/${props.still}`
                  }}
                />
              </Fade>
            </StillContainer>
          ) : (
            ""
          )}
        </Additional>
      </Info>
    </ProyectWrapper>
  );
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 1200
});

export default withSizes(mapSizesToProps)(Proyect);

const Additional = styled.div`
  position: relative;
`;

const StillContainer = styled.div`
  right: 0px;
  top: -20px;
  width: 43%;
  grid-column: 1 / span 3;
  position: absolute;
  z-index: -1;
  @media (max-width: 900px) {
    right: 10%;
  }
  @media (max-width: 700px) {
    right: 25%;
    width: 35%;
  }
`;

const Still = styled.figure`
  height: 0;
  background-size: cover;
  background-position: center center;
  padding-bottom: 52.6%;
  width: 100%;
  @media (max-width: 700px) {
    padding-bottom: 70%;
  }
  @media (max-width: 500px) {
    padding-bottom: 85%;
  }
`;

const ProyectWrapper = styled.section`
  grid-column: 4 / span 7;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto auto auto;
  align-items: flex-start;
  position: relative;
  height: calc(100vh - 180px);
  scroll-snap-align: end;
  scroll-snap-stop: always;
  z-index: 1;
  h3 {
    grid-column: 1 / span 7;
    margin-bottom: 0;
    white-space: nowrap;
  }
  h2 {
    grid-column: 1 / span 7;
    text-transform: uppercase;
    font-size: 3.2rem;
    grid-row: 1;
    white-space: nowrap;
  }
  h4 {
    grid-column: 1 / span 7;
    display: inline-flex;
    cursor: pointer;
    overflow: visible;
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s ease;
    &:hover {
      border-color: ${props => props.theme.colors.foreground};
    }
  }
  @media (max-width: 1200px) {
    h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 1000px) {
    grid-column: 2 / span 4;
  }
  @media (max-width: 1150px) {
    h2 {
      font-size: 2.8rem;
    }
    h3 {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 800px) {
    h2 {
      font-size: 2.4rem;
    }
    h3 {
      font-size: 2.2rem;
    }
    h4 {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 660px) {
    h2 {
      font-size: 2.2rem;
    }
    h3 {
      font-size: 2rem;
    }
    h4 {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 600px) {
    height: auto;
    scroll-snap-stop: normal;
    scroll-snap-align: none;
    margin-top: 0%;
    margin-bottom: 10%;
  }
  @media (max-width: 400px) {
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.9rem;
    }
    h4 {
      font-size: 0.6rem;
    }
  }
  @media (max-width: 360px) {
    h2 {
      font-size: 1.7rem;
    }
    h3 {
      font-size: 1.6rem;
    }
  }
`;

const Info = styled.div`
  grid-column: span 7;
  padding-bottom: 4%;
  margin-top: 15%;
  position: relative;
  h2 {
    margin-top: 1.2%;
  }
  .mobile {
    display: none;
  }
  @media (max-width: 950px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;

const Subtitle = styled.div`
  margin-top: 20px;
  h3 {
    margin-top: 0;
  }
`;
