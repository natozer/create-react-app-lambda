import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../component_styles/Words.css";
import { ReactComponent as DownIcon } from "../assets/down.svg";

gsap.registerPlugin(ScrollTrigger);

const Words = () => {
  const skills = [
    "ANGULAR",
    "ASP.NET",
    "C#",
    "CSS",
    "EXPRESS.JS",
    "GIT",
    "HTML",
    "JAVA",
    "JAVASCRIPT",
    "MONGO DB",
    "MSSQL",
    "MYSQL",
    "NODE.JS",
    "REACT",
    "TYPESCRIPT",
  ];
  const skillsRef = useRef([]);

  useEffect(() => {
    gsap.utils.toArray(skillsRef.current).forEach((skill) => {
      ScrollTrigger.create({
        trigger: skill,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(skill, { color: "var(--primary-color)", opacity: 1 });
        },
        onLeave: () => {
          gsap.to(skill, { color: "rgba(0, 0, 0, 0.4)" });
        },
        onEnterBack: () => {
          gsap.to(skill, { color: "var(--primary-color)", opacity: 1 });
        },
        onLeaveBack: () => {
          gsap.to(skill, { color: "rgba(0, 0, 0, 0.4)" });
        },
      });
    });
  }, []);

  return (
    <>
      <div className="WordsTitle">
        My Skillset
        <DownIcon />
      </div>
      <div className="words-container">
        {skills.map((skill, index) => (
          <h1
            key={index}
            ref={(el) => (skillsRef.current[index] = el)}
            className="word"
          >
            {skill}
          </h1>
        ))}
      </div>
    </>
  );
};

export default Words;
