import React from "react";
import StudyList from "./StudyList";
import Results from "./Results";
import "./dictionary.css";

export default function Dictionary(props) {
  return (
    <div className="Dictionary">
      <Results results={props.results} onSave={props.onSave} />
    </div>
  );
}
