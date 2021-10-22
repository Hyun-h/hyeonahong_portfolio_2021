import React from "react";
import "./App.css";
import Navber from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";

function App() {
  return (
    <Router>
      <Navber />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
