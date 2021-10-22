import React from "react";
import { Button } from "./Button";
import "./Portfolio.css";

function Portfolio({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel1,
  buttonLabel2,
  goToSite,
  goToGithub,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={
          lightBg ? "home__portfolio-section" : "home__portfolio-section darkBg"
        }
      >
        <div className="portfolio__container">
          <div
            className="row home__portfolio-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__portfolio-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__portfolio-subtitle"
                      : "home__portfolio-subtitle dark"
                  }
                >
                  {description}
                </p>
                <ul className="protfolio__btn">
                  <li>
                    <a href={goToSite}>
                      <Button buttonSize="btn--wide" buttonColor="blue">
                        {buttonLabel1}
                      </Button>
                    </a>
                  </li>
                  <li>
                    <a href={goToGithub}>
                      <Button buttonSize="btn--wide" buttonColor="blue">
                        {buttonLabel2}
                      </Button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="home__portfolio-img-wrapper">
                <img src={img} alt={alt} className="home__portfolio-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
