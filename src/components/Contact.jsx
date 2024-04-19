import React, { forwardRef, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../component_styles/Contact.css';

const ContactMe = forwardRef((_props, ref) => {
  gsap.registerPlugin(ScrollTrigger);
  const audioRef = useRef(new Audio('audio/wolf-howling.mp3'));  

  useEffect(() => {
    gsap.fromTo(ref.current, 
      { autoAlpha: 0 }, 
      {
        duration: 1,
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom', 
          end: 'bottom top', 
          toggleActions: 'play none none reverse', 
        },
      }
    );
  }, [ref]);

  const handleMouseEnter = () => {
    audioRef.current.play();
  };



  return (
    <div ref={ref} className="Contact">
      <h1>GET IN TOUCH.</h1>
      <div className="contact-details">
        <a href="mailto:natozer@gmail.com"
           onMouseEnter={handleMouseEnter}>
          EMAIL ME
        </a>
      </div>
    </div>
  );
});

export default ContactMe;
