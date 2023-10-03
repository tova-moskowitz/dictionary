import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import cn from "classnames";
import SettingsBar from "./components/SettingsBar";
import SearchBar from "./components/SearchBar";
import Keyword from "./components/Keyword";
import Definitions from "./components/Definitions";
import iconNewWindow from "./assets/images/icon-new-window.svg";
import NotFound from "./components/NotFound";

function App() {
  const [keyword, setKeyword] = useState("");
  const [meanings, setMeanings] = useState("");
  const [word, setWord] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [audioFile, setAudioFile] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [errorType, setErrorType] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorClass, setErrorClass] = useState("error");
  const [focusClass, setFocusClass] = useState("");
  const [theme, setTheme] = useState("light");
  const [font, setFont] = useState("sansSerif");

  // const [theme, setTheme] = useState(() => {
  //   return localStorage.getItem("theme") || "light";
  // });
  // const [checked, setChecked] = useState(() => {
  //   return JSON.parse(localStorage.getItem("checked")) || false;
  // });
  // const [checked, setChecked] = useState(true);

  const toggleTheme = (e) => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.body.classList = newTheme;
    setTheme(newTheme);

    // const localStorageTheme = localStorage.getItem("theme");
    // localStorage.setItem(
    //   "theme",
    //   localStorageTheme ? localStorageTheme : newTheme
    // );
    // localStorage.setItem("theme", e.target.checked ? "dark" : "light");
    // setTheme(localStorage.getItem("theme") === "dark" ? "light" : "dark");

    // localStorage.setItem("checked", e.target.checked);
    // setChecked(JSON.parse(localStorage.getItem("checked")) ? false : true);
  };

  const onChangeFontSelect = (e) => {
    setFont(e.target.value);
  };

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      handleSubmit(e);
    }
  };

  const onFocus = (e) => {
    setFocusClass(errorClass === "error-border" ? "" : "focus");
    console.log(e.target.value);
  };

  const onBlur = (e) => {
    setFocusClass("");
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    setErrorType("");
    const lookupWord = e.target.value || e.currentTarget.innerText || keyword;
    setKeyword(lookupWord);
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${lookupWord}`)
      .then((res) => {
        setErrorMessage("");
        setErrorClass("");
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
        console.log("ERROR: ", error.response.data);
        setErrorResponse(error.response.data);
        setErrorType("not-found");

        if (keyword === "") {
          setErrorMessage("Whoops, can't be empty...");
          setErrorType("empty");
          setErrorClass("error-border");
        } else {
          setErrorMessage("");
        }

        setWord("");
        setPhonetic("");
        setSourceUrl("");
        setMeanings("");
      });
  };

  return (
    <div className={`wrapper ${font}`}>
      <div className="settings">
        <SettingsBar
          toggleTheme={toggleTheme}
          onChangeFontSelect={onChangeFontSelect}
          theme={theme}
        />
      </div>
      <div className={`search ${focusClass}`}>
        <SearchBar
          onBlur={onBlur}
          onFocus={onFocus}
          focusClass={focusClass}
          handleKeypress={handleKeypress}
          handleSubmit={handleSubmit}
          onChange={onChange}
          keyword={keyword}
          errorClass={errorClass}
        />
        <div className="error">{errorMessage !== "" && errorMessage}</div>
      </div>
      {errorType === "not-found" && <NotFound errorResponse={errorResponse} />}

      <Keyword keyword={word} audioFile={audioFile} />
      {word && (
        <div className="definitions">
          <div className="phonetic">{phonetic}</div>
          <Definitions meanings={meanings} handleSubmit={handleSubmit} />
          <hr />
          <p>
            <span className="source-text-preceder">Source</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="source">{sourceUrl}&nbsp;</span>
            <a href={sourceUrl} target="_blank">
              <img className="icon-new-window" src={iconNewWindow} />
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
