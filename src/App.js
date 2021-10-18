import React from "react";
import "./App.css";
import Navber from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navber />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
