import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "../component_styles/AboutMe.css";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const effect1Ref1= useRef(null);
  const effect1Ref2 = useRef(null);
  const effect2Ref1 = useRef(null);
  const effect2Ref2 = useRef(null);

  useEffect(() => {
    gsap.set([effect1Ref1.current, effect1Ref2.current, effect2Ref1.current, effect2Ref2.current], { autoAlpha: 0 });

    const animate1 = (element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, x: -100, rotation: -10, scale: 0.8 },
        {
          duration: 1.5, autoAlpha: 1, x: 0, rotation: 0, scale: 1, ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 40%",
            end: "bottom top",
            toggleActions: "play none none reverse",
          }
        }
      );
    };

    const animate2 = (element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0 },
        {
          duration: 1.2, autoAlpha: 1, ease: "power1.inOut",
          scrollTrigger: {
            trigger: element,
            start: "top 40%",
            end: "top top",
            toggleActions: "play none none reverse",
          }
        }
      );
    };

    animate1(effect1Ref1.current);
    animate1(effect1Ref2.current);
    animate2(effect2Ref1.current);
    animate2(effect2Ref2.current);
  }, []);

  return (
    <div className="AboutMe">
      <h1 ref={effect1Ref1} className="Nate">
        My name is Nate...
      </h1>
      <div ref={effect1Ref2} className="Intro">
        <span>I'm a full stack web developer from Miramichi, Canada.</span>
        <span> I bring a wide range of front and back end skills to the table,</span>
        <span> and a relentless pursuit of perfection.</span>
      </div>
      <div ref={effect2Ref1} className="FullStack">
        I try to add a little bit of magic to web development...
      </div>
      <div ref={effect2Ref2} className="Bold-Immersive-Memorable">
        with Modern, Memorable, and Immersive design.
      </div>
    </div>
  );
};

export default AboutMe;
