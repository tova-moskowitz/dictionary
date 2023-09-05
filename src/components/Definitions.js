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
              <li className="definition-li">
                {definition.definition}
                {definition.example && (
                  <div className="example">"{definition.example}"</div>
                )}
              </li>
            );
          })}
        </ul>
        {meaning.synonyms.length > 0 && (
          <header>
            Synonyms&nbsp;&nbsp;&nbsp;&nbsp;
            {meaning.synonyms.map((synonym) => {
              return <span className="synonyms">{synonym}&nbsp;</span>;
            })}
          </header>
        )}
      </div>
    );
  });
}

export default Definitions;
