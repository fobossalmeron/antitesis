import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import ErrorPage from "./_error";
import GridWrapper from "components/GridWrapper";
import VideoPlayer from "components/videoPlayer";
import { useEffect } from "react";
import HeadSEO from "components/HeadSEO";

import { proyects } from "../portafolio/proyects.json";

const Post = ({ proyect, query }) => {
  useEffect(() => {
    document.getElementById("PageWrapper").scrollTop = 0;
  }, [proyect]);

  function set(x) {
    return { __html: x };
  }

  var description =
    proyect.description !== undefined ? <p>{proyect.description}</p> : "";

  var credits =
    proyect.credits !== undefined ? (
      <p dangerouslySetInnerHTML={set(proyect.credits)} />
    ) : (
      ""
    );

  var otherProyects = Object.entries(proyects).map(function(_proyect, index) {
    var currentProyect = _proyect[1];
    var currentProyectId = _proyect[0];

    if (
      currentProyect.title === proyect.title ||
      currentProyect.title === "Miedo Chico"
    ) {
      return;
    } else {
      return (
        <Fade key={"proyect" + index}>
          <Link href={`/[id]`} as={`/${currentProyectId}`}>
            <figure
              style={{
                backgroundImage:
                  `url(../static/assets/img/stills/` +
                  currentProyect.still +
                  `)`
              }}
            />
          </Link>
        </Fade>
      );
    }
  });
  if (proyect === "error") {
    return <ErrorPage statusCode={404} title={"404"} />;
  }
  return (
    <GridWrapper key={"player" + proyect + Math.random()}>
      <HeadSEO
        title={`Antítesis Films | Proyectos | ${proyect.title} ${
          proyect.title2 !== undefined ? proyect.title2 : ""
        }`}
        desc={proyect.meta}
        canonical={`https://somosantitesis.com/${query.id}`}
        image={`https://somosantitesis.com/static/assets/img/og/${query.id}.jpg`}
      />
      <Head>
        <title>
          Antítesis Films | Proyectos | {proyect.title}
          {proyect.title2 !== undefined ? proyect.title2 : null}
        </title>
      </Head>
      <PlayerContainer>
        <Fade>
          <VideoPlayer
            url={proyect.videoUrl}
            still={`../static/assets/img/stills/${proyect.still}`}
          />
        </Fade>
      </PlayerContainer>
      <ResponsiveH2>
        <Slide bottom cascade>
          <h2>{proyect.title}</h2>
          {proyect.title2 !== undefined ? <h2>{proyect.title2}</h2> : ""}
        </Slide>
      </ResponsiveH2>
      <Fade>
        <h3>{proyect.subtitle}</h3>
        {description}
        {credits}
        <h4>Otros Proyectos</h4>
      </Fade>
      <OtrosProyectos>{otherProyects}</OtrosProyectos>
    </GridWrapper>
  );
};

Post.getInitialProps = async ({ query }) => {
  let proyect = proyects[`${query.id}`];
  if (proyect == undefined) {
    proyect = "error";
  }
  return { proyect, query };
};

export default Post;

const ResponsiveH2 = styled.div`
  h2 {
    white-space: nowrap;}

    @media (max-width: 1620px) {
      h2{font-size: 3rem;}

    }
    @media (max-width: 1515px) {
      h2{font-size: 2.7rem;}
    }
    @media (max-width: 1200px) {
      h2{font-size: 2.5rem;}
    }
    @media (max-width: 740px) {
      h2{font-size: 2.2rem;}
    }
    @media (max-width: 650px) {
      h2{font-size: 1.9rem;}
    }
    @media (max-width: 560px) {
      h2{font-size: 1.6rem;}
    }
    @media (max-width: 470px) {
      h2{font-size: 1.3rem;}
    }
    @media (max-width: 385px) {
      h2{font-size: 1rem;}
    }
  }
`;

const PlayerContainer = styled.div`
  grid-column: 4 / span 6;
`;

const OtrosProyectos = styled.div`
  grid-column: 4 / span 6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  figure {
    background-size: 100%;
    background-position: center center;
    grid-column-end: span 2;
    background-color: pink;
    height: 0;
    padding-bottom: 50%;
    opacity: 0.8;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-size: 105%;
      opacity: 1;
    }
  }
`;
