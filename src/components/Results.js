import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  console.log("Props being received by Results.js:", props);
  const mockPhonetic = {
    text: "/hə'ləʊ/",
    audio:
      "https://media.merriam-webster.com/audio/prons/en/us/mp3/h/hello001.mp3",
  };

  if (!props.results.word) {
    return null;
  }

  return (
    <div className="Results">
      <div className="row align-items-center mb-3">
        <div className="col-auto">
          <Phonetics phonetic={mockPhonetic} />
        </div>
        <div className="col">
          <div className="word-header d-flex align-items-center gap-3">
            <h2 className="word">{props.results.word}</h2>
            <button
              className="save-button"
              onClick={props.onSave}
              title="Save to study page"
            >
              ☑️
            </button>
            <div className="Spacer"></div>
            <button
              className="collection-toggle-button"
              onClick={() => {
                console.log(
                  "The toggleCollection prop is:",
                  props.toggleCollection
                );

                props.toggleCollection();
              }}
              title="Show my word collection"
            >
              ⭐
            </button>
          </div>
        </div>
      </div>
      <div className="phonetic-text mb-3">{props.results.phonetic}</div>
      {props.results.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <Meanings meaning={meaning} isFirst={index === 0} />
          </div>
        );
      })}
    </div>
  );
}
