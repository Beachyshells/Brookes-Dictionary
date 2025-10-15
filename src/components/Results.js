import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (!props.results || !props.results.meanings) {
    return null;
  }
  if (props.results) {
    return (
      <div className="Results d-flex flex-column align-items-start">
        <h2 className="word">{props.results.word}</h2>
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
