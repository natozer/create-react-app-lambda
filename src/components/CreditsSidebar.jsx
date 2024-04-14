import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CreditsSidebar = ({ setShowCredits }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        duration: 1,
        opacity: 1,
        ease: "power3.inOut",
      });
    }
  }, []);

  return (
    <div className="credits-sidebar" ref={sidebarRef}>
      <div className="credits-header">
        <h3>CREDITS</h3>
        <button onClick={() => setShowCredits(false)}>CLOSE</button>
      </div>
      <div className="credits-content">
        <h4>FONTS</h4>
        <ul>
          <li>Migra</li>
          <li>Neue Montreal</li>
        </ul>
        <h4>MUSIC</h4>
        <ul>
          <li>Oleg Kyrylkovv from Pixabay</li>
        </ul>
        <h4>BACKGROUND PAINTING</h4>
        <ul>
          <li>French Neoclassical School - Aurora and Cephalus, circa 1810</li>
        </ul>
        <h3>
          Personal use for a personal project only. I'm not making money off of
          this site.
        </h3>
      </div>
    </div>
  );
};

export default CreditsSidebar;
