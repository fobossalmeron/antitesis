import FilePlayer from "react-player/lib/players/FilePlayer";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useEffect, useState, useRef } from "react";
import { proyects } from "../portafolio/proyects.json";

// USES TOP LEFT, KEEPS RAPID CHANGING STATE INSIDE REACT, CHANGED FOR PERFORMANCE

const _p = Object.entries(proyects);

const CursorVideo = props => {
  const [video, setVideo] = useState("antitesis.mp4");
  const [isVisible, setVisible] = useState(true);
  const [firstTouch, setTouch] = useState(true);
  const videoRef = useRef(null);

  const [pos, setPos] = useState({
    x: 800,
    y: 430
  });

  // Video appear and disappear

  useEffect(() => {
    setVisible(false);
    setVideo(_p[props.counter][1].clip);
    setTimeout(() => setVisible(true), 200);
  }, [props.counter]);

  // End if video

  useEffect(() => {
    let posX, posY;
    const rightMargin =
      window.innerWidth - window.innerWidth / 10 - videoRef.current.offsetWidth;
    const leftMargin = window.innerWidth / 10 + 40;
    const topMargin = window.innerHeight / 5.6;
    const bottomMargin =
      window.innerHeight -
      window.innerHeight / 16 -
      videoRef.current.offsetHeight;

    posX = props.position.x;
    posY = props.position.y;

    if (posX > rightMargin) {
      posX = rightMargin;
    } else if (posX < leftMargin) {
      posX = leftMargin;
    }

    if (posY < topMargin) {
      posY = topMargin;
    } else if (posY > bottomMargin) {
      posY = bottomMargin;
    }
    if (props.position.x > 0 || !firstTouch) {
      setPos({ x: posX, y: posY });
      if (firstTouch) {
        setTouch(false);
      }
    }
  }, [props.position]);

  return (
    <VideoContainer>
      <Video
        style={{
          top: `${pos.y - 200}px`,
          left: `${pos.x - 200}px`
        }}
        ref={videoRef}
      >
        <Fade when={isVisible}>
          <FilePlayer
            url={`../static/assets/video/${video}`}
            muted={true}
            volume={0}
            controls={false}
            loop={true}
            playing={true}
            wrapper={"figure"}
            width={"100%"}
            height={"0"}
          />
        </Fade>
      </Video>
    </VideoContainer>
  );
};

export default CursorVideo;

const VideoContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 10%;
  bottom: 10%;
  right: 11.7%;
  z-index: 0;
`;

const Video = styled.div`
  max-width: 390px;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: -1;
  background-color: black;
  figure {
    background-size: cover;
    background-position: center;
    z-index: 10;
    width: 100%;
    height: 100%;
    margin: 0;
    height: 0;
    padding-bottom: 56.2%;
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
    }
  }
  @media (max-width: 900px) {
    grid-column: 4 / span 2;
  }
  @media (max-width: 700px) {
    height: 130px;
  }
`;
