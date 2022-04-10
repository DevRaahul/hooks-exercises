import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">React App with Hooks Examples</header>
      <ul className="exe-links">
        <li>
          <Link to={"/useState"}>1.useState</Link>
        </li>
        <li>
          <Link to={"/useEffect"}>2.useEffect</Link>
        </li>
        <li>
          <Link to={"/useContext"}>3.useContext</Link>
        </li>
        <li>
          <Link to={"/useReducer"}>4.useReducer</Link>
        </li>
        <li>
          <Link to={"/useReducer"}>5.Custom Hook</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
