import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
  console.log("Full API response for this word:", props.results);
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
      <div className="row align-items-center mb-3S">
        <div className="col-auto">
          <Phonetics phonetic={mockPhonetic} />
        </div>

        <div className="col-10">
          <div className="word-header d-flex align-items-center gap-3">
            <h2 className="word">{props.results.word}</h2>
            <button
              className="save-button"
              onClick={props.onSave}
              title="Save to study page"
            >
              ☑️
            </button>
          </div>
        </div>
      </div>
      {props.results.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <Meanings meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}
