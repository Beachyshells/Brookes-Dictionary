import React from "react";
import "./StudyList.css";
import SavedWords from "./SavedWords";

export default function StudyList(props) {
  return (
    <div className="StudyList">
      <h2>
        <span className="pink">M</span>
        <span className="orange">y</span> <span className="teal">W</span>
        <span className="purple">o</span>
        <span className="pink">r</span>
        <span className="orange">d</span> <span className="teal">C</span>
        <span className="pink">o</span>
        <span className="orange">l</span>
        <span className="teal">l</span>
        <span className="purple">e</span>
        <span className="pink">c</span>
        <span className="orange">t</span>
        <span className="teal">i</span>
        <span className="purple">o</span>
        <span className="pink">n</span> 📒
      </h2>
      {props.list && props.list.length > 0 ? (
        props.list.map(function (savedWord, index) {
          return (
            <div key={index} className="saved-word-item">
              <ul className="star-list">
                <li className="saved-words">
                  <SavedWords data={savedWord} />
                </li>
              </ul>
            </div>
          );
        })
      ) : (
        <div className="empty-state">
          <p>Your saved words will appear here!</p>
        </div>
      )}
    </div>
  );
}
