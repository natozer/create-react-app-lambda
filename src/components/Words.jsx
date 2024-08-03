import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../component_styles/Words.css";

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
        }
      });
    });
  }, []);

  return (
    <>
      <div className="WordsTitleContainer">
        <span className="WordsTitle">
          Let's cut to the chase   <svg
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
      <div className="words-container">
        {words.map((word, index) => (
          <h1
            key={index}
            ref={el => wordsRef.current[index] = el}
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
