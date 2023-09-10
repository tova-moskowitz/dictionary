import React from "react";
import "../App.css";
import playIcon from "../assets/images/icon-play.svg";

function Keyword({ keyword, audioFile }) {
  return (
    <div className="keyword">
      <h1 className="font-bold">{keyword}</h1>
      {keyword && (
        <div className="play-sound">
          <img className="play-icon" src={playIcon} alt="" />
          <audio className="play-icon" controls autoplay>
            <source src={audioFile} type="audio/mp3" />
          </audio>
        </div>
      )}
    </div>
  );
}

export default Keyword;
