import React from "react";
import "./About.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="about__section">
        <div className="about__wrapper">
          <div className="about__img">
            <img src="./img/profile.jpeg" alt="캐리커쳐" />
          </div>
          <div className="about__text__container">
            <p>
              안녕하세요! 제 이름은 <span>홍현아</span>입니다. 저는
              서울여자대학교를 졸업하고 2021년 6월부터 11월까지 노원
              그린컴퓨터아카데미에서 프론트엔드 개발 양성과정을 수료하였습니다.
              이 과정에서 <span>설계와 개발, 유지보수</span>에 대해 배웠습니다.
              <br />
              <br />
              프론트엔드 과정을 수료하기 전에는 서비스직에서 일을 했었습니다.
              부서 간의 조율이 어려웠다는 개발자의 말에 프론트엔드에 관심을 갖고
              공부하게 되었습니다. 사람을 많이 상대한 경력이 개발 업무에 도움이
              될 것입니다.
            </p>
          </div>
          <div className="about__btn">
            <Link to="./file/resume.pdf" target="_blank" download>
              <Button buttonSize="btn--wide" buttonColor="blue">
                더보기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
