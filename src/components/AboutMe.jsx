import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../component_styles/AboutMe.css';
import developerImage from '../assets/developer.jpg'; 

// Register GSAP plugins outside of the component
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const waveTextRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    // Animations for text elements
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
        duration: 4,
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
  
    gsap.fromTo(imageRef.current, 
      { autoAlpha: 0 }, 
      { duration: 4.5, autoAlpha: 1, ease: "power2.inOut" }
    );
    

  }, []);

  return (
    <div className="AboutMe">
      <div className="profile-section">
        <div ref={paragraphRef}>
          <span>I'm a web developer from Miramichi, Canada.</span>
          <span> I bring a wide range of front and back end skills to the table,</span>
          <span> and a relentless pursuit of perfection.</span>
        </div>
        <div className="image-container">
          <img ref={imageRef} src={developerImage} alt="Web Developer" />
          <span className="image-caption">Yeah that's me.</span>
        </div>
      </div>
      <div ref={waveTextRef} className='Bold-Immersive-Memorable'>
        <span>Modern,</span> <span> Memorable,</span> <span> and Hard-Hitting design.</span>
      </div>
    </div>
  );
  
};

export default AboutMe;
