import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SettingsBar from "./components/SettingsBar";
import SearchBar from "./components/SearchBar";
import Keyword from "./components/Keyword";
import Definitions from "./components/Definitions";
import newWindow from "./assets/images/icon-new-window.svg";

function App() {
  const [keyword, setKeyword] = useState("");
  const [meanings, setMeanings] = useState("");
  const [word, setWord] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [audioFile, setAudioFile] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [theme, setTheme] = useState();
  // const [checked, setChecked] = useState(true);

  const setThemeInStorage = (theme) => {
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme(localStorage.getItem("theme"));

    // localStorage.setItem("checked", theme === "dark" ? "checked" : "disabled");
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.body.className = theme;
    }
  }, [theme]);

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      handleSubmit();
    }
  };

  const toggleTheme = (e) => {
    setTheme(theme === "dark" ? "light" : "dark");
    // setChecked(e.target.checked);

    setThemeInStorage(theme);
  };

  const handleSubmit = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
      .then((res) => {
        const data = res.data[0];
        setWord(data.word);
        setPhonetic(data.phonetic);
        setSourceUrl(data.sourceUrls[0]);
        setMeanings(data.meanings);

        data.phonetics.map((phonetic) => {
          if (phonetic.audio.indexOf(`${word}-us`) !== 0) {
            setAudioFile(phonetic.audio);
          } else if (phonetic.audio.indexOf(`${word}-uk`) !== 0) {
            setAudioFile(phonetic.audio);
          } else if (phonetic.audio.indexOf(`${word}-au`) !== 0) {
            setAudioFile(phonetic.audio);
          }
        });
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };

  return (
    <div className="wrapper">
      <div className="settings">
        <SettingsBar toggleTheme={toggleTheme} mode={theme} />
      </div>
      <div className="search">
        <SearchBar
          handleKeypress={handleKeypress}
          handleSubmit={handleSubmit}
          onChange={onChange}
          keyword={keyword}
        />
      </div>
      <Keyword keyword={word} audioFile={audioFile} />
      {word && (
        <div className="definitions">
          <div className="phonetic">{phonetic}</div>
          <Definitions meanings={meanings} />
          <p>
            source {sourceUrl}&nbsp;
            <a href={sourceUrl} target="_blank">
              <img src={newWindow} />
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
