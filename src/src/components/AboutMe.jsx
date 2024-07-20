import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../component_styles/AboutMe.css";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutMeRef = useRef(null);
  const headersRef = useRef([]);

  useEffect(() => {
    if (aboutMeRef.current) {
      aboutMeRef.current.style.visibility = "visible";
    }

    headersRef.current.forEach((header) => {
      gsap.set(header, { autoAlpha: 0 });

      gsap.fromTo(
        header,
        { autoAlpha: 0 },
        {
          duration: 1.5,
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: header,
            start: "top 75%",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={aboutMeRef} className="AboutMe">
      <div ref={(el) => (headersRef.current[0] = el)}>
        <h1>HI, I'M NATE.</h1>
      </div>
      <div ref={(el) => (headersRef.current[1] = el)}>
        <h3>I'm a web developer from Miramichi, Canada.</h3>
      </div>
      <div ref={(el) => (headersRef.current[2] = el)}>
        <h3>
          I bring a wide range of front and back end skills to the table, and a
          relentless pursuit of perfection.
        </h3>
      </div>
    </div>
  );
};

export default AboutMe;
