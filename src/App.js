import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SettingsBar from "./components/SettingsBar";
import SearchBar from "./components/SearchBar";
import Keyword from "./components/Keyword";
import Definitions from "./components/Definitions";

function App() {
  const [keyword, setKeyword] = useState("");
  const [allData, setAllData] = useState("");
  const [meanings, setMeanings] = useState("");
  const [partsOfSpeech, setPartsOfSpeech] = useState([]);
  const [word, setWord] = useState("");
  const [phonetic, setPhonetic] = useState("");

  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const onClick = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
      .then((res) => {
        const data = res.data[0];
        setAllData(data);
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
        <SearchBar onClick={onClick} onChange={onChange} keyword={keyword} />
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
