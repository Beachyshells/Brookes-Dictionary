import React from "react";

import Meanings from "./Meanings";
import Phonetics from "./Phonetics"; // Make sure this matches your filename
import "./Results.css";

export default function Results(props) {
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
            <h2 className="word fs-2">{props.results.word}</h2>
            <div className="spacer"> {""}</div>
            <div className="buttons d-flex flex-column gap-2">
              <div className="btns d-flex flex-row align-items-center">
                <button
                  className="save-button"
                  onClick={props.onSave}
                  title="Save to study page"
                >
                  ☑️
                </button>
                <div className="btn">Save word</div>
              </div>
              <div className="btns my-saved-words d-flex flex-row align-items-center">
                <button
                  className="collection-toggle-button save-button"
                  onClick={props.toggleCollection}
                  title="Show my word collection"
                >
                  ⭐
                </button>
                <div className="btn">Study list</div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="phonetic-text mb-3">{props.results.phonetic}</div>
      {props.results.meanings.map(function (meaning, index) {
        return (
          <div>
            <Meanings
              onSearch={props.onSearch}
              meaning={meaning}
              isFirst={index === 0}
            />
          </div>
        );
      })}
    </div>
  );
}
