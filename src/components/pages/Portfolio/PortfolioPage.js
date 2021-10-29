import React from "react";
import Portfolio from "../../Portfolio";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function PortfolioPage() {
  return (
    <>
      <Portfolio {...homeObjOne} />
      <Portfolio {...homeObjTwo} />
      <Portfolio {...homeObjThree} />
      <Portfolio {...homeObjFour} />
    </>
  );
}

export default PortfolioPage;