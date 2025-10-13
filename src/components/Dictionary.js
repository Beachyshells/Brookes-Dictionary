import React, { useState } from "react";
import axios from "axios";
import "./dictionary.css";
export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function handleKeyWordChange(event) {
    console.log({ keyWord });
    setKeyWord(event.target.value);
  }

  function Search(event) {
    event.preventDefault();

    // documentation: https://api.dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search} className="Form">
        <input
          type="search"
          className="SearchBar"
          autoFocus
          onChange={handleKeyWordChange}
        />
      </form>
    </div>
  );
}
