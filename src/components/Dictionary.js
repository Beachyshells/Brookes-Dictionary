import React from "react";
import Results from "./Results";
import "./dictionary.css";

export default function Dictionary(props) {
  console.log("Props received by Dictionary.js:", props);
  return (
    <div className="Dictionary">
      <Results
        word={props.results.word}
        photos={props.photos}
        results={props.results}
        onSave={props.onSave}
        toggleCollection={props.toggleCollection}
      />
    </div>
  );
}
