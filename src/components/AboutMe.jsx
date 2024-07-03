import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../component_styles/AboutMe.css";
import "../component_styles/Experience.css";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const waveTextRef = useRef(null);
  const waveTextRef2 = useRef(null);
  const paragraphRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: waveTextRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      waveTextRef.current.children,
      { autoAlpha: 0, y: 20 },
      {
        duration: 1.5,
        autoAlpha: 1,
        y: 0,
        stagger: 0.3,
        ease: "power2.out",
      }
    )
      .fromTo(
        waveTextRef2.current,
        { autoAlpha: 0, y: 20 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
        }
      )

      .fromTo(
        experienceRef.current.querySelectorAll(".expertise"),
        { autoAlpha: 0, y: 20 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          stagger: 0.05,
          ease: "power2.out",
        }
      )

      .fromTo(
        experienceRef.current.querySelectorAll("li"),
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.15,
          ease: "expo.out",
          duration: 1.5,
        }
      );

    gsap.fromTo(
      paragraphRef.current.children,
      { autoAlpha: 0, y: 20 },
      {
        duration: 5,
        autoAlpha: 1,
        y: 0,
        stagger: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "bottom bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="AboutMe">
      <div ref={paragraphRef}>
        <span>I'm a web developer from Miramichi, Canada.</span>
        <span>
          {" "}
          I bring a wide range of front and back end skills to the table,
        </span>
        <span> and a relentless pursuit of perfection.</span>
      </div>
      <div ref={waveTextRef} className="Bold-Immersive-Memorable">
        <span> Bold, </span> <span> Immersive, </span>{" "}
        <span>and Memorable </span> <span> design.</span>
      </div>
      <div ref={waveTextRef2} className="Bold-Immersive-Memorable">
        Full Stack Web Development.
      </div>
      <div className="experience-section" ref={experienceRef}>
        <h1>
          {["E", "X", "P", "E", "R", "T", "I", "S", "E", " ", "I", "N"].map(
            (item, index) => (
              <span key={index} className="expertise">
                {item}
              </span>
            )
          )}
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
    </div>
  );
};

export default AboutMe;
