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
      experienceRef.current.querySelectorAll(".card"),
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
       <DownIcon/>
      </div>
      <div className="experience-section" ref={experienceRef}>
        <div className="card-container">
          <div className="card">ANGULAR</div>
          <div className="card">ASP.NET</div>
          <div className="card">C#</div>
          <div className="card">CSS</div>
          <div className="card">EXPRESS.JS</div>
          <div className="card">GIT</div>
          <div className="card">HTML</div>
          <div className="card">JAVA</div>
          <div className="card">JAVASCRIPT</div>
          <div className="card">MONGO DB</div>
          <div className="card">MSSQL</div>
          <div className="card">MYSQL</div>
          <div className="card">NODE.JS</div>
          <div className="card">REACT</div>
          <div className="card">TYPESCRIPT</div>
        </div>
      </div>
    </>
  );
};

export default Experience;
