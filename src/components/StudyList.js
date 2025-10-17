import React from "react";
import "./StudyList.css";
import SavedWords from "./SavedWords";

export default function StudyList(props) {
  const classes = `StudyList ${props.isVisible ? "visible" : ""}`;

  return (
    <div className={classes}>
      <div className="overlay" onClick={props.onClose}></div>
      <div className="panel">
        <button className="close-button" onClick={props.onClose}>
          {" "}
          📒
        </button>
        <h2>My Word Collection</h2>
        {props.list && props.list.length > 0 ? (
          props.list.map(function (savedWord, index) {
            return (
              <div key={index}>
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
    </div>
  );
}
