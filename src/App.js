import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.less";

import HomePage from "./components/HomePage";
import CookingPgae from "./components/CookingPage";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/cooking">
            <CookingPgae />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
