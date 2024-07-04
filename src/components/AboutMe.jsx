import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../component_styles/AboutMe.css";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const waveTextRef = useRef(null);
  const waveTextRef2 = useRef(null);
  const paragraphRef = useRef(null);

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

    </div>
  );
};

export default AboutMe;
