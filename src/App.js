import "./App.css";
import Dictionary from "./components/Dictionary";
import StudyList from "./components/StudyList";
import logo from "./images/CodeSynapseLogo.png";

function App() {
  return (
    // Header Hero
    <div className="App   ">
      <div className="container ">
        <div className=" App-header">
          <img className="Logo" alt="CodeSynapse Logo" src={logo} />
          <div className="Heading">
            <header className="Title">Code Synapse</header>
            <p className="sub-title">Your Intelligent Developer Dictionary</p>
          </div>
          <div className="spacer"></div>
          <div className="icon">
            <p>📒</p>
          </div>
        </div>

        <main>
          <Dictionary />
          <StudyList />
        </main>
      </div>
    </div>
  );
}

export default App;
