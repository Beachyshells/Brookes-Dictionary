import React, { useState } from "react";
import "./Search.css";
export default function Search(props) {
  const [keyWord, setKeyWord] = useState("");

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.onSearch(keyWord);
  }
  return (
    <div className="Search">
      <form onSubmit={handleSubmit} className="Form">
        <input
          placeholder="Search for a word..."
          type="search"
          className="SearchBar"
          autoFocus
          onChange={handleKeyWordChange}
        />
      </form>
    </div>
  );
}
