import React, { useRef, useEffect } from "react";
import './Navbar.css';
import { gsap } from "gsap";


const Navbar = ({ setShowMenu }) => {
    const navbarRef = useRef(null);
    useEffect(() => {
        if (navbarRef.current) {
            gsap.fromTo(navbarRef.current, {
                opacity: 0,
                x: "-100%",
            }, {
                duration: 0.2, 
                opacity: 1,
                x: "0%", 
                ease: "power3.inOut",
            });
        }
    }, []);
    
  return (
    <nav className="navbar" ref={navbarRef}>
        <div className='NavHeader'>
            <h1>Atelier Exavil</h1>
            <button className="close-btn" onClick={() => setShowMenu(false)}>CLOSE</button>
        </div>
    <div className='row'>
      <div className="column">
        <h2>OTHER THINGS I'VE MADE</h2>
        <ul>
          <li><a href="https://natozer.github.io" target="_blank" rel="noopener noreferrer">Aurora and Cephalus</a></li>
        </ul>
      </div>
      <div className="column">
        <h2>CONTACT</h2>
        <ul>
          <li>natozer@gmail.com</li>
        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
