import FilePlayer from "react-player/lib/players/FilePlayer";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useEffect, useState, useRef } from "react";
import { proyects } from "../portafolio/proyects.json";
// import { TweenLite } from "gsap";
import TweenLite from "gsap";
import {
  setState,
  addStateChangeListener,
  removeAllListeners
} from "./external/state";

const _p = Object.entries(proyects);

const CursorVideo = props => {
  const [video, setVideo] = useState("antitesis.mp4");
  const [isVisible, setVisible] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // Video appear and disappear
    setVisible(false);
    setVideo(_p[props.counter][1].clip);
    setTimeout(() => setVisible(true), 200);
  }, [props.counter]);

  useEffect(() => {
    // Gsap
    window.addEventListener("mousemove", onMouseMove);
    addStateChangeListener(state => {
      TweenLite.to(videoRef.current, 0.1, {
        x: state.x,
        y: state.y
      });
    });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      removeAllListeners();
    };
  }, []);

  const onMouseMove = e => {
    // Catch mouse pos and limits
    let posX, posY;
    const rightMargin =
      window.innerWidth - window.innerWidth / 10 - videoRef.current.offsetWidth;
    const leftMargin = window.innerWidth / 10 + 40;
    const topMargin = window.innerHeight / 5.6;
    const bottomMargin =
      window.innerHeight -
      window.innerHeight / 16 -
      videoRef.current.offsetHeight;

    posX = e.clientX;
    posY = e.clientY;

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
    setState({
      x: posX - 200,
      y: posY - 200
    });
  };

  return (
    <VideoContainer>
      <Video ref={videoRef}>
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
  top: 0;
  left: 0;
  transform: translate3d(530px, 230px, 0);
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
