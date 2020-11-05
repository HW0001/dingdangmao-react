import Nav from "components/Nav";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Nav />
      <div> 
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