import React from "react";
import "../App.css";
import PlayIcon from "./PlayIcon";

function Keyword({ keyword, audioFile }) {
  return (
    <div className="keyword">
      <h1 className="font-bold">{keyword}</h1>
      {audioFile && keyword && <PlayIcon audioFile={audioFile} />}
    </div>
  );
}

export default Keyword;
