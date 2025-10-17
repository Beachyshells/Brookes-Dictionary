import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import GoldStarButton from "./components/GoldStarButton";
import StudyList from "./components/StudyList";

import axios from "axios";

function App() {
  const [results, setResults] = useState({});
  const [studyList, setStudyList] = useState([]);
  const [isCollectionVisible, setIsCollectionVisible] = useState(false);

  function toggleCollection() {
    setIsCollectionVisible(!isCollectionVisible);
  }
  function handleResponse(response) {
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
    // documentation:https://api.shecodes.io/dictionary
    let apiKey = "b9aaeaaf97004f2a03afob830bt63baf";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
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
        <GoldStarButton onClick={toggleCollection} />
        <StudyList
          list={studyList}
          isVisible={isCollectionVisible}
          onClose={toggleCollection}
        />{" "}
        <Footer />
      </div>
    </div>
  );
}

export default App;
