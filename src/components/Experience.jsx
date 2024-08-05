import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../component_styles/Experience.css";
import { ReactComponent as DownIcon } from "../assets/down.svg";

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top 88%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      experienceRef.current.querySelectorAll("li"),
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.05,
        ease: "expo.out",
        duration: 1,
      }
    );
  }, []);

  return (
    <>
      <div className="ExperienceTitle">
        MY SKILLSET
        <DownIcon />
      </div>
      <ul className="experience-section" ref={experienceRef}>
        <li>ANGULAR</li>
        <li>ASP.NET</li>
        <li>C#</li>
        <li>CSS</li>
        <li>EXPRESS.JS</li>
        <li>GIT</li>
        <li>HTML</li>
        <li>JAVA</li>
        <li>JAVASCRIPT</li>
        <li>MONGO DB</li>
        <li>MSSQL</li>
        <li>MYSQL</li>
        <li>NODE.JS</li>
        <li>REACT</li>
        <li>TYPESCRIPT</li>
      </ul>
    </>
  );
};

export default Experience;
