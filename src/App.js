import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SettingsBar from "./components/SettingsBar";
import SearchBar from "./components/SearchBar";
import Keyword from "./components/Keyword";
import Definitions from "./components/Definitions";

function App() {
  const [keyword, setKeyword] = useState("");
  const [definitions, setDefinitions] = useState("");
  const [meanings, setMeanings] = useState("");
  const [partOfSpeech, setPartOfSpeech] = useState([]);
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
        setWord(res.data[0].word);
        setPhonetic(res.data[0].phonetic);
        setDefinitions(res.data[0]);
        setMeanings(definitions[0].meanings);
        getPartsOfSpeech(meanings);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };

  const getPartsOfSpeech = (meanings) => {
    meanings.map((meaning) => {
      setPartOfSpeech(meaning.partOfSpeech);
    });
  };

  console.log(meanings);
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
          <Definitions phonetic={phonetic} partOfSpeech={partOfSpeech} />
        </div>
      )}
    </div>
  );
}

export default App;
