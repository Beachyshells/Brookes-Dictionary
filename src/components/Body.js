import React from "react";
import Dictionary from "./Dictionary";
import "./Body.css";

export default function Body(props) {
  return (
    <div className="Body">
      <Dictionary
        results={props.results}
        studyList={props.studyList}
        onSave={props.onSave}
      />
    </div>
  );
}
