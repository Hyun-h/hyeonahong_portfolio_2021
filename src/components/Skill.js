import React from "react";
import "./Skill.css";

function Skill() {
  const skills = [
    { img: "/skill_img/photoshop.svg", title: "Photoshop" },
    { img: "/skill_img/illustrator.svg", title: "Illustrator" },
    { img: "/skill_img/xd.svg", title: "Xd" },
    { img: "/skill_img/html5.svg", title: "HTML5" },
    { img: "/skill_img/css3.svg", title: "Css" },
    { img: "/skill_img/js.svg", title: "Javascript" },
    { img: "/skill_img/php.png", title: "PHP" },
    { img: "/skill_img/mysql.png", title: "MySQL" },
    { img: "/skill_img/react.svg", title: "React" },
    { img: "/skill_img/vue.png", title: "Vue" },
  ];

  const renderSkill = skills.map((skillList) => {
    return (
      <div className="skill-items" key={skillList.title}>
        <div className="skill-img">
          <img src={skillList.img} alt={skillList.title} />
        </div>
        <div className="skill-title">{skillList.title}</div>
      </div>
    );
  });

  return (
    <>
      <div className="skill__section">
        <div className="skill_box">
          <h1>Skill</h1>
          <div className="skill_wrapper_box">
            <div className="skill__wrapper">{renderSkill}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
