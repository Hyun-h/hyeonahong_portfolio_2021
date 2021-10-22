import React from "react";
import Portfolio from "../../Portfolio";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Main from "../../Main";

function Home() {
  return (
    <>
      <Main />
      <Portfolio {...homeObjOne} />
      <Portfolio {...homeObjTwo} />
      <Portfolio {...homeObjThree} />
      <Portfolio {...homeObjFour} />
    </>
  );
}

export default Home;
