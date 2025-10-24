import React from "react";
import "./Synonyms.css";
export default function Synonyms(props) {
  if (props.synonyms) {
    function handleClick(event, synonym) {
      event.preventDefault();
      props.onSearch(synonym);
    }
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li key={index}>
              <a
                className="links"
                href="/"
                onClick={(event) => handleClick(event, synonym)}
              >
                {synonym}
              </a>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
