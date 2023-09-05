import React from "react";
import "../App.css";

function Definitions({ meanings }) {
  return meanings.map((meaning) => {
    console.log(meaning);
    return (
      <div className="definitions">
        <div className="part-of-speech">
          <em>{meaning.partOfSpeech}</em>
        </div>
        <header>Meaning</header>
        <ul className="definitions-list">
          {meaning.definitions.map((definition) => {
            return (
              <li className="defintion-li">
                {definition.definition}
                <div>{definition.example}</div>
              </li>
            );
          })}
        </ul>
        <header className>
          Synonyms&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <span className="synonyms">{meaning.synonyms}</span>
        </header>
      </div>
    );
  });
}

export default Definitions;
