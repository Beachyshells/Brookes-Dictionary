import "./App.css";
import Dictionary from "./components/Dictionary";
import logo from "./images/CodeSynapseLogo.png";

function App() {
  return (
    // Header Hero
    <div className="App App-header d-flex  ">
      <div className="container">
        <div className="Header-content d-flex">
          <img className="Logo" alt="CodeSynapse Logo" src={logo} />
          <div className="Heading">
            <header className="Title">Code Synapse</header>
            <p className="sub-title">Your Intelligent Developer Dictionary</p>
          </div>
          <div className="icon">
            <p>📒</p>
          </div>
        </div>

        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}

export default App;
