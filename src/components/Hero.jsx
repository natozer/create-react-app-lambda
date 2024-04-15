import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../component_styles/Hero.css";

const Hero = ({ hasEnteredSite }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    if (hasEnteredSite) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        headerRef.current.querySelectorAll(".letter"),
        { autoAlpha: 0, y: 20 },
        {
          duration: 3,
          autoAlpha: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [hasEnteredSite]);

  return (
    <div className="Hero">
      <div ref={headerRef}>
        <h1>
          {[
            "H",
            "i",
            ",",
            " ",
            "I",
            "'",
            "m",
            " ",
            "N",
            "a",
            "t",
            "e",
            ".",
          ].map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
