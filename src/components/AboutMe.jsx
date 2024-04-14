import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../component_styles/AboutMe.css'
const AboutMe = () => {
  const waveTextRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      waveTextRef.current.children,
      { autoAlpha: 0, y: 20 },
      {
        duration: 3,
        autoAlpha: 1,
        y: 0,
        stagger: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: waveTextRef.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );

    
    gsap.fromTo(
      paragraphRef.current.children,
      { autoAlpha: 0, y: 20 },
      {
        duration: 3,
        autoAlpha: 1,
        y: 0,
        stagger: 0.6,
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
      <div ref={paragraphRef} className='intro'>
        <span>I'm a web developer from Miramichi, Canada.</span><span> I bring a wide range of front and back end skills to the table,</span> <span>and a relentless pursuit of perfection...</span>
      </div>
      <div ref={waveTextRef} className='Bold-Immersive-Memorable'>
        <span>I'm all about</span><span> Bold,</span> <span>Immersive,</span> <span> and Memorable.</span>
      </div>
    </div>
  );
};

export default AboutMe;
