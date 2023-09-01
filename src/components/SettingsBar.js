import React from "react";
import "../App.css";
import bookLogo from "../assets/images/logo.svg";

function SettingsBar() {
  return (
    <div className="settings-bar">
      <img className="book-logo" src={bookLogo} alt="" />
    </div>
  );
}

export default SettingsBar;
