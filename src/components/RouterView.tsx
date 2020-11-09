import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "views/Home";
import Label from "views/Label";
import Statistic from "views/Statistic";
import Tag from "views/Tag";

const RouterView = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/labels">
        <Label />
      </Route>
      <Route exact path="/labels/:id">
        <Tag />
      </Route>
      <Route exact path="/statistics">
        <Statistic />
      </Route>
      <Redirect exact from="/" to="/home" />
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
