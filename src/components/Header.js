import React from "react";
import logo from "../images/CodeSynapseLogo.png";
import Search from "./Search";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="Header App-header p-3 mb-4 d-block d-lg-flex  align-items-lg-center ">
      <div className="left-side d-flex align-items-center justify-content-center">
        <img className="Logo" alt="CodeSynapse Logo" src={logo} />
        <div className="Heading">
          <header className="Title">Code Synapse</header>
          <p className="sub-title">Your Intelligent Developer Dictionary</p>
        </div>
      </div>
      <div className="mt-3 mt-lg-0 d-flex justify-content-center">
        <Search onSearch={props.onSearch} />
      </div>
    </div>
  );
}
