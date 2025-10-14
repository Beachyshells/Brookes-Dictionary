import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  console.log(props.meaning);

  return (
    <div className="Meanings p-3">
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      <div className="definition">{props.meaning.definition}</div>
      <div className="example">
        <em>{props.meaning.example}</em>
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
