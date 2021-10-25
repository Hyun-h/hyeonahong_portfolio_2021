import React from "react";
import "./Main.css";
import { ImMail4, ImGithub } from "react-icons/im";
import { RiKakaoTalkFill } from "react-icons/ri";
import { IconContext } from "react-icons/lib";

function Main() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 40 }}>
      <div className="main__section">
        <div className="main__wrapper">
          <div className="text__container">
            <span>Hi, I'm</span>
            <h1 className="main__heading">Hyeona Hong</h1>
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
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Main;
