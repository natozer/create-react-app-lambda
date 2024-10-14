import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "../component_styles/Hero.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    gsap.set(scrollIndicatorRef.current, { autoAlpha: 1 });

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      onEnter: () => gsap.to(scrollIndicatorRef.current, { autoAlpha: 0 }),
      onLeave: () => gsap.to(scrollIndicatorRef.current, { autoAlpha: 1 }),
      onEnterBack: () => gsap.to(scrollIndicatorRef.current, { autoAlpha: 0 }),
      onLeaveBack: () => gsap.to(scrollIndicatorRef.current, { autoAlpha: 1 }),
      toggleActions: "play none none reverse"
    });
  }, []);

  return (
    <div ref={heroRef} className="Hero">
      <h2>FULL STACK</h2>
      <h1> Nathaniel<br />Tozer</h1>
      <h2>WEB DEVELOPER</h2>
      <div ref={scrollIndicatorRef} className="scroll-down">
        Scroll Down
      </div>
    </div>
  );
};

export default Hero;
