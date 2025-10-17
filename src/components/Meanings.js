import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  if (!props.meaning) {
    return null;
  }
  const containerClasses = `Meanings p-3 ${props.isFirst ? "highlight" : ""}`;
  return (
    <div className={containerClasses}>
      <div className="highlight">
        <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>

        <div className="definition">{props.meaning.definition}</div>
        <div className="example">
          <em>{props.meaning.example}</em>
        </div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
