import React from "react";
import "../App.css";

function Definitions({ phonetic, partOfSpeech }) {
  return (
    <>
      <div className="phonetic">{phonetic}</div>
      <div className="part-of-speech">
        <em>{partOfSpeech}</em>
      </div>
    </>
  );
}

export default Definitions;