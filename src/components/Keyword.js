import React from "react";
import "../App.css";
import playIcon from "../assets/images/icon-play.svg";

function Keyword({ keyword }) {
  return (
    <div className="keyword">
      <h1>{keyword}</h1>
      {keyword && (
        <div className="play-sound">
          <img className="play-icon" src={playIcon} alt="" />
        </div>
      )}
    </div>
  );
}

export default Keyword;
