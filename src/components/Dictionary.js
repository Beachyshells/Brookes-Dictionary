import React, { useState } from "react";
import "./dictionary.css";
export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord}`);
  }

  function HandleKeyWordChange(event) {
    console.log({ keyWord });
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search} className="Form">
        <input
          type="search"
          className="SearchBar"
          autoFocus
          onChange={HandleKeyWordChange}
        />
      </form>
    </div>
  );
}
