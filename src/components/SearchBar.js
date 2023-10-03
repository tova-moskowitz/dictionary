import React from "react";
import "../App.css";
import searchLogo from "../assets/images/icon-search.svg";

function SearchBar({
  onFocus,
  onBlur,
  focusClass,
  errorClass,
  handleKeypress,
  handleSubmit,
  onChange,
  keyword,
}) {
  return (
    <div className={`search-bar ${errorClass} ${focusClass}`}>
      <input
        className={focusClass}
        onBlur={onBlur}
        onFocus={onFocus}
        className="search-input"
        type="text"
        placeholder="Search for any word..."
        name="keyword"
        onChange={onChange}
        value={keyword}
        onKeyPress={handleKeypress}
      />
      <button onClick={handleSubmit} className="btn-search">
        <img className="search-logo" src={searchLogo} alt="" />
      </button>
    </div>
  );
}

export default SearchBar;
