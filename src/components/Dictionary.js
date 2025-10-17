import React from "react";
import StudyList from "./StudyList";
import Results from "./Results";
import "./dictionary.css";

export default function Dictionary(props) {
  return (
    <div className="Dictionary">
      <div className="row">
        <div className="col-12 col-md-6">
          {" "}
          <Results results={props.results} onSave={props.onSave} />
        </div>
        <div className="col-12 col-md-6">
          <StudyList list={props.studyList} />
        </div>{" "}
      </div>{" "}
    </div>
  );
}
