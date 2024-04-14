import React, { forwardRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../component_styles/Contact.css'

const ContactMe = forwardRef((props, ref) => {
  gsap.registerPlugin(ScrollTrigger);

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

  return (
    <div ref={ref} className="Contact">
      <h1>GET IN TOUCH.</h1>
      <div className="contact-details">
        <a href="mailto:natozer@gmail.com" className="navlink">Contact Me</a>
        <a href="https://www.linkedin.com/in/natozer" className="navlink">LinkedIn</a>
        
      </div>
    </div>
  );
});

export default ContactMe;
