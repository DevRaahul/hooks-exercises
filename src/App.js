import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">React App</header>
      <ul className="exe-links">
        <li>
          <Link to={"/useState"}>useState</Link> 
        </li>
        <li>
          <Link to={"/useEffect"}>useEffect</Link>
        </li>
        <li>
          <Link to={"/useContext"}>useContext</Link>
        </li>
        <li>
          <Link to={"/useReducer"}>useReducer</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
