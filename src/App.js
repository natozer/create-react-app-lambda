import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { gsap } from 'gsap';
import SnowScene from './components/SnowScene';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ContactMe from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);
  const [hasEnteredSite, setHasEnteredSite] = useState(false);

  const audioRef = useRef(new Audio('audio/neon-fury.mp3'));
  audioRef.current.loop = true;

  const contactRef = useRef(null);
  const splashScreenRef = useRef(null);

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
    document.body.classList.remove('no-scroll');
  };

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      {splashScreenVisible ? (
        <div className="splash-screen">
          <div className="button-container">
            <button onClick={handleEnterSite}>Enter Site</button>
          </div>
        </div>

      ) : (
        <>
          <SnowScene />
          <Header
            isPlaying={isPlaying}
            toggleMusic={toggleMusic}
            onContactClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
          />
          <Hero hasEnteredSite={hasEnteredSite} />
          <AboutMe />
          <Experience />
          <ContactMe ref={contactRef} />
        </>
      )}
      <div className="credits-button-container">
        <div className="credits-button">credits</div>
        <div className="credits-container">
          <span>Fonts are Road Rage, Neue Montreal, and 2049. Music by Umasha Pros from Pixabay. Wolf Howling by UNIVERSFIELD on Pixabay. Personal use only. No money is being made through this site.  </span>
        </div>
      </div>
    </div>
  );
}

export default App;
