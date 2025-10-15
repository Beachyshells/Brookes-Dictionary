import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import axios from "axios";

function App() {
  const [results, setResults] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }
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
        <Body results={results} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
