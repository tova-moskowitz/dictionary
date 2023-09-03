import React from "react";
import "../App.css";
import searchLogo from "../assets/images/icon-search.svg";

function SearchBar({ onClick, onChange, keyword }) {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search for any word..."
        name="keyword"
        onChange={onChange}
        value={keyword}
        autoComplete="off"
      />
      <button onClick={onClick} className="btn-search">
        <img className="search-logo" src={searchLogo} alt="" />
      </button>
    </div>
  );
}

export default SearchBar;
