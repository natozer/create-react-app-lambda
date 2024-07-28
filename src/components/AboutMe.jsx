import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../component_styles/AboutMe.css";

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
      <div className="AboutMeTitleContainer">
        <span className="AboutMeTitle">
          WHO I AM
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
          >
            <path
              fill="var(--primary-color)"
              d="M12 15l-8-8h16l-8 8z"
            />
          </svg>
        </span>
      </div>
      <div ref={aboutMeRef} className="AboutMe">
        <h1 ref={headerRef}>
          I'm a web developer from Miramichi, Canada.
          <br />
          I bring a wide range of front and back end skills to the table, and a
          relentless pursuit of perfection.
        </h1>
      </div>
    </>
  );
};

export default AboutMe;
