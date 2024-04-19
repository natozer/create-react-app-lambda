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
          duration: 4,
          autoAlpha: 1,
          y: 0,
          stagger: 0.15,
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
            "I",
            ",",
            " ",
            "I",
            "'",
            "M",
            " ",
            <span key="nate" className="nate">
              N
              <span>a</span>
              <span>t</span>
              <span>e</span>
            </span>,
            ".",
          ].map((item, index) => (
            <span key={index} className="letter">
              {item}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}

export default Hero;
