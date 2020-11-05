import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "views/Home";
import Label from "views/Label";
import Statistic from "views/Statistic";

const RouterView = () => {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/labels">
        <Label />
      </Route>
      <Route path="/statistics">
        <Statistic />
      </Route>
      <Redirect from="/" exact to="/home" />
      <Route path="*">
        <NotFund />
      </Route>
    </Switch>
  );
};

export default RouterView;

function NotFund() {
  return <h2>NotFund</h2>;
}
