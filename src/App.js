import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./Components/class-component.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Class Components</p>
        <a
          className="App-link"
          href="https://github.com/SouthpawCurveConcepts/rsb-class"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to repo
        </a>
        <ClassComponent />
      </header>
    </div>
  );
}

export default App;
