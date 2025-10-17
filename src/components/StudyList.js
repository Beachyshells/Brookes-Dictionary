import React from "react";
import "./StudyList.css";
import SavedWords from "./SavedWords";

export default function StudyList(props) {
  return (
    <div className="StudyList">
      <h2>My Word Collection 📒</h2>
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
