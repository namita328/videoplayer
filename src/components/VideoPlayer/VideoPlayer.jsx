import React, { useRef, useState } from "react";
import LeftRoundedArrow from "../../assets/LeftRounded.png";
import RightRoundedArrow from "../../assets/RightRounded.png";
import {
  Player,
  ControlBar,
  PlayToggle,
  PlaybackRateMenuButton,
} from "video-react";
import "video-react/dist/video-react.css";
import styles from "../VideoPlayer/VideoPlayer.module.css";

const VideoPlayer = () => {
  const playerRef = useRef(null);
  const [minimized, setMinimized] = useState(false);

  const handleForward = () => {
    if (playerRef.current) {
      playerRef.current.seek(
        playerRef.current.getState().player.currentTime + 10
      );
    }
  };

  const handleBackward = () => {
    if (playerRef.current) {
      playerRef.current.seek(
        playerRef.current.getState().player.currentTime - 10
      );
    }
  };

  const handleClose = () => {
    setMinimized(false);
  };

  const handleExpand = () => {
    setMinimized(true);
  };

  return (
    <div className={styles.videoContainer}>
      {!minimized ? (
        <>
          <h1>Media Player</h1>
          <Player
            autoPlay
            ref={playerRef}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            fluid={false}
            width={800}
            height={450}
          >
            <ControlBar autoHide={false} className="my-class">
              <button
                className={styles.leftControlButton}
                onClick={handleBackward}
              >
                <img src={LeftRoundedArrow} alt="backward" />
              </button>
              <PlayToggle />
              <button
                className={styles.rightControlButton}
                onClick={handleForward}
              >
                <img src={RightRoundedArrow} alt="Forward" />
              </button>
              <PlaybackRateMenuButton
                rates={[0.75, 1, 1.25, 1.5, 2]}
                order={7}
                className={styles.ratioMenu}
              />
            </ControlBar>
          </Player>
          <button className={styles.minimizeButton} onClick={handleExpand}>
            Minimize
          </button>
        </>
      ) : (
        <div className={styles.minimizedContainer}>
          <Player
            autoPlay
            ref={playerRef}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            fluid={false}
            width={300}
            height={169}
          />
          <button className={styles.closeButton} onClick={handleClose}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
