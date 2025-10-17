import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import axios from "axios";

function App() {
  const [results, setResults] = useState({});
  const [studyList, setStudyList] = useState([]);

  function handleResponse(response) {
    console.log(
      "✅ CHECKPOINT 4: handleResponse was called with:",
      response.data
    );
    setResults(response.data);
  }
  const addToStudyList = () => {
    console.log("Save button clicked! Attempting to save:", results);
    const newWord = results;

    if (newWord.word && !studyList.some((item) => item.word === newWord.word)) {
      setStudyList((currentList) => [...currentList, newWord]);
    } else if (newWord.word) {
      alert(`This word is already in your study list!`);
    }
  };
  function search(keyword) {
    // documentation:https://api.shecodes
    console.log(`✅ CHECKPOINT 1: Search function started for "${keyword}"`);
    let apiKey = "b9aaeaaf97004f2a03afob830bt63baf";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    console.log("✅ CHECKPOINT 2: Making API call to:", apiUrl);
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(function (error) {
        console.error("❌ CHECKPOINT 3: API call FAILED. Error:", error);
        alert(
          "Sorry we could not find a definition for that word. Please try again or try another word."
        );
      });
  }

  return (
    // Header Hero
    <div className="App   ">
      <div className="container ">
        <Header onSearch={search} />
        <Body results={results} onSave={addToStudyList} studyList={studyList} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
