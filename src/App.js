import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.less";

import Cooking from "./components/CookingPage";
import { Navigation } from "./components/shared";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/cooking">
            <Cooking />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      {" "}
      <Navigation />
      <h2>Home</h2>
    </div>
  );
}
