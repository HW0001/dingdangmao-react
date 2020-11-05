import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const RouterView = () => {
  return (
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
  );
};

export default RouterView;

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
