import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
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
    const newWord = results;
    if (newWord.word && !studyList.some((item) => item.word === newWord.word)) {
      setStudyList((currentList) => [...currentList, newWord]);
    } else if (newWord.word) {
      alert(`This word is already in your study list!`);
    }
  };
  function search(keyword) {
    let apiKey = "b9aaeaaf97004f2a03afob830bt63baf";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(function (error) {
        alert("Sorry, we couldn't find a definition for that word.");
      });
  }

  return (
    <div className="App">
      <div className="container">
        <Header onSearch={search} />
        <Body
          results={results}
          onSave={addToStudyList}
          toggleCollection={toggleCollection}
        />
        {isCollectionVisible && <StudyList list={studyList} />}
        <Footer />
      </div>
    </div>
  );
}
export default App;
