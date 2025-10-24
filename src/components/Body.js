import React from "react";
import Dictionary from "./Dictionary";
import Photos from "./Photos";
import "./Body.css";

export default function Body(props) {
  if (!props.results) {
    return null;
  } else {
    console.log("Props received by Body.js:", props);
    return (
      <div className="Body">
        <Photos word={props.results.word} photos={props.photos} />
        <Dictionary
          onSearch={props.onSearch}
          photos={props.photos}
          results={props.results}
          onSave={props.onSave}
          toggleCollection={props.toggleCollection}
        />
      </div>
    );
  }
}
