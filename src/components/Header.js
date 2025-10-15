import React from "react";
import logo from "../images/CodeSynapseLogo.png";
import Search from "./Search";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="Header  d-lg-flex justify-content-lg-between align-items-lg-center text-center text-lg-start">
      <div className="left-side d-flex">
        <img className="Logo" alt="CodeSynapse Logo" src={logo} />
        <div className="Heading">
          <header className="Title">Code Synapse</header>
          <p className="sub-title">Your Intelligent Developer Dictionary</p>
        </div>
      </div>
      <Search onSearch={props.onSearch} />
      <div className="spacer"></div>{" "}
    </div>
  );
}
