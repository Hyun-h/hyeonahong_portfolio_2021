import React from "react";
import "./App.css";
import Navber from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Skill from "./components/Skill";
import PortfolioPage from "./components/pages/Portfolio/PortfolioPage";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navber />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/About" component={About} />
        <Route path="/Skill" component={Skill} />
        <Route path="/Portfolio" component={PortfolioPage} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
