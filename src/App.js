import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SettingsBar from "./components/SettingsBar";
import SearchBar from "./components/SearchBar";
import Keyword from "./components/Keyword";
import Definitions from "./components/Definitions";

function App() {
  const [keyword, setKeyword] = useState("");
  const [meanings, setMeanings] = useState("");
  const [word, setWord] = useState("");
  const [phonetic, setPhonetic] = useState("");

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
      .then((res) => {
        const data = res.data[0];
        setWord(data.word);
        setPhonetic(data.phonetic);
        setMeanings(data.meanings);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };

  return (
    <div className="wrapper">
      <div className="settings">
        <SettingsBar />
      </div>
      <div className="search">
        <SearchBar
          handleKeypress={handleKeypress}
          handleSubmit={handleSubmit}
          onChange={onChange}
          keyword={keyword}
        />
      </div>
      <Keyword keyword={word} />
      {word && (
        <div className="definitions">
          <div className="phonetic">{phonetic}</div>
          <Definitions meanings={meanings} />
        </div>
      )}
    </div>
  );
}

export default App;
