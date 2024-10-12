import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../component_styles/AboutMe.css";
import { ReactComponent as DownIcon } from "../assets/down.svg";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutMeRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (aboutMeRef.current) {
      aboutMeRef.current.style.visibility = "visible";
    }

    if (headerRef.current) {
      gsap.set(headerRef.current, { autoAlpha: 0 });

      gsap.fromTo(
        headerRef.current,
        { autoAlpha: 0 },
        {
          duration: 1.5,
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 75%",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div className="AboutMeTitle">
        WHO I AM
        <DownIcon />
      </div>
      <div ref={aboutMeRef} className="AboutMe">
        <h1 ref={headerRef}>
          I'm a web developer from Miramichi, Canada. I bring a wide range of
          front and back end skills to the table, and a relentless pursuit of perfection.
        </h1>
      </div>
    </>
  );
};

export default AboutMe;
