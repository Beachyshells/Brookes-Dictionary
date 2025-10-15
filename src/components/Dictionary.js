import React from "react";
import StudyList from "./StudyList";
import Results from "./Results";
import "./dictionary.css";

export default function Dictionary(props) {
  return (
    <div className="Dictionary">
      <div className="row gap-5">
        <div className="col-12 col-md-6">
          {" "}
          <Results results={props.results} />
        </div>
        <div className="col-12 col-md-4">
          <StudyList />
        </div>{" "}
      </div>
    </div>
  );
}
