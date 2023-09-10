import React from "react";
import "../App.css";
import playIcon from "../assets/images/icon-play.svg";

function Keyword({ keyword, audioFile }) {
  const playAudio = () => {
    new Audio(audioFile).play();
  };

  return (
    <div className="keyword">
      <h1 className="font-bold">{keyword}</h1>
      {audioFile && (
        <div className="play-sound">
          <img
            onClick={playAudio}
            className="play-icon"
            src={playIcon}
            alt="play icon"
          />
        </div>
      )}
    </div>
  );
}

export default Keyword;
