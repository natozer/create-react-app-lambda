import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { renderTextWithSpan } from "../utils";

import "../component_styles/AboutMe.css";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const heroRef = useRef(null);
  const waveTextRef = useRef(null);
  const waveTextRef2 = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.set([paragraphRef.current, waveTextRef.current, waveTextRef2.current], { autoAlpha: 0 });

    gsap.fromTo(
      heroRef.current.querySelectorAll(".letter"),
      { autoAlpha: 0, y: 20 },
      {
        duration: 1.5,
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 50%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { autoAlpha: 0, y: 20 },
      {
        duration: 1.5,
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      waveTextRef2.current,
      { autoAlpha: 0, y: 20 },
      {
        duration: 1.5,
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: waveTextRef2.current,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      waveTextRef.current,
      { autoAlpha: 0, y: 20 },
      {
        duration: 1.5,
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: waveTextRef.current,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={heroRef} className="AboutMe">
      <h1 className="Nate">
      {renderTextWithSpan("My name is Nate... ", "letter")}

      </h1>
      <div ref={paragraphRef} className="AboutMe">
        <span>I'm a full stack web developer from Miramichi, Canada.</span>
        <span> I bring a wide range of front and back end skills to the table,</span>
        <span> and a relentless pursuit of perfection.</span>
      </div>
      <div ref={waveTextRef2} className="FullStack">
        I try to add a litle bit of magic to web development...
      </div>
      <div ref={waveTextRef} className="Bold-Immersive-Memorable">
      with Modern, Memorable, and Immersive design that hits hard.
       </div>
    </div>
  );
};

export default AboutMe;
