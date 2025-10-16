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
    console.log(response.data);
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
    // documentation:https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "b9aaeaaf97004f2a03afob830bt63baf";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
