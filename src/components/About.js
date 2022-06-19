import React from "react";
import "./About.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="about__section">
        <article className="about__wrapper">
          <div className="about__img">
            <img src="./img/profile.jpeg" alt="캐리커쳐" />
          </div>
          <div className="about__text__container">
            <p>
              안녕하세요! <em>불편함을 개선하기 좋아하는</em> 프론트엔드 홍현아
              입니다.
            </p>
            <p>
              개발하기 전 고객과 <em>소통하고 클레임을 해결</em>
              하는 게 좋아 서비스직에서 근무를 하였습니다. 코로나를 겪으면서
              서비스 제공의 패러다임이 바뀌는 걸 경험하고 개발 공부를
              시작하였습니다. 고객과 화면단에서 제일 처음 만나는 프론트엔드에
              관심을 갖게 되었고 현재까지 이어졌습니다.
            </p>
            <p>
              고객의 사용경험을 개선하고 더 나은 서비스를 제공하는 데 고민을
              하고, 효율적인 코드를 짜서 가독성을 높이고, 재활용 가능한 코드를
              추려 생산성을 높이는 데 관심이 많습니다. 이 과정에서 혼자
              해결하기보다는 동료와 머리를 맡대고 토론하고 해결점을 찾아가는
              과정이 저에게 큰 힘이 됩니다.
            </p>
          </div>
          <div className="about__btn">
            <Link to="./file/resume.pdf" target="_blank" download>
              <Button buttonSize="btn--wide" buttonColor="blue">
                더보기
              </Button>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}

export default About;
