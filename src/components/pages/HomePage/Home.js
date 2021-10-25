import React from "react";
import Portfolio from "../../Portfolio";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Main from "../../Main";
import About from "../../About";
import Skill from "../../Skill";
import Contact from "../../Contact";

function Home() {
  return (
    <>
      <Main />
      <About />
      <Skill />
      <Portfolio {...homeObjOne} />
      <Portfolio {...homeObjTwo} />
      <Portfolio {...homeObjThree} />
      <Portfolio {...homeObjFour} />
      <Contact />
    </>
  );
}

export default Home;
