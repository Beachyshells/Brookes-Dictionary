import React, { useState } from "react";
import "./StudyList.css";
import SavedWords from "./SavedWords";

export default function StudyList(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleList() {
    setIsOpen(!isOpen);
  }
  if (props.list && props.list.length > 0) {
    return (
      <div className="StudyList">
        <h2>
          My Study List
          <span onClick={toggleList} className="icon">
            📒
          </span>
        </h2>
        {isOpen &&
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
          })}
      </div>
    );
  } else {
    return (
      <div className="StudyList">
        <h2>My Study List</h2>
        <p className="placeholder-text">Your saved words will appear here</p>
      </div>
    );
  }
}
