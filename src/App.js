import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SettingsBar from "./components/SettingsBar";
import SearchBar from "./components/SearchBar";
import Keyword from "./components/Keyword";
import Definitions from "./components/Definitions";

function App() {
  const [keyword, setKeyword] = useState("");
  const [definitons, setDefinitions] = useState([]);
  const [word, setWord] = useState("");
  const [phonetic, setPhonetic] = useState("");

  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const onClick = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
      .then((res) => {
        const definitions = res.data;
        console.log(definitions);
        setWord(res.data[0].word);
        setPhonetic(res.data[0].phonetic);
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
      <div className="definitions">
        <Definitions phonetic={phonetic} />
      </div>
    </div>
  );
}

export default App;
