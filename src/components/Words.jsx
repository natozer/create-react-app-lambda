import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../component_styles/Words.css";
import { ReactComponent as DownIcon } from "../assets/down.svg";

gsap.registerPlugin(ScrollTrigger);

const Words = () => {
  const words = ["Give", "Me", "A", "Job", "Please", "٩(◕‿◕)۶"];
  const wordsRef = useRef([]);

  useEffect(() => {
    gsap.utils.toArray(wordsRef.current).forEach((word, _index) => {
      ScrollTrigger.create({
        trigger: word,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(word, { color: "var(--secondary-color)", opacity: 1 });
        },
        onLeave: () => {
          gsap.to(word, { color: "rgba(0, 0, 0, 0.1)" });
        },
        onEnterBack: () => {
          gsap.to(word, { color: "var(--secondary-color)", opacity: 1 });
        },
        onLeaveBack: () => {
          gsap.to(word, { color: "rgba(0, 0, 0, 0.1)" });
        },
      });
    });
  }, []);

  return (
    <>
      <div className="WordsTitle">
        Let's cut to the chase
        <DownIcon />
      </div>
      <div className="words-container">
        {words.map((word, index) => (
          <h1
            key={index}
            ref={(el) => (wordsRef.current[index] = el)}
            className="word"
          >
            {word}
          </h1>
        ))}
      </div>
    </>
  );
};

export default Words;
