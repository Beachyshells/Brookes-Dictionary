import React from "react";

export default function Footer() {
  return (
    <div className="Footer d-flex justify-content-center mt-3">
      <footer>
        <div>
          This project was coded by 🐞
          <a
            href="https://www.shecodes.io/graduates/169424-michelle-durham"
            target="_blank"
            rel="noreferrer"
          >
            Michelle Durham
          </a>{" "}
          is open sourced on{" "}
          <a
            href="https://github.com/Beachyshells/code-synapse"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://codesynapse.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </div>
      </footer>
    </div>
  );
}
