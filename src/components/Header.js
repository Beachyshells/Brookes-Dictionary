import React from "react";
import Search from "./Search";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="Header text-center ">
      <div className="Heading">
        <header className="Title">
          <span className="purple">B</span>
          <span className="pink">r</span>
          <span className="orange">o</span>
          <span className="teal">o</span>
          <span className="purple">k</span>
          <span className="pink">e</span>
          <span className="orange">'</span>
          <span className="teal">s</span> <span className="purple">D</span>
          <span className="pink">i</span>
          <span className="orange">c</span>
          <span className="teal">t</span>
          <span className="purple">i</span>
          <span className="pink">o</span>
          <span className="orange">n</span>
          <span className="teal">a</span>
          <span className="purple">r</span>
          <span className="pink">y</span>
        </header>
        <p className="sub-title">Let's learn a new word! </p>
      </div>
      <div className="SearchContainer d-flex justify-content-center">
        <Search onSearch={props.onSearch} />
      </div>
    </div>
  );
}
