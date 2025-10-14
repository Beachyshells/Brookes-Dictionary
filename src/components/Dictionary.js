import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./dictionary.css";
export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState(null);

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  function Search(event) {
    event.preventDefault();

    // documentation:https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "b9aaeaaf97004f2a03afob830bt63baf";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
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
      <Results results={results} />
    </div>
  );
}
