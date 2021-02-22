import "./App.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";

function App() {
  return (
    <Router>
      <div className="Container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />

        <Route path="/form" component={Form} />
      </div>
    </Router>
  );
}

export default App;
