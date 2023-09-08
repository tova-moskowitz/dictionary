import React from "react";
import "../App.css";
import CustomizedSwitches from "./CustomizedSwitches";
import bookLogo from "../assets/images/logo.svg";

function SettingsBar({ toggleTheme }) {
  return (
    <div className="settings-bar">
      <img className="book-logo" src={bookLogo} alt="" />
      <CustomizedSwitches toggleTheme={toggleTheme} />
    </div>
  );
}

export default SettingsBar;
