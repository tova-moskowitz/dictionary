import React from "react";
import "../App.css";
import PlayIcon from "./PlayIcon";

function NotFound({ keyword, audioFile }) {
  return (
    <div className="not-found">
      <h1 className="not-found-emoji">😕</h1>
      <h3>No Definitions Found</h3>
      <p className="not-found-error">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}

export default NotFound;
