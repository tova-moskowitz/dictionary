import React from "react";
import "../App.css";
import CustomizedSwitches from "./CustomizedSwitches";
import bookLogo from "../assets/images/logo.svg";

function SettingsBar({ toggleTheme, mode }) {
  return (
    <div className="settings-bar">
      <img className="book-logo" src={bookLogo} alt="" />
      <CustomizedSwitches toggleTheme={toggleTheme} mode={mode} />
    </div>
  );
}

export default SettingsBar;
