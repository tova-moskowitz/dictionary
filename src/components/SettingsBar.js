import React from "react";
import "../App.css";
import CustomizedSwitches from "./CustomizedSwitches";
import bookLogo from "../assets/images/logo.svg";
import FontSelect from "./FontSelect";

function SettingsBar({ toggleTheme, onChangeFontSelect }) {
  return (
    <>
      <div className="settings-bar">
        <img className="book-logo" src={bookLogo} alt="" />
        <FontSelect onChangeFontSelect={onChangeFontSelect} />
        <CustomizedSwitches toggleTheme={toggleTheme} />
      </div>
    </>
  );
}

export default SettingsBar;
