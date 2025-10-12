import "./App.css";
import logo from "./images/CodeSynapseLogo.png";

function App() {
  return (
    // Header Hero
    <div className="App App-header d-flex   justify-content-center">
      <div className="Header-content d-flex align-items-center">
        <img className="Logo" alt="CodeSynapse Logo" src={logo} />
        <div className="Heading">
          <header className="Title">Code Synapse</header>
          <p className="sub-title">Your Intelligent Developer Dictionary</p>
        </div>
        <div className="icon">
          <p>📒</p>
        </div>
      </div>
    </div>
  );
}

export default App;
