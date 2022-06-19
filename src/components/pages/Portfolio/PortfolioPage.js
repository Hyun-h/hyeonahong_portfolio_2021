import React from "react";
import Portfolio from "../../Portfolio";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function PortfolioPage() {
  return (
    <>
      <Portfolio {...homeObjOne} />
      <Portfolio {...homeObjFour} />
      <Portfolio {...homeObjThree} />
      <Portfolio {...homeObjTwo} />
    </>
  );
}

export default PortfolioPage;
