import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  function playAudio() {
    const audio = new Audio(props.phonetic.audio);
    audio.play();
  }
  return (
    <div className="Phonetics">
      <button className="audio-button" onClick={playAudio}>
        🔊
      </button>
      <p>{props.phonetic.text}</p>
    </div>
  );
}
