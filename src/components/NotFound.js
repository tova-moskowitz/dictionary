import React from "react";
import "../App.css";

function NotFound({ errorResponse }) {
  return (
    <div className="not-found">
      <h1 className="not-found-emoji">😕</h1>
      <h3>{errorResponse.title}</h3>
      <div className="not-found-error">
        <p>
          {errorResponse.message} {errorResponse.resolution}
        </p>
      </div>
    </div>
  );
}

export default NotFound;
