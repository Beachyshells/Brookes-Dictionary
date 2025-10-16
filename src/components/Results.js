import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  console.log("Props received by Results.js:", props);
  if (!props.results || !props.results.meanings) {
    return null;
  }
  if (props.results) {
    return (
      <div className="Results d-flex flex-column align-items-start">
        <div className="word-header d-flex gap-3">
          <h2 className="word">{props.results.word}</h2>
          <button
            className="save-button"
            onClick={props.onSave}
            title="Save to study page"
          >
            ☑️
          </button>
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
