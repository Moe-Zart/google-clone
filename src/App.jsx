import "./App.css";
import HomePage from "./pages/HomePage";
import Results from "./pages/Results";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
