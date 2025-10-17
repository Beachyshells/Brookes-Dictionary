import React from "react";

export default function SavedWords(props) {
  return (
    <div className="SavedWords">
      <h3>{props.data.word}</h3>
    </div>
  );
}
