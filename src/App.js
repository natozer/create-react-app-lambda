import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { gsap } from 'gsap';
import SnowScene from './components/SnowScene';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ContactMe from './components/Contact';
import CreditsSidebar from './components/CreditsSidebar';
import Experience from './components/Experience';
import MobileMessage from './components/MobileMessage';
import Hero from './components/Hero';
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);
  const [hasEnteredSite, setHasEnteredSite] = useState(false);

  const audioRef = useRef(new Audio('music/new-age.mp3'));
  const contactRef = useRef(null);
  const splashScreenRef = useRef(null);

  audioRef.current.loop = true;

  const handleCreditsClick = () => {
    setShowCredits(!showCredits);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleEnterSite = () => {
    toggleMusic();
    gsap.to(splashScreenRef.current, { duration: 1, opacity: 0, onComplete: () => setSplashScreenVisible(false) });
    setHasEnteredSite(true); 
  };
  

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const handleResize = () => {
    const aspectRatioThreshold = 1.1;
    const aspectRatio = window.innerWidth / window.innerHeight;
    const isMobile = aspectRatio < aspectRatioThreshold;
    setIsMobile(isMobile);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('contextmenu', handleContextMenu);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className="App">
      <SnowScene />
      {isMobile ? (
        <MobileMessage />
      ) : (
        <>
          <Header
            isPlaying={isPlaying}
            toggleMusic={toggleMusic}
            onContactClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
            onCreditsClick={handleCreditsClick}
          />
<Hero hasEnteredSite={hasEnteredSite} />
          <AboutMe />
          <Experience />
          <ContactMe ref={contactRef} />
          {showCredits && <CreditsSidebar setShowCredits={setShowCredits} />}
        </>
      )}
      
      {splashScreenVisible && (
        <div ref={splashScreenRef} className="splash-screen">
          <button onClick={handleEnterSite}>⊱ ────── Enter Site ───── ⊰ </button>
        </div>
      )}
    </div>
  );
}

export default App;
