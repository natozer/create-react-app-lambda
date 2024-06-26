import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../component_styles/Experience.css";

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top 75%", 
        end: "bottom top",
        toggleActions: "play none none reverse",
      }
    });

   
    tl.fromTo(
      experienceRef.current.querySelectorAll(".words"),
      { autoAlpha: 0, x: 100 },
      {
        duration: 1,
        autoAlpha: 1,
        x: 0,
        stagger: 0.1,
        ease: "power2.out"
      }
    );

    tl.fromTo(
      experienceRef.current.querySelectorAll(".expertise"),
      { autoAlpha: 0, y: 20 },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        stagger: 0.05,
        ease: "power2.out"
      }
    );

    tl.fromTo(
      experienceRef.current.querySelectorAll("li"),
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.15,
        ease: "expo.out",
        duration: 1.5
      }
    );
  }, []);

  return (
    <div className="experience-section" ref={experienceRef}>
      <h1>
        {["FULL", " ", "STACK", " ", "WEB", " ", "DEVELOPMENT"].map((item, index) => (
          <span key={index} className="words">
            {item}
          </span>
        ))}
      </h1>
      <h1>
        {["E", "X", "P", "E", "R", "T", "I", "S", "E", " ", "I", "N"].map((item, index) => (
          <span key={index} className="expertise">
            {item}
          </span>
        ))}
      </h1>
      <ul>
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
    </div>
  );
};

export default Experience;
