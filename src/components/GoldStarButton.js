import React from "react";

import "./GoldStarButton.css";

export default function GoldStarButton(props) {
  return (
    <button className="GoldStarButton" onClick={props.onClick}>
      ⭐
      <span className="prompt">
        Touch the gold star to see your word collection!
      </span>
    </button>
  );
}
