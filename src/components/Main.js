import React from "react";
import "./Main.css";
import { ImMail4, ImGithub } from "react-icons/im";
import { RiKakaoTalkFill } from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function Main() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 40 }}>
      <section className="main__section">
        <article className="main__wrapper">
          <div className="text__container">
            <span>Hi, I'm</span>
            <Link to="/About">
              <h1 className="main__heading">Hyeona Hong</h1>
            </Link>
            <p className="main__p">Front End developer</p>
          </div>
          <div className="icon__container">
            <a
              href="mailto:hyeonahong@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <ImMail4 />
            </a>
            <a
              href="https://github.com/Hyun-h"
              target="_blank"
              rel="noreferrer"
            >
              <ImGithub />
            </a>
            <a
              href="https://open.kakao.com/o/sJak5E2c"
              target="_blank"
              rel="noreferrer"
            >
              <RiKakaoTalkFill />
            </a>
          </div>
        </article>
      </section>
    </IconContext.Provider>
  );
}
export default Main;
