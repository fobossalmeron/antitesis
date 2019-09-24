import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styled, { css, keyframes } from "styled-components";

const ThePlayer = dynamic(import("react-player/lib/players/Vimeo"));

function VideoPlayer(props) {
  const [isPlaying, setPlaying] = useState(false);
  const [isInitial, setInitial] = useState(true);

  useEffect(() => {
    preloadVideoPlayer();
  }, []);

  function handlePlay(bool = !isPlaying) {
    setPlaying(bool);
  }

  function pauseVideo() {
    setPlaying(false);
  }

  function restoreVideo() {
    setPlaying(false);
  }

  function preloadVideoPlayer() {
    setInitial(false);
    console.log("should render player");
  }

  return (
    <VideoWrapper ratio={props.ratio}>
      <Clicker onClick={() => handlePlay()} hideSvg={isPlaying}>
        {isPlaying ? (
          <PauseButton id="paused">PAUSE</PauseButton>
        ) : (
          <PlayButton>PLAY</PlayButton>
        )}
      </Clicker>
      <Fader hide={isPlaying} />
      <OverStill
        style={{ backgroundImage: `url(${props.still})` }}
        hide={isPlaying}
        onClick={() => handlePlay(true)}
      />
      {!isInitial && (
        <ThePlayer
          playing={isPlaying}
          url={props.url}
          controls={false}
          height="auto"
          width="100%"
          onEnded={restoreVideo}
          onPause={pauseVideo}
          onPlay={() => handlePlay(true)}
          config={{
            vimeo: {
              preload: true
            }
          }}
        />
      )}
    </VideoWrapper>
  );
}

export default VideoPlayer;

//52.7 es el de todos menos, desechables tiene una línea negra a la derecha y el trailer está en 1080p

const VideoWrapper = styled.div`
  padding-bottom: ${props => props.ratio || "52.7%"};
  display: block;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.colors.foreground};
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const hidePause = keyframes`
  0% {
    opacity:0;
  }
  5% {
    opacity:1;
  }
  90% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
`;

const Clicker = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  position: absolute;
  pointer-events: auto;
  z-index: 3;
  cursor: pointer;
  ${props =>
    props.hideSvg &&
    css`
      span {
        opacity: 0;
      }
      :hover {
        span {
          animation: ${hidePause} 2.4s;
          animation-fill-mode: forwards;
        }
      }
    `}
  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    transition: opacity 0.4s ease;
    z-index: 3;
    color: white;
    font-size: 3.2rem;
    letter-spacing: 1px;
  }
`;

const OverStill = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  transition: 0.4s ease opacity;
  opacity: ${props => (props.hide ? "0" : "1")};
  pointer-events: ${props => (props.hide ? "none" : "auto")};
  background-size: cover;
`;

const PlayButton = styled.span`
  opacity: ${props => (props.hide ? "0" : "1")};
`;

const PauseButton = styled.span`
  opacity: ${props => (props.hide ? "0" : "1")};
`;

const Fader = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  transition: 0.4s ease opacity;
  margin-bottom: 50px;
  pointer-events: none;
  ${props =>
    props.hide &&
    css`
      opacity: 0;
    `}
`;
