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
  const [photos, setPhotos] = useState([]);
  function toggleCollection() {
    setIsCollectionVisible(!isCollectionVisible);
  }

  const addToStudyList = () => {
    const newWord = results;
    if (newWord.word && !studyList.some((item) => item.word === newWord.word)) {
      setStudyList((currentList) => [...currentList, newWord]);
      alert(`You have added ${newWord.word} to your collection!`);
    } else if (newWord.word) {
      alert(`This word is already in your study list!`);
    }
  };
  function handleResponse(response) {
    const word = response.data.word;
    const sheCodesApiKey = "b9aaeaaf97004f2a03afob830bt63baf";

    const sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${sheCodesApiKey}`;

    axios
      .get(sheCodesApiUrl)
      .then(handlePhotosResponse)
      .catch(function (error) {
        console.error("Shecodess API call failed", error);
      });
    setResults(response.data);
  }
  function handlePhotosResponse(response) {
    console.log("Shecodes photo response", response.data);
    setPhotos(response.data.photos);
  }

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
          onSearch={search}
          results={results}
          onSave={addToStudyList}
          toggleCollection={toggleCollection}
          photos={photos}
        />
        {isCollectionVisible && <StudyList list={studyList} />}
        <Footer />
      </div>
    </div>
  );
}
export default App;
