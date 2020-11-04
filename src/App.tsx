import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">账本</Link>
            </li>
            <li>
              <Link to="/labels">标签</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/labels">
            <Labels />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Redirect from="/" exact to="/home" />
          <Route path="*">
            <NotFund />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Labels() {
  return <h2>Labels</h2>;
}

function Statistics() {
  return <h2>Statistics</h2>;
}
function NotFund() {
  return <h2>NotFund</h2>;
}