import React from "react";
import Search from "./Search";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="Header text-center ">
      <div className="Heading">
        <header className="Title">
          <span className="letter-D">D</span>
          <span className="letter-i">i</span>
          <span className="letter-c">c</span>
          <span className="letter-t">t</span>
          <span className="letter-i2">i</span>
          <span className="letter-o">o</span>
          <span className="letter-n">n</span>
          <span className="letter-a">a</span>
          <span className="letter-r">r</span>
          <span className="letter-y">y</span>
        </header>
        <p className="sub-title">Let's learn a new word! 📖</p>
      </div>
      <div className="SearchContainer d-flex justify-content-center">
        <Search onSearch={props.onSearch} />
      </div>
    </div>
  );
}
